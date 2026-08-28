import { Button, Divider, Flex} from "antd";
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
import { useState } from "react";
import image from "../assets/images/loginImage.png"
import { FiUser } from "react-icons/fi";
import { MdLockOutline } from "react-icons/md";

const Login = () => {
  // const {register, handleSubmit} = useForm({});
  // const { handleSubmit} = useForm({});
  const {isMobile, isTablet, isSmallDesktop, isLargeDesktop, isLaptop} = useResponsive()
  const [demoValues, setDemoValues] = useState<Record<string, string> | undefined>(undefined)
  const [login] = useLoginMutation();
  const dispatch = useAppDispatch();
  const navigate = useNavigate(); //to implement redirect
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  // console.log('data', data)
  // console.log('error', error)
 
  const handleDemoUser= () => {
    setDemoValues({
      userId: "A-0001",
      password: "12345678"
    })
  }
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
          <div style={{ 
            // height: isMobile?"50vh":isTablet?"50vh":"65vh", width:isMobile?"100vw":isTablet?"85vw":"50vw", 
            width:"100%", height:"100vh",
            display:'flex' , flexDirection:isMobile || isTablet?"column": "row", justifyContent:"center", alignItems:"center"}}>
           <figure style={{width:isLargeDesktop || isLaptop || isSmallDesktop?"60%" : "100%", height:"100%", boxSizing: "border-box",padding: isMobile||isTablet? "16px": ""}}>
             <img src={image} style={{width:"100%", height:"100%", objectFit:"cover",}} alt="" />
           </figure>
            <div style={{width:"100%", height:"100%", padding:'20px', boxSizing: "border-box"}}>
               <Flex vertical gap={20} justify="center" align="center" style={{background: "#fff", 
  width:isMobile||isTablet||isLaptop?"100%" : "60%",boxSizing: "border-box", height:"100%", margin:isLargeDesktop||isSmallDesktop?"auto":"0",}}>
      <div><MdLockOutline style={{background:"#fff5e3", color:"#d08c0c", padding:"13px", borderRadius:"50%", fontSize:"32px", fontWeight:"800px"}}></MdLockOutline></div>
      <span
            className="font-heading-stylish"
            style={{
              textTransform: "capitalize",
              fontWeight: 600,
              fontSize: "30px",
            }}
          >
           log in to your accpunt
          </span>
          <span
            style={{
              textTransform: "capitalize",
              fontSize: "17px",
              color:"#7b7777"
            }}
          >
           enter your credentials to access your dashboard
          </span>
      <div style={{width:"100%"}}>
        <AdmitForm onSubmit={onSubmit} defaultValues={demoValues}>
        <InputForm type="text" name="userId" label="User Id" placeholder="Id" prefixIcon={<FiUser style={{color:"#7e7d7d", fontSize:"18px"}}/>}></InputForm>
        <InputForm isPassword={true} type="password" label="Password" name="password" prefixIcon={<MdLockOutline style={{color:"#7e7d7d", fontSize:"18px"}}/>} placeholder="Enter a Password" ></InputForm>
        <div style={{display:"flex", justifyContent:"center"}}>
           
           
           <Button htmlType="submit" style={{height:"40px", fontSize: "15px",
                              borderRadius: "10px",
                              background: "#ce8908",
                              border: "none",
                              color: "#fff6f6",
                              width: "100%",
                              display: "flex",
                              justifyContent: "center",
                              alignItems: "center",
                              gap: "15px",}}>
            <span>Login</span>
            <LuLogIn style={{ fontSize: "19px", position: "relative", top: "2px" }} ></LuLogIn>
            </Button>
            
           
        </div>
        
      </AdmitForm>
      </div>
       <Divider style={{fontSize:'20px', paddingBottom:"0"  ,fontWeight:600, textAlign: 'center'}}><span style={{fontSize:"14px",fontWeight:400, color:"#a7a3a3"}}>Or</span></Divider>
       <Button onClick={handleDemoUser} style={{height:"40px", fontSize: "15px",
                              borderRadius: "10px",
                              background: "#fff",
                              border: "1px solid #737070",
                              color: "#000",
                              width: "60%",
                              display: "flex",
                              justifyContent: "center",
                              alignItems: "center",
                              gap: "15px",}}>Log in as demo user
                              </Button>
    </Flex>
            </div>
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
