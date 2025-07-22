// src/components/MainLayout/MainLayout.styles.ts

import { SxProps, Theme } from '@mui/material';

const styles: Record<string, SxProps<Theme>> = {
  layoutContainer: {
    height: '100vh',
    display: 'flex',
    flexDirection: 'row',
  },
  sidebar: {
    flexShrink: 0,
    height: '100vh',
  },
  contentWrapper: {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    minHeight: 0,
  },
  header: {
    flexShrink: 0,
  },
  mainContent: {
    flex: 1,
    overflow: 'auto',
    backgroundColor: '#f5f5f5',
  },
};

export default styles;
