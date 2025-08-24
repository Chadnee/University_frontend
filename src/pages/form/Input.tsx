import { useFormContext } from "react-hook-form";

const Input = ({type, name, label}) => {

    const {register} = useFormContext();
  return (
    <div>
    {label? label: null}
    <input type={type} id={name} {...register(name)}/>
   </div>
   )
 
};

export default Input;