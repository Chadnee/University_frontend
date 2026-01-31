
import { Button, Card, Drawer, Flex, Layout } from 'antd';
import Sidebar from './Sidebar';
import { Outlet } from 'react-router-dom';
import useResponsive from '../../hooks/useResponsive';
import { useState } from 'react';
const { Header, Content } = Layout;

const MainLayout = () => {
  const {isMobile, isDesktop, isTablet} = useResponsive()
  const [open, setOpen] = useState(false);


  return (
    <Layout style={{ minHeight: '100vh' }}>
      {
        !isMobile && <Sidebar />
      }
      <Layout>
        {/* linear-gradient(135deg, #667eea, #764ba2, #6dd5ed) */}
        {/* which header */}
        <Card style={{background : "#eceef5ff", boxShadow: "0 10px 25px rgba(0,0,0,0.08)"}}>
        </Card>
        {
          isMobile && (
            <Flex>
               <Button style={{margin:12}} onClick={()=>setOpen(!open)}>
           ☰
         </Button>
            </Flex>
          )
        }
        <Content
             style={{
               background: "#f4f6faff",
               width: '100%',
             }}
>
          <div
            style={{
              padding:isDesktop?"10px 40px":"10px 7px",
              minHeight: 360,
                maxWidth: '100%',

            }}
          >
            <Outlet />
          </div>
        </Content >
      </Layout>
       {
        isMobile && (
           <Drawer
          placement="left"
          open={open}
          onClose={() => setOpen(false)}
           width={200}
          bodyStyle={{ padding: 0 }}   // ✅ NO EXTRA GAP
        >
          <Sidebar isMobile onClose={() => setOpen(false)} />
        </Drawer>
        )
       }
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