import { useState } from 'react';
import { TextField, Button, Box, Typography, Container, Paper } from '@mui/material';
import api from '../api/api';
import { useNavigate } from 'react-router-dom';

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
    <Box
      sx={{
        minHeight: '100vh',
        backgroundColor: '#009d37ff',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        p: 2
      }}
    >
      <Container maxWidth="sm">
        <Paper elevation={3} sx={{ padding: 4 }}>
          <Box sx={{ mb: 2, textAlign: 'center' }}>
            <img
              src="/img/icon.png" // Substitua pelo caminho correto da imagem
              alt="Logo"
              style={{ width: '100px', height: 'auto' }}
            />
            <Typography variant="h5" gutterBottom align="center">
              Football Club App
            </Typography>
          </Box>

          <Typography variant="h5" gutterBottom align="center">
            Login
          </Typography>

          <Box display="flex" flexDirection="column" gap={2}>
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
              <Typography color="error" fontSize={14}>
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
