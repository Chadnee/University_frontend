import React, { useState } from "react";
import { Button, Flex, Pagination, Row, Space, Spin, Table } from "antd";
import type { TableColumnsType, TableProps } from "antd";
import { useGetAllStudentQuery } from "../../../features/admin/userManagementApi";
import type { TStudent } from "../../../types/userManagementTypes";
import maleStudent from "../../../assets/images/maleStudent.jpg";
import femaleStudent from "../../../assets/images/femaileStudent.jpg"
import type { TQueriParam } from "../../constants/global";
import { Link } from "react-router-dom";
import { getFullName } from "../../../utils/GetFullName";


export type TTableData = Pick<
  TStudent,
  | "id"
  | "name"
  | "email"
  | "gender"
  | "contactNo"
  | "profileImage"
  | "academicDepartment"
  | "admissionSemester"
>;
const Student = () => {
  const [page, setPage] = useState(1)
  const { data: studentData, isLoading: isStudentLoading } =
    useGetAllStudentQuery([{name:'page', value:page},{name:'sort', value:'id'}]);
  //   const [image, setImage] = useState<string | null>(null)
  
  //   const studentImage = studentData?.data?.result.map((item) =>{
  //      if(item.gender === "male"){
  //           // return <img src={maleStudent} alt="avatar"/>
  //           setImage(maleStudent)
  //       } else {
  //             setImage(femaleStudent)
  //       }
  //  })
  //console.log( studentData?.data?.result);
  const metaData = studentData?.data?.meta
  const tableData : TTableData = studentData?.data?.result.map(
    ({
      id,
      name,
      email,
      profileImage,
      contactNo,
      gender,
      academicDepartment,
      admissionSemester,
    }) =>({
      key: id,
      name,
      email,
      profileImage,
      contactNo,
      gender,
      academicDepartment,
      admissionSemester,
    })
  );
  const id = studentData?.data?.result.map((item) => {return item.id})
  console.log(id)
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
      key: "firstName",
      dataIndex: ["name", "firstName"],
      render : (_, record) => getFullName(record?.name)
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
      title: "Department",
      key: "academicDepartment",
      dataIndex: ["academicDepartment", "name"],
    },
    {
      title: "Action",
      key: "X",
      render: (item) => {
       // console.log(item);
        return (
          <Space>
            <Link to={`/admin/student/${item.key}`}>
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
  

 if( isStudentLoading){
    return (
                  <Flex  justify="center" align="center" style={{ height: "80vh" }}>
                       <div style={{ color: "#608cd3ff" }}>
                        <Spin size="medium" />
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

export default Student;
