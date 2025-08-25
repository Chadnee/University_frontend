/* eslint-disable @typescript-eslint/no-explicit-any */
import { Form } from "antd";
import type { ReactNode } from "react";
import { FormProvider, useForm, type FieldValues, type SubmitErrorHandler } from "react-hook-form";

type TFormConfig = {
  defaultValues?: Record<string, any>;
}
type TAdmitFormProps = {
    onSubmit : SubmitErrorHandler<FieldValues> // or can be any//SubmitHandler is from react hook form and can any type of field like text, input or anything
    children: ReactNode
} & TFormConfig
const AdmitForm  = ({onSubmit, children, defaultValues} : TAdmitFormProps) => {
  
  const formConfig:TFormConfig = {};

  if(defaultValues) {
    formConfig['defaultValues'] = defaultValues;
  }
  const methods = useForm(formConfig);

    // const onSubmit = (data) => {
    //     console.log(data)
    // }
  return (
    <FormProvider {...methods}>
        <Form layout="vertical" onFinish={methods.handleSubmit(onSubmit)}>
      {children}
    </Form>
    </FormProvider>
  );
};

export default AdmitForm;