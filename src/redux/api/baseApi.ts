import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { RootState } from "../../features/store";
import { setUser } from "../../features/auth/authSlice";


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
    
    //it is an extra support to catch the backend error such as access token expired
    const baseQueryWithRefreshToken = async(args ,api ,extraOptions) => {
      const result = await baseQuery(args, api, extraOptions);
      console.log(result) //this result will show the backend error with error message
     
      if(result.error?.status === 401) {
      //send refresh token
      console.log('sending refresh token');
      const res = await fetch('http://localhost:5000/api/v1/auth/refreshToken', {
        method: 'POST',
        credentials: 'include'
      })
      const data = await res.json();

      //set get the user by getState and set user and refreshtoken as accessToken by dispatch 
        const user = (api.getState() as RootState).auth.user;

        api.dispatch(
          setUser({
            user,
            token: data.data.accessToken
          })
        )

       console.log(data);
     }
     return result
    }
export const baseApi = createApi({
 reducerPath: 'baseApi',
 baseQuery: baseQueryWithRefreshToken,
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