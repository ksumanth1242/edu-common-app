import React from 'react';
import { Typography, Box, Paper, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const componentCategories = [
  {
    title: 'Buttons',
    description: 'Interactive button components with various styles and states',
    path: '/components/buttons',
    color: '#2563eb',
  },
  {
    title: 'Forms',
    description: 'Input fields, text areas, and form controls',
    path: '/components/forms',
    color: '#059669',
  },
  {
    title: 'Navigation',
    description: 'Tabs, breadcrumbs, and navigation components',
    path: '/components/navigation',
    color: '#dc2626',
  },
  {
    title: 'Feedback',
    description: 'Dialogs, badges, and notification components',
    path: '/components/feedback',
    color: '#7c3aed',
  },
];

export const ComponentsPage: React.FC = () => {
  return (
    <>
      <Typography variant="h3" component="h1" gutterBottom>
        Components Overview
      </Typography>

      <Typography variant="body1" paragraph color="text.secondary">
        Explore our comprehensive collection of reusable UI components built
        with React, TypeScript, and styled-components.
      </Typography>

      <Box
        display="grid"
        gridTemplateColumns="repeat(auto-fit, minmax(300px, 1fr))"
        gap={4}
        sx={{ mt: 2 }}
      >
        {componentCategories.map(category => (
          <Paper
            key={category.title}
            elevation={2}
            sx={{
              p: 3,
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              transition: 'transform 0.2s ease-in-out',
              '&:hover': {
                transform: 'translateY(-4px)',
                boxShadow: '0 8px 25px rgba(0,0,0,0.1)',
              },
            }}
          >
            <Box
              sx={{
                width: 60,
                height: 60,
                borderRadius: 2,
                backgroundColor: category.color,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                mb: 2,
                color: 'white',
                fontSize: '24px',
              }}
            >
              {category.title[0]}
            </Box>

            <Typography variant="h5" gutterBottom>
              {category.title}
            </Typography>

            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ flexGrow: 1, mb: 2 }}
            >
              {category.description}
            </Typography>

            <Button
              component={Link}
              to={category.path}
              variant="outlined"
              fullWidth
              sx={{ mt: 'auto' }}
            >
              Explore {category.title}
            </Button>
          </Paper>
        ))}
      </Box>

      <Box sx={{ mt: 6 }}>
        <Paper elevation={1} sx={{ p: 4, textAlign: 'center' }}>
          <Typography variant="h5" gutterBottom>
            Want to see everything at once?
          </Typography>
          <Typography variant="body1" paragraph color="text.secondary">
            Visit our comprehensive demo page to see all components in action.
          </Typography>
          <Button component={Link} to="/" variant="contained" size="large">
            View Full Demo
          </Button>
        </Paper>
      </Box>
    </>
  );
};
