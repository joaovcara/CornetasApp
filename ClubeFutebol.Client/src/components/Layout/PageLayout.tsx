import React from 'react';
import { Container, Paper, Typography, Box } from '@mui/material';

interface PageLayoutProps {
  title: string;
  children: React.ReactNode;
}

const PageLayout: React.FC<PageLayoutProps> = ({ title, children }) => {
  return (
    <Container maxWidth={false} sx={{ py: 2 }}>
      <Paper elevation={2} sx={{ borderRadius: 2, p: 2 }}>
        <Box sx={{ borderBottom: '1px solid #eee', mb: 3, pb: 2 }}>
          <Typography variant="h4" component="h1" sx={{
            color: '#009d37ff'
          }}>
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
