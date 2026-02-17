import {Col, Divider, Flex, Row, Space, Spin } from "antd";
import {
  useGetAllCountedTotalUsersQuery,
  useGetMeQuery,
} from "../../features/admin/userManagementApi";
import waving from "../../../src/assets/icons/wave.png";
import { BsPeopleFill } from "react-icons/bs";
import { FaLayerGroup } from "react-icons/fa6";
import { GiTeacher } from "react-icons/gi";
import { FaRegChartBar } from "react-icons/fa";
import { MdStackedLineChart } from "react-icons/md";
import { TiArrowSortedDown, TiArrowSortedUp } from "react-icons/ti";
import maleStudent from "../../../src/assets/images/maleStudent.jpg";
import femaleStudent from "../../../src/assets/images/femaileStudent.jpg";
//import for displaying re-chart
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import {
  useGetStudentEnrolledStatusQuery,
  useGetvisitorStateQuery,
} from "../../features/admin/dashboardManagementApi";
import { useGetAllCourseQuery } from "../../features/admin/courseManagementApi";
import { getFullName } from "../../utils/GetFullName";
import type { TEnrolledState } from "../constants/global";
import useResponsive from "../../hooks/useResponsive";
import { ProfilePicGenerator } from "../../utils/ProfilePicGenerator";

// import { RechartsDevtools } from '@recharts/devtools';

const data = [
  { month: "Jan", students: 120, enrollments: 90 },
  { month: "Feb", students: 150, enrollments: 110 },
  { month: "Mar", students: 180, enrollments: 140 },
  { month: "Apr", students: 220, enrollments: 170 },
  { month: "May", students: 260, enrollments: 210 },
  { month: "Jun", students: 300, enrollments: 250 },
  { month: "Jul", students: 340, enrollments: 290 },
  { month: "Aug", students: 300, enrollments: 170 },
  { month: "Sep", students: 250, enrollments: 210 },
  { month: "Oct", students: 180, enrollments: 250 },
  { month: "Nov", students: 120, enrollments: 290 },
];

