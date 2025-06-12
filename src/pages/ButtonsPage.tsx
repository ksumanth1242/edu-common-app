import React from 'react';
import { Typography, Box, Paper } from '@mui/material';
import { Button } from '../components/common';

export const ButtonsPage: React.FC = () => {
  return (
    <>
      <Typography variant="h3" component="h1" gutterBottom>
        Button Components
      </Typography>

      <Typography variant="body1" paragraph color="text.secondary">
        Interactive button components with various styles, sizes, and states.
      </Typography>

      <Box display="flex" flexDirection="column" gap={4}>
        {/* Variants */}
        <Paper elevation={2} sx={{ p: 3 }}>
          <Typography variant="h5" gutterBottom>
            Button Variants
          </Typography>
          <Box display="flex" flexWrap="wrap" gap={2}>
            <Button variant="primary">Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="success">Success</Button>
            <Button variant="danger">Danger</Button>
            <Button variant="outlined">Outlined</Button>
          </Box>
        </Paper>

        {/* Sizes */}
        <Paper elevation={2} sx={{ p: 3 }}>
          <Typography variant="h5" gutterBottom>
            Button Sizes
          </Typography>
          <Box display="flex" flexWrap="wrap" gap={2} alignItems="center">
            <Button variant="primary" size="small">
              Small
            </Button>
            <Button variant="primary" size="medium">
              Medium
            </Button>
            <Button variant="primary" size="large">
              Large
            </Button>
          </Box>
        </Paper>

        {/* States */}
        <Paper elevation={2} sx={{ p: 3 }}>
          <Typography variant="h5" gutterBottom>
            Button States
          </Typography>
          <Box display="flex" flexWrap="wrap" gap={2}>
            <Button variant="primary">Normal</Button>
            <Button variant="primary" disabled>
              Disabled
            </Button>
          </Box>
        </Paper>
      </Box>
    </>
  );
};
