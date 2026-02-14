
import type { TCourse, TQueriParam, TResponseRedux, TSemester } from "../../pages/constants/global";
import { baseApi } from "../../redux/api/baseApi";
const coureManagementApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({

      createRegisteredSemester: builder.mutation ({
        query : (data) => ({
             url: "/semester-registration/create-semsester-registration",
             method: 'POST',
             body: data
        }),
        invalidatesTags: ['semester']
      }),

      getRegisteredSemester: builder.query({
        query: (args) => {
            const params = new URLSearchParams();
            if(args) {
                args.forEach((item : TQueriParam)=> {
                    params.append(item.name, item.value as string)  
                });
            }
            return {
                url:"/semester-registration",
                method: "GET",
                params: params
            }
        },
        providesTags : ['semester'],
        transformResponse: (response: TResponseRedux<TSemester[]>) => {
            return {
                data: response.data,
                meta: response.meta
            }
        }
      }),

      updateRegisteredSemester: builder.mutation({
        query: (args) => ({
            url: `/semester-registration/${args.id}`,
            method: 'PATCH',
            body: args.data,
        }),
        invalidatesTags: ['semester']
      }),

     createCourse: builder.mutation({
        query: (data) => ({
            url: "/courses/create-course",
            method: "POST",
            body: data
        }),
        invalidatesTags: ['courses']
     }),

     getAllCourse: builder.query({
        query: (args) => {
             const params = new URLSearchParams();
             if(args){
                args.forEach((item:TQueriParam) => {
                    params.append(item.name, item.value as string)
                });
             }
             return {
                url: "/courses/",
                method: "Get",
                params: params
             }
        },
        providesTags:['courses'],
        transformResponse: (response: TResponseRedux<TCourse[]>) => {
          return {
            data: response.data,
            meta: response.meta
          }
        }
     }),

     CreateAssignFaculties: builder.mutation ({
        query: (args) => {
            console.log(args) 
            return{
            url:`/courses/${args.course_Id}/assign-faculties`,
            method: "PUT",
            body: args.data
        }},
        invalidatesTags: ['assignFaculties']
     }),

   getAllAssignFaculties:builder.query({
    query: (courseId) => ({
         url: `/courses/${courseId}/get-faculties`,
         method: "GET"
    }),
    providesTags: ['assignFaculties']
   }),

   createOfferedCourse : builder.mutation ({
    query: (data) => ({
        url: "/offered-courses/create-offered-course",
        method: "POST",
        body: data
    }),
    invalidatesTags: ["offeredCourse"]
   }),

   getAllOfferedCourse: builder.query ({
    query: () => ({
        url: "/offered-courses",
        method: "GET",

    }),
    providesTags: ["offeredCourse"]
   })

})
})


export const 
{useCreateRegisteredSemesterMutation,
 useGetRegisteredSemesterQuery,
 useUpdateRegisteredSemesterMutation,
 useCreateCourseMutation,
 useGetAllCourseQuery,
 useCreateAssignFacultiesMutation,
 useGetAllAssignFacultiesQuery,
 useCreateOfferedCourseMutation,
 useGetAllOfferedCourseQuery
} 
= coureManagementApi