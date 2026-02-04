import type { TAllUser, TQueriParam, TResponseRedux } from "../../pages/constants/global";
import { baseApi } from "../../redux/api/baseApi";

const userManagementApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createStudent: builder.mutation({
      query: (data) => ({
        url: "/users/create-student",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ['allUser','userStats','student']
    }),

    getAllStudent: builder.query({
      query: (args) => {
        const params = new URLSearchParams();
        if (args) {
          args.forEach((item: TQueriParam) => {
            params.append(item.name, item.value as string);
          });
        }
        return {
          url: "/students",
          method: "GET",
          params: params,
        };
      },
      providesTags: ['student']
    }),

    getsingleStudent: builder.query({
      query: (id) => ({
        url: `/students/${id}`,
        method: "GET",
      }),
    }),

    createFaculty: builder.mutation({
      query: (data) => ({
        url: "/users/create-faculty",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ['allUser','userStats','faculty']
    }),

    getAllFaculty: builder.query({
    query: (args) => {
      const params = new URLSearchParams();
      if(args) {
        args.forEach((item: TQueriParam) => {
           params.append(item.name, item.value as string )
        });
      }
      return {
        url : '/faculties',
        method: "GET",
        params: params
      }
    },
    providesTags: ['faculty']
}),

    createAdmin : builder.mutation ({
      query: (data) => ({
        url: "/users/create-admin",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ['allUser','userStats','admin']
    }),

    getAllAdmin: builder.query({
      query: (args) => {
        const params = new URLSearchParams();
        if(args) {
           args.forEach((item : TQueriParam) => {
            params.append(item.name, item.value as string)
           });
        }
        return {
          url: '/admins',
          method: "Get",
          params: params
        }
      },
      providesTags: ['admin']
    }),

    changePassword: builder.mutation ({
      query: (data) => ({
        url: '/auth/change-password',
        method: "POST",
        body: data
      })
    }),

    getAllUsers: builder.query({
      query: (args) => {
        const params = new URLSearchParams()
        if(args){
          args.forEach((item : TQueriParam) => {
            params.append(item.name, item.value as string)
          });
        }
        return {
          url : '/users',
          method: 'GET',
          params: params
        }
      },
      providesTags: ['allUser'],
      transformResponse: (response: TResponseRedux <TAllUser>) => {
         return {
           meta: response.meta,
           data:response.data
         }
      }

    }),

    getAllCountedTotalUsers: builder.query({
      query: () => ({
         url : '/users/total-users',
         method: 'GET'
      }),
       providesTags: ['allUser','userStats']
    }),
    
    GetMe: builder.query({
      query: () => ({
        url: `/users/me`,
        method: "GET",
      })

    }),

   

  }),
});



export const {
  useCreateStudentMutation,
  useGetAllStudentQuery,
  useGetsingleStudentQuery,
  useCreateFacultyMutation,
  useGetAllFacultyQuery,
  useCreateAdminMutation,
  useGetAllAdminQuery,
  useGetAllUsersQuery,
  useGetAllCountedTotalUsersQuery,
  useChangePasswordMutation,
  useGetMeQuery,
} = userManagementApi;
