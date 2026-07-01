import { Col, Flex, Row, Spin } from "antd";
import {
  femaleGenderImageArray,
  maleGenderImageArray,
} from "../constants/global";
import { useGetAllCourseQuery } from "../../features/admin/courseManagementApi";
import { useGetAllFacultyQuery } from "../../features/admin/userManagementApi";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import './styles.css';

// import required modules
import { Autoplay } from "swiper/modules";
import { Navigation } from "swiper/modules";
import useResponsive from "../../hooks/useResponsive";
import type { TFaculty } from "../../types/userManagementTypes";
import { BiSolidQuoteAltLeft } from "react-icons/bi";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const FacultySection = () => {
     const { isMobile, isTablet } = useResponsive();
    useGetAllCourseQuery(undefined);
  const { data: faculty, isLoading: isFacultyLoading } =
    useGetAllFacultyQuery(undefined);

  return (
    <div>
      {/* <Flex
        vertical
        justify="center"
        gap={36}
        style={{
          width: isMobile ? "100%" : isTablet ? "95%" : "70%",
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
            padding: isMobile ? "0 8px" : "0",
          }}
        >
          Exlore our top-rated Faculty to understand better and choose our
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
                  slidesPerView: 1, // mobile → swipe
                },
                768: {
                  slidesPerView: 3.5, // tablet
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
      </Flex> */}
       <div style={{
          borderRadius: "16px",
          padding: isMobile ? "10px" : isTablet ? "20px" : "20px",
          width: isMobile ? "" : isTablet ? "90%" : "80%",
          margin: isMobile ? "10px" :"60px auto",
          background: "#060d2b",overflow: "hidden",
        }}>
          <Row gutter={16} align="middle">
            <Col sm={24} lg={8}>
                 <Flex vertical gap={4}>
                           <span
                             style={{
                               fontFamily: "'",
                               color: "#db930d",
                               letterSpacing: "1.5px",
                               fontWeight: "600",
                               fontSize: "10px",
                               textTransform: "uppercase",
                             }}
                           >
                             Testimonals
                           </span>
                           <span
                             style={{
                               fontSize: isMobile?"22px": "30px",
                               color: "#fff",
                               textTransform: "capitalize",
                               fontFamily: "serif",
                               paddingBottom: "15px",
                               fontWeight: "600",
                             }}
                           >
                             Voices of our community
                           </span>
                         </Flex>
            </Col>
            <Col sm={24} lg={9}>
                  <Swiper 
                  navigation={{
                    prevEl:".prevBtn",
                    nextEl:".nextBtn"
                  }}
                  slidesPerView={1}
                  spaceBetween={isMobile ? 8 : 14}
                  autoplay={true}
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
                  modules={[Autoplay, Navigation]}
                  className="mySwiper"
                  style={{
                    width: "100%",
                    height: "100%",
                    borderRadius: "20px",margin:"0"
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
                        ?.map((item: TFaculty, index: number) => {
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
                                overflow: " hidden",
                              }}
                            >
                              <Flex
                                vertical
                                gap={10}
                                style={{
                                  overflow: "hidden",

                                  // Premium soft shadow
                                  boxShadow: "0 8px 25px rgba(0,0,0,0.08)",

                                  // Smooth transition
                                  transition: "0.3s ease",
                                  height: "100%",
                                  width: "100%",
                                  borderRadius: "20px",
                                  padding: "10px 20px",
                                }}
                              >
                                <Flex  gap={isMobile?10:20} style={{ width: "100%", color:"white" }}>
                                  <figure
                                    style={{
                                      margin: "0",
                                      width: isMobile?"50px": "100px",
                                      height:isMobile?"50px": "100px",
                                      flexShrink: 0,
                                    }}
                                  >
                                    <img
                                      src={image}
                                      style={{
                                        height: "100%",
                                        width: "100%",
                                        objectFit: "cover",
                                        borderRadius: "50%",
                                         margin: "0",
                                      }}
                                      alt=""
                                    />
                                  </figure>
                                  <Flex gap={12}>
                                      <span><BiSolidQuoteAltLeft style={{fontSize:isMobile?"19px":"26px", color:"#d48516", marginTop:"-8px"}}></BiSolidQuoteAltLeft></span>
                                       <Flex vertical gap={20} >
                                       
                                    <span style={{fontSize: "11px", fontFamily: "cursive" }}> Techno University has provided me withendless opportunities to learn, grow, and
                                      make a difference. I’m proud to be a part
                                      of this incredible community.
                                    </span>
                                    <Flex vertical gap={2} style={{ paddingBottom: "" }}>
                                  <span
                                    style={{
                                      fontWeight: 600,
                                      fontSize:isMobile?"12px":"14px",
                                    }}
                                  >
                                    {item?.name}
                                  </span>
                                  <span
                                    style={{ color:"#f69f24",
                                      fontSize:isMobile?"10px":"11px",
                                       fontWeight:"600"
                                    }}
                                  >
                                    {item?.academicDepartment?.name}
                                  </span>
                                </Flex>
                                 </Flex>
                                  </Flex>
                                 
                                </Flex>
                                
                              </Flex>
                            </SwiperSlide>
                          );
                        })}
                    </>
                  )}
                </Swiper>
            </Col>
            <Col sm={24} lg={7}>
                <Flex gap={10} justify="end" style={{marginRight:isMobile?"": "40px"}}>
                 <span className="nextBtn" style={{fontSize:"20px"}}><IoIosArrowBack></IoIosArrowBack></span>
                 <span className="prevBtn" style={{fontSize:"20px"}}><IoIosArrowForward></IoIosArrowForward></span>
                </Flex>
            </Col>
          </Row>
       </div>
    </div>
  );
};

export default FacultySection;