import { Outlet } from "react-router-dom";

const AdminLayout = () => {
  return (
    <div>
      <h1>This is AdminLayout component</h1>
      <Outlet></Outlet>
    </div>
  );
};

export default AdminLayout;