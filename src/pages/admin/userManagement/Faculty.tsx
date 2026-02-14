import { useState } from "react";
import { Button, Flex, Pagination, Space, Spin, Table } from "antd";
import type { TableColumnsType} from "antd";
import { useGetAllFacultyQuery } from "../../../features/admin/userManagementApi";
import type { TFaculty} from "../../../types/userManagementTypes";
import maleStudent from "../../../assets/images/maleStudent.jpg";
import femaleStudent from "../../../assets/images/femaileStudent.jpg"
import { Link } from "react-router-dom";
import { getFullName } from "../../../utils/GetFullName";


export type TTableData = Pick<
  TFaculty,
  | "id"
  | "name"
  | "email"
  | "gender"
  | "contactNo"
  | "profileImage"
  | "designation"
>;

const Faculty = () => {
  const [page, setPage] = useState(1)
      const { data: facultyData, isLoading: isFacultyLoading} =
        useGetAllFacultyQuery([{name:'page', value:page},{name:'sort', value:'id'}]);
        // console.log(facultyData)
        // // useGetAllFacultyQuery([{name:'page', value:page},{name:'sort', value:'id'}]);
      //   const [image, setImage] = useState<string | null>(null)
      
    
      //console.log( studentData?.data?.result);
      const metaData = facultyData?.data?.meta
      const tableData : TTableData[] = facultyData?.data?.map((faculty: TFaculty) => ({
            key: faculty._id,
          name : faculty.name,
          email : faculty.email,
          profileImage : faculty.profileImage,
          contactNo : faculty.contactNo,
          gender : faculty.gender,
          designation : faculty.designation
      })) ?? []
 
      //console.log(facultyData?.data)
      
      // const id = facultyData?.data?.map((item) => {return item.id})
      // console.log(tableData,id)
      const columns: TableColumnsType<TTableData> = [
        {
          title: "Image",
          key: "image",
          render:(_, record) => {
            const image = record.profileImage || (record.gender === 'male' ?maleStudent : femaleStudent)
           return (
            <img src={image} alt="avatar" style={{
              width:40, height:40, borderRadius:"50%", objectFit: "cover"
            }}/>
          )
          }
         
        },
        {
          title: "Name",
          key: "name",
          dataIndex: "name",
          render: (_, record) => getFullName(record?.name)
        },
        {
          title: "Student ID",
          key: "key",
          dataIndex: "key",
        },
        {
          title: "Gender",
          key: "gender",
          dataIndex: "gender",
        },
        {
          title: "Email",
          key: "email",
          dataIndex: "email",
        },
        {
          title: "Contact",
          key: "contactNo",
          dataIndex: "contactNo",
        },
        {
          title: "Designation",
          key: "designation",
          dataIndex:"designation",
        },
        {
          title: "Action",
          key: "X",
          render: (item) => {
           // console.log(item);
            return (
              <Space>
                <Link to={`/admin/faculty/${item.key}`}>
                  <Button>Details</Button>
                </Link>
                <Button>Update</Button>
                <Button>Block</Button>
              </Space>
            )
          }
        }
      ];
    
      // const onChange: TableProps<TTableData>['onChange'] = (
      //   _pagination, filters, _sorter, extra
      // ) =>{
      //   if(extra.action === " filter"){
      //     const queryParams: TQueriParam[] = [];
    
      //     filters.name?.forEach((item) => 
      //     queryParams.push({name: 'name', value:item}));
    
      //     filters.name?
      //   }
      // }
      
    
     if( isFacultyLoading){
        return (
         <Flex  justify="center" align="center" style={{ height: "80vh" }}>
              <div style={{ color: "#09af99ff" }}>
               <Spin />
              </div>
         </Flex>
        )
     }
    
      return<> <Table<TTableData> columns={columns} dataSource={tableData} />
     <Pagination
      current={page}
      onChange={(value) => setPage(value)}
      pageSize={metaData?.limit}
      total={metaData?.total}
     />
    </>
  
};

export default Faculty;