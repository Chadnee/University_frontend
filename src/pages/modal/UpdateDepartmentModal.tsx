import { useState } from "react";
import { useUpdateDepartmentMutation } from "../../features/admin/academicManagementApi";
import { Button, Modal } from "antd";
import AdmitForm from "../form/AdmitForm";
import InputForm from "../form/InputForm";
import { toast } from "sonner";

const UpdateDepartmentModal = ({departmentInfo, index}: {
  departmentInfo: any;
  index: number;
}) => {
//console.log(index)
     const [isModalOpen, setIsModalOpen] = useState(false);
     const [updateDepartment] = useUpdateDepartmentMutation()
    //  const {data:getTargetedDepartment, isLoading:isTargetedDepartmentLOading} = useGetSingleD
     
     const buttonColors = ['#0acf52ff','#e7b025ff','#dc5009ff' ]
     const bgColor = buttonColors[index % buttonColors.length];
   
    console.log('dd',departmentInfo)
     const handleSubmit = async(data) => {
      //const department_id = departmentInfo.key
      const updatedData = {
        department_id : departmentInfo.key,
        body : {name:data.name}
      }

      try{
        const res = await updateDepartment(updatedData)
        if(res.error){
            toast.error(res.error.data.message)
        }else{
            toast.success("Department is updated")
            setIsModalOpen(false)
        }
      }catch(error){
        console.log(error.message)
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