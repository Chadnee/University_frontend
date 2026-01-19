import { Button, Layout, Menu } from 'antd';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import { Content, Header } from 'antd/es/layout/layout';
import { useAppDispatch } from '../../features/hooks';
import { logOut } from '../../features/auth/authSlice';


const MainLayout = () => {
 
  return (
    <div>
      <Layout style={{height : "100%"}}>
      <Sidebar></Sidebar>
      <Layout>
        {/* <Header style={{background: '#e6f7ff'}}> */}
          
        {/* </Header> */}
        <Content style={{ background: '#d4e2f9ff'}}>
          <div
            style={{
              padding: "20px 20px " ,
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