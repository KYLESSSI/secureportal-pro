import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import AdminDashboard from './pages/AdminDashboard';
import ClientPortal from './pages/ClientPortal';
import RepoBrowser from './pages/RepoBrowser';

// Simple auth hook using localStorage token
const useAuth = () => {
  const token = localStorage.getItem('token');
  let user = null;
  try {
    user = token ? JSON.parse(atob(token.split('.')[1])) : null;
  } catch (e) {
    user = null;
  }
  return { user };
};

const AdminRoute = ({ children }) => {
  const { user } = useAuth();
  return user?.role === 'admin' ? children : <Navigate to="/login" />;
};

const ClientRoute = ({ children }) => {
  const { user } = useAuth();
  return user?.role === 'client' ? children : <Navigate to="/login" />;
};

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<AdminRoute><AdminDashboard /></AdminRoute>} />
        <Route path="/portal" element={<ClientRoute><ClientPortal /></ClientRoute>} />
        <Route path="/repo" element={<RepoBrowser />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
