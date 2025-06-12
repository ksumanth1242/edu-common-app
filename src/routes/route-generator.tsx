import React from 'react';
import { RouteObject } from 'react-router-dom';
import { RouteConfig } from './types';
import { ProtectedRoute } from '../components/ProtectedRoute';

/**
 * Converts a RouteConfig to a React Router v6 RouteObject
 */
export const convertToRouteObject = (config: RouteConfig): RouteObject => {
  const { component: Component, title, requiresAuth, allowedRoles, ...rest } = config;

  return {
    path: config.path,
    element: (
      <ProtectedRoute
        pageTitle={title}
        requiresAuth={requiresAuth}
        allowedRoles={allowedRoles}
      >
        <Component />
      </ProtectedRoute>
    ),
    // Handle children routes if they exist
    children: config.children?.map(convertToRouteObject),
  };
};

/**
 * Generates React Router v6 routes from route configuration
 */
export const generateRoutes = (routeConfigs: RouteConfig[]): RouteObject[] => {
  return routeConfigs.map(convertToRouteObject);
};

/**
 * Route wrapper component that handles titles and protection
 */
export const RouteWrapper: React.FC<{
  component: React.ComponentType;
  title?: string;
  requiresAuth?: boolean;
  allowedRoles?: string[];
}> = ({ component: Component, title, requiresAuth, allowedRoles }) => {
  return (
    <ProtectedRoute
      pageTitle={title}
      requiresAuth={requiresAuth}
      allowedRoles={allowedRoles}
    >
      <Component />
    </ProtectedRoute>
  );
}; 