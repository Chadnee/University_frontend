import { Col, Divider, Flex, Space, Spin } from "antd";
import { useGetStudentEnrolledStatusQuery } from "../../../features/admin/dashboardManagementApi";
import { useGetAllCourseQuery } from "../../../features/admin/courseManagementApi";
import useResponsive from "../../../hooks/useResponsive";
import { getFullName } from "../../../utils/GetFullName";
import { ProfilePicGenerator } from "../../../utils/ProfilePicGenerator";
import type { TEnrolledState } from "../../constants/global";
import { MdKeyboardArrowRight } from "react-icons/md";

const TableData = () => {
        const { data: enrollmentStat } = useGetStudentEnrolledStatusQuery(undefined);
        const { data: course } = useGetAllCourseQuery(undefined);
        const {isMobile} = useResponsive()

        
  const badgeColors = ["#F4B342", "#8f34e4ff", "#4caf4fd3"];
  const courseData = ["110", "160", "210", "80", "120"];
  return (
    <>
      <Col lg={16} sm={24}>
              <div
                style={{
                  boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
                  background: "#fff",
                  borderRadius: "14px",
                  flex: 1,
                  height: "100%",
                  marginBottom: "10px",
                  padding: "13px ",
                }}
              >
                <span
                  style={{
                    fontWeight: 600,
                    fontSize: isMobile ? "18px" : "18px",
                    textAlign: "start",
                    paddingBottom:"8px"
                  }}
                >
                  Recent Student Activitiess
                </span>
                <Flex
                  align="center"
                  justify="space-between"
                  style={{ background: "#eceaea", textTransform:"capitalize", color:"#918c8c", padding:"5px 14px", margin:"0 -13px" }}
                >
                  <span>Applicant name</span>
                  <span>Program</span>
                  <span>Enrolement Date</span>
                  <span>Status</span>
                  <span>action</span>
                </Flex>
                <Space
                  direction="vertical"
                  style={{ width: "100%", padding: "7px 12px" }}
                >
                  {!enrollmentStat ? (
                    <Flex
                      justify="center"
                      align="center"
                      style={{ height: "80vh" }}
                    >
                      <div style={{ color: "#608cd3ff" }}>
                        <Spin />
                      </div>
                    </Flex>
                  ) : (
                    enrollmentStat?.data?.map(
                      (item: TEnrolledState, index: number) => {
                        const color = badgeColors[index % badgeColors.length];
                        return (
                          <div>
                            <Flex
                              justify="space-between"
                              gap={12}
                              align="center"
                              style={{ marginBottom: "6px" }}
                            >
                              <ProfilePicGenerator
                                gender={item?.gender}
                                style={{
                                  borderRadius: "100%",
                                  height: "45px",
                                  width: "45px",
                                }}
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
                                <span style={{ fontSize: "12px" }}>
                                  Jun, 2026
                                </span>
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
                      },
                    )
                  )}
                </Space>
              </div>
            </Col>
            <Col
              lg={8}
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
            </Col>
    </>
  );
};

export default TableData;