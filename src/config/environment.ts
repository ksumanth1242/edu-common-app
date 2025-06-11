// Environment configuration with validation

interface EnvironmentConfig {
  apiBaseUrl: string;
  apiTimeout: number;
  appName: string;
  appVersion: string;
  environment: 'development' | 'staging' | 'production';
  enableDebugMode: boolean;
  enableAnalytics: boolean;
  enableHttpsRedirect: boolean;
  googleAnalyticsId?: string;
  sentryDsn?: string;
}

const getEnvironmentVariable = (key: string, defaultValue?: string): string => {
  const value = process.env[key];
  if (!value && !defaultValue) {
    throw new Error(`Environment variable ${key} is required but not set`);
  }
  return value || defaultValue || '';
};

const getBooleanEnvironmentVariable = (
  key: string,
  defaultValue: boolean
): boolean => {
  const value = process.env[key];
  if (!value) return defaultValue;
  return value.toLowerCase() === 'true';
};

const getNumberEnvironmentVariable = (
  key: string,
  defaultValue: number
): number => {
  const value = process.env[key];
  if (!value) return defaultValue;
  const numberValue = parseInt(value, 10);
  if (isNaN(numberValue)) {
    throw new Error(`Environment variable ${key} must be a valid number`);
  }
  return numberValue;
};

// Validate and create environment configuration
export const createEnvironmentConfig = (): EnvironmentConfig => {
  const environment = getEnvironmentVariable(
    'REACT_APP_ENVIRONMENT',
    'development'
  );

  if (!['development', 'staging', 'production'].includes(environment)) {
    throw new Error(
      'REACT_APP_ENVIRONMENT must be one of: development, staging, production'
    );
  }

  return {
    apiBaseUrl: getEnvironmentVariable(
      'REACT_APP_API_BASE_URL',
      'http://localhost:3001/api'
    ),
    apiTimeout: getNumberEnvironmentVariable('REACT_APP_API_TIMEOUT', 10000),
    appName: getEnvironmentVariable(
      'REACT_APP_APP_NAME',
      'Educational Common App'
    ),
    appVersion: getEnvironmentVariable('REACT_APP_APP_VERSION', '1.0.0'),
    environment: environment as 'development' | 'staging' | 'production',
    enableDebugMode: getBooleanEnvironmentVariable(
      'REACT_APP_ENABLE_DEBUG_MODE',
      true
    ),
    enableAnalytics: getBooleanEnvironmentVariable(
      'REACT_APP_ENABLE_ANALYTICS',
      false
    ),
    enableHttpsRedirect: getBooleanEnvironmentVariable(
      'REACT_APP_ENABLE_HTTPS_REDIRECT',
      false
    ),
    googleAnalyticsId: process.env.REACT_APP_GOOGLE_ANALYTICS_ID,
    sentryDsn: process.env.REACT_APP_SENTRY_DSN,
  };
};

// Create and export the configuration
export const env = createEnvironmentConfig();

// Helper functions
export const isDevelopment = (): boolean => env.environment === 'development';
export const isProduction = (): boolean => env.environment === 'production';
export const isStaging = (): boolean => env.environment === 'staging';
