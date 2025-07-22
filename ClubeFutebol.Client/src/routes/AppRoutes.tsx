import { Routes, Route } from 'react-router-dom';
import Login from '../pages/Login/Login';
import Membros from '../pages/Membros/Membros';
import ProtectedRoute from './ProtectedRoute';
import MainLayout from '../components/Layouts/Layout/Main/MainLayout';

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
