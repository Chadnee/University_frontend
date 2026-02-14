import {useGetMeQuery } from "../../features/admin/userManagementApi";
import { Button, Card, Col, Divider, Flex, Progress, Row, Spin } from "antd";
import '../../index.css'
import { getFullName } from "../../utils/GetFullName";
import { useGetMyEnrolledAllCoursesQuery, useGetMyEnrolledSateQuery } from "../../features/student/studentCourseManagementApi";
import { FaFilePdf, FaGift, FaPenNib} from "react-icons/fa6";
import { FaBookReader } from "react-icons/fa";
import { IoBagAdd} from "react-icons/io5";
import { MdCheckCircle, MdMessage} from "react-icons/md";

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import './styles.css';

// import required modules
import { Pagination } from 'swiper/modules';
import DashboardRightSideCol from "./DashboardRightCol";
import { IoMdFlask } from "react-icons/io";
import { AiOutlineGroup } from "react-icons/ai";
import { buttonBgColor, classImageArray, skills } from "../constants/global";
import { Rating, RoundedStar } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'




const getDataClass =<T,>(data: T[]=[])=> {
     if (!data.length) return []
     const result:T[] = [];
     let i = 0;

     while (result.length < 4) {
      result.push(data[i % data.length]);
      i++;
     }
     return result
}

