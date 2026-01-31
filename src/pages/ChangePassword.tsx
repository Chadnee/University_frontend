import { Button, Col, Row } from "antd";
import AdmitForm from "./form/AdmitForm";
import InputForm from "./form/InputForm";
import type {FieldValues, SubmitHandler } from "react-hook-form";
import { useChangePasswordMutation } from "../features/admin/userManagementApi";
import { useAppDispatch } from "../features/hooks";
import { logOut } from "../features/auth/authSlice";
import { useNavigate } from "react-router-dom";

const ChangePassword = () => {
    const [ChangePassword] = useChangePasswordMutation();
    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    const onSubmit : SubmitHandler<FieldValues>= async(data) => {
       console.log(data)
       const res = await ChangePassword(data) ;
       if(res?.data?.success) {
          dispatch(logOut());
          navigate('/login')
       }
    }
  return (
   <Row justify="center">
      <Col span="12">
      <AdmitForm onSubmit={onSubmit}>
         <InputForm type="text" name="oldPassword" label="Old Password"></InputForm>
         <InputForm type="text" name="newPassword" label="New Password"></InputForm>
      <Button htmlType="submit">Login</Button>
      </AdmitForm>
      </Col>
   </Row>
  );
};

export default ChangePassword;