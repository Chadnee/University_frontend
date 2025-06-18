import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
 reducerPath: 'baseApi',
 baseQuery: fetchBaseQuery({
    //set credential to get refresh token in cookies, also make "credentials: true" in backend cors origin 
    baseUrl: 'http://localhost:5000/api/v1' ,credentials: 'include',}),
    
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