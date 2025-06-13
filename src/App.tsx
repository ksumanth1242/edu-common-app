import React, { useEffect } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import { theme } from '@app/styles/theme';
import { AppRouter } from '@app/routes';
import { AuthProvider } from '@app/context/AuthContext';
import { SupabaseProvider } from '@app/context/SupabaseContext';
import { AppDataProvider, useAppData } from '@app/context/AppDataContext';

// import { initializeHttpClient } from '@app/api/httpClient';
// import { useSupabase } from '@app/context/SupabaseContext';
function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <SupabaseProvider>
        <AppDataProvider>
          <AuthProvider>
            <AppRouter />
          </AuthProvider>
        </AppDataProvider>
      </SupabaseProvider>
    </ThemeProvider>
  );
}

export default App;
