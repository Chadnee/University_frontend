import { useState } from "react";
import { useGetAllFacultyQuery } from "../../features/admin/userManagementApi";
import { useCreateAssignFacultiesMutation } from "../../features/admin/courseManagementApi";
import { toast } from "sonner";
import { Button, Modal } from "antd";
import AdmitForm from "../form/AdmitForm";
import SelectForm from "../form/SelectForm";
import { buttonColors, type TError } from "../constants/global";
import type { TFaculty } from "../../types/userManagementTypes";

 type TFacultyForm = {
  courseId: string,
  index: number
}

type TAssignFaculty = {
  faculty: string[]
}
type TAssignFacultyData = {
   course_Id: string
   data: TAssignFaculty
}

const AddFacultyModal = ({courseId, index} : TFacultyForm) => {

     const [isModalOpen, setIsModalOpen] = useState(false);
     const {data: facultiesData, isLoading: isFacultyLoading} = useGetAllFacultyQuery(undefined)
     const [CreateAssignFaculties] = useCreateAssignFacultiesMutation()
     
     const bgColor = buttonColors[index % buttonColors.length];
     const facultiesOptions = facultiesData?.data?.map((item : TFaculty) => ({
        value: item._id,
        label: item.name
     }))
    console.log(facultiesData)
     const handleSubmit = async(data : TAssignFaculty) => {
      console.log('d',data)
         const facultyData: TAssignFacultyData= {
            course_Id: courseId,
            data //it will provide facultyOptionsData by clicking on handleSubmit which gets a _id as value and a name (showed indaisplay) as label 
         }
         console.log(facultyData);

        try{
             const res = await CreateAssignFaculties(facultyData)
             if(res.error){
              const err = res.error as TError
                toast.error(err.data.message)
             } else {
                toast.success("Faculty assigned done")
             }
        } catch(error){
            console.log(error)
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
      <Button onClick={showModal} style={{background: bgColor, color:"#ffffff"}}>
        Assign Faculties
      </Button>
      <Modal
        title="Basic Modal"
        open={isModalOpen} 
        onCancel={handleCancel}
        footer={null}
      >
        <AdmitForm onSubmit={handleSubmit}>
            <SelectForm mode="multiple" options={facultiesOptions} disabled={!facultiesData?.data || isFacultyLoading} name="faculties" 
            label="Faculty" placeholder="Select a faculty memeber"/>
        <Button htmlType="submit">Assign Faculty</Button>
        </AdmitForm>
      </Modal>
    </>
    )
}

export default AddFacultyModal;