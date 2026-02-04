import { Flex, Spin } from "antd";
import { useCreateAccademicDepartmentMutation, useGetAllAccademicFacultyQuery } from "../../../features/admin/academicManagementApi";
import AdmitForm from "../../form/AdmitForm";
import InputForm from "../../form/InputForm";
import SelectForm from "../../form/SelectForm";
import { ResetButton, SubmitButton } from "../../../components/Footer";
import type { FieldValues, SubmitHandler } from "react-hook-form";
import { toast } from "sonner";
import useResponsive from "../../../hooks/useResponsive";

const CreateAccademicDepartment = () => {
      const {data: academicFaculty, isLoading: isacademicFacultyLoading} = useGetAllAccademicFacultyQuery(undefined);
      const [createAcademicSemester] = useCreateAccademicDepartmentMutation()

      const {isMobile} = useResponsive()
      const facultyOptions = academicFaculty?.data?.map(item =>( {
      value : item._id,
      label: item.name
      }))
    
     if(!academicFaculty || isacademicFacultyLoading){
            return (
              <Flex  justify="center" align="center" style={{ height: "80vh" }}>
                   <div style={{ color: "#608cd3ff" }}>
                    <Spin size="medium" />
                   </div>
              </Flex>
            )
     }
      const onSubmit : SubmitHandler<FieldValues> = async(data) =>{
          try{
             const res =  await createAcademicSemester(data) 
             if(res.error){
              toast.error(res.error.data.message)
             } else {
              toast.success("Department is created")
             }

          } catch(err){
            console.log(err)
            toast.error("Something went wrong")
          }
      }

  return (
    
              <div>
                <span style={{fontSize: "25px", fontWeight:"700"}}>Create Academic Department</span>
    
        <Flex  style={{marginTop:"25px"}}>
             <AdmitForm onSubmit={onSubmit}>
                   <InputForm type="text" name="name" label="Department Name" placeholder="Provide a name ..."/>
                   <SelectForm name="academicFaculty" label="Academic Faculty" disabled={isacademicFacultyLoading}
                      options={facultyOptions}/>

                   <Flex gap={15} justify="end" align="center" style={{padding:"30px 0", marginTop:isMobile? "20px": "100px" }}>
                             <SubmitButton type="submit" submitButton="Create Department"></SubmitButton>
                             <ResetButton resetButton="Reset"></ResetButton>
                   
                    </Flex>
             </AdmitForm>
        </Flex>
              </div>
  );
};

export default CreateAccademicDepartment;