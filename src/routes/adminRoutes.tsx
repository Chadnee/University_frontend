
import { lazy } from "react";
// const AcademicFaculty = lazy(() => import("../pages/admin/academicManagement/AcademicFaculty"));
const AcademicFaculty  = lazy(() => import("../pages/admin/academicManagement/AcademicFaculty"));
const AcademicSemesterApi = lazy(() => import( "../pages/admin/academicManagement/AcademicSemester"));
const AccademicDepartment = lazy(() => import( "../pages/admin/academicManagement/AccademicDepartment"));
const CreateAccademicDepartment = lazy(() => import( "../pages/admin/academicManagement/CreateAccademicDepartment"));
const CreateAccademicFaculty = lazy(() => import( "../pages/admin/academicManagement/CreateAccademicFaculty"));
const CreateAccademicSemester = lazy(() => import( "../pages/admin/academicManagement/CreateAccademicSemester"));
const AdminDashboard = lazy(() => import( "../pages/admin/AdminDashboard/AdminDashboard"));
const Courses = lazy(() => import( "../pages/admin/courseManagement/Courses"));
const CreateCourse = lazy(() => import( "../pages/admin/courseManagement/CreateCourse"));
const CreateofferedCourse = lazy(() => import( "../pages/admin/courseManagement/CreateofferedCourse"));
const CreateRegisteredSemester = lazy(() => import( "../pages/admin/courseManagement/CreateRegisteredSemester"));
const OfferedCourse = lazy(() => import( "../pages/admin/courseManagement/OfferedCourse"));
const RegisteredSemester = lazy(() => import( "../pages/admin/courseManagement/RegisteredSemester"));
const Admin = lazy(() => import( "../pages/admin/userManagement/Admin"));
const CreateAdmin = lazy(() => import( "../pages/admin/userManagement/CreateAdmin"));
const CreateFaculty = lazy(() => import( "../pages/admin/userManagement/CreateFaculty"));
const CreateStudent = lazy(() => import( "../pages/admin/userManagement/CreateStudent"));
const Faculty = lazy(() => import( "../pages/admin/userManagement/Faculty"));
const Student = lazy(() => import( "../pages/admin/userManagement/Student"));
// import StudentDetails from "../pages/admin/userManagement/StudentDetails";
import {
  ApartmentOutlined,
  BookOutlined,
  UserOutlined,
  PlusCircleOutlined,
  CalendarOutlined,
  BankOutlined,
  SolutionOutlined,
  IdcardOutlined,
  ScheduleOutlined,
  ReadOutlined,
  UsergroupAddOutlined,
  TeamOutlined,
  HomeFilled
} from "@ant-design/icons";
export const adminPaths = [
  {
    name: "Dashboard",
    path: "dashboard",
    element: <AdminDashboard></AdminDashboard>,
    icon: <HomeFilled />,
  },
  {
    name: "Accademic Management",
    icon: <ApartmentOutlined />,
    children: [
      {
        name: "Accademic Semester",
        path: "get-all-accSemester",
        icon: <CalendarOutlined/>,
        element: <AcademicSemesterApi></AcademicSemesterApi>,
      },
      {
        name: "Create Acc. Semeseter",
        icon: <PlusCircleOutlined />,
        path: "create-acc-semester",
        element: <CreateAccademicSemester></CreateAccademicSemester>,
      },
      {
        name: "Accademic Department",
        path: "get-all-accDepartment",
        icon: <BankOutlined/>,
        element: <AccademicDepartment></AccademicDepartment>,
      },
      {
        name: "Create Acc. Department",
        icon: <PlusCircleOutlined />,
        path: "create-acc-department",
        element: <CreateAccademicDepartment></CreateAccademicDepartment>,
      },
      {
        name: "Accademic Faculty",
        path: "get-all-accFaculty",
        icon:<TeamOutlined/>,
        element: <AcademicFaculty></AcademicFaculty>,
      },
      {
        name: "Create Acc. Faculty",
        path: "create-acc-faculty",
        icon: <PlusCircleOutlined />,
        element: <CreateAccademicFaculty></CreateAccademicFaculty>,
      },
    ],
  },
  {
    name: "User Management",
    icon:<UsergroupAddOutlined/>,
    children: [
      {
        name: "Admin",
        path: "admin",
        icon: <UserOutlined />,
        element: <Admin></Admin>,
      },
      {
        name: "Create Admin",
        path: "create-admin",
        icon: <PlusCircleOutlined />,
        element: <CreateAdmin></CreateAdmin>,
      },
      {
        name: "Faculty",
        path: "faculty",
        icon: <SolutionOutlined />,
        element: <Faculty></Faculty>,
      },
      {
        name: "Create Faculty",
        path: "create-faculty",
        icon: <PlusCircleOutlined />,
        element: <CreateFaculty></CreateFaculty>,
      },
      {
        name: "Student",
        path: "student",
        icon: <IdcardOutlined />,
        element: <Student></Student>,
      },
      // {
      //   path: "student/:id",
      //   element: <StudentDetails></StudentDetails>,
      // },
      {
        name: "Create Student",
        path: "create-student",
        icon: <PlusCircleOutlined />,
        element: <CreateStudent></CreateStudent>,
      },
    ],
  },

  {
    name: "Course Management",
    icon: <BookOutlined />,
    children: [
      {
        name: "Create Reg. Semester",
        path: "create-reg-semester",
        icon: <PlusCircleOutlined />,
        element: <CreateRegisteredSemester></CreateRegisteredSemester>,
      },
      {
        name: "Registered Semester",
        path: "registered-semesterd",
        icon: <ScheduleOutlined />,
        element: <RegisteredSemester></RegisteredSemester>,
      },
      {
        name: "Courses",
        path: "courses",
        icon: <PlusCircleOutlined />,
        element: <Courses></Courses>,
      },
      {
        name: "Create Courses",
        path: "create-courses",
        icon: <PlusCircleOutlined />,
        element: <CreateCourse></CreateCourse>,
      },
      {
        name: "Offered Courses",
        path: "offered-courses",
        icon: <ReadOutlined />,
        element: <OfferedCourse></OfferedCourse>,
      },
      {
        name: "Create offered Course",
        path: "create-offered-course",
        icon: <PlusCircleOutlined />,
        element: <CreateofferedCourse></CreateofferedCourse>,
      },
    ],
  },
];
