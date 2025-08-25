import { Form, Select } from "antd";
import { Controller } from "react-hook-form";

// const handleChange = (value: string) => {
//   console.log(`selected ${value}`);
// };
type TSelectForm = {
    label: string,
    name: string,
    options: {value: string, label: string; disabled?: boolean}[]
}
const SelectForm = ({label, name, options} : TSelectForm) => {

  return (
   <Controller
   name = {name}
     render = {({field}) => (
         <Form.Item label = {label}> 
        <Select size="large" style={{width: '100%'}} {...field} options = {options}/>
    </Form.Item>
     )}
   />
  );
};

export default SelectForm;