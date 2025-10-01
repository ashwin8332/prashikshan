import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  CheckCircle, 
  AlertCircle, 
  InfoIcon, 
  X, 
  Bell
} from 'lucide-react';

export type ToastType = 'success' | 'error' | 'info' | 'warning';

interface ToastProps {
  message: string;
  type: ToastType;
  duration?: number;
  onClose: () => void;
  isVisible: boolean;
}

export const Toast: React.FC<ToastProps> = ({
  message,
  type,
  duration = 4000,
  onClose,
  isVisible
}) => {
  const [progress, setProgress] = useState(0);
  const [intervalId, setIntervalId] = useState<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (isVisible) {
      // Auto-close after duration
      const timer = setTimeout(() => {
        onClose();
      }, duration);
      
      // Progress bar animation
      const interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            clearInterval(interval);
            return 100;
          }
          return prev + (100 / (duration / 100));
        });
      }, 100);
      
      setIntervalId(interval);
      
      return () => {
        clearTimeout(timer);
        if (intervalId) clearInterval(intervalId);
      };
    }
  }, [isVisible, duration, onClose, intervalId]);
  
  // Reset progress when toast is closed
  useEffect(() => {
    if (!isVisible) {
      setProgress(0);
      if (intervalId) {
        clearInterval(intervalId);
        setIntervalId(null);
      }
    }
  }, [isVisible, intervalId]);

  const getIcon = () => {
    switch (type) {
      case 'success':
        return <CheckCircle className="h-5 w-5 text-green-500" />;
      case 'error':
        return <AlertCircle className="h-5 w-5 text-red-500" />;
      case 'warning':
        return <Bell className="h-5 w-5 text-yellow-500" />;
      case 'info':
      default:
        return <InfoIcon className="h-5 w-5 text-blue-500" />;
    }
  };

  const getToastClasses = () => {
    const baseClasses = "rounded-lg shadow-lg p-4 flex items-start space-x-3 relative overflow-hidden";
    switch (type) {
      case 'success':
        return `${baseClasses} bg-green-50 dark:bg-green-900/30 border border-green-100 dark:border-green-800`;
      case 'error':
        return `${baseClasses} bg-red-50 dark:bg-red-900/30 border border-red-100 dark:border-red-800`;
      case 'warning':
        return `${baseClasses} bg-yellow-50 dark:bg-yellow-900/30 border border-yellow-100 dark:border-yellow-800`;
      case 'info':
      default:
        return `${baseClasses} bg-blue-50 dark:bg-blue-900/30 border border-blue-100 dark:border-blue-800`;
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: -20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -20, scale: 0.9 }}
          className="fixed top-5 right-5 z-50 max-w-sm w-full"
        >
          <div className={getToastClasses()}>
            <div className="flex-shrink-0">{getIcon()}</div>
            <div className="flex-1">
              <p className="text-sm font-medium text-gray-800 dark:text-gray-100">{message}</p>
            </div>
            <button
              onClick={onClose}
              className="flex-shrink-0 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
              aria-label="Close notification"
            >
              <X className="h-5 w-5" />
            </button>
            
            {/* Progress bar */}
            <div className="absolute bottom-0 left-0 h-1 bg-gray-200 dark:bg-gray-700 w-full">
              <div
                className={`h-1 ${
                  type === 'success' ? 'bg-green-500' :
                  type === 'error' ? 'bg-red-500' :
                  type === 'warning' ? 'bg-yellow-500' : 'bg-blue-500'
                }`}
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

// Toast Container to manage multiple toasts
interface ToastContainerProps {
  toasts: Array<{
    id: string;
    message: string;
    type: ToastType;
  }>;
  removeToast: (id: string) => void;
}

export const ToastContainer: React.FC<ToastContainerProps> = ({
  toasts,
  removeToast
}) => {
  return (
    <div className="fixed top-5 right-5 z-50 space-y-3">
      <AnimatePresence>
        {toasts.map((toast) => (
          <motion.div
            key={toast.id}
            initial={{ opacity: 0, y: -20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.9 }}
            transition={{ type: 'spring', stiffness: 500, damping: 30 }}
            className="max-w-sm w-full"
          >
            <Toast
              message={toast.message}
              type={toast.type}
              onClose={() => removeToast(toast.id)}
              isVisible={true}
            />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};

// No additional exports