import React, { ReactNode } from 'react';
import { Box } from '@mui/material';
import Header from '../Header/Header';
import Sidebar from '../Sidebar/Sidebar';

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => (
  <Box sx={{ height: '100vh', display: 'flex', flexDirection: 'row' }}>
    <Box sx={{ flexShrink: 0, height: '100vh' }}>
      <Sidebar />
    </Box>
    <Box sx={{ display: 'flex', flexDirection: 'column', flex: 1, minHeight: 0 }}>
      <Box sx={{ flexShrink: 0 }}>
        <Header />
      </Box>
      <Box component="main" sx={{ flex: 1, overflow: 'auto',backgroundColor: '#f5f5f5' }}>
        {children}
      </Box>
    </Box>
  </Box>
);

export default MainLayout;
