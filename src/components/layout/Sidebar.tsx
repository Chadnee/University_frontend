import { Button, Divider, Layout, Menu } from "antd";
import { SidebarGenenrater } from "../../utils/SidebarGenerater";
import { adminPaths } from "../../routes/adminRoutes";
import { facultyPaths } from "../../routes/facultyRoutes";
import { studentPaths } from "../../routes/studentRoutes";
import { useAppDispatch, useAppSelector } from "../../features/hooks";
import { logOut, selectCurrentUser } from "../../features/auth/authSlice";

const {Sider } = Layout;

  const UserRole = {
    Admin: "admin",
    Faculty: "faculty",
    Student: "student",
  }
//{SidebarGenenrater(adminPaths,sideBarRole)}
  const Sidebar = () => {
     const dispatch = useAppDispatch();

    const handleLogout = () => {
    dispatch(logOut()) //called log out reducer from authSlice 
  }
    const user = useAppSelector(selectCurrentUser);
   // const user = useAppSelector(selectCurrentUser);
    let sideBarRole;

    switch(user!.role){
      case UserRole.Admin: sideBarRole = SidebarGenenrater(adminPaths,UserRole.Admin);
      break;
      case UserRole.Faculty: sideBarRole = SidebarGenenrater(facultyPaths,UserRole.Faculty);
      break;
      case UserRole.Student: sideBarRole = SidebarGenenrater(studentPaths,UserRole.Student);
      break;
      default: break;
    }
  
  return (
    <Sider style={{height: "100vh", position: "sticky", top: "0", left: "0"}}
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={(broken) => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
      >
        <div className="demo-logo-vertical" />
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']} items = {sideBarRole} />
      <hr/>
      <p style={{color: "#e6f7ff", paddingLeft: "30px"}} onClick={handleLogout}>Log out</p>
      </Sider>
  );
};

export default Sidebar;