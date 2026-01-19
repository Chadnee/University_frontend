import { DatePicker, Form } from "antd";
import { Controller } from "react-hook-form";

type TDatepickerProps = {
    name: string,
    label?:string 
}
const DatePickerInput = ({name, label}: TDatepickerProps) => {
  return (
    <div style={{marginBottom: '20px'}}>
       <Controller
        name={name}
        render={({field}) => (
            <Form.Item label= {label}>
                <DatePicker {...field} size="large" style={{width : "100%"}}></DatePicker>
            </Form.Item>
        )}
       />
    </div>
  );
};

export default DatePickerInput;