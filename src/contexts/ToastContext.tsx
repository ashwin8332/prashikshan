import React from 'react';
import { useToastHook } from '../components/ui/useToastHook.tsx';
import { ToastContext } from './ToastContextDefinition';

export const ToastProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const toast = useToastHook();

  return (
    <ToastContext.Provider 
      value={{ 
        showSuccess: toast.showSuccess,
        showError: toast.showError,
        showInfo: toast.showInfo,
        showWarning: toast.showWarning
      }}
    >
      {children}
      <toast.ToastContainerComponent />
    </ToastContext.Provider>
  );
};