import type { TOfferedCourse, TQueriParam, TResponse, TResponseRedux } from "../../pages/constants/global";
import { baseApi } from "../../redux/api/baseApi";

const studentCourseManagementApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getMyOfferedCourse: builder.query({
      query: (args) => {
        console.log(args);
        const params = new URLSearchParams();
        if (args) {
          args.forEach((item: TQueriParam) => {
            params.append(item.name, item.value as string);
          });
        }
        return {
          url: "/offered-courses/my-offered-courses",
          method: "GET",
          params: params,
        };
      },
      transformResponse: (response:TResponseRedux<TOfferedCourse>) => {
        return {
            data: response.data,
            meta: response.meta
        }
      }, 
      providesTags: ['offeredCourse']
    }),

   createEnrolement : builder.mutation({
    query: (data) => ({
          url : '/course-enrollment/create-enrollment',
          method: "POST",
          body: data
    }),
    invalidatesTags: ['enrolledCourse']
   }),

   getMyEnrolledCourse : builder.query ({
    query: (args) => {
        const params = new URLSearchParams();
        if (args){
            args.forEach((item : TQueriParam) => {
                params.append(item.name, item.value as string)
            });
        }
        return {
            url: '/course-enrollment/my-enrolled-course',
            method: 'Get',
            params: params
        }
    },
      transformResponse: (response:TResponseRedux<TOfferedCourse>) => {
        return {
            data: response.data,
            meta: response.meta
        }
      }, 
      providesTags: ['enrolledCourse']
   })

  }),
});

export const { 
    useGetMyOfferedCourseQuery,
    useCreateEnrolementMutation,
    useGetMyEnrolledCourseQuery,
   } = studentCourseManagementApi;
