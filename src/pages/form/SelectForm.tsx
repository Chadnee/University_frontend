import { Form, Select } from "antd";
import { Controller } from "react-hook-form";
import '../../index.css'

import type { ReactNode } from "react";
import { IoIosArrowDown } from "react-icons/io";
// const handleChange = (value: string) => {
//   console.log(`selected ${value}`);
// };
type TSelectForm = {
    label: string,
    name?: string | undefined,
    options: {value: string, label: string; disabled?: boolean}[] | undefined
    placeholder?: string
    disabled?: boolean;
    required?: boolean;
    mode?: 'multiple';
    suffixIcon?:ReactNode;
  }
const SelectForm = ({label,suffixIcon, placeholder, name, options, disabled, mode, required} : TSelectForm) => {

  return (
   <Controller
   name = {name}
   rules={required?{required:`${label?? "This field"} is required`}: undefined}
     render = {({field, fieldState: {error}}) => (
         <Form.Item label = {<span style={{fontWeight: "600", fontSize:"16px"}}>{label}</span>}> 
        <Select size="large"  className="custom-select" 
        suffixIcon={suffixIcon || <IoIosArrowDown style={{fontSize:"20px", color:'#000'}}/>}
 mode={mode} placeholder={placeholder || "Select ..."} required={required} {...field} options = {options} disabled={disabled}/>
        {error && <small style={{color : "red"}}>{error.message}</small>}
    </Form.Item>
     )}
   />
  );
};

export default SelectForm;