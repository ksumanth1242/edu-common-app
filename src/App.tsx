import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import { theme } from './styles/theme';
import { AppRouter } from './routes';
import { GlobalProvider, useGlobalContext } from './context/GlobalContext';
import { AuthProvider, useAuth } from './context/AuthContext';
import { initializeHttpClient } from './api/httpClient';

// Component to initialize the HTTP client
const AppInitializer: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const { setLoading } = useGlobalContext();
  const { logout } = useAuth();

  // Initialize the client once when the app loads
  React.useMemo(() => {
    initializeHttpClient({ setLoading, logout });
  }, [setLoading, logout]);

  return <>{children}</>;
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <GlobalProvider>
        <AuthProvider>
          <AppInitializer>
            <AppRouter />
          </AppInitializer>
        </AuthProvider>
      </GlobalProvider>
    </ThemeProvider>
  );
}

export default App;
