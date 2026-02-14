import {useGetMeQuery } from "../../features/admin/userManagementApi";
import { Card, Divider, Flex, Row, Spin} from "antd";
import '../../index.css'
import { getFullName } from "../../utils/GetFullName";
import { FaCode, FaRegObjectGroup } from "react-icons/fa6";
import {  IoHeartSharp } from "react-icons/io5";
import { MdKeyboardArrowRight, MdOutlineLibraryBooks, MdQuiz } from "react-icons/md";
import { ProfilePicGenerator } from "../../utils/ProfilePicGenerator";
import { SiIledefrancemobilites } from "react-icons/si";
import { TiWiFi } from "react-icons/ti";
import { RiPresentationFill } from "react-icons/ri";
import { IoMdFlask } from "react-icons/io";
import { BsFillChatLeftTextFill } from "react-icons/bs";


const DashboardRightSideCol = () => {
       const {data: getMe, isLoading: isMeLoading} = useGetMeQuery(undefined)
       if(isMeLoading) {
       return  <Flex  justify="center" align="center" style={{ height: "80vh" }}>
                          <div style={{ color: "#608cd3ff" }}>
                           <Spin size="default" />
                          </div>
                     </Flex>
     }
    
     const {name,
     gender,
     email,
     id,
     academicDepartment: {
    name: departmentName,
  } = {},
   } =getMe?.data ?? {}
   
  return (
    <Flex vertical align="center" gap={10} >
                  
                  <Row style={{width:"100%"}}>
                     <Card  bodyStyle={{ padding: "0" }} style={{ borderRadius:"2px", width:"100%", padding:"16px 16px 7px 16px"}}>
                     <Flex vertical gap={4}>
                        <span style={{fontWeight:"600", fontSize:"17px"}}>Student Info</span>
                        <Flex gap={20} align="center">
                           <div style={{height:80, overflow:'hidden'}}>
                            <ProfilePicGenerator gender={gender} style={{height: "100%", width: "100%", borderRadius:"100%", objectFit:"cover", overflow:'hidden'}}/>
                           </div>
                             <Flex vertical style={{fontSize:"13px", fontFamily:"sans-serif"}}>
                                <span style={{fontWeight: "600", fontSize:"22px"}}>{getFullName(name, {onlyFirstAndMiddleName: true})}</span>
                                <span style={{color:"#675656ff"}}>Email: {email}</span>
                                <span style={{color:"#0c0101ff"}}>{id}</span>
                             </Flex>
                        </Flex>

                        <Divider style={{margin:"5px", minWidth:"100%"}}/>
                        <Flex align="center" style={{paddingBottom:"7px", color:'#534d4dff'}}>
                          <span style={{paddingRight: "5px"}}><MdOutlineLibraryBooks></MdOutlineLibraryBooks></span> 
                          <span> Major : {departmentName?.replace(/^Department of\s+/i, "")}</span>
                         </Flex>

                       <Card  bodyStyle={{ padding: "0" }} style={{ borderRadius:"2px"}}>
                          <Flex justify="center" style={{width:"100%", color:"#ffffff"}}>
                            <div style={{flex:1,fontSize:"18px", padding:"8px 0" ,background:"linear-gradient(90deg, #45a5f3ff, #0760c5ff)"}} >
                                 <Flex vertical align="center" justify="center" gap={0}>
                                <Flex align="center" justify="center" gap={3} style={{ fontSize:"20px"}}><TiWiFi/> <span>3.8</span></Flex>
                                   <span>GPA</span>
                                 </Flex>
                            </div>
                            <div style={{flex:1,fontSize:"13px", padding:"8px 0" ,background:"#f4961aff"}} >
                                 <Flex vertical align="center" justify="center" gap={0}>
                                   <Flex align="center" justify="center" gap={3} style={{ fontSize:"20px"}}>
                                    <IoHeartSharp/> <span>92%</span></Flex>
                                   <span>Attendence</span>
                                 </Flex>
                            </div>
                            <div style={{flex:1,fontSize:"12px", padding:"8px 0" ,background:"#febe1eff"}} >
                                 <Flex vertical align="center" justify="center" gap={0}>
                                     <span style={{fontSize:"18px"}}>78/120</span>
                                     <span style={{fontSize:""}}>Credits</span>
                                     <span style={{fontSize:""}}>Complicated</span>
                                 </Flex>
                            </div>
                         </Flex>
                      </Card>

                      <Divider style={{margin:"5px", minWidth:"100%"}}/>
                       <p>
                      <button style={{width:"100%", borderRadius:"4px", border:"none",padding:"6px 0", background:"linear-gradient(90deg, #45a5f3ff, #0760c5ff)" , color:"#ffffff"}}>
                         <Flex align="center" justify="center" style={{fontSize:"14px"}}>
                          <span>View Profile</span>  <MdKeyboardArrowRight style={{fontSize:"20px"}}/>
                         </Flex>
                      </button>
                      </p>
                     </Flex>
                </Card>
                  </Row>

                  <Row style={{width:"100%"}}>
                       <Card  bodyStyle={{ padding: "0" }} style={{ borderRadius:"2px", width:"100%", padding:"12px 16px"}}>
                     <Flex vertical gap={4}  style={{width:"100%"}}>
                        <span style={{fontWeight:"600", fontSize:"17px", fontFamily:"sans-serif"}}>Upcoming Event</span>
                        <Divider style={{margin:"4px 0 4px 0", minWidth:"100%"}}/>

                        <Flex vertical gap={6}>
                          
                           <Flex align="center" justify="space-between">
                                <Flex align="start" justify="start" gap={18}>
                                   <RiPresentationFill style={{color:"#13569aff", fontSize:"25px"}}/>
                                   <Flex vertical gap={7} style={{lineHeight:"1"}}>
                                    <span style={{fontWeight:"600"}}>Project Presentation</span>
                                   <span style={{color:"#4b4848ff", fontSize:"12px"}}>Tomorrow, 2.00 PM</span>
                                   </Flex>
                                </Flex>
                              <span style={{color:"#13569aff", fontWeight:"600", fontSize:"22px"}}>A+</span>
                           </Flex>
                           <Divider style={{margin:"4px 0 4px 0", minWidth:"100%"}}/>
                           <Flex align="center" justify="space-between">
                                <Flex align="start" justify="start" gap={18}>
                                   <IoMdFlask style={{color:"#0dcff6ff", fontSize:"25px"}}/>
                                   <Flex vertical gap={7} style={{lineHeight:"1"}}>
                                    <span style={{fontWeight:"600"}}>Biology Exam</span>
                                   <span style={{color:"#4b4848ff", fontSize:"12px"}}>May 28, 10.00 AM</span>
                                   </Flex>
                                </Flex>
                              <span style={{color:"#e1a306ff", fontWeight:"600", fontSize:"22px"}}>B+</span>
                           </Flex>
                           <Divider style={{margin:"4px 0 4px 0", minWidth:"100%"}}/>
                           <Flex align="center" justify="space-between">
                                <Flex align="start" justify="start" gap={18}>
                                   <FaRegObjectGroup style={{color:"#e1a306ff", fontSize:"25px"}}/>
                                   <Flex vertical gap={7} style={{lineHeight:"1"}}>
                                    <span style={{fontWeight:"600"}}>Study Group Meeting</span>
                                   <span style={{color:"#4b4848ff", fontSize:"12px"}}>After 2 days, 4.00 PM</span>
                                   </Flex>
                                </Flex>
                              <span style={{color:"#1bb143ff", fontWeight:"600", fontSize:"22px"}}>A+</span>
                           </Flex>
                          <Divider style={{margin:"2px 0 4px 0", minWidth:"100%"}}/>
                        
                      </Flex>
                       
                  </Flex>
                  <a style={{color:"#2974e4ff",  fontSize:"12px", fontFamily:"sans-serif"}}>
                     <Flex justify="end">
                        <span>View calender</span>  <MdKeyboardArrowRight style={{fontSize:"20px"}}/>
                        </Flex></a>
                </Card>
              </Row>

              <Row style={{width:"100%"}}>
                    <Card  bodyStyle={{ padding: "0" }} style={{ borderRadius:"2px", width:"100%", padding:"12px 16px"}}>
                     <Flex vertical gap={4}  style={{width:"100%"}}>
                        <span style={{fontWeight:"600", fontSize:"17px", fontFamily:"sans-serif"}}>Recent Grades</span>
                        <Divider style={{margin:"2px 0 0px 0", minWidth:"100%"}}/>
                          
                          <Flex vertical>
                          
                           <Flex align="center" justify="space-between">
                                <Flex align="start" justify="start" gap={18}>
                                   <MdQuiz style={{color:"#13569aff", fontSize:"25px"}}/>
                                   <span style={{fontWeight:"600"}}>History Quiz</span>
                                </Flex>
                              <span style={{color:"#0b7aa9ff", fontWeight:"600", fontSize:"20px"}}>A-</span>
                           </Flex>
                            <Divider style={{margin:"2px 0 4px 0", minWidth:"100%"}}/>
                           
                           <Flex align="center" justify="space-between">
                                <Flex align="start" justify="start" gap={18}>
                                   <BsFillChatLeftTextFill style={{color:"#e1a306ff", fontSize:"22px"}}/>
                                   <span style={{fontWeight:"600"}}>Math Assignment</span>
                                </Flex>
                              <span style={{color:"#e1a306ff", fontWeight:"600", fontSize:"20px"}}>B+</span>
                           </Flex>
                            <Divider style={{margin:"2px 0 4px 0", minWidth:"100%"}}/>
                           
                           <Flex align="center" justify="space-between">
                                <Flex align="start" justify="start" gap={18}>
                                   <FaCode style={{color:"#089ebcff", fontSize:"22px"}}/>
                                   <span style={{fontWeight:"600"}}>Web Developing </span>
                                </Flex>
                              <span style={{color:"#0b88a1ff", fontWeight:"600", fontSize:"20px"}}>B+</span>
                           </Flex>
                            <Divider style={{margin:"2px 0 4px 0", minWidth:"100%"}}/>
                           <Flex align="center" justify="space-between">
                                <Flex align="start" justify="start" gap={18}>
                                   <SiIledefrancemobilites style={{color:"#1bb143ff", fontSize:"22px"}}/>
                                   <span style={{fontWeight:"600"}}>English Eassy</span>
                                </Flex>
                              <span style={{color:"#1bb143ff", fontWeight:"600", fontSize:"20px"}}>B+</span>
                           </Flex>
                         
                           
                        
                      </Flex>
                  </Flex>
                </Card>
                
              </Row>
              <Row style={{width:"100%", height:"100%"}}>
                    <Card  bodyStyle={{ padding: "0" }} style={{ borderRadius:"2px", width:"100%",height:"100%", padding:"17px 16px"}}>
                     <Flex vertical gap={4} align="center" style={{width:"100%"}}>
                       <span style={{fontSize:"12px", color:"#656262ff"}}> All Rights Are Reserved by @technoUniversity </span>
                          
                  </Flex>
                </Card>
              </Row>

                  
                </Flex> 
  );
};

export default DashboardRightSideCol;