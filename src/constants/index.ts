// Application constants

export const API_BASE_URL =
  process.env.REACT_APP_API_BASE_URL || 'http://localhost:3001/api';

export const ROUTES = {
  HOME: '/',
  LOGIN: '/login',
  DASHBOARD: '/dashboard',
  COURSES: '/courses',
  PROFILE: '/profile',
} as const;

export const USER_ROLES = {
  ADMIN: 'admin',
  TEACHER: 'teacher',
  STUDENT: 'student',
} as const;

export const API_ENDPOINTS = {
  AUTH: {
    LOGIN: '/auth/login',
    LOGOUT: '/auth/logout',
    REFRESH: '/auth/refresh',
  },
  USERS: {
    GET_ALL: '/users',
    GET_BY_ID: (id: string): string => `/users/${id}`,
    CREATE: '/users',
    UPDATE: (id: string): string => `/users/${id}`,
    DELETE: (id: string): string => `/users/${id}`,
  },
  COURSES: {
    GET_ALL: '/courses',
    GET_BY_ID: (id: string): string => `/courses/${id}`,
    CREATE: '/courses',
    UPDATE: (id: string): string => `/courses/${id}`,
    DELETE: (id: string): string => `/courses/${id}`,
  },
} as const;
