import { Form, Select } from "antd";
import { useEffect, type ReactNode } from "react";
import { Controller, useFormContext, useWatch } from "react-hook-form";
import '../../index.css'

type TSelectFormWithWatch = {
    label: string;
    name: string;
    options: {value: string, label: string; disabled?: boolean}[] | undefined;
    disabled?: boolean;
    mode?: 'multiple';
    suffixIcon?: ReactNode;
    onValueChange:React.Dispatch<React.SetStateAction<string>>;
}

const SelectFormWithWatch = ({label, name, options, disabled, suffixIcon, mode, onValueChange}: TSelectFormWithWatch) => {
    const method = useFormContext()
    const inputValue = useWatch({
        control: method.control,
        name
    })
    
    useEffect(() => {
        onValueChange(inputValue)
    }, [inputValue, onValueChange])


  return (
   <Controller
   name={name}
   render={({field, fieldState: {error}}) => (
      <Form.Item label = {<span style={{fontWeight: "600", fontSize:"16px"}}>{label}</span>}> 
      <Select size="large"  className="custom-select"  mode={mode} style={{width: '100%'}} {...field}
      options={options} placeholder="Select ..." suffixIcon={suffixIcon} disabled={disabled}
      />
      {error && <small style={{color: 'red'}}>{error.message}</small>}
    </Form.Item>
   )}
   />
  );
};

export default SelectFormWithWatch;