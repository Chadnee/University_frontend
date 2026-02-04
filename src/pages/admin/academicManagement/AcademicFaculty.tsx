import { useGetAllAccademicFacultyQuery, useGetAllSemestersQuery } from "../../../features/admin/academicManagementApi";
import { Button, Card, Flex, Table } from 'antd';
import type { TableColumnsType, TableProps } from 'antd';
import {type TQueriParam } from "../../constants/global";
import { useState } from "react";
import type { TAcademicFaculty, TAcademicSemester } from "../../../types/academicManagementTypes";
import { useNavigate } from "react-router-dom";
import { Footer } from "../../../components/Footer";
import useResponsive from "../../../hooks/useResponsive";


export type TTableData = Pick<TAcademicFaculty, 'name'> 


export const buttonColors = ['#0acf52ff','#e7b025ff','#dc5009ff' ]

const AcademicFaculty= () => {
  const [params, setParams] = useState<TQueriParam[] | undefined>(undefined);
  const { data: academicFacultyData, isLoading, isFetching} = useGetAllAccademicFacultyQuery(params);
  const navigate = useNavigate()
  const {isMobile} = useResponsive()
  console.log(academicFacultyData);

  const tableData:TTableData[] = academicFacultyData?.data?.map(
    ({_id, name, startMonth, endMonth, year}) => ({
      key: _id,
      name,
      startMonth,
      endMonth,
      year
    })
  )
  
const columns: TableColumnsType<TTableData> = [
  {
    title: 'Name',
    key: 'name',
    dataIndex: 'name',
    filters: [
      {
        text: 'Autumn',
        value: 'Autumn',
      },
      {
        text: 'Fall',
        value: 'Fall',
      },
      {
        text: 'Summer',
        value: 'Summer',
      },
    ],
  },
  {
    title: 'Action',
    key: 'x',
    width: 20,
    render:(item,_record, index) => {
      console.log(item)
      const bgColor = buttonColors[index % buttonColors.length];
      return <Button style={{background:bgColor, color:"#ffffff"}}>Update</Button>
    }
  }
];

const onChange: TableProps<TTableData>['onChange'] = (_pagination, filters, _sorter, extra)=>{
    if (extra.action === 'filter') {
      const queryParams:TQueriParam[] = [];

      filters.name?.forEach((item) => 
        queryParams.push({name: 'name', value: item})
      )
      filters.year?.forEach((item) =>
      queryParams.push({name: 'year', value: item}))
      setParams(queryParams)
    }
  }
    
  if (isLoading) {
    return <p>Loading...</p>
  }

  const handleOkButton = async() => {
      await navigate('/admin/create-acc-faculty')
  }
  const handleCancleButton = async() => {

  }

  
  
  return (
   <div>
     <span style={{fontSize: "25px", fontWeight:"700"}}>Academic Semester List</span>
       <Flex vertical justify="space-between" style={{minHeight:"80vh"}}>
      <Card style={{boxShadow: "0 10px 25px rgba(0,0,0,0.1)",border:".7px solid #d7dce5ff",
         marginTop:"20px",}}>
        <Table<TTableData>
    columns={columns} style={{width: "100%", border:".5px solid #d7dce5ff"}}
    loading={isFetching}
    dataSource={tableData}
    onChange={onChange}
      scroll={isMobile ? { x: 'max-content' } : undefined}
  />
    </Card>
    <div>
          <Footer okButton="Create more" cancelButton={"Cancel"} handleOk={handleOkButton} handleCancle={handleCancleButton}>
          </Footer>

    </div>
   </Flex >
   </div>
  );
};

export default AcademicFaculty;