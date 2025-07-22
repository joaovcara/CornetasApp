import React from 'react';
import { Container, Paper, Typography, Box, Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import styles from './PageLayout.styles';

interface PageLayoutProps {
  title: string;
  children: React.ReactNode;
  icon?: React.ReactNode;
  onAddClick?: () => void;
}

const PageLayout: React.FC<PageLayoutProps> = ({ title, children, icon, onAddClick }) => {
  return (
    <Container maxWidth={false} sx={styles.container}>
      <Paper elevation={2} sx={styles.paper}>
        <Box
          sx={{
            ...styles.titleBox,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <Box sx={styles.icon}>
              {icon}
            </Box>
            <Typography variant="h4" component="h1" sx={styles.titleText}>
              {title}
            </Typography>
          </Box>
          {onAddClick && (
            <Button variant="contained" startIcon={<AddIcon />} onClick={onAddClick}>
              Adicionar
            </Button>
          )}
        </Box>
        <Box>{children}</Box>
      </Paper>
    </Container>
  );
};

export default PageLayout;
