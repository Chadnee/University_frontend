
export type TAcademicFaculty = {
  _id: string
  name: string
  createdAt: string
  updatedAt: string
  __v: number
}

export type TAcademicDepartment =  {
  _id: string
  name: string
  academicFaculty: TAcademicFaculty
  createdAt: string
  updatedAt: string
  __v: number
}

//for creating a semester(not registered) and it is added in TSemester in global.ts
export type TAcademicSemester = {
  _id: string
  name: string
  code: string
  year: string
  startMonth: string
  endMonth: string
  createdAt: string
  updatedAt: string
}