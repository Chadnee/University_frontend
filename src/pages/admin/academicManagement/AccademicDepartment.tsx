import { useGetAllAccademicDepartmentQuery } from "../../../features/admin/academicManagementApi";
import {Card, Flex, Spin, Table } from 'antd';
import type { TableColumnsType, TableProps } from 'antd';
import {type TQueriParam } from "../../constants/global";
import { useState } from "react";
import type { TAcademicDepartment } from "../../../types/academicManagementTypes";
import { useNavigate } from "react-router-dom";
import { Footer } from "../../../components/Footer";
import useResponsive from "../../../hooks/useResponsive";
import UpdateDepartmentModal from "../../modal/UpdateDepartmentModal";



 type TTableData =  {
  key: string,
  name: string,
  academicFaculty: string
}
//Pick<TAcademicDepartment, '_id' | 'name' | 'academicFaculty'> 

const AccademicDepartment= () => {
  const [params, setParams] = useState<TQueriParam[] | undefined>(undefined);
  const { data: academicDepartmentData, isLoading, isFetching} = useGetAllAccademicDepartmentQuery(params);
  const navigate = useNavigate()
  const {isMobile} = useResponsive()
  //console.log(academicDepartmentData);

  const facultyFilters =
  academicDepartmentData?.data?.map((dep:TAcademicDepartment) => ({
    text: dep.academicFaculty.name,
    value: dep.academicFaculty._id,
  }))
  // remove duplicates
  ?.filter(
    (value, index, arr) => arr.findIndex(item => item.value === value.value) === index
  )


  const tableData:TTableData[] = academicDepartmentData?.data?.map((department: TAcademicDepartment) => ({
      key: department._id,
      name: department.name,
      academicFaculty: department.academicFaculty.name

  })) || []

    //console.log(academicDepartmentData)

  
const columns: TableColumnsType<TTableData> = [
  {
    title: 'Name',
    key: 'name',
    dataIndex: "name",
    filters: facultyFilters
    
  },
 {
    title: 'Under this faculty',
    dataIndex: 'academicFaculty',
    key: 'academicFaculty',
    // filters: facultyFilters
    
  },
  {
    title: 'Action',
    key: 'x',
    width: 20,
    render:(item,_record, index) => {
      console.log(item.key)
      return<UpdateDepartmentModal departmentId={item.key} index={index}></UpdateDepartmentModal>
      
    }
  }
];

const onChange: TableProps<TTableData>['onChange'] = (_pagination, filters, _sorter, extra)=>{
    if (extra.action === 'filter') {
      const queryParams:TQueriParam[] = [];

      filters.name?.forEach((faculty_id) =>{ //in here filters.jekhane filter option add korchi sei column er name dite hobe, jemon set korchi name column e
      queryParams.push({name: 'academicFaculty', value: faculty_id})}) //ekhane database e je field onujayi data khujchi seta onujayi dite hobe jemon 'academicFaculty' name ace database e
      setParams(queryParams)
    }
  }
  
    
  if (isLoading) {
    return (
                  <Flex  justify="center" align="center" style={{ height: "80vh" }}>
                       <div style={{ color: "#608cd3ff" }}>
                        <Spin />
                       </div>
                  </Flex>
                )
  }

  const handleOkButton = async() => {
      await navigate('/admin/create-acc-department')
  }
  const handleCancleButton = async() => {

  }

  
  
  return (
   <Flex vertical justify="center">
     <span style={{fontSize: "25px", fontWeight:"700", textAlign:"center"}}>Academic Department List</span>
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
          <Footer okButton="Create more" cancleButton={"Cancel"} handleOk={handleOkButton} handleCancle={handleCancleButton}>
          </Footer>

    </div>
   </Flex >
   </Flex>
  );
};


export default AccademicDepartment;