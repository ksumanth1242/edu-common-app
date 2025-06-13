import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { MainLayout, EmbeddedLayout } from '../layouts';
import { routeConfig } from './route-config';
import { generateRoutes } from './route-generator';

// Get environment configuration
const isEmbedded = process.env.REACT_APP_EMBEDDED === 'true';

// Generate routes from configuration
const appRoutes = generateRoutes(routeConfig);

// Choose layout based on environment variable
const routerConfig = [
  {
    path: '/',
    element: isEmbedded ? <EmbeddedLayout /> : <MainLayout />,
    children: appRoutes,
  },
];

export const router = createBrowserRouter(routerConfig);

// Router Provider Component
export const AppRouter: React.FC = () => {
  return <RouterProvider router={router} />;
};

// Export route configuration for use in navigation
export { routeConfig } from './route-config';
export { getRouteByPath, getProtectedRoutes, getRoutesByRole } from './route-config';
export type { RouteConfig, ProtectedRouteProps, NavigationItem } from './types';
