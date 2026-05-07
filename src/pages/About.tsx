import { Button, Col, Flex, Row } from "antd";
import useResponsive from "../hooks/useResponsive";
import group from "../../src/assets/images/group.png"
import campus2 from "../../src/assets/images/campus2.png"
import {info } from "./constants/global";
import CountUp from "react-countup";
import { FaArrowRight } from "react-icons/fa6";

const About = () => {
   
  const {isMobile, isTablet} = useResponsive()

  return (
    <div style={{paddingTop:"100px"}}>
      <div style={{position:"relative"}}>
          <div
      style={{
        position: "relative",
        minHeight: "88vh",
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
            Empowering minds through quality education, innovative
            research, and a commitment to excellence.
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
            position:"absolute",
            bottom:0,
            zIndex:10,
            transform: "translateX(-50%) translateY(50%)",
            left:"50%"
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
                  background:"#ffffff",
                  width:"100%"
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
      </div>



          {/* Ensure Necessity */}
      
            <div
                    style={{
                      background: "linear-gradient(135deg, #f8fafc, #eef2f7)",
                      borderRadius: "16px",
                      boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
                      margin:"20px 0",
                    
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
                    >
                      {/* 
                      fontFamily: "'Inter', 'Montserrat', sans-serif",
                            fontSize: "18px", */}
                      <Flex vertical style={{ flex: 1 , padding:'0 8px'}} gap={24}>
                          <Flex align="middle" justify="start" gap={10} style={{paddingTop:"20px"}}>
                                                  <span style={{ width: isMobile ? "16px" : "20px" }}>
                                                    <hr
                                                      style={{
                                                        background: "#db930d",
                                                        border: "none",
                                                        height: "1.2px",
                                                      }}
                                                    />
                                                  </span>
                                                  <span style={{fontFamily:"emoji", textTransform: "uppercase", fontSize: "9px", color:"#e7a11f", }}>
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
                      <div style={{ flex: 1, margin:isMobile?"0 0 30px 0":"30px 0", position:"relative" }}>
                        <img src={group} style={{ width: "100%", borderRadius:isMobile?"10px": "40px" }} alt="" />
                        <Flex vertical gap={10} style={{position:"absolute", width:isMobile?"90px":"125px", top:"8px", right:'10px',
                          background:"linear-gradient(135deg, #1E3A5F, #09325e)", padding:"16px 10px", color:"#ffffff", fontSize:isMobile?"10px":"14px", borderRadius:isMobile?"10px":"20px"}}>
                         <span style={{ fontSize: isMobile?"40px":"60px", color: "#F4B740", lineHeight: isMobile?".7":"1",  marginBottom: isMobile?"-16px":"-28px"}}>“</span>
                         <span >Education is the most powerful weapon which you can use to change the world.</span> 
                         <span>- Nelson Mandela</span>
                        </Flex>
                      </div>
                    </div>
                  </div>
    </div>
  );
};

export default About;