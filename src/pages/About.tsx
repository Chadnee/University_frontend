import { Button, Col, Flex, Row, Spin } from "antd";
import useResponsive from "../hooks/useResponsive";
import group from "../../src/assets/images/group.png";
import campus2 from "../../src/assets/images/campus2.png";
import { femaleGenderImageArray, info, maleGenderImageArray, newsEventsData, type TNewsEventsData } from "./constants/global";
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

const About = () => {
  const { isMobile, isTablet } = useResponsive();
  const { data: faculty, isLoading: isFacultyLoading } =
    useGetAllFacultyQuery(undefined);
  console.log(faculty?.data);
  return (
    <div style={{ paddingTop: "100px", background: "#f6f9fc" }}>
      <div style={{ position: "relative", height: "90vh" }}>
        <div
          style={{
            position: "relative",
            height: "90vh",
            width: "100%",
            overflow: "visible",
            background: "#f8f8f8",
          }}
        >
          {/* RIGHT IMAGE */}
          <div
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
                objectFit: "cover",
              }}
            />
          </div>

          {/* LEFT CURVE OVERLAY */}
          <div
            style={{
              position: "absolute",
              left: 0,
              top: 0,
              height: "100%",
              width: "58%",
              zIndex: 2,
              background:
                "linear-gradient(to right, rgba(255,255,255,0.98), rgba(255,255,255,0.93), rgba(255,255,255,0.82), transparent)",
              clipPath: "polygon(0 0, 78% 0, 100% 100%, 0% 100%)",
              display: "flex",
              alignItems: "center",
            }}
          >
            {/* TEXT CONTENT */}
            <div
              style={{
                paddingLeft: "80px",
                maxWidth: "560px",
              }}
            >
              {/* TOP LABEL */}
              <Flex align="center" gap={10} style={{ marginBottom: "18px" }}>
                <span style={{ width: "28px" }}>
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
                    fontSize: "14px",
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
                  fontSize: "50px",
                  lineHeight: "60px",
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
                  fontSize: "18px",
                  lineHeight: "32px",
                  color: "#5f6368",
                  marginTop: "28px",
                  maxWidth: "520px",
                  fontFamily: "Poppins",
                }}
              >
                Empowering minds through quality education, innovative research,
                and a commitment to excellence.
              </p>

              {/* BUTTON */}
              <Button
                style={{
                  marginTop: "34px",
                  height: "56px",
                  padding: "0 34px",
                  background: "#d89b1d",
                  border: "none",
                  borderRadius: "10px",
                  color: "#fff",
                  fontSize: "17px",
                  fontWeight: 600,
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
            display: "flex",
            justifyContent: "center",
            position: "absolute",
            bottom: 0,
            zIndex: 10,
            transform: "translateX(-50%) translateY(50%)",
            width: "100%",
            left: "50%",
          }}
        >
          <Row
            gutter={isMobile ? [10, 10] : isTablet ? 50 : 70}
            style={{ display: "flex" }}
          >
            {info.map((item) => (
              <Col xs={12} sm={12} md={6} lg={6} style={{ flex: 1 }}>
                <Flex
                  align="center"
                  justify="center"
                  gap={20}
                  style={{
                    boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
                    padding: "24px 18px",
                    background: "#ffffff",
                    width: "100%",
                    borderRadius: "14px",
                  }}
                >
                  <figure
                    style={{
                      height: "80px",
                      width: "85px",
                      margin: "0",
                      background: item.imageColor,
                      borderRadius: "14px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <img
                      src={item.image}
                      style={{
                        height: "45px",
                        width: "45px",
                        objectFit: "contain",
                      }}
                      alt=""
                    />
                  </figure>
                  <Flex vertical gap={4} style={{}}>
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
                        fontSize: isMobile ? "11px" : "19px",
                        fontWeight: 600,
                      }}
                    >
                      {item.title}
                    </span>
                    <span style={{ width: isMobile ? "16px" : "24px" }}>
                      <hr
                        style={{
                          background: item.textColor,
                          border: "none",
                          height: "2px",
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
          margin: "150px auto 0 auto",
          paddingBottom: "50px",
          width: isMobile ? "100%" : "85%",
          height: "210px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection:isMobile?"column":"row",
            gap: "22px",
            alignItems: "stretch",
            justifyContent: "space-between",
            height: "100%",
          }}
        >
          {/*  1st part of second section */}
          <div style={{ display: "flex", width: "50%", height: "100%" }}>
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
                    fontSize: "9px",
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
                    fontSize: "24px",
                  }}
                >
                  Who We Are
                </span>
                <span
                  style={{
                    width: isMobile ? "16px" : "24px",
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
                    letterSpacing: "0.6px",
                    fontFamily: "'Inter', 'Segoe UI', sans-serif",
                    fontSize: "11px",
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
                    margin: isMobile ? "5px 0 0 0" : "10px 0 0 0",
                    borderRadius: "3px",
                    border: "none",
                    padding: "6px 18px",
                    background: "#db930d",
                    color: "white",
                    fontSize: "12px",
                  }}
                >
                  Read more
                </button>
              </Flex>
              <div
                style={{
                  flex: isMobile ? 1 : isTablet ? 1 : "0 0 60%",
                  margin: isMobile ? "0 0 30px 0" : "0",
                  position: "relative",
                }}
              >
                <figure
                  style={{
                    height: "100%",
                    width: "100%",
                    margin: 0,
                  }}
                >
                  <img
                    src={group}
                    style={{
                      width: "100%",
                      borderRadius: isMobile ? "10px" : "30px",
                      height: "100%",
                    }}
                    alt=""
                  />
                </figure>
                <Flex
                  vertical
                  gap={10}
                  style={{
                    position: "absolute",
                    width: isMobile ? "90px" : "80px",
                    top: 6,
                    bottom: 6,
                    right: 6,
                    background: "linear-gradient(135deg, #1E3A5F, #09325e)",
                    padding: "16px 10px",
                    color: "#ffffff",
                    fontSize: isMobile ? "10px" : "12px",
                    borderRadius: isMobile ? "10px" : "20px",
                  }}
                >
                  <span
                    style={{
                      fontSize: isMobile ? "40px" : "40px",
                      color: "#F4B740",
                      lineHeight: isMobile ? ".7" : "1",
                      margin: isMobile ? "0 0 -16px 0" : "0 0 -28px 0",
                      fontFamily: "-apple-system",
                    }}
                  >
                    “
                  </span>
                  <span>
                    Education is the most powerful weapon which you can use to
                    change the world.
                  </span>
                  <span>- Nelson Mandela</span>
                </Flex>
              </div>
            </div>
            {/* </div> */}
          </div>

          {/*  2nd part of second section */}
          <div style={{ width: "50%", height: "100%" }}>
            <div
              style={{
                width: "100%",
                height: "100%",
                display: "flex",
                flexDirection:isMobile?"column":"row",
                gap: "10px",
              }}
            >
              {/* 1st flex */}
              <Flex
                vertical
                gap={12}
                style={{ height: "100%", width: "50%", borderRadius: "14px" }}
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
                  slidesPerView={5.2}
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
              <Flex vertical gap={10} style={{ width: "50%", height: "100%" }}>
                <span
                  style={{
                    fontFamily: "'Robotto'",
                    fontSize: "24px",
                    fontWeight: 600,
                  }}
                >
                  Voices of Our 
                  <span style={{ color: "#db930d" }}>Community</span>
                </span>

                <Swiper
                  slidesPerView={5.2}
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
                        key={item.id}
                        style={{
                          display: "flex",
                          borderRadius: "16px",
                          height: "100%",
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
                            width:"100%",
                            // alignItems: "stretch",
                            borderRadius: "20px",
                            padding:"17px 20px",
                          }}
                        >
                          <Flex gap={20} style={{ width: "100%" }}>
                            <figure
                              style={{ margin: "0", width: "35%", flex: 1 }}
                            >
                              <img
                                src={image}
                                style={{
                                  height: "",
                                  width: "100%",
                                  objectFit: "cover",
                                  borderRadius:"50%"
                                }}
                                alt=""
                              />
                            </figure>
                             <div style={{width:"66%"}}>
                               <span style={{fontSize:"11px", fontFamily:""}}>
                                  Techno University has provided me with endless opportunities to learn, grow, and make a difference. I’m proud to be a part of this incredible community.
                               </span>
                             </div>
                          </Flex>
                           <Flex vertical >
                               <span style={{fontWeight:600, fontSize:"11px"}}>{item?.name}</span>
                               <span style={{fontSize:"11px", lineHeight:"2.2"}}>{item?.academicDepartment?.name}</span>
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
