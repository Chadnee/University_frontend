import MainLayout from "./components/layout/MainLayout";
import ProtectedRoute from "./components/layout/ProtectedRoute";
import './index.css'

const App = () => {
  return <ProtectedRoute role={undefined}>
        <MainLayout></MainLayout>
  </ProtectedRoute>
};

export default App;