import { Controller, type FieldValues, type SubmitHandler } from "react-hook-form";
import { useCreateStudentMutation } from "../../../features/admin/userManagementApi";
import AdmitForm from "../../form/AdmitForm";
import InputForm from "../../form/InputForm";
import { Button, Col, Divider, Flex, Form, Input, Row } from "antd";
import SelectForm from "../../form/SelectForm";
import { bloodGroupsOptions, gendersOptions } from "../../constants/global";
import DatePickerInput from "../../form/DatePicker";
import { useGetAllAccademicDepartmentQuery, useGetAllSemestersQuery } from "../../../features/admin/academicManagementApi";
import { toast } from "sonner";
import useResponsive from "../../../hooks/useResponsive";
import { CiCamera } from "react-icons/ci";
import { useRef, useState } from "react";

const CreateStudent = () => {
  const DEFAULT_IMAGE = "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png"
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [preview, setPreview] = useState<string>(DEFAULT_IMAGE)
  const [createStudent] = useCreateStudentMutation();
  const {data: semesterData, isLoading:isSemesterLoading} = useGetAllSemestersQuery(undefined);
  const {data: departmentData, isLoading: isDepartmentLoading} = useGetAllAccademicDepartmentQuery(undefined)
  const {isTablet, isDesktop} = useResponsive();
  // console.log(semesterData?.data, departmentData?.data)

  const semesterOptions = semesterData?.data?.map((item) => ({
    value: item._id,
    label:`${item.name} ${item.year}`
  }));

  const departmentOptions = departmentData?.data?.map((item) => ({
    value: item._id,
    label: item.name
  }))

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


       <div style={{ margin:isTablet||isDesktop? "0 40px" : "0" }}>
          <AdmitForm onSubmit={onSubmit}>
            <Divider style={{fontSize:'20px', paddingBottom:"15px"  ,fontWeight:600, textAlign: 'center'}}>Add Student</Divider>
            <Row justify="center" >
              <Col span={24}>
               <Row gutter={100}>
                 <Col span={24} lg={{span:5}} md={{span:24}}>
              <Row justify='center'><p style={{fontSize:'20px'  ,fontWeight:600}}>Upload Photo</p></Row>
                <Controller
                name="profileImage"
                render={({field:{onChange}}) => (
                  <Form.Item>
                    {/* Hidden file Input */}
                    <input
                      type="file"
                      accept="image*"
                      ref={fileInputRef}
                      style={{display:"none"}}
                      onChange={(e) => {
                        const file = e.target.files?.[0];
                        if(file){
                          onChange(file); //RHF gets the file
                          setPreview(URL.createObjectURL(file));//preview
                        }
                      }}
                    />
                    {/* clickable image which will displayed */}
                      <Flex justify="center">
                        <img
                  style={{ cursor:"pointer",borderRadius: "100px", border: "3px solid #cbd1d8ff"}}
                  width={190}
                  height={190}
                  src={preview}
                  alt="profile"
                  onClick={()=>fileInputRef.current?.click()}
                />
                      </Flex>
                  </Form.Item>
                )}
                />
                <Row style={{ marginTop: "50px", paddingBottom:"40px" }} justify="center">
                  <Button
                      onClick={()=>fileInputRef.current?.click()}
                    type="primary"
                    style={{
                      backgroundColor: "#1d6fccff",
                    }}
                  > <Flex justify="center" align="center" gap={5}>
                        <CiCamera style={{fontSize : "18px"}} /> Upload Image
                  </Flex>
                   
                  </Button>
                </Row>
              </Col>
                
              <Col  lg={{span:19}} md={{span: 24}} span={24}
      style={{
        borderLeft: "2px solid #cbd1d8ff",
        paddingLeft: "24px",
      }}>
                <Row gutter={[28, 5]}>
                  {/* Personal info */}
                   <Col className="font-stylish" span={24} lg={{ span: 12 }} md={{ span: 12 }}>
                    <InputForm type="text" name="name.firstName" label="Student First Name" placeholder="Provide first name"></InputForm>
                  </Col>
                   <Col className="font-stylish" span={24} lg={{ span: 12 }} md={{ span: 12 }}>
                    <InputForm type="text" name="name.middleName" label="Middle Name" placeholder="Provide middle name"></InputForm>
                  </Col>
                   <Col className="font-stylish" span={24} lg={{ span: 12 }} md={{ span: 12 }}>
                    <InputForm type="text" name="name.lastName" label="last Name" placeholder="Provide last name"></InputForm>
                  </Col>
                   <Col className="font-stylish" span={24} lg={{ span: 12 }} md={{ span: 12 }}>
                    <SelectForm name="gender" options={gendersOptions} label="Gender"/>
                  </Col>
                  <Col className="font-stylish" span={24} lg={{ span: 12 }} md={{ span: 12 }}>
                    <DatePickerInput name="dateOfBirth" label="Date of Birth" ></DatePickerInput>
                  </Col>
                   <Col className="font-stylish" span={24} lg={{ span: 12 }} md={{ span: 12 }}>
                    <SelectForm name="bloodGroup" options={bloodGroupsOptions} label="Blood Group"/>
                  </Col>
                   {/* Contact info */}
                  <Col className="font-stylish" span={24} lg={{ span: 12 }} md={{ span: 12 }}>
                    <InputForm type="text" name="email" label="Email Address" placeholder="Provide email ..."></InputForm>
                  </Col>
                  <Col className="font-stylish" span={24} lg={{ span: 12 }} md={{ span: 12 }}>
                    <InputForm type="text" name="contactNo" label="Contact No" placeholder="Provide contact No ..."></InputForm>
                  </Col>
                  <Col className="font-stylish" span={24} lg={{ span: 12 }} md={{ span: 12 }}>
                    <InputForm type="text" name="emergencyContactInfo" label="Emergency Contact Info(Number)" placeholder="Provide emergency conatct No ..."></InputForm>
                  </Col>
                  <Col className="font-stylish" span={24} lg={{ span: 12 }} md={{ span: 12 }}>
                    <InputForm isTextArea={true}  type="text" name="presentAddress" label="Present Address" placeholder="Provide Present Address ..."></InputForm>
                  </Col>
                  <Col className="font-stylish" span={24} lg={{ span: 12 }} md={{ span: 12 }}>
                    <InputForm isTextArea={true}  type="text" name="permanentAddress" label="Permanent Address" placeholder="Provide Permanent Address ..."></InputForm>
                  </Col>

                   {/* Gurdian info */}
                  <Col className="font-stylish" span={24} lg={{ span: 12 }} md={{ span: 12 }}>
                   <InputForm type="text" name="guardian.fatherName" label="Father Name" placeholder="Provide father name ..."></InputForm>
                  </Col>
                  <Col className="font-stylish" span={24} lg={{ span: 12 }} md={{ span: 12 }}>
                   <InputForm type="text" name="guardian.fatherOccupation" label="Father Occupation" placeholder="Provide father Occupation ..."></InputForm>
                  </Col>
                  <Col className="font-stylish" span={24} lg={{ span: 12 }} md={{ span: 12 }}>
                   <InputForm type="text" name="guardian.fatherContact" label="Father Contact" placeholder="Provide father Contact ..."></InputForm>
                  </Col>
                  <Col className="font-stylish" span={24} lg={{ span: 12 }} md={{ span: 12 }}>
                   <InputForm type="text" name="guardian.motherName" label="Mother Name" placeholder="Provide Mother name ..."></InputForm>
                  </Col>
                  <Col className="font-stylish" span={24} lg={{ span: 12 }} md={{ span: 12 }}>
                   <InputForm type="text" name="guardian.motherOccupation" label="Mother Occupation" placeholder="Provide Mother Occupation ..."></InputForm>
                  </Col>
                  <Col className="font-stylish" span={24} lg={{ span: 12 }} md={{ span: 12 }}>
                   <InputForm type="text" name="guardian.motherContact" label="Mother Contact" placeholder="Provide Mother Contact ..."></InputForm>
                  </Col>
                  
                  {/* Local Gurdian info */}
                   <Col className="font-stylish" span={24} lg={{ span: 12 }} md={{ span: 12 }}>
                   <InputForm type="text" name="localGuardian.name" label="Name" placeholder="Provide local gurdian name ..."></InputForm>
                  </Col>
                   <Col className="font-stylish" span={24} lg={{ span: 12 }} md={{ span: 12 }}>
                   <InputForm type="text" name="localGuardian.name" label="Name" placeholder="Provide local gurdian name ..."></InputForm>
                  </Col>
                   <Col className="font-stylish" span={24} lg={{ span: 12 }} md={{ span: 12 }}>
                   <InputForm type="text" name="localGuardian.name" label="Name" placeholder="Provide local gurdian name ..."></InputForm>
                  </Col>
                   <Col className="font-stylish" span={24} lg={{ span: 12 }} md={{ span: 12 }}>
                   <InputForm type="text" name="localGuardian.name" label="Name" placeholder="Provide local gurdian name ..."></InputForm>
                  </Col>
    
                </Row>
              </Col>
               </Row>
              </Col>
            </Row>
            <Row justify="end" style={{ marginRight: "20px" }}>
              <Col>
              <Flex gap={10} justify="center" align="center">
                <Button  type="primary"
                    style={{
                      backgroundColor: "#f9fafb",
                      color: "black",
                      border: '2px solid #cbd1d8ff',
                      padding: '3px 25px'
                    }}>Cancel</Button>
                   <Button
                   htmlType="submit"
                    type="primary"
                    style={{
                      backgroundColor: "#1d6fccff",
                      padding: '3px 25px'
                    }}>Submit</Button>
              </Flex>
              </Col>
            </Row>
          </AdmitForm>
        </div>
    // <Row>
    //   <Col span={24}>
    //     <AdmitForm onSubmit={onSubmit} defaultValues={studentDefaultValues}>
    //       <Divider>Personal Info</Divider>
    //        <Row gutter={8}>
    //       <Col span={24} md={{span:12}} lg={{span:8}} >
    //         <InputForm type="text" name="name.firstName" label="First Name"></InputForm>
    //       </Col>
    //       <Col span={24} md={{span:12}} lg={{span:8}} >
    //         <InputForm type="text" name="name.middleName" label="Middle Name"></InputForm>
    //       </Col>
    //       <Col span={24} md={{span:12}} lg={{span:8}} >
    //         <InputForm type="text" name="name.lastName" label="Last Name"></InputForm>
    //       </Col>
    //       <Col span={24} md={{span:12}} lg={{span:8}} >
    //         <SelectForm options={gendersOptions} placeholder="Select gender" name="gender" label="Gender"></SelectForm>
    //       </Col>
    //       <Col span={24} md={{span:12}} lg={{span:8}} >
    //         <DatePickerInput name="dateOfBirth" label="Date of Birth"></DatePickerInput>
    //       </Col>
    //       <Col span={24} md={{span:12}} lg={{span:8}}>
    //         <SelectForm options={bloodGroupsOptions} placeholder="Select blood group" name="bloodGroup" label="Blood Group"></SelectForm>
    //       </Col>
    //       <Col span={24} md={{span:12}} lg={{span:8}}>
    //          <Controller
    //            name="image"
    //            render={({field: {onChange, value, ...field}}) =>(
    //             <Form.Item label="Picture">
    //                 <Input type="file"
    //                 value={value?.fileName}
    //                 {...field}
    //                 onChange={(e) => onChange(e.target.files?.[0])}
    //                 />
    //             </Form.Item>
    //            )}
    //          />
    //       </Col>
    //        </Row>
    //        <Divider>Contact Info</Divider>
    //        <Row gutter={8}>
    //          <Col span={24} md={{span:12}} lg={{span:8}} >
    //         <InputForm type="text" name="email" label="Email"></InputForm>
    //       </Col>
    //           <Col span={24} md={{span:12}} lg={{span:8}} >
    //         <InputForm type="text" name="contactNo" label="Contact No"></InputForm>
    //       </Col>
    //       <Col span={24} md={{span:12}} lg={{span:8}} >
    //         <InputForm type="text" name="emergencyContactInfo" label="Emergency Contact Info(Number)"></InputForm>
    //       </Col>
    //       <Col span={24} md={{span:12}} lg={{span:8}} >
    //         <InputForm type="text" name="presentAddress" label="Present Address"></InputForm>
    //       </Col>
    //       <Col span={24} md={{span:12}} lg={{span:8}} >
    //         <InputForm type="text" name="permanentAddress" label="Permanent Address"></InputForm>
    //       </Col>
    //        </Row>
    //        <Divider>Gurdian Info</Divider>
    //        <Row gutter={8}>
    //       <Col span={24} md={{span:12}} lg={{span:8}} >
    //         <InputForm type="text" name="guardian.fatherName" label="Father Name"></InputForm>
    //       </Col>
    //       <Col span={24} md={{span:12}} lg={{span:8}} >
    //         <InputForm type="text" name="guardian.fatherOccupation" label="Father Occupation"></InputForm>
    //       </Col>
    //       <Col span={24} md={{span:12}} lg={{span:8}} >
    //         <InputForm type="text" name="guardian.fatherContactNo" label="Father Contact No"></InputForm>
    //       </Col>
    //       <Col span={24} md={{span:12}} lg={{span:8}} >
    //         <InputForm type="text" name="guardian.motherName" label="Mother Name"></InputForm>
    //       </Col>
    //       <Col span={24} md={{span:12}} lg={{span:8}} >
    //         <InputForm type="text" name="guardian.motherOccupation" label="Mother Occupation"></InputForm>
    //       </Col>
    //       <Col span={24} md={{span:12}} lg={{span:8}} >
    //         <InputForm type="text" name="guardian.motherContactNo" label="Mother Contact No"></InputForm>
    //       </Col>
    //       </Row>
    //       <Divider>Local Gurdian Info</Divider>
    //       <Row gutter={8}>
    //       <Col span={24} md={{span:12}} lg={{span:8}} >
    //         <InputForm type="text" name="localGuardian.name" label="Name"></InputForm>
    //       </Col>
    //       <Col span={24} md={{span:12}} lg={{span:8}} >
    //         <InputForm type="text" name="localGuardian.occupation" label="occupation"></InputForm>
    //       </Col>
    //       <Col span={24} md={{span:12}} lg={{span:8}} >
    //         <InputForm type="text" name="localGuardian.contactNo" label="Contact No"></InputForm>
    //       </Col>
    //       <Col span={24} md={{span:12}} lg={{span:8}} >
    //         <InputForm type="text" name="localGuardian.address" label="Address"></InputForm>
    //       </Col>
    //       </Row>
    //       <Divider>Accademical Info</Divider>
    //       <Row gutter={8}>
    //         <Col span={24} md={{span:12}} lg={{span:12}} >
    //         <SelectForm name="admissionSemester" placeholder="Select admission semester" disabled={isSemesterLoading} options={semesterOptions} label="Admission Semester"></SelectForm>
    //       </Col>
    //       <Col span={24} md={{span:12}} lg={{span:12}} >
    //         <SelectForm name="academicDepartment" placeholder="Select department" disabled={isDepartmentLoading} options={departmentOptions} label="Academic Department"></SelectForm>
    //       </Col>
    //       </Row>
    //       <Button htmlType="submit">Submit</Button>
    //     </AdmitForm>
    //   </Col>
    // </Row>
  );
};

export default CreateStudent;
