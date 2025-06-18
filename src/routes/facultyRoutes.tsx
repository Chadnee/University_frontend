import FacultyDashboard from "../pages/faculty/FacultyDashboard";
import OfferedCourse from "../pages/faculty/OfferedCourse";

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