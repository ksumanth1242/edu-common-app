import React from 'react';
import { 
  Box, 
  Typography, 
  Paper,
  Container
} from '@mui/material';
import { useAuth } from '../context/AuthContext';

export const DashboardPage: React.FC = () => {
  const { user } = useAuth();

  return (
    <Container maxWidth="xl">
      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Welcome back, {user?.name}!
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Here's what's happening with your dashboard today.
        </Typography>
      </Box>

      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
        <Paper sx={{ p: 3 }}>
          <Typography variant="h6" gutterBottom>
            Dashboard Overview
          </Typography>
          <Typography variant="body2" color="text.secondary">
            This is a protected dashboard page that requires authentication.
          </Typography>
        </Paper>

        <Paper sx={{ p: 3 }}>
          <Typography variant="h6" gutterBottom>
            Recent Activity
          </Typography>
          <Box sx={{ height: 200, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Typography color="text.secondary">
              Activity content would go here
            </Typography>
          </Box>
        </Paper>

        <Paper sx={{ p: 3 }}>
          <Typography variant="h6" gutterBottom>
            Quick Actions
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
            <Typography variant="body2">• Create new project</Typography>
            <Typography variant="body2">• Invite team members</Typography>
            <Typography variant="body2">• View reports</Typography>
            <Typography variant="body2">• Update settings</Typography>
          </Box>
        </Paper>
      </Box>
    </Container>
  );
}; 