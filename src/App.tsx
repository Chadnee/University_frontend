import ProtectedRoute from "./components/layout/ProtectedRoute";
import './index.css'
import Home from "./pages/Home/Home";

const App = () => {
  return <ProtectedRoute role={undefined}>
       <Home></Home>
        {/* <MainLayout></MainLayout> */}
  </ProtectedRoute>
};

export default App;