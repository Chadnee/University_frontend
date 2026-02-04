import {useParams } from "react-router-dom";
import { useGetsingleStudentQuery } from "../../../features/admin/userManagementApi";
import { Card, Col, Divider, Flex, Row, Spin } from "antd";
import maleStudent from "../../../assets/images/maleStudent.jpg";
import femaleStudent from "../../../assets/images/femaileStudent.jpg";
import { AiTwotoneMail } from "react-icons/ai";
import { FaLocationCrosshairs } from "react-icons/fa6";
import { SlCalender } from "react-icons/sl";
import { FaBuildingColumns } from "react-icons/fa6";
import { LuShoppingBasket } from "react-icons/lu";
import { RiGraduationCapFill } from "react-icons/ri";
import { FaPhone } from "react-icons/fa6";
import { IoMdMailOpen } from "react-icons/io";
import { TbEmergencyBed } from "react-icons/tb";
import { BiSolidLocationPlus } from "react-icons/bi";
import { useState } from "react";
import { getFullName } from "../../../utils/GetFullName";


const StudentDetails = () => {
    
    const {id :studentId} = useParams()

    const {data, isLoading, isError} = useGetsingleStudentQuery(studentId)
    
  if(isLoading){
        return <Flex  justify="center" align="center" style={{ height: "80vh" }}>
                               <div style={{ color: "#608cd3ff" }}>
                                <Spin size="medium" />
                               </div>
                          </Flex>
    }
    if(isError){
        return<div>Something is wrong, try again later</div>
    }

    
   const {
  id,
  gender,
  email,
  contactNo,
  bloodGroup,
  dateOfBirth,
  presentAddress,
  permanentAddress,
  emergencyContactInfo,
  profileImage,

  name,

  academicDepartment: {
    _id: departmentId,
    name: departmentName,
    academicFaculty: facultyInfo,
  },

  admissionSemester: {
    name: semesterName,
    year,
    startMonth,
    endMonth
  },

  guardian: {
    fatherName,
    fatherOccupation,
    fatherContactNo,
    motherName,
    motherOccupation,
    motherContactNo
  },

  localGuardian: {
    name: localGuardianName,
    occupation: localGuardianOccupation,
    contactNo: localGuardianContact,
    address: localGuardianAddress,
  }
} = data?.data


return (
    <div style={{padding:"0 30px "}}>
       <p style={{fontSize: '18px', fontWeight:600,}}>Student Details</p>
       <Divider style={{ margin: "-6px 0 12px 0" }}></Divider>
       <Card hoverable className = "">
        <Flex justify="center" align="center">
                   <Col span={3}> 
         <img src={gender === 'male'? maleStudent : femaleStudent} style={{borderRadius:100}} height={120} width={120} alt="avater" />
        </Col>
        <Col span={20}>
          <Row><p style={{fontSize: '18px', fontWeight:500, margin: '0 0 8px 0'}}>{getFullName(name)}</p></Row>
          <Divider style={{ margin: "0 0 8px 0" }} ></Divider>
          <Row >
            <Col style={{}} span={8}>
          <Row style={{fontSize: '13px'}}>Student ID : {id}</Row>
          <Row style={{fontSize: '13px'}}>Gender : {gender}</Row>
          <Row style={{fontSize: '13px'}}>Blood Group : {bloodGroup}</Row>
          </Col>

          <Col>
          <Row style={{fontSize: '13px'}}><Flex justify="center" align="center" gap={5}><AiTwotoneMail/> Email: {email}</Flex></Row>
          <Row style={{fontSize: '13px'}}><Flex justify="center" align="center" gap={5}><FaLocationCrosshairs/> Address : {presentAddress}</Flex></Row>
          <Row style={{fontSize: '13px'}}><Flex justify="center" align="center" gap={5}><SlCalender></SlCalender> Date of Birth: {dateOfBirth}</Flex></Row>
          </Col>
          <Divider style={{ margin: "8px 0 0 0" }}></Divider>

          </Row>
        </Col>
        
        </Flex>

        <div style={{textAlign:"start", padding:'8px 0 0 0'}}>
        <Flex align="center" gap={5} style={{fontWeight:500, fontSize:"13px"}}><RiGraduationCapFill/>Department of {departmentName} </Flex>
        <Flex  align="center" gap={5} style={{fontSize:"13px"}}><FaBuildingColumns/> Faculty of Computer Development</Flex>
       <Flex align="center" gap={5} style={{fontSize:"13px"}}><LuShoppingBasket/> Current Semestre: {semesterName}, {year} ({startMonth})</Flex>
        </div>
       </Card>
       <Row gutter={14} style={{margin: "10px 0 10px 0"}}>
         <Col span={12} style={{alignItems:"flex-start"}}>
           <Card hoverable>
          <Row style={{borderBottom: "1px solid #d9d9d9", fontWeight:700, fontSize: "14px"}}>Personal Information</Row>
          <Row style={{ borderBottom: "1px solid #d9d9d9", fontSize: "14px"}}>Full Name :  <span style={{fontWeight:500, padding:'0 0 0 6px'}}> {getFullName(name)} </span></Row>
          <Row style={{ borderBottom: "1px solid #d9d9d9", fontSize: "14px"}}>Student ID : <span style={{fontWeight:500, padding:'0 0 0 6px'}}>  {id}</span></Row>
          <Row style={{ borderBottom: "1px solid #d9d9d9", fontSize: "14px"}}>Current Semester : <span style={{fontWeight:500, padding:'0 0 0 6px'}}>{semesterName}, {year} ({startMonth} - {endMonth})</span></Row>
          <Row style={{ borderBottom: "1px solid #d9d9d9", fontSize: "14px"}}>Department : <span style={{fontWeight:500, padding:'0 0 0 6px'}}>{departmentName}</span></Row>
          <Row style={{ borderBottom: "1px solid #d9d9d9", fontSize: "14px"}}>Date of Birth : <span style={{fontWeight:500, padding:'0 0 0 6px'}}>{motherOccupation}</span></Row>
          </Card>
         </Col>
         <Col span={12} style={{alignItems:"flex-start"}}>
         <Card hoverable>  
          <Flex align="center"  style={{borderBottom: "1px solid #d9d9d9", fontWeight:500, fontSize: "14px"}}>Contact Information</Flex>
          <Flex align="center" gap={5} style={{ borderBottom: "1px solid #d9d9d9", fontSize: "14px"}}><FaPhone/> Contact No: <span style={{fontWeight:500}}>{contactNo}</span></Flex>
          <Flex align="center" gap={5} style={{ borderBottom: "1px solid #d9d9d9", fontSize: "14px"}}><IoMdMailOpen /> Email: <span style={{fontWeight:500}}>{email}</span></Flex>
          <Flex align="center" gap={5} style={{ borderBottom: "1px solid #d9d9d9", fontSize: "14px"}}><TbEmergencyBed/> Emergency Contact No: <span style={{fontWeight:500}}>{emergencyContactInfo}</span></Flex>
         <Flex align="center" gap={5} style={{ borderBottom: "1px solid #d9d9d9", fontSize: "14px"}}><BiSolidLocationPlus/> Present Address: <span style={{fontWeight:500}}>{presentAddress}</span></Flex>
         <Flex align="center" gap={5} style={{ borderBottom: "1px solid #d9d9d9", fontSize: "14px"}}><FaBuildingColumns/>Permanent Address: <span style={{fontWeight:500}}>{permanentAddress}</span></Flex>
          </Card>
         </Col>
       </Row>
       <Row gutter={14} style={{margin: "10px 0 10px 0"}}>
                 <Col span={12} style={{alignItems:"flex-start"}}>
          <Card hoverable>
          <Row style={{borderBottom: "1px solid #d9d9d9", fontWeight:700, fontSize: "14px"}}>Local Gurdian Information</Row>
          <Row style={{ borderBottom: "1px solid #d9d9d9", fontSize: "14px"}}>Gurdian's Name :  <span style={{fontWeight:500, padding:'0 0 0 6px'}}> {localGuardianName} </span></Row>
          <Row style={{ borderBottom: "1px solid #d9d9d9", fontSize: "14px"}}>Gurdian's Occupation : <span style={{fontWeight:500, padding:'0 0 0 6px'}}>  {localGuardianOccupation}</span></Row>
          <Row style={{ borderBottom: "1px solid #d9d9d9", fontSize: "14px"}}>Gurdian's Contact : <span style={{fontWeight:500, padding:'0 0 0 6px'}}>{localGuardianContact}</span></Row>
          <Row style={{ borderBottom: "1px solid #d9d9d9", fontSize: "14px"}}>Gurdian's Address : <span style={{fontWeight:500, padding:'0 0 0 6px'}}>{localGuardianAddress}</span></Row>
          <Row style={{ borderBottom: "1px solid #d9d9d9", fontSize: "14px"}}>Gurdian's Emergency Contact No : <span style={{fontWeight:500, padding:'0 0 0 6px'}}>{motherContactNo}</span></Row>
          </Card>
         </Col>
         <Col span={12} style={{alignItems:"flex-start"}}>
          <Card hoverable>
          <Row style={{borderBottom: "1px solid #d9d9d9", fontWeight:700, fontSize: "14px"}}>Gurdian Information</Row>
          <Row style={{ borderBottom: "1px solid #d9d9d9", fontSize: "14px"}}>Father's Name :  <span style={{fontWeight:500, padding:'0 0 0 6px'}}> {fatherName} </span></Row>
          <Row style={{ borderBottom: "1px solid #d9d9d9", fontSize: "14px"}}>Father's Occupation : <span style={{fontWeight:500, padding:'0 0 0 6px'}}>  {fatherOccupation}</span></Row>
          <Row style={{ borderBottom: "1px solid #d9d9d9", fontSize: "14px"}}>Father's Contact : <span style={{fontWeight:500, padding:'0 0 0 6px'}}>{fatherContactNo}</span></Row>
          <Row style={{ borderBottom: "1px solid #d9d9d9", fontSize: "14px"}}>Mother's Name : <span style={{fontWeight:500, padding:'0 0 0 6px'}}>{motherName}</span></Row>
          <Row style={{ borderBottom: "1px solid #d9d9d9", fontSize: "14px"}}>Mother's Occupation : <span style={{fontWeight:500, padding:'0 0 0 6px'}}>{motherOccupation}</span></Row>
          </Card>
         </Col>
      </Row>
       
    </div>
  );
};

export default StudentDetails;