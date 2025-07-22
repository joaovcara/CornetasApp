import React from 'react';
import {
  AppBar, Avatar, Toolbar, Typography, IconButton, Box
} from '@mui/material';
import NotificationsIcon from '@mui/icons-material/Notifications';
import styles from './Header.styles';

const Header: React.FC = () => (
  <AppBar position="static">
    <Toolbar>
      <Box
        component="img"
        src="/img/Logo.png"
        alt="Logo"
        sx={styles.avatar}
      />
      <Typography variant="h6" component="div">
        Cornetas FC Tupã
      </Typography>

      <Box sx={styles.grow} /> {/* Empurra o conteúdo seguinte para a direita */}

      <IconButton color="inherit" aria-label="notificações">
        <NotificationsIcon />
      </IconButton>
    </Toolbar>
  </AppBar>
);

export default Header;
