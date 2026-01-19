import { Input } from "antd";
import { Controller, useFormContext } from "react-hook-form"

type TFormInput = {
  type: string,
  name: string,
  label?: string,
  isTextArea?: boolean,
  rows?:number
}
const InputForm = ({type, name, label, isTextArea = false, rows = 4} : TFormInput) => {

   // const {register} = useFormContext();
   //  //not neeeded the register now beacuse of using controller to co ordinate with antd ,since antd dont know any register 
  return (
    <div style={{marginBottom: '20px'}}>
    {label? label: null}
    <Controller //add controller from react hook from because of useing Ant desing
     name = {name}
     render = {({field}) => isTextArea? (
      <Input.TextArea {...field} rows={rows} size="large" />
     ) : (
      <Input {...field} type={type} 
       style={{
        color: "#1f2937",          // text color
        backgroundColor: "#f9fafb",// input background
        border: "3px solid #cbd1d8ff",    // border color
      }} id={name} size="large"/>)
     //<Input type={type} id={name} {...register(name)}/> //when we dont use ant desugn , rather only use form provider from react hook form this input tag with register will needed for getting field value
     //as we use controller to co ordinate with ant design thats why not needed register, because ant design dont know any register
         }
    />
     
   </div>
   )
 
};

export default InputForm;