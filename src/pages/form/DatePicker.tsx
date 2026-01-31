import { DatePicker, Form } from "antd";
import type { ReactNode } from "react";
import { Controller } from "react-hook-form";
import '../../index.css'
import { CiCalendarDate } from "react-icons/ci";

type TDatepickerProps = {
    name: string,
    label?:string,
}
const DatePickerInput = ({name, label}: TDatepickerProps) => {
  return (
    <div style={{marginBottom: '20px'}}>
       <Controller
        name={name}
        render={({field}) => (
            <Form.Item label={<span style={{fontWeight: "600", fontSize:"16px"}}>{label}</span>}>
                <DatePicker {...field} suffixIcon={<CiCalendarDate style={{fontSize:"20px", color:"black"}}/>} className="custom-datepicker" size="large" placeholder="Select..." style={{width : "100%"}}></DatePicker>
            </Form.Item>
        )}
       />
    </div>
  );
};

export default DatePickerInput;