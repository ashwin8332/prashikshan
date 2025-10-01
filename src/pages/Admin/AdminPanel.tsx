import { useState, useEffect } from 'react';
import { 
  BarChart, 
  Users, 
  Briefcase, 
  Building, 
  Layers, 
  UserPlus,
  User,
  FileText,
  Settings,
  Bell,
  LayoutDashboard
} from 'lucide-react';

// Types
interface DashboardStats {
  totalStudents: number;
  totalInternships: number;
  totalCompanies: number;
  totalFaculty: number;
  pendingApprovals: number;
  activeInternships: number;
}

interface UserData {
  id: number;
  name: string;
  email: string;
  role: 'student' | 'industry' | 'faculty' | 'admin';
  status: 'active' | 'inactive' | 'pending';
  dateJoined: string;
}

interface RecentActivity {
  id: number;
  user: string;
  action: string;
  timestamp: string;
  userRole: 'student' | 'industry' | 'faculty' | 'admin';
}

const AdminPanel = () => {
  const [activeTab, setActiveTab] = useState<'dashboard' | 'users' | 'internships' | 'reports'>('dashboard');
  const [searchQuery, setSearchQuery] = useState('');
  const [stats] = useState<DashboardStats>({
    totalStudents: 1234,
    totalInternships: 567,
    totalCompanies: 89,
    totalFaculty: 156,
    pendingApprovals: 15,
    activeInternships: 432
  });
  const [users, setUsers] = useState<UserData[]>([]);
  const [recentActivity, setRecentActivity] = useState<RecentActivity[]>([]);
  // Use isLoading state for loading indicators if needed in the future
  const [, setIsLoading] = useState(true);

  // Mock data
  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      setUsers([
        { 
          id: 1, 
          name: 'Raj Kumar', 
          email: 'raj.kumar@example.com', 
          role: 'student', 
          status: 'active', 
          dateJoined: '2025-01-15' 
        },
        { 
          id: 2, 
          name: 'Priya Singh', 
          email: 'priya.singh@example.com', 
          role: 'student', 
          status: 'active', 
          dateJoined: '2025-02-10' 
        },
        { 
          id: 3, 
          name: 'Tech Innovations Pvt Ltd', 
          email: 'contact@techinnovations.com', 
          role: 'industry', 
          status: 'active', 
          dateJoined: '2024-11-20' 
        },
        { 
          id: 4, 
          name: 'Dr. Anjali Sharma', 
          email: 'anjali.sharma@faculty.edu', 
          role: 'faculty', 
          status: 'active', 
          dateJoined: '2024-10-05' 
        },
        { 
          id: 5, 
          name: 'Future Finance Solutions', 
          email: 'info@futurefinance.com', 
          role: 'industry', 
          status: 'pending', 
          dateJoined: '2025-03-01' 
        },
        { 
          id: 6, 
          name: 'Amit Patel', 
          email: 'amit.patel@student.edu', 
          role: 'student', 
          status: 'inactive', 
          dateJoined: '2024-09-12' 
        },
        { 
          id: 7, 
          name: 'Neha Gupta', 
          email: 'neha.gupta@faculty.edu', 
          role: 'faculty', 
          status: 'active', 
          dateJoined: '2024-12-03' 
        },
        { 
          id: 8, 
          name: 'Green Earth Enterprises', 
          email: 'contact@greenearth.com', 
          role: 'industry', 
          status: 'active', 
          dateJoined: '2025-01-20' 
        },
        { 
          id: 9, 
          name: 'Vikram Desai', 
          email: 'vikram.desai@admin.edu', 
          role: 'admin', 
          status: 'active', 
          dateJoined: '2024-08-15' 
        },
        { 
          id: 10, 
          name: 'Sanya Mehta', 
          email: 'sanya.mehta@student.edu', 
          role: 'student', 
          status: 'active', 
          dateJoined: '2025-02-25' 
        }
      ]);
      
      setRecentActivity([
        {
          id: 1,
          user: 'Raj Kumar',
          action: 'Applied for an internship at Tech Innovations Pvt Ltd',
          timestamp: '2025-03-10T10:30:00',
          userRole: 'student'
        },
        {
          id: 2,
          user: 'Dr. Anjali Sharma',
          action: 'Approved internship posting from Future Finance Solutions',
          timestamp: '2025-03-09T15:45:00',
          userRole: 'faculty'
        },
        {
          id: 3,
          user: 'TechInnovations Pvt Ltd',
          action: 'Posted a new internship opportunity',
          timestamp: '2025-03-08T11:20:00',
          userRole: 'industry'
        },
        {
          id: 4,
          user: 'Vikram Desai',
          action: 'Approved new industry partner registration',
          timestamp: '2025-03-07T14:15:00',
          userRole: 'admin'
        },
        {
          id: 5,
          user: 'Green Earth Enterprises',
          action: 'Updated company profile information',
          timestamp: '2025-03-06T09:30:00',
          userRole: 'industry'
        },
        {
          id: 6,
          user: 'Priya Singh',
          action: 'Completed skill assessment for Web Development',
          timestamp: '2025-03-05T16:50:00',
          userRole: 'student'
        }
      ]);
      
      setIsLoading(false);
    }, 1000);
  }, []);

  // Users are filtered in the UI based on search query
  // Role and status colors are applied directly in the JSX

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
          <p className="mt-2 text-gray-600">Manage users, internships, and platform settings</p>
        </div>

        {/* Tabs */}
        <div className="mb-6 border-b border-gray-200">
          <nav className="-mb-px flex space-x-6" aria-label="Tabs">
            <button
              className={`py-4 px-1 border-b-2 font-medium text-sm flex items-center space-x-2 ${
                activeTab === 'dashboard'
                  ? 'border-primary-500 text-primary-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
              onClick={() => setActiveTab('dashboard')}
            >
              <LayoutDashboard className="h-5 w-5" />
              <span>Dashboard</span>
            </button>
            <button
              className={`py-4 px-1 border-b-2 font-medium text-sm flex items-center space-x-2 ${
                activeTab === 'users'
                  ? 'border-primary-500 text-primary-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
              onClick={() => setActiveTab('users')}
            >
              <Users className="h-5 w-5" />
              <span>Users</span>
            </button>
            <button
              className={`py-4 px-1 border-b-2 font-medium text-sm flex items-center space-x-2 ${
                activeTab === 'internships'
                  ? 'border-primary-500 text-primary-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
              onClick={() => setActiveTab('internships')}
            >
              <Briefcase className="h-5 w-5" />
              <span>Internships</span>
            </button>
            <button
              className={`py-4 px-1 border-b-2 font-medium text-sm flex items-center space-x-2 ${
                activeTab === 'reports'
                  ? 'border-primary-500 text-primary-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
              onClick={() => setActiveTab('reports')}
            >
              <FileText className="h-5 w-5" />
              <span>Reports</span>
            </button>
          </nav>
        </div>

        {/* Dashboard Content */}
        {activeTab === 'dashboard' && (
          <div className="space-y-6">
            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="bg-white overflow-hidden shadow-sm rounded-lg border border-gray-200">
                <div className="p-6">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 rounded-md bg-blue-500 p-3">
                      <Users className="h-6 w-6 text-white" />
                    </div>
                    <div className="ml-5">
                      <p className="text-sm font-medium text-gray-500 truncate">Total Students</p>
                      <p className="text-2xl font-semibold text-gray-900">{stats.totalStudents}</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white overflow-hidden shadow-sm rounded-lg border border-gray-200">
                <div className="p-6">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 rounded-md bg-green-500 p-3">
                      <Building className="h-6 w-6 text-white" />
                    </div>
                    <div className="ml-5">
                      <p className="text-sm font-medium text-gray-500 truncate">Industry Partners</p>
                      <p className="text-2xl font-semibold text-gray-900">{stats.totalCompanies}</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white overflow-hidden shadow-sm rounded-lg border border-gray-200">
                <div className="p-6">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 rounded-md bg-orange-500 p-3">
                      <Layers className="h-6 w-6 text-white" />
                    </div>
                    <div className="ml-5">
                      <p className="text-sm font-medium text-gray-500 truncate">Faculty Members</p>
                      <p className="text-2xl font-semibold text-gray-900">{stats.totalFaculty}</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white overflow-hidden shadow-sm rounded-lg border border-gray-200">
                <div className="p-6">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 rounded-md bg-purple-500 p-3">
                      <Briefcase className="h-6 w-6 text-white" />
                    </div>
                    <div className="ml-5">
                      <p className="text-sm font-medium text-gray-500 truncate">Active Internships</p>
                      <p className="text-2xl font-semibold text-gray-900">{stats.activeInternships}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Management Sections */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg shadow p-6 border border-gray-200 col-span-1">
                <h2 className="text-xl font-semibold mb-4 flex items-center">
                  <Settings className="h-5 w-5 mr-2 text-gray-500" />
                  System Management
                </h2>
                <div className="space-y-3">
                  <button 
                    className="w-full text-left border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition-colors"
                    onClick={() => setActiveTab('users')}
                  >
                    <h3 className="font-semibold flex items-center">
                      <Users className="h-4 w-4 mr-2 text-blue-500" />
                      User Management
                    </h3>
                    <p className="text-gray-600 text-sm mt-1">Manage students, faculty, and industry accounts</p>
                  </button>
                  <button className="w-full text-left border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition-colors">
                    <h3 className="font-semibold flex items-center">
                      <Settings className="h-4 w-4 mr-2 text-gray-500" />
                      Platform Settings
                    </h3>
                    <p className="text-gray-600 text-sm mt-1">Configure system settings and preferences</p>
                  </button>
                  <button 
                    className="w-full text-left border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition-colors"
                    onClick={() => setActiveTab('reports')}
                  >
                    <h3 className="font-semibold flex items-center">
                      <BarChart className="h-4 w-4 mr-2 text-purple-500" />
                      Analytics Dashboard
                    </h3>
                    <p className="text-gray-600 text-sm mt-1">View comprehensive platform analytics</p>
                  </button>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow p-6 border border-gray-200 lg:col-span-2">
                <h2 className="text-xl font-semibold mb-4 flex items-center">
                  <Bell className="h-5 w-5 mr-2 text-gray-500" />
                  Recent Activities
                </h2>
                <div className="divide-y divide-gray-200">
                  {recentActivity.map((activity) => (
                    <div key={activity.id} className="py-3">
                      <div className="flex items-center">
                        <div className={`mr-4 p-2 rounded-full ${
                          activity.userRole === 'student' ? 'bg-blue-100' :
                          activity.userRole === 'industry' ? 'bg-green-100' :
                          activity.userRole === 'faculty' ? 'bg-purple-100' :
                          'bg-red-100'
                        }`}>
                          {activity.userRole === 'student' && <User className="h-5 w-5 text-blue-600" />}
                          {activity.userRole === 'industry' && <Building className="h-5 w-5 text-green-600" />}
                          {activity.userRole === 'faculty' && <Users className="h-5 w-5 text-purple-600" />}
                          {activity.userRole === 'admin' && <UserPlus className="h-5 w-5 text-red-600" />}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between">
                            <p className="text-sm font-medium text-gray-900">{activity.user}</p>
                            <p className="text-sm text-gray-500">
                              {new Date(activity.timestamp).toLocaleString('en-IN', { 
                                day: '2-digit',
                                month: 'short',
                                hour: '2-digit',
                                minute: '2-digit'
                              })}
                            </p>
                          </div>
                          <p className="text-sm text-gray-600 mt-1">{activity.action}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
        
        {activeTab === 'users' && (
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow border border-gray-200">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
                <h2 className="text-xl font-semibold flex items-center">
                  <Users className="h-5 w-5 mr-2 text-gray-500" />
                  User Management
                </h2>
                <div className="flex flex-col sm:flex-row gap-2">
                  <div className="relative rounded-md shadow-sm">
                    <input
                      type="text"
                      className="block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-primary sm:text-sm sm:leading-6"
                      placeholder="Search users..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                  </div>
                  <button className="bg-primary hover:bg-primary-600 transition-colors text-white px-4 py-2 rounded-md flex items-center text-sm">
                    <UserPlus className="h-4 w-4 mr-1" />
                    Add User
                  </button>
                </div>
              </div>

              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Name
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Email
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Role
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Status
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Date Joined
                      </th>
                      <th scope="col" className="relative px-6 py-3">
                        <span className="sr-only">Actions</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {users.map((user) => (
                      <tr key={user.id} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="flex-shrink-0 h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center">
                              <User className="h-5 w-5 text-gray-500" />
                            </div>
                            <div className="ml-4">
                              <div className="text-sm font-medium text-gray-900">{user.name}</div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">{user.email}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                            ${user.role === 'student' ? 'bg-blue-100 text-blue-800' : 
                              user.role === 'industry' ? 'bg-green-100 text-green-800' : 
                              user.role === 'faculty' ? 'bg-purple-100 text-purple-800' : 
                              'bg-red-100 text-red-800'}`}
                          >
                            {user.role.charAt(0).toUpperCase() + user.role.slice(1)}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                            ${user.status === 'active' ? 'bg-green-100 text-green-800' : 
                              user.status === 'inactive' ? 'bg-gray-100 text-gray-800' : 
                              'bg-yellow-100 text-yellow-800'}`}
                          >
                            {user.status.charAt(0).toUpperCase() + user.status.slice(1)}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {new Date(user.dateJoined).toLocaleDateString('en-IN')}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                          <button className="text-primary hover:text-primary-700 mr-3">Edit</button>
                          <button className="text-red-600 hover:text-red-800">Delete</button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}
        
        {activeTab === 'internships' && (
          <div className="bg-white p-6 rounded-lg shadow border border-gray-200">
            <h2 className="text-xl font-semibold flex items-center mb-6">
              <Briefcase className="h-5 w-5 mr-2 text-gray-500" />
              Internship Management
            </h2>
            <div className="text-center py-8">
              <p className="text-gray-500 mb-4">Internship management functionality coming soon...</p>
              <button className="bg-primary hover:bg-primary-600 text-white px-4 py-2 rounded-md">
                View Internship Analytics
              </button>
            </div>
          </div>
        )}
        
        {activeTab === 'reports' && (
          <div className="bg-white p-6 rounded-lg shadow border border-gray-200">
            <h2 className="text-xl font-semibold flex items-center mb-6">
              <BarChart className="h-5 w-5 mr-2 text-gray-500" />
              Analytics & Reports
            </h2>
            <div className="text-center py-8">
              <p className="text-gray-500 mb-4">Advanced analytics and reporting coming soon...</p>
              <button className="bg-primary hover:bg-primary-600 text-white px-4 py-2 rounded-md">
                Generate Platform Report
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminPanel;