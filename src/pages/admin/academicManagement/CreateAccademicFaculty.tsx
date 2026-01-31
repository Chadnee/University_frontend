import {Flex } from "antd";
import InputForm from "../../form/InputForm";
import AdmitForm from "../../form/AdmitForm";
import type { FieldValues } from "react-hook-form";
import { useCreateAccademicFacultyMutation } from "../../../features/admin/academicManagementApi";
import { toast } from "sonner";
import { ResetButton, SubmitButton } from "../../../components/Footer";
import useResponsive from "../../../hooks/useResponsive";

export type TAccdemicFaculty = {
    name: string
}
const CreateAccademicFaculty = () => {
  const {isMobile} = useResponsive()
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
        <div>
              <span style={{fontSize: "25px", fontWeight:"700"}}>Create Faculty Department</span>
         
             <Flex  style={{marginTop:"25px"}}>
                  <AdmitForm onSubmit={onSubmit}>
                        <InputForm type="text" name="name" label="Faculty Name" placeholder="Provide a name ..."/>
                         <Flex gap={15} justify="end" align="center" style={{padding:"30px 0", marginTop:isMobile? "20px": "100px" }}>
                                  <SubmitButton type="submit" submitButton="Create Faculty"></SubmitButton>
                                  <ResetButton resetButton="Reset"></ResetButton>
                        
                         </Flex>
                  </AdmitForm>
             </Flex>
                   </div>
  );
};

export default CreateAccademicFaculty;
