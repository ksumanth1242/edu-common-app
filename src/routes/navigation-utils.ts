import { NavigationItem } from './types';
import { routeConfig } from './route-config';

/**
 * Generates navigation items from route configuration
 * Useful for creating dynamic navigation menus
 */
export const generateNavigationItems = (): NavigationItem[] => {
  return routeConfig
    .filter(route => route.path !== '*' && route.title) // Exclude wildcard and untitled routes
    .map(route => ({
      title: route.title || route.path,
      path: route.path,
      protected: route.requiresAuth,
      requiresAuth: route.requiresAuth,
    }));
};

/**
 * Gets navigation items that a user has access to based on their role
 */
export const getAccessibleNavigationItems = (
  userRole?: string,
  isAuthenticated: boolean = false
): NavigationItem[] => {
  const allItems = generateNavigationItems();
  
  return allItems.filter(item => {
    // If route requires auth and user is not authenticated, exclude it
    if (item.requiresAuth && !isAuthenticated) {
      return false;
    }
    
    // If specific role is required, check if user has it
    const route = routeConfig.find(r => r.path === item.path);
    if (route?.allowedRoles && route.allowedRoles.length > 0) {
      return userRole ? route.allowedRoles.includes(userRole) : false;
    }
    
    return true;
  });
};

/**
 * Breadcrumb generation utility
 */
export const generateBreadcrumbs = (pathname: string): NavigationItem[] => {
  const pathSegments = pathname.split('/').filter(Boolean);
  const breadcrumbs: NavigationItem[] = [];
  
  let currentPath = '';
  for (const segment of pathSegments) {
    currentPath += `/${segment}`;
    const route = routeConfig.find(r => r.path === currentPath);
    
    if (route) {
      breadcrumbs.push({
        title: route.title || segment,
        path: currentPath,
        protected: route.requiresAuth,
        requiresAuth: route.requiresAuth,
      });
    }
  }
  
  return breadcrumbs;
};

/**
 * Check if a route exists
 */
export const routeExists = (path: string): boolean => {
  return routeConfig.some(route => route.path === path);
};

/**
 * Get route title by path
 */
export const getRouteTitle = (path: string): string | undefined => {
  const route = routeConfig.find(r => r.path === path);
  return route?.title;
};

/**
 * Check if current user can access a specific route
 */
export const canAccessRoute = (
  path: string,
  userRole?: string,
  isAuthenticated: boolean = false
): boolean => {
  const route = routeConfig.find(r => r.path === path);
  
  if (!route) return false;
  
  // Check authentication requirement
  if (route.requiresAuth && !isAuthenticated) {
    return false;
  }
  
  // Check role requirement
  if (route.allowedRoles && route.allowedRoles.length > 0) {
    return userRole ? route.allowedRoles.includes(userRole) : false;
  }
  
  return true;
}; 