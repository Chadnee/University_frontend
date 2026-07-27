import { Flex, Layout, Menu } from 'antd';
import { verifyToken } from '../../utils/verifyToken';
import { useAppSelector } from '../../features/hooks';
import {  selectCurrentToken, type TUser } from '../../features/auth/authSlice';
import { SidebarGenenrater } from '../../utils/SidebarGenerater';
import { adminPaths } from '../../routes/adminRoutes';
import { facultyPaths } from '../../routes/facultyRoutes';
import { studentPaths } from '../../routes/studentRoutes';
import { useState } from 'react';
import logo from "../../assets/images/logo_plain.png"
import starCap from "../../assets/images/starCap.png"
import { LuSquareArrowOutUpRight } from 'react-icons/lu';

const { Sider } = Layout;

const userRole = {
  ADMIN: 'admin',
  FACULTY: 'faculty',
  STUDENT: 'student',
};

type SidebarProps = {
  isMobile?: boolean;
  onClose?: () => void;
  sidebarWidth?:number;
  // setSidebarWidth?: React.Dispatch<React.SetStateAction<number> >
};
//const Sidebar = ({isMobile, onClose, sidebarWidth = 260, setSidebarWidth} : SidebarProps) => {

const Sidebar = ({isMobile, onClose, sidebarWidth} : SidebarProps) => {
  const [openKeys, setOpenKeys] = useState<string[]>(["Accademic Management"]);
      const token = useAppSelector(selectCurrentToken);
   
    
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
    <Flex vertical style={{height:"100%"}}>
      <Flex align='center' gap={8}
        style={{
          height: 64,
          display: 'flex',
          alignItems: 'center',
          justifyContent: sidebarWidth === 200?'center':'start',
          color: '#fff',
          fontWeight: 600,
          padding:"10px", 
        }}
      >  <img src={logo} width={sidebarWidth === 200?45: 40} height={sidebarWidth === 200?45:40} alt="" />
      {sidebarWidth === 200 && <span className="font-heading-stylish" style={{
              textTransform: "uppercase",
              fontWeight: 500,
              fontSize: "20px",
            }}>tchno university</span>}
      </Flex>

      <Menu className="dashboard-menu"
        mode="inline"
        items={sidebarItems}
        style={{ background: 'transparent', color: '#fff', fontSize:"13px" }}
        onClick={() => isMobile && onClose?.()}
        openKeys={openKeys} 
  onOpenChange={keys => setOpenKeys(keys.slice(-1))}
      />

      <Flex vertical style={{ marginTop: 'auto', paddingBottom:"16px" }}>
        {/* <hr style={{ width: '100%' }} />
        <Link to="/"
         style={{ paddingLeft: 24, cursor: 'pointer', color:"#fff" }}
        >
          Home
        </Link>
        <p
          onClick={handleLogout}
          style={{ paddingLeft: 24, cursor: 'pointer', color:"#fff" }}
        >
          Log Out
        </p> */}
        
          <div style={{position:"relative",  width:"90%", height:"100%", margin:"auto",}}>
             <img src={starCap} style={{height:"160px", width:"100%", borderRadius: 20,display: "block",
    border: ".5px solid rgba(120,150,255,0.18)",
    boxShadow: `
      inset 0 1px 0 rgba(255,255,255,0.03),
      0 0 0 1px rgba(80,110,220,0.12),
      0 12px 30px rgba(0,0,0,0.35)
    `,}} alt="" />
    <Flex vertical gap={11} style={{position:"absolute",color:"#fff",left:30 ,  bottom:14,display:"flex", justifyContent:"center", alignItems:"center"}}>
      <span style={{fontSize:"14px", }}>Grow. Inspire. Lead</span>
      <span style={{fontSize:"10px", color:"#bfc1c2", letterSpacing:".8px", lineHeight:"16px"}}>Empowering minds,<br /> shaping the future</span>
    <Flex
                                    gap={5}
                                    align="center" justify='center'
                                    style={{
                                      color: "#fff",
                                      fontSize: "11px",
                                      fontWeight: 600,
                                      background:"#d89b1d",
                                      height:"30px",
                                      width:"126px",
                                      borderRadius:"5px",
                                      textAlign:"center"
                                    }}
                                  >
                                    <span>View website</span>{" "}
                                    <LuSquareArrowOutUpRight
                                      style={{ marginTop: "1.5px" }}
                                    ></LuSquareArrowOutUpRight>
                                  </Flex>
    </Flex>
        </div>
        </Flex>
        
      </Flex>
  );

  // ✅ MOBILE: plain div (NO SIDER)
  if (isMobile) {
    return (
      <div 
        style={{
          width: '100%',
          height: '100%',
          background: '#092149',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        {content}
      </div>
    );
  }

  // ✅ DESKTOP: real Sider #202f47',
  return (
    <Sider 
      // width={260} 
       width={sidebarWidth}
      style={{
        height: '100vh',
        background: '#092149',
        position: 'fixed',
        top: 0,
        left:0,
        bottom:0,
        overflowY:'auto',
        overflowX: "hidden",
      }}
    > <div
//   onMouseDown={() => {
//     if (!setSidebarWidth) return;

//     const MIN_WIDTH = 80;
// const DEFAULT_WIDTH = 200;

//    const handleMouseMove = (e: MouseEvent) => {
//   setSidebarWidth((prev) => {
//     const next = prev + e.movementX;

//     return Math.max(MIN_WIDTH, Math.min(DEFAULT_WIDTH, next));
//   });
// };

//     const handleMouseUp = () => {
//       window.removeEventListener("mousemove", handleMouseMove);
//       window.removeEventListener("mouseup", handleMouseUp);
//     };

//     window.addEventListener("mousemove", handleMouseMove);
//     window.addEventListener("mouseup", handleMouseUp);
//   }}
//   style={{
//     position: "absolute",
//     top: 0,
//     right: -3,
//     width: "6px",
//     height: "100%",
//     cursor: "col-resize",
//     zIndex: 9999,
//     background:'transparent'
//   }}
/>
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
