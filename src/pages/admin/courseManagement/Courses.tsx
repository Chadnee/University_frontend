import {Table, type TableColumnsType } from "antd";
import { useGetAllCourseQuery } from "../../../features/admin/courseManagementApi";
import type { TCourse } from "../../constants/global";
import AddFacultyModal from "../../modal/AddFacultyModal";



export type TTableData = {
  key : string,
  title: string,
  code: number,
  credits: number
}
const Courses = () => {

  const {data: courses, isLoading: isCourseLoading, isFetching} = useGetAllCourseQuery(undefined)
  
  const tableData: TTableData[] = courses?.data?.map((course: TCourse) => ({
    key: course._id,
    title: course.title,
    code: course.code,
    credits: course.credits 
  })) ?? []
//     _id, title, code, credits
//   }) => ({
//     key: _id , title, code, credits
//   }) 
// )
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
    render: (item,_record, index) => {
        return <AddFacultyModal courseId = {item.key} index={index}></AddFacultyModal>
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

export default Courses;