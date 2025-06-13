import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { MainLayout, EmbeddedLayout } from '../layouts';
import {
  HomePage,
  ComponentsPage,
  ButtonsPage,
  FormsPage,
  NavigationPage,
  FeedbackPage,
  AboutPage,
  NotFoundPage,
} from '@app/pages';

// Define the common routes for both layouts
const appRoutes = [
  {
    index: true,
    element: <HomePage />,
  },
  {
    path: 'components',
    element: <ComponentsPage />,
  },
  {
    path: 'components/buttons',
    element: <ButtonsPage />,
  },
  {
    path: 'components/forms',
    element: <FormsPage />,
  },
  {
    path: 'components/navigation',
    element: <NavigationPage />,
  },
  {
    path: 'components/feedback',
    element: <FeedbackPage />,
  },
  {
    path: 'about',
    element: <AboutPage />,
  },
];

const isEmbedded = process.env.REACT_APP_EMBEDDED === 'true';

// Choose layout based on environment variable
const routerConfig = [
  {
    path: '/',
    element: isEmbedded ? <EmbeddedLayout /> : <MainLayout />,
    errorElement: <NotFoundPage />,
    children: appRoutes,
  },
];

export const router = createBrowserRouter(routerConfig);

// Router Provider Component
export const AppRouter: React.FC = () => {
  return <RouterProvider router={router} />;
};
