import React, { useEffect } from 'react';
import { Typography, Box, Paper, Chip } from '@mui/material';
import { useSupabase } from '@app/context/SupabaseContext';
import { useAppData } from '@app/context/AppDataContext';
const technologies = [
  'React 19.1.0',
  'TypeScript 4.9.5',
  'Material UI 7.1.1',
  'Styled Components 6.1.18',
  'React Router DOM',
  'Jest & Testing Library',
];

export const AboutPage: React.FC = () => {

  const { session, supabase } = useSupabase();
  const { user, setUser, globalEvent, setGlobalEvent } = useAppData();

  // useEffect(() => {
  //   alert(session)
  //   console.log(supabase)
  // }, [])

    useEffect(() => {
      setUser('narsi')
  }, [])

  return (
    <>
      <Typography variant="h3" component="h1" gutterBottom>
        About This Library--
      </Typography>

      <Typography variant="body1" paragraph color="text.secondary">
        A comprehensive React component library built with modern web
        technologies.
      </Typography>

      <Box display="flex" flexDirection="column" gap={4}>
        {/* Overview */}
        <Paper elevation={2} sx={{ p: 3 }}>
          <Typography variant="h5" gutterBottom>
            Overview-{user}
          </Typography>
          <Typography paragraph>
            This component library demonstrates best practices for building
            reusable UI components in React with TypeScript. It combines the
            power of Material UI with custom styled components to create a
            flexible and maintainable design system.
          </Typography>
          <Typography paragraph>
            All components are built with accessibility in mind, featuring
            proper ARIA attributes, keyboard navigation support, and semantic
            HTML structures.
          </Typography>
        </Paper>

        {/* Technologies Used */}
        <Paper elevation={2} sx={{ p: 3 }}>
          <Typography variant="h5" gutterBottom>
            Technologies Used
          </Typography>
          <Box display="flex" flexWrap="wrap" gap={1}>
            {technologies.map(tech => (
              <Chip key={tech} label={tech} variant="outlined" />
            ))}
          </Box>
        </Paper>

        {/* Features */}
        <Paper elevation={2} sx={{ p: 3 }}>
          <Typography variant="h5" gutterBottom>
            Key Features
          </Typography>
          <Box component="ul" sx={{ pl: 2 }}>
            <Typography component="li" paragraph>
              <strong>Type Safety:</strong> Full TypeScript support with proper
              interfaces and type checking
            </Typography>
            <Typography component="li" paragraph>
              <strong>Accessibility:</strong> WCAG compliant components with
              ARIA attributes and keyboard navigation
            </Typography>
            <Typography component="li" paragraph>
              <strong>Customizable:</strong> Flexible theming system with
              styled-components
            </Typography>
            <Typography component="li" paragraph>
              <strong>Responsive:</strong> Mobile-first design approach with
              responsive layouts
            </Typography>
            <Typography component="li" paragraph>
              <strong>Testing:</strong> Comprehensive test coverage with Jest
              and Testing Library
            </Typography>
            <Typography component="li" paragraph>
              <strong>Performance:</strong> Optimized bundle size and runtime
              performance
            </Typography>
          </Box>
        </Paper>

        {/* Getting Started */}
        <Paper elevation={2} sx={{ p: 3 }}>
          <Typography variant="h5" gutterBottom>
            Getting Started
          </Typography>
          <Typography paragraph>
            This library is designed to be easy to use and integrate into
            existing React applications. Each component is self-contained and
            can be imported individually to minimize bundle size.
          </Typography>
          <Typography paragraph>
            Check out the component documentation and examples in the navigation
            menu to get started with implementing these components in your own
            projects.
          </Typography>
        </Paper>
      </Box>
    </>
  );
};
