import { useGetAllSemestersQuery } from "../../../features/admin/academicManagementApi";
import { Button, Dropdown, Table, Tag } from 'antd';
import type { TableColumnsType, TableProps } from 'antd';
import {type TQueriParam, type TSemester } from "../../constants/global";
import { useState } from "react";
import type { TAcademicSemester } from "../../../types/academicManagementTypes";
import { useGetRegisteredSemesterQuery, useUpdateRegisteredSemesterMutation } from "../../../features/admin/courseManagementApi";
import moment from "moment";


export type TTableData = Pick<TSemester, 'startDate' | 'endDate' | 'status'> 

const items = [
    {
        label: 'Upcoming',
        key: 'UPCOMING',
    },
    {
        label: 'Ongoing',
        key:'ONGOING'
    },
    {
        label:'Ended',
        key: 'ENDED'
    }
]

const RegisteredSemester= () => {
//   const [params, setParams] = useState<TQueriParam[] | undefined>(undefined);
 const [semesterId, setSemesterId] = useState('')  
 const { data: registeredSemester, isLoading, isFetching} = useGetRegisteredSemesterQuery(undefined);
 const [updateRegisteredSemester] = useUpdateRegisteredSemesterMutation()
  console.log(registeredSemester);

  const tableData:TTableData[] = registeredSemester?.data?.map(
    ({_id, academicSemester, startDate, endDate, status}) => ({
      key: _id,
      name: `${academicSemester.name} ${academicSemester.year}`,
      startDate: moment(new Date(startDate)).format('MMM') ,
      endDate: moment(new Date(endDate)).format('MMM'),
      status
    })
  )
  const handleStatusUpdate = (data)=> {
     console.log(semesterId)
     console.log(data.key)
      const updateData = {
        id: semesterId,
        data: {
            status: data.key
        }
      }

      updateRegisteredSemester(updateData);
  }
  const menuProps = {
    items,
    onClick: handleStatusUpdate
  }
  
const columns: TableColumnsType<TTableData> = [
  {
    title: 'Registered semester name',
    key: 'name',
    dataIndex: 'name'
  },
  {
    title: 'Status',
    key:'status',
    dataIndex: 'status',
    render:(item) => {
        let color;
        if(item === 'UPCOMING'){
            color = 'blue'
        }
        if(item === "ONGOING"){
            color = 'green'
        }
        if(item === "ENDED"){
            color = 'red'
        }
        return <Tag color={color}>{item}</Tag>
    }
  },
  {
    title: 'Start Date',
    key: 'startDate',
    dataIndex: 'startDate',
  },
  {
    title: 'End Date',
    key: 'endDate',
    dataIndex: 'endDate',
  },
  {
    title: 'Action',
    key: 'x',
    render: (item) => {
        return (
            <Dropdown menu={menuProps} trigger={['click']}>
            <Button onClick={()=>setSemesterId(item.key)}>Update</Button>
        </Dropdown>
        )
    }
  }
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
    
  if (isLoading) {
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

export default RegisteredSemester;
