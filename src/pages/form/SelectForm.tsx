import { Form, Select } from "antd";
import { Controller, useFormContext} from "react-hook-form";
import '../../index.css'

import { useEffect, type ReactNode } from "react";
import { IoIosArrowDown } from "react-icons/io";
// const handleChange = (value: string) => {
//   console.log(`selected ${value}`);
// };
type TSelectForm = {
    label: string,
    name: string
    options: {value: string, label: string; disabled?: boolean}[] | undefined
    placeholder?: string
    disabled?: boolean;
    required?: boolean;
    mode?: 'multiple';
    suffixIcon?:ReactNode;
    fixedValue?: string | string[];
  //   control: Control<any>
  // setValue: UseFormSetValue<any>
  }
const SelectForm = ({label,suffixIcon, fixedValue, placeholder, name, options, disabled, mode, required} : TSelectForm) => {
  
 const { control, setValue } = useFormContext()

  // 🔥 auto-set fixed value into RHF
 useEffect(() => {
    if (fixedValue !== undefined) {
      setValue(name, fixedValue, {
        shouldValidate: true,
        shouldDirty: true,
      })
    }
  }, [fixedValue, name, setValue])

  return (
   <Controller
   name = {name}
   control={control}
   rules={required?{required:`${label?? "This field"} is required`}: undefined}
     render = {({field, fieldState: {error}}) => (
         <Form.Item required={required} label = {<span style={{fontWeight: "600", fontSize:"16px", color: "#000"}}>{label}</span>}> 
        <Select size="large"  className="custom-select" 
        suffixIcon={suffixIcon || <IoIosArrowDown style={{fontSize:"20px", color:'#000'}}/>}
 mode={mode} placeholder={placeholder || "Select ..."} {...field} options = {options} disabled={disabled}/>
        {error && <small style={{color : "red"}}>{error.message}</small>}
    </Form.Item>
     )}
   />
  );
};

export default SelectForm;