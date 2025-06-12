import { ComponentType } from 'react';

export interface RouteConfig {
  path: string;
  component: ComponentType<Record<string, unknown>>;
  title?: string;
  redirect?: string;
  protected?: boolean;
  requiresAuth?: boolean;
  allowedRoles?: string[];
  exact?: boolean;
  children?: RouteConfig[];
}

export interface ProtectedRouteProps {
  children: React.ReactNode;
  pageTitle?: string;
  requiresAuth?: boolean;
  allowedRoles?: string[];
}

export interface NavigationItem {
  title: string;
  path: string;
  icon?: React.ReactNode;
  children?: NavigationItem[];
  protected?: boolean;
  requiresAuth?: boolean;
} 