import MainLayout from "./components/layout/MainLayout";
import ProtectedRoute from "./components/layout/ProtectedRoute";

const App = () => {
  return <ProtectedRoute>
        <MainLayout></MainLayout>
  </ProtectedRoute>
};

export default App;