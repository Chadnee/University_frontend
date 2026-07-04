import { Flex } from "antd";
import { FaArrowRight } from "react-icons/fa6";
import useResponsive from "../../hooks/useResponsive";
import { RiDoubleQuotesL } from "react-icons/ri";

const AdvertisingSection = () => {
  const {isMobile} = useResponsive()
  return (
    <div style={{width:"84%", margin:"auto", background:"#020617", borderRadius:"14px"}}>
       <Flex justify="space-between" align="center" gap={18} style={{padding:isMobile?"16px":"36px"}}>
                      <Flex align="center" gap={16}>
                         <span>
                        <RiDoubleQuotesL
                          style={{
                            fontSize: "40px",
                            color: "#d89b1d",
                            borderRadius: "50%",
                            bottom: "-20px",
                          }}
                        ></RiDoubleQuotesL>
                      </span>
                      <div>
                        <span className="font-heading-stylish" style={{textTransform: "capitalize",fontWeight: 600, fontSize: "23px", color:"#fff"
            }}>
                          Ready to Shape Your Future?
                        </span>
                        <br />
                        <span
                          style={{
                            color: "#d1d5db",
                            fontSize: "11px",
                            lineHeight: "5px",
                          }}
                        >
                          Join Techno university and embark on a journey of knowledge,
                          innovation and success
                        </span>
                      </div>
                      </Flex>
      
                      <button
                        style={{
                          padding: "10px 24px",
                        fontSize: "15px",
                        borderRadius: "5px",
                        background: "#db930d",
                        border: "none",
                        color: "#fff6f6",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          gap: "4px",
                          boxShadow: "0 8px 24px rgba(216,155,29,0.35)",
                          fontFamily: "var(--font-heading-bold)",
                        }}
                      >
                        <span >Apply now</span>
                        <FaArrowRight style={{paddingTop:"2px"}}/>
                      </button>
                    </Flex>
    </div>
  );
};

export default AdvertisingSection;