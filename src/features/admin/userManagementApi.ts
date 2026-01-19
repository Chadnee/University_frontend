import type { TQueriParam } from "../../pages/constants/global";
import { baseApi } from "../../redux/api/baseApi";
import { data} from 'react-router-dom';

const userManagementApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createStudent: builder.mutation({
      query: (data) => ({
        url: "/users/create-student",
        method: "POST",
        body: data,
      }),
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
    }
}),

    createAdmin : builder.mutation ({
      query: (data) => ({
        url: "/users/create-admin",
        method: "POST",
        body: data,
      })
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
          method: "POST",
          body: data,
        }
      }
    })

  }),
});



export const {
  useCreateStudentMutation,
  useGetAllStudentQuery,
  useGetsingleStudentQuery,
  useCreateFacultyMutation,
  useGetAllFacultyQuery,
  useCreateAdminMutation,
  useGetAllAdminQuery
} = userManagementApi;
