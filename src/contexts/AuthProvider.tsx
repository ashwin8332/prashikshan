import { useState, useEffect, type ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext, type User } from './AuthContext.types';
import type { UserType } from '../types';

// Auth provider props
interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<User | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  // Check for existing session on mount
  useEffect(() => {
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      const userData = JSON.parse(savedUser);
      setUser(userData);
      setIsAuthenticated(true);
    }
  }, []);

  const login = (email: string, password: string, userType: UserType): boolean => {
    // TODO: Replace with actual API authentication
    console.log('AuthProvider login attempt:', { email, password, userType });
    
    // For now, simulate authentication for testing
    // This should be replaced with an API call in production
    if (email && password) { // Basic validation
      const userData: User = {
        email,
        userType,
        isLoggedIn: true,
      };
      
      setUser(userData);
      setIsAuthenticated(true);
      localStorage.setItem('user', JSON.stringify(userData));
      
      // Navigate based on user type
      const dashboardRoutes = {
        student: '/student/dashboard',
        industry: '/industry/dashboard',
        faculty: '/faculty/dashboard',
        admin: '/admin/dashboard',
      };
      
      navigate(dashboardRoutes[userType]);
      return true;
    }
    
    return false;
  };

  const logout = () => {
    setUser(null);
    setIsAuthenticated(false);
    localStorage.removeItem('user');
    navigate('/');
  };

  const value = {
    user,
    login,
    logout,
    isAuthenticated,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};