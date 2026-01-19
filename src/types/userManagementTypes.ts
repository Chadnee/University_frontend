import type { TAcademicDepartment, TAcademicSemester } from "./academicManagementTypes"

export type TName = {
  firstName: string
  middleName: string
  lastName: string
  _id: string
}

export type TGuardian = {
  fatherName: string
  fatherOccupation: string
  fatherContactNo: string
  motherName: string
  motherOccupation: string
  motherContactNo: string
  _id: string
}

export type TLocalGuardian = {
  name: string
  occupation: string
  contactNo: string
  address: string
  _id: string
}

export type TStudent = {
  _id: string
  id: string
  user: string
  name: TName
  gender: string
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
  academicFaculty: string
  isDeleted: boolean
}