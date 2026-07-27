import { useState } from "react";
import { DayPicker } from "@daypicker/react";
import "@daypicker/react/style.css";
import { Col, Flex, Row } from "antd";
import { calenderSchedule, newsEventsData } from "../../constants/global";
import { FaArrowRight } from "react-icons/fa6";
import useResponsive from "../../../hooks/useResponsive";

const UpComingSchedule = () => {
  const {isMobile} = useResponsive()
  const [selected, setSelected] = useState<Date>();
  
  return (
    <Row gutter={10}>
      <Row>
        <Col
        lg={24}
        style={{
          boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
          overflow: "visible",
          flex: 1,
          height: "100%",
          padding: "10px",
          borderRadius:"20px",
          background:"#fff"
        }}
      >
        <DayPicker
          style={{ width: "100%" }}
          className="dashboard-calendar outside"
          animate
          mode="single"
          selected={selected}
          onSelect={setSelected}
          showOutsideDays
          // footer={
          //   selected ? `Selected: ${selected.toLocaleDateString()}` : "Pick a day."
          // }
        />

        <Flex
          vertical
          gap={isMobile ? 11 :8}
          style={{
            margin: isMobile ? "18px 5px 1px 5px" :"12px 0",
            border: "2px solid #e9e7e7",
            borderRadius: "13px",
            padding: "12px",
          }}
        >
          {calenderSchedule.map((item) => (
            <Flex align="start" gap={isMobile ? 12 :8}>
              <div
                style={{
                  height: isMobile ? "12px" :"8px",
                  width: isMobile ? "12px" :"8px",
                  borderRadius: "50%",
                  background: item.buttonColor,
                  marginTop: "6px",
                }}
              ></div>
              <Flex vertical gap={4}>
                <span style={{ fontWeight: 600,letterSpacing:'-.3px', fontSize: isMobile ? "15px" :"12px" }}>
                  {item.title}
                </span>
                <span style={{ color: "#6c6969", fontSize: isMobile ? "12px" :"10px" }}>
                  {item.time}
                </span>
              </Flex>
            </Flex>
          ))}

          <Flex
            gap={4}
            align="center"
            style={{
              color: "#d49217",
              fontSize: isMobile ? "14px" :"12px",
              fontWeight: 600,
              paddingLeft:isMobile ? "23px" :"13px",
              paddingTop:"2px"
            }}
          >
            <span>View full calender</span>{" "}
            <FaArrowRight style={{ marginTop: "3px", fontSize: "14px", }}></FaArrowRight>
          </Flex>
        </Flex>
      </Col>
      </Row>
      <Row style={{width:"100%", marginTop:"10px"}}>
        <Col lg={24}
        style={{
          boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
          overflow: "visible",
          flex: 1,
          height: "100%",
          padding: "14px 11px",
          borderRadius:"12px",
          background:"#fff"
        }}>
          <span style={{
              textTransform: "capitalize", fontFamily:"'Poppins'",
              fontWeight: 600,
              fontSize: "16px", letterSpacing:".2px", 
            }}>Upcoming Events</span>
          <Flex vertical gap={12} style={{margin:"12px 0 8px 0"}}>
              {
                newsEventsData?.map((item) => (
                  <Flex key={item.id} align="center" justify="space-between" gap={8}>
                     <figure style={{height:"50px", width:"90px", margin:"0", }}>
                           <img src={item.image} style={{height:"100%",width:"100%", objectFit:'cover', borderRadius:"7px"}} alt="Events" />
                     </figure>
                     <Flex vertical  align="center" style={{border:"1px solid #e8dede", padding:"3px 9px", borderRadius:"5px"}}>
                          <span style={{color:"#d49217", textTransform:'uppercase', fontSize:"9px",}}>{item.month}</span>
                          <span style={{fontWeight:600, fontSize:"16px"}}>{item.date}</span>
                     </Flex>
                     <Flex vertical gap={4} style={{ padding:"3px",}}>
                          <span style={{fontWeight:600, textTransform:'capitalize', fontSize:"11.5px"}}>{item.title}</span>
                          <span style={{fontSize:"10px", color:"#373434"}}>10.00 AM - 04.00 PM</span>
                     </Flex>

                  </Flex>
                ))
              }
          </Flex>
      </Col>
      </Row>
    </Row>
  );
};

export default UpComingSchedule;
