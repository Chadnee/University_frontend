import { Flex } from "antd"
import useResponsive from "../../../hooks/useResponsive"
import React from "react"

type TStatsCard = {
  title: string;
  icon: React.ReactElement;
  value: number | string;
}
export const StatsCard = ({title , icon, value }: TStatsCard) => {
  const {isMobile} = useResponsive()
  return (
     <Flex
                    vertical
                    justify="center"
                    align="center"
                    style={{
                      background: "#e4effcff",
                      borderRadius: "10px",
                      width: "100%",
                      fontWeight: 600,
                      flex: 1,
                      padding:"16px" 
                    }}
                  >
                    <Flex
                      justify="center"
                      align="center"
                      gap={isMobile ? 11 : 20}
                      style={{ width: "100%"}}
                    >
                      {icon && React.cloneElement(icon, {
                        style: { fontSize: isMobile ? "23px" :"30px", color: "#bad2f0ff" }
                      })}
                      <span
                        style={{
                          fontSize: isMobile ? "12px" : "16px",
                          color: "#000",
                        }}
                      >
                        {title}
                      </span>
                    </Flex>
                    <Flex justify="center">
                      <span
                        style={{
                          fontSize: isMobile ? "20px" : "30px",
                          color: "rgb(5, 60, 124)",
                        }}
                      >
                        {value}
                      </span>
                    </Flex>
                  </Flex>
  )
}