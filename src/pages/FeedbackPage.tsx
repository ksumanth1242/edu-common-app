import React, { useState } from 'react';
import { Typography, Box, Paper } from '@mui/material';
import {
  Button,
  AppBadge,
  AppCard,
  AppDialog,
  AppIcon,
} from '../components/common';

export const FeedbackPage: React.FC = () => {
  const [dialogOpen, setDialogOpen] = useState(false);

  return (
    <>
      <Typography variant="h3" component="h1" gutterBottom>
        Feedback Components
      </Typography>

      <Typography variant="body1" paragraph color="text.secondary">
        Dialogs, badges, cards, and other components for user feedback and
        notifications.
      </Typography>

      <Box display="flex" flexDirection="column" gap={4}>
        {/* Badges */}
        <Paper elevation={2} sx={{ p: 3 }}>
          <Typography variant="h5" gutterBottom>
            Badges
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
            <AppBadge badgeContent="NEW" variant="warning">
              <AppIcon>⭐</AppIcon>
            </AppBadge>
          </Box>
        </Paper>

        {/* Cards */}
        <Paper elevation={2} sx={{ p: 3 }}>
          <Typography variant="h5" gutterBottom>
            Cards
          </Typography>
          <Box
            display="grid"
            gridTemplateColumns="repeat(auto-fit, minmax(300px, 1fr))"
            gap={3}
          >
            <AppCard
              header="Information Card"
              variant="elevation"
              elevation={2}
              actions={
                <Button variant="primary" size="small">
                  Learn More
                </Button>
              }
            >
              This is an informational card with content and actions.
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
              This card uses an outlined style without shadow.
            </AppCard>
          </Box>
        </Paper>

        {/* Dialogs */}
        <Paper elevation={2} sx={{ p: 3 }}>
          <Typography variant="h5" gutterBottom>
            Dialogs
          </Typography>
          <Box display="flex" gap={2}>
            <Button variant="primary" onClick={() => setDialogOpen(true)}>
              Open Dialog
            </Button>
          </Box>
        </Paper>

        {/* Icons */}
        <Paper elevation={2} sx={{ p: 3 }}>
          <Typography variant="h5" gutterBottom>
            Icons
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
      </Box>

      {/* Dialog Demo */}
      <AppDialog
        open={dialogOpen}
        onClose={() => setDialogOpen(false)}
        title="Feedback Dialog"
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
          This is a feedback dialog component demonstrating modal interactions.
        </Typography>
        <Typography paragraph>
          You can close it using the backdrop, ESC key, or action buttons.
        </Typography>
      </AppDialog>
    </>
  );
};
