import { Link, useLocation } from 'react-router-dom';
import { 
  Menu, 
  X, 
  LogOut, 
  Briefcase, 
  Info, 
  Home,
  BookOpen,
  Mail,
  User,
  ChevronDown,
  Settings,
  LayoutDashboard,
  FileText,
  PlusCircle,
  Building,
  Users,
  CheckCircle,
  FileBarChart,
  BarChart,
  Moon,
  Globe,
  Bell
} from 'lucide-react';
import { useState } from 'react';
import { ThemeToggle } from '../ThemeToggle';
import { LanguageSelector } from '../LanguageSelector';
import { useAuth } from '../../hooks/useAuth';
import Chatbot from '../Chatbot/Chatbot';

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { user, isAuthenticated, logout } = useAuth();

  // Navigation for unauthenticated users
  const publicNavigation = [
    { name: 'Home', href: '/', icon: Home },
    { name: 'About', href: '/about', icon: Info },
    { name: 'Internships', href: '/internships', icon: Briefcase },
    { name: 'Industry Connect', href: '/industry-connect', icon: Building },
    { name: 'Courses', href: '/courses', icon: BookOpen },
    { name: 'Resources', href: '/resources', icon: FileText },
    { name: 'Contact & FAQ', href: '/contact-faq', icon: Mail }
  ];

  // Navigation for authenticated users based on their role
  const getAuthenticatedNavigation = () => {
    const baseNav = [{ name: 'Home', href: '/', icon: Home }];
    
    if (user?.userType === 'student') {
      return [
        ...baseNav,
        { name: 'Dashboard', href: '/student/dashboard', icon: LayoutDashboard },
        { name: 'Internships', href: '/student/internships', icon: Briefcase },
        { name: 'Applications', href: '/student/applications', icon: FileText },
        { name: 'Profile', href: '/student/profile', icon: User },
      ];
    } else if (user?.userType === 'industry') {
      return [
        ...baseNav,
        { name: 'Dashboard', href: '/industry/dashboard', icon: LayoutDashboard },
        { name: 'Post Internship', href: '/industry/post', icon: PlusCircle },
        { name: 'Applications', href: '/industry/applications', icon: FileText },
        { name: 'Profile', href: '/industry/profile', icon: Building },
      ];
    } else if (user?.userType === 'faculty') {
      return [
        ...baseNav,
        { name: 'Dashboard', href: '/faculty/dashboard', icon: LayoutDashboard },
        { name: 'Students', href: '/faculty/students', icon: Users },
        { name: 'Approvals', href: '/faculty/approvals', icon: CheckCircle },
        { name: 'Reports', href: '/faculty/reports', icon: FileBarChart },
      ];
    } else if (user?.userType === 'admin') {
      return [
        ...baseNav,
        { name: 'Dashboard', href: '/admin/dashboard', icon: LayoutDashboard },
        { name: 'Users', href: '/admin/users', icon: Users },
        { name: 'Analytics', href: '/admin/analytics', icon: BarChart },
        { name: 'Settings', href: '/admin/settings', icon: Settings },
      ];
    }
    return baseNav;
  };

  const navigation = isAuthenticated ? getAuthenticatedNavigation() : publicNavigation;

  return (
    <>
      <header className="bg-background/90 backdrop-blur-md border-b border-border/40 sticky top-0 z-40 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="flex items-center space-x-2">
                <div className="rounded-full overflow-hidden w-10 h-10 group-hover:ring-2 ring-primary/20 transition-all duration-300">
                  <img 
                    src="/prashikshan-logo.svg" 
                    alt="Prashikshan Logo" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" 
                  />
                </div>
                <span className="text-xl font-bold bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
                  Prashikshan
                </span>
              </div>
            </Link>
            <nav className="hidden md:flex space-x-2">
              {navigation.map((item) => {
                const Icon = item.icon;
                return (
                  <Link 
                    key={item.name} 
                    to={item.href} 
                    className={`flex items-center space-x-2 text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 px-4 py-2 rounded-md transition-all duration-200 hover:bg-gray-100 dark:hover:bg-gray-800/50 relative group ${
                      location.pathname === item.href ? 'text-primary-600 dark:text-primary-400 font-medium bg-gray-50 dark:bg-gray-800/30' : ''
                    }`}
                  >
                    {Icon && <Icon size={16} className="flex-shrink-0" />}
                    <span>{item.name}</span>
                    {location.pathname === item.href && (
                      <span className="absolute bottom-0 left-0 h-0.5 w-full bg-gradient-to-r from-primary to-blue-600 rounded-full"></span>
                    )}
                  </Link>
                );
              })}
            </nav>

            <div className="hidden md:flex items-center space-x-4">
              {/* Notification button for authenticated users */}
              {isAuthenticated && (
                <div className="relative">
                  <button 
                    className="p-2 text-gray-500 hover:text-primary-600 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-primary-400 rounded-full transition-colors relative"
                    aria-label="Notifications"
                  >
                    <Bell size={18} />
                    <span className="absolute top-0.5 right-0.5 h-2 w-2 rounded-full bg-red-500"></span>
                  </button>
                </div>
              )}

              <div className="mx-1">
                <LanguageSelector />
              </div>
              <div className="mx-1">
                <ThemeToggle />
              </div>
              
              {isAuthenticated ? (
                <div className="relative group ml-2">
                  <button 
                    className="flex items-center space-x-2 px-3 py-2 rounded-md border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700/80 transition-colors group"
                  >
                    <span className="font-medium">{user?.userType || 'User'}</span>
                    <ChevronDown size={16} className="text-gray-500 group-hover:text-primary-500 transition-colors" />
                  </button>
                  
                  <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-md shadow-lg ring-1 ring-black/5 dark:ring-white/10 overflow-hidden transition-all origin-top-right scale-95 opacity-0 invisible group-hover:scale-100 group-hover:opacity-100 group-hover:visible z-50">
                    <div className="py-1">
                      <Link
                        to={`/${user?.userType}/profile`}
                        className="flex items-center space-x-2 px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                      >
                        <User size={16} />
                        <span>Profile</span>
                      </Link>
                      <Link
                        to={`/${user?.userType}/settings`}
                        className="flex items-center space-x-2 px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                      >
                        <Settings size={16} />
                        <span>Settings</span>
                      </Link>
                      <div className="border-t border-gray-100 dark:border-gray-700 my-1"></div>
                      <button 
                        onClick={logout}
                        className="flex w-full items-center space-x-2 px-4 py-2 text-sm text-red-600 dark:text-red-400 hover:bg-gray-100 dark:hover:bg-gray-700"
                      >
                        <LogOut size={16} />
                        <span>Logout</span>
                      </button>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="flex space-x-3 ml-2">
                  <Link 
                    to="/login" 
                    className="text-gray-800 dark:text-gray-200 border border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700 px-4 py-2 rounded-md transition-all duration-200 text-sm font-medium"
                  >
                    Login
                  </Link>
                  <Link 
                    to="/register" 
                    className="bg-gradient-to-r from-primary to-blue-600 text-white px-4 py-2 rounded-md hover:from-primary-600 hover:to-blue-700 transition-all duration-300 shadow-sm hover:shadow-md text-sm font-medium"
                  >
                    Register
                  </Link>
                </div>
              )}
            </div>
            
            <div className="md:hidden flex items-center">
              <button 
                onClick={() => setIsOpen(!isOpen)} 
                className="p-2 text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-gray-100 dark:hover:bg-gray-800/70 rounded-full transition-colors"
                aria-label="Menu"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
          
          {/* Mobile Navigation */}
          {isOpen && (
            <div className="md:hidden border-t border-gray-200 dark:border-gray-700">
              <div className="px-4 pt-4 pb-5 space-y-2">
                {navigation.map((item) => {
                  const Icon = item.icon;
                  return (
                    <Link
                      key={item.name}
                      to={item.href}
                      className={`flex items-center space-x-3 px-4 py-3 text-sm font-medium rounded-lg transition-colors ${
                        location.pathname === item.href 
                          ? 'text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-900/20' 
                          : 'text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-gray-50 dark:hover:bg-gray-800/50'
                      }`}
                      onClick={() => setIsOpen(false)}
                    >
                      {Icon && <Icon size={18} className={location.pathname === item.href ? 'text-primary-600 dark:text-primary-400' : 'text-gray-500 dark:text-gray-400'} />}
                      <span>{item.name}</span>
                    </Link>
                  );
                })}
                
                {/* Divider */}
                <div className="border-t border-gray-200 dark:border-gray-700 my-4"></div>
                
                {/* Settings and preferences section */}
                <div className="border-t border-gray-200 dark:border-gray-700 pt-4 pb-2">
                  <h4 className="text-xs uppercase tracking-wider text-gray-500 dark:text-gray-400 font-medium mb-3 px-4">Preferences</h4>
                  <div className="flex items-center justify-between px-4 py-3 bg-gray-50 dark:bg-gray-800/50 rounded-lg mx-4">
                    <div className="flex items-center space-x-2">
                      <Globe size={16} className="text-gray-500 dark:text-gray-400" />
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Language</span>
                    </div>
                    <LanguageSelector />
                  </div>
                  
                  <div className="flex items-center justify-between px-4 py-3 mt-3 bg-gray-50 dark:bg-gray-800/50 rounded-lg mx-4">
                    <div className="flex items-center space-x-2">
                      <Moon size={16} className="text-gray-500 dark:text-gray-400" />
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Theme</span>
                    </div>
                    <ThemeToggle />
                  </div>
                </div>

                {/* Auth actions */}
                <div className="border-t border-gray-200 dark:border-gray-700 pt-4 pb-5 px-4">
                  {isAuthenticated ? (
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <div className="h-8 w-8 rounded-full bg-primary-600 flex items-center justify-center text-white font-medium">
                            {user?.userType?.charAt(0).toUpperCase() || 'U'}
                          </div>
                          <div>
                            <p className="text-sm font-medium text-gray-900 dark:text-gray-100">{user?.userType || 'User'}</p>
                            <p className="text-xs text-gray-500 dark:text-gray-400">{user?.userType}</p>
                          </div>
                        </div>
                        <Link 
                          to={`/${user?.userType}/profile`}
                          className="text-xs text-primary-600 dark:text-primary-400"
                          onClick={() => setIsOpen(false)}
                        >
                          View Profile
                        </Link>
                      </div>
                      <button
                        onClick={() => {
                          logout();
                          setIsOpen(false);
                        }}
                        className="flex w-full items-center justify-center space-x-2 px-4 py-3 text-sm font-medium rounded-lg text-white bg-red-600 hover:bg-red-700 transition-colors mt-3"
                      >
                        <LogOut size={18} />
                        <span>Logout</span>
                      </button>
                    </div>
                  ) : (
                    <div className="grid grid-cols-2 gap-3 pb-2">
                      <Link
                        to="/login"
                        className="flex items-center justify-center px-4 py-3 text-sm font-medium rounded-lg border border-gray-200 dark:border-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                        onClick={() => setIsOpen(false)}
                      >
                        Login
                      </Link>
                      <Link
                        to="/register"
                        className="flex items-center justify-center px-4 py-3 text-sm font-medium rounded-lg bg-gradient-to-r from-primary to-blue-600 text-white hover:from-primary-600 hover:to-blue-700 transition-all shadow-sm"
                        onClick={() => setIsOpen(false)}
                      >
                        Register
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Integrate Chatbot */}
      <Chatbot userType={user?.userType} />
    </>
  );
};

export default Header;
