import { RouteConfig } from './types';
import { 
  HomePage, 
  ComponentsPage, 
  ButtonsPage, 
  FormsPage, 
  NavigationPage, 
  FeedbackPage, 
  AboutPage,
  NotFoundPage,
  LoginPage,
  DashboardPage
} from '../pages';

// Main route configuration
export const routeConfig: RouteConfig[] = [
  {
    path: '/',
    component: HomePage,
    title: 'Home - Educational App',
    exact: true,
  },
  {
    path: '/login',
    component: LoginPage,
    title: 'Login',
  },
  {
    path: '/dashboard',
    component: DashboardPage,
    title: 'Dashboard',
    requiresAuth: true,
  },
  {
    path: '/about',
    component: AboutPage,
    title: 'About Us',
  },
  {
    path: '/components',
    component: ComponentsPage,
    title: 'Components Overview',
  },
  {
    path: '/components/buttons',
    component: ButtonsPage,
    title: 'Button Components',
  },
  {
    path: '/components/forms',
    component: FormsPage,
    title: 'Form Components',
  },
  {
    path: '/components/navigation',
    component: NavigationPage,
    title: 'Navigation Components',
  },
  {
    path: '/components/feedback',
    component: FeedbackPage,
    title: 'Feedback Components',
  },
  {
    path: '*',
    component: NotFoundPage,
    title: 'Page Not Found',
  },
];

// Helper functions
export const getRouteByPath = (path: string): RouteConfig | undefined => {
  return routeConfig.find(route => route.path === path);
};

export const getProtectedRoutes = (): RouteConfig[] => {
  return routeConfig.filter(route => route.requiresAuth);
};

export const getRoutesByRole = (userRole: string): RouteConfig[] => {
  return routeConfig.filter(route => {
    if (!route.allowedRoles) return true;
    return route.allowedRoles.includes(userRole);
  });
}; 