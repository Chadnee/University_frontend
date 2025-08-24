import { FormProvider, useForm } from "react-hook-form";

const AdmitForm = ({onSubmit, children}) => {
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