import { Col, Flex, Row } from "antd";
import useResponsive from "../../hooks/useResponsive";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";
import { newsEventsData } from "../constants/global";
import { IoIosStar } from "react-icons/io";
// isMobile?"":""
const NewsAndEventSection = () => {
  const { isMobile } = useResponsive();
  return (
    <div
      style={{
        width: isMobile ? "" : "80%",
        margin: isMobile ? "40px 7px" : "80px auto",
        padding:""
      }}
    >
      <Flex justify="space-between" align="center">
        <Flex vertical gap={15}>
          <span
            style={{
              fontFamily: "var(--font-heading-bold)",
              fontWeight: 600,
              fontSize: "12px",
              letterSpacing: isMobile?"":"1px",
              textTransform: "uppercase",
              color: "#f4ac1b",
            }}
          >
           { isMobile?<span>Latest News</span> : <span>latest news & events</span>}
          </span>
          {
            !isMobile && <span
            className="font-heading-stylish"
            style={{
              textTransform: "capitalize",
              fontWeight: 600,
              fontSize: "30px",
            }}
          >
            Stay Updated with techno
          </span>
          }
        </Flex>
        <Link to="/">
          <Flex
            gap={6}
            align="center"
            style={{
              color: "#f1a40a",
              fontSize: isMobile?"11px":"13px",
              border: "1.8px solid #f4ac1b",
              padding: "8px 20px",
              borderRadius: "6px",
              width: "fit-content",
              // fontWeight:600
            }}
          >
          { isMobile?<span>View All</span> : <span>View All News</span>}

            <FaArrowRight></FaArrowRight>
          </Flex>
        </Link>
      </Flex>
      <Row gutter={[10,10] }style={{ marginTop:isMobile?"12px": "40px" }}>
        {(isMobile
    ? newsEventsData?.slice(0, 1)
    : newsEventsData?.slice(0, 3)
  )?.map((item, index) => (
          // card of news
          <Col key={index} sm={12} md={8} lg={8}>
            <Flex
              className={`news-card ${index === 1 && !isMobile ? "middle-card" : ""}`}
              justify="center"
              align="stretch"
              style={{ cursor: "pointer" }}
            >
              {/* Card image with text overlay */}
              <div style={{ flex: "0 0 170px", position: "relative" }}>
                <figure
                  style={{
                    width: "170px",
                    margin: 0,
                    height: "160px",
                    border: "0.6px solid #e9e2e2",
                    padding: "4px",
                    borderBottomLeftRadius: "6px",
                    borderTopLeftRadius: "6px",
                  }}
                >
                  <img
                    src={item.image}
                    style={{
                      width: "100%",
                      height: "100%",
                      borderBottomLeftRadius: "6px",
                      borderTopLeftRadius: "6px",
                      objectFit: "cover",
                    }}
                    alt=""
                  />
                </figure>
                <Flex align="center" gap={2}
                  style={{
                    position: "absolute",
                    inset: 0,
                    top: 5,
                    left: 5,
                    borderBottomRightRadius: "6px",
                    borderTopLeftRadius: "6px",
                    padding: "1px 8px",
                    width: "fit-content",
                    height: "fit-content",
                    background: "rgba(247, 232, 232, 0.3)", // transparent white
                    backdropFilter: "blur(18px)", // main glass effect
                    WebkitBackdropFilter: "blur(15px)", // for Safari support
                  }}
                >
                  <IoIosStar style={{ color: "#c28514" }}></IoIosStar>
                  <span>{item.tag}</span>
                </Flex>
              </div>

              {/* Card content */}
              <Flex
                vertical
                justify="space-between"
                style={{
                  width: "100%",
                  flex: 1,
                  borderTop: "0.6px solid #e9e2e2",
                  borderRight: "0.6px solid #e9e2e2",
                  borderBottom: "0.6px solid #e9e2e2",
                  padding: "10px",
                  borderBottomRightRadius: "6px",
                  borderTopRightRadius: "6px",
                  minWidth: 0,
                }}
              >
                <Flex justify="space-between" align="center">
                  <span
                    style={{
                      color: "#c28514",
                      fontSize: "11px",
                      border: ".5px solid #e9e2e2",
                      padding: "2px 20px 4px 20px",
                      borderRadius: "6px",
                      width: "fit-content",
                      fontWeight: "600px",
                      background: "#eee9e9",
                    }}
                  >
                    {item.category}
                  </span>
                  <span style={{ color: "#9e9a9a", fontSize: "12px" }}>
                    {item.month} <span>{item.date},</span> 2025
                  </span>
                </Flex>
                <span
                  style={{
                    fontSize: "16px",
                    fontWeight: 600,
                    fontFamily: "'Robotto'",
                  }}
                >
                  {item.title}
                </span>
                <span style={{ fontSize: "11px" }}>{item.description}</span>
                <Flex
                  gap={6}
                  align="center"
                  style={{
                    color: "#db930d",
                    fontSize: "14px",
                    fontWeight: 600,
                    fontFamily: "serif",
                  }}
                >
                  <span>Read More</span>
                  <FaArrowRight style={{ marginTop: "3px" }}></FaArrowRight>
                </Flex>
              </Flex>
            </Flex>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default NewsAndEventSection;
