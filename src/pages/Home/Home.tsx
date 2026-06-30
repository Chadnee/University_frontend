// import { Link } from "react-router-dom";
// import { useAppSelector } from "../../features/hooks";
// import { selectCurrentToken, type TUser } from "../../features/auth/authSlice";
// import { verifyToken } from "../../utils/verifyToken";
import { ParallaxBanner } from "react-scroll-parallax";
import CountUp from "react-countup";
import banner from "../../assets/images/campus_sports.png"
import {info} from "../constants/global";
import { useGetAllCourseQuery } from "../../features/admin/courseManagementApi";

import useResponsive from "../../hooks/useResponsive";
import AcademicFaculty from "./AcademicFaculty/AcademicFaculty";
import HomeBanner from "./HomeBanner";
import ProgramSection from "./ProgramSection";
import CampusLife from "./CampusLife";
import FacultySection from "./FacultySection";
import { Flex } from "antd";
import NewsAndEventSection from "./NewsAndEventSection";

const Home = () => {
  const { isMobile} = useResponsive();
    useGetAllCourseQuery(undefined);

  
return (
    <div style={{ padding: isMobile ? "" : "" }}>
      {/* <Header></Header> */}
      {/* parallax banner */}
     <HomeBanner></HomeBanner>
      <AcademicFaculty></AcademicFaculty>

      {/* Count of ingredients */}

      {/* <div
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
      </div> */}

      {/* Ensure Necessity */}

      {/* <div
        style={{
          background: "linear-gradient(135deg, #f8fafc, #eef2f7)",
          borderRadius: "16px",
          boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
          margin: "20px 0",
        }}
      >
        <div
          style={{
            width: isMobile ? "100%" : "80%",
            margin: "30px auto",
            display: "flex",
            flexDirection: isMobile ? "column" : "row",
            justifyContent: "center",
            alignItems: "center",
            gap: "40px",
          }}
        > */}
          {/* 
          fontFamily: "'Inter', 'Montserrat', sans-serif",
                fontSize: "18px", */}
          {/* <Flex vertical style={{ flex: 1, padding: "0 8px" }} gap={24}>
            <Flex
              align="middle"
              justify="start"
              gap={10}
              style={{ paddingTop: "20px" }}
            >
              <span style={{ width: isMobile ? "16px" : "20px" }}>
                <hr
                  style={{
                    background: "#db930d",
                    border: "none",
                    height: "1.2px",
                  }}
                />
              </span>
              <span
                style={{
                  fontFamily: "emoji",
                  textTransform: "uppercase",
                  fontSize: "9px",
                  color: "#e7a11f",
                }}
              >
                About Our University
              </span>
            </Flex>
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
          <div
            style={{
              flex: 1,
              margin: isMobile ? "0 0 30px 0" : "30px 0",
              position: "relative",
            }}
          >
            <img
              src={group}
              style={{
                width: "100%",
                borderRadius: isMobile ? "10px" : "40px",
              }}
              alt=""
            />
            <Flex
              vertical
              gap={10}
              style={{
                position: "absolute",
                width: isMobile ? "90px" : "125px",
                top: "8px",
                right: "10px",
                background: "linear-gradient(135deg, #1E3A5F, #09325e)",
                padding: "16px 10px",
                color: "#ffffff",
                fontSize: isMobile ? "10px" : "14px",
                borderRadius: isMobile ? "10px" : "20px",
              }}
            >
              <span
                style={{
                  fontSize: isMobile ? "40px" : "60px",
                  color: "#F4B740",
                  lineHeight: isMobile ? ".7" : "1",
                  marginBottom: isMobile ? "-16px" : "-28px",
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
      </div> */}

      {/* Show Popular Course */}
      <ProgramSection></ProgramSection>
      <CampusLife></CampusLife>

      {/* Show Expert Faculty */}
      <FacultySection></FacultySection>
      
      <NewsAndEventSection></NewsAndEventSection>
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
    </div>
  );
};

export default Home;
