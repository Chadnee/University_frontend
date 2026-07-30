import { Button, Card, Drawer, Flex, Layout } from "antd";
import Sidebar from "./Sidebar";
import { Link, Outlet } from "react-router-dom";
import useResponsive from "../../hooks/useResponsive";
import { useState } from "react";
import { LuPanelLeftOpen } from "react-icons/lu";
import male from '../../assets/images/maleStudent.jpg'
import female from '../../assets/images/femaileStudent.jpg'
import { useGetMeQuery } from "../../features/admin/userManagementApi";
import { getFullName } from "../../utils/GetFullName";
import { FaHome } from "react-icons/fa";
import { useAppDispatch } from "../../features/hooks";
import { logOut } from "../../features/auth/authSlice";
import { TbLogout } from "react-icons/tb";
import { CgProfile } from "react-icons/cg"

const { Content } = Layout;

const MainLayout = () => {
  const { isMobile, isTablet, isLaptop } = useResponsive();
  const dispatch = useAppDispatch();
  const [open, setOpen] = useState(false);
  const [sidebarWidth, setSidebarWidth] = useState(200);
  const {data :myself } = useGetMeQuery(undefined)
  console.log(myself)

  
   const { name , gender, role } = myself?.data ?? {};
   const image = gender === 'male'? male : female
  // const name = myself?.data?.name
  const handleSidebar = () => {
    console.log(22);
    if (sidebarWidth === 200) {
      setSidebarWidth(80);
    }
    if (sidebarWidth === 80) {
      setSidebarWidth(200);
    }
  };

    const handleLogout = () => {
        dispatch(logOut());
      };
  
  return (
    <Layout style={{}}>
      {!isMobile && (
        <Sidebar
          sidebarWidth={sidebarWidth}
          // setSidebarWidth={setSidebarWidth}
        />
      )}
      <Layout
        style={{
          marginLeft: !isMobile ? sidebarWidth : 0,
          transition: "margin-left .15s",
        }}
      >
        {/* linear-gradient(135deg, #667eea, #764ba2, #6dd5ed) */}
        {/* which header */}
        <Card
          bodyStyle={{ padding: "5px 50px 5px 20px" }}
          style={{
            background: "#eceef5ff",
            boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
          }}
        >
          <Flex justify="space-between">
            <span style={{}}>
              <LuPanelLeftOpen
                onClick={handleSidebar}
                style={{
                  fontSize: "23px",
                  color: "#fff",
                  background: "#092149",
                  padding: "3px",
                  borderRadius: "5px",
                }}
              ></LuPanelLeftOpen>
            </span>
            <Flex gap={18} align="center">
               
               <Link to="/" style={{ paddingLeft: 24, cursor: 'pointer', color:"#03173a" }}>
                  <Flex style={{fontSize:'13px', color:"#03173a", }} gap={4} align="center">
                     <FaHome style={{fontSize:'15px', color:"#072456", }}></FaHome>
                     <span style={{fontWeight:"600px"}}>Home</span>
                  </Flex>
                </Link>
               <Link to="/" style={{ paddingLeft: 24, cursor: 'pointer', color:"#03173a" }}>
                  <Flex style={{fontSize:'13px', color:"#03173a"}} gap={4} align="center">
                     <CgProfile style={{fontSize:'15px', color:"#072456"}}></CgProfile>
                     <span>Profile</span>
                  </Flex>
                </Link>
                 <Flex align="center" gap={4}
          onClick={handleLogout}
          style={{ paddingLeft: 24, cursor: 'pointer', color:"#03173a" }}
        > <TbLogout style={{fontSize:'15px', color:"#072456"}}></TbLogout>
        <span>Log out</span>
        </Flex> 
           <Flex align="center" gap={8} style={{paddingLeft:"10px"}}>
                  <img src={image} style={{width:25, height:25, borderRadius:"50%"}} alt="" />
                  <span style={{ lineHeight:"13px"}}>
                     <span style={{fontSize:'13px', color:"#03173a"}}>{name?getFullName(name):""}</span><br />
                     <span style={{fontSize:'10px',textTransform:"uppercase", color:"#888585" }}>{role}</span>
                  </span>
               </Flex>
               
            </Flex>
          </Flex>
        </Card>
        {isMobile && (
          <Flex>
            <Button style={{ margin: 12 }} onClick={() => setOpen(!open)}>
              ☰
            </Button>
          </Flex>
        )}
        <Content
          style={{
            background: "#f4f6faff",
            width: "100%",
          }}
        >
          <div
            style={{
              padding: isMobile ? "10px 7px": (isTablet || isLaptop)?"0 12px" : "0 30px ",
              minHeight: 360,
              maxWidth: "100%",
              width: "100%",
            }}
          >
            <Outlet />
          </div>
        </Content>
      </Layout>
      {isMobile && (
        <Drawer
          placement="left"
          open={open}
          onClose={() => setOpen(false)}
          width={200}
          bodyStyle={{ padding: 0 }} // ✅ NO EXTRA GAP
        >
          <Sidebar isMobile onClose={() => setOpen(false)} />
        </Drawer>
      )}
    </Layout>
  );
};

export default MainLayout;

// import { Button, Flex, Layout, Menu } from 'antd';
// import { Outlet } from 'react-router-dom';
// import Sidebar from './Sidebar';
// import { Content, Header } from 'antd/es/layout/layout';
// import { useAppDispatch } from '../../features/hooks';
// import { logOut } from '../../features/auth/authSlice';
// import { useState } from 'react';
// import useResponsive from '../../hooks/useResponsive';
// import './sidebar.css'

// const MainLayout = () => {
//          const [sideBarOpen, setSideBarOpen] = useState(false)
//          const {isMobile, isTablet} = useResponsive()
//          console.log(sideBarOpen)
//   return (
//     // <div>
//     //   <Sidebar  sideBarOpen={sideBarOpen} setSideBarOpen={setSideBarOpen} />

//     //   <main  className={`main-content ${
//     //       !isMobile ? "with-sidebar" : ""
//     //     }`}>
//     //     {
//     //       (isMobile) &&
//     //       <button className={`sidebar-toggle ${sideBarOpen? 'open' : ''}`}
//     //       onClick={() => {setSideBarOpen(!sideBarOpen)}}>button</button>
//     //     }
//     //       <div
//     //         style={{
//     //           padding: "20px 20px " ,
//     //           // minHeight: 360,
//     //         }}
//     //       >
//     //         <Outlet></Outlet>
//     //       </div>
//     //   </main>
//     // </div>
//     <div>
//       <Layout style={{height : "100vh"}}>
//       <Sidebar></Sidebar>
//       <Layout>
//         {/* <Header style={{background: '#e6f7ff'}}> */}

//         {/* </Header> */}
//         <Content style={{ background: '#d4e2f9ff'}}>
//           <div
//             style={{
//               padding: "20px 20px " ,
//               minHeight: 360,
//             }}
//           >
//             <Outlet></Outlet>
//           </div>
//         </Content>
//       </Layout>
//     </Layout>
//     </div>
//   );
// };

// export default MainLayout;
