import React from 'react';
import { Container, Paper, Typography, Box } from '@mui/material';
import styles from './PageLayout.styles';

interface PageLayoutProps {
  title: string;
  children: React.ReactNode;
}

const PageLayout: React.FC<PageLayoutProps> = ({ title, children }) => {
  return (
    <Container maxWidth={false} sx={styles.container}>
      <Paper elevation={2} sx={styles.paper}>
        <Box sx={styles.titleBox}>
          <Typography variant="h4" component="h1" sx={styles.titleText}>
            {title}
          </Typography>
        </Box>
        <Box>
          {children}
        </Box>
      </Paper>
    </Container>
  );
};

export default PageLayout;
