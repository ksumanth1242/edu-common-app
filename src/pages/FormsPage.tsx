import React, { useState } from 'react';
import { Typography, Box, Paper } from '@mui/material';
import {
  TextField,
  TextArea,
  SearchField,
  AppDropdown,
} from '../components/common';

export const FormsPage: React.FC = () => {
  const [textValue, setTextValue] = useState('');
  const [textAreaValue, setTextAreaValue] = useState('');
  const [searchValue, setSearchValue] = useState('');
  const [dropdownValue, setDropdownValue] = useState<string | number>('');

  const dropdownOptions = [
    { label: 'Option 1', value: '1' },
    { label: 'Option 2', value: '2' },
    { label: 'Option 3', value: '3' },
  ];

  return (
    <>
      <Typography variant="h3" component="h1" gutterBottom>
        Form Components
      </Typography>

      <Typography variant="body1" paragraph color="text.secondary">
        Input fields, text areas, dropdowns, and form controls for data
        collection.
      </Typography>

      <Box display="flex" flexDirection="column" gap={4}>
        {/* Text Fields */}
        <Paper elevation={2} sx={{ p: 3 }}>
          <Typography variant="h5" gutterBottom>
            Text Fields
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
          </Box>
        </Paper>

        {/* Text Areas */}
        <Paper elevation={2} sx={{ p: 3 }}>
          <Typography variant="h5" gutterBottom>
            Text Areas
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

        {/* Search Fields */}
        <Paper elevation={2} sx={{ p: 3 }}>
          <Typography variant="h5" gutterBottom>
            Search Fields
          </Typography>
          <Box display="flex" flexDirection="column" gap={2}>
            <SearchField
              placeholder="Search users..."
              value={searchValue}
              onChange={setSearchValue}
              onSearch={value => alert(`Searching: ${value}`)}
              label="User Search"
            />
            <SearchField
              placeholder="Instant search..."
              searchOnType={true}
              onSearch={value => alert(`Searching: ${value}`)}
              size="small"
            />
          </Box>
        </Paper>

        {/* Dropdowns */}
        <Paper elevation={2} sx={{ p: 3 }}>
          <Typography variant="h5" gutterBottom>
            Dropdowns
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
            />
            <AppDropdown
              options={dropdownOptions}
              placeholder="Standard variant"
              variant="standard"
            />
          </Box>
        </Paper>
      </Box>
    </>
  );
};
