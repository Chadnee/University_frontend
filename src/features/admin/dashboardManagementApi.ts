
//For Admin Dashboard

import { baseApi } from "../../redux/api/baseApi";

const dashboardManagementApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
    
     getStudentEnrolledStatus : builder.query({
            query: () => ({
                url: "/course-enrollment/student-enrollment-stats",
                method: "GET"
            })
        }),

     getvisitorState: builder.query({
      query: () => ({
        url: "/users/visitors",
        method: "GET"
      })
      }),


    })
})

export const {
useGetStudentEnrolledStatusQuery,
useGetvisitorStateQuery,
} 
= dashboardManagementApi;