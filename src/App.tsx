import { Outlet } from 'react-router-dom';
import './index.css'
import Header from './pages/Home/Header/Header';

const App = () => {
  return (
    <div style={{margin:"0",overflow:"hidden"}}>
      <Header></Header>
      <Outlet></Outlet>
    </div>
  )
       
        {/* <MainLayout></MainLayout> */}
  
};

export default App;

// const App = () => {
//   return <ProtectedRoute role={undefined}>
//        <Home></Home>
//         {/* <MainLayout></MainLayout> */}
//   </ProtectedRoute>
// };

// export default App;