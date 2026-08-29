import { lazy } from "react"

const FacultyDashboard = lazy(() => import( "../pages/faculty/FacultyDashboard"))
const OfferedCourse = lazy(() => import( "../pages/faculty/OfferedCourse"))

export const facultyPaths = [
    {
        name: "Dashboard",
        path: "dashboard",
        element: <FacultyDashboard></FacultyDashboard>
    },
    {
        name: "Offered Course",
        path: "offered_course",
        element: <OfferedCourse></OfferedCourse>
    }
]