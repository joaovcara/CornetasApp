// src/components/Login/Login.styles.ts
import { SxProps, Theme } from '@mui/material';

const styles: Record<string, SxProps<Theme>> = {
  root: {
    minHeight: '100vh',
    backgroundColor: '#009d37ff',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    p: 2,
  },
  paper: {
    padding: 4,
  },
  logoContainer: {
    mb: 2,
    textAlign: 'center',
  },
  logoImage: {
    width: '100px',
    height: 'auto',
  },
  formContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: 2,
  },
  errorText: {
    color: 'error.main',
    fontSize: 14,
  },
};

export default styles;
