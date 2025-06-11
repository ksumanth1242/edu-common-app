// Common types used throughout the application

export interface User {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'teacher' | 'student';
}

export interface ApiResponse<T> {
  data: T;
  success: boolean;
  message?: string;
}

export interface LoadingState {
  isLoading: boolean;
  error: string | null;
}

export interface Course {
  id: string;
  title: string;
  description: string;
  instructor: User;
  students: User[];
  createdAt: Date;
  updatedAt: Date;
}
