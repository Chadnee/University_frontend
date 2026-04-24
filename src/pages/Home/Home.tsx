import { Link } from "react-router-dom";
import { useAppSelector } from "../../features/hooks";
import { selectCurrentToken, type TUser } from "../../features/auth/authSlice";
import { verifyToken } from "../../utils/verifyToken";
import { ParallaxBanner } from "react-scroll-parallax";
import { Card, Col, Flex, Row, Spin } from "antd";
import CountUp from "react-countup";
import banner from "../../assets/images/banner.jpg";
import {
  classImageArray,
  femaleGenderImageArray,
  info,
  maleGenderImageArray,
  universityStats,
  type TCourse,
  type TUniversityStats,
} from "../constants/global";
import campus from "../../assets/images/campus.png";
import { useGetAllCourseQuery } from "../../features/admin/courseManagementApi";
import { useGetAllFacultyQuery } from "../../features/admin/userManagementApi";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import './styles.css';

// import required modules
import { Autoplay, Pagination } from "swiper/modules";
import useResponsive from "../../hooks/useResponsive";
import type { TFaculty } from "../../types/userManagementTypes";
import Header from "./Header/Header";
import { IoArrowForwardOutline } from "react-icons/io5";
import { HiOutlineBuildingLibrary } from "react-icons/hi2";
import AcademicFaculty from "./AcademicFaculty/AcademicFaculty";
import React from "react";

