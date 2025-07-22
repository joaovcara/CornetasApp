import { Routes, Route } from 'react-router-dom';
import Login from '../pages/Login';
import Membros from '../pages/Membros';
import MainLayout from '../components/Layout/MainLayout';
import ProtectedRoute from './ProtectedRoute';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route
        path="/membros"
        element={
          <ProtectedRoute>
            <MainLayout>
              <Membros />
            </MainLayout>
          </ProtectedRoute>
        }
      />
      {/* Adicione outras páginas aqui, sempre dentro do MainLayout */}
    </Routes>
  );
}
