import { useGetAllAccademicFacultyQuery} from "../../../features/admin/academicManagementApi";
import { Button, Card, Flex, Table } from 'antd';
import type { TableColumnsType} from 'antd';
import {buttonColors} from "../../constants/global";
import type { TAcademicFaculty} from "../../../types/academicManagementTypes";
import { useNavigate } from "react-router-dom";
import { Footer } from "../../../components/Footer";
import useResponsive from "../../../hooks/useResponsive";


export type TTableData = Pick<TAcademicFaculty, 'name' |  '_id'> 

const AcademicFaculty= () => {
  // const [params, setParams] = useState<TQueriParam[] | undefined>(undefined);
  const { data: academicFacultyData, isLoading, isFetching} = useGetAllAccademicFacultyQuery(undefined);
  const navigate = useNavigate()
  const {isMobile} = useResponsive()
  console.log(academicFacultyData);

  const tableData:TTableData[] = academicFacultyData?.data?.map((faculty: TAcademicFaculty ) => ({
    key: faculty._id,
    name: faculty.name
  })) || []
  
const columns: TableColumnsType<TTableData> = [
  {
    title: 'Name',
    key: 'name',
    dataIndex: 'name',
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
      scroll={isMobile ? { x: 'max-content' } : undefined}
  />
    </Card>
    <div>
          <Footer okButton="Create more" cancleButton={"Cancel"} handleOk={handleOkButton} handleCancle={handleCancleButton}>
          </Footer>

    </div>
   </Flex >
   </div>
  );
};

export default AcademicFaculty;