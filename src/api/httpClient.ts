import axios, { AxiosInstance } from 'axios';

// Define the functions that the HTTP client will need
interface HttpClientDependencies {
  setLoading: (loading: boolean) => void;
  logout: () => void;
}

// Function to create an Axios instance
const createHttpClient = (deps?: HttpClientDependencies): AxiosInstance => {
  const httpClient = axios.create({
    baseURL: process.env.REACT_APP_API_URL || 'http://localhost:3001/api',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  // Request interceptor
  httpClient.interceptors.request.use(
    config => {
      deps?.setLoading(true);
      // In a real app, you would get the token from local storage
      const token = localStorage.getItem('token');
      if (token) {
        config.headers.Authorization = `Bearer ${JSON.parse(token)}`;
      }
      return config;
    },
    error => {
      deps?.setLoading(false);
      return Promise.reject(error);
    }
  );

  // Response interceptor
  httpClient.interceptors.response.use(
    response => {
      deps?.setLoading(false);
      return response;
    },
    error => {
      deps?.setLoading(false);
      // Handle global errors here, e.g., 401 Unauthorized
      if (error.response?.status === 401) {
        deps?.logout();
        // Optionally redirect to login page
      }
      return Promise.reject(error);
    }
  );

  return httpClient;
};

// We will create the instance later when the dependencies are available
let httpClient: AxiosInstance;

export const initializeHttpClient = (deps: HttpClientDependencies) => {
  httpClient = createHttpClient(deps);
};

export { httpClient };
