import { useState } from 'react';
import { TextField, Button, Box, Typography, Container, Paper } from '@mui/material';
import api from '../../services/api';
import { useNavigate } from 'react-router-dom';
import styles from './Login.styles';

export default function Login() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [erro, setErro] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await api.post('/auth/login', { email, senha });
      localStorage.setItem('token', response.data.token);
      navigate('/membros');
    } catch (err) {
      setErro('Usuário ou senha inválidos');
    }
  };

  return (
    <Box sx={styles.root}>
      <Container maxWidth="sm">
        <Paper elevation={3} sx={styles.paper}>
          <Box sx={styles.logoContainer}>
            <Box
              component="img"
              src="/img/icon.png"
              alt="Logo"
              sx={styles.logoImage}
            />
            <Typography variant="h5" gutterBottom align="center">
              Football Club App
            </Typography>
          </Box>

          <Typography variant="h5" gutterBottom align="center">
            Login
          </Typography>

          <Box sx={styles.formContainer}>
            <TextField
              label="Email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              fullWidth
            />

            <TextField
              label="Senha"
              type="password"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              fullWidth
            />

            {erro && (
              <Typography sx={styles.errorText}>
                {erro}
              </Typography>
            )}

            <Button variant="contained" onClick={handleLogin}>
              Entrar
            </Button>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
}
