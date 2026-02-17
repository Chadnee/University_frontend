import type { TAcademicDepartment, TAcademicFaculty, TAcademicSemester } from "./academicManagementTypes"


//Types for student
export type TName = {
  firstName: string
  middleName: string
  lastName: string
}

export type TGuardian = {
  fatherName: string
  fatherOccupation: string
  fatherContactNo: string
  motherName: string
  motherOccupation: string
  motherContactNo: string
}

export type TLocalGuardian = {
  name: string
  occupation: string
  contactNo: string
  address: string
}

export type TStudent = {
  id: string
  user: string
  name: TName
  gender: "male" | "female" | "other"
  dateOfBirth: string
  email: string
  contactNo: string
  emergencyContactInfo: string
  bloodGroup: string
  presentAddress: string
  permanentAddress: string
  guardian: TGuardian
  localGuardian: TLocalGuardian
  profileImage: string
  admissionSemester: TAcademicSemester
  academicDepartment: TAcademicDepartment
  // academicFaculty: string
  // isDeleted: boolean
}
export type TCreateStudentPayload = {
  password: string,
  student: TStudent;
}

//Types for Faculty

export type TFaculty = {
  _id: string
  id: string
  designation: string
  name: string
  user: string
  gender: "male" | "female" | "other"
  dateOfBirth: string
  email: string
  contactNo: string
  emergencyContactNo: string
  presentAddress: string
  permanentAddress: string
  profileImage: string
  academicDepartment: TAcademicDepartment
  academicFaculty: TAcademicFaculty
}

export type TCreateFaculty = Omit<TFaculty, '_id'>

export type TCreateFacultyPayload = {
  password: string
  faculty: TCreateFaculty
}

//types for Admin 

export type TAdmin = {
  _id: string
  name: string
  id: string
  designation: string
  gender: "male" | "female" | "other"
  dateOfBirth: string
  email: string
  contactNo: string
  emergencyContactNo: string
  user: string
  presentAddress: string
  permanentAddress: string
  profileImage: string
  managementDepartment: string
  isDeleted: boolean
  createdAt: string
  updatedAt: string
}

export type TCreateAdminPayload = {
  password: string
  admin: TAdmin
}
