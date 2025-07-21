import { Routes, Route } from 'react-router-dom';
import Login from '../pages/Login';
import Membros from '../pages/Membros';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/membros" element={<Membros />} />
    </Routes>
  );
}
