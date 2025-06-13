import React, { useState } from 'react';
import { Typography, Box, Paper } from '@mui/material';
import {
  Button,
  TextField,
  TextArea,
  SearchField,
  AppTabs,
  AppBadge,
  AppCard,
  AppDialog,
  AppDropdown,
  AppIcon,
} from '../components/common';
import { useAppData } from '@app/context/AppDataContext';

export const HomePage: React.FC = () => {
  const [textValue, setTextValue] = useState('');
  const [textAreaValue, setTextAreaValue] = useState('');
  const [searchValue, setSearchValue] = useState('');
  const [activeTab, setActiveTab] = useState('Tab 1');
  const [dialogOpen, setDialogOpen] = useState(false);
  const [dropdownValue, setDropdownValue] = useState<string | number>('');
  const { user, setUser, globalEvent, setGlobalEvent } = useAppData();
  const handleSearch = (value: string) => {
    // Search functionality implementation would go here
    alert(`Searching for: ${value}`);
  };

  const handleButtonClick = () => {
    // Button click functionality would go here
    alert('Button clicked!');
  };

  const tabLabels = ['Tab 1', 'Tab 2', 'Tab 3'];
  const tabCounts = [
    { label: 'Tab 1', value: 5 },
    { label: 'Tab 2', value: 12 },
    { label: 'Tab 3', value: 3 },
  ];

  const dropdownOptions = [
    { label: 'Option 1', value: '1' },
    { label: 'Option 2', value: '2' },
    { label: 'Option 3', value: '3', disabled: true },
    { label: 'Option 4', value: '4' },
  ];

  return (
    <>
      <Typography variant="h3" component="h1" gutterBottom align="center">
        React Components Library Demo
      </Typography>

      <Typography
        variant="body1"
        paragraph
        align="center"
        color="text.secondary"
      >
        Comprehensive collection of reusable styled components with Material UI
        integration--{user}
      </Typography>

      <Box display="flex" flexDirection="column" gap={4}>
        {/* Button Components */}
        <Paper elevation={2} sx={{ p: 3 }}>
          <Typography variant="h5" gutterBottom>
            Button Components
          </Typography>
          <Box display="flex" flexWrap="wrap" gap={2}>
            <Button variant="primary" onClick={handleButtonClick}>
              Primary
            </Button>
            <Button variant="secondary" onClick={handleButtonClick}>
              Secondary
            </Button>
            <Button variant="danger" onClick={handleButtonClick}>
              Danger
            </Button>
            <Button variant="success" onClick={handleButtonClick}>
              Success
            </Button>
            <Button variant="outlined" onClick={handleButtonClick}>
              Outlined
            </Button>
            <Button variant="primary" size="small">
              Small
            </Button>
            <Button variant="primary" size="large">
              Large
            </Button>
            <Button variant="primary" disabled>
              Disabled
            </Button>
          </Box>
        </Paper>

        {/* TextField Components */}
        <Paper elevation={2} sx={{ p: 3 }}>
          <Typography variant="h5" gutterBottom>
            Text Field Components
          </Typography>
          <Box display="flex" flexDirection="column" gap={2}>
            <TextField
              label="Name"
              placeholder="Enter your name"
              value={textValue}
              onChange={e => setTextValue(e.target.value)}
            />
            <TextField
              label="Email"
              type="email"
              placeholder="your.email@example.com"
              required
            />
            <TextField
              label="Error Example"
              error
              helperText="This field has an error"
            />
            <TextField
              label="Small Size"
              size="small"
              placeholder="Small text field"
            />
          </Box>
        </Paper>

        {/* TextArea Components */}
        <Paper elevation={2} sx={{ p: 3 }}>
          <Typography variant="h5" gutterBottom>
            Text Area Components
          </Typography>
          <Box display="flex" flexDirection="column" gap={2}>
            <TextArea
              label="Description"
              placeholder="Enter a description..."
              value={textAreaValue}
              onChange={e => setTextAreaValue(e.target.value)}
              rows={4}
            />
            <TextArea
              label="Comments"
              placeholder="Your comments..."
              maxLength={100}
              showCharacterCount
              rows={3}
            />
          </Box>
        </Paper>

        {/* Search Components */}
        <Paper elevation={2} sx={{ p: 3 }}>
          <Typography variant="h5" gutterBottom>
            Search Components
          </Typography>
          <Box display="flex" flexDirection="column" gap={2}>
            <SearchField
              placeholder="Search users..."
              value={searchValue}
              onChange={setSearchValue}
              onSearch={handleSearch}
              label="User Search"
            />
            <SearchField
              placeholder="Instant search..."
              searchOnType={true}
              onSearch={handleSearch}
              size="small"
            />
            <SearchField
              placeholder="Search without clear button..."
              showClearButton={false}
              onSearch={handleSearch}
            />
          </Box>
        </Paper>

        {/* Tabs Components */}
        <Paper elevation={2} sx={{ p: 3 }}>
          <Typography variant="h5" gutterBottom>
            Tabs Components
          </Typography>
          <Box display="flex" flexDirection="column" gap={3}>
            <AppTabs
              labels={tabLabels}
              selectedLabel={activeTab}
              onClick={setActiveTab}
              type="primary"
              count={tabCounts}
            />
            <AppTabs
              labels={['Settings', 'Profile', 'Account']}
              selectedLabel="Settings"
              onClick={() => {}}
              type="BlueColor"
            />
            <Box p={2} bgcolor="grey.50" borderRadius={1}>
              <Typography>Selected Tab: {activeTab}</Typography>
            </Box>
          </Box>
        </Paper>

        {/* Badge Components */}
        <Paper elevation={2} sx={{ p: 3 }}>
          <Typography variant="h5" gutterBottom>
            Badge Components
          </Typography>
          <Box display="flex" flexWrap="wrap" gap={4} alignItems="center">
            <AppBadge badgeContent={4} variant="primary">
              <AppIcon size="large">📧</AppIcon>
            </AppBadge>
            <AppBadge badgeContent={99} variant="error" max={99}>
              <AppIcon size="large">🔔</AppIcon>
            </AppBadge>
            <AppBadge badgeContent={150} variant="success" max={99}>
              <AppIcon size="large">💬</AppIcon>
            </AppBadge>
            <AppBadge badgeContent="NEW" variant="warning" size="small">
              <AppIcon>⭐</AppIcon>
            </AppBadge>
            <AppBadge badgeContent={0} variant="info" showZero>
              <AppIcon>📋</AppIcon>
            </AppBadge>
          </Box>
        </Paper>

        {/* Card Components */}
        <Paper elevation={2} sx={{ p: 3 }}>
          <Typography variant="h5" gutterBottom>
            Card Components
          </Typography>
          <Box
            display="grid"
            gridTemplateColumns="repeat(auto-fit, minmax(300px, 1fr))"
            gap={3}
          >
            <AppCard
              header="Elevation Card"
              variant="elevation"
              elevation={2}
              actions={
                <Button variant="primary" size="small">
                  Action
                </Button>
              }
            >
              This is a card with elevation shadow effect.
            </AppCard>

            <AppCard
              header="Outlined Card"
              variant="outlined"
              actions={
                <Box display="flex" gap={1}>
                  <Button variant="secondary" size="small">
                    Cancel
                  </Button>
                  <Button variant="primary" size="small">
                    Save
                  </Button>
                </Box>
              }
            >
              This is an outlined card without shadow.
            </AppCard>

            <AppCard
              variant="flat"
              raised
              onClick={() => alert('Card clicked!')}
            >
              <Typography variant="h6" gutterBottom>
                Clickable Card
              </Typography>
              <Typography variant="body2">
                This card has hover effects and is clickable.
              </Typography>
            </AppCard>
          </Box>
        </Paper>

        {/* Dropdown Components */}
        <Paper elevation={2} sx={{ p: 3 }}>
          <Typography variant="h5" gutterBottom>
            Dropdown Components
          </Typography>
          <Box
            display="grid"
            gridTemplateColumns="repeat(auto-fit, minmax(250px, 1fr))"
            gap={3}
          >
            <AppDropdown
              options={dropdownOptions}
              value={dropdownValue}
              onChange={setDropdownValue}
              placeholder="Choose an option"
              variant="outlined"
            />
            <AppDropdown
              options={dropdownOptions}
              placeholder="Filled variant"
              variant="filled"
              helperText="This is a filled dropdown"
            />
            <AppDropdown
              options={dropdownOptions}
              placeholder="Standard variant"
              variant="standard"
              size="small"
            />
            <AppDropdown
              options={dropdownOptions}
              placeholder="With error"
              error
              helperText="Please select an option"
            />
          </Box>
        </Paper>

        {/* Icon Components */}
        <Paper elevation={2} sx={{ p: 3 }}>
          <Typography variant="h5" gutterBottom>
            Icon Components
          </Typography>
          <Box display="flex" flexWrap="wrap" gap={3} alignItems="center">
            <AppIcon size="small" color="primary">
              🏠
            </AppIcon>
            <AppIcon size="medium" color="secondary">
              ⚙️
            </AppIcon>
            <AppIcon size="large" color="inherit">
              ❤️
            </AppIcon>
            <AppIcon size={48} color="#ff6b6b">
              🎨
            </AppIcon>
            <AppIcon
              size="large"
              color="primary"
              onClick={() => alert('Icon clicked!')}
            >
              🚀
            </AppIcon>
          </Box>
        </Paper>

        {/* Dialog Components */}
        <Paper elevation={2} sx={{ p: 3 }}>
          <Typography variant="h5" gutterBottom>
            Dialog Components
          </Typography>
          <Box display="flex" gap={2}>
            <Button variant="primary" onClick={() => setDialogOpen(true)}>
              Open Dialog
            </Button>
          </Box>
        </Paper>
      </Box>

      {/* Dialog Demo */}
      <AppDialog
        open={dialogOpen}
        onClose={() => setDialogOpen(false)}
        title="Sample Dialog"
        maxWidth="sm"
        fullWidth
        actions={
          <Box display="flex" gap={1}>
            <Button variant="secondary" onClick={() => setDialogOpen(false)}>
              Cancel
            </Button>
            <Button variant="primary" onClick={() => setDialogOpen(false)}>
              Confirm
            </Button>
          </Box>
        }
      >
        <Typography paragraph>
          This is a sample dialog demonstrating the AppDialog component.
        </Typography>
        <Typography paragraph>
          It includes a title, content area, and action buttons. The dialog can
          be closed by clicking the backdrop, pressing Escape, or using the
          action buttons.
        </Typography>
      </AppDialog>
    </>
  );
};
