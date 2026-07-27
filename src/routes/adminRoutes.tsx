import AcademicFaculty from "../pages/admin/academicManagement/AcademicFaculty";
import AcademicSemesterApi from "../pages/admin/academicManagement/AcademicSemester";
import AccademicDepartment from "../pages/admin/academicManagement/AccademicDepartment";
import CreateAccademicDepartment from "../pages/admin/academicManagement/CreateAccademicDepartment";
import CreateAccademicFaculty from "../pages/admin/academicManagement/CreateAccademicFaculty";
import CreateAccademicSemester from "../pages/admin/academicManagement/CreateAccademicSemester";
import AdminDashboard from "../pages/admin/AdminDashboard/AdminDashboard";
import Courses from "../pages/admin/courseManagement/Courses";
import CreateCourse from "../pages/admin/courseManagement/CreateCourse";
import CreateofferedCourse from "../pages/admin/courseManagement/CreateofferedCourse";
import CreateRegisteredSemester from "../pages/admin/courseManagement/CreateRegisteredSemester";
import OfferedCourse from "../pages/admin/courseManagement/OfferedCourse";
import RegisteredSemester from "../pages/admin/courseManagement/RegisteredSemester";
import Admin from "../pages/admin/userManagement/Admin";
import CreateAdmin from "../pages/admin/userManagement/CreateAdmin";
import CreateFaculty from "../pages/admin/userManagement/CreateFaculty";
import CreateStudent from "../pages/admin/userManagement/CreateStudent";
import Faculty from "../pages/admin/userManagement/Faculty";
import Student from "../pages/admin/userManagement/Student";
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
