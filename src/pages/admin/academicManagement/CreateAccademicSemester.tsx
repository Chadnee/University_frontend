import type { FieldValues, SubmitHandler } from "react-hook-form";
import AdmitForm from "../../form/AdmitForm";
import SelectForm from "../../form/SelectForm";
import { Button, Col, Flex } from "antd";
import { semesterOptions } from "../../constants/semester";
import { monthOptions } from "../../constants/global";

const currentYear = new Date().getFullYear();
const yearOptions = [0,1,2,3,4].map((number) => (
  {
    value: String(currentYear + number),
    label: String(currentYear + number)
  }
))

const CreateAccademicSemester = () => {
    const onSubmit:SubmitHandler<FieldValues> = (data) => {
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
        console.log(semesterData)
    }
  return (
    <Flex justify="center" align="center">
      <Col span={6}>
      <h2>This is Create Accademic Semester component</h2>
      <AdmitForm onSubmit={onSubmit}>
          <SelectForm label="Name" name="name" options={semesterOptions}></SelectForm>
           {/* value of the 'nameOptions' object will be submitted and the label will be show in dopdown in ui */}
          <SelectForm label="Year" name="year" options={yearOptions}></SelectForm>
          <SelectForm label="Start Month" name="startMonth" options={monthOptions}></SelectForm>
          <SelectForm label="End Month" name="endMonth" options={monthOptions}></SelectForm>
       <Button htmlType="submit">Submit</Button>
      </AdmitForm></Col>
    </Flex>
  );
};

export default CreateAccademicSemester;