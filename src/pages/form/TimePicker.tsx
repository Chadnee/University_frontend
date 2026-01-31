import { Controller, useFormContext } from 'react-hook-form';
import { Form, TimePicker } from 'antd';
import type { ReactNode } from 'react';
import { WiTime4 } from 'react-icons/wi';
import "../../index.css"

type TTimePicker = {
  name: string;
  label: string;

};

const TimePickerForm = ({ name, label }: TTimePicker) => {
  const { control } = useFormContext();

  return (
    <div style={{ marginBottom: '10px' }}>
      <Controller
        name={name}
        control={control}
        render={({ field, fieldState: { error } }) => (
          <>
            <Form.Item label = {<span style={{fontWeight: "600", fontSize:"16px"}}>{label}</span>}>
              <TimePicker
                {...field}
                suffixIcon={<WiTime4 style={{fontSize:"20px", color:'#000'}}/>}
                size="large" className='custom-timepicker' placeholder='Select time ...'
                style={{ width: '100%' }}
                format="HH:mm"
              />
              {error && <small style={{ color: 'red' }}>{error.message}</small>}
            </Form.Item>
          </>
        )}
      ></Controller>
    </div>
  );
};

export default TimePickerForm;