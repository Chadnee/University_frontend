import { Button, Row } from "antd";
import { type FieldValues } from "react-hook-form";
import { useLoginMutation } from "../features/auth/authApi";
import { useAppDispatch } from "../features/hooks";
import { setUser, type TUser } from "../features/auth/authSlice";
import { verifyToken } from "../utils/verifyToken";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import AdmitForm from "./form/AdmitForm";
import InputForm from "./form/InputForm";
import useResponsive from "../hooks/useResponsive";
import { LuLogIn } from "react-icons/lu";

const Login = () => {
  // const {register, handleSubmit} = useForm({});
  // const { handleSubmit} = useForm({});
  const {isMobile} = useResponsive()
  const [login] = useLoginMutation();
  const dispatch = useAppDispatch();
  const navigate = useNavigate(); //to implement redirect
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  // console.log('data', data)
  // console.log('error', error)

  const onSubmit = async (data: FieldValues) => {
    //toast.loading('Logging in')
    //   When we make direct toast.loading like above it make a override to next toast message,
    //  thats why when we make in a const and set it with next toast success then it occur sequentially one by one
    //  according to duration and also have to provide the error both
    const toastId = toast.loading("Logging in");
    // console.log(data);

    try{
    const userInfo = {
      id: data.userId,
      password: data.password,
    };
    const res = await login(userInfo).unwrap();
      if (res.success === true) {
          const user = verifyToken(res.data.accessToken) as TUser;
          //console.log(user)
          dispatch(setUser({ user: user, token: res.data.accessToken }));
          toast.success("Logged in", { id: toastId, duration: 2000 }); // every toast has a own 'id' property which indicate itself and set its own to occur siquentially one by one.
          console.log(res, user);
          if (res.data.needsPasswordChange) {
            navigate("/change-password");
          }
          // else {
          //    navigate(`/${user.role}/dashboard`) //redirect dashboard according to role after loggin
          // }
          else {
            navigate(from, { replace: true }); //redirect dashboard according to role after loggin
          }
      }
        else {
           console.log("something went wrong")
        }
    // {id: 'stfhh', password: 'hjgjvfty'}
    }
    catch (err: unknown) {
  console.log("login error:", err);

  let message = "Something went wrong";

  if (typeof err === "object" && err !== null) {
    const e = err as { data?: { message?: string }; message?: string };

    message =
      e.data?.message ||
      e.message ||
      message;
  }


       toast.error(message, {id: toastId, duration: 2000}) //have to set error both together as success together

    }
    // try{
    //    const userInfo = {
    //   id: data.userId,
    //   password: data.password
    // };
    // const res = await login(userInfo).unwrap();
    // const user = verifyToken(res.data.accessToken) as TUser;
    // //console.log(user)
    // dispatch(setUser({user: user, token: res.data.accessToken}))
    // toast.success('Logged in', {id: toastId, duration: 2000}) // every toast has a own 'id' property which indicate itself and set its own to occur siquentially one by one.
    // console.log(res , user)
    //  if(res.data.needsPasswordChange){
    //   navigate('/change-password');
    // }
    // // else {
    // //    navigate(`/${user.role}/dashboard`) //redirect dashboard according to role after loggin
    // // }
    // else {
    //    navigate(from, {replace: true}) //redirect dashboard according to role after loggin
    // }
    // // {id: 'stfhh', password: 'hjgjvfty'}
    // } catch(err:any) {
    //   console.log("login error:", err)

    //    toast.error(
    //     err?.data?.message || err?.message || 'Something went wrong', {id: toastId, duration: 2000}) //have to set error both together as success together

    // }
  };
  return (
    <div   style={{
    minHeight: "100vh",   // full screen height
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    
  }}>
          <div style={{ height: isMobile?"50vh":"65vh", width:isMobile?"100vw":"50vw", display:'flex' , flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
           <Row justify="center" align="middle" style={{background: "#d5cab5",
borderRadius: "8px",
boxShadow: "0 10px 30px rgba(0,0,0,0.1)",padding:isMobile?"0 10px": "0 80px", width:"100%", height:"100%"}}>
      <AdmitForm onSubmit={onSubmit}>
        <InputForm type="text" name="userId" placeholder="Id"></InputForm>
        <InputForm type="text" name="password" placeholder="Password"></InputForm>
        <div style={{display:"flex", justifyContent:"center"}}>
           <Button htmlType="submit" style={{height:"40px", width:"150px", borderRadius:"4px", border:"none", fontSize:"19px", display:"inline-flex", justifyContent:"center", alignItems:"center", gap:"5px",}}>
            <span>Login</span>
            <LuLogIn style={{ fontSize: "19px", position: "relative", top: "2px" }} ></LuLogIn>
            </Button>
        </div>
        
      </AdmitForm>
    </Row>
     </div>
  </div>

    //   <form onSubmit={handleSubmit(onSubmit)}>
    // <label htmlFor="id">Id:</label>
    //   <input type="text" id="id" {...register('userId')}/>
    //    <label htmlFor="password">Password</label>
    //      <input type="text" id="password" {...register('password')}/> */}
    //      </form>
  );
};

export default Login;
