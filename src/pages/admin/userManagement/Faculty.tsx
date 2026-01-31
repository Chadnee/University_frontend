import React, { useState } from "react";
import { Button, Flex, Pagination, Row, Space, Spin, Table } from "antd";
import type { TableColumnsType, TableProps } from "antd";
import { useGetAllFacultyQuery, useGetAllStudentQuery } from "../../../features/admin/userManagementApi";
import type { TFaculty, TStudent } from "../../../types/userManagementTypes";
import maleStudent from "../../../assets/images/maleStudent.jpg";
import femaleStudent from "../../../assets/images/femaileStudent.jpg"
import { Link } from "react-router-dom";


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
      
      //   const studentImage = studentData?.data?.result.map((item) =>{
      //      if(item.gender === "male"){
      //           // return <img src={maleStudent} alt="avatar"/>
      //           setImage(maleStudent)
      //       } else {
      //             setImage(femaleStudent)
      //       }
      //  })
      //console.log( studentData?.data?.result);
      const metaData = facultyData?.data?.meta
      const tableData : TTableData[] = facultyData?.data?.map(
        ({
          id,
          name,
          email,
          profileImage,
          contactNo,
          gender,
          designation
        }) =>({
          key: id,
          name,
          email,
          profileImage,
          contactNo,
          gender,
          designation
        })
      ); 

      //console.log(facultyData?.data)
      
      const id = facultyData?.data?.map((item) => {return item.id})
      console.log(tableData,id)
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
      
    
     if( isFacultyLoading){
        return (
         <Flex  justify="center" align="center" style={{ height: "80vh" }}>
              <div style={{ color: "#09af99ff" }}>
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

export default Faculty;