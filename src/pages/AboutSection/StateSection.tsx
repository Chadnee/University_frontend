import { Button, Col, Flex, Row } from "antd";
import { FaArrowRight } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";
import { VerticalMobileStat, type TVerticalMobileStat } from "../constants/global";
import useResponsive from "../../hooks/useResponsive";

const StateSection = () => {
    const { isMobile } = useResponsive();
  return (
    <div>
       {isMobile ? (
        // For mobile version
        <div
          style={{
            background: "#060d2b",
            color: "#f1f5f9",
            borderRadius: "16px",
            margin: "30px 10px",
            padding: "30px",
          }}
        >
          <Flex justify="space-between" gap={13}>
            <span>
              <MdOutlineEmail
                style={{
                  fontSize: "25px",
                  background: "#d89b1d",
                  borderRadius: "50%",
                  padding: "8px",
                }}
              ></MdOutlineEmail>
            </span>
            <Flex vertical gap={13}>
              <Flex vertical gap={13} style={{ fontFamily: "'Robotto'" }}>
                <span style={{ fontSize: "17px", fontFamily: "'Robotto'" }}>
                  Ready to Shape Your Future?
                </span>
                <span style={{ color: "#d1d5db", fontSize: "13px" }}>
                  Join Techno university and embark on a journey of knowledge,
                  innovation and success
                </span>
              </Flex>

              <Button
                style={{
                  padding: "5px 10px",
                  background: "#d89b1d",
                  border: "none",
                  borderRadius: "5px",
                  color: "#fff",
                  fontSize: "15px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "4px",
                  boxShadow: "0 8px 24px rgba(216,155,29,0.35)",
                  width: "fit-content",
                }}
              >
                <span>Apply now</span>
                <FaArrowRight />
              </Button>
            </Flex>
          </Flex>
        </div>
      ) : (
        // For Large device
        <div
          style={{
            background: "#060d2b",
            color: "#f1f5f9",
            borderRadius: "16px",
            width: "86%",
            margin: "50px auto",
          }}
        >
          <Row gutter={10}>
            <Col span={16} style={{}}>
              <Flex>
                {VerticalMobileStat.map(
                  (item: TVerticalMobileStat, index: number) => (
                    <Flex
                      key={index}
                      gap={16}
                      align="center"
                      style={{
                        padding: "12px 26px",
                        fontFamily: "'Robotto'",
                        flexShrink: 0,
                        position: "relative",
                        margin: "0 auto",
                      }}
                    >
                      <figure
                        style={{
                          width: "43px",
                          height: "43px",
                          margin: "0",
                          flexShrink: 0,
                        }}
                      >
                        <img
                          src={item.image}
                          style={{
                            height: "100%",
                            width: "100%",
                            objectFit: "contain",
                          }}
                          alt=""
                        />
                      </figure>
                      <Flex vertical gap={5}>
                        <span style={{ fontWeight: 800, fontSize: "19px" }}>
                          {item.value}
                        </span>
                        <span style={{ fontSize: "12px" }}>{item.title}</span>
                      </Flex>
                      {index !== VerticalMobileStat.length - 1 && (
                        <div
                          style={{
                            position: "absolute",
                            height: "40px",
                            width: "1px",
                            background: "#475569",
                            right: 0,
                            top: "50%",
                            transform: "translateY(-50%)",
                          }}
                        />
                      )}
                    </Flex>
                  ),
                )}
              </Flex>
            </Col>

            <Col span={8} style={{ padding: "12px 26px 12px 0" }}>
              <Flex justify="center" align="center" gap={18}>
                <span>
                  <MdOutlineEmail
                    style={{
                      fontSize: "25px",
                      background: "#d89b1d",
                      borderRadius: "50%",
                      padding: "8px",
                    }}
                  ></MdOutlineEmail>
                </span>
                <div>
                  <span style={{ fontSize: "14px" }}>
                    Ready to Shape Your Future?
                  </span>
                  <br />
                  <span
                    style={{
                      color: "#d1d5db",
                      fontSize: "9px",
                      lineHeight: "5px",
                    }}
                  >
                    Join Techno university and embark on a journey of knowledge,
                    innovation and success
                  </span>
                </div>

                <Button
                  style={{
                    padding: "5px 10px",
                    background: "#d89b1d",
                    border: "none",
                    borderRadius: "5px",
                    color: "#fff",
                    fontSize: "15px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "4px",
                    boxShadow: "0 8px 24px rgba(216,155,29,0.35)",
                  }}
                >
                  <span>Apply now</span>
                  <FaArrowRight />
                </Button>
              </Flex>
            </Col>
          </Row>
        </div>
      )}
    </div>
  );
};

export default StateSection;