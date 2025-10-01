import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import type { UserType } from '../types';

interface ProtectedRouteProps {
  allowedUserTypes: UserType[];
  redirectPath?: string;
}

const ProtectedRoute = ({
  allowedUserTypes,
  redirectPath = '/login'
}: ProtectedRouteProps) => {
  const { user, isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to={redirectPath} replace />;
  }

  if (user && !allowedUserTypes.includes(user.userType)) {
    // Redirect to appropriate dashboard if authenticated but wrong user type
    switch (user.userType) {
      case 'student':
        return <Navigate to="/student/dashboard" replace />;
      case 'industry':
        return <Navigate to="/industry/dashboard" replace />;
      case 'faculty':
        return <Navigate to="/faculty/dashboard" replace />;
      case 'admin':
        return <Navigate to="/admin" replace />;
      default:
        return <Navigate to="/" replace />;
    }
  }

  return <Outlet />;
};

export default ProtectedRoute;