import AcademicFaculty from "../pages/admin/academicManagement/AcademicFaculty";
import AcademicSemesterApi from "../pages/admin/academicManagement/AcademicSemester";
import AccademicDepartment from "../pages/admin/academicManagement/AccademicDepartment";
import CreateAccademicDepartment from "../pages/admin/academicManagement/CreateAccademicDepartment";
import CreateAccademicFaculty from "../pages/admin/academicManagement/CreateAccademicFaculty";
import CreateAccademicSemester from "../pages/admin/academicManagement/CreateAccademicSemester";
import AdminDashboard from "../pages/admin/AdminDashboard";
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
import StudentDetails from "../pages/admin/userManagement/StudentDetails";

export const adminPaths = [
    {
        name: "Dashboard",
        path: 'dashboard',
        element: <AdminDashboard></AdminDashboard>
    } ,
    {
        name: "Accademic Management",
        children: [
           
            {
                name: 'Accademic Semester',
                path: 'get-all-accSemester',
                element: <AcademicSemesterApi></AcademicSemesterApi>
            },
             {
                name: 'Create Acc. Semeseter',
                path: 'create-acc-semester',
                element: <CreateAccademicSemester></CreateAccademicSemester>
            },
             {
                name: 'Accademic Department',
                path: 'get-all-accDepartment',
                element:<AccademicDepartment></AccademicDepartment>
             },
            {
                name: 'Create Acc. Department',
                path: 'create-acc-department',
                element: <CreateAccademicDepartment></CreateAccademicDepartment>
            },
            {
                name: 'Accademic Faculty',
                path: 'get-all-accFaculty',
                element:<AcademicFaculty></AcademicFaculty>
             },
            {
                name: 'Create Acc. Faculty',
                path: 'create-acc-faculty',
                element: <CreateAccademicFaculty></CreateAccademicFaculty>
            }
        ]
    } ,
    {
        name: "User Management",
        children: [
            
            {
                name: 'Admin',
                path: 'admin',
                element:<Admin></Admin>,
            },
            {
                name: 'Create Admin',
                path: 'create-admin',
                element: <CreateAdmin></CreateAdmin>,
            },
            {
                name: 'Faculty',
                path: 'faculty',
                element: <Faculty></Faculty>
            },
            {
                name: 'Create Faculty',
                path: 'create-faculty',
                element: <CreateFaculty></CreateFaculty>
            },
            {
                name: "Student",
                path: 'student',
                element: <Student></Student>
            },
            {
                path: 'student/:id',
                element: <StudentDetails></StudentDetails>
            },
            {
                name: "Create Student",
                path: 'create-student',
                element: <CreateStudent></CreateStudent>
            }
        ]

    },

    {
        name: "Course Management",
        children: [
            {
                name: 'Create Reg. Semester',
                path: 'create-reg-semester',
                element: <CreateRegisteredSemester></CreateRegisteredSemester>
            },
            {
                name: 'Registered Semester',
                path: 'registered-semesterd',
                element: <RegisteredSemester></RegisteredSemester>
            },
            {
                name: 'Courses',
                path: 'courses',
                element:<Courses></Courses>
            },
            {
                name: 'Create Courses',
                path: 'create-courses',
                element: <CreateCourse></CreateCourse>
            },
            {
                name: 'Offered Courses',
                path: 'offered-courses',
                element: <OfferedCourse></OfferedCourse>
            },
            {
                name: 'Create offered Course',
                path: 'create-offered-course',
                element: <CreateofferedCourse></CreateofferedCourse>
            }
        ]
    }
]


