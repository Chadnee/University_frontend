import {useGetMeQuery } from "../../features/admin/userManagementApi";
import maleStudent from '../../assets/images/maleStudent.jpg'
import femaleStudent from '../../assets/images/femaileStudent.jpg'
import { Button, Card, Col, Divider, Flex, Row, Spin } from "antd";
import '../../index.css'
import { getFullName } from "../../utils/GetFullName";
import { useGetMyEnrolledAllCoursesQuery, useGetMyEnrolledSateQuery } from "../../features/student/studentCourseManagementApi";
import { FaBookOpen, FaPenNib } from "react-icons/fa6";
import { BookOutlined, DesktopOutlined, LaptopOutlined, PlayCircleOutlined, SoundOutlined } from "@ant-design/icons";
import { FaBookReader } from "react-icons/fa";
import { IoBagAdd } from "react-icons/io5";
import { TbMessageChatbotFilled } from "react-icons/tb";
import { MdMessage } from "react-icons/md";

import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import './styles.css';

// import required modules
import { Pagination } from 'swiper/modules';

const classImageArray = [
  "https://plus.unsplash.com/premium_photo-1661963290501-4c1d7a095c0c?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://media.istockphoto.com/id/1376134616/photo/focus-on-girl-young-school-kids-in-uniform-applauding-or-clapping-at-classroom-concept-of.webp?a=1&b=1&s=612x612&w=0&k=20&c=ONtFuVNgV0iUSnHLY_EB9b5HwlRBcchCNBA4oHiuFqQ=",
  "https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://media.istockphoto.com/id/2183417968/photo/rear-view-of-business-colleagues-attending-a-seminar-in-board-room.jpg?s=612x612&w=0&k=20&c=Ttx19Jr9_sDt36sIIEAMAA42-HXC1a-UEW1UI89hK3E="
]

const getDataClass =(data=[])=> {
     if (!data.length) return []
     const result:any = [];
     let i = 0;

     while (result.length < 4) {
      result.push(data[i % data.length]);
      i++;
     }
     return result
}

