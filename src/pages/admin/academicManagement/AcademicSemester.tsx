import { useGetAllSemestersQuery } from "../../../features/admin/academicManagementApi";
import { Table } from 'antd';
import type { TableColumnsType, TableProps } from 'antd';
import {type TQueriParam } from "../../constants/global";
import { useState } from "react";
import type { TAcademicSemester } from "../../../types/academicManagementTypes";


export type TTableData = Pick<TAcademicSemester, 'name' | 'startMonth' | 'endMonth' | 'year'> 

const AcademicSemester= () => {
  const [params, setParams] = useState<TQueriParam[] | undefined>(undefined);
  const { data: semesterData, isLoading, isFetching} = useGetAllSemestersQuery(params);

  console.log(semesterData);

  const tableData:TTableData[] = semesterData?.data?.map(
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
    title: 'Year',
    key:'year',
    dataIndex: 'year',
    filters: [
      {
        text: '2026',
        value: '2026'
      },
      {
        text: '2027',
        value: '2027'
      },
      {
        text: '2028',
        value: '2028'
      },
      {
        text: '2029',
        value: '2029'
      },
    ]
  },
  {
    title: 'Start month',
    key: 'startMonth',
    dataIndex: 'startMonth',
  },
  {
    title: 'End Month',
    key: 'endMonth',
    dataIndex: 'endMonth',
  },
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
  
  return (
    <div>
        <Table<TTableData>
    columns={columns}
    loading={isFetching}
    dataSource={tableData}
    onChange={onChange}
  />
    </div>
  );
};

export default AcademicSemester;