const StudentDashboard = () => {
  const ratingStyles = {
  itemShapes: RoundedStar,
  activeFillColor: '#f5b301',   // gold
  inactiveFillColor: '#e4e4e4', // light gray
}

  
  const {data: getMe, isLoading: isMeLoading} = useGetMeQuery(undefined)
  const {data:myEnrollment, isLoading:isMyEnrollmentLoading} = useGetMyEnrolledAllCoursesQuery(undefined)

  const {data: myEnrolledState} = useGetMyEnrolledSateQuery(undefined)
  
  console.log(myEnrolledState)
if(isMeLoading) {
    return  <Flex  justify="center" align="center" style={{ height: "80vh" }}>
                       <div style={{ color: "#608cd3ff" }}>
                        <Spin />
                       </div>
                  </Flex>
  }
  const enrolledStat = (myEnrolledState?.data)? myEnrolledState?.data?.totalEnrolledCourses : "0"
  const name =getMe?.data?.name



 console.log('mm', getMe?.data)
 
  return (
    <div style={{margin:"0 auto"}} >
        <Row gutter={10} style={{width:"100%"}}>
           <Col lg={{span:18}} sm={{span:24}}>
              <p className="font-form" style={{fontSize: "26px", fontWeight:"600", lineHeight:"8px"}}>Welcome back, {name && getFullName(name, {onlyFirstName: true})} !!</p>
              <p style={{lineHeight:"10px"}}>Here is your overview for today.</p>
             <Flex vertical gap={10} style={{padding:"0 5px 0 0"}}>
                  <Row gutter={15} style={{width:"100%"}}>
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
                           <span className="font-admin-condensed" style={{fontSize: "47px", color:"#e6880eff", fontWeight:"600", paddingBottom:"2px"}}>1</span>
                           <FaPenNib style={{fontSize: "32px", color:"#ffcebfff "}}></FaPenNib>
                        </Flex>
                        <span style={{fontSize: "17px", lineHeight:"1", fontWeight:"600", paddingBottom:"2px"}}>Upcoming Exam</span>
                    </Flex>
                   </Card>
                 </Col>
                 <Col lg={{span:6}} sm={{span:12}}>
                  {/* #1F7D53  */}
                   <Card  bodyStyle={{ padding: "11px 11px" }} style={{background:"#ddefe7ff", borderBottom:"4px solid #3a8b30ff" , boxShadow: "5px 5px 0 0 rgba(185, 170, 170, 0.2)", borderRadius: "5px"}}>
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
              <Divider style={{margin:"5px 0 0 0", minWidth:"100%"}}/>
              <Row style={{width:"100%"}}>
                <span style={{fontWeight:"600",paddingBottom:"10px", fontSize:"22px"}}>My Courses</span>
                  <Swiper
        slidesPerView={3}
        spaceBetween={14}
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
            (!myEnrollment|| isMyEnrollmentLoading)?<Flex  justify="center" align="center" style={{ height: "80vh" }}>
                       <div style={{ color: "#608cd3ff" }}>
                        <Spin />
                       </div>
                  </Flex> : <> {
              
         getDataClass(myEnrollment?.data)?.map((item, index) => {
           const image = classImageArray[index % classImageArray.length];
           const buttonBg = buttonBgColor[index % buttonBgColor.length];
   return (<SwiperSlide key={`${item._id} - ${index}`}>
       <Card  bodyStyle={{ padding: "8px" }} style={{ borderRadius:"5px",}}>
            <Flex vertical gap={10}>
                <div style={{width:"100%", height: 120, overflow:"hidden", background:"#f5f5f5"}}>
                  <img src={image} style={{width:"100%", height:"100%", objectFit:"cover", overflow:"hidden"}} alt="class" />
                </div>
                <Flex vertical gap={5} style={{padding:"5px 14px"}}>
                   <span style={{fontWeight:"620"}}>
                       <span style={{paddingRight:"10px"}}>{item?.course?.title}</span> <span>Code #{item?.course?.code}</span>
                   </span>
                   <span>Prof. {item?.faculty?.name}</span>
                   <p><Button style={{width:"100%",borderRadius:"4px", background:buttonBg, color:"#ffffff"}}> View Course</Button></p>
                </Flex>
            </Flex>
       </Card>
    </SwiperSlide>
  )} )

}</>
           }
      </Swiper>
              </Row>
              
               <Divider style={{margin:"0px", minWidth:"100%"}}/>

          {/* 3rd Row */}
           <Row style={{width:"100%"}} gutter={10}>
           <Col span={16}>
            
             <Flex vertical gap={12}>
                <Row style={{width:"100%"}}>
                                    <span style={{fontWeight:"600",paddingBottom:"8px", fontSize:"18px"}}>Pending Assignment</span>
                                   <Card  bodyStyle={{ padding: "0" }} style={{ borderRadius:"2px", width:"100%", padding:"12px 16px", boxShadow: "2px 3px 0 0 rgba(157, 181, 226, 0.22)"}}>
                                 <Flex vertical gap={8}  style={{width:"100%"}}>
                                  
                                      
                                       <Flex align="center" justify="space-between">
                                            <Flex align="start" justify="start" gap={18}>
                                               <FaFilePdf style={{color:"#febe1eff", fontSize:"25px"}}/>
                                               <Flex vertical gap={7} style={{lineHeight:"1"}}>
                                                <span style={{fontWeight:"600", fontSize:"16px"}}>Research Paper</span>
                                               <span style={{color:"#4b4848ff", fontSize:"12px"}}>Tomorrow, 2.00 PM</span>
                                               </Flex>
                                            </Flex>
                                          <Button style={{background:"linear-gradient(90deg, #2a95edff, #0760c5ff)", color:'#ffffff', fontWeight:"600", fontSize:"15px"}}>Submit</Button>
                                       </Flex>
                                       <Divider style={{margin:"2px 0 4px 0", minWidth:"100%"}}/>
                                       <Flex align="center" justify="space-between">
                                            <Flex align="start" justify="start" gap={18}>
                                               <IoMdFlask style={{color:"#0dcff6ff", fontSize:"25px"}}/>
                                               <Flex vertical gap={7} style={{lineHeight:"1"}}>
                                                <span style={{fontWeight:"600", fontSize:"16px"}}>Biology Exam</span>
                                               <span style={{color:"#4b4848ff", fontSize:"12px"}}>May 28, 10.00 AM</span>
                                               </Flex>
                                            </Flex>
                                            {/* linear-gradient(90deg, #3bc429ff, #237f19ff */}
                                            {/* linear-gradient(90deg, #2aa61aff, #116408ff) */}
                                            
                                          <Button style={{background:"linear-gradient(90deg, #7fb089ff, #3a8b30ff)", fontWeight:"600",color:'#ffffff', fontSize:"15px"}}>View Details</Button>
                                       </Flex>
                                       
                                    
                                  
                              </Flex>
                            </Card>
                          </Row>
             <Row style={{width:"100%"}}>
             
                                   <Card  bodyStyle={{ padding: "0" }} style={{ borderRadius:"2px", width:"100%", padding:"12px 16px", boxShadow: "2px 3px 0 0 rgba(157, 181, 226, 0.22)"}}>
                                 <Flex vertical gap={5}  style={{width:"100%"}}>
                                  
                                       <span style={{fontWeight:"600", fontSize:"17px", fontFamily:"sans-serif"}}>Announcements</span>
                                        <Divider style={{margin:"2px 0 4px 0", minWidth:"100%"}}/>
                                       <Flex align="center" justify="space-between">
                                            <Flex align="start" justify="start" gap={18}>
                                               <MdCheckCircle style={{color:"#13569aff", fontSize:"16"}}/>
                                               <Flex vertical gap={7} style={{lineHeight:"1"}}>
                                                <span style={{fontWeight:"600", fontSize:"16px"}}>Campus Librarry Hours Update</span>
                                               <span style={{color:"#4b4848ff", fontSize:"12px"}}>Library hours extands for one week ...</span>
                                               </Flex>
                                            </Flex>
                                          <span style={{color:'#4b4848ff', fontSize:"14px"}}>3 days ago</span>
                                       </Flex>
                                       <Divider style={{margin:"2px 0 4px 0", minWidth:"100%"}}/>
                                       <Flex align="center" justify="space-between">
                                            <Flex align="start" justify="start" gap={18}>
                                               <AiOutlineGroup style={{color:"#edf1ecff",background:"#2aa61aff", fontSize:"13px"}}/>
                                               <Flex vertical gap={7} style={{lineHeight:"1"}}>
                                                <span style={{fontWeight:"600", fontSize:"16px"}}>New Online Resource Available</span>
                                               <span style={{color:"#4b4848ff", fontSize:"12px"}}>You can now find out a lots of tools and ...</span>
                                               </Flex>
                                            </Flex>
                                            
                                          <span style={{color:'#4b4848ff', fontSize:"14px"}}> 1  week ago</span>
                                       </Flex>
                                       <Divider style={{margin:"2px 0 4px 0", minWidth:"100%"}}/>
                                       <Flex align="center" justify="space-between">
                                            <Flex align="start" justify="start" gap={18}>
                                               <FaGift style={{color:"#467f05ff", fontSize:"16px"}}/>
                                               <Flex vertical gap={7} style={{lineHeight:"1"}}>
                                                <span style={{fontWeight:"600", fontSize:"16px"}}>Rewareded Courses Are Launched</span>
                                               <span style={{color:"#4b4848ff", fontSize:"12px"}}>Attend rewared course to explore new tools  ...</span>
                                               </Flex>
                                            </Flex>
                                            
                                          <span style={{color:'#4b4848ff', fontSize:"14px"}}> 1  week ago</span>
                                       </Flex>
                                       
                                    
                                  
                              </Flex>
                            </Card>
                          </Row>
             </Flex>

           </Col>
           <Col span={8}   style={{paddingRight:0}}>
               <Flex vertical align="streatch" style={{width:"100%"}}>
                    {/* <Row style={{width:"100%", flex:1}}>
                                    <span style={{fontWeight:"600",paddingBottom:"8px", fontSize:"18px"}}>Recent Grades</span>
                                    <Card  bodyStyle={{ padding: "0" }} style={{ borderRadius:"2px", width:"100%", padding:"12px 16px"}}>
                                    <Flex vertical gap={4}>

                                      {
                                        skills.map((skill) => (
                                          <Flex key={skill.key} gap={3}>
                                             <span>
                                              {skill.label}
                                             </span>
                                             <Progress percent={skill.percent}
                                               strokeColor={skill.color}
                                               style={{flex:"1"}}
                                               className="custom-progress"
                                              />
                                          </Flex>
                                        ))
                                      }

                                    </Flex>
                                </Card>
                                  
                              </Row> */}
                
                                    <span style={{fontWeight:"600",paddingBottom:"8px", fontSize:"18px", flex:1}}>Expertise</span>
                                    <Card  bodyStyle={{ padding: "0" }} style={{ borderRadius:"2px", width:"100%", padding:"12px 7px", flex:1}}>
                                     <Flex vertical gap={4}  style={{}}>
                                 {/* <Divider style={{margin:"2px 0 0px 0", minWidth:"100%"}}/> */}
                                          
                                          <Flex vertical>
                                            {
                                              skills.map((skill) => (
                                                <Flex vertical key={skill.key}>
                                                   <Flex align="start" justify="start" gap={5} style={{width:"100%"}}>
                                                    <span style={{color:skill.iconColor, fontSize:"22px", }}>
                                                      {skill.icon}
                                                    </span>
                                                     <Flex vertical  style={{width:"100%"}}>
                                                          <Flex justify="space-between" style={{ width: "100%",  }}>
                                                            <span style={{fontWeight:"600"}}>Expert In {skill.label}</span>
                                                             <Rating
                                                           value={skill.rating}
                                                           readOnly
                                                           itemStyles={ratingStyles}
                                                           style={{ maxWidth:65 }}
                                                             />
                                                            </Flex>
                                                           <Flex key={skill.key} gap={3} style={{}}>
                                                              <Progress percent={skill.percent}
                                                               size="small"
                                                              strokeColor={skill.color}
                                                              style={{flex:"1", margin:"0", lineHeight:"1"}}
                                                              showInfo={false}
                                                              className="custom-progress"
                                                            />
                                                        </Flex>
                                                     
                                                     </Flex>
                                                  
                                                   </Flex>
                                                  
                                                   <Divider style={{margin:"5px 0 5px 0", minWidth:"100%"}}/>

                                                </Flex>
                                              ))
                                            }

                                        
                                      </Flex>
                                  </Flex>
                                </Card>
               </Flex>
           </Col>
           </Row>
          
             </Flex>
           </Col>
       {/* Right side column */}
           <Col lg={{span:6}} sm={{span:24}} style={{marginTop:"20px"}}>
                
              <DashboardRightSideCol></DashboardRightSideCol>
                 
           </Col>
        </Row>
     </div>
  );
};

export default StudentDashboard;