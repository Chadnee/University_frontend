import type {
  TAcademicSemester,
  TQueriParam,
  TResponse,
  TResponseRedux,
} from "../../pages/constants/global";
import { baseApi } from "../../redux/api/baseApi";
import type { TAcademicDepartment } from "../../types/academicManagementTypes";

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
      }),
      invalidatesTags: ['allDepartment'],
    }),

    getAllAccademicDepartment: builder.query({
      query: (args) => {
        const params = new URLSearchParams;
        if(args){
          args.forEach((item) => {
            params.append(item.name, item.value as string)
          });
        } return {
          url:"/academic-department",
          method:"GET",
          params:params
        }
      }, 
      providesTags: ['allDepartment'],
      transformResponse: (response: TResponseRedux <TAcademicDepartment>) => {
               console.log(response)
        return {
                 meta: response.meta,
                 data:response.data
               }
            }
    }),

    updateDepartment: builder.mutation({
      query:(data) => ({
        url: `/academic-department/updated/${data.department_id}`,
        method:"PATCH",
        body: data.body
      }),
     invalidatesTags: ['allDepartment'],

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
  useUpdateDepartmentMutation,
  useCreateAccademicFacultyMutation,
  useGetAllAccademicFacultyQuery,
} = academicManagementApi;
