import { Controller, type FieldValues, type SubmitHandler } from "react-hook-form";
import AdmitForm from "../../form/AdmitForm";
import InputForm from "../../form/InputForm";
import { Button, Col, Divider, Flex, Form, Grid, Row } from "antd";
import { CiCamera } from "react-icons/ci";
import { useRef, useState } from "react";
import DatePickerInput from "../../form/DatePicker";
import SelectForm from "../../form/SelectForm";
import { gendersOptions } from "../../constants/global";
import { useGetAllAccademicDepartmentQuery } from "../../../features/admin/academicManagementApi";
import { useCreateAdminMutation } from "../../../features/admin/userManagementApi";
import { toast } from "sonner";
import useResponsive from "../../../hooks/useResponsive";


const CreateAdmin = () => {
    
     const DEFAULT_IMAGE = "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png"
     const {data: departmentData, isLoading:isDepartmentLoading} = useGetAllAccademicDepartmentQuery(undefined)
     const [createAdmin] = useCreateAdminMutation()
     const fileInputRef = useRef<HTMLInputElement | null>(null);
     const [preview, setPreview] = useState<string>(DEFAULT_IMAGE)
     const {isMobile, isTablet, isDesktop} = useResponsive()

     const departmentOptions = departmentData?.data?.map((item) => ({
      value: item._id,
      label: item.name
     }))
     
  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    //console.log(data);
    
    const adminData = {
      password: "admin1234",
      admin: data
    }
    console.log(adminData)
   
    try{
     const formData = new FormData();
    formData.append("data", JSON.stringify(adminData));
    formData.append("file", data.profileImage);
 
    const result = await createAdmin(formData).unwrap();
    console.log(result);
         toast.success('Admin is created successfuly')
       
    }catch(error){
         toast.error('Something went wrong')
         console.log(error.data.message)
    }
  };
  return (
    <div style={{ margin:isTablet||isDesktop? "0 40px" : "0" }}>
      <AdmitForm onSubmit={onSubmit}>
        <Divider style={{fontSize:'20px', paddingBottom:"15px"  ,fontWeight:600, textAlign: 'center'}}>Add Admin</Divider>
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
                <InputForm type="text" name="name" label="Full Name" placeholder="Provide name"></InputForm>
              </Col>
               <Col className="font-stylish" span={24} lg={{ span: 12 }} md={{ span: 12 }}>
                <InputForm type="text" name="designation" label="Designation" placeholder="Provide Designation"></InputForm>
              </Col>
              <Col className="font-stylish" span={24} lg={{ span: 12 }} md={{ span: 12 }}>
                <DatePickerInput name="dateOfBirth" label="Date of Birth" ></DatePickerInput>
              </Col>
              <Col className="font-stylish" span={24} lg={{ span: 12 }} md={{ span: 12 }}>
                <SelectForm name="gender" label="Gender" options={gendersOptions}></SelectForm>
              </Col>
              <Col className="font-stylish" span={24} lg={{ span: 12 }} md={{ span: 12 }}>
                <InputForm type="text" name="email" label="Email Address" placeholder="Provide email"></InputForm>
              </Col>
              <Col className="font-stylish" span={24} lg={{ span: 12 }} md={{ span: 12 }}>
                <InputForm type="text" name="contactNo" label="Contact No" placeholder="Provide contact No"></InputForm>
              </Col>
              <Col className="font-stylish" span={24} lg={{ span: 12 }} md={{ span: 12 }}>
                <InputForm type="text" name="emergencyContactNo" label="Emergency Contact No" placeholder="Provide emergency conatct No"></InputForm>
              </Col>
              <Col className="font-stylish" span={24} lg={{ span: 12 }} md={{ span: 12 }}>
                <SelectForm name="managementDepartment" options={departmentOptions} placeholder="Select department which will be managed" label="Management Department"></SelectForm>
              </Col>
              <Col className="font-stylish" span={24} lg={{ span: 12 }} md={{ span: 12 }}>
                <InputForm isTextArea={true}  type="text" name="presentAddress" label="Present Address" placeholder="Provide Present Address"></InputForm>
              </Col>
              <Col className="font-stylish" span={24} lg={{ span: 12 }} md={{ span: 12 }}>
                <InputForm isTextArea={true}  type="text" name="permanentAddress" label="Permanent Address" placeholder="Provide Permanent Address"></InputForm>
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
  );
};

export default CreateAdmin;
