import { Button, Card, Col, Divider, Flex, Row, Space, Spin } from "antd";
import {
  useGetAllCountedTotalUsersQuery,
  useGetAllStudentQuery,
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
import { WiNightAltLightning } from "react-icons/wi";
import { HiOutlineLightBulb } from "react-icons/hi";
import { PiArrowFatLinesDownLight } from "react-icons/pi";
import { LuLightbulb } from "react-icons/lu";
import { getFullName } from "../../utils/GetFullName";

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
  const { data: userStats, isLoading: isUserLoading } =
    useGetAllCountedTotalUsersQuery(undefined);
  const { data: getMySelf, isLoading: isMyselfLoading } =
    useGetMeQuery(undefined);
  const { data: getvisitors, isLoading: isGetvisitorsLoading } =
    useGetvisitorStateQuery(undefined);
  const { data: enrollmentStat, isLoading: isEnrollmentStatLoading } =
    useGetStudentEnrolledStatusQuery(undefined);
  const { data: course, isLoading: isCourseLoading } =
    useGetAllCourseQuery(undefined);
  //console.log(userStats.data)
  // console.log(getMySelf)
  console.log(getvisitors);

  if (isUserLoading || isMyselfLoading || isGetvisitorsLoading) {
    return (
              <Flex  justify="center" align="center" style={{ height: "80vh" }}>
                   <div style={{ color: "#608cd3ff" }}>
                    <Spin size="medium" />
                   </div>
              </Flex>
            );
  }
  console.log(enrollmentStat);
  const { students, faculty, admin } = userStats?.data;
  const { name, profileImage } = getMySelf?.data;

  console.log(course);

  const badgeColors = ["#F4B342", "#8f34e4ff", "#4caf4fd3"];
  const prefixColors = ["#e6390adf", "#4CAF50"];
  const courseData = ["110", "160", "210", "80", "120"];

  //for when want to use color randomly
  const getRandomColor = () => {
    const index = Math.floor(Math.random() * badgeColors.length);
    return badgeColors[index];
  };
  return (
    <div className="">
      <Flex align="center" gap={20}>
        <h1>Welcome back, {getFullName(name)}</h1>
        <img src={waving} height={50} width={50} alt="" />
      </Flex>
      <Flex align="center" justify="space-between" gap={20}>
        <Flex justify="center" align="center">
          <Flex
            vertical
            justify="center"
            align="center"
            style={{
              background: "linear-gradient(135deg, #f0854cff, #eb6d19ff, #d94b09ff)",
              borderRadius: "7px",
              height: "110px",
              width: "270px ",
              padding: "7px 10px",
              color: "white",
              fontWeight: 600,
              fontSize: "20px",
            }}
          >
            <Flex align="stretch" justify="center" gap={10}>
              <BsPeopleFill style={{ fontSize: "30px" }} />
              <span style={{}}>Total Students</span>
            </Flex>
            <Flex justify="center">
              <span style={{ fontSize: "40px" }}>{students}</span>
            </Flex>
          </Flex>
        </Flex>
        <Flex justify="center" align="center">
          <Flex
            vertical
            justify="center"
            align="center"
            style={{
              // #896ac1ff, #4458cdff
              background: "linear-gradient(100deg, #9770eaff, #104a9bff)",
              borderRadius: "7px",
              height: "110px",
              width: "270px ",
              padding: "7px 10px",
              color: "white",
              fontWeight: 600,
              fontSize: "20px",
            }}
          >
            <Flex align="stretch" justify="center" gap={10}>
              <GiTeacher style={{ fontSize: "30px" }} />
              <span style={{}}>Total Faculty</span>
            </Flex>
            <Flex justify="center">
              <span style={{ fontSize: "40px" }}>{faculty}</span>
            </Flex>
          </Flex>
        </Flex>
        <Flex justify="center" align="center">
          <Flex
            vertical
            justify="center"
            align="center"
            style={{
              // linear-gradient(160deg, #0a7929ff, #b9e730ff)
              background: "linear-gradient(160deg, #a47309ff, #d3bc08ff)",
              borderRadius: "7px",
              height: "110px",
              width: "270px ",
              padding: "7px 10px",
              color: "white",
              fontWeight: 600,
              fontSize: "20px",
            }}
          >
            <Flex align="stretch" justify="center" gap={10}>
              <FaLayerGroup style={{ fontSize: "30px" }} />
              <span style={{}}>Total Course</span>
            </Flex>
            <Flex justify="center">
              <span style={{ fontSize: "40px" }}>{students}</span>
            </Flex>
          </Flex>
        </Flex>
        <Flex justify="center" align="center">
          <Flex
            vertical
            justify="center"
            align="center"
            style={{
              background: "linear-gradient(135deg, #667eea, #764ba2, #6dd5ed)",
              borderRadius: "7px",
              height: "110px",
              width: "270px ",
              padding: "7px 10px",
              color: "white",
              fontWeight: 600,
            }}
          >
            <Row gutter={10}>
              <Col>
                <Flex align="center" gap={8}>
                  <FaRegChartBar style={{ fontSize: "30px" }} />
                  <span style={{ fontSize: "15px" }}>Website Visits</span>
                </Flex>
                <Flex align="center" justify="center">
                  <span style={{ fontSize: "40px" }}>
                    000{getvisitors?.data?.totalVisistors}
                  </span>
                  <Flex>
                    <TiArrowSortedUp
                      style={{ fontSize: "20px", color: "#1ae17aff" }}
                    />
                    <span>12.5%</span>
                  </Flex>
                </Flex>
              </Col>
              <Col>
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
        </Flex>
      </Flex>
      <Row gutter={40} align="stretch" style={{ paddingTop: "40px" }}>
        <Col span={8} style={{ display: "flex" }}>
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
                fontSize: "22px",
                borderRadius: "10px 10px 0px 0px",
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
                        <Spin size="medium" />
                       </div>
                  </Flex>
                :enrollmentStat?.data?.map((item, index) => {
                const color = badgeColors[index % badgeColors.length];
                return (
                  <div>
                    <Flex
                      justify="space-between"
                      gap={12}
                      align="center"
                      style={{ marginBottom: "6px" }}
                    >
                      <img
                        src={
                          item?.gender === "male" ? maleStudent : femaleStudent
                        }
                        width={45}
                        height={45}
                        style={{ borderRadius: "100%" }}
                        alt=""
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

        <Col span={10} style={{ display: "flex" }}>
          <div
            style={{
              borderRadius: "14px",
              display: "flex",
              flexDirection: "column",
              flex: 1,
              height: "90%",
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
                fontSize: "22px",
                borderRadius: "10px 10px 0px 0px",
                color: "#1f1f1f",
                padding: "10px",
                margin: "0px",
                textAlign: "center",
              }}
            >
              <span>Enrollments Statictics</span>
              <div
                style={{
                  fontSize: "14px",
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
                  maxHeight: "70vh",
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
        <Col span={6} style={{ display: "flex" }}>
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
                fontSize: "22px",
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
                <span style={{ flex: 1 }}>Prefix</span>
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
                      <span
                        style={{
                          color: "white",
                          borderRadius: "8px",
                          background: color,
                          flex: 1,
                          padding: "2px 10px",
                          fontSize: "15px",
                        }}
                      >
                        {item?.prefix}
                      </span>
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
                    background: "linear-gradient(135deg, #667eea, #764ba2, #6dd5ed)",
                    color: "white",
                    border: "none",
                    borderRadius: "3px",
                    fontSize: "15px",
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
