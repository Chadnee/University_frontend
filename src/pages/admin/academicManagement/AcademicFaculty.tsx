import { Flex, Row } from "antd";
import { useGetAllAccademicFacultyQuery } from "../../../features/admin/academicManagementApi";
import type { TAccdemicFaculty } from "./CreateAccademicFaculty";

const AcademicFaculty = () => {
    const {data} = useGetAllAccademicFacultyQuery()
    

    const accademicFacultyData= data?.data?.map((item: string)=>item.name as string)
    console.log(accademicFacultyData)
  return (
    <div>
      <h1>All Accademical Faculty are here </h1>
      <Row justify="center" align="middle">
        <Flex justify="between">
             <p>
                <h3>Faculty Name</h3>
                <h5>{accademicFacultyData}</h5>
             </p>
             <h3></h3>
        </Flex>
      </Row>
    </div>
  );
};

export default AcademicFaculty;