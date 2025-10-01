import { createContext } from 'react';
import type { UserType } from '../types';

// Define user interface
export interface User {
  email: string;
  userType: UserType;
  isLoggedIn: boolean;
}

// Define context interface
interface AuthContextType {
  user: User | null;
  login: (email: string, password: string, userType: UserType) => boolean;
  logout: () => void;
  isAuthenticated: boolean;
}

// Create auth context with default values
export const AuthContext = createContext<AuthContextType>({
  user: null,
  login: () => false,
  logout: () => {},
  isAuthenticated: false,
});