import { Controller, type FieldValues, type SubmitHandler } from "react-hook-form";
import { useCreateStudentMutation } from "../../../features/admin/userManagementApi";
import AdmitForm from "../../form/AdmitForm";
import InputForm from "../../form/InputForm";
import { Button, Col, Divider, Form, Input, Row } from "antd";
import SelectForm from "../../form/SelectForm";
import { bloodGroupsOptions, gendersOptions } from "../../constants/global";
import DatePickerInput from "../../form/DatePicker";
import { useGetAllAccademicDepartmentQuery, useGetAllSemestersQuery } from "../../../features/admin/academicManagementApi";
import { toast } from "sonner";

const CreateStudent = () => {
  const [createStudent] = useCreateStudentMutation();
  const {data: semesterData, isLoading:isSemesterLoading} = useGetAllSemestersQuery(undefined);
  const {data: departmentData, isLoading: isDepartmentLoading} = useGetAllAccademicDepartmentQuery(undefined)

  // console.log(semesterData?.data, departmentData?.data)

  const semesterOptions = semesterData?.data?.map((item) => ({
    value: item._id,
    label:`${item.name} ${item.year}`
  }));

  const departmentOptions = departmentData?.data?.map((item) => ({
    value: item._id,
    label: item.name
  }))
  const student = {
    password: "student1234",
    student: {
      name: {
        firstName: "Abu",
        middleName: "Jasim",
        lastName: "Khandakar",
      },
      gender: "male",
      dateOfBirth: "2002-11-30",
      email: "Jasim@gmail.com",
      contactNo: "+1987654321",
      emergencyContactInfo: "+1234509876",
      bloodGroup: "B+",
      presentAddress: "789 Pine Road, Cityville, Country",
      permanentAddress: "321 Birch Street, Hometown, Country",
      guardian: {
        fatherName: "James Miller",
        fatherOccupation: "Professor",
        fatherContactNo: "+4455667788",
        motherName: "Linda Miller",
        motherOccupation: "Nurse",
        motherContactNo: "+5566778899",
      },
      localGuardian: {
        name: "Soer",
        occupation: "Lawyer",
        contactNo: "+6677889900",
        address: "951 Cedar Avenue, Metro City, Country",
      },
      admissionSemester: "68ab355588b2f7b58090fb4f",
      academicDepartment: "68ab36d188b2f7b58090fb5c",
    },
  };

  const studentDefaultValues = {
      name: {
        firstName: "Abu",
        middleName: "Jasim",
        lastName: "Khandakar",
      },
      gender: "male",
      email: "Jasim@gmail.com",
      contactNo: "+1987654321",
      emergencyContactInfo: "+1234509876",
      bloodGroup: "B+",
      presentAddress: "789 Pine Road, Cityville, Country",
      permanentAddress: "321 Birch Street, Hometown, Country",
      guardian: {
        fatherName: "James Miller",
        fatherOccupation: "Professor",
        fatherContactNo: "+4455667788",
        motherName: "Linda Miller",
        motherOccupation: "Nurse",
        motherContactNo: "+5566778899",
      },
      localGuardian: {
        name: "Soer",
        occupation: "Lawyer",
        contactNo: "+6677889900",
        address: "951 Cedar Avenue, Metro City, Country",
      },
  }

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    
    const studentData = {
     password: 'student123',
     student: data
    }
   console.log(studentData);

   try{
    const formData = new FormData();
    formData.append("data", JSON.stringify(studentData));
    formData.append("file", data.image) 
    //Cause image is not belong in studentData, look at the types of data in object in backend, in where no types of image or file for sending image rather it had a different file of images directly, thats why studentData can not sent
    // the image like others, though we collect the image file from 'data'which are changed in studentDatas, but studentData will not accept that image file, so we take it seperately from data and add in form by append method
    
    const result = await createStudent(formData).unwrap();
    //console.log(Object.fromEntries(formData));
           console.log(result);
           toast.success('Student is created successfuly')

   }catch(error){
         console.log(error.data.message)
         toast.error('Something went wrong')
   }
};
  return (
    <Row>
      <Col span={24}>
        <AdmitForm onSubmit={onSubmit} defaultValues={studentDefaultValues}>
          <Divider>Personal Info</Divider>
           <Row gutter={8}>
          <Col span={24} md={{span:12}} lg={{span:8}} >
            <InputForm type="text" name="name.firstName" label="First Name"></InputForm>
          </Col>
          <Col span={24} md={{span:12}} lg={{span:8}} >
            <InputForm type="text" name="name.middleName" label="Middle Name"></InputForm>
          </Col>
          <Col span={24} md={{span:12}} lg={{span:8}} >
            <InputForm type="text" name="name.lastName" label="Last Name"></InputForm>
          </Col>
          <Col span={24} md={{span:12}} lg={{span:8}} >
            <SelectForm options={gendersOptions} placeholder="Select gender" name="gender" label="Gender"></SelectForm>
          </Col>
          <Col span={24} md={{span:12}} lg={{span:8}} >
            <DatePickerInput name="dateOfBirth" label="Date of Birth"></DatePickerInput>
          </Col>
          <Col span={24} md={{span:12}} lg={{span:8}}>
            <SelectForm options={bloodGroupsOptions} placeholder="Select blood group" name="bloodGroup" label="Blood Group"></SelectForm>
          </Col>
          <Col span={24} md={{span:12}} lg={{span:8}}>
             <Controller
               name="image"
               render={({field: {onChange, value, ...field}}) =>(
                <Form.Item label="Picture">
                    <Input type="file"
                    value={value?.fileName}
                    {...field}
                    onChange={(e) => onChange(e.target.files?.[0])}
                    />
                </Form.Item>
               )}
             />
          </Col>
           </Row>
           <Divider>Contact Info</Divider>
           <Row gutter={8}>
             <Col span={24} md={{span:12}} lg={{span:8}} >
            <InputForm type="text" name="email" label="Email"></InputForm>
          </Col>
              <Col span={24} md={{span:12}} lg={{span:8}} >
            <InputForm type="text" name="contactNo" label="Contact No"></InputForm>
          </Col>
          <Col span={24} md={{span:12}} lg={{span:8}} >
            <InputForm type="text" name="emergencyContactInfo" label="Emergency Contact Info(Number)"></InputForm>
          </Col>
          <Col span={24} md={{span:12}} lg={{span:8}} >
            <InputForm type="text" name="presentAddress" label="Present Address"></InputForm>
          </Col>
          <Col span={24} md={{span:12}} lg={{span:8}} >
            <InputForm type="text" name="permanentAddress" label="Permanent Address"></InputForm>
          </Col>
           </Row>
           <Divider>Gurdian Info</Divider>
           <Row gutter={8}>
          <Col span={24} md={{span:12}} lg={{span:8}} >
            <InputForm type="text" name="guardian.fatherName" label="Father Name"></InputForm>
          </Col>
          <Col span={24} md={{span:12}} lg={{span:8}} >
            <InputForm type="text" name="guardian.fatherOccupation" label="Father Occupation"></InputForm>
          </Col>
          <Col span={24} md={{span:12}} lg={{span:8}} >
            <InputForm type="text" name="guardian.fatherContactNo" label="Father Contact No"></InputForm>
          </Col>
          <Col span={24} md={{span:12}} lg={{span:8}} >
            <InputForm type="text" name="guardian.motherName" label="Mother Name"></InputForm>
          </Col>
          <Col span={24} md={{span:12}} lg={{span:8}} >
            <InputForm type="text" name="guardian.motherOccupation" label="Mother Occupation"></InputForm>
          </Col>
          <Col span={24} md={{span:12}} lg={{span:8}} >
            <InputForm type="text" name="guardian.motherContactNo" label="Mother Contact No"></InputForm>
          </Col>
          </Row>
          <Divider>Local Gurdian Info</Divider>
          <Row gutter={8}>
          <Col span={24} md={{span:12}} lg={{span:8}} >
            <InputForm type="text" name="localGuardian.name" label="Name"></InputForm>
          </Col>
          <Col span={24} md={{span:12}} lg={{span:8}} >
            <InputForm type="text" name="localGuardian.occupation" label="occupation"></InputForm>
          </Col>
          <Col span={24} md={{span:12}} lg={{span:8}} >
            <InputForm type="text" name="localGuardian.contactNo" label="Contact No"></InputForm>
          </Col>
          <Col span={24} md={{span:12}} lg={{span:8}} >
            <InputForm type="text" name="localGuardian.address" label="Address"></InputForm>
          </Col>
          </Row>
          <Divider>Accademical Info</Divider>
          <Row gutter={8}>
            <Col span={24} md={{span:12}} lg={{span:12}} >
            <SelectForm name="admissionSemester" placeholder="Select admission semester" disabled={isSemesterLoading} options={semesterOptions} label="Admission Semester"></SelectForm>
          </Col>
          <Col span={24} md={{span:12}} lg={{span:12}} >
            <SelectForm name="academicDepartment" placeholder="Select department" disabled={isDepartmentLoading} options={departmentOptions} label="Academic Department"></SelectForm>
          </Col>
          </Row>
          <Button htmlType="submit">Submit</Button>
        </AdmitForm>
      </Col>
    </Row>
  );
};

export default CreateStudent;
