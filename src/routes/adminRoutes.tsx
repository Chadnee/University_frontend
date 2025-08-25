import { Children, type ReactNode } from "react";
import AdminDashboard from "../pages/admin/AdminDashboard";
import CreateAdmin from "../pages/admin/userManagement/CreateAdmin";
import CreateFaculty from "../pages/admin/userManagement/CreateFaculty";
import CreateStudent from "../pages/admin/userManagement/CreateStudent";
import AcademicSemester from "../pages/admin/academicManagement/AcademicSemester";
import CreateAccademicSemester from "../pages/admin/academicManagement/CreateAccademicSemester";



export const adminPaths = [
    {
        name: "Dashboard",
        path: "dashboard",
        element:<AdminDashboard></AdminDashboard>
    },
    {
        name: "Academic Management",
        children: [
            {
                name:"Academic Semester",
                path: "academic-semester",
                element: <AcademicSemester></AcademicSemester>
            },
            {
                name:"Create Acc. Department",
                path: "academic-semester",
                element: <AcademicSemester></AcademicSemester>
            },
            {
                name:"Create Acc. Semester",
                path: "create-semester",
                element: <CreateAccademicSemester></CreateAccademicSemester>
            },
            {
                name:"Create Acc. Fcaulty",
                path: "academic-semester",
                element: <AcademicSemester></AcademicSemester>
            },

        ]
    },
    {
        name: "User Management",
        children: [
            {
                name:'Create Admin',
                path:"create-admin",
                element: <CreateAdmin></CreateAdmin>
            },
            {
                name:'Create Faculty',
                path:"create-faculty",
                element: <CreateFaculty></CreateFaculty>
            },
            {
                name:'Create Student',
                path:"create-student",
                element: <CreateStudent></CreateStudent>
            }
        ]
    }
];
