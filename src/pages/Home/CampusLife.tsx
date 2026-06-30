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
        width: isMobile ? "100%" : "80%",
        margin: isMobile ? "30px 5px" : "40px auto",
      }}
    >
      <Row gutter={20} justify="center" align="middle" style={{width:"100%", }}>
        <Col sm={24} lg={8}>
          <Flex vertical gap={24}>
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
          <span style={{ fontFamily:"sans-serif", textTransform: "capitalize", fontWeight:600, fontSize:"36px", }}>
            More than just academics
          </span>
          <span style={{ fontSize: "12px",color:"#504e4e"}}>
            Exprerience a vibrent campus life filled with opportunities to
            learn, grow and create unforgettable memories
          </span>
          <Link to="/">
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
          </Flex>
        </Col>
        {/* Right grid */}
        <Col sm={24} lg={16} >
            <div style={{display:"grid",gap:"16px", justifyContent:"stretch", gridTemplateRows: "130px 130px", gridTemplateColumns:"2fr 1fr 1fr", cursor:"pointer", width:"100%", }}>
                <figure style={{borderRadius:"16px", gridRow:"span 2", width:"100%", flex:1, margin:"0"}}>
                    <img src={campusLife} height="100%" width="100%" style={{objectFit:"cover", flex:1, borderRadius:"16px",}} alt="" />
                </figure>
            
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
    </div>
  );
};

export default CampusLife;
