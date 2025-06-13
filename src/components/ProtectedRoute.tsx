import React, { useEffect } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useGlobalContext } from '../context/GlobalContext';
import { ProtectedRouteProps } from '../routes/types';

// Configuration for route access control
const DOCTOR_VISITS = ['doctorHome', 'doctorSlots'];
const MEDICINE_LAB_VISITS = ['medicineHome', 'medicineCart', 'diagnosticsHome'];
const HEALTH_VAULT_VISITS = ['healthvault', 'healthvaultDetails'];
const TRANSACTION_VISITS = ['myTransaction', 'myPlan'];

// Utility function to check if user is Health Coach
const isHCuser = (): boolean => {
  // Implementation depends on your user role logic
  const userRole = sessionStorage.getItem('userRole') || localStorage.getItem('userRole');
  return userRole === 'healthcoach' || userRole === 'hc';
};

export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
  children,
  pageTitle,
  requiresAuth = false,
  allowedRoles = [],
}) => {
  const { isAuthenticated, user } = useAuth();
  const { setLoading } = useGlobalContext();
  const location = useLocation();

  // Mock user configuration - replace with your actual global context
  const userHomeConfig = {
    medicineLabVisit: true,
    doctorVisit: true,
    healthVaultVisit: true,
    transactionVisit: true,
  };

  useEffect(() => {
    // Set page title if provided
    if (pageTitle) {
      document.title = pageTitle;
    }

    // Route access control logic
    if (pageTitle) {
      // For Medicine and Lab visits
      if (!userHomeConfig?.medicineLabVisit && MEDICINE_LAB_VISITS.includes(pageTitle)) {
        // Redirect to home screen if medicine/lab access is disabled
        // navigate('/home-screen');
      }

      // For Doctor visits
      if (!userHomeConfig?.doctorVisit && DOCTOR_VISITS.includes(pageTitle)) {
        if (isHCuser()) {
          // Health coach users can access doctor pages
          return;
        } else {
          // Regular users without doctor visit access
          // navigate('/home-screen');
        }
      }

      // For Health Vault visits
      if (!userHomeConfig?.healthVaultVisit && HEALTH_VAULT_VISITS.includes(pageTitle)) {
        // Redirect if health vault access is disabled
        // navigate('/home-screen');
      }

      // For Transaction visits
      if (!userHomeConfig?.transactionVisit && TRANSACTION_VISITS.includes(pageTitle)) {
        // Redirect if transaction access is disabled
        // navigate('/home-screen');
      }
    }
  }, [pageTitle, userHomeConfig]);

  // Check authentication requirement
  if (requiresAuth && !isAuthenticated) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  // Check role-based access
  if (allowedRoles.length > 0 && user) {
    const userRole = (user as { role?: string }).role || 'user';
    if (!allowedRoles.includes(userRole)) {
      return <Navigate to="/unauthorized" replace />;
    }
  }

  return <>{children}</>;
}; 