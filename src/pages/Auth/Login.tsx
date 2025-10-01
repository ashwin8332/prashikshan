import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Eye, EyeOff, Mail, Lock, AlertCircle, Info } from 'lucide-react';
import { useAuth } from '../../hooks/useAuth';
import type { UserType } from '../../types';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showDemoCredentials, setShowDemoCredentials] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    userType: 'student' as UserType
  });
  const [error, setError] = useState<string | null>(null);
  const { login } = useAuth();
  const navigate = useNavigate();
  
  // Demo credentials for each user type
  const demoCredentials = {
    student: { email: 'student@prashikshan.edu', password: 'student123' },
    industry: { email: 'industry@techcorp.com', password: 'partner123' },
    faculty: { email: 'faculty@college.edu', password: 'faculty123' },
    admin: { email: 'admin@prashikshan.edu', password: 'admin123' }
  };

  const fillDemoCredentials = () => {
    const credentials = demoCredentials[formData.userType];
    setFormData(prev => ({
      ...prev,
      email: credentials.email,
      password: credentials.password
    }));
    setError(null);
  };


  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    
    // Trim whitespace from email and password
    const trimmedEmail = formData.email.trim();
    const trimmedPassword = formData.password.trim();
    
    console.log('Login attempt:', { email: trimmedEmail, password: trimmedPassword, userType: formData.userType });
    
    // Try to login
    const success = login(trimmedEmail, trimmedPassword, formData.userType);
    
    if (success) {
      // Redirect based on user type
      switch(formData.userType) {
        case 'student':
          navigate('/student/dashboard');
          break;
        case 'industry':
          navigate('/industry/dashboard');
          break;
        case 'faculty':
          navigate('/faculty/dashboard');
          break;
        case 'admin':
          navigate('/admin');
          break;
        default:
          navigate('/');
      }
    } else {
      // Show generic error message
      setError("Invalid email or password. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="flex flex-col items-center">
          <div className="logo-container mb-2">
            <img src="/prashikshan-logo.svg" alt="Prashikshan Logo" className="h-16 w-16 auth-logo logo-pulse" />
          </div>
          <div className="text-center">
            <h1 className="text-2xl font-bold auth-logo-text">Prashikshan</h1>
            <p className="logo-subtitle text-gray-500">Academia Industry Interface</p>
          </div>
        </div>
        <h2 className="mt-6 text-center text-3xl font-bold text-gray-900">
          Sign in to your account
        </h2>
        <p className="mt-2 text-center text-sm text-gray-600">
          Or{' '}
          <Link to="/register" className="font-medium text-primary-600 hover:text-primary-500">
            create a new account
          </Link>
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form className="space-y-6" onSubmit={handleSubmit}>
            {/* User Type Selection */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Login as
              </label>
              <div className="mt-1">
                <select
                  value={formData.userType}
                  onChange={(e) => setFormData({ ...formData, userType: e.target.value as UserType })}
                  className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                >
                  <option value="student">Student</option>
                  <option value="industry">Industry Partner</option>
                  <option value="faculty">Faculty</option>
                  <option value="admin">Administrator</option>
                </select>
              </div>
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email address
              </label>
              <div className="mt-1 relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="pl-10 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                  placeholder="Enter your email"
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <div className="mt-1 relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <input
                  id="password"
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  autoComplete="current-password"
                  required
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  className="pl-10 pr-10 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                  placeholder="Enter your password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

            {/* Remember me & Forgot password */}
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                  Remember me
                </label>
              </div>

              <div className="text-sm">
                <a href="#" className="font-medium text-primary-600 hover:text-primary-500">
                  Forgot your password?
                </a>
              </div>
            </div>

            {/* Error Message */}
            {error && (
              <div className="bg-red-50 border border-red-200 text-red-800 rounded-md p-3 flex items-center text-sm">
                <AlertCircle className="h-5 w-5 mr-2 text-red-500" />
                {error}
              </div>
            )}
            
            {/* Submit */}
            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
              >
                Sign in
              </button>
            </div>
            
            {/* Demo Credentials Section */}
            <div className="mt-6 pt-4 border-t border-gray-200">
              <button 
                type="button"
                onClick={() => setShowDemoCredentials(!showDemoCredentials)}
                className="flex items-center text-sm text-primary-600 hover:text-primary-500 mb-2 mx-auto"
              >
                <Info size={16} className="mr-1" />
                {showDemoCredentials ? 'Hide Demo Credentials' : 'Show Demo Credentials'}
              </button>
              
              {showDemoCredentials && (
                <div className="bg-gray-50 border border-gray-200 rounded-md p-3 mt-2">
                  <h4 className="text-sm font-medium text-gray-700 mb-2">Demo Credentials for {formData.userType.charAt(0).toUpperCase() + formData.userType.slice(1)}</h4>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div className="text-gray-700">Email:</div>
                    <div className="font-medium">{demoCredentials[formData.userType].email}</div>
                    <div className="text-gray-700">Password:</div>
                    <div className="font-medium">{demoCredentials[formData.userType].password}</div>
                  </div>
                  <button
                    type="button"
                    onClick={fillDemoCredentials}
                    className="mt-3 w-full text-xs bg-primary-50 text-primary-700 hover:bg-primary-100 py-2 px-3 rounded border border-primary-200 transition-colors font-medium"
                  >
                    Auto-fill Demo Credentials
                  </button>
                </div>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;