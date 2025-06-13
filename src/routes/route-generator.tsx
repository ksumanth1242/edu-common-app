import React from 'react';
import { RouteObject } from 'react-router-dom';
import { RouteConfig } from './types';
import { ProtectedRoute } from '@app/components/ProtectedRoute';

export const convertToRouteObject = (config: RouteConfig): RouteObject => {
  const { component: Component, requiresAuth } = config;

  const element = requiresAuth ? (
    <ProtectedRoute>
      <Component />
    </ProtectedRoute>
  ) : (
    <Component />
  );

  return {
    path: config.path,
    element,
    children: config.children?.map(convertToRouteObject),
  };
};

export const generateRoutes = (routeConfigs: RouteConfig[]): RouteObject[] => {
  return routeConfigs.map(convertToRouteObject);
};