import { Input } from "antd";
import { Controller, useFormContext } from "react-hook-form"
import "../../index.css"
import { LiaEditSolid } from "react-icons/lia";


type TFormInput = {
  type: string,
  name: string,
  label?: string,
  isTextArea?: boolean,
  rows?:number,
  placeholder?:string
  readonly?: boolean
}
const InputForm = ({type, name, label, isTextArea = false, rows = 2, placeholder, readonly} : TFormInput) => {

   // const {register} = useFormContext();
   //  //not neeeded the register now beacuse of using controller to co ordinate with antd ,since antd dont know any register 
  return (
    <div style={{marginBottom: '30px',width: "100%"}}>
    {/* {label? label: null} */}
     {label && (
        <label
          htmlFor={name}
          style={{
            display:"block",
            paddingBottom: "6px",
            fontWeight: "600", fontSize:"16px",
            
          }}
        >
          {label}
        </label>
      )}
    <Controller //add controller from react hook from because of useing Ant desing
     name = {name}
     render = {({field}) => isTextArea? (
      <Input.TextArea {...field} 
       rows={rows} size="large" placeholder={placeholder} className="custom-input"/>
     ) : (
      <Input {...field} type={type} placeholder={placeholder} readOnly={readonly} className="custom-input"
       suffix={<LiaEditSolid style={{fontSize:"20px", color:'#000'}}/>}
      style={{
        width: "100%",
        color: "#1f2937",          // text color
        backgroundColor: "#ffffff",// input background
        border: "1px solid #4b4c4fff",   // border color
        // borderRadius:"20px"
      }} id={name} size="large"/>)
     //<Input type={type} id={name} {...register(name)}/> //when we dont use ant desugn , rather only use form provider from react hook form this input tag with register will needed for getting field value
     //as we use controller to co ordinate with ant design thats why not needed register, because ant design dont know any register
         }
    />
     
   </div>
   )
 
};

export default InputForm;