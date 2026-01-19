import type {
  TAcademicSemester,
  TQueriParam,
  TResponse,
  TResponseRedux,
} from "../../pages/constants/global";
import { baseApi } from "../../redux/api/baseApi";

const academicManagementApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    addAcademicSemester: builder.mutation({
      query: (data) => ({
        url: "/academic-semesters/create-academic-semester",
        method: "POST",
        body: data,
      }),
    }),

    getAllSemesters: builder.query({
      query: (args) => {
        //if we send any data then a parameter will be taken here and thats will set as a property named 'body' after 'method'
        const params = new URLSearchParams();

        if (args) {
          args.forEach((item: TQueriParam) => {
            params.append(item.name, item.value as string);
          });
        }
        return {
          url: "/academic-semesters",
          method: "GET",
          params: params,
        };
      },
      transformResponse: (response: TResponseRedux<TAcademicSemester>) => {
        console.log(response);
        return {
          data: response.data,
          meta: response.meta,
        };
      },
    }),

    createAccademicDepartment: builder.mutation({
      query: (data) => ({
        url: "/academic-department/create-academic-department",
        method: "POST",
        body: data
      })
    }),

    getAllAccademicDepartment: builder.query({
      query: () => ({
        url: "/academic-department",
        method: "GET",
      })
    }),

    CreateAccademicFaculty: builder.mutation({
      query: (data) => ({
        url: "/academic-faculty/create-academic-faculty",
        method: "POST",
        body: data,
      }),
    }),

    getAllAccademicFaculty: builder.query({
        query: () => ({
            url: "/academic-faculty",
            method: "GET"
        })
    })
  }),
});

export const {
  useAddAcademicSemesterMutation,
  useGetAllSemestersQuery,
  useCreateAccademicDepartmentMutation,
  useGetAllAccademicDepartmentQuery,
  useCreateAccademicFacultyMutation,
  useGetAllAccademicFacultyQuery,
} = academicManagementApi;
