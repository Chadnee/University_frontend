import { Col, Flex, Row, Spin } from "antd";
import {useGetMeQuery,} from "../../../features/admin/userManagementApi";
import waving from "../../../assets/icons/wave.png";
import { getFullName } from "../../../utils/GetFullName";
import useResponsive from "../../../hooks/useResponsive";
import { useState } from "react";
import { DayPicker } from "@daypicker/react";
import "@daypicker/react/style.css";
import State from "./State";
import Chart from "./Chart";
import TableData from "./TableData";



const AdminDashboard = () => {
  const { isMobile } = useResponsive();

  const { data: getMySelf, isLoading: isMyselfLoading } =
    useGetMeQuery(undefined);

  const [selected, setSelected] = useState<Date>();
  //console.log(userStats.data)
  // console.log(getMySelf)
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
        style={{ width: "100%", margin: isMobile ? "10px  0" : "20px 0" }}
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

      <Row gutter={16}>
        <Col xs={24} md={24} lg={19} style={{}}>
          <Row gutter={[15, 15]} align="stretch" style={{ marginRight:0, }}>
               <State></State>
          </Row>
          <Row gutter={[15, 15]} align="stretch" style={{ paddingTop: "20px", width:'100%', marginRight:0, marginLeft:0 }}>
               <Chart></Chart>
            {/* <Col
              lg={12}
              sm={24}
              style={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div
                style={{
                  boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
                  flex: 1,
                  height: "100%",
                  marginTop: isMobile ? "20px" : "0",
                }}
              >
                <p
                  style={{
                    fontWeight: 600,
                    background: "#DDE3E3",
                    boxShadow: "0 10px 25px rgba(0,0,0,0.02)",
                    fontSize: isMobile ? "17px" : "22px",
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
                      background:
                        "linear-gradient(135deg, #dca531ff, #e09f11ff)",
                      boxShadow: "0 10px 25px rgba(0,0,0,0.02)",
                      color: "white",
                      padding: "7px 10px ",
                    }}
                  >
                    <span style={{ flex: 1.5 }}>Course</span>
                    <span style={{ flex: 1 }}>Enrolled</span>
                    <span style={{ flex: 0.6 }}>Prefix</span>
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
                          <Flex
                            vertical
                            align="center"
                            justify="steatch"
                            style={{}}
                          >
                            <span
                              style={{
                                color: "white",
                                borderRadius: "2px",
                                background: color,
                                flex: 1,
                                padding: "2px 0",
                                width: "70px",
                                textAlign: "center",
                                fontSize: "13px",
                              }}
                            >
                              {item?.prefix}
                            </span>
                          </Flex>
                        </Flex>{" "}
                        <Divider style={{ margin: "0" }}></Divider>
                      </div>
                    );
                  })}
                  <a
                    style={{
                      color: "rgb(210, 173, 8)",
                      fontSize: "12px",
                      fontFamily: "sans-serif",
                    }}
                  >
                    <Flex justify="end">
                      <span>View All courses</span>{" "}
                      <MdKeyboardArrowRight style={{ fontSize: "20px" }} />
                    </Flex>
                  </a>
                </Space>
              </div>
            </Col> */}
          </Row>

          <Row gutter={16} style={{ width: "100%", marginTop: "20px" }}>
            <TableData></TableData>
          </Row>
        </Col>
        <Col xs={24} md={24} lg={5}>
          <Row
            style={{
              boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
              flex: 1,
              height: "100%",
            }}
          >
            <Col lg={24} style={{ padding: "5px" }}>
              <div>
                <DayPicker
                  className="dashboard-calendar outside"
                  animate
                  mode="single"
                  selected={selected}
                  onSelect={setSelected}
                  showOutsideDays
                  // footer={
                  //   selected ? `Selected: ${selected.toLocaleDateString()}` : "Pick a day."
                  // }
                />
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default AdminDashboard;
