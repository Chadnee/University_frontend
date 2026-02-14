import type { FieldValues, SubmitHandler } from "react-hook-form";
import AdmitForm from "../../form/AdmitForm";
import SelectForm from "../../form/SelectForm";
import { Flex } from "antd";
import { semesterOptions } from "../../constants/semester";
import { monthOptions, type TError } from "../../constants/global";
import { zodResolver } from "@hookform/resolvers/zod";
import { academicSemesterSchema } from "../../../schema/academicManagement.schema";
import { useAddAcademicSemesterMutation } from "../../../features/admin/academicManagementApi";
import { toast } from "sonner";
import { ResetButton, SubmitButton } from "../../../components/Footer";
import { CiCalendarDate } from "react-icons/ci";
import { IoIosArrowDown } from "react-icons/io";

const currentYear = new Date().getFullYear();
const yearOptions = [0,1,2,3,4].map((number) => (
  {
    value: String(currentYear + number),
    label: String(currentYear + number)
  }
))

const CreateAccademicSemester = () => {
      const [addAcademicSemester] = useAddAcademicSemesterMutation();

    const onSubmit:SubmitHandler<FieldValues> = async(data) => {
        console.log(data)
        const name = semesterOptions[Number(data?.name) -1]?.label;
        //         = nameOptions[Number(01 -1)]?.label //in here data.name willbe value submitted from the object
        //         = nameOptions[0]?.label
        //         = Autumn
        const semesterData = {
          name,
          code: data.name,
          year: data.year,
          startMonth: data.startMonth,
          endMonth: data.endMonth
        }
        try {
            console.log(semesterData)
            const result = await addAcademicSemester(semesterData);
            
            if(result.error){
              const err = result.error as TError
              toast.error(err.data.message)
            } else {
                toast.success("semester created")
            }
        }catch(error:unknown){
                 const err = error as { data?: { message?: string } };
                console.log(err.data?.message)
                    toast.error("Something went wrong")
              }
     }
    
  return (
       <div>
         <span style={{fontSize: "25px", fontWeight:"700"}}>Create Academic Semester</span>
           <Flex vertical justify="space-between" style={{marginTop:"25px"}}>
          {/* <Card style={{boxShadow: "0 10px 25px rgba(0,0,0,0.1)",border:".7px solid #d7dce5ff", marginTop:"20px"}}> */}
       <AdmitForm onSubmit={onSubmit} resolver={zodResolver(academicSemesterSchema)}>
          <SelectForm label="Semester Name" suffixIcon={<IoIosArrowDown style={{fontSize:"20px", color:'#000'}}/>} name="name" options={semesterOptions}></SelectForm>
           {/* value of the 'nameOptions' object will be submitted and the label will be show in dopdown in ui */}
          <SelectForm suffixIcon={<CiCalendarDate style={{fontSize:"20px", color:"black"}}/>} label="Academic Year" name="year" options={yearOptions}></SelectForm>
          <SelectForm label="Start Month" suffixIcon={<IoIosArrowDown style={{fontSize:"20px", color:'#000'}}/>}  name="startMonth" options={monthOptions}></SelectForm>
          <SelectForm label="End Month" suffixIcon={<IoIosArrowDown style={{fontSize:"20px", color:'#000'}}/>} name="endMonth" options={monthOptions}></SelectForm>
        
      <Flex gap={15} justify="end" align="center" style={{padding:"40px 0"}}>
          <SubmitButton type="submit" submitButton="Create Submit"></SubmitButton>
          <ResetButton resetButton="Reset"></ResetButton>

        </Flex>

     </AdmitForm>
   {/* </Card> */}

       </Flex >
       </div>
    
  );
};

export default CreateAccademicSemester;