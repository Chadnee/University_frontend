import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import About from "../pages/About";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Contact from "../pages/Contact";
import { adminPaths} from "./adminRoutes";
import { RoutesGenerator } from "../utils/RoutesGenerater";
import { facultyPaths } from "./facultyRoutes";
import { studentPaths } from "./studentRoutes";
import ProtectedRoute from "../components/layout/ProtectedRoute";
import ChangePassword from "../pages/ChangePassword";
import MainLayout from "../components/layout/MainLayout";

const router = createBrowserRouter([
    {
        path:'/',
        element:<App></App>,
        children: [
            {
                path:'about',
                element:<About></About>
            },
            {
                path:'contact',
                element:<Contact></Contact>,
            },
            {
                path: 'change-password',
                element: <ChangePassword></ChangePassword>
            }
        ]
    },
    {
        path:'/admin',
        // element:<AdminLayout></AdminLayout>,
        element:<ProtectedRoute role="admin"><MainLayout></MainLayout></ProtectedRoute>,
        children: RoutesGenerator(adminPaths)
    },
    {
        path:'/faculty',
        element:<ProtectedRoute role="faculty"><MainLayout></MainLayout></ProtectedRoute>,
        children:RoutesGenerator(facultyPaths)
    },
    {
        path: '/student',
        element:<ProtectedRoute role="student"><MainLayout></MainLayout></ProtectedRoute>,
        children: RoutesGenerator(studentPaths)
    },
    {
        path:'/login',
        element:<Login></Login>,
    },
   
    {
        path:'/registre',
        element:<Register></Register>
    },
    
])

export default router;