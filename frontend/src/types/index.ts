// ─── User & Auth ───────────────────────────────────────────────────────────────

export type Role =
  | 'receptionist'
  | 'doctor'
  | 'lab_technician'
  | 'pharmacist'
  | 'cashier'
  | 'manager';

export interface User {
  id: string;
  username: string;
  fullName: string;
  role: Role;
  departmentId: string | null;
  isActive: boolean;
}

export interface AuthTokens {
  accessToken: string;
  refreshToken: string;
}

export interface LoginCredentials {
  username: string;
  password: string;
}

export interface LoginResponse {
  user: User;
  accessToken: string;
  refreshToken: string;
}

// ─── API Response wrapper ──────────────────────────────────────────────────────

export interface ApiResponse<T> {
  data: T;
  message?: string;
}

export interface PaginatedResponse<T> {
  data: T[];
  total: number;
  page: number;
  limit: number;
}

export interface ApiError {
  statusCode: number;
  message: string | string[];
  error: string;
}

// ─── Common ───────────────────────────────────────────────────────────────────

export type Gender = 'male' | 'female' | 'other';

export interface Department {
  id: string;
  name: string;
  type: 'clinical' | 'paraclinical' | 'pharmacy' | 'admin';
  description: string;
}
