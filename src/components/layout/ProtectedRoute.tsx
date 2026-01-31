import type { ReactNode } from "react";
import { useAppDispatch, useAppSelector } from "../../features/hooks";
import { logOut, selectCurrentToken, selectCurrentUser, type TUser } from "../../features/auth/authSlice";
import { Navigate } from "react-router-dom";
import { verifyToken } from "../../utils/verifyToken";

type TProtectedRoute = {
  children: ReactNode;
  role: string | undefined;
}

const ProtectedRoute = ({children, role}: TProtectedRoute) => {
    //if we dont export the 'selectCurrentToken; or 'useCurrentUser' from authSlice component then 
    // we can destructured token by useAppSelector instead of that.
    //const {token} = useAppSelector((state) => state.auth);
    
    const token = useAppSelector(selectCurrentToken);
    //const user = useAppSelector(selectCurrentUser) 
    
    //we dont take user.role by this storage method, because it is not 
    // preferd for professional ,if we call it in here , it can be hacked as this stored by persisted in cookie and anyone can get this 
    //so we get the current user by token verify and decoded.. token generating
    let user;
    if(token) {
      user = verifyToken(token)
    } 
    //console.log(user)
    const dispatch = useAppDispatch()

    console.log(token)
    if(!token) {
        return <Navigate to='/login' replace={true}></Navigate>
    }
    if(role !== undefined &&  role !== (user as TUser)?.role){
       dispatch(logOut())
      return <Navigate to= 'login' replace={true}></Navigate>
    }

  return children;
};

export default ProtectedRoute;