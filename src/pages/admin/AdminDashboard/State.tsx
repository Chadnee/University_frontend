import { Col, Flex, Row, Space, } from "antd";
import {
  useGetAllCountedTotalUsersQuery,
  useGetMeQuery,
} from "../../../features/admin/userManagementApi";
import { BsPeopleFill } from "react-icons/bs";
import { FaLayerGroup } from "react-icons/fa6";
import { GiTeacher } from "react-icons/gi";
import { FaRegChartBar } from "react-icons/fa";
import {MdStackedLineChart,} from "react-icons/md";
import {TiArrowSortedUp } from "react-icons/ti";

import { useGetvisitorStateQuery} from "../../../features/admin/dashboardManagementApi";
import { useGetAllCourseQuery } from "../../../features/admin/courseManagementApi";

import useResponsive from "../../../hooks/useResponsive";

import { StatsCard } from "./SharedComponent";



const State = () => {

    const { isMobile } = useResponsive();

  const { data: userStats } = useGetAllCountedTotalUsersQuery(undefined);
    useGetMeQuery(undefined);
  const { data: getvisitors } = useGetvisitorStateQuery(undefined);
  const { data: course } = useGetAllCourseQuery(undefined);

  const { students, faculty } = userStats?.data ?? {};
  return (
    <>
       <Col
              lg={6}
              md={12}
              sm={{ span: 12 }}
              xs={12}
              style={{ display: "flex" }}
            >
              <StatsCard
                icon={<BsPeopleFill />}
                title="Students enrolled"
                value={students ?? 0}
              />
            </Col>
            <Col
              lg={6}
              md={12}
              sm={{ span: 12 }}
              xs={12}
              style={{ display: "flex" }}
            >
              <StatsCard
                icon={<GiTeacher />}
                title="Faculty members"
                value={faculty ?? 0}
              />
            </Col>
            <Col
              lg={6}
              md={12}
              sm={{ span: 12 }}
              xs={12}
              style={{ display: "flex" }}
            >
              <StatsCard
                icon={<FaLayerGroup />}
                title="course offered"
                value={course?.data ? course.data.length : 0}
              />
            </Col>
            <Col
              lg={6}
              md={12}
              sm={{ span: 12 }}
              xs={12}
              style={{ display: "flex" }}
            >
              <Flex
                vertical
                justify="center"
                align="center"
                style={{
                  background: "#e4effcff",
                  // "linear-gradient(135deg, #667eea, #764ba2, #6dd5ed)",
                  borderRadius: "7px",
                  width: "100%",
                  padding: "16px 10px",
                  color: "white",
                  fontWeight: 600,
                  flex: 1,
                }}
              >
                <Row gutter={10}>
                  <Col>
                    <Flex align="center" gap={8}>
                      <FaRegChartBar
                        style={{ fontSize: isMobile ? "23px" :"30px", color: "#bad2f0ff" }}
                      />
                      <span style={{ fontSize: isMobile ? "12px" :"15px", color: "#000" }}>
                        Website Visits
                      </span>
                    </Flex>
                    <Flex align="center" justify="center">
                      <span
                        style={{
                          fontSize: isMobile ? "21px" : "25px",
                          color: "rgb(6, 73, 150)",
                        }}
                      >
                        {getvisitors?.data?.totalVisistors}
                      </span>
                      <Flex>
                        <TiArrowSortedUp
                          style={{ fontSize: "20px", color: "#1ae17aff" }}
                        />
                        <span style={{ color: "rgb(5, 60, 124)" }}>12.5%</span>
                      </Flex>
                    </Flex>
                  </Col>
                  <Col style={{ display: isMobile ? "none" : "" }}>
                    <Space direction="vertical" align="center">
                      <MdStackedLineChart
                        style={{ fontSize: "25px", color: "#bad2f0ff" }}
                      />
                      <button
                        style={{
                          fontSize: "10px",
                          background: "#3c76ceff",
                          color: "white",
                          border: "none",
                          padding: "3px 7px",
                          borderRadius: "7px",
                        }}
                      >
                        Last 30 days
                      </button>
                    </Space>
                  </Col>
                </Row>
              </Flex>
            </Col>
    </>
  );
};

export default State;