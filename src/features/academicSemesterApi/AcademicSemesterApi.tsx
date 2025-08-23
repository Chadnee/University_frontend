import { baseApi } from "../../redux/api/baseApi";

const academicSemesterApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getAllSemesters: builder.query({
            query: () => ({ //if we send any data then a parameter will be taken here and thats will set as a property named 'body' after 'method'
                url: '/academic-semesters',
                method: 'GET',
            })
        })
    })
})

export const {useGetAllSemestersQuery} = academicSemesterApi;