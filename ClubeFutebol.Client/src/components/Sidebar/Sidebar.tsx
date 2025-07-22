import React, { FC } from 'react';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, ListItemButton } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import GroupIcon from '@mui/icons-material/Group';
import LoginIcon from '@mui/icons-material/Login';
import { Link } from 'react-router-dom';

const drawerWidth = 100;

const Sidebar: FC = () => (
  <Drawer
    variant="permanent"
    anchor="left"
    sx={{
      height: '100%',
      width: drawerWidth,
      [`& .MuiDrawer-paper`]: {
        width: drawerWidth,
        position: 'relative',
        height: '100%',
        top: 0,
      },
    }}
  >
    <List>
      <ListItem
      component={Link}
      to="/membros"
      sx={{
        flexDirection: 'column',
        alignItems: 'center',
        cursor: 'pointer',
        py: 2,
      }}
      >
      <ListItemIcon sx={{ minWidth: 0, justifyContent: 'center' }}>
        <GroupIcon fontSize="large" />
      </ListItemIcon>
      <ListItemText
        primary="Membros"
        primaryTypographyProps={{ align: 'center', fontSize: 12 }}
      />
      </ListItem>
      <ListItemButton
      onClick={() => {
        localStorage.removeItem('token');
        window.location.href = '/';
      }}
      sx={{
        flexDirection: 'column',
        alignItems: 'center',
        cursor: 'pointer',
        py: 2,
      }}
      >
      <ListItemIcon sx={{ minWidth: 0, justifyContent: 'center' }}>
        <LoginIcon fontSize="large" />
      </ListItemIcon>
      <ListItemText
        primary="Logout"
        primaryTypographyProps={{ align: 'center', fontSize: 12 }}
      />
      </ListItemButton>
    </List>
  </Drawer>
);

export default Sidebar;
