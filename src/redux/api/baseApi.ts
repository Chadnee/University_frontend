/* eslint-disable @typescript-eslint/no-explicit-any */
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { RootState } from "../../features/store";
import { logOut, setUser } from "../../features/auth/authSlice";
import type { BaseQueryApi, BaseQueryFn, DefinitionType, FetchArgs } from "@reduxjs/toolkit/query";
import { toast } from "sonner";


const baseQuery = fetchBaseQuery({
    //set credential to get refresh token in cookies, also make "credentials: true" in backend cors origin 
    baseUrl: 'http://localhost:5000/api/v1' ,credentials: 'include',
    //add preparedHeaders from redux toolkit to get token to set authorization in headers tab
    prepareHeaders: (headers, {getState}) => {
       const token = (getState() as RootState).auth.token;
       console.log(token)
       if(token) {
         headers.set('Authorization',`${token}`);
       }
       return headers;
    },
    })
    
    //custom base query
    //it is an extra support to catch the backend error such as access token expired
    const baseQueryWithRefreshToken : BaseQueryFn<
    FetchArgs, 
    BaseQueryApi, 
    DefinitionType>= async(args ,api ,extraOptions):Promise<any> => {
      let result = await baseQuery(args, api, extraOptions);
      console.log(result) //this result will show the backend error with error message
     
      //if user will be not found
      if(result.error?.status === 404) {
        toast.error(result.error.data.message);
        }
    
      //when access token will be expired/ non-authorized
      if(result.error?.status === 401) {
      //send refresh token
      console.log('sending refresh token');
      const res = await fetch('http://localhost:5000/api/v1/auth/refreshToken', {
        method: 'POST',
        credentials: 'include'  // Refresh token is not in our hand, it stay in cookie, since we can access coockie to get refresh token thats why it must add a crediantials true as 'include', it will send the coockie in backend 
      })
      const data = await res.json();

    if(data.data.accessToken){
        // get the user by getState and set user and refreshtoken as accessToken by dispatch 
        const user = (api.getState() as RootState).auth.user;

        api.dispatch(
          setUser({
            user,
            token: data.data.accessToken
          })
        )
        //after failing again set basequery
        result = await baseQuery(args, api, extraOptions);

       console.log(data);
    } else {
      api.dispatch(logOut())// if no access token get by refresh token that means refresh token is also expired, it will cick out the user and log out, no way then without manually login
    }
     }
     console.log(result)
     return result
    }
export const baseApi = createApi({
 reducerPath: 'baseApi',
 baseQuery: baseQueryWithRefreshToken,
 tagTypes: ['semester','courses', 'assignFaculties'],
 endpoints: () => ({
//  endpoints: (builder) => ({
    // login: builder.mutation({
    //     query:(userInfo) => ({
    //         url: 'auth/login',
    //         method: 'POST',
    //         body: userInfo
    //     })
    // })
 })
})