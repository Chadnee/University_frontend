import { Col, Flex, Row } from "antd";
import useResponsive from "../../hooks/useResponsive";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6"
import campusLife from "../../assets/images/campusLife.png"
import { campusItems } from "../constants/global";

const CampusLife = () => {
  const { isMobile } = useResponsive();
  return (
    <div
      style={{
        width: isMobile ? "" : "80%",
        margin: isMobile ? "30px auto" : "40px auto"
      }}
    >
      <Row gutter={[20,20]} justify={isMobile?"start":"center"} style={{margin:0, width:"100%"}} align="middle">
        <Col sm={24} lg={8}>
          <Flex vertical gap={isMobile?10:24}>
              <span
            style={{
              fontFamily: "'",
              color: "#db930d",
              letterSpacing: "1.2px",
              fontWeight: "600",
              fontSize: "16px",
              textTransform: "uppercase",
            }}
          >
            Campus Life
          </span>
          <span style={{ fontFamily:"sans-serif", textTransform: "capitalize", fontWeight:600, fontSize:isMobile?"20px":"36px", }}>
            More than just academics
          </span>
          {
            !isMobile && <span style={{ fontSize: "12px",color:"#504e4e"}}>
            Exprerience a vibrent campus life filled with opportunities to
            learn, grow and create unforgettable memories
          </span>
          }
          {
            !isMobile && <Link to="/">
            <Flex
              gap={6}
              align="center"
              style={{
                color: "#c28514",
                fontSize: "18px",
                border: "1.5px solid #c28514",
                padding: "8px 20px",
                borderRadius: "6px",
                width:"fit-content", 
                // fontWeight:600
              }}
            >
              <span>Go to Dashboard</span>
              <FaArrowRight></FaArrowRight>
            </Flex>
          </Link>
          }
          </Flex>
        </Col>
        {/* Right grid */}
        <Col sm={24} lg={16} >
            <div style={{display:"grid",gap:isMobile?"10px":"16px", justifyContent:"stretch", gridTemplateRows: isMobile?"110px 110px":"130px 130px", gridTemplateColumns:isMobile?"1fr 1fr":"2fr 1fr 1fr", cursor:"pointer", width:"100%", }}>
                {
                  !isMobile && <figure style={{borderRadius:"16px", gridRow:"span 2", width:"100%", flex:1, margin:"0"}}>
                    <img src={campusLife} height="100%" width="100%" style={{objectFit:"cover", flex:1, borderRadius:"16px",}} alt="" />
                </figure>
                }
            
            {
                campusItems.map((item, index) =>(
                    <figure key={index} style={{ width:"100%",  cursor:"pointer",flex:1, height: "100%",
    margin: 0, borderRadius:"16px", }}>
                        <img style={{height:"100%", width:"100%", objectFit:"cover", borderRadius:"16px",}} src={item.image} alt={item.title} />
                    </figure>
                ))
            }
            </div>
        </Col>
      </Row>
      <Flex justify="center">
         {
            isMobile && <Link style={{textDecoration:"none", marginTop:"26px"}} to="/">
            <Flex
              gap={6}
              align="center"
              style={{
                color: "#c28514",
                fontSize: "11px",
                border: "1.5px solid #c28514",
                padding: "8px 20px",
                borderRadius: "6px",
                width:"fit-content", 
                
                // fontWeight:600
              }}
            >
              <span>View Campus Life</span>
              <FaArrowRight></FaArrowRight>
            </Flex>
          </Link>
          }
      </Flex>
    </div>
  );
};

export default CampusLife;
