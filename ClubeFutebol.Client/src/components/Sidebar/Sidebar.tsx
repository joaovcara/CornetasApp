import React, { FC } from 'react';
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListItemButton,
  Typography,
} from '@mui/material';
import GroupIcon from '@mui/icons-material/Group';
import LoginIcon from '@mui/icons-material/Login';
import { Link } from 'react-router-dom';
import styles from './Sidebar.styles';

const Sidebar: FC = () => (
  <Drawer variant="permanent" anchor="left" sx={styles.drawer}>
    <List>
      <ListItem
        component={Link}
        to="/membros"
        sx={styles.listItem}
      >
        <ListItemIcon sx={styles.listItemIcon}>
          <GroupIcon fontSize="large" />
        </ListItemIcon>
        <ListItemText
          primary={
            <Typography variant="body2" align="center" fontSize={12}>
              Membros
            </Typography>
          }
        />
      </ListItem>

      <ListItemButton
        onClick={() => {
          localStorage.removeItem('token');
          window.location.href = '/';
        }}
        sx={styles.listItem}
      >
        <ListItemIcon sx={styles.listItemIcon}>
          <LoginIcon fontSize="large" />
        </ListItemIcon>
        <ListItemText
          primary={
            <Typography variant="body2" align="center" fontSize={12}>
              Logout
            </Typography>
          }
        />
      </ListItemButton>
    </List>
  </Drawer>
);

export default Sidebar;
