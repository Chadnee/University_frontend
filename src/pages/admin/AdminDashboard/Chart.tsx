import { Col, Flex } from "antd";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import useResponsive from "../../../hooks/useResponsive";

const data = [
  { month: "Jan", enrollment: 100, students: 90 },
  { month: "Feb", enrollment: 80, students: 110 },
  { month: "Mar", enrollment: 120, students: 120 },
  { month: "Apr", enrollment: 140, students: 80 },
  { month: "May", enrollment: 150, students: 100 },
  { month: "Jun", enrollment: 170, students: 160 },
  { month: "Jul", enrollment: 190, students: 180 },
  { month: "Aug", enrollment: 130, students: 130 },
  { month: "Sep", enrollment: 110, students: 110 },
  { month: "Oct", enrollment: 90, students: 90 },
  { month: "Nov", enrollment: 100, students: 100 },
];

const Chart = () => {
    const {isMobile} = useResponsive()
  return (
    <>
      <Col lg={12} sm={24} style={{ display: "flex", width: "100%" }}>
              <div
                style={{
                  background: "#fff",
                  borderRadius: "14px",
                  // display: "flex",
                  flexDirection: "column",
                  flex: 1,
                  width: "100%",
                  boxShadow: "10px 10px 25px rgba(0,0,0,0.08)",
                  overflow: "hidden",
                }}
              >
                {/* Title */}
                <Flex
                  justify="space-between"
                  align="center"
                  style={{
                    fontWeight: 600,
                    boxShadow: "0 10px 25px rgba(0,0,0,0.02)",
                    fontSize: "17px",
                    borderRadius: "5px 5px 0px 0px",
                    color: "#1f1f1f",
                    padding: "10px 10px 0 10px",
                    margin: "0 10px",
                    textAlign: "center",
                  }}
                >
                  <span>Admission Trend</span>
                  <Flex
                    align="center"
                    style={{
                      fontSize: isMobile ? "12px" : "12px",
                      padding: "4px 10px",
                      border: "1px solid rgb(218, 226, 226)",
                      borderRadius: "8px",
                      color: "#585454",
                    }}
                  >
                    <span style={{}}>This year </span>{" "}
                    <MdOutlineKeyboardArrowDown
                      style={{ fontSize: "18px", paddingTop: "3px" }}
                    />
                  </Flex>
                </Flex>
                {/* Chart */}
                <div style={{ background: "#fff", padding: "0  20px 10px 0" }}>
                  <ResponsiveContainer width="100%" height={250}>
                    <AreaChart data={data} margin={{ top: 25, left: -10 }}>
                      <defs>
                        <linearGradient
                          id="fillColor"
                          x1="0"
                          y1="0"
                          x2="0"
                          y2="1"
                        >
                          <stop
                            offset="0%"
                            stopColor="#E6A319"
                            stopOpacity={0.3}
                          />
                          <stop
                            offset="40%"
                            stopColor="#E6A319"
                            stopOpacity={0.18}
                          />
                          <stop
                            offset="75%"
                            stopColor="#E6A319"
                            stopOpacity={0.08}
                          />
                          <stop
                            offset="100%"
                            stopColor="#E6A319"
                            stopOpacity={0}
                          />
                        </linearGradient>
                      </defs>

                      <CartesianGrid vertical={false} stroke="#f7ecec" />

                      <XAxis
                        dataKey="month"
                        axisLine={{
                          stroke: "#c3c7cd", // Axis line color
                          strokeWidth: 1, // Thickness
                        }}
                        padding={{ left: 16 }}
                        tickLine={false}
                        tick={{
                          // fontSize: 13,
                          fill: "#0e0b0b", // Text color
                          fontFamily: "'robotto'",
                        }}
                      />

                      <YAxis
                        domain={[0, 250]}
                        tickCount={8}
                        axisLine={false}
                        tickLine={false}
                        tick={{
                          // fontSize: 13,
                          fill: "#0e0b0b", // Text color
                          fontFamily: "'robotto'",
                        }}
                      />

                      <Tooltip />

                      <Area
                        type="natural"
                        dataKey="enrollment"
                        stroke="#E6A319"
                        strokeWidth={1.5}
                        fill="url(#fillColor)"
                        dot={{
                          r: 3,
                          strokeWidth: 0.3,
                          fill: "#E6A319", // Fill color of the bullet
                          stroke: "#E6A319",
                        }}
                        activeDot={{
                          r: 4,
                        }}
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>

                {/* 🔥 Custom Legend with colored bullets */}
                {/* <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      gap: "24px",
                      marginTop: "14px",
                    }}
                  ></div> */}
              </div>
            </Col>
            <Col lg={12} sm={24} style={{ display: "flex" }}>
              <div
                style={{
                  background: "#fff",
                  borderRadius: "14px",
                  // display: "flex",
                  flexDirection: "column",
                  flex: 1,
                  width: "100%",
                  boxShadow: "10px 10px 25px rgba(0,0,0,0.08)",
                  overflow: "hidden",
                }}
              >
                {/* Title */}
                <Flex
                  justify="space-between"
                  align="center"
                  style={{
                    fontWeight: 600,
                    boxShadow: "0 10px 25px rgba(0,0,0,0.02)",
                    fontSize: "17px",
                    borderRadius: "5px 5px 0px 0px",
                    color: "#1f1f1f",
                    padding: "10px 10px 0 10px",
                    margin: "0 10px",
                    textAlign: "center",
                  }}
                >
                  <span>Students Growth</span>
                  <Flex
                    align="center"
                    style={{
                      fontSize: isMobile ? "12px" : "12px",
                      padding: "4px 10px",
                      border: "1px solid rgb(218, 226, 226)",
                      borderRadius: "8px",
                      color: "#585454",
                    }}
                  >
                    <span>This year </span>{" "}
                    <MdOutlineKeyboardArrowDown
                      style={{ fontSize: "18px", paddingTop: "3px" }}
                    />
                  </Flex>
                </Flex>
                {/* Chart */}
                <div style={{ background: "#fff", padding: "0  20px 20px 0" }}>
                  <ResponsiveContainer width="100%" height={250}>
                    <AreaChart data={data} margin={{ top: 20, left: -10 }}>
                      <defs>
                        <linearGradient
                          id="studentGrowth"
                          x1="0"
                          y1="0"
                          x2="0"
                          y2="1"
                        >
                          <stop
                            offset="0%"
                            stopColor="#2563EB"
                            stopOpacity={0.25}
                          />
                          <stop
                            offset="45%"
                            stopColor="#2563EB"
                            stopOpacity={0.15}
                          />
                          <stop
                            offset="75%"
                            stopColor="#2563EB"
                            stopOpacity={0.08}
                          />
                          <stop
                            offset="100%"
                            stopColor="#2563EB"
                            stopOpacity={0}
                          />
                        </linearGradient>
                      </defs>

                      <CartesianGrid vertical={false} stroke="#f0f0f0" />

                      <XAxis
                        dataKey="month"
                        axisLine={{
                          stroke: "#c3c7cd", // Axis line color
                          strokeWidth: 1, // Thickness
                        }}
                        padding={{ left: 16 }}
                        tickLine={false}
                        tick={{
                          fill: "#0e0b0b", // Text color
                          fontFamily: "'robotto'",
                        }}
                      />

                      <YAxis
                        domain={[0, 250]}
                        tickCount={8}
                        axisLine={false}
                        tickLine={false}
                        tick={{
                          fill: "#0e0b0b", // Text color
                          fontFamily: "'robotto'",
                        }}
                      />

                      <Tooltip />

                      <Area
                        type="natural"
                        dataKey="students"
                        stroke="#2563EB"
                        strokeWidth={1.5}
                        fill="url(#studentGrowth)"
                        dot={{
                          r: 3,
                          strokeWidth: 0.3,
                          fill: "#2563EB",
                          stroke: "#2563EB",
                        }}
                        activeDot={{
                          r: 4,
                        }}
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>

                {/* 🔥 Custom Legend with colored bullets */}
                {/* <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      gap: "24px",
                      marginTop: "14px",
                    }}
                  ></div> */}
              </div>
            </Col>
    </>
  );
};

export default Chart;