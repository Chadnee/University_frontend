/* eslint-disable @typescript-eslint/no-explicit-any */
import { Form } from "antd";
import type { ReactNode } from "react";
import { FormProvider, useForm, type FieldValues, type SubmitErrorHandler, type SubmitHandler } from "react-hook-form";

// Zod validation system in here as frotend re-usable
// 1. create a type 
// 2. add as a props 
// 3. To check, make a condition 
// 4. make an error message by fieldState in render in Select inter into controller
// 5. create a zod validation schema in schema 
// 6. call the schema in createAcademicSemester

type TFormConfig = {
  defaultValues?: Record<string, any>;
  resolver?: any;  
}
type TAdmitFormProps = {
    onSubmit : SubmitErrorHandler<FieldValues> // or can be any//SubmitHandler is from react hook form and can any type of field like text, input or anything
    children: ReactNode
} & TFormConfig
const AdmitForm  = ({onSubmit, children, defaultValues, resolver} : TAdmitFormProps) => {
  
  const formConfig:TFormConfig = {};

  if(defaultValues) {
    formConfig['defaultValues'] = defaultValues;
  }

  if(resolver) {
    formConfig['resolver'] = resolver;
  }
  const methods = useForm(formConfig);

    // const onSubmit = (data) => {
    //     console.log(data)
    // }

    const submit: SubmitHandler<FieldValues> = (data) => {
      onSubmit(data);
      methods.reset()
    }
  return (
    <FormProvider {...methods}>
        <Form layout="vertical" onFinish={methods.handleSubmit(submit)}>
      {children}
    </Form>
    </FormProvider>
  );
};

export default AdmitForm;