import React, { ReactNode } from 'react';
import { Box } from '@mui/material';
import Header from '../Header/Header';
import Sidebar from '../Sidebar/Sidebar';

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => (
  <Box sx={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
    <Header />
    <Box sx={{ display: 'flex', flex: 1 }}>
      <Sidebar />
      <Box component="main" sx={{ flex: 1, p: 3, bgcolor: 'background.default' }}>
        {children}
      </Box>
    </Box>
  </Box>
);

export default MainLayout;
