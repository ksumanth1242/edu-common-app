import React, { useState } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import {
  Box,
  AppBar,
  Toolbar,
  Typography,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  IconButton,
  Container,
  Divider,
  Collapse,
  Button,
} from '@mui/material';
import {
  Menu as MenuIcon,
  Home as HomeIcon,
  Dashboard as DashboardIcon,
  SmartButton as ButtonIcon,
  Input as FormsIcon,
  Tab as NavigationIcon,
  Feedback as FeedbackIcon,
  Info as AboutIcon,
  Login as LoginIcon,
  Logout as LogoutIcon,
  ExpandLess,
  ExpandMore,
} from '@mui/icons-material';
import { primaryColor } from '../styles';
import { useAuth } from '../context/AuthContext';

const drawerWidth = 280;

interface NavigationItem {
  title: string;
  path: string;
  icon: React.ReactNode;
  requiresAuth?: boolean;
  children?: NavigationItem[];
}

const navigationItems: NavigationItem[] = [
  {
    title: 'Home',
    path: '/',
    icon: <HomeIcon />,
  },
  {
    title: 'Dashboard',
    path: '/dashboard',
    icon: <DashboardIcon />,
    requiresAuth: true,
  },
  {
    title: 'Components',
    path: '/components',
    icon: <FeedbackIcon />,
    children: [
      {
        title: 'Buttons',
        path: '/components/buttons',
        icon: <ButtonIcon />,
      },
      {
        title: 'Forms',
        path: '/components/forms',
        icon: <FormsIcon />,
      },
      {
        title: 'Navigation',
        path: '/components/navigation',
        icon: <NavigationIcon />,
      },
      {
        title: 'Feedback',
        path: '/components/feedback',
        icon: <FeedbackIcon />,
      },
    ],
  },
  {
    title: 'About',
    path: '/about',
    icon: <AboutIcon />,
  },
];

export const MainLayout: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [componentsOpen, setComponentsOpen] = useState(false);
  const location = useLocation();
  const { isAuthenticated, user, logout } = useAuth();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleComponentsClick = () => {
    setComponentsOpen(!componentsOpen);
  };

  const handleLogout = () => {
    logout();
  };

  const isActive = (path: string) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };

  // Filter navigation items based on authentication
  const filteredNavigationItems = navigationItems.filter(item => {
    if (item.requiresAuth && !isAuthenticated) {
      return false;
    }
    return true;
  });

  const NavList = () => (
    <Box sx={{ width: drawerWidth }}>
      <Toolbar>
        <Typography
          variant="h6"
          noWrap
          component="div"
          sx={{ color: primaryColor }}
        >
          Components Library
        </Typography>
      </Toolbar>
      <Divider />
      <List>
        {filteredNavigationItems.map(item => (
          <React.Fragment key={item.title}>
            {item.children ? (
              <>
                <ListItem disablePadding>
                  <ListItemButton
                    onClick={handleComponentsClick}
                    selected={isActive(item.path)}
                  >
                    <ListItemIcon
                      sx={{
                        color: isActive(item.path) ? primaryColor : 'inherit',
                      }}
                    >
                      {item.icon}
                    </ListItemIcon>
                    <ListItemText primary={item.title} />
                    {componentsOpen ? <ExpandLess /> : <ExpandMore />}
                  </ListItemButton>
                </ListItem>
                <Collapse in={componentsOpen} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
                    {item.children.map(child => (
                      <ListItem key={child.title} disablePadding>
                        <ListItemButton
                          component={Link}
                          to={child.path}
                          selected={isActive(child.path)}
                          sx={{ pl: 4 }}
                          onClick={() => setMobileOpen(false)}
                        >
                          <ListItemIcon
                            sx={{
                              color: isActive(child.path)
                                ? primaryColor
                                : 'inherit',
                            }}
                          >
                            {child.icon}
                          </ListItemIcon>
                          <ListItemText primary={child.title} />
                        </ListItemButton>
                      </ListItem>
                    ))}
                  </List>
                </Collapse>
              </>
            ) : (
              <ListItem disablePadding>
                <ListItemButton
                  component={Link}
                  to={item.path}
                  selected={isActive(item.path)}
                  onClick={() => setMobileOpen(false)}
                >
                  <ListItemIcon
                    sx={{
                      color: isActive(item.path) ? primaryColor : 'inherit',
                    }}
                  >
                    {item.icon}
                  </ListItemIcon>
                  <ListItemText primary={item.title} />
                </ListItemButton>
              </ListItem>
            )}
          </React.Fragment>
        ))}
      </List>
    </Box>
  );

  return (
    <Box sx={{ display: 'flex' }}>
      {/* App Bar */}
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          backgroundColor: primaryColor,
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
            React Components Library
          </Typography>
          
          {/* Auth buttons */}
          {isAuthenticated ? (
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <Typography variant="body2">
                Welcome, {user?.name}
              </Typography>
              <Button
                color="inherit"
                startIcon={<LogoutIcon />}
                onClick={handleLogout}
              >
                Logout
              </Button>
            </Box>
          ) : (
            <Button
              color="inherit"
              component={Link}
              to="/login"
              startIcon={<LoginIcon />}
            >
              Login
            </Button>
          )}
        </Toolbar>
      </AppBar>

      {/* Navigation Drawer */}
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* Mobile drawer */}
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better mobile performance
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
            },
          }}
        >
          <NavList />
        </Drawer>

        {/* Desktop drawer */}
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
            },
          }}
          open
        >
          <NavList />
        </Drawer>
      </Box>

      {/* Main content */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          mt: { xs: 8, sm: 8 }, // Account for AppBar height
        }}
      >
        <Container maxWidth="xl">
          <Outlet />
        </Container>
      </Box>
    </Box>
  );
};
