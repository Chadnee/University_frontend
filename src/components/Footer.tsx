import { Divider, Flex } from "antd";
import { useFormContext } from "react-hook-form";
import useResponsive from "../hooks/useResponsive";

type TFooter = {
  okButton: string;
  cancleButton: string;
  handleOk: ()=>void;
  handleCancle: ()=>void;

}
type TSubmitButton = {
  submitButton: string;
  type:"submit";
}
type TResetButton = {
  resetButton: string
}

export const Footer = ({okButton, cancleButton, handleOk, handleCancle} : TFooter) => {
  return (
    <div style={{width:"100%",padding: "0"}}>
    <Divider style={{marginBottom:"20px"}}></Divider>
        <Flex justify="end" gap={17} style={{}}>
            <button onClick={handleOk} style={{background: "#0760c5ff" ,boxShadow: "0 10px 25px rgba(0,0,0,0.3)", color:"white", fontSize:"17px",
                 padding:"9px 20px", borderRadius: "4px", border:"none",fontFamily:"sans-serif" }}>{okButton}</button>
            <button onClick={handleCancle} style={{background:"#ffffff", boxShadow: "0 10px 25px rgba(0,0,0,0.3)", fontSize:"17px",
                 padding:"9px 27px", borderRadius: "4px", border:"none",fontFamily:"sans-serif" }}>{cancleButton}</button>
            
        </Flex>
      

    </div>
  );
};



export const SubmitButton = ({submitButton, type} : TSubmitButton) => {
    const {isMobile} = useResponsive()

  return (
    <div>
      <button type={type} style={{background: "#0760c5ff" , color:"white", 
      fontSize:isMobile?"12px": "17px",
                 padding:isMobile?"7px 5px":"9px 30px", borderRadius: "4px", border:"none",fontFamily:"sans-serif" }}>{submitButton}</button>
    </div>
  );
};
export const ResetButton = ({resetButton} : TResetButton) => {
    const {reset} = useFormContext()
    const {isMobile} = useResponsive()

  return (
    <div>
       <button type="button" onClick={()=>reset()} style={{background:"#ffffff", boxShadow: "0 10px 25px rgba(0,0,0,0.3)", 
       fontSize:isMobile?"12px": "17px",
                 padding:isMobile?"7px 20px":"9px 45px", borderRadius: "4px", border:"none",fontFamily:"sans-serif" }}>{resetButton}</button>
            
    </div>
  );
};
