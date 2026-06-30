
import { ParallaxBanner } from "react-scroll-parallax";
import {Flex } from "antd";
import banner from "../../assets/images/banner.jpg";
import {
  universityStats,
  type TUniversityStats,
} from "../constants/global";

// import required modules
import useResponsive from "../../hooks/useResponsive";
import { IoArrowForwardOutline } from "react-icons/io5";
import { HiOutlineBuildingLibrary } from "react-icons/hi2";
import React from "react";
  
  // console.log(faculty?.data);

  // const token = useAppSelector(selectCurrentToken);
  // console.log(token);
  // let user;
  // if (token) {
  //   user = verifyToken(token);
  //   // console.log(user);
  // }
  const text =
    "Empowering minds, shaping futures, and driving innovation for a better tomorrow—where knowledge meets opportunity and ambition transforms into achievement.";
  
const HomeBanner = () => {
     const {isMobile} = useResponsive();
  return (
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
            top: isMobile ? "49%" : "50%",
            transform: "translateY(-50%)",
            padding: isMobile ? "0 22px" : "0 50px",
          }}
        >
          <Flex
            vertical
            justify="start"
            gap={isMobile ? 20 : 20}
            style={{
              color: "#ffffff",
              width: isMobile ? "" : "700px",
              marginTop: isMobile ? "-60px" : " ",
            }}
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
                fontSize: isMobile ? "32px" : "50px",
                marginTop: isMobile ? "-10px" : "",
              }}
            >
              Build Your Future <br />
              <span style={{ color: "#da920e" }}>Excellence</span> <br />
              {isMobile
                ? "With Learning Research"
                : "With Learning Research and Innovation"}
            </span>
            <span
              style={{
                fontSize: isMobile ? "13px" : "13px",
                letterSpacing: isMobile ? "1px" : " ",
              }}
            >
              {isMobile
                ? text.slice(
                    0,
                    text.toLowerCase().indexOf("knowledge") +
                      "knowledge".length,
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
              {!isMobile && (
                <Flex
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
              )}
            </Flex>
          </Flex>
        </div>

        <div
          style={{
            position: "absolute",
            bottom: isMobile ? "35px" : "20px",
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

  );
};

export default HomeBanner;