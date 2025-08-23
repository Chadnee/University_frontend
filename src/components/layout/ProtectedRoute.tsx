import type { ReactNode } from "react";
import { useAppSelector } from "../../features/hooks";
import { selectCurrentToken } from "../../features/auth/authSlice";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({children}: {children:ReactNode}) => {
    //if we dont export the 'selectCurrentToken; or 'useCurrentUser' from authSlice component then 
    // we can destructured token by useAppSelector instead of that.
    //const {token} = useAppSelector((state) => state.auth);
    
    const token = useAppSelector(selectCurrentToken);
    console.log(token)
    if(!token) {
        return <Navigate to='/login' replace={true}></Navigate>
    }

  return children;
};

export default ProtectedRoute;