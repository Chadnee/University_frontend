import React from 'react';
import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
import { Layout, Menu, theme, type MenuProps } from 'antd';
import { NavLink, Outlet } from 'react-router-dom';
import { AdminSideBar } from '../../routes/adminRoutes';

const { Header, Content, Footer, Sider } = Layout;

// const items: MenuProps['items'] = [
//     {
//         key: 'Dashboard',
//         label: <NavLink to ="/admin/create-admin">Dashboard</NavLink>
//     },
//     {
//         key:'User Management',
//         label:'User Management',
//         children:[
//           {
//             key: 'Create Admin',
//             label:<NavLink to = "/admin/create-admin">Create Admin</NavLink>
//           },
//           {
//             key: 'Create Faculty',
//             label:<NavLink to = "/admin/create-faculty"> Create Faculty</NavLink>
//           },
//           {
//             key: 'Create-student',
//             label: <NavLink to = "/admin/create-student">Create Student</NavLink>
//           }
//         ]
//     }
// ]

const MainLayout = () => {
  return (
    <div>
      <Layout style={{height: "100vh"}}>
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
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']} items={AdminSideBar} />
      </Sider>
      <Layout>
        <Header style={{ padding: 0}} />
        <Content style={{ margin: '24px 16px 0' }}>
          <div
            style={{
              padding: 24,
              minHeight: 360,
            }}
          >
            <Outlet></Outlet>
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          Ant Design ©{new Date().getFullYear()} Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
    </div>
  );
};

export default MainLayout;