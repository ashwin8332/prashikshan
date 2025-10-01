import { createContext } from 'react';

// Create a Toast Context
export interface ToastContextType {
  showSuccess: (message: string) => string;
  showError: (message: string) => string;
  showInfo: (message: string) => string;
  showWarning: (message: string) => string;
}

export const ToastContext = createContext<ToastContextType | undefined>(undefined);