import { Layout, Menu } from "antd";
import { SidebarGenenrater } from "../../utils/SidebarGenerater";
import { adminPaths } from "../../routes/adminRoutes";
import { facultyPaths } from "../../routes/facultyRoutes";
import { studentPaths } from "../../routes/studentRoutes";

const {Sider } = Layout;

  const UserRole = {
    Admin: "admin",
    Faculty: "faculty",
    Student: "student"
  }
//{SidebarGenenrater(adminPaths,sideBarRole)}
  const Sidebar = () => {
    const role = "student";
    let sideBarRole;

    switch(role){
      case UserRole.Admin: sideBarRole = SidebarGenenrater(adminPaths,UserRole.Admin);
      break;
      case UserRole.Faculty: sideBarRole = SidebarGenenrater(facultyPaths,UserRole.Faculty);
      break;
      case UserRole.Student: sideBarRole = SidebarGenenrater(studentPaths,UserRole.Student);
      break;
      default: break;
    }
  
  return (
    <Sider
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
      </Sider>
  );
};

export default Sidebar;