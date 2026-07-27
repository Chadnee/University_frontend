import { Col, Flex, Row, Spin } from "antd";
import {useGetMeQuery,} from "../../../features/admin/userManagementApi";
import waving from "../../../assets/icons/wave.png";
import { getFullName } from "../../../utils/GetFullName";
import useResponsive from "../../../hooks/useResponsive";

import State from "./State";
import Chart from "./Chart";
import TableData from "./TableData";
import UpComingSchedule from "./UpComingSchedule";



const AdminDashboard = () => {
  const { isMobile } = useResponsive();

  const { data: getMySelf, isLoading: isMyselfLoading } =
    useGetMeQuery(undefined);

 
  //console.log(userStats.data)
  console.log(getMySelf)
  // console.log(getvisitors);

  // if (isUserLoading || isMyselfLoading || isGetvisitorsLoading) {
  if (isMyselfLoading) {
    return (
      <Flex justify="center" align="center" style={{ height: "80vh" }}>
        <div style={{ color: "#608cd3ff" }}>
          <Spin />
        </div>
      </Flex>
    );
  }
  // console.log(enrollmentStat);
  // const userState = userStats.data;
  // const mySelf = getMySelf?.data;
  const { name } = getMySelf?.data ?? {};
  // const {data:courses} = course.data ?? []

  // console.log(course)
  //for when want to use color randomly
  // const getRandomColor = () => {
  //   const index = Math.floor(Math.random() * badgeColors.length);
  //   return badgeColors[index];
  // };
  return (
    <div className="" style={{ width: "100%", overflow: "hidden" }}>
      <Flex
        vertical
        gap={1}
        style={{ width: "100%", margin: isMobile ? "0 0 20px 0" : "8px 0 16px  0" }}
      >
        <Flex align="center" gap={14}>
          <span
            style={{ fontSize: isMobile ? "18px" : "20px", fontWeight: "600" }}
          >
            Welcome back, {getFullName(name)}
          </span>
          <img
            src={waving}
            height={isMobile ? 30 : 30}
            width={isMobile ? 30 : 30}
            alt=""
          />
        </Flex>
        <span style={{ fontSize: isMobile ? "9px" : "12px" }}>
          Here's what's happening Techno University today .
        </span>
      </Flex>

      <Row gutter={[16,16]} style={{}}>
        <Col xs={24} md={24} lg={19} style={{}}>
          <Row gutter={[16,16]} align="stretch" style={{ marginRight:0,marginLeft:0}}>
               <State></State>
          </Row>
          <Row gutter={[16,16]} align="stretch" style={{ paddingTop: "16px", width:'100%', marginRight:0, marginLeft:0 }}>
               <Chart></Chart>
          </Row>

          <Row gutter={[16,16]} style={{ width: "100%", marginTop: "16px", marginRight:0,marginLeft:0 }}>
            <TableData></TableData>
          </Row>
        </Col>
        <Col xs={24} md={24} lg={5}>
          
               <UpComingSchedule></UpComingSchedule>
          
        </Col>
      </Row>
    </div>
  );
};

export default AdminDashboard;
