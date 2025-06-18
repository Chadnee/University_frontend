import type { ReactNode } from "react";
import { useAppSelector } from "../../features/hooks";
import { useCurrentToken } from "../../features/auth/authSlice";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({children}: {children:ReactNode}) => {
    //if we dont export the 'useCurrentToken; or 'useCurrentUser' from authSlice component then 
    // we can destructured token by useAppSelector instead of that.
    //const {token} = useAppSelector((state) => state.auth);
    
    const token = useAppSelector(useCurrentToken);
    console.log(token)
    if(!token) {
        return <Navigate to='/login' replace={true}></Navigate>
    }

  return children;
};

export default ProtectedRoute;