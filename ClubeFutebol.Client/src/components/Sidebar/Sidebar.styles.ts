// src/components/Sidebar/Sidebar.styles.ts

import { SxProps, Theme } from '@mui/material';

export const drawerWidth = 100;

const styles: Record<string, SxProps<Theme>> = {
  drawer: {
    height: '100%',
    width: drawerWidth,
    [`& .MuiDrawer-paper`]: {
      width: drawerWidth,
      position: 'relative',
      height: '100%',
      borderRight: 'none',
      boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
      top: 0,
    },
  },
  listItem: {
    flexDirection: 'column',
    alignItems: 'center',
    cursor: 'pointer',
    py: 2,
  },
  listItemIcon: {
    minWidth: 0,
    justifyContent: 'center',
  },
  listItemText: {
    align: 'center',
    fontSize: 12,
  },
};

export default styles;
