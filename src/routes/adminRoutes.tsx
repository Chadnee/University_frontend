import { Children, type ReactNode } from "react";
import AdminDashboard from "../pages/admin/AdminDashboard";
import CreateAdmin from "../pages/admin/CreateAdmin";
import CreateFaculty from "../pages/admin/CreateFaculty";
import CreateStudent from "../pages/admin/CreateStudent";
import AcademicSemester from "../pages/admin/academicManagement/AcademicSemester";



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
                path: "academic-semester",
                element: <AcademicSemester></AcademicSemester>
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
