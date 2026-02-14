import { Button, Dropdown, Flex, Spin, Table, Tag } from 'antd';
import type { MenuProps, TableColumnsType } from 'antd';
import { type TSemester} from "../../constants/global";
import { useState } from "react";
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

const tableData:TTableData[] = registeredSemester?.data?.map((item : TSemester) => ({
        key: item._id,
      name: `${item.academicSemester.name} ${item.academicSemester.year}`,
      startDate: moment(new Date(item.startDate)).format('MMM') ,
      endDate: moment(new Date(item.endDate)).format('MMM'),
      status: item.status
})) ?? []

  const handleStatusUpdate : MenuProps['onClick'] = (data)=> {
     console.log(semesterId)
     console.log(data)
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
    
  if (isLoading) {
    return (
                  <Flex  justify="center" align="center" style={{ height: "80vh" }}>
                       <div style={{ color: "#608cd3ff" }}>
                        <Spin/>
                       </div>
                  </Flex>
                )
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
