import { FaArrowRight } from "react-icons/fa6";
import useResponsive from "../../../hooks/useResponsive";
import { AcademicFaculties } from "../../constants/global";
import { Flex } from "antd";


const AcademicFaculty = () => {
    const {isMobile, isTablet} = useResponsive()
    return (
        <div style={{width:isMobile?"100%":"90vw", margin:"60px auto"}}>
              <Flex align="middle" justify="start" gap={10} style={{padding:"0 0 16px 12px" }}>
                          <span style={{ width: isMobile ? "18px" : "20px" }}>
                            <hr
                              style={{
                                background: "#e7a11f",
                                border: "none",
                                height: "1.2px",
                              }}
                            />
                          </span>
                          <span style={{fontFamily: "'Poppins'", textTransform: "uppercase", fontSize: "10px", color:"#e7a11f", }}>
                            our academic faculties
                          </span>
                        </Flex>
          <span style={{fontFamily: "Robotto",fontSize: "22px", paddingLeft:"12px"}}>Explore Our Academic Faculties</span>
        
        <div style={{display:'flex', flexDirection:"column", justifyContent:"center", marginTop:"40px"}}>
             <div style={{display:"flex", width:"100%", flexWrap:"wrap", gap:isMobile?"8px" :isTablet?"20px": "30px", justifyContent:isMobile?"justify-between":"center", alignItems: "stretch"}}>
            {
                AcademicFaculties?.map((item) => (
                    <div key={item.slug} style={{ boxShadow: "0 2px 8px rgba(0,0,0,0.08)", width:isMobile?"120px":"160px", display:"flex", flexDirection:"column", justifyContent:"space-between", alignItems:"center", padding:isMobile?"20px 10px" : "20px 6px", gap:"10px"}}>
                        <img style={{height:isMobile?"50px": "60px"}} src={item.icon} alt="" />
                        <span style={{fontSize:isMobile?"12px":"13px",textAlign:"center", fontWeight:"600", fontFamily: "poppins",}}>{item.name}</span>
                        <span style={{fontSize:isMobile?"12px":"12px",textAlign:"center",color:"#6a5f5f", fontFamily: ""}}>{item.description}</span>
                        <span style={{fontSize:"13px",textAlign:"center", display:"flex", alignItems:"center", gap:"2px", color:"#e79d13"}}><span>Explore</span>
                        <FaArrowRight></FaArrowRight> </span>
                    </div>
                ))
            }
        </div>
        </div>
        </div>
    );
};

export default AcademicFaculty;