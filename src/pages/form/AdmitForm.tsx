/* eslint-disable @typescript-eslint/no-explicit-any */
import type { ReactNode } from "react";
import { FormProvider, useForm, type FieldValues, type SubmitErrorHandler } from "react-hook-form";

type TAdmitFormProps = {
    onSubmit : SubmitErrorHandler<FieldValues> // or can be any//SubmitHandler is from react hook form and can any type of field like text, input or anything
    children: ReactNode
}
const AdmitForm  = ({onSubmit, children} : TAdmitFormProps) => {
    const methods = useForm();

    // const onSubmit = (data) => {
    //     console.log(data)
    // }
  return (
    <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
      {children}
    </form>
    </FormProvider>
  );
};

export default AdmitForm;