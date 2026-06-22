import { Button, Col, Flex, Row, Spin } from "antd";
import useResponsive from "../hooks/useResponsive";
import group from "../../src/assets/images/group.png";
import campus2 from "../../src/assets/images/campus2.png";
import {
  femaleGenderImageArray,
  info,
  maleGenderImageArray,
  newsEventsData,
  VerticalMobileStat,
  type TNewsEventsData,
  type TVerticalMobileStat,
} from "./constants/global";
import CountUp from "react-countup";
import { FaArrowRight } from "react-icons/fa6";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import './styles.css';

// import required modules
import { Autoplay, Pagination } from "swiper/modules";
import { useGetAllFacultyQuery } from "../features/admin/userManagementApi";
import type { TFaculty } from "../types/userManagementTypes";
// import React from "react";

const About = () => {
  const { isMobile, isTablet } = useResponsive();
  const { data: faculty, isLoading: isFacultyLoading } =
    useGetAllFacultyQuery(undefined);
  console.log(faculty?.data);
  return (
    <div style={{ paddingTop: "100px", background: "#f6f9fc", width:"100%", height:"100%",}}>
      <div style={{ position:"relative", height: isMobile?"auto":"auto" }}>
        <div
          style={{
           position: "relative",
    height: isMobile ? "500px" : "90vh",
    width: "100%",
    backgroundImage: isMobile ? `url(${campus2})` : undefined,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
          }}
        >
          {/* RIGHT IMAGE */}
          {
            !isMobile && <div
            style={{
              position: "absolute",
              inset: 0,
              zIndex: 1,
            }}
          >
            <img
              src={campus2}
              alt=""
              style={{
                width: "100%",
                height: "100%",
                objectFit:  isMobile?"contain" :"cover",
              }}
            />
          </div>
          }

          {/* LEFT CURVE OVERLAY */}
          <div
            style={{
              position: "absolute",
              left: 0,
              top: 0,
              height: "100%",
              width: isMobile ? "100%":"58%",
              zIndex: 2,
              background:isMobile?"linear-gradient(to bottom, rgba(235, 223, 223, 0.98), transparent)"
              :"linear-gradient(to right, rgba(255,255,255,0.98), rgba(255,255,255,0.93), rgba(255,255,255,0.82), transparent)",
              clipPath: isMobile?"" :"polygon(0 0, 78% 0, 100% 100%, 0% 100%)",
              display: "flex",
              alignItems: "center",
            }}
          >
            {/* TEXT CONTENT */}
            <div
              style={{
                padding: isMobile ? "30px 13px" :"0 0 0 80px",
                // maxWidth: isMobile ? " 100%" :"70%",
                // maxWidth: "560px",
              }}
            >
              {/* TOP LABEL */}
              <Flex  align={isMobile ? " " : "center"} gap={10} style={{ marginBottom: "18px" }}>
                <span style={{ width: isMobile ? "16px":"28px" }}>
                  <hr
                    style={{
                      border: "none",
                      background: "#d89b1d",
                      height: "2px",
                    }}
                  />
                </span>

                <span
                  style={{
                    textTransform: "uppercase",
                    color: "#d89b1d",
                    fontSize: isMobile ? "10px" :"14px",
                    letterSpacing: "1px",
                    fontWeight: 600,
                    fontFamily: "Poppins",
                  }}
                >
                  Welcome To Techno University
                </span>
              </Flex>

              {/* MAIN TITLE */}
              <h1
                style={{
                  fontSize: isMobile ? "25px":"50px",
                  lineHeight: isMobile ? "30px":"60px",
                  fontWeight: 700,
                  color: "#111827",
                  margin: 0,
                  fontFamily: "Montserrat",
                }}
              >
                Shaping Futures,
                <br />
                Building Leaders
              </h1>

              {/* DESCRIPTION */}
              <p
                style={{
                  fontSize: isMobile ? "13px":"18px",
                  lineHeight: isMobile ? "":"32px",
                  color: "#15345a",
                  // color: "#0a1e36",
                  marginTop: isMobile ? "":"28px",
                  maxWidth: "520px",
                  fontFamily:"Poppins",
                }}
              >
                Empowering minds through quality education, innovative research,
                and a commitment to excellence.
              </p>

              {/* BUTTON */}
              <Button
                style={{
                  marginTop: "34px",
                  height: isMobile ? "34px":"56px",
                  padding: isMobile ? "":"0 34px",
                  background: "#d89b1d",
                  border: "none",
                  borderRadius: isMobile ? "":"10px",
                  color: "#fff",
                  fontSize: isMobile ? "14px":"17px",
                  fontWeight: isMobile ? "":600,
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  boxShadow: "0 8px 24px rgba(216,155,29,0.35)",
                }}
              >
                <span>Discover More</span>
                <FaArrowRight />
              </Button>
            </div>
          </div>

          {/* OPTIONAL DARK OVERLAY */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: "rgba(0,0,0,0.08)",
              zIndex: 0,
            }}
          ></div>
        </div>

        {/* Count of ingredients */}

        <div
          style={{
            // margin: isMobile ? "60px 0 80px 0" : " 100px 0 150px 0",
            marginTop:isMobile?"30px":"",
            display: "flex",
            justifyContent: "center",
            position: isMobile? "static": "absolute",
            bottom: 0,
            zIndex: 10,
            transform: isMobile? "none":"translateX(-50%) translateY(50%)",
            width: "100%",
            left: isMobile? "":"50%",
            marginBottom:isMobile?"40px":""
          }}
        >
          <Row
            gutter={isMobile ? [16, 16] : isTablet ? [50,50] : 70} style={{margin:isMobile?"24px 3px 40px 3px":""}}
            // style={{ display: "flex" }}
          >
            {info.map((item) => (
              <Col xs={12} sm={12} md={6} lg={6} style={{  }}>
                <Flex
                  vertical={isMobile}
                  align="center"
                  justify="center"
                  gap={isMobile?10:20}
                  style={{
                    boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
                    padding: isMobile?"14px 0":"24px 18px",
                    background: !isMobile?"#ffffff":`${item.imageColor}35`,
                    width: "100%",
                    borderRadius: isMobile?"6px":"14px",
                  }}
                >
                  <figure
                    style={{
                      height: isMobile? "45px":"80px",
                      width: isMobile? "45px":"85px",
                      margin: "0",
                      background: item.imageColor,
                      borderRadius: isMobile?"8px":"14px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <img
                      src={item.image}
                      style={{
                        height: isMobile?"30px":"45px",
                        width: isMobile?"30px":"45px",
                        objectFit: "contain",
                      }}
                      alt=""
                    />
                  </figure>
                  <Flex vertical align={isMobile?"center" :"start"} gap={4} style={{}}>
                    <span
                      style={{
                        fontWeight: "700",
                        fontSize: isMobile ? "18px" : "25px",
                        color: item.textColor,
                        fontFamily: "cursive",
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
                        whiteSpace: "nowrap",
                        fontSize: isMobile ? "12px" : "19px",
                        fontWeight: 600,
                      }}
                    >
                      {item.title}
                    </span>
                    <span style={{ width: isMobile ? "24px" : "24px" }}>
                      <hr
                        style={{
                          background: item.textColor,
                          border: "none",
                          height: isMobile ? "1.3px" :"2px",
                        }}
                      />
                    </span>
                  </Flex>
                </Flex>
              </Col>
            ))}
          </Row>
        </div>
      </div>

      {/* Second section */}
      <div
        style={{
          margin: "0 auto",
          paddingBottom: "50px",
          width: isMobile ? "100%" : "85%",
          height: isMobile ? "auto" : "210px",
          padding:"0 10px",
           boxSizing: "border-box",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: isMobile ? "column" : "row",
            gap: isMobile ? "40px" :"22px",
            alignItems: "stretch",
            justifyContent: "space-between",
            height: "100%",
          }}
        >
          {/*  1st part of second section */}
          <div
            style={{
              display: "flex",
              flexDirection: isMobile ? "column" : "row",
              gap:"30px",
              width: isMobile ? "100%" : "50%",
              height: "100%",
              marginBottom: isMobile ? "" : "",
            }}
          >
            {/* Ensure Necessity */}

            {/* <div
        style={{
          background: "linear-gradient(135deg, #f8fafc, #eef2f7)",
          borderRadius: "16px",
          boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
          margin: "20px 0",
        }}
      > */}
            <div
              style={{
                width: "100%",
                display: "flex",
                flexDirection: isMobile ? "column" : "row",
                justifyContent: "center",
                alignItems: "stretch",
                flex: 1,
                gap: "24px",
              }}
            >
              {/* 
                      fontFamily: "'Inter', 'Montserrat', sans-serif",
                            fontSize: "18px", */}

              <Flex
                vertical
                style={{ flex: isMobile ? 1 : isTablet ? 1 : "0 0 40%" }}
                gap={10}
              >
                <span
                  style={{
                    fontFamily: "emoji",
                    textTransform: "uppercase",
                    fontSize: isMobile ? "13px" :"9px",
                    color: "#e7a11f",
                    fontWeight: "600",
                  }}
                >
                  About Our University
                </span>
                <span
                  style={{
                    fontFamily: "'Montserrat'",
                    fontWeight: "800",
                    fontSize: isMobile ? "30px" :"24px",
                  }}
                >
                  Who We Are
                </span>
                <span
                  style={{
                    width: isMobile ? "32px" : "24px",
                    paddingLeft: "2px",
                  }}
                >
                  <hr
                    style={{
                      background: "#db930d",
                      border: "none",
                      height: "2px",
                    }}
                  />
                </span>
                <span
                  style={{
                    letterSpacing: isMobile ? "" :"0.6px",
                    fontFamily: "'Inter', 'Segoe UI', sans-serif",
                    fontSize: isMobile ? "15px" :"11px",
                    textAlign: "justify",
                  }}
                >
                  Our university is a hub of knowledge and innovation, committed
                  to providing an enriching educational experience that fosters
                  core qualities and growth. With state-of-the-art facilities
                  and a dedication to excellence, we prepare our students for
                  global success.
                </span>
                <button
                  style={{
                    width: "fit-content",
                    margin: isMobile ? "13px 0 14px 0" : "10px 0 0 0",
                    borderRadius: isMobile ? "5px" :"3px",
                    border: "none",
                    padding: isMobile ? "9px 18px" :"6px 18px",
                    background: "#db930d",
                    color: "white",
                    fontSize: isMobile ? "16px" :"12px",
                  }}
                >
                  Read more
                </button>
              </Flex>
              <div
                style={{
                  flex: isMobile ? 1 : isTablet ? 1 : "0 0 60%",
                  // margin: isMobile ? "0 0 100px 0" : "0",
                  position: "relative",
                }}
              >
                <figure
                  style={{
                    height: isMobile ? "180px" :"100%",
                    width: "100%",
                    margin: 0,
                    flexShrink:0
                  }}
                >
                  <img
                    src={group}
                    style={{
                      width: "100%",
                      borderRadius: isMobile ? "10px" : "30px",
                      height: "100%",
                      objectFit:"contain"
                    }}
                    alt=""
                  />
                </figure>
                <Flex
                  vertical={!isMobile}
                  gap={isMobile?26:16}
                  style={{
                    position: "absolute",
                    transform: isMobile
                      ? "translateX(-50%) translateY(70%)"
                      : "",
                    width: isMobile ? "90%" : "80px",
                    top: isMobile ? "" : 6,
                    bottom: isMobile ? 0 : 6,
                    right: isMobile ? "" : 6,
                    left: isMobile ? "50%" : "",
                    // background: "linear-gradient(135deg, #1E3A5F, #09325e)",
                    background: "linear-gradient(135deg, #1E3A5F, #061c33)",
                    padding: isMobile ? "20px 20px" : "16px 10px",
                    boxSizing: "border-box",
                    color: "#ebedef",
                    fontSize: isMobile ? "14px" : "12px",
                    borderRadius: isMobile ? "10px" : "20px",
                  }}
                >
                  <span
                    style={{
                      fontSize: isMobile ? "70px" : "40px",
                      color: "#de990f",
                      lineHeight: isMobile ? ".7" : "1",
                      margin: isMobile ? "0 0 -16px 0" : "0 0 -28px 0",
                      fontFamily: "-apple-system",
                    }}
                  >
                    “
                  </span>
                  <Flex
                    vertical
                    gap={5}
                    style={{ 
                      // lineHeight: "20px", 
                      fontFamily:"fangsong", lineHeight: isMobile ? "1.5" : "",}}
                  >
                    <span>
                      Education is the most powerful weapon which you can use to
                      change the world.
                    </span>
                    <span style={{paddingTop:"3px"}}>- Nelson Mandela</span>
                  </Flex>
                </Flex>
              </div>
            </div>

            {isMobile && (
              <div style={{width:"100%",}}>
                 <Flex
                vertical
                align="center" gap={16}
                style={{ margin: "100px 0 0 0", width: "100%", height: "100%",}}
              >
                <span
                  style={{
                    fontFamily: "'Robotto'",
                    textAlign: "center",
                    fontWeight: "800",
                    fontSize: "24px",
                  }}
                >
                  {" "}
                  Our Global Impact
                </span>
                <Flex
                  vertical
                  gap={1.5}
                  align="stretch"
                  style={{
                    width:"100%",
                    height: "100%",
                    borderRadius: "5px",
                    
                  }}
                >
                  {VerticalMobileStat.map(
                    (item: TVerticalMobileStat, index: number) => (
                      <Flex key={index} gap={26} align="center" style={{              gap: "15px",
              backgroundColor: "#ffffff",
              padding: "16px 26px",
              borderRadius: "8px",
              boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
              fontFamily:"'Robotto'"
}}>
                           <figure style={{ width: "43px",height:"43px", margin:"0",flexShrink:0 }}>
                              <img
                                src={item.image}
                                style={{ height: "100%", width: "100%", objectFit:"contain" }}
                                alt=""
                              />
                            </figure>
                            <Flex vertical gap={5}>
                              <span style={{fontWeight:800, fontSize:"20px"}}>{item.value}</span>
                              <span>{item.title}</span>
                            </Flex>
                      </Flex>
                    )
                  )}
                </Flex>
              </Flex>
              </div>
            )}
            {/* </div> */}
          </div>

         
 {/*  2nd part of second section */}
          <div style={{ width: isMobile ? "100%" : "50%", height: "100%" }}>
            <div
              style={{
                width: "100%",
                height: "100%",
                display: "flex",
                flexDirection: isMobile ? "column" : "row",
                gap: isMobile? "30px" :"10px",
              }}
            >
              {/* 1st flex */}
              <Flex
                vertical
                gap={12}
                style={{
                  height: "100%",
                  width: isMobile ? "100%" : "50%",
                  borderRadius: "14px",
                }}
              >
                <span
                  style={{
                    fontFamily: "'Robotto'",
                    fontSize: "24px",
                    fontWeight: 600,
                  }}
                >
                  News & <span style={{ color: "#db930d" }}>Events</span>
                </span>
                <Swiper
                  slidesPerView={1}
                  spaceBetween={isMobile ? 8 : 14}
                  pagination={{
                    clickable: true,
                  }}
                  breakpoints={{
                    0: {
                      slidesPerView: 1, // mobile → swipe
                    },
                    768: {
                      slidesPerView: 1, // tablet
                    },
                    1024: {
                      slidesPerView: 1, // desktop → show all nicely
                    },
                  }}
                  modules={[Pagination, Autoplay]}
                  className="mySwiper"
                  style={{
                    width: "100%",
                    height: "100%",
                    borderRadius: "20px",
                    paddingBottom: "27px", // space for bullets
                    //  display: "flex",
                    //  flexDirection: "column",
                  }}
                >
                  {newsEventsData?.map((item: TNewsEventsData) => {
                    return (
                      <SwiperSlide
                        key={item.id}
                        style={{
                          display: "flex",
                          borderRadius: "16px",
                          height: "100%",
                          overflow:" hidden"
                        }}
                      >
                        <div
                          style={{
                            background: "#fff",
                            overflow: "hidden",

                            // Premium soft shadow
                            boxShadow: "0 8px 25px rgba(0,0,0,0.08)",

                            // Smooth transition
                            transition: "0.3s ease",

                            height: "100%",
                            display: "flex",
                            alignItems: "stretch",
                            borderRadius: "20px",
                            gap: "10px",
                          }}
                        >
                          <figure style={{ margin: "0", flex: 1 }}>
                            <img
                              src={item.image}
                              style={{
                                height: "100%",
                                width: "100%",
                                objectFit: "cover",
                              }}
                              alt=""
                            />
                          </figure>
                          <Flex
                            vertical
                            gap={10}
                            style={{ flex: 1, padding: "10px 8px 8px 0" }}
                          >
                            <span
                              style={{
                                fontSize: "14px",
                                fontWeight: 600,
                                fontFamily: "'Robotto'",
                              }}
                            >
                              {item.title}
                            </span>
                            <span
                              style={{ fontSize: "12px", lineHeight: "17px" }}
                            >
                              {item.description}
                            </span>
                            <span
                              style={{
                                fontSize: "11px",
                                color: "#db930d",
                                textDecoration: "underline",
                                textDecorationColor: "#db930d",
                                textUnderlineOffset: "4px",
                              }}
                            >
                              Read More
                            </span>
                          </Flex>
                        </div>
                      </SwiperSlide>
                    );
                  })}
                </Swiper>
              </Flex>

              {/* 2nd flex */}
              <Flex
                vertical
                gap={10}
                style={{ width: isMobile ? "100%" : "50%", height: "100%" }}
              >
                <span
                  style={{
                    fontFamily: "'Robotto'",
                    fontSize: "24px",
                    fontWeight: 600,
                  }}
                >
                  Voices of Our
                  <span style={{ color: "#db930d", paddingLeft: "4px" }}>
                    Community
                  </span>
                </span>

                <Swiper
                  slidesPerView={1}
                  spaceBetween={isMobile ? 8 : 14}
                  pagination={{
                    clickable: true,
                  }}
                  breakpoints={{
                    0: {
                      slidesPerView: 1, // mobile → swipe
                    },
                    768: {
                      slidesPerView: 1, // tablet
                    },
                    1024: {
                      slidesPerView: 1, // desktop → show all nicely
                    },
                  }}
                  modules={[Pagination, Autoplay]}
                  className="mySwiper"
                  style={{
                    width: "100%",
                    height: "100%",
                    borderRadius: "20px",
                    paddingBottom: "25px", // space for bullets
                    //  display: "flex",
                    //  flexDirection: "column",
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
                      {faculty?.data
                        ?.slice(0, 3)
                        .map((item: TFaculty, index: number) => {
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
                              key={item.id}
                              style={{
                                display: "flex",
                                borderRadius: "16px",
                                height: "100%",
                                overflow:" hidden"
                              }}
                            >
                              <Flex
                                vertical
                                gap={10}
                                style={{
                                  background: "#fff",
                                  overflow: "hidden",

                                  // Premium soft shadow
                                  boxShadow: "0 8px 25px rgba(0,0,0,0.08)",

                                  // Smooth transition
                                  transition: "0.3s ease",

                                  height: "100%",
                                  width: "100%",
                                  // alignItems: "stretch",
                                  borderRadius: "20px",
                                  padding: "10px 20px",
                                }}
                              >
                                <Flex gap={20} style={{ width: "100%" }}>
                                  <figure
                                    style={{
                                      margin: "0",
                                      width: "35%",
                                      flex: 1,
                                    }}
                                  >
                                    <img
                                      src={image}
                                      style={{
                                        height: "",
                                        width: "100%",
                                        objectFit: "cover",
                                        borderRadius: "50%",
                                      }}
                                      alt=""
                                    />
                                  </figure>
                                  <div style={{ width: "66%" }}>
                                    <span
                                      style={{
                                        fontSize: "11px",
                                        fontFamily: "",
                                      }}
                                    >
                                      Techno University has provided me with
                                      endless opportunities to learn, grow, and
                                      make a difference. I’m proud to be a part
                                      of this incredible community.
                                    </span>
                                  </div>
                                </Flex>
                                <Flex vertical style={{paddingBottom:""}}>
                                  <span
                                    style={{
                                      fontWeight: 600,
                                      fontSize: "11px",
                                      
                                    }}
                                  >
                                    {item?.name}
                                  </span>
                                  <span
                                    style={{
                                      fontSize: "11px",
                                      lineHeight: "2.2",
                                    }}
                                  >
                                    {item?.academicDepartment?.name}
                                  </span>
                                </Flex>
                              </Flex>
                            </SwiperSlide>
                          );
                        })}
                    </>
                  )}
                </Swiper>
              </Flex>
            </div>
          </div>
        </div>
      </div>

     
    </div>
  );
};

export default About;