const StudentDashboard = () => {
  
  const {data: getMe, isLoading: isMeLoading} = useGetMeQuery(undefined)
  const {data:myEnrollment, isLoading:isMyEnrollmentLoading} = useGetMyEnrolledAllCoursesQuery(undefined)

  const {data: myEnrolledState, isLoading: isMyEnrolledStateLoading} = useGetMyEnrolledSateQuery(undefined)
  
  console.log(myEnrolledState)
if(isMeLoading) {
    return  <Flex  justify="center" align="center" style={{ height: "80vh" }}>
                       <div style={{ color: "#608cd3ff" }}>
                        <Spin size="medium" />
                       </div>
                  </Flex>
  }
  const enrolledStat = (myEnrolledState?.data)? myEnrolledState?.data?.totalEnrolledCourses : "0"
  const {name,
  gender,
  id,
   academicDepartment: {
    _id: departmentId,
    name: departmentName,
    academicFaculty: facultyInfo
  },
} =getMe?.data


//const {totalEnrolledCourses} = myEnrolledState?.data
// const data = myEnrollment?.data?.map(item =>item._id)
//  //const {totalEnrolledCourses} = myEnrollment?.data[0]
 console.log('mm',myEnrollment)
  return (
    <div style={{margin:"0 auto"}} >
        <Row gutter={6}>
           <Col lg={{span:18}} sm={{span:24}}>
              <p className="font-form" style={{fontSize: "22px", fontWeight:"600"}}>Welcome back, {getFullName(name, {onlyFirstName: true})} !!</p>
              <p>Here is your overview for today.</p>
             <Flex vertical gap={10} style={{padding:"0 5px 0 0"}}>
                  <Row gutter={15}>
                 <Col lg={{span:6}} sm={{span:10}}>
                   <Card  bodyStyle={{ padding: "11px 11px" }} style={{background:"#e4effcff", borderBottom:"4px solid #0466d5ff", boxShadow: "5px 5px 0 0 rgba(185, 170, 170, 0.2)", borderRadius: "5px" }}>
                    <Flex vertical gap={0}>
                        <Flex justify="space-between" align="center" style={{lineHeight:"1.2"}}>
                           <span className="font-admin-condensed" style={{fontSize: "47px",  color:"#0466d5ff", fontWeight:"600", paddingBottom:"2px"}}>
                            {enrolledStat}</span>
                           <FaBookReader style={{fontSize: "32px", color:"#bad2f0ff"}}></FaBookReader>
                        </Flex>
                        <span style={{fontSize: "17px", lineHeight:"1",fontWeight:"600", paddingBottom:"2px"}}>Enrolled Couses</span>
                    </Flex>
                   </Card>
                 </Col>
                 <Col lg={{span:6}} sm={{span:12}}>
                   <Card  bodyStyle={{ padding: "11px 11px" }} style={{background:"#f8e4deff", borderBottom:"4px solid #d43808ff" , boxShadow: "5px 5px 0 0 rgba(185, 170, 170, 0.2)", borderRadius: "5px"}}>
                    <Flex vertical>
                        <Flex justify="space-between" align="center" style={{lineHeight:"1.2"}}>
                           <span className="font-admin-condensed" style={{fontSize: "47px", color:"#c93305ff", fontWeight:"600", paddingBottom:"2px"}}>2</span>
                           <IoBagAdd style={{fontSize: "32px", color:"#f5a992ff"}}></IoBagAdd>
                        </Flex>
                        <span style={{fontSize: "17px", lineHeight:"1", fontWeight:"600", paddingBottom:"2px"}}>Assignment Due</span>
                    </Flex>
                   </Card>
                 </Col>
                 <Col lg={{span:6}} sm={{span:12}}>
                   <Card  bodyStyle={{ padding: "11px 11px" }} style={{background:"#fcf8ebff ", borderBottom:"4px solid #FFCC00" , boxShadow: "5px 5px 0 0 rgba(185, 170, 170, 0.2)", borderRadius: "5px"}}>
                    <Flex vertical>
                        <Flex justify="space-between" align="center" style={{lineHeight:"1.2"}}>
                           <span className="font-admin-condensed" style={{fontSize: "47px", color:"#FFCC00", fontWeight:"600", paddingBottom:"2px"}}>1</span>
                           <FaPenNib style={{fontSize: "32px", color:"#ffcebfff "}}></FaPenNib>
                        </Flex>
                        <span style={{fontSize: "17px", lineHeight:"1", fontWeight:"600", paddingBottom:"2px"}}>Upcoming Exam</span>
                    </Flex>
                   </Card>
                 </Col>
                 <Col lg={{span:6}} sm={{span:12}}>
                   <Card  bodyStyle={{ padding: "11px 11px" }} style={{background:"#ddefe7ff", borderBottom:"4px solid #1F7D53" , boxShadow: "5px 5px 0 0 rgba(185, 170, 170, 0.2)", borderRadius: "5px"}}>
                    <Flex vertical>
                        <Flex justify="space-between" align="center" style={{lineHeight:"1.2"}}>
                           <span className="font-admin-condensed" style={{fontSize: "47px", color:"#1F7D53", fontWeight:"600", paddingBottom:"2px"}}>8</span>
                           <MdMessage style={{fontSize: "32px", color:"#40a87bff", opacity:0.6}}></MdMessage>
                        </Flex>
                        <span style={{fontSize: "17px", lineHeight:"1", fontWeight:"600", paddingBottom:"2px"}}>New Message</span>
                    </Flex>
                   </Card>
                 </Col>
                
              </Row>
              <Row>
                  <Swiper
        slidesPerView={3}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
      0: {
        slidesPerView: 2,   // mobile → swipe
      },
      768: {
        slidesPerView: 3,   // tablet
      },
      1024: {
        slidesPerView: 4,   // desktop → show all nicely
      },
    }}
        modules={[Pagination]}
        className="mySwiper"
        
      >
       
            {
              
         getDataClass(myEnrollment?.data)?.map((item, index) => {
           const image = classImageArray[index % classImageArray.length];
   return (<SwiperSlide key={`${item._id} - ${index}`}>
       <Card  bodyStyle={{ padding: "0" }} style={{ borderRadius:"5px", boxShadow: "5px 5px 0 0 rgba(185, 170, 170, 0.2)"}}>
            <Flex vertical gap={10}>
                <div style={{width:"100%", height: 120, overflow:"hidden", background:"#f5f5f5"}}>
                  <img src={image} style={{width:"100%", height:"100%", objectFit:"cover", overflow:"hidden"}} alt="class" />
                </div>
                <Flex vertical gap={5} style={{padding:"10px 10px"}}>
                   <span style={{fontWeight:"650"}}>
                       <span style={{paddingRight:"10px"}}>{item?.course?.title}</span> <span>Code #{item?.course?.code}</span>
                   </span>
                   <span>Prof. {item?.faculty?.name}</span>
                   <p><Button style={{width:"100%", background:"linear-gradient(200deg, #1384f5ff, #96c2f3ff)"}}> View Course</Button></p>
                </Flex>
            </Flex>
       </Card>
    </SwiperSlide>
  )} )

}
      </Swiper>
              </Row>
             </Flex>
           </Col>
           <Col lg={{span:6}} sm={{span:24}}>

           </Col>
        </Row>
     </div>
  );
};

export default StudentDashboard;