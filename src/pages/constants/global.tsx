import type { BaseQueryApi } from "@reduxjs/toolkit/query";
import type { TAcademicSemester } from "../../types/academicManagementTypes";
import { DiJavascript } from "react-icons/di";
import { RiReactjsLine } from "react-icons/ri";
import { FaQrcode } from "react-icons/fa6";
import { BiLogoMongodb, BiLogoTypescript } from "react-icons/bi";
import { TbBrandMongodb, TbBrandTypescript } from "react-icons/tb";
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
export type TSemester = {
  _id: string;
  academicSemseter: TAcademicSemester;
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





