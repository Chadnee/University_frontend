import { useState } from "react";
import type { TAdmin } from "../../../types/userManagementTypes";
import { useGetAllAdminQuery } from "../../../features/admin/userManagementApi";
import { Button, Flex, Pagination, Space, Spin, Table, type TableColumnsType } from "antd";
import maleStudent from '../../../assets/images/maleStudent.jpg';
import femaleStudent from '../../../assets/images/femaileStudent.jpg'
import { getFullName } from "../../../utils/GetFullName";
import { Link } from "react-router-dom";

export type TTableData = Pick<
  TAdmin,
  | "id"
  | "_id"
  | "name"
  | "email"
  | "gender"
  | "contactNo"
  | "profileImage"
  | "managementDepartment"
>;

const Admin = () => {
  const [page, setPage] = useState(1)
  const {data: adminData, isLoading: isAdminLoading} =
  useGetAllAdminQuery( [{ name: 'page', value: page },
  { name: 'sort', value: 'id' }])
  
const metaData = adminData?.meta
//  console.log(adminData)
//  console.log(metaData)
const tableData: TTableData[] = adminData?.data?.map((admin: TAdmin) => ({
  _id: admin._id,
  id: admin.id,
  name: admin.name,
  email:admin.email,
  profileImage:admin.profileImage,
  contactNo: admin.contactNo,
  gender: admin.gender,
  managementDepartment: admin.managementDepartment
})) ?? []

const columns: TableColumnsType<TTableData> =[
   {
    title: "Image",
    key: "image",
    render:(_, record) => {
      const image = record.profileImage || (record.gender === 'male'? maleStudent : femaleStudent)
     return (
      <img src={image} alt="avater" style={{
         width:40, height:40, borderRadius:"50%", objectFit: "cover"
         }} />
     )
    }
   },

   {
    title: 'Name',
    key: "key",
    dataIndex: "name",
    render: (_, record) => getFullName(record?.name)
   },
   {
             title: "Admin ID",
             key: "key",
             dataIndex: "id",
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
             title: "Management Department",
             key: "managementDepartment",
             dataIndex:"managementDepartment",
           },
           {
             title: "Action",
             key: "X",
             render: (item) => {
              // console.log(item);
               return (
                 <Space>
                   <Link to={`/admin/admin/${item._id}`}>
                     <Button>Details</Button>
                   </Link>
                   <Button>Update</Button>
                   <Button>Block</Button>
                 </Space>
               )
             }
           }
]
       
      if(isAdminLoading){
        return (
          <Flex justify="center" align="center" style={{height: "80vh" }}>
            <div style={{ color: "#09af99ff" }}>
               <Spin/>
            </div>
          </Flex>
        )
      }
  return (
    <div>
      <Table<TTableData> columns={columns} dataSource={tableData} />
     <Pagination
      current={page}
      onChange={(value) => setPage(value)}
      pageSize={metaData?.limit}
      total={metaData?.total}
     />
    </div>
  );
};

export default Admin;
