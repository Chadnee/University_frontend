import {useGetMeQuery } from "../../features/admin/userManagementApi";
import maleStudent from '../../assets/images/maleStudent.jpg'
import femaleStudent from '../../assets/images/femaileStudent.jpg'
import { Card, Col, Divider, Flex, Row, Spin } from "antd";
import '../../index.css'
import { getFullName } from "../../utils/GetFullName";
const StudentDashboard = () => {
  
  const {data: getMe, isLoading: isMeLoading} = useGetMeQuery(undefined)
  console.log(getMe)

  if(isMeLoading) {
    return  <Flex  justify="center" align="center" style={{ height: "80vh" }}>
                       <div style={{ color: "#608cd3ff" }}>
                        <Spin size="medium" />
                       </div>
                  </Flex>
  }
  const {name,
  gender,
  id,
   academicDepartment: {
    _id: departmentId,
    name: departmentName,
    academicFaculty: facultyInfo
  },
} =getMe?.data
console.log(getMe)
  return (
    <div style={{margin:"0 auto"}} >
        <Row gutter={6}>
           <Col lg={{span:18}} sm={{span:24}}>
              <p className="font-form" style={{fontSize: "22px", fontWeight:"600"}}>Welcome back, {getFullName(name, {onlyFirstName: true})} !!</p>
              <p>Here is your overview for today.</p>
              <Row gutter={4}>
                 <Col lg={{span:6}} sm={{span:12}}>
                   <Card style={{background:"#e4effcff", borderBottom:"4px solid #0760c5ff"}}>Active class</Card>
                 </Col>
                 <Col lg={{span:6}} sm={{span:12}}>
                   <Card>Active class</Card>
                 </Col>
                 <Col lg={{span:6}} sm={{span:12}}>
                   <Card>Active class</Card>
                 </Col>
                 <Col lg={{span:6}} sm={{span:12}}>
                   <Card>Active class</Card>
                 </Col>
              </Row>
           </Col>
           <Col lg={{span:6}} sm={{span:24}}>

           </Col>
        </Row>
     </div>
  );
};

export default StudentDashboard;