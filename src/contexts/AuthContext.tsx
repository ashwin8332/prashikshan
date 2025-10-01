import { useState, useEffect, type ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from './AuthContext.types';

// Define user types
export type UserType = 'student' | 'industry' | 'faculty' | 'admin';

// Define user interface
export interface User {
  email: string;
  userType: UserType;
  isLoggedIn: boolean;
}

// Auth provider props
interface AuthProviderProps {
  children: ReactNode;
}

// TODO: Replace with actual authentication API

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<User | null>(null);
  const navigate = useNavigate();
  
  // Check if user is logged in on initial load
  useEffect(() => {
    const storedUser = localStorage.getItem('prashikshan_user');
    if (storedUser) {
      try {
        const parsedUser = JSON.parse(storedUser);
        setUser(parsedUser);
      } catch (error) {
        console.error('Failed to parse stored user', error);
        localStorage.removeItem('prashikshan_user');
      }
    }
  }, []);
  
  // Login function
  const login = (email: string, password: string, userType: UserType): boolean => {
    // TODO: Replace with actual API authentication
    console.log('AuthContext login attempt:', { email, password, userType });
    
    // For now, simulate a successful login for testing purposes
    // In production, this should be replaced with an actual API call
    if (email && password) { // Basic validation
      const userData: User = {
        email,
        userType,
        isLoggedIn: true
      };
      
      // Store user in local storage
      localStorage.setItem('prashikshan_user', JSON.stringify(userData));
      setUser(userData);
      return true;
    }
    
    return false;
  };
  
  // Logout function
  const logout = () => {
    localStorage.removeItem('prashikshan_user');
    setUser(null);
    navigate('/login');
  };
  
  const value = {
    user,
    login,
    logout,
    isAuthenticated: !!user
  };
  
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

