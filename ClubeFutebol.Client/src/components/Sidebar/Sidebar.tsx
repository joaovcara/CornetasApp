import React, { FC } from 'react';
import { Drawer, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import GroupIcon from '@mui/icons-material/Group';
import LoginIcon from '@mui/icons-material/Login';
import { Link } from 'react-router-dom';

const drawerWidth = 240;

const Sidebar: FC = () => (
  <Drawer
    variant="permanent"
    sx={{
      width: drawerWidth,
      flexShrink: 0,
      [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
    }}
  >
    <List>
      <ListItem button component={Link as any} to="/">
        <ListItemIcon><HomeIcon /></ListItemIcon>
        <ListItemText primary="Home" />
      </ListItem>
      <ListItem button component={Link as any} to="/membros">
        <ListItemIcon><GroupIcon /></ListItemIcon>
        <ListItemText primary="Membros" />
      </ListItem>
      <ListItem component="button" onClick={() => {
        localStorage.removeItem('token');
        window.location.href = '/';
      }}>
        <ListItemIcon><LoginIcon /></ListItemIcon>
        <ListItemText primary="Logout" />
      </ListItem>
    </List>
  </Drawer>
);

export default Sidebar;
