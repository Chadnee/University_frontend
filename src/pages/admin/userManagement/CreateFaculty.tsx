import { Controller, type SubmitHandler } from "react-hook-form";
import AdmitForm from "../../form/AdmitForm";
import InputForm from "../../form/InputForm";
import { Button, Col, Divider, Flex, Form, Row } from "antd";
import { CiCamera } from "react-icons/ci";
import { useRef, useState } from "react";
import DatePickerInput from "../../form/DatePicker";
import SelectForm from "../../form/SelectForm";
import { gendersOptions } from "../../constants/global";
import { useGetAllAccademicDepartmentQuery } from "../../../features/admin/academicManagementApi";
import { useCreateFacultyMutation } from "../../../features/admin/userManagementApi";
import { toast } from "sonner";
import useResponsive from "../../../hooks/useResponsive";
import type { TCreateFaculty, TCreateFacultyPayload} from "../../../types/userManagementTypes";


const CreateFaculty = () => {
    
     const DEFAULT_IMAGE = "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png"
     const {data: departmentData, isLoading:isDepartmentLoading} = useGetAllAccademicDepartmentQuery(undefined)
     const [createFaculty] = useCreateFacultyMutation()
     const fileInputRef = useRef<HTMLInputElement | null>(null);
     const [preview, setPreview] = useState<string>(DEFAULT_IMAGE)
     const {isTablet, isDesktop} = useResponsive()

     const departmentOptions = departmentData?.data?.map((item) => ({
      value: item._id,
      label: item.name
     }))
     
     
  const onSubmit: SubmitHandler<TCreateFaculty> = async (data) => {
    //console.log(data);
    
    const facultyData : TCreateFacultyPayload = {
      password: "faculty1234",
      faculty: data
    }
    console.log(facultyData)
   
    try{
     const formData = new FormData();
    formData.append("data", JSON.stringify(facultyData));
    formData.append("file", data.profileImage);
 
    const result = await createFaculty(formData).unwrap();
    console.log(result);
         toast.success('Faculty is created successfuly')
       
    }catch(error:unknown){
             const err = error as { data?: { message?: string } };
            console.log(err.data?.message)
                toast.error("Something went wrong")
          }
  };// style={{ margin:isDesktop?"0 , 40px": isTablet?"0, 7px":"0" }}
  return (
    <div style={{ margin:isTablet||isDesktop? "0 40px" : "0" }}>
      <AdmitForm onSubmit={onSubmit}>
        <Divider style={{fontSize:'20px', paddingBottom:"15px"  ,fontWeight:600, textAlign: 'center'}}>Add Faculties</Divider>
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
               <Col className="font-stylish" span={24} lg={{ span: 12 }} md={{ span: 12 }}>
                <InputForm type="text" name="name" label="Full Name"></InputForm>
              </Col>
               <Col className="font-stylish" span={24} lg={{ span: 12 }} md={{ span: 12 }}>
                <InputForm type="text" name="designation" label="Designation"></InputForm>
              </Col>
              <Col className="font-stylish" span={24} lg={{ span: 12 }} md={{ span: 12 }}>
                <DatePickerInput name="dateOfBirth" label="Date of Birth" ></DatePickerInput>
              </Col>
              <Col className="font-stylish" span={24} lg={{ span: 12 }} md={{ span: 12 }}>
                <SelectForm name="gender" placeholder="Select gender" label="Gender" options={gendersOptions}></SelectForm>
              </Col>
              <Col className="font-stylish" span={24} lg={{ span: 12 }} md={{ span: 12 }}>
                <InputForm type="text" name="email" label="Email Address"></InputForm>
              </Col>
              <Col className="font-stylish" span={24} lg={{ span: 12 }} md={{ span: 12 }}>
                <InputForm type="text" name="contactNo" label="Contact No"></InputForm>
              </Col>
              <Col className="font-stylish" span={24} lg={{ span: 12 }} md={{ span: 12 }}>
                <InputForm type="text" name="emergencyContactNo" label="Emergency Contact No"></InputForm>
              </Col>
              <Col className="font-stylish" span={24} lg={{ span: 12 }} md={{ span: 12 }}>
                <SelectForm name="academicDepartment" options={departmentOptions} disabled={isDepartmentLoading} placeholder="Select department" label="Department"></SelectForm>
              </Col>
              <Col className="font-stylish" span={24} lg={{ span: 12 }} md={{ span: 12 }}>
                <InputForm isTextArea={true}  type="text" name="presentAddress" label="Present Address"></InputForm>
              </Col>
              <Col className="font-stylish" span={24} lg={{ span: 12 }} md={{ span: 12 }}>
                <InputForm isTextArea={true}  type="text" name="permanentAddress" label="Permanent Address"></InputForm>
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
                  padding: '3px 10px'
                }}>Cancel</Button>
               <Button
               htmlType="submit"
                type="primary"
                style={{
                  backgroundColor: "#1d6fccff",
                  padding: '3px 10px'
                }}>Submit</Button>
          </Flex>
          </Col>
        </Row>
      </AdmitForm>
    </div>
  );
};

export default CreateFaculty;
