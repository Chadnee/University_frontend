import { Form, Select } from "antd";
import { Controller } from "react-hook-form";

// const handleChange = (value: string) => {
//   console.log(`selected ${value}`);
// };
type TSelectForm = {
    label: string,
    name: string,
    options: {value: string, label: string; disabled?: boolean}[] | undefined
    placeholder: string
    disabled?: boolean;
    mode?: 'multiple'
  }
const SelectForm = ({label, name, options, disabled, placeholder, mode} : TSelectForm) => {

  return (
   <Controller
   name = {name}
     render = {({field, fieldState: {error}}) => (
         <Form.Item label = {label}> 
        <Select size="large" style={{width: '100%'}} mode={mode} placeholder={placeholder} {...field} options = {options} disabled={disabled}/>
        {error && <small style={{color : "red"}}>{error.message}</small>}
    </Form.Item>
     )}
   />
  );
};

export default SelectForm;