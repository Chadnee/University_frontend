import { Button, Layout, Menu } from 'antd';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import { Content, Header } from 'antd/es/layout/layout';
import { useAppDispatch } from '../../features/hooks';
import { logOut } from '../../features/auth/authSlice';


const MainLayout = () => {
  const dispatch = useAppDispatch();

  const handleLogout = () => {
    dispatch(logOut())
  }
  return (
    <div>
      <Layout style={{height: "100vh"}}>
      <Sidebar></Sidebar>
      <Layout>
        <Header>
          <Button onClick={handleLogout}>Log out</Button>
        </Header>
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
      </Layout>
    </Layout>
    </div>
  );
};

export default MainLayout;