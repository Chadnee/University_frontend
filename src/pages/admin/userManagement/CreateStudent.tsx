import { Controller, type SubmitHandler} from "react-hook-form";
import { useCreateStudentMutation } from "../../../features/admin/userManagementApi";
import AdmitForm from "../../form/AdmitForm";
import InputForm from "../../form/InputForm";
import { Button, Col, Divider, Flex, Form, Row } from "antd";
import SelectForm from "../../form/SelectForm";
import { bloodGroupsOptions, gendersOptions} from "../../constants/global";
import DatePickerInput from "../../form/DatePicker";
import { useGetAllAccademicDepartmentQuery, useGetAllSemestersQuery } from "../../../features/admin/academicManagementApi";
import { toast } from "sonner";
import useResponsive from "../../../hooks/useResponsive";
import { CiCamera } from "react-icons/ci";
import { useRef, useState } from "react";
import type { TCreateStudentPayload, TStudent } from "../../../types/userManagementTypes";
import type { TAcademicSemester } from "../../../types/academicManagementTypes";

const CreateStudent = () => {
  const DEFAULT_IMAGE = "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png"
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [preview, setPreview] = useState<string>(DEFAULT_IMAGE)
  const [createStudent] = useCreateStudentMutation();
  const {data: semesterData, isLoading:isSemesterLoading} = useGetAllSemestersQuery(undefined);
  const {data: departmentData, isLoading: isDepartmentLoading} = useGetAllAccademicDepartmentQuery(undefined)
  const {isMobile, isTablet, isLargeDesktop} = useResponsive();
  // console.log(semesterData?.data, departmentData?.data)

  const semesterOptions = semesterData?.data?.map((item:TAcademicSemester) => ({
    value: item._id,
    label:`${item.name} ${item.year}`
  }));

  const departmentOptions = departmentData?.data?.map((item) => ({
    value: item._id,
    label: item.name
  }))


    const onSubmit: SubmitHandler<TStudent> = async (data) => {
    
    const studentData : TCreateStudentPayload = {
     password: 'student123',
     student : data
    }
  //  console.log(studentData);

   try{
    const formData = new FormData();
    formData.append("data", JSON.stringify(studentData));
    formData.append("file", data.profileImage) 
    //Cause image is not belong in studentData, look at the types of data in object in backend, in where no types of image or file for sending image rather it had a different file of images directly, thats why studentData can not sent
    // the image like others, though we collect the image file from 'data'which are changed in studentDatas, but studentData will not accept that image file, so we take it seperately from data and add in form by append method
    
    const result = await createStudent(formData).unwrap();
    //console.log(Object.fromEntries(formData));
           console.log(result);
           toast.success('Student is created')

   }catch(error:unknown){
         const err = error as { data?: { message?: string } };
        console.log(err.data?.message)
            toast.error("Something went wrong")
      }
};
     const colSpan = isMobile || isTablet? 24 : 12
  return (


       <div style={{paddingBottom:"20px", width:"100%", display:"flex", flexDirection:'column', justifyContent:"center", alignItems:" center", }}>
          <AdmitForm onSubmit={onSubmit}>
              {/* <Divider style={{fontSize:'20px', paddingBottom:"15px"  ,fontWeight:600, textAlign: 'center'}}>Add Admin</Divider> */}
            <Divider style={{fontSize:'26px', paddingBottom:"15px"  ,fontWeight:600, textAlign: 'center'}}>Add Student</Divider>
            <Row justify="center" style={{width:"100%"}}>
              <Col span={24}>
               <Row gutter={100} style={{margin:isMobile || isTablet ?"0px -30px 0px 14px": "0px 20px 0px 30px"}}>
                 <Col span={isLargeDesktop? 5 : 24}>
              <Row justify='center'><p style={{fontSize:'20px' ,fontWeight:600}}>Upload Photo</p></Row>
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
                
              <Col  span = {isLargeDesktop? 19 : 24}
      style={{
        borderLeft: "2px solid #cbd1d8ff",
        paddingLeft: isMobile||isTablet?"14px":"38px",width:"100%",
        
      }}>            
       {/* <p style={{fontSize: "25px", fontWeight:"600", textAlign:"center"}}>Create Student</p> */}

                
                  
                 <Divider orientation="center" style={{ margin:"30px auto"}}>Personal info</Divider>
                    <Row gutter={[28, 5]} style={{}}>
                  {/* Personal info */}
                   <Col className="font-stylish" span = {colSpan}>
                    <InputForm type="text" name="name.firstName" label="Student First Name" placeholder="Provide first name"></InputForm>
                  </Col>
                   <Col className="font-stylish" span = {colSpan}>
                    <InputForm type="text" name="name.middleName" label="Middle Name" placeholder="Provide middle name"></InputForm>
                  </Col>
                   <Col className="font-stylish" span = {colSpan}>
                    <InputForm type="text" name="name.lastName" label="last Name" placeholder="Provide last name"></InputForm>
                  </Col>
                   <Col className="font-stylish" span = {colSpan}>
                    <SelectForm name="gender" options={gendersOptions} label="Gender"/>
                  </Col>
                  <Col className="font-stylish" span = {colSpan}>
                    <DatePickerInput name="dateOfBirth" label="Date of Birth" ></DatePickerInput>
                  </Col>
                   <Col className="font-stylish" span = {colSpan}>
                    <SelectForm name="bloodGroup" options={bloodGroupsOptions} label="Blood Group"/>
                  </Col>
                  </Row>

                   {/* Contact info */}
                   <Divider orientation="center" style={{ margin:"30px auto"}}>Contact info</Divider>
                   <Row gutter={[28, 5]} >
                      <Col className="font-stylish" span = {colSpan}>
                    <InputForm type="text" name="email" label="Email Address" placeholder="Provide email ..."></InputForm>
                  </Col>
                   <Col className="font-stylish" span = {colSpan}>
                    <InputForm type="text" name="" label="Institutional email (Optional)" placeholder="Provide institutional email if applicable ..."></InputForm>
                  </Col>
                  <Col className="font-stylish" span = {colSpan}>
                    <InputForm type="text" name="contactNo" label="Contact No" placeholder="Provide contact No ..."></InputForm>
                  </Col>
                   <Col className="font-stylish" span = {colSpan}>
                    <InputForm type="text" name="emergencyContactInfo" label="Emergency Contact Info(Number)" placeholder="Provide emergency conatct No ..."></InputForm>
                  </Col>
                  <Col className="font-stylish" span = {colSpan}>
                    <InputForm isTextArea={true}  type="text" name="presentAddress" label="Present Address" placeholder="Provide Present Address ..."></InputForm>
                  </Col>
                  <Col className="font-stylish" span = {colSpan}>
                    <InputForm isTextArea={true}  type="text" name="permanentAddress" label="Permanent Address" placeholder="Provide Permanent Address ..."></InputForm>
                  </Col>
                  </Row>
                  
                 

                   {/* Gurdian info */}
                   <Divider orientation="center" style={{ margin:"30px auto"}}>Gurdian info</Divider>
                   <Row gutter={[28, 5]} >
                  <Col className="font-stylish" span = {colSpan}>
                   <InputForm type="text" name="guardian.fatherName" label="Father Name" placeholder="Provide father name ..."></InputForm>
                  </Col>
                  <Col className="font-stylish" span = {colSpan}>
                   <InputForm type="text" name="guardian.fatherOccupation" label="Father Occupation" placeholder="Provide father Occupation ..."></InputForm>
                  </Col>
                  <Col className="font-stylish" span = {colSpan}>
                   <InputForm type="text" name="guardian.fatherContactNo" label="Father Contact" placeholder="Provide father Contact ..."></InputForm>
                  </Col>
                  <Col className="font-stylish" span = {colSpan}>
                   <InputForm type="text" name="guardian.motherName" label="Mother Name" placeholder="Provide Mother name ..."></InputForm>
                  </Col>
                  <Col className="font-stylish" span = {colSpan}>
                   <InputForm type="text" name="guardian.motherOccupation" label="Mother Occupation" placeholder="Provide Mother Occupation ..."></InputForm>
                  </Col>
                  <Col className="font-stylish" span = {colSpan}>
                   <InputForm type="text" name="guardian.motherContactNo" label="Mother Contact" placeholder="Provide Mother Contact ..."></InputForm>
                  </Col>
                  </Row>
                  
                  {/* Local Gurdian info */}
                  <Divider orientation="center" style={{ margin:"30px auto"}}>Local Gurdian info</Divider>
                   <Row gutter={[28, 5]} >
                   <Col className="font-stylish" span = {colSpan}>
                   <InputForm type="text" name="localGuardian.name" label="Name" placeholder="Provide local gurdian name ..."></InputForm>
                  </Col>
                   <Col className="font-stylish" span = {colSpan}>
                   <InputForm type="text" name="localGuardian.occupation" label="Occupation" placeholder="Provide Occupation ..."></InputForm>
                  </Col>
                   <Col className="font-stylish" span = {colSpan}>
                   <InputForm type="text" name="localGuardian.contactNo" label="Contact No" placeholder="Provide Contact No ..."></InputForm>
                  </Col>
                   <Col className="font-stylish" span = {colSpan}>
                   <InputForm type="text" name="localGuardian.address" label="Address" placeholder="Provide address ..."></InputForm>
                  </Col>
                  </Row>
                  {/*Academical info */}
                 <Divider orientation="center" style={{ margin:"30px auto"}}>Academic info</Divider>
                   <Row gutter={[28, 5]} >
                   <Col className="font-stylish" span = {colSpan}>
                  <SelectForm name="admissionSemester" disabled={isSemesterLoading} options={semesterOptions} label="Academic Semester"></SelectForm>
                  </Col>
                   <Col className="font-stylish" span = {colSpan}>
                  <SelectForm name="academicDepartment" disabled={isDepartmentLoading} options={departmentOptions} label="Academic Department"></SelectForm>
                  </Col>
                  </Row>
                {/* </Row> */}
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
  );
};

export default CreateStudent;
