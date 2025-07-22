import React, { ReactNode } from 'react';
import { Box } from '@mui/material';
import Header from '../../Header/Header';
import Sidebar from '../../Sidebar/Sidebar';
import styles from './MainLayout.styles';

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => (
  <Box sx={styles.layoutContainer}>
    <Box sx={styles.sidebar}>
      <Sidebar />
    </Box>
    <Box sx={styles.contentWrapper}>
      <Box sx={styles.header}>
        <Header />
      </Box>
      <Box component="main" sx={styles.mainContent}>
        {children}
      </Box>
    </Box>
  </Box>
);

export default MainLayout;
