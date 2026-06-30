import { Button, Col, Flex, Row} from "antd";
import campus2 from "../../assets/images/campus2.png";
import {info} from "../constants/global";
import CountUp from "react-countup";
import { FaArrowRight } from "react-icons/fa6";
import useResponsive from "../../hooks/useResponsive";

 
const BannerSection = () => {
     const { isMobile, isTablet } = useResponsive();

  return (
      <div
        style={{
          position: "relative",
          height: isMobile ? "auto" : "auto",
          marginBottom: isMobile ? "0" : "140px",
        }}
      >
        <div
          style={{
            position: "relative",
            height: "90vh",
            width: "100%",
            backgroundImage: isMobile ? `url(${campus2})` : undefined,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          {/* RIGHT IMAGE */}
          {!isMobile && (
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
                  objectFit: isMobile ? "contain" : "cover",
                }}
              />
            </div>
          )}

          {/* LEFT CURVE OVERLAY */}
          <div
            style={{
              position: "absolute",
              left: 0,
              top: 0,
              height: "100%",
              width: isMobile ? "100%" : "58%",
              zIndex: 2,
              background:
                "linear-gradient(to right, rgba(255,255,255,0.98), rgba(255,255,255,0.93), rgba(255,255,255,0.82), transparent)",
              clipPath: isMobile
                ? ""
                : "polygon(0 0, 78% 0, 100% 100%, 0% 100%)",
              display: "flex",
              alignItems: "center",
            }}
          >
            {/* TEXT CONTENT */}
            <div
              style={{
                padding: isMobile ? "30px 13px" : "0 0 0 80px",
                // maxWidth: isMobile ? " 100%" :"70%",
                // maxWidth: "560px",
              }}
            >
              {/* TOP LABEL */}
              <Flex
                align={isMobile ? " " : "center"}
                gap={10}
                style={{ marginBottom: "18px" }}
              >
                {!isMobile && (
                  <span style={{ width: isMobile ? "16px" : "28px" }}>
                    <hr
                      style={{
                        border: "none",
                        background: "#d89b1d",
                        height: "2px",
                      }}
                    />
                  </span>
                )}

                <span
                  style={{
                    textTransform: "uppercase",
                    color: "#d89b1d",
                    fontSize: isMobile ? "10px" : "14px",
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
                  fontSize: isMobile ? "30px" : "50px",
                  lineHeight: isMobile ? "45px" : "60px",
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
                  fontSize: isMobile ? "13px" : "18px",
                  lineHeight: isMobile ? "" : "32px",
                  color: "#15345a",
                  // color: "#0a1e36",
                  marginTop: isMobile ? "" : "28px",
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
                  height: isMobile ? "40px" : "56px",
                  padding: isMobile ? "" : "0 34px",
                  background: "#d89b1d",
                  border: "none",
                  borderRadius: isMobile ? "" : "10px",
                  color: "#fff",
                  fontSize: isMobile ? "14px" : "17px",
                  fontWeight: isMobile ? "" : 600,
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
            marginTop: isMobile ? "30px" : "",
            display: "flex",
            justifyContent: "center",
            position: isMobile ? "static" : "absolute",
            bottom: 0,
            zIndex: 10,
            transform: isMobile ? "none" : "translateX(-50%) translateY(50%)",
            width: "100%",
            left: isMobile ? "" : "50%",
            marginBottom: isMobile ? "40px" : "",
          }}
        >
          <Row
            gutter={isMobile ? [16, 16] : isTablet ? [50, 50] : 70}
            style={{ margin: isMobile ? "24px 3px 40px 3px" : "" }}
            // style={{ display: "flex" }}
          >
            {info.map((item) => (
              <Col xs={12} sm={12} md={6} lg={6} style={{}}>
                <Flex
                  vertical={isMobile}
                  align="center"
                  justify="center"
                  gap={isMobile ? 10 : 20}
                  style={{
                    boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
                    padding: isMobile ? "14px 0" : "24px 18px",
                    background: !isMobile ? "#ffffff" : `${item.imageColor}35`,
                    width: "100%",
                    borderRadius: isMobile ? "6px" : "14px",
                  }}
                >
                  <figure
                    style={{
                      height: isMobile ? "45px" : "80px",
                      width: isMobile ? "45px" : "85px",
                      margin: "0",
                      background: item.imageColor,
                      borderRadius: isMobile ? "8px" : "14px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <img
                      src={item.image}
                      style={{
                        height: isMobile ? "30px" : "45px",
                        width: isMobile ? "30px" : "45px",
                        objectFit: "contain",
                      }}
                      alt=""
                    />
                  </figure>
                  <Flex
                    vertical
                    align={isMobile ? "center" : "start"}
                    gap={4}
                    style={{}}
                  >
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
                          height: isMobile ? "1.3px" : "2px",
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
  );
};

export default BannerSection;