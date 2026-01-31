import { Divider, Flex } from "antd";
import { useFormContext } from "react-hook-form";
import useResponsive from "../hooks/useResponsive";



export const Footer = ({okButton, cancelButton, handleOk, handleCancle}) => {
  return (
    <div style={{width:"100%",padding: "0"}}>
    <Divider style={{marginBottom:"20px"}}></Divider>
        <Flex justify="end" gap={17} style={{}}>
            <button onClick={handleOk} style={{background: "#0760c5ff" ,boxShadow: "0 10px 25px rgba(0,0,0,0.3)", color:"white", fontSize:"17px",
                 padding:"9px 20px", borderRadius: "4px", border:"none",fontFamily:"sans-serif" }}>{okButton}</button>
            <button onClick={handleCancle} style={{background:"#ffffff", boxShadow: "0 10px 25px rgba(0,0,0,0.3)", fontSize:"17px",
                 padding:"9px 27px", borderRadius: "4px", border:"none",fontFamily:"sans-serif" }}>{cancelButton}</button>
            
        </Flex>
      

    </div>
  );
};



export const SubmitButton = ({submitButton, type}) => {
    const {isMobile, isTablet, isDesktop} = useResponsive()

  return (
    <div>
      <button type={type} style={{background: "#0760c5ff" , color:"white", 
      fontSize:isMobile?"12px": "17px",
                 padding:isMobile?"7px 5px":"9px 30px", borderRadius: "4px", border:"none",fontFamily:"sans-serif" }}>{submitButton}</button>
    </div>
  );
};
export const ResetButton = ({resetButton}) => {
    const {reset} = useFormContext()
    const {isMobile, isTablet, isDesktop} = useResponsive()

  return (
    <div>
       <button type="button" onClick={()=>reset()} style={{background:"#ffffff", boxShadow: "0 10px 25px rgba(0,0,0,0.3)", 
       fontSize:isMobile?"12px": "17px",
                 padding:isMobile?"7px 20px":"9px 45px", borderRadius: "4px", border:"none",fontFamily:"sans-serif" }}>{resetButton}</button>
            
    </div>
  );
};
