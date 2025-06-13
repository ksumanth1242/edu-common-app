// src/components/ProtectedRoute.tsx
import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useSupabase } from '@app/context/SupabaseContext';

interface ProtectedRouteProps {
  children: React.ReactElement;
}

export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const { session } = useSupabase();
  const location = useLocation();

  if (!session) {
    // Not signed in, redirect to login
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  // Signed in, render the route
  return children;
};
