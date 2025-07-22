// src/pages/Membros/Membros.styles.ts
import { SxProps, Theme } from '@mui/material';

const styles: Record<string, SxProps<Theme>> = {
  containerActions: {
    display: 'flex',
    justifyContent: 'space-between',
    mb: 2,
  },
  dialogContent: {
    display: 'flex',
    flexDirection: 'column',
    gap: 2,
    mt: 1,
  },
};

export default styles;
