import { Flex, Layout, Menu } from 'antd';
import { verifyToken } from '../../utils/verifyToken';
import { useAppDispatch, useAppSelector } from '../../features/hooks';
import { logOut, selectCurrentToken, type TUser } from '../../features/auth/authSlice';
import { SidebarGenenrater } from '../../utils/SidebarGenerater';
import { adminPaths } from '../../routes/adminRoutes';
import { facultyPaths } from '../../routes/facultyRoutes';
import { studentPaths } from '../../routes/studentRoutes';

const { Sider } = Layout;

const userRole = {
  ADMIN: 'admin',
  FACULTY: 'faculty',
  STUDENT: 'student',
};

const Sidebar = ({isMobile, onClose}) => {
    const dispatch = useAppDispatch();
      const token = useAppSelector(selectCurrentToken);

  
    const handleLogout = () => {
      dispatch(logOut());
    };

  let user;

  if (token) {
    user = verifyToken(token);
  }

  let sidebarItems;

  switch ((user as TUser)!.role) {
    case userRole.ADMIN:
      sidebarItems = SidebarGenenrater(adminPaths, userRole.ADMIN);
      break;
    case userRole.FACULTY:
      sidebarItems = SidebarGenenrater(facultyPaths, userRole.FACULTY);
      break;
    case userRole.STUDENT:
      sidebarItems = SidebarGenenrater(studentPaths, userRole.STUDENT);
      break;

    default:
      break;
  }

   const content = (
    <>
      <div
        style={{
          height: 64,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#fff',
          fontWeight: 600,
        }}
      >
        PH Uni
      </div>

      <Menu
        mode="inline"
        items={sidebarItems}
        style={{ background: 'transparent', color: '#fff' }}
        onClick={() => isMobile && onClose?.()}
      />

      <Flex vertical style={{ marginTop: 'auto' }}>
        <hr style={{ width: '100%' }} />
        <p
          onClick={handleLogout}
          style={{ paddingLeft: 24, cursor: 'pointer', color:"#fff" }}
        >
          Log Out
        </p>
      </Flex>
    </>
  );

  // ✅ MOBILE: plain div (NO SIDER)
  if (isMobile) {
    return (
      <div
        style={{
          width: '100%',
          height: '100%',
          background: '#05458fff',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        {content}
      </div>
    );
  }

  // ✅ DESKTOP: real Sider
  return (
    <Sider
      // width={260}
      style={{
        height: '100vh',
        background: '#05458fff',
        position: 'sticky',
        top: 0,
      }}
    >
      {content}
    </Sider>
  );

  // return (
  //   <Sider
  //     // breakpoint="lg"
  //     // collapsedWidth="0"
  //     width = {260}
  //     style={{ height: '100vh', color: 'white', background : "#05458fff", position: 'sticky', top: '0', left: '0' }}
  //   >
  //     <div
  //       style={{

  //         color: 'white',
  //         height: '4rem',
  //         display: 'flex',
  //         justifyContent: 'center',
  //         alignItems: 'center',
  //       }}
  //     >
  //       <h1>PH Uni</h1>
  //     </div>
  //     <Menu
  //      style={{background : "#05458fff", color: 'white'}}
  //       mode="inline"
  //       // defaultSelectedKeys={['4']}
  //       items={sidebarItems}
  //       onClick={() => isMobile && onClose?.()}
  //     />
  //     <Flex vertical style={{ marginTop: 'auto' }}>
  //       <hr style={{width:'100%'}}/>
  //       <p onClick={()=>{handleLogout()}} style={{paddingLeft: '31px'}}>Log Out</p>

  //     </Flex>
  //   </Sider>
  // );
};


export default Sidebar;

// import { Button, Divider, Layout, Menu } from "antd";
// import { SidebarGenenrater } from "../../utils/SidebarGenerater";
// import { adminPaths } from "../../routes/adminRoutes";
// import { facultyPaths } from "../../routes/facultyRoutes";
// import { studentPaths } from "../../routes/studentRoutes";
// import { useAppDispatch, useAppSelector } from "../../features/hooks";
// import {
//   logOut,
//   selectCurrentToken,
//   selectCurrentUser,
//   type TUser,
// } from "../../features/auth/authSlice";
// import { verifyToken } from "../../utils/verifyToken";
// import { useState } from "react";
// import { NavLink } from "react-router-dom";
// import "./sidebar.css"

// const { Sider } = Layout;

// const UserRole = {
//   Admin: "admin",
//   Faculty: "faculty",
//   Student: "student",
// };
// //{SidebarGenenrater(adminPaths,sideBarRole)}
// const Sidebar = () => {
// // const Sidebar = ({sideBarOpen, setSideBarOpen}) => {
//   const dispatch = useAppDispatch();
//   const token = useAppSelector(selectCurrentToken);
//   const [openKey, setOpenKey] = useState<string | null> (null)

//   const handleLogout = () => {
//     dispatch(logOut()); //called log out reducer from authSlice
//   };
//   // const user = useAppSelector(selectCurrentUser);
//   //we dont take user.role by this storage method, because it is not
//   // preferd for professional ,if we call it in here , it can be hacked as this stored by persisted in cookie and anyone can get this
//   //so we get the current user by token verify and decoded.. token generating
  
//   let user;
//   if (token) {
//     user = verifyToken(token);
//   }

//   let sideBarRole;

//   switch ((user as TUser)!.role) {
//     case UserRole.Admin:
//       sideBarRole = SidebarGenenrater(adminPaths, UserRole.Admin);
//       break;
//     case UserRole.Faculty:
//       sideBarRole = SidebarGenenrater(facultyPaths, UserRole.Faculty);
//       break;
//     case UserRole.Student:
//       sideBarRole = SidebarGenenrater(studentPaths, UserRole.Student);
//       break;
//     default:
//       break;
//   }
//   console.log(sideBarRole);
//   return (
//     //  <div>
//     //      {/**Overlay for mobile */}
//     //       {
//     //         sideBarOpen && <div className = 'sidebar-overaly' onClick={()=>setSideBarOpen(!sideBarOpen)} className="sidebar-overlay"/>
//     //       }
//     //       <aside className={`sidebar ${sideBarOpen? "open" : " "}`}>
//     //          <div className="sidebar-scroll">
//     //             {
//     //               sideBarRole?.map(item => item?.children? (
//     //                <div key={item.key} className="menu-group">
//     //                   <div className="menu-title" onClick={()=>setOpenKey(openKey === item.key ? null : item.key)}>
//     //                      {item.label}
//     //                   </div>
//     //                   <div className={`submenu ${openKey === item.key?"expanded":""}`}>
//     //                      {item?.children?.map(child => (
//     //                       <div className='submenu-item' key={child?.key} 
//     //                       // to = {`/${user.role}/${child?.key}`}
//     //                       >{child?.label}</div>
//     //                      ))}
//     //                   </div>
//     //                </div>
//     //               ): (
//     //                 <div className='menu-link' key={item?.key} 
//     //                 // to={`/${user.role}/${item?.key}`}
//     //                 >
//     //                   {item?.label} 
//     //                 </div>
//     //               ))
//     //             }
//     //          </div>
//     //          <div className="sidebar-footer" onClick={()=> dispatch(logOut())} style={{cursor: 'pointer'}}>
//     //            Log Out
//     //          </div>
//     //       </aside>
//     //  </div>
//     <Sider collapsible  trigger={null} // if you want your own button outside
//  style={{
//     background: "#0751c786",
//     height: "100vh",
//     position: "sticky",
//     top: 0,
//     display: "flex",
//     flexDirection: "column",
//     overflow: "hidden", // ✅ CRITICAL
//   }}
//   breakpoint="lg"
//   collapsedWidth="0"
// >
//   {/* MENU (SCROLL AREA) */}
//   <div
//    style={{
//       height: "calc(100vh - 56px)", // 🔥 reserve space for logout
//       overflowY: "auto",
//       overflowX: "hidden",
//     }}
//   >
//     <Menu
//       mode="inline"
//       items={sideBarRole}
//       defaultSelectedKeys={['4']}
//       style={{
//         background: "transparent",
//         borderRight: "none",
//         color: "#e6f7ff",
//       }}
//     />
//   </div>

//   {/* LOGOUT (FIXED BOTTOM) */}
//   <div
//     style={{
//       padding: "16px 24px",
//       borderTop: "1px solid rgba(255,255,255,0.2)",
//       color: "#e6f7ff",
//       cursor: "pointer",
//     }}
//     onClick={handleLogout}
//   >
//     Log Out
//   </div>
//     </Sider>
//   );
// };

// export default Sidebar;
