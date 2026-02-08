import Course from "../pages/student/Course";
import OfferedCourse from "../pages/student/OfferedCourse";
import StudentDashboard from "../pages/student/StudentDashboard";

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