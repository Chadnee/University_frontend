import { Card, Flex, Spin } from "antd";
import {
  classImageArray,
  type TCourse,
} from "../constants/global";
import { useGetAllCourseQuery } from "../../features/admin/courseManagementApi";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import './styles.css';

// import required modules
import { Autoplay, Pagination } from "swiper/modules";
import useResponsive from "../../hooks/useResponsive";
import { FaArrowRight } from "react-icons/fa6";
import { MdOutlineCalendarMonth } from "react-icons/md";
import { Link } from "react-router-dom";


const ProgramSection = () => {
      const { isMobile, isTablet } = useResponsive();
  const { data: courses, isLoading: isCourseLoading } =
    useGetAllCourseQuery(undefined);

  return (
    <div>
      
      <Flex
        vertical
        justify="center"
        align="start"
        gap={10}
        style={{
          borderRadius: "16px",
          padding: isMobile ? "6px" : isTablet ? "20px" : "20px",
          width: isMobile ? "100%" : isTablet ? "90%" : "80%",
          margin: "60px auto",
          background: "#060d2b",
        }}
      >
        <Flex justify="space-between" align="center" style={{width:"100%"}}>
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
              Popular Programs
            </span>
            <span
              style={{
                fontSize: "22px",
                color: "#fff",
                textAlign: "center",
                textTransform: "capitalize",
                fontFamily: "'poppins'",
                paddingBottom: "15px",
                fontWeight: "600",
              }}
            >
              Find your path access to success
            </span>
          </Flex>
           <Link to="/"><Flex gap={6} align="center"
            style={{
              color: "#fff",
              fontSize: "10px",
              border:".0002px solid #835706", padding:"6px 13px", borderRadius:"6px"
            }}
          > 
            <span>View All Programs</span>
            <FaArrowRight></FaArrowRight>
          </Flex>
          </Link>
        </Flex>

        {
          <Swiper
            slidesPerView={5}
            spaceBetween={isMobile ? 8 : 16}
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
                slidesPerView: 3.4, // tablet
              },
              1024: {
                slidesPerView: 5, // desktop → show all nicely
              },
            }}
            modules={[Pagination, Autoplay]}
            className="mySwiper"
            style={{
              width: isMobile ? "80%" : "100%",
              height: "auto",
              display: "flex",
              flexDirection: "column",
              paddingBottom: "30px",
            }}
          >
            {!courses || isCourseLoading ? (
              <Flex justify="center" align="center" style={{ height: "80vh" }}>
                <div style={{ color: "#d48516" }}>
                  <Spin />
                </div>
              </Flex>
            ) : (
              <div>
                {courses?.data?.map((item: TCourse, index: number) => {
                  const image = classImageArray[index % classImageArray.length];
                  return (
                    <SwiperSlide
                      key={`${item._id} - ${index}`}
                      style={{ height: "auto", display: "flex" }}
                    >
                      <Card
                        bordered={false}
                        bodyStyle={{ padding: 0, height: "100%" }}
                        style={{
                          borderRadius: "5px",
                          width: "100%",
                          border: "none",
                        }}
                      >
                        <Flex vertical gap={10} style={{ height: "100%" }}>
                          <div
                            style={{
                              height: isMobile ? 120 : 140,
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
                          </div>
                          <Flex
                            vertical
                            gap={8}
                            style={{
                              padding: "5px 8px 8px 20px",
                              flex: 1,
                              justifyContent: "space-between",
                            }}
                          >
                            <MdOutlineCalendarMonth
                              style={{
                                color: "#db930d",
                                fontSize: "16px",
                                fontWeight: 600,
                              }}
                            ></MdOutlineCalendarMonth>
                            <span
                              style={{
                                fontWeight: "600",
                                fontSize: "18px",
                                fontFamily: "serif",
                              }}
                            >
                              {" "}
                              {item?.title}
                            </span>
                            {/* <span style={{ fontWeight: "bolder" }}>
                              4 Years
                            </span> */}
                            <span
                              style={{
                                fontSize: isMobile ? "10px" : "12px",
                              }}
                            >
                              Build your future with leadership and strategic
                              business skills
                            </span>
                            <Flex
                              gap={4}
                              align="center"
                              style={{
                                color: "#db930d",
                                fontSize: "10px",
                                fontWeight: 600,
                              }}
                            >
                              <span>Learn More</span>{" "}
                              <FaArrowRight
                                style={{ marginTop: "3px" }}
                              ></FaArrowRight>
                            </Flex>
                          </Flex>
                        </Flex>
                      </Card>
                    </SwiperSlide>
                  );
                })}
              </div>
            )}
          </Swiper>
        }
      </Flex>

    </div>
  );
};

export default ProgramSection;