const Home = () => {
  const { isMobile, isTablet } = useResponsive();
  const { data: courses, isLoading: isCourseLoading } =
    useGetAllCourseQuery(undefined);
  const { data: faculty, isLoading: isFacultyLoading } =
    useGetAllFacultyQuery(undefined);

  console.log(faculty?.data);

  const token = useAppSelector(selectCurrentToken);
  // console.log(token);
  let user;
  if (token) {
    user = verifyToken(token);
    // console.log(user);
  }
  const text = "Empowering minds, shaping futures, and driving innovation for a better tomorrow—where knowledge meets opportunity and ambition transforms into achievement.";
  return (
    <div style={{ padding: isMobile ? "" : "" }}>
      <Header></Header>
      {/* parallax banner */}
      <ParallaxBanner
        layers={[{ image: banner, speed: -30 }]}
        style={{
          height: isMobile ? "100vh" : "100vh",
          marginTop: isMobile ? "0" : "20px",
        }}
      >
        <div
          style={{
            background:
              "linear-gradient(to right, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.2) 60%, rgba(255,255,255,0.2) 70%, rgba(243, 226, 226, 0.4) 100%)",
            position: "absolute",
            inset: "0",
          }}
        ></div>
        <div
          style={{
            position: "absolute",
            top: "50%",
            transform: "translateY(-50%)",
            padding: isMobile ? "0 22px" : "0 50px",
          }}
        >
          <Flex
            vertical
            justify="start"
            gap={isMobile ? 20 : 20}
            style={{ color: "#ffffff", width: isMobile ? "" : "700px", marginTop:isMobile?"-60px" : " "}}
          >
            <Flex align="middle" justify="start" gap={10}>
              <span style={{ width: isMobile ? "18px" : "25px" }}>
                <hr
                  style={{
                    background: "#c28514",
                    border: "none",
                    height: "1.6px",
                  }}
                />
              </span>
              <span style={{ textTransform: "uppercase", fontSize: "11px" }}>
                Welcome to techno university
              </span>
            </Flex>
            <span
              style={{
                color: "white",
                // borderLeft: "5px solid #9d0208",
                fontWeight: "600",
                fontFamily: "serif",
                fontSize: isMobile ? "29px" : "50px",
              }}
            >
              Build Your Future <br />
              <span style={{ color: "#da920e" }}>Excellence</span> <br />
              With Learning Research and Innovation
            </span>
            <span style={{ fontSize: isMobile ? "13px" : "13px", letterSpacing:isMobile?"1px":" " }}>
              {isMobile
                ? text.slice(
                    0,
                    text.toLowerCase().indexOf("tomorrow") + "tomorrow".length,
                  )
                : text}
            </span>
            <Flex
              vertical={isMobile}
              align={isMobile ? "start" : "center"}
              justify="start"
              gap={isMobile ? 10 : 30}
            >
               <Flex
                align="center"
                gap={4}
                justify="center"
                style={{
                  width: "fit-content",
                  borderRadius: "5px",
                  border: "none",
                  padding: isMobile ? "10px 28px" : "10px 26px",
                  background: "#c28514",
                  color: "white",
                  fontSize: isMobile ? "13px" : "14px",
                }}
              >
                <span>Learn more</span>
                <IoArrowForwardOutline></IoArrowForwardOutline>
              </Flex>
               {
                !isMobile && <Flex
                align="center"
                gap={5}
                justify="center"
                style={{
                  width: "fit-content",
                  borderRadius: "5px",
                  border: "1.5px solid #ffffff",
                  padding: isMobile ? "10px 20px" : "10px 26px",
                  color: "white",
                  fontSize: isMobile ? "13px" : "14px",
                }}
              >
                <span>Explore Campus</span>
                <HiOutlineBuildingLibrary
                  style={{ fontSize: "16px", fontWeight: "600" }}
                ></HiOutlineBuildingLibrary>
              </Flex>
               }
            </Flex>
          </Flex>
        </div>

        <div
          style={{
            position: "absolute",
            bottom: "20px",
            borderRadius: "10px",
            background: " rgba(29, 15, 15, 0.3)", // transparent white
            backdropFilter: "blur(4px)", // main glass effect
            WebkitBackdropFilter: "blur(12px)", // for Safari support
            left: isMobile ? "5px" : "50px",
            right: isMobile ? "5px" : "50px",
            boxShadow: `
      inset 0 0 10px rgba(255,255,255,0.05), 
      0 10px 40px rgba(0,0,0,0.5), 
      0 0 12px rgba(255,255,255,0.08)
    `,
            border: "2px solid rgba(255, 255, 255, 0.12)",
            padding: "20px 20px",
          }}
        >
          <Flex align="center" justify="space-around">
            {universityStats.map((item: TUniversityStats, index: number) => {
              const shortLabel = item.label.split(" ")[0];
              const Icon = item.icon;
              return (
                <React.Fragment key={item.id}>
                  <Flex
                    vertical={isMobile}
                    justify="center"
                    gap={isMobile ? 8 : 16}
                    align="center"
                    style={{ color: "#ffffff" }}
                  >
                    <Icon
                      style={{
                        fontSize: isMobile ? "20px" : "35px",
                        background: "rgba(255, 255, 255, 0.13)",
                        padding: "8px",
                        borderRadius: "50%",
                        backdropFilter: "blur(6px)",
                        WebkitBackdropFilter: "blur(6px)",
                      }}
                    />
                    <Flex vertical align="center" gap={isMobile ? 8 : 0}>
                      <span
                        style={{
                          fontSize: isMobile ? "16px" : "28px",
                          fontWeight: "600",
                        }}
                      >
                        {item.value}
                      </span>
                      <span
                        style={{
                          fontSize: isMobile ? "12px" : "16px",
                          textAlign: "center",
                        }}
                      >
                        {isMobile ? shortLabel : item.label}
                      </span>
                    </Flex>
                  </Flex>
                  {index !== universityStats.length - 1 && !isMobile && (
                    <div
                      style={{
                        borderLeft: "1.5px solid #8c8484",
                        height: "50px",
                      }}
                    ></div>
                  )}
                </React.Fragment>
              );
            })}
          </Flex>
        </div>
      </ParallaxBanner>

      <AcademicFaculty></AcademicFaculty>

      {/* Count of ingredients */}

      <div
        style={{
          margin: isMobile ? "60px 0 80px 0" : " 100px 0 150px 0",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Row gutter={isMobile ? [10, 10] : isTablet ? 50 : 70}>
          {info.map((item) => (
            <Col xs={12} sm={12} md={6} lg={6} style={{}}>
              <Flex
                align="center"
                justify="center"
                gap={20}
                style={{
                  boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
                  padding: "16px 40px",
                }}
              >
                <figure style={{ height: "35px", margin: "0" }}>
                  <img src={item.image} style={{ height: "100%" }} alt="" />
                </figure>
                <Flex vertical gap={4} style={{}}>
                  <span
                    style={{
                      fontWeight: "600",
                      fontSize: isMobile ? "18px" : "25px",
                    }}
                  >
                    <CountUp
                      start={item.startValue}
                      end={item.quantity}
                      duration={5}
                    />
                    {item.sign}
                  </span>
                  <span
                    style={{
                      fontFamily: "serif",
                      whiteSpace: "nowrap",
                      fontSize: isMobile ? "11px" : "15px",
                    }}
                  >
                    {item.title}
                  </span>
                </Flex>
              </Flex>
            </Col>
          ))}
        </Row>
      </div>

      {/* Ensure Necessity */}

      <div
        style={{
          background: "linear-gradient(135deg, #f8fafc, #eef2f7)",
          borderRadius: "16px",
          boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
        }}
      >
        <div
          style={{
            width: isMobile ? "100%" : "70%",
            margin: "40px auto",
            display: "flex",
            flexDirection: isMobile ? "column" : "row",
            justifyContent: "center",
            alignItems: "center",
            gap: "40px",
          }}
        >
          <Flex vertical style={{ flex: 1 }} gap={24}>
            <span
              style={{
                fontFamily: "'Inter', 'Montserrat', sans-serif",
                fontSize: "18px",
              }}
            >
              About Our University
            </span>
            <span
              style={{
                fontFamily: "'Montserrat'",
                fontWeight: "800",
                fontSize: "32px",
              }}
            >
              Who We Are
            </span>
            <span
              style={{
                letterSpacing: "0.6px",
                fontFamily: "'Inter', 'Segoe UI', sans-serif",
                fontSize: "14px",
                textAlign: "justify",
              }}
            >
              Our university is a hub of knowledge and innovation, committed to
              providing an enriching educational experience that fosters core
              qualities and growth. With state-of-the-art facilities, a diverse
              community, and a dedication to excellence, we prepare our students
              for global success.
            </span>
            <button
              style={{
                width: "fit-content",
                margin: isMobile ? "5px 0 0 0" : "5px 0 0 0 0",
                borderRadius: "3px",
                border: "none",
                padding: "6px 20px",
                background: "#db930d",
                color: "white",
                fontSize: "15px",
              }}
            >
              Read more
            </button>
          </Flex>
          <div style={{ flex: 1 }}>
            <img src={campus} style={{ width: "100%" }} alt="" />
          </div>
        </div>
      </div>

      {/* Show Popular Course */}

      <Flex
        vertical
        justify="center"
        align="center"
        gap={30}
        style={{ width: isMobile ? "100%" : "75%", margin: "60px auto" }}
      >
        <span
          style={{ fontFamily: "emoji", fontWeight: "600", fontSize: "24px" }}
        >
          Our <span style={{ color: "#db930d" }}>Popular</span> Courses
        </span>
        <span
          style={{
            fontSize: "15px",
            color: "#6c6a6a",
            fontWeight: "400",
            fontFamily: "revert",
            textAlign: "center",
          }}
        >
          Exlore our top-rated Courses to understand better and choose our
          services
        </span>

        {
          <Swiper
            slidesPerView={5.2}
            spaceBetween={14}
            // loop={true} // 🔥 infinite loop
            // autoplay={{
            //   delay: 0,
            //   disableOnInteraction: false,
            // }}
            //speed={6000}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              0: {
                slidesPerView: 1.5, // mobile → swipe
              },
              768: {
                slidesPerView: 4, // tablet
              },
              1024: {
                slidesPerView: 4.5, // desktop → show all nicely
              },
            }}
            modules={[Pagination, Autoplay]}
            className="mySwiper"
            style={{
              width: isMobile ? "80%" : "100%",
              height: "auto",
              display: "flex",
              flexDirection: "column",
            }}
          >
            {!courses || isCourseLoading ? (
              <Flex justify="center" align="center" style={{ height: "80vh" }}>
                <div style={{ color: "#d48516" }}>
                  <Spin />
                </div>
              </Flex>
            ) : (
              <>
                {" "}
                {courses?.data?.map((item: TCourse, index: number) => {
                  const image = classImageArray[index % classImageArray.length];
                  return (
                    <SwiperSlide
                      key={`${item._id} - ${index}`}
                      style={{ height: "auto", display: "flex" }}
                    >
                      <Card
                        bodyStyle={{ padding: "8px", height: "100%" }}
                        style={{ borderRadius: "5px", width: "100%" }}
                      >
                        <Flex vertical style={{ height: "100%" }}>
                          <div
                            style={{
                              height: 140,
                              position: "relative",
                              width: "100%",
                              overflow: "hidden",
                              background: "#f5f5f5",
                            }}
                          >
                            <img
                              src={image}
                              style={{
                                height: "100%",
                                width: "100%",
                                objectFit: "cover",
                                overflow: "hidden",
                              }}
                              alt="class"
                            />
                            <div
                              style={{
                                background:
                                  "linear-gradient(to right, rgba(174, 115, 88, 0.55), rgba(187, 124, 95, 0.08))",
                                position: "absolute",
                                inset: "0",
                              }}
                            ></div>
                          </div>
                          <Flex
                            vertical
                            style={{
                              padding: "5px 3px",
                              flex: 1,
                              justifyContent: "space-between",
                            }}
                          >
                            <span style={{ fontWeight: "620" }}>
                              <span style={{ paddingRight: "10px" }}>
                                {item?.title}
                              </span>{" "}
                              <span>Code #{item?.code}</span>
                            </span>
                            <span style={{ fontWeight: "bolder" }}>
                              4 Years
                            </span>
                            <span
                              style={{
                                color: "#6d6565",
                                fontSize: isMobile ? "11px" : "",
                              }}
                            >
                              Learn more and make success to gather knowledge
                              with research.
                            </span>
                            <p>
                              <button
                                style={{
                                  width: "",
                                  borderRadius: "4px",
                                  background: "#db930d",
                                  color: "#ffffff",
                                  fontSize: isMobile ? "12px" : "",
                                  padding: isMobile ? " 6px" : "8px 12px",
                                  border: "none",
                                }}
                              >
                                View Course
                              </button>
                            </p>
                          </Flex>
                        </Flex>
                      </Card>
                    </SwiperSlide>
                  );
                })}
              </>
            )}
          </Swiper>
        }
      </Flex>

      {/* Show Expert Faculty */}
      <Flex
        vertical
        justify="center"
        gap={36}
        style={{
          width: isMobile ? "100%" : "70%",
          margin: "100px auto",
          alignItems: "center",
        }}
      >
        <span
          style={{ fontFamily: "emoji", fontWeight: "600", fontSize: "24px" }}
        >
          Meet Our <span style={{ color: "#db930d" }}>Expert</span> Faculty
        </span>
        <span
          style={{
            fontSize: "15px",
            color: "#6c6a6a",
            fontWeight: "400",
            fontFamily: "revert",
          }}
        >
          Exlore our top-rated Courses to understand better and choose our
          services
        </span>
        <div style={{ width: "100%", paddingTop: "20px" }}>
          {
            <Swiper
              slidesPerView={5.5}
              spaceBetween={10}
              loop={true} // 🔥 infinite loop
              autoplay={{
                delay: 0,
                disableOnInteraction: false,
              }}
              speed={6000}
              pagination={{
                clickable: true,
              }}
              breakpoints={{
                0: {
                  slidesPerView: 1.2, // mobile → swipe
                },
                768: {
                  slidesPerView: 5, // tablet
                },
                1024: {
                  slidesPerView: 4.2, // desktop → show all nicely
                },
              }}
              modules={[Pagination, Autoplay]}
              className="mySwiper"
              style={{
                width: "100%",
                height: "auto",
                display: "flex",
                flexDirection: "column",
                overflow: "hidden",
              }}
            >
              {!faculty || isFacultyLoading ? (
                <Flex
                  justify="center"
                  align="center"
                  style={{ height: "80vh" }}
                >
                  <div style={{ color: "#d48516" }}>
                    <Spin />
                  </div>
                </Flex>
              ) : (
                <>
                  {faculty?.data?.map((item: TFaculty, index: number) => {
                    const image =
                      item.gender === "male"
                        ? maleGenderImageArray[
                            index % maleGenderImageArray.length
                          ]
                        : femaleGenderImageArray[
                            index % femaleGenderImageArray.length
                          ];
                    return (
                      <SwiperSlide
                        key={`${item._id} - ${index}`}
                        style={{
                          height: "auto",
                          display: "flex",
                          overflow: "hidden",
                        }}
                      >
                        <Card
                          bodyStyle={{ padding: "8px", height: "100%" }}
                          style={{
                            width: "100%",
                            border: "none",
                            borderRadius: "10px",
                            transition: "all 0.3s ease",
                          }}
                        >
                          <Flex
                            vertical
                            gap={10}
                            align="center"
                            justify="center"
                            style={{ height: "100%" }}
                          >
                            <div
                              style={{
                                height: "170px",
                                width: "170px",
                                overflow: "hidden",
                              }}
                            >
                              <img
                                src={image}
                                style={{
                                  height: "100%",
                                  width: "100%",
                                  overflow: "hidden",
                                  borderRadius: "50%",
                                }}
                                alt="class"
                              />
                            </div>
                            <Flex
                              vertical
                              gap={5}
                              justify="center"
                              align="center"
                              style={{
                                flex: 1,
                              }}
                            >
                              <span
                                style={{
                                  fontWeight: "600",
                                  fontSize: isMobile ? "16px" : "18px",
                                  textAlign: "center",
                                }}
                              >
                                {item?.name}
                              </span>

                              <span style={{ color: "#6d6565" }}>
                                {item.designation}
                              </span>
                              <p></p>
                            </Flex>
                          </Flex>
                        </Card>
                      </SwiperSlide>
                    );
                  })}
                </>
              )}
            </Swiper>
          }
        </div>
      </Flex>

      {/* Count the acheivement */}

      <div style={{ width: "100%", height: isMobile ? "600px" : "300px" }}>
        <ParallaxBanner
          layers={[{ image: banner, speed: -20 }]}
          style={{
            height: "100%",
            width: "100%",
            objectFit: "cover",
            objectPosition: "top",
          }}
        >
          {/* ✅ Dark Gradient Overlay */}
          <div
            style={{
              position: "absolute",
              inset: "0",
              zIndex: 1,
              background:
                "linear-gradient(to right, rgba(0,0,0,0.75), rgba(0,0,0,0.45))",
            }}
          ></div>

          <div
            style={{
              position: "absolute",
              inset: "0",
              zIndex: "2",
              color: "#fff",
              display: "flex",
              alignItems: "center",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: isMobile ? "column" : "row",
                width: "100%",
                justifyContent: "space-around",
                alignItems: "center",
                gap: isMobile ? "30px" : "0",
              }}
            >
              {info.map((item) => (
                <Flex vertical justify="center" align="center">
                  {/* <span style={{fontSize:"50px", fontWeight:"600"}}><IoPeopleSharp></IoPeopleSharp></span> */}
                  <span
                    style={{
                      color: "#db930d",
                      fontSize: isMobile ? "50px" : "55px",
                      fontWeight: "600",
                    }}
                  >
                    <CountUp
                      start={item.startValue}
                      end={item.quantity}
                      duration={5}
                    />
                    {item.sign}
                  </span>
                  <span
                    style={{
                      fontSize: isMobile ? "20px" : "30px",
                      fontWeight: "600",
                      fontFamily: "'Montserrat'",
                    }}
                  >
                    {item.title}
                  </span>
                </Flex>
              ))}
            </div>
          </div>
        </ParallaxBanner>

        {/* <figure style={{height:"300px", width:'100%', position:"relative", padding:"0", margin:"0"}}>
                <img src="https://plus.unsplash.com/premium_photo-1728262247643-bb75be51c15b?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                style={{height:"100%", width:'100%', objectFit:"cover", objectPosition:"top"}} alt="" />

            <div style={{position:"absolute", inset:"0"}}></div>

           </figure> */}
      </div>

      <Link to={`/${(user as TUser)?.role}/dashboard`}>
        <button>Dashboard</button>
      </Link>
    </div>
  );
};

export default Home;
