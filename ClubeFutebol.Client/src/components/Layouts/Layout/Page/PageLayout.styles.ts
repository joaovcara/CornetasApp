// src/components/PageLayout/PageLayout.styles.ts

import { SxProps, Theme } from '@mui/material';

const styles: Record<string, SxProps<Theme>> = {
  container: {
    py: 2,
  },
  paper: {
    borderRadius: 2,
    p: 2,
  },
  titleBox: {
    borderBottom: '1px solid #eee',
    mb: 3,
    pb: 2,
  },
  titleText: {
    color: theme => theme.palette.primary.main,
  },
  icon: {
    color: theme => theme.palette.primary.main,
  },
};

export default styles;