const AdminDashboard = () => {
  const {isMobile} = useResponsive()

  const { data: userStats} =
    useGetAllCountedTotalUsersQuery(undefined);
  const { data: getMySelf, isLoading: isMyselfLoading } =
    useGetMeQuery(undefined);
  const { data: getvisitors} =
    useGetvisitorStateQuery(undefined);
  const { data: enrollmentStat} =
    useGetStudentEnrolledStatusQuery(undefined);
  const { data: course} =
    useGetAllCourseQuery(undefined);
  //console.log(userStats.data)
  // console.log(getMySelf)
  console.log(getvisitors);

 // if (isUserLoading || isMyselfLoading || isGetvisitorsLoading) {
  if ( isMyselfLoading ) {
    return (
              <Flex  justify="center" align="center" style={{ height: "80vh" }}>
                   <div style={{ color: "#608cd3ff" }}>
                    <Spin/>
                   </div>
              </Flex>
            );
  }
  console.log(enrollmentStat);
  // const userState = userStats.data;
  // const mySelf = getMySelf?.data;
  const { students, faculty} = userStats?.data ?? {};
  const { name} = getMySelf?.data ?? {};
  // const {data:courses} = course.data ?? []

  const badgeColors = ["#F4B342", "#8f34e4ff", "#4caf4fd3"];
  const courseData = ["110", "160", "210", "80", "120"];
console.log(course)
  //for when want to use color randomly
  // const getRandomColor = () => {
  //   const index = Math.floor(Math.random() * badgeColors.length);
  //   return badgeColors[index];
  // };
  return (
    <div className="" style={{width:"100%", overflow:"hidden"}}>
      <Flex align="center" gap={20} style={{width:"100%", marginBottom:isMobile?"10px" : "0"}}>
        <p style={{fontSize:isMobile?"18px":"30px", fontWeight:"700",}}>Welcome back, {getFullName(name)}</p>
        <img src={waving} height={isMobile? 30 :50} width={isMobile? 30 :50}  alt="" />
      </Flex>

      <Row gutter={[15, 15]} align="stretch">
        <Col  lg={6} md={12} sm={{span:12}} xs={12} style={{display: "flex"}}>
          <Flex
            vertical
            justify="center"
            align="center"
            style={{
              background: "linear-gradient(135deg, #f0854cff, #eb6d19ff, #d94b09ff)",
              borderRadius: "7px",
              width: "100%",
              color: "white",
              fontWeight: 600,
              flex: 1,
              padding:"10px 4px"
              
            }}
          >
            <Flex justify="center" align="center" gap={isMobile? 5 : 20} style={{width:"100%"}} >
              <BsPeopleFill style={{ fontSize: "30px" }} />
              <span style={{fontSize: isMobile?"15px" :"23px"}}>Total Students</span>
            </Flex>
            <Flex justify="center">
              <span style={{ fontSize: isMobile?"25px" :"40px" }}>{students??0}</span>
            </Flex>
          </Flex>
        </Col>
        <Col lg={6} md={12} sm={{span:12}} xs={12} style={{display: "flex"}} >
          <Flex
            vertical
            justify="center"
            align="center"
            style={{
              // #896ac1ff, #4458cdff
              background: "linear-gradient(100deg, #9770eaff, #104a9bff)",
              borderRadius: "7px",
              width: "100%",
              color: "white",
              fontWeight: 600,
              fontSize: "15px",
              flex: 1,
              padding:"10px 4px"
            }}
          >
            <Flex justify="center" align="center" gap={isMobile? 5 : 20} style={{width:"100%"}} >
              <GiTeacher style={{ fontSize: "30px" }} />
              <span style={{fontSize: isMobile?"15px" :"23px"}}>Total Faculty</span>
            </Flex>
            <Flex justify="center">
              <span style={{ fontSize: isMobile?"25px" :"40px" }}>{faculty?faculty:0}</span>
            </Flex>
          </Flex>
        </Col>
        <Col lg={6} md={12} sm={{span:12}} xs={12} style={{display: "flex"}} >
          <Flex
            vertical
            justify="center"
            align="center"
            style={{
              // linear-gradient(160deg, #0a7929ff, #b9e730ff)
              background: "linear-gradient(160deg, #a47309ff, #d3bc08ff)",
              borderRadius: "7px",
              width: "100%",
              padding: "",
              color: "white",
              fontWeight: 600,
              fontSize: "17px",
              flex:1,
             
            }}
          >
            <Flex justify="center" align="center" gap={isMobile? 5 : 20} style={{width:"100%"}} >
              <FaLayerGroup style={{ fontSize: "30px" }} />
              <span style={{fontSize: isMobile?"15px" :"23px"}}>Total Course</span>
            </Flex>
            <Flex justify="center">
              <span style={{ fontSize: isMobile?"25px" :"40px" }}>{(course?.data)?course.data.length : 0}</span>
            </Flex>
          </Flex>
        </Col>
        <Col lg={6} md={12} sm={{span:12}} xs={12} style={{display: "flex"}} >
          <Flex
            vertical
            justify="center"
            align="center"
            style={{
              background: "linear-gradient(135deg, #667eea, #764ba2, #6dd5ed)",
              borderRadius: "7px",
              width: "100%",
              padding: "16px 10px",
              color: "white",
              fontWeight: 600,
              flex:1,
            }}
          >
            <Row gutter={10}>
              <Col>
                <Flex align="center" gap={8}>
                  <FaRegChartBar style={{ fontSize: "30px" }} />
                  <span style={{ fontSize: "15px" }}>Website Visits</span>
                </Flex>
                <Flex align="center" justify="center">
                  <span style={{ fontSize: isMobile?"25px" :"40px" }}>
                    {getvisitors?.data?.totalVisistors}
                  </span>
                  <Flex>
                    <TiArrowSortedUp
                      style={{ fontSize: "20px", color: "#1ae17aff" }}
                    />
                    <span>12.5%</span>
                  </Flex>
                </Flex>
              </Col>
              <Col style={{display: isMobile?"none":""}}>
                <Space direction="vertical" align="center">
                  <MdStackedLineChart style={{ fontSize: "30px" }} />
                  <button
                    style={{
                      fontSize: "10px",
                      marginTop: "10px",
                      background: "#3c76ceff",
                      color: "white",
                      border: "none",
                      padding: "1px 7px",
                    }}
                  >
                    Last 30 days
                  </button>
                </Space>
              </Col>
            </Row>
          </Flex>
        </Col>
      </Row>
      <Row gutter={40} align="stretch" style={{ paddingTop: "40px" }}>
        <Col lg={8}  sm={24}>
          <div
            style={{
              boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
              flex: 1,
              height: "100%",
              marginBottom: isMobile? "25px" : 0
            }}
          >
            <p
              style={{
                fontWeight: 600,
                background: "#DDE3E3",
                boxShadow: "0 10px 25px rgba(0,0,0,0.02)",
                fontSize: isMobile? "18px" : "22px",
                borderRadius: "5px 5px 0px 0px",
                color: "#1f1f1f",
                padding: "10px ",
                margin: "0",
                textAlign: "start",
              }}
            >
              Recent Student Activities
            </p>
            <Space
              direction="vertical"
              style={{ width: "100%", padding: "7px 12px" }}
            >
              {
                !enrollmentStat? <Flex  justify="center" align="center" style={{ height: "80vh" }}>
                       <div style={{ color: "#608cd3ff" }}>
                        <Spin/>
                       </div>
                  </Flex>
                :enrollmentStat?.data?.map((item: TEnrolledState, index:number) => {
                const color = badgeColors[index % badgeColors.length];
                return (
                  <div>
                    <Flex
                      justify="space-between"
                      gap={12}
                      align="center"
                      style={{ marginBottom: "6px" }}
                    >
                      <ProfilePicGenerator gender = {item?.gender}
                        style={{ borderRadius: "100%", height: "45px", width:"45px" }}
                      />
                      <Flex
                        vertical
                        style={{
                          flex: 1, // 👈 takes remaining space
                          minWidth: 0, // 👈 REQUIRED for ellipsis in flex
                        }}
                      >
                        <span style={{ fontWeight: "600" }}>
                            {getFullName(item?.name)}
                        </span>
                        <span
                          title={item?.academicDepartment?.name} // 👈 hover shows full text
                          style={{
                            fontSize: "13px",
                            color: "#6b6b6b",
                            maxWidth: "95%",
                            whiteSpace: "nowrap",
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                            cursor: "pointer",
                          }}
                        >
                          {item?.academicDepartment?.name}
                        </span>
                      </Flex>
                      <Flex vertical gap={2} align="center">
                        <span style={{ fontSize: "12px" }}>Jun, 2026</span>
                        <span
                          style={{
                            color: "white",
                            background: color,
                            padding: "2px 10px",
                            borderRadius: "2px",
                            fontSize: "11px",
                          }}
                        >
                          {item?.totalEnrolledCourses} enrolled
                        </span>
                      </Flex>
                    </Flex>{" "}
                    <Divider style={{ margin: "0" }}></Divider>
                  </div>
                );
              })
              }
            </Space>
          </div>
        </Col>

        <Col lg={10} sm={24} style={{display: "flex"}}>
          <div
            style={{
              borderRadius: "5px",
              // display: "flex",
              flexDirection: "column",
              flex: 1,
              height: "90%",
              width:"100%",
              marginBottom: isMobile? "25px" : 0,
              marginTop: isMobile? "25px" : 0
            }}
          >
            {/* Title */}
            <Flex
              justify="space-between"
              align="center"
              style={{
                fontWeight: 600,
                background: "#DDE3E3",
                boxShadow: "0 10px 25px rgba(0,0,0,0.02)",
                fontSize: isMobile?"17px" : "22px",
                borderRadius: "5px 5px 0px 0px",
                color: "#1f1f1f",
                padding: "10px",
                margin: "0px",
                textAlign: "center",
              }}
            >
              <span>Enrollments Statictics</span>
              <div
                style={{
                  fontSize: isMobile?"12px" : "14px",
                  color: "#868181ff",
                  padding: "4px 20px",
                  background: "#f1f7f7ff",
                  borderRadius: "3px",
                }}
              >
                Last 6 months <TiArrowSortedDown />
              </div>
            </Flex>
            <div
              style={{
                boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
                padding: "10px 0",
              }}
            >
              {/* Chart */}
              <LineChart
                style={{
                  width: "100%",
                  maxWidth: "700px",
                  maxHeight: "50vh",
                  aspectRatio: 1.618,
                }}
                responsive
                data={data}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" padding={{ left: 30, right: 30 }} />
                <YAxis width="auto" />
                <Tooltip />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="students"
                  stroke="#8884d8"
                  activeDot={{ r: 8 }}
                />
                <Line type="monotone" dataKey="enrollments" stroke="#82ca9d" />
                {/* <RechartsDevtools /> */}
              </LineChart>

              {/* 🔥 Custom Legend with colored bullets */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  gap: "24px",
                  marginTop: "14px",
                }}
              ></div>
            </div>
          </div>
        </Col>
        <Col lg={6}  sm={24} style={{width:"100%"}}>
          <div
            style={{
              boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
              flex: 1,
              height: "100%",
            }}
          >
            <p
              style={{
                fontWeight: 600,
                background: "#DDE3E3",
                boxShadow: "0 10px 25px rgba(0,0,0,0.02)",
                fontSize: isMobile?"17px" : "22px",
                borderRadius: "10px 10px 0px 0px",
                color: "#1f1f1f",
                padding: "10px ",
                margin: "0",
                textAlign: "start",
              }}
            >
              Course Overview
          </p>
            <Space direction="vertical" style={{ width: "100%" }}>
              <Flex
                justify="space-between"
                gap={12}
                align="center"
                style={{
                  paddingBottom: "6px",
                  background: "linear-gradient(135deg, #dca531ff, #e09f11ff)",
                  boxShadow: "0 10px 25px rgba(0,0,0,0.02)",
                  color: "white",
                  padding: "7px 10px ",
                }}
              >
                <span style={{ flex: 1.5 }}>Course</span>
                <span style={{ flex: 1 }}>Enrolled</span>
                <span style={{ flex: .60 }}>Prefix</span>
              </Flex>
              {course?.data?.slice(1, 7).map((item, index) => {
                const color = badgeColors[index % badgeColors.length];
                const enrolled = courseData[index % courseData.length];

                return (
                  <div>
                    <Flex
                      justify="space-between"
                      gap={12}
                      align="center"
                      style={{
                        marginBottom: "6px",
                        padding: "0 10px",
                        flex: 1, // 👈 takes remaining space
                        minWidth: 0,
                      }}
                    >
                      <span
                        title={item?.title} // 👈 hover shows full text
                        style={{
                          fontSize: "13px",
                          color: "#6b6b6b",
                          maxWidth: "50%",
                          whiteSpace: "nowrap",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                          cursor: "pointer",
                          flex: 2.5,
                        }}
                      >
                        {item?.title}
                      </span>
                      <span style={{ flex: 1 }}>{enrolled}</span>
                     <Flex vertical align="center" justify="steatch" style={{}}>
                      <span
                        style={{
                          color: "white",
                          borderRadius: "2px",
                          background: color,
                          flex: 1,
                          padding:"2px 0",
                          width:"70px",
                          textAlign:"center",
                          fontSize: "13px",
                        }}
                      >
                        {item?.prefix}
                      </span></Flex> 
                    </Flex>{" "}
                    <Divider style={{ margin: "0" }}></Divider>
                  </div>
                );
              })}
              <Flex justify="end" align="center">
                <button
                  style={{
                    padding: "6px 20px",
                    margin: "10px  12px",
                    background: "linear-gradient(160deg, #667eea, #764ba2, #2bacc8)",
                    color: "white",
                    border: "none",
                    borderRadius: "2px",
                    fontSize: "13px",
                  }}
                >
                  View All{" "}
                </button>
              </Flex>
            </Space>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default AdminDashboard;
