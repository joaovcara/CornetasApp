import React from 'react';
import {
  AppBar, Avatar, Toolbar, Typography, IconButton, Box
} from '@mui/material';
import NotificationsIcon from '@mui/icons-material/Notifications';

const Header: React.FC = () => (
  <AppBar position="static">
    <Toolbar>
      <Avatar alt="Cornetas FC" src="/img/Logo.png" sx={{ mr: 1, p: 0.5, background: '#CCC' }} />
      <Typography variant="h6" component="div">
        Cornetas FC Tupã
      </Typography>

      <Box sx={{ flexGrow: 1 }} /> {/* Empurra o conteúdo seguinte para a direita */}

      <IconButton color="inherit" aria-label="notificações">
        <NotificationsIcon />
      </IconButton>
    </Toolbar>
  </AppBar>
);

export default Header;
