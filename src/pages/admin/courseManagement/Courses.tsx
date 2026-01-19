import { Button, Modal, Table, type TableColumnsType } from "antd";
import { useCreateAssignFacultiesMutation, useGetAllCourseQuery } from "../../../features/admin/courseManagementApi";
import type { TCourse } from "../../constants/global";
import { useState } from "react";
import AdmitForm from "../../form/AdmitForm";
import SelectForm from "../../form/SelectForm";
import { useGetAllFacultyQuery } from "../../../features/admin/userManagementApi";
import { toast } from "sonner";



export type TTableData = Pick<TCourse, 'title' | 'code' | 'credits'>
const Courses = () => {

  const {data: courses, isLoading: isCourseLoading, isFetching} = useGetAllCourseQuery(undefined)
  
  const tableData: TTableData[] = courses?.data?.map(({
    _id, title, code, credits
  }) => ({
    key: _id , title, code, credits
  }) 
)
const columns: TableColumnsType<TTableData> = [
  {
    title: 'Title',
    key: 'title',
    dataIndex: 'title',
  },
  {
    title: 'Code',
    key:'code',
    dataIndex: 'code',
  },
  {
    title: 'Credits',
    key: 'credits',
    dataIndex: 'credits',
  },
  {
    title: 'Action',
    key: 'x',
    render: (item) => {
        return <AddFacultyModal facultyInfo = {item}></AddFacultyModal>
    },
    
  },
];

// const onChange: TableProps<TTableData>['onChange'] = (_pagination, filters, _sorter, extra)=>{
//     if (extra.action === 'filter') {
//       const queryParams:TQueriParam[] = [];

//       filters.name?.forEach((item) => 
//         queryParams.push({name: 'name', value: item})
//       )
//       filters.year?.forEach((item) =>
//       queryParams.push({name: 'year', value: item}))
//       setParams(queryParams)
//     }
//   }
    
  if (isCourseLoading) {
    return <p>Loading...</p>
  }
  
  return (
    <div>
        <Table<TTableData>
    columns={columns}
    loading={isFetching}
    dataSource={tableData}
    // onChange={onChange}
  />
    </div>
  );
};

const AddFacultyModal = ({facultyInfo}) => {

     const [isModalOpen, setIsModalOpen] = useState(false);
     const {data: facultiesData, isLoading: isFacultyLoading} = useGetAllFacultyQuery(undefined)
     const [CreateAssignFaculties] = useCreateAssignFacultiesMutation()
     
     const facultiesOptions = facultiesData?.data?.map((item) => ({
        value: item._id,
        label: item.name
     }))
    console.log(facultiesData)
     const handleSubmit = async(data) => {
         const facultyData = {
            course_Id: facultyInfo.key,
            data //it will provide facultyOptionsData by clicking on handleSubmit which gets a _id as value and a name (showed indaisplay) as label 
         }
         console.log(facultyData);

        try{
             const res = await CreateAssignFaculties(facultyData)
             if(res.error){
                toast.error(res.error.data.message)
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
      
        const handleOk = () => {
          setIsModalOpen(false);
        };
      
        const handleCancel = () => {
          setIsModalOpen(false);
        };


    return (
        <>
      <Button onClick={showModal}>
        Assign Faculties
      </Button>
      <Modal
        title="Basic Modal"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <AdmitForm onSubmit={handleSubmit}>
            <SelectForm mode="multiple" options={facultiesOptions} name="faculties" 
            label="Faculty" placeholder="Select a faculty memeber"/>
        <Button htmlType="submit">Assign Faculty</Button>
        </AdmitForm>
      </Modal>
    </>
    )
}

export default Courses;