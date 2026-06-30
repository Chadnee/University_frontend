import { Divider, Flex } from "antd";
import { footerData } from "./constants/global";
import useResponsive from "../hooks/useResponsive";

const Footer = () => {
 const {isMobile} = useResponsive()
  return (
    <div style={{background:"#020617", margin:isMobile?"":"30px", padding:isMobile?"16px 30px": "40px 70px",}}>
        <Flex vertical={isMobile} style={{ fontFamily:"'poppins'"}} justify="space-between">
            <Flex vertical gap={20}>
                <figure style={{width:"150px", margin:"0" }}>
                    <img style={{width:"100%", height:"100%", }} src={footerData.about.logo} alt="" />
                </figure>
                <span style={{fontSize:"10px", width:"220px", letterSpacing:"1px",lineHeight:"17px", fontFamily:"'poppins'", color:"#cbd5e1"}}>{footerData.about.description}</span>
                <Flex gap={12}>
                    {
                        footerData.social.map((item, index) =>(
                            <span key={index} style={{
    width: "30px",
    height: "30px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    border: "1px solid #b8c7da",
    borderRadius: "50%",
    color: "#fff",
    fontSize: "16px",
    cursor: "pointer",
  }}>{item.icon}</span>
                        ))
                    }
                </Flex>
            </Flex>
            <Flex vertical >
                <p style={{color:"#ffffff"}}>Quick Links</p>
                <Flex vertical gap={8}>
                    {
                        footerData.quickLinks.map((item, index) => (
                            <span key={index} style={{fontSize:"10px", color:"#cbd5e1"}}>{item.title}</span>
                        ))
                    }
                </Flex>
            </Flex>
            <Flex vertical >
                <p style={{color:"#ffffff"}}>Programs</p>
                <Flex vertical gap={8}>
                    {
                        footerData.programs.map((item, index) => (
                            <span key={index} style={{fontSize:"10px", color:"#cbd5e1"}}>{item.title}</span>
                        ))
                    }
                </Flex>
            </Flex>
            <Flex vertical >
                <p style={{color:"#ffffff"}}>Resouces</p>
                <Flex vertical gap={8}>
                    {
                        footerData.resources.map((item, index) => (
                            <span key={index} style={{fontSize:"10px", color:"#cbd5e1"}}>{item.title}</span>
                        ))
                    }
                </Flex>
            </Flex>
            <Flex vertical >
                <p style={{color:"#ffffff"}}>Contat Us</p>
                <Flex vertical gap={8}>
                    {
                        footerData.contact.map((item, index) => (
                            <Flex key={index} gap={5} align="center">
                                <span style={{fontSize:"10px", color:"#cbd5e1"}}>{item.icon}</span>
                                <span style={{fontSize:"10px", color:"#cbd5e1"}}>{item.value1} <br />
                                {item.value2?<span>{item.value2}</span>:<></>}</span>
                            </Flex>
                        ))
                    }
                </Flex>
            </Flex>
            
        </Flex>
        <Divider style={{ borderColor: "rgba(245, 243, 243, 0.12)",
    margin: "20px 0",
    borderWidth: "2px",}}>
       </Divider>
       <Flex justify="space-between" style={{fontSize:"9px", color:"#cbd5e1", textTransform:"capitalize"}}>
          <span >© 2026 Techno University,  All rights reserved</span>
          <span>privacy policy | Terms of use</span>
        </Flex>
    </div>
  );
};

export default Footer;