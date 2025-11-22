// Main export file for all types
export * from './car';

// Common types
export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  message?: string;
  error?: string;
}

export interface PaginationParams {
  page: number;
  limit: number;
  total: number;
  totalPages: number;
}

export interface SearchParams {
  query: string;
  filters?: Record<string, any>;
  sortBy?: string;
  sortOrder?: 'asc' | 'desc';
}

// Form types
export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  carInterest?: string;
  preferredContact: 'phone' | 'whatsapp' | 'email';
}

export interface TestDriveFormData {
  name: string;
  email: string;
  phone: string;
  carModel: string;
  preferredDate: string;
  preferredTime: string;
  location: string;
  message?: string;
}

export interface CreditSimulationFormData {
  name: string;
  email: string;
  phone: string;
  carModel: string;
  carVariant: string;
  carPrice: number;
  downPayment: number;
  tenure: number;
  income: number;
  occupation: string;
}