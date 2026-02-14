import { Button, Row } from "antd";
import { type FieldValues } from "react-hook-form";
import { useLoginMutation } from "../features/auth/authApi";
import { useAppDispatch } from "../features/hooks";
import { setUser, type TUser } from "../features/auth/authSlice";
import { verifyToken } from "../utils/verifyToken";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import AdmitForm from "./form/AdmitForm";
import InputForm from "./form/InputForm";

const Login = () => {
  // const {register, handleSubmit} = useForm({});
  // const { handleSubmit} = useForm({});
  const [login] = useLoginMutation();
  const dispatch = useAppDispatch();
  const navigate = useNavigate(); //to implement redirect

  // console.log('data', data)
  // console.log('error', error)

  const onSubmit = async (data: FieldValues) => {
    //toast.loading('Logging in')
    //   When we make direct toast.loading like above it make a override to next toast message,
    //  thats why when we make in a const and set it with next toast success then it occur sequentially one by one
    //  according to duration and also have to provide the error both
    const toastId = toast.loading('Logging in')
    console.log(data);

    try{
       const userInfo = {
      id: data.userId,
      password: data.password
    };
    const res = await login(userInfo).unwrap();
    const user = verifyToken(res.data.accessToken) as TUser;
    console.log(user)
    dispatch(setUser({user: user, token: res.data.accessToken}))
    toast.success('Logged in', {id: toastId, duration: 2000}) // every toast has a own 'id' property which indicate itself and set its own to occur siquentially one by one.
    
     if(res.data.needsPasswordChange){
      navigate('/change-password');
    } else {
       navigate(`/${user.role}/dashboard`) //redirect dashboard according to role after loggin
    }
    // {id: 'stfhh', password: 'hjgjvfty'}
    } catch(err) {
       toast.error('Something went wrong', {id: toastId, duration: 2000}) //have to set error both together as success together
       console.log(err)
    }
  };
  return (
  <Row justify="center" align="middle" style = {{height: '100vh'}}>
      <AdmitForm onSubmit={onSubmit} >
      <InputForm type="text" name="userId" label="Id"></InputForm>
      <InputForm type="text" name="password" label="Password"></InputForm>
      <Button htmlType="submit">Login</Button>
    </AdmitForm>
  </Row>
    //   <form onSubmit={handleSubmit(onSubmit)}>
    // <label htmlFor="id">Id:</label>
    //   <input type="text" id="id" {...register('userId')}/>
    //    <label htmlFor="password">Password</label>
    //      <input type="text" id="password" {...register('password')}/> */}
    //      </form>
  );
};

export default Login;
