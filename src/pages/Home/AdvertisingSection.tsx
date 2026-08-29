import { Flex } from "antd";
import { FaArrowRight } from "react-icons/fa6";
import useResponsive from "../../hooks/useResponsive";
import { RiDoubleQuotesL } from "react-icons/ri";

const AdvertisingSection = () => {
  const {isMobile, isTablet} = useResponsive()
  return (
    <div style={{width:"84%", margin:"auto", background:"#020617", borderRadius:"14px", marginBottom:" 20px"}}>
       <Flex vertical={isMobile||isTablet}  justify="space-between" align="center" gap={18} style={{padding:isMobile?"26px":"36px"}}>
                      <Flex align={isMobile||isTablet? "start":'center'} gap={16}>
                         <span style={{}}>
                        <RiDoubleQuotesL
                          style={{
                            fontSize: "40px",
                            color: "#d89b1d",
                            borderRadius: "50%",
                            transform: isMobile||isTablet?"translateY(-10px)" :"translateY(-16px)",
                          }}
                        ></RiDoubleQuotesL>
                      </span>
                      <Flex vertical justify="start" gap={26}>
                        <Flex vertical gap={isMobile? 16: isTablet?7 :2}>
                       <span className="font-heading-stylish" style={{textTransform: "capitalize",fontWeight: 600, fontSize:isMobile?"18px":"23px", color:"#fff"
            }}>
                          Ready to Shape Your Future?
                        </span>
                        <span
                          style={{
                            color: "#d1d5db",
                            fontSize: "11px",
                            lineHeight: "17px",
                          }}
                        >
                          Join Techno university and embark on a journey of knowledge,
                          innovation and success
                        </span>
                        </Flex>
                         {
                          isMobile || isTablet ? <button
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
                          width:"fit-content"
                        }}
                      >
                        <span >Apply now</span>
                        <FaArrowRight style={{paddingTop:"2px"}}/>
                      </button>:<></>
                         }
                      </Flex>
                      </Flex>
      
                      {
                        (!isMobile && !isTablet ) &&<button
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
                      }
                    </Flex>
    </div>
  );
};

export default AdvertisingSection;