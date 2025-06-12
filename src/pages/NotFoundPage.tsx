import React from 'react';
import { Typography, Box, Button } from '@mui/material';
import { Link } from 'react-router-dom';

export const NotFoundPage: React.FC = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      minHeight="50vh"
      textAlign="center"
      gap={3}
    >
      <Typography
        variant="h1"
        component="h1"
        color="primary"
        sx={{ fontSize: '8rem', fontWeight: 'bold' }}
      >
        404
      </Typography>

      <Typography variant="h4" component="h2" gutterBottom>
        Page Not Found
      </Typography>

      <Typography variant="body1" color="text.secondary" paragraph>
        The page you're looking for doesn't exist or has been moved.
      </Typography>

      <Button
        component={Link}
        to="/"
        variant="contained"
        size="large"
        sx={{ mt: 2 }}
      >
        Go Back Home
      </Button>
    </Box>
  );
};
