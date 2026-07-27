import {
  Col,
  Flex,
  Table,
  Tag,
  type TableColumnsType,
} from "antd";
import { useGetStudentEnrolledStatusQuery } from "../../../features/admin/dashboardManagementApi";
import useResponsive from "../../../hooks/useResponsive";
import { getFullName } from "../../../utils/GetFullName";
import { ProfilePicGenerator } from "../../../utils/ProfilePicGenerator";
import { notice, type TEnrolledState } from "../../constants/global";
import { TbDotsVertical, TbEye } from "react-icons/tb";
import { FaArrowRight } from "react-icons/fa6";

// import maleStudent from '../../../assets/images/maleStudent.jpg'
// import femaleStudent from '../../../assets/images/femaileStudent.jpg'

type TStudentTaleData = Pick<
  TEnrolledState,
  | "name"
  | "studentId"
  | "gender"
  | "totalEnrolledCourses"
  | "academicDepartment"
  | "createdAt"
>;

const TableData = () => {
  const { data: enrollmentStat } = useGetStudentEnrolledStatusQuery(undefined);
  const { isMobile } = useResponsive();
  // console.log(enrollmentStat);
  // const tableData : TTableData[] = studentData?.data?.result.map((student:TStudent) => ({
  //        key: student.id,
  //     name : student.name,
  //     email: student.email,
  //     profileImage: student.profileImage,
  //     contactNo: student.contactNo,
  //     gender: student.gender,
  //     academicDepartment: student.academicDepartment,
  //     admissionSemester: student.admissionSemester,
  // })) ?? []

  const studentTaleData: TStudentTaleData[] =
    enrollmentStat?.data?.map((enrollement: TStudentTaleData) => ({
      key: enrollement.studentId,
      name: enrollement.name,
      gender: enrollement.gender,
      totalEnrolledCourses: enrollement.totalEnrolledCourses,
      academicDepartment: enrollement.academicDepartment,
      createdAt: enrollement.createdAt,
    })) ?? [];
  // console.log(studentTaleData);
  // const badgeColors = ["#F4B342", "#8f34e4ff", "#4caf4fd3"];
  // const courseData = ["110", "160", "210", "80", "120"];

  const columns: TableColumnsType<TStudentTaleData> = [
    {
      title: isMobile ? "" : "Applicant Name",
      key: "name",
      render: (_, record: TStudentTaleData) => {
        const department = record.academicDepartment.name.replace(
          /department of\s*/i,
          "",
        );
        return (
          <Flex align="center" gap={isMobile ? 10 : 8} style={{ margin: "0" }}>
            <ProfilePicGenerator
              gender={record?.gender}
              style={{
                borderRadius: "100%",
                height: isMobile ? "35px" : "30px",
                width: isMobile ? "35px" : "30px",
              }}
            />
            <Flex vertical style={{}}>
              <span
                style={{
                  fontWeight: "600",
                  fontSize: isMobile ? "12px" : "11px",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  maxWidth: isMobile ? "" : "80px",
                  whiteSpace: "nowrap",
                  display: "inline-block",
                }}
              >
                {getFullName(record?.name)}
              </span>
              {isMobile && (
                <span style={{ fontSize: "12px", color: "#5e5656" }}>
                  {department}
                </span>
              )}
            </Flex>
          </Flex>
        );
      },
    },
    ...(isMobile
      ? []
      : [
          {
            title: "Program",
            key: "academicDepartment",
            width: 130,
            ellipsis: true,
            render: (_: unknown, record: TStudentTaleData) => {
              const department = record.academicDepartment.name.replace(
                /department of\s*/i,
                "",
              );
              return (
                <span
                  title={department}
                  style={{
                    textTransform: "capitalize",
                    fontSize: "11px",
                    color: "#6b6b6b",
                    display: "inline-block", // important
                    maxWidth: "100%", // or any fixed width
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    cursor: "pointer",
                  }}
                >
                  {department}
                </span>
              );
            },
          },
        ]),
    ...(isMobile
      ? []
      : [
          {
            title: "Applied Date",
            key: "createdAt",
            render: (_: unknown, record: TStudentTaleData) => {
              const formattedDate = new Date(
                record.createdAt,
              ).toLocaleDateString("en-US", {
                month: "short",
                day: "numeric",
                year: "numeric",
              });
              return <span style={{ fontSize: "11px" }}>{formattedDate}</span>;
            },
          },
        ]),
    {
      title: isMobile ? "" : "Enrolled Course",
      key: "totalEnrolledCourses",
      render: (_, record: TStudentTaleData) => {
        let color = record.gender === "male" ? "geekblue" : "green";
        if (record.totalEnrolledCourses === 2) {
          color = "volcano";
        }
        return (
          <Flex align="center">
            <Tag
              color={color}
              style={{
                border: "none",
                borderRadius: "10px",
                padding: "2px 10px",
                margin: isMobile ? "0" : "",
              }}
            >
              {record.totalEnrolledCourses}Enrolled
            </Tag>
            {isMobile && (
              <TbDotsVertical style={{ fontSize: "16px" }}></TbDotsVertical>
            )}
          </Flex>
        );
      },
    },
    ...(isMobile
      ? []
      : [
          {
            title: "Action",
            key: "x",
            width: 60,
            render: () => {
              return (
                <Flex align="center" gap={6}>
                  <span
                    style={{
                      border: ".5px solid #c1bbbb",
                      padding: "2.5px 1.5px",
                      borderRadius: "4px",
                    }}
                  >
                    <TbEye
                      style={{ fontSize: "14px", display: "block" }}
                    ></TbEye>
                  </span>

                  <TbDotsVertical style={{ fontSize: "20px" }}></TbDotsVertical>
                </Flex>
              );
            },
          },
        ]),
  ];

  return (
    <>
      <Col
        lg={15}
        md={24}
        sm={24}
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          boxShadow: "0 10px 25px rgba(0,0,0,0.02)",
          background: "#fff",
          paddingLeft: 0,
          paddingRight: 0,
          borderRadius: "10px",
          
        }}
      >
        <Flex
          style={{ padding: "10px 16px" }}
          align="center"
          justify="space-between"
        >
          <span
            style={{
              fontWeight: 600!,
              fontSize: "17px",
              fontFamily: "'Poppins'",
            }}
          >
            Recent Admissions
          </span>
          <Flex
            gap={5}
            align="center"
            style={{
              color: "#0b709e",
              fontSize: "11px",
              fontWeight: 600,
            }}
          >
            <span>View All</span>{" "}
            <FaArrowRight style={{ marginTop: "1.5px" }}></FaArrowRight>
          </Flex>
        </Flex>
        <Table<TStudentTaleData>
          columns={columns}
          className="student-table"
          dataSource={studentTaleData}
          pagination={false}
          showHeader={!isMobile}
          style={{ width: "100%", margin: "0", padding: 0 }}
        />
      </Col>
      <Col
        lg={9}
        sm={24}
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          paddingLeft: 0,
          paddingRight: 0,
          
        }}
      >
        <div
          style={{
            boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
            flex: 1,
            height: "100%",
            background: "#fff",
            borderRadius: "10px",
            padding:"16px"
          }}
        >
          <Flex
            style={{ padding: "0 0 10px 0" }}
            align="center"
            justify="space-between"
          >
            <span
              style={{
                fontWeight: 600!,
                fontSize: "17px",
                fontFamily: "'Poppins'",
              }}
            >
              Notices
            </span>
            <Flex
              gap={5}
              align="center"
              style={{
                color: "#0b709e",
                fontSize: "11px",
                fontWeight: 600,
              }}
            >
              <span>View All</span>{" "}
              <FaArrowRight style={{ marginTop: "1.5px" }}></FaArrowRight>
            </Flex>
          </Flex>
            <Flex vertical gap={8} style={{}}>
                   {
                    notice.map((item) => (
                      <Flex key = {item.id} align="center" gap={16} style={{border:".6px solid #e0d6d6", padding:"4px 10px", borderRadius:'8px'}}>
                          <span style={{color:item.iconColor, background:item.iconBg, padding:"8px 10px", borderRadius:"6px", fontSize:"24px",}}>{item.icon}</span>
                      <Flex vertical gap={3}>
                        <span style={{fontWeight:600, fontSize:"12px", letterSpacing:'-.3px'}}>{item.title}</span>
                        <span style={{fontSize:"10px", color:"#6d6060"}}>{item.description}</span>
                        <span style={{fontSize:"9px", color:"#9d9c9c"}}>{item.time}</span>
                      </Flex>
                      </Flex>
                    ))
                   }
            </Flex>
        </div>
      </Col>
    </>
  );
};

export default TableData;
