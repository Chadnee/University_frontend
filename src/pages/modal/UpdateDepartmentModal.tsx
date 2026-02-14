import { useState } from "react";
import { useUpdateDepartmentMutation } from "../../features/admin/academicManagementApi";
import { Button, Modal } from "antd";
import AdmitForm from "../form/AdmitForm";
import InputForm from "../form/InputForm";
import { toast } from "sonner";
import type { SubmitHandler } from "react-hook-form";
import { buttonColors } from "../constants/global";

type TDepartmentFormData = {
  name: string;
};

const UpdateDepartmentModal = ({departmentId, index}: {
  departmentId: string;
  index: number;
}) => {
//console.log(index)
     const [isModalOpen, setIsModalOpen] = useState(false);
     const [updateDepartment] = useUpdateDepartmentMutation()
    //  const {data:getTargetedDepartment, isLoading:isTargetedDepartmentLOading} = useGetSingleD
     
     const bgColor = buttonColors[index % buttonColors.length];
   
    console.log('dd',departmentId)
     const handleSubmit: SubmitHandler<TDepartmentFormData> = async(data:TDepartmentFormData) => {
      //const department_id = department_id.key
      const updatedData = {
        department_id : departmentId,
        body : {name:data.name}
      }

      try{
        const res = await updateDepartment(updatedData).unwrap()
        toast.success("Department Name is updated.")
         console.log(res.success)
      }catch(error:unknown){
         const err = error as { data?: { message?: string } };
        console.log(err.data?.message)
            toast.error("Something went wrong")
      }
      
     }
     
       const showModal = () => {
          setIsModalOpen(true);
        };
        
        const handleCancel = () => {
          setIsModalOpen(false);
        };



    return (
        <>
        {/* { const bgColor = buttonColors[index % buttonColors.length]; */}
      <Button onClick={()=>showModal()} style={{background:bgColor, color:"#ffffff"}}>Update</Button>
        {/* } */}
      <Modal
        open={isModalOpen} 
        onCancel={handleCancel}
        footer={null}
      >
        <AdmitForm onSubmit={handleSubmit}>
            <InputForm name="name" type="text"
            label="Department name" placeholder="Input new department name"/>
        <Button htmlType="submit">Update</Button>
        </AdmitForm>
      </Modal>
    </>
    )
}
export default UpdateDepartmentModal;