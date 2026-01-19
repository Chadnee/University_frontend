import { Button, Col, Flex } from "antd";
import Typography from "antd/es/typography/Typography";
import InputForm from "../../form/InputForm";
import AdmitForm from "../../form/AdmitForm";
import type { FieldValues } from "react-hook-form";
import { useCreateAccademicFacultyMutation } from "../../../features/admin/academicManagementApi";
import { toast } from "sonner";

export type TAccdemicFaculty = {
    name: string
}
const CreateAccademicFaculty = () => {
  const { Title } = Typography;
  const [CreateAccademicFaculty] = useCreateAccademicFacultyMutation()

  const onSubmit = async (data: FieldValues) => {
    console.log(data)
    const toastId = toast.loading("Faculty is creating")
   try {
       const accdemicFacultyData = {
        name: data.name
    }

    const result = await CreateAccademicFaculty(accdemicFacultyData)
    if(result.error) {
        toast.error(result.error.data.message, {id:toastId, duration:1000})
    }
     else{
        toast.success("Accademic Faculty is createad successfully", {id:toastId, duration:1000})
     }

   }catch(error){
      toast.error("Something went wrong", {id:toastId, duration:1000})
   }

  }
  return (
    <Flex justify="center" align="center">
      <Col span={8}>
        <Title level={2}>Create a Academic Faculty</Title>
        <AdmitForm onSubmit={onSubmit}>
            <InputForm type="text" name="name" label="Faculty Name"></InputForm>
            <Button htmlType="submit">Create</Button>
        </AdmitForm>
      </Col>
    </Flex>
  );
};

export default CreateAccademicFaculty;
