import { Button } from "antd";
import { useForm } from "react-hook-form";
import { useLoginMutation } from "../features/auth/authApi";
import { useAppDispatch } from "../features/hooks";
import { setUser } from "../features/auth/authSlice";
import { verifyToken } from "../utils/verifyToken";

const Login = () => {
  const {register, handleSubmit} = useForm({});
  const [login, {data, error}] = useLoginMutation()
  const dispatch = useAppDispatch();
 // console.log('data', data)
  // console.log('error', error)

  const onSubmit = async (data) => {
    console.log('d',data)

    const userInfo = {
      id: data.userId,
      password: data.password
    };
    const res = await login(userInfo).unwrap();
    const user = verifyToken(res.data.accessToken);
    console.log(user)
    dispatch(setUser({user: user, token: res.data.accessToken}))
    // {id: 'stfhh', password: 'hjgjvfty'}
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="id">Id:</label>
        <input type="text" id="id" {...register('userId')}/>
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input type="text" id="password" {...register('password')}/>
      </div>
      <Button htmlType="submit">Login</Button>
    </form>
  );
};

export default Login;