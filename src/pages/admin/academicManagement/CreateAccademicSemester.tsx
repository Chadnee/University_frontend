import type { FieldValues, SubmitHandler } from "react-hook-form";
import AdmitForm from "../../form/AdmitForm";
import SelectForm from "../../form/SelectForm";
import { Button, Col, Flex } from "antd";
import { semesterOptions } from "../../constants/semester";
import { monthOptions } from "../../constants/global";
import { zodResolver } from "@hookform/resolvers/zod";
import { academicSemesterSchema } from "../../../schema/academicManagement.schema";
import { useAddAcademicSemesterMutation } from "../../../features/admin/academicManagementApi";
import { toast } from "sonner";

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
              toast.error(result.error.data.message)
            } else {
                toast.success("semester created")
            }
        }catch(err){
          toast.error('Something went wrong')
        }
    }
  return (
    <Flex justify="center" align="center">
      <Col span={6}>
      <h2>This is Create Accademic Semester component</h2>
      <AdmitForm onSubmit={onSubmit} resolver={zodResolver(academicSemesterSchema)}>
          <SelectForm label="Name" placeholder="Please select a semester" name="name" options={semesterOptions}></SelectForm>
           {/* value of the 'nameOptions' object will be submitted and the label will be show in dopdown in ui */}
          <SelectForm label="Year" placeholder="Please select a year" name="year" options={yearOptions}></SelectForm>
          <SelectForm label="Start Month"placeholder="Please select the start m"  name="startMonth" options={monthOptions}></SelectForm>
          <SelectForm label="End Month" placeholder="Please select the end month" name="endMonth" options={monthOptions}></SelectForm>
       <Button htmlType="submit">Submit</Button>
      </AdmitForm></Col>
    </Flex>
  );
};

export default CreateAccademicSemester;