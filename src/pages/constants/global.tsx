import type { BaseQueryApi } from "@reduxjs/toolkit/query";
import type { TAcademicDepartment, TAcademicFaculty, TAcademicSemester } from "../../types/academicManagementTypes";
import { DiJavascript } from "react-icons/di";
import { RiReactjsLine } from "react-icons/ri";
import { FaQrcode } from "react-icons/fa6";
import { TbBrandMongodb, TbBrandTypescript } from "react-icons/tb";
import type { TFaculty, TName, TStudent } from "../../types/userManagementTypes";
export const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "September",
  "October",
  "November",
  "August",
  "December"
];

export const genders = ["male", "female", "other"];

export const bloodGroups = ["A+","A-","B+","B-","AB+","AB-","O+","O-"];

export const weekDays = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];


export const monthOptions = monthNames.map((item) =>({
    value: item,
    label: item
}))

export const gendersOptions = genders.map((item) =>({
  value: item,
  label: item
}))

export const bloodGroupsOptions = bloodGroups.map((item) => ({
  value: item,
  label: item
}))

export const weekDaysOptions = weekDays.map((item) => ({
  value: item,
  label: item
}))


export type TError = {
  data: {
    message: string;
    stack: string;
    success: boolean;
  };
  status: number;
};

export type TMeta = {
  page: number;
  limit: number;
  total: number;
  totalPage: number;
}

export type TResponse<T> = {
  data?: T;
  error?: TError;
  meta?: TMeta;
  success:boolean;
  message: string
}

export type TResponseRedux<T> = TResponse<T> & BaseQueryApi;

export type TQueriParam = {
  name: string,
  value: boolean | React.Key
}

export type TAllUser = {
  _id: string
  id: string
  email: string
  needsPasswordChange: boolean
  role: string
  status: string
  isDeleted: boolean
  createdAt: string
  updatedAt: string
  passWordChangedAt: string
}

//it is for registerd semester which semester is registered aslo
export type TSemester = {
  _id: string;
  academicSemester: TAcademicSemester;
  status: string;
  startDate: string;
  endDate: string;
  minCredit: number;
  maxCredit: number;
  createdAt: string;
  updatedAt: string
}

export type TPreRequisiteCourse = {
  course: string;
  isDeleted: boolean
}
export type TCourse = {
  _id: string;
  title: string;
  prefix: string;
  code: number;
  credits: number;
  isDeleted: boolean;
  preRequisiteCourses: TPreRequisiteCourse[];
};

export type TFacultyWithCourse = {
    _id: string
  course: string
  faculties: TFaculty[]
  __v: number
}

export type TOfferedCourse = {
    _id: string
  semesterRegistration: string
  academicSemester: string
  academicFaculty: string
  academicDepartment: string
  course: TCourse
  faculty: string
  maxCapacity: number
  section: number
  days: string[]
  startTime: string
  endTime: string
  isDeleted: boolean
  __v: number
  enrolledCourses: any[]
  completedCourses: any[]
  completedCourseIds: any[]
  isPreRequisitesFulFilled: boolean
  isAlreadyEnrolled: boolean
}

export type TMyEnrollement = {
  _id: string
  semesterRegistration: TSemesterRegistration
  academicSemester: TAcademicSemester
  academicDepartment: TAcademicDepartment
  academicFaculty: TAcademicFaculty
  offeredCourse: TOfferedCourse
  course: TCourse
  student: TStudent
  faculty: TFaculty
  isEnrolled: boolean
  courseMarks: CourseMarks
  grade: string
  gradePoints: number
  isCompleted: boolean
}

export type TSemesterRegistration = {
  _id: string
  academicSemester: string
  status: string
  startDate: string
  endDate: string
  minCredit: number
  maxCredit: number
  isDeleted: boolean
  createdAt: string
  updatedAt: string
  __v: number
}

export type CourseMarks = {
  classTest1: number
  midTerm1: number
  classTest2: number
  finalTerm: number
  _id: string
}

export type TEnrolledState = {
  _id: string
  student: string
  createdAt: string
  email: string
  lastUpdated: string
  studentId: string
  totalEnrolledCourses: number
  updatedAt: string
  gender: string
  name: TName
  academicDepartment: TAcademicDepartment
}

export type TOption = {
  value: string;
  label: string;
};

export const classImageArray = [
  "https://plus.unsplash.com/premium_photo-1661963290501-4c1d7a095c0c?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://media.istockphoto.com/id/1376134616/photo/focus-on-girl-young-school-kids-in-uniform-applauding-or-clapping-at-classroom-concept-of.webp?a=1&b=1&s=612x612&w=0&k=20&c=ONtFuVNgV0iUSnHLY_EB9b5HwlRBcchCNBA4oHiuFqQ=",
  "https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://media.istockphoto.com/id/2183417968/photo/rear-view-of-business-colleagues-attending-a-seminar-in-board-room.jpg?s=612x612&w=0&k=20&c=Ttx19Jr9_sDt36sIIEAMAA42-HXC1a-UEW1UI89hK3E="
]
export const buttonBgColor = [
  "linear-gradient(90deg, #45a5f3ff, #0760c5ff)",
  "linear-gradient(90deg, #f87c07ff, #d00000)",
  "linear-gradient(90deg, #febe1eff, #f48c06)", 
  "linear-gradient(90deg, #7fb089ff, #3a8b30ff)"
]
export const buttonColors = ['#0acf52ff','#e7b025ff','#dc5009ff' ]

// courseProgressData.ts
export const skills = [

  {
    key: "javascript",
    label: "JavaScript",
    percent: 85,
    color:  {
    '0%': '#febe1eff',
    '100%': '#f48c06',
  },
    iconColor: "#f48c06",
    trailColor:"#e6f4ff",
    rating: 4.2,
    icon: <DiJavascript/>
  },
  {
    key: "React-Redux",
    label: "React-Re",
    percent: 88,
    color:   {
    '0%': '#7fb089ff',
    '100%': '#3a8b30ff',
  },
    iconColor: "#3a8b30ff",
    trailColor:"#e6f4ff",
    rating: 4.5,
    icon:<RiReactjsLine/>
  },
 {
    key: "node",
    label: "Node.js",
    percent: 78,
    color:  {
    '0%': '#f87c07ff',
    '100%': '#e46d0bff',
  },
    iconColor: "#f06c20ff",
    trailColor:"#e6f4ff",
    rating: 4,
    icon:<FaQrcode/>
  },
 {
    key: "mongodb",
    label: "MongoDB",
    percent: 82,
    color: {
    '0%': '#45a5f3ff',
    '100%': '#0760c5ff',
  },
    iconColor: "#0760c5ff ",
    trailColor:"#e6f4ff",
    rating: 4.1,
    icon:<TbBrandMongodb/>
  },
 {
    key: "typescript",
    label: "TypeScript",
    percent: 76,
    color:  {
    '0%': '#7fb089ff',
    '100%': '#3a8b30ff',
  },
    iconColor: "#3a8b30ff",
    trailColor:"#e6f4ff",
    rating: 4,
    icon:<TbBrandTypescript/>
  },

];





