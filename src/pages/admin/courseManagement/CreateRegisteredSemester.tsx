import { Flex } from "antd";
import { useGetAllSemestersQuery } from "../../../features/admin/academicManagementApi";
import AdmitForm from "../../form/AdmitForm";
import SelectForm from "../../form/SelectForm";
import { semesterStatusOptions } from "../../constants/semester";
import DatePickerInput from "../../form/DatePicker";
import InputForm from "../../form/InputForm";
import type { FieldValues, SubmitHandler } from "react-hook-form";
import { toast } from "sonner";
import { useCreateRegisteredSemesterMutation } from "../../../features/admin/courseManagementApi";
import type { TResponse } from "../../constants/global";
import { ResetButton, SubmitButton } from "../../../components/Footer";

const CreateRegisteredSemester = () => {

  const {data: academicSemester} = useGetAllSemestersQuery([
    { name:'sort', value:'year'},
  ]);
  const [createRegisteredSemester] = useCreateRegisteredSemesterMutation()

  const academicSemesterOptions = academicSemester?.data?.map(item => ({
    value: item._id,
    label: `${item.name} ${item.year}`
  })) 
  
  const onSubmit : SubmitHandler<FieldValues> = async(data) => {
    const toastId = toast.loading('Creating...');

    const semesterData = {
      ...data,
      minCredit: Number(data.minCredit),
      maxCredit: Number(data.maxCredit)
      
    } 
    console.log(semesterData)

    try{
       const res = (await createRegisteredSemester(semesterData)) as TResponse<any>
       console.log(res);
       if(res.error){
        toast.error(res.error.data.message, {id:toastId})
       } else {
        toast.success('Semester is Registered', {id: toastId})
       }
    
      }catch(error){
      toast.error('Something went wrong', {id: toastId, duration: 1000})
    }
  }
  
  return (
        <div>
          <span style={{fontSize: "25px", fontWeight:"700"}}>Create Registered Semester</span>
       
           <Flex  style={{marginTop:"25px"}}>
     <AdmitForm onSubmit={onSubmit}>
          <SelectForm options={academicSemesterOptions} label="Academic Semester" name="academicSemester"></SelectForm>
          <SelectForm options={semesterStatusOptions} label="Status" name="status"></SelectForm>
          <DatePickerInput name="startDate" label="Start Date"></DatePickerInput>
          <DatePickerInput name="endDate" label="End Date"></DatePickerInput>
          <InputForm type="text" name="minCredit" label="Min Credit" placeholder="Provide a minimum credit ..."></InputForm>
          <InputForm type="text" name="maxCredit" label="Max Credit" placeholder="Provide a maximum credit ..."></InputForm>
          
          <Flex gap={15} justify="end" align="center" style={{padding:"30px 0"}}>
                      <SubmitButton type="submit" submitButton="Register Course"></SubmitButton>
                      <ResetButton resetButton="Reset"></ResetButton>
                             
                              </Flex>
        </AdmitForm>
           </Flex>
          </div>
  );
};

export default CreateRegisteredSemester;
