import { useState } from 'react';
import type { ToastType } from './Toast';
import { ToastContainer } from './Toast';

export const useToastHook = () => {
  const [toasts, setToasts] = useState<Array<{
    id: string;
    message: string;
    type: ToastType;
  }>>([]);

  const addToast = (message: string, type: ToastType) => {
    const id = Date.now().toString();
    setToasts((prev) => [...prev, { id, message, type }]);
    
    // Auto remove after 4 seconds
    setTimeout(() => {
      removeToast(id);
    }, 4000);
    
    return id;
  };

  const removeToast = (id: string) => {
    setToasts((prev) => prev.filter(toast => toast.id !== id));
  };

  // Helper methods for common toast types
  const showSuccess = (message: string) => addToast(message, 'success');
  const showError = (message: string) => addToast(message, 'error');
  const showInfo = (message: string) => addToast(message, 'info');
  const showWarning = (message: string) => addToast(message, 'warning');

  // Render the toast container component with current toasts
  const ToastContainerComponent = () => (
    <ToastContainer toasts={toasts} removeToast={removeToast} />
  );

  return {
    toasts,
    showToast: addToast,
    showSuccess,
    showError,
    showInfo,
    showWarning,
    removeToast,
    ToastContainerComponent,
  };
};