import React, { useState } from 'react';
import { Typography, Box, Paper } from '@mui/material';
import { AppTabs } from '../components/common';

export const NavigationPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('Tab 1');
  const [activeTab2, setActiveTab2] = useState('Settings');

  const tabLabels = ['Tab 1', 'Tab 2', 'Tab 3'];
  const tabCounts = [
    { label: 'Tab 1', value: 5 },
    { label: 'Tab 2', value: 12 },
    { label: 'Tab 3', value: 3 },
  ];

  return (
    <>
      <Typography variant="h3" component="h1" gutterBottom>
        Navigation Components
      </Typography>

      <Typography variant="body1" paragraph color="text.secondary">
        Tab navigation and other navigation components for organizing content.
      </Typography>

      <Box display="flex" flexDirection="column" gap={4}>
        {/* Basic Tabs */}
        <Paper elevation={2} sx={{ p: 3 }}>
          <Typography variant="h5" gutterBottom>
            Basic Tabs
          </Typography>
          <AppTabs
            labels={tabLabels}
            selectedLabel={activeTab}
            onClick={setActiveTab}
            type="primary"
          />
          <Box p={2} mt={2} bgcolor="grey.50" borderRadius={1}>
            <Typography>Selected Tab: {activeTab}</Typography>
          </Box>
        </Paper>

        {/* Tabs with Counts */}
        <Paper elevation={2} sx={{ p: 3 }}>
          <Typography variant="h5" gutterBottom>
            Tabs with Counts
          </Typography>
          <AppTabs
            labels={tabLabels}
            selectedLabel={activeTab}
            onClick={setActiveTab}
            type="primary"
            count={tabCounts}
          />
        </Paper>

        {/* Different Tab Types */}
        <Paper elevation={2} sx={{ p: 3 }}>
          <Typography variant="h5" gutterBottom>
            Different Tab Types
          </Typography>
          <Box display="flex" flexDirection="column" gap={3}>
            <Box>
              <Typography variant="h6" gutterBottom>
                Blue Color Type
              </Typography>
              <AppTabs
                labels={['Settings', 'Profile', 'Account']}
                selectedLabel={activeTab2}
                onClick={setActiveTab2}
                type="BlueColor"
              />
            </Box>

            <Box>
              <Typography variant="h6" gutterBottom>
                Secondary Type
              </Typography>
              <AppTabs
                labels={['Home', 'About', 'Contact']}
                selectedLabel="Home"
                onClick={() => {}}
                type="secondary"
              />
            </Box>
          </Box>
        </Paper>
      </Box>
    </>
  );
};
