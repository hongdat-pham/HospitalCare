import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useAuthStore } from './stores/auth.store';
import { PrivateRoute } from './routes/PrivateRoute';
import LoginPage from './pages/auth/LoginPage';
import { Page403, Page404 } from './pages/auth/ErrorPages';
import ReceptionistDashboard from './pages/receptionist/Dashboard';
import DoctorDashboard from './pages/doctor/Dashboard';
import LabDashboard from './pages/lab/Dashboard';
import PharmacyDashboard from './pages/pharmacy/Dashboard';
import CashierDashboard from './pages/cashier/Dashboard';
import ManagerDashboard from './pages/manager/Dashboard';

function RootRedirect() {
  const { isAuthenticated, user } = useAuthStore();
  if (!isAuthenticated) return <Navigate to="/login" replace />;
  const routes: Record<string, string> = {
    receptionist: '/receptionist',
    doctor: '/doctor',
    lab_technician: '/lab',
    pharmacist: '/pharmacy',
    cashier: '/cashier',
    manager: '/manager',
  };
  return <Navigate to={routes[user?.role ?? ''] ?? '/login'} replace />;
}

export default function App() {
  const initFromStorage = useAuthStore((s) => s.initFromStorage);

  useEffect(() => {
    initFromStorage();
  }, [initFromStorage]);

  return (
    <BrowserRouter>
      <Routes>
        {/* Public */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/403" element={<Page403 />} />
        <Route path="/404" element={<Page404 />} />
        <Route path="/" element={<RootRedirect />} />

        {/* Receptionist */}
        <Route element={<PrivateRoute allowedRoles={['receptionist', 'manager']} />}>
          <Route path="/receptionist" element={<ReceptionistDashboard />} />
        </Route>

        {/* Doctor */}
        <Route element={<PrivateRoute allowedRoles={['doctor', 'manager']} />}>
          <Route path="/doctor" element={<DoctorDashboard />} />
        </Route>

        {/* Lab technician */}
        <Route element={<PrivateRoute allowedRoles={['lab_technician', 'manager']} />}>
          <Route path="/lab" element={<LabDashboard />} />
        </Route>

        {/* Pharmacist */}
        <Route element={<PrivateRoute allowedRoles={['pharmacist', 'manager']} />}>
          <Route path="/pharmacy" element={<PharmacyDashboard />} />
        </Route>

        {/* Cashier */}
        <Route element={<PrivateRoute allowedRoles={['cashier', 'manager']} />}>
          <Route path="/cashier" element={<CashierDashboard />} />
        </Route>

        {/* Manager */}
        <Route element={<PrivateRoute allowedRoles={['manager']} />}>
          <Route path="/manager" element={<ManagerDashboard />} />
        </Route>

        {/* Catch-all */}
        <Route path="*" element={<Page404 />} />
      </Routes>
    </BrowserRouter>
  );
}
