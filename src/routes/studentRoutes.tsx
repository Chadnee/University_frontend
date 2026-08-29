import { lazy } from "react"

const Course = lazy(() => import("../pages/student/Course"))
const OfferedCourse = lazy(() => import("../pages/student/OfferedCourse"))
const StudentDashboard = lazy(() => import("../pages/student/StudentDashboard"))

export const studentPaths = [
    {
        name: "Dashboard",
        path: "dashboard",
        element: <StudentDashboard></StudentDashboard>
    },
    {
        name: "Courses",
        path: "courses",
        element: <Course></Course>
    },
    {
        name: "Offered Course",
        path: "offered_course",
        element: <OfferedCourse></OfferedCourse>
    }
]