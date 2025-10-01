import { useState } from 'react';
import { 
  User, Mail, Phone, Calendar, Shield, Settings, Users, 
  Edit, Save, X, Database, Server, CheckCircle
} from 'lucide-react';

const AdminProfile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [activeTab, setActiveTab] = useState('profile');
  
  // Mock admin data
  const [adminData, setAdminData] = useState({
    name: 'Vikram Singh',
    email: 'vikram.singh@prashikshan.edu',
    phone: '+91 9876543210',
    adminId: 'ADMIN2023001',
    role: 'Platform Administrator',
    department: 'IT Administration',
    joiningDate: '2018-03-10',
    accessLevel: 'Super Admin',
    responsibilities: ['User Management', 'System Configuration', 'Data Management', 'Security Administration', 'Platform Monitoring'],
    recentActivities: [
      {
        action: 'Approved new industry partner',
        timestamp: '2023-09-28T14:30:00',
        details: 'Approved TechInnovate Solutions as new industry partner'
      },
      {
        action: 'Updated system settings',
        timestamp: '2023-09-26T11:15:00',
        details: 'Updated email notification settings'
      },
      {
        action: 'Reset faculty account',
        timestamp: '2023-09-25T09:45:00',
        details: 'Reset password for Prof. Mehra'
      }
    ],
    systemMetrics: [
      {
        name: 'Active Users',
        value: 1245,
        change: '+12%',
        trend: 'up'
      },
      {
        name: 'New Registrations',
        value: 87,
        change: '+5%',
        trend: 'up'
      },
      {
        name: 'Open Support Tickets',
        value: 23,
        change: '-8%',
        trend: 'down'
      },
      {
        name: 'Server Uptime',
        value: '99.98%',
        change: '+0.03%',
        trend: 'up'
      }
    ],
    pendingApprovals: [
      {
        type: 'Industry Partner',
        name: 'GlobalTech Solutions',
        submittedAt: '2023-09-27T10:20:00',
        status: 'pending'
      },
      {
        type: 'Internship Posting',
        name: 'Summer AI Research Internship',
        company: 'DataMinds Inc.',
        submittedAt: '2023-09-28T09:15:00',
        status: 'pending'
      },
      {
        type: 'Faculty Account',
        name: 'Dr. Anjali Desai',
        department: 'Computer Science',
        submittedAt: '2023-09-28T16:30:00',
        status: 'pending'
      }
    ],
    loginHistory: [
      {
        device: 'Windows Desktop',
        ipAddress: '192.168.1.105',
        location: 'New Delhi, India',
        timestamp: '2023-09-30T09:30:00'
      },
      {
        device: 'Android Mobile',
        ipAddress: '10.45.32.18',
        location: 'New Delhi, India',
        timestamp: '2023-09-29T18:45:00'
      },
      {
        device: 'MacBook Pro',
        ipAddress: '172.16.0.12',
        location: 'New Delhi, India',
        timestamp: '2023-09-28T11:15:00'
      }
    ],
    profileCompletion: 100
  });

  const handleEditToggle = () => {
    setIsEditing(!isEditing);
  };

  const handleSaveProfile = () => {
    // In a real app, you would save the changes to a backend API
    setIsEditing(false);
    alert('Profile updated successfully!');
  };

  const handleCancelEdit = () => {
    // Revert any changes (in a real app, you would reload from the server)
    setIsEditing(false);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setAdminData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = {
      year: 'numeric', 
      month: 'long', 
      day: 'numeric', 
      hour: '2-digit', 
      minute: '2-digit'
    };
    return new Date(dateString).toLocaleDateString('en-IN', options);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Profile Header */}
        <div className="bg-white shadow rounded-lg overflow-hidden mb-8">
          <div className="relative bg-indigo-600 h-40">
            {/* Cover Image Area */}
            <div className="absolute bottom-0 left-0 -mb-12 ml-6">
              {/* Profile Image */}
              <div className="h-24 w-24 rounded-full bg-white p-1 shadow-md">
                <div className="h-full w-full rounded-full bg-indigo-100 flex items-center justify-center">
                  <Shield className="h-12 w-12 text-indigo-600" />
                </div>
              </div>
            </div>
          </div>
          
          <div className="pt-16 pb-6 px-6">
            <div className="flex justify-between items-start">
              <div>
                <h1 className="text-2xl font-bold text-gray-900">{adminData.name}</h1>
                <p className="text-gray-600">{adminData.role} • {adminData.department}</p>
              </div>
              <div className="flex space-x-3">
                {!isEditing ? (
                  <button
                    onClick={handleEditToggle}
                    className="flex items-center px-4 py-2 border border-gray-300 rounded-md bg-white text-gray-700 hover:bg-gray-50"
                  >
                    <Edit className="h-4 w-4 mr-2" />
                    Edit Profile
                  </button>
                ) : (
                  <>
                    <button
                      onClick={handleCancelEdit}
                      className="flex items-center px-4 py-2 border border-gray-300 rounded-md bg-white text-gray-700 hover:bg-gray-50"
                    >
                      <X className="h-4 w-4 mr-2" />
                      Cancel
                    </button>
                    <button
                      onClick={handleSaveProfile}
                      className="flex items-center px-4 py-2 border border-transparent rounded-md bg-indigo-600 text-white hover:bg-indigo-700"
                    >
                      <Save className="h-4 w-4 mr-2" />
                      Save Changes
                    </button>
                  </>
                )}
              </div>
            </div>
            
            <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-gray-400 mr-2" />
                <span className="text-gray-600">{adminData.email}</span>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 text-gray-400 mr-2" />
                <span className="text-gray-600">{adminData.phone}</span>
              </div>
              <div className="flex items-center">
                <Calendar className="h-5 w-5 text-gray-400 mr-2" />
                <span className="text-gray-600">Joined {new Date(adminData.joiningDate).toLocaleDateString('en-IN')}</span>
              </div>
            </div>
          </div>
          
          {/* Profile Completion Bar */}
          <div className="px-6 pb-6">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-sm font-medium text-gray-700">Profile Completion</h3>
              <span className="text-sm font-medium text-indigo-600">{adminData.profileCompletion}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div
                className="bg-indigo-600 h-2.5 rounded-full"
                style={{ width: `${adminData.profileCompletion}%` }}
              ></div>
            </div>
          </div>
        </div>
        
        {/* Navigation Tabs */}
        <div className="flex border-b border-gray-200 mb-8 overflow-x-auto">
          <button
            className={`py-4 px-6 whitespace-nowrap ${
              activeTab === 'profile'
                ? 'border-b-2 border-indigo-500 text-indigo-600'
                : 'text-gray-500 hover:text-gray-700'
            }`}
            onClick={() => setActiveTab('profile')}
          >
            Profile
          </button>
          <button
            className={`py-4 px-6 whitespace-nowrap ${
              activeTab === 'activity'
                ? 'border-b-2 border-indigo-500 text-indigo-600'
                : 'text-gray-500 hover:text-gray-700'
            }`}
            onClick={() => setActiveTab('activity')}
          >
            Activity
          </button>
          <button
            className={`py-4 px-6 whitespace-nowrap ${
              activeTab === 'approvals'
                ? 'border-b-2 border-indigo-500 text-indigo-600'
                : 'text-gray-500 hover:text-gray-700'
            }`}
            onClick={() => setActiveTab('approvals')}
          >
            Approvals
          </button>
          <button
            className={`py-4 px-6 whitespace-nowrap ${
              activeTab === 'settings'
                ? 'border-b-2 border-indigo-500 text-indigo-600'
                : 'text-gray-500 hover:text-gray-700'
            }`}
            onClick={() => setActiveTab('settings')}
          >
            Settings
          </button>
        </div>
        
        {/* Profile Content */}
        {activeTab === 'profile' && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column */}
            <div className="lg:col-span-2 space-y-8">
              {/* Admin Info Section */}
              <div className="bg-white shadow rounded-lg p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-4">Administrator Information</h2>
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                      {isEditing ? (
                        <input
                          type="text"
                          name="name"
                          className="w-full border border-gray-300 rounded-md p-2"
                          value={adminData.name}
                          onChange={handleInputChange}
                        />
                      ) : (
                        <p className="text-gray-600">{adminData.name}</p>
                      )}
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Administrator ID</label>
                      <p className="text-gray-600">{adminData.adminId}</p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                      {isEditing ? (
                        <input
                          type="email"
                          name="email"
                          className="w-full border border-gray-300 rounded-md p-2"
                          value={adminData.email}
                          onChange={handleInputChange}
                        />
                      ) : (
                        <p className="text-gray-600">{adminData.email}</p>
                      )}
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                      {isEditing ? (
                        <input
                          type="text"
                          name="phone"
                          className="w-full border border-gray-300 rounded-md p-2"
                          value={adminData.phone}
                          onChange={handleInputChange}
                        />
                      ) : (
                        <p className="text-gray-600">{adminData.phone}</p>
                      )}
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Role</label>
                      {isEditing ? (
                        <input
                          type="text"
                          name="role"
                          className="w-full border border-gray-300 rounded-md p-2"
                          value={adminData.role}
                          onChange={handleInputChange}
                        />
                      ) : (
                        <p className="text-gray-600">{adminData.role}</p>
                      )}
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Department</label>
                      {isEditing ? (
                        <input
                          type="text"
                          name="department"
                          className="w-full border border-gray-300 rounded-md p-2"
                          value={adminData.department}
                          onChange={handleInputChange}
                        />
                      ) : (
                        <p className="text-gray-600">{adminData.department}</p>
                      )}
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Access Level</label>
                    <p className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800">
                      {adminData.accessLevel}
                    </p>
                  </div>
                </div>
              </div>
              
              {/* System Metrics */}
              <div className="bg-white shadow rounded-lg p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-6">System Metrics</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  {adminData.systemMetrics.map((metric, index) => (
                    <div key={index} className="bg-gray-50 p-4 rounded-lg">
                      <h3 className="text-sm font-medium text-gray-500">{metric.name}</h3>
                      <div className="mt-2 flex items-baseline">
                        <p className="text-2xl font-semibold text-gray-900">{metric.value}</p>
                        <span className={`ml-2 text-sm font-medium ${
                          metric.trend === 'up' ? 'text-green-600' : 'text-red-600'
                        }`}>
                          {metric.change}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Login History */}
              <div className="bg-white shadow rounded-lg p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-4">Recent Login Activity</h2>
                <div className="space-y-4">
                  {adminData.loginHistory.map((login, index) => (
                    <div key={index} className={`flex items-start p-3 ${
                      index === 0 ? 'bg-green-50 border-l-4 border-green-500' : 'border-b last:border-0 border-gray-200'
                    }`}>
                      <div className="flex-1">
                        <div className="flex justify-between">
                          <p className="font-medium text-gray-900">{login.device}</p>
                          <span className="text-sm text-gray-500">{formatDate(login.timestamp)}</span>
                        </div>
                        <p className="text-sm text-gray-600 mt-1">
                          <span className="font-medium">IP:</span> {login.ipAddress} • <span className="font-medium">Location:</span> {login.location}
                        </p>
                        {index === 0 && (
                          <p className="text-xs text-green-700 mt-1">Current session</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Right Column */}
            <div className="space-y-8">
              {/* Responsibilities */}
              <div className="bg-white shadow rounded-lg p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-4">Responsibilities</h2>
                <div className="space-y-3">
                  {adminData.responsibilities.map((responsibility, index) => (
                    <div key={index} className="flex items-center">
                      <div className="h-2 w-2 rounded-full bg-indigo-600 mr-3"></div>
                      <span className="text-gray-600">{responsibility}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Recent Activities */}
              <div className="bg-white shadow rounded-lg p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-4">Recent Activities</h2>
                <div className="space-y-4">
                  {adminData.recentActivities.map((activity, index) => (
                    <div key={index} className="border-l-2 border-indigo-500 pl-4">
                      <p className="font-medium text-gray-900">{activity.action}</p>
                      <p className="text-sm text-gray-600 mt-0.5">{activity.details}</p>
                      <p className="text-xs text-gray-500 mt-1">{formatDate(activity.timestamp)}</p>
                    </div>
                  ))}
                </div>
                
                <div className="mt-5 text-center">
                  <a href="#" className="text-indigo-600 hover:text-indigo-800 text-sm font-medium">
                    View All Activity
                  </a>
                </div>
              </div>
              
              {/* Quick Actions */}
              <div className="bg-white shadow rounded-lg p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-4">Quick Actions</h2>
                <div className="space-y-3">
                  <button className="w-full flex items-center justify-between p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition">
                    <span className="flex items-center">
                      <Users className="h-5 w-5 text-indigo-600 mr-3" />
                      <span className="text-gray-700">Manage Users</span>
                    </span>
                    <span className="text-gray-400">&rarr;</span>
                  </button>
                  <button className="w-full flex items-center justify-between p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition">
                    <span className="flex items-center">
                      <Settings className="h-5 w-5 text-indigo-600 mr-3" />
                      <span className="text-gray-700">System Settings</span>
                    </span>
                    <span className="text-gray-400">&rarr;</span>
                  </button>
                  <button className="w-full flex items-center justify-between p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition">
                    <span className="flex items-center">
                      <Server className="h-5 w-5 text-indigo-600 mr-3" />
                      <span className="text-gray-700">System Logs</span>
                    </span>
                    <span className="text-gray-400">&rarr;</span>
                  </button>
                  <button className="w-full flex items-center justify-between p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition">
                    <span className="flex items-center">
                      <Database className="h-5 w-5 text-indigo-600 mr-3" />
                      <span className="text-gray-700">Backup & Restore</span>
                    </span>
                    <span className="text-gray-400">&rarr;</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
        
        {/* Activity Tab Content */}
        {activeTab === 'activity' && (
          <div className="space-y-8">
            {/* Activity Summary */}
            <div className="bg-white shadow rounded-lg p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Activity Summary</h2>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="text-sm font-medium text-gray-500">Today</h3>
                  <p className="text-2xl font-semibold text-gray-900 mt-2">8 actions</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="text-sm font-medium text-gray-500">This Week</h3>
                  <p className="text-2xl font-semibold text-gray-900 mt-2">42 actions</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="text-sm font-medium text-gray-500">This Month</h3>
                  <p className="text-2xl font-semibold text-gray-900 mt-2">156 actions</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="text-sm font-medium text-gray-500">Avg. Response Time</h3>
                  <p className="text-2xl font-semibold text-gray-900 mt-2">2.4 hrs</p>
                </div>
              </div>
            </div>
            
            {/* Activity Log */}
            <div className="bg-white shadow rounded-lg p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold text-gray-900">Activity Log</h2>
                <div className="flex space-x-2">
                  <select className="border border-gray-300 rounded-md p-1.5 text-sm text-gray-600">
                    <option value="all">All Activities</option>
                    <option value="user">User Management</option>
                    <option value="system">System Changes</option>
                    <option value="approvals">Approvals</option>
                  </select>
                  <select className="border border-gray-300 rounded-md p-1.5 text-sm text-gray-600">
                    <option value="recent">Most Recent</option>
                    <option value="oldest">Oldest First</option>
                  </select>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="border-b border-gray-200 pb-6">
                  <div className="text-sm text-gray-500 mb-4">Today, 30 September 2025</div>
                  
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="h-8 w-8 rounded-full bg-indigo-100 flex items-center justify-center mr-4 mt-1">
                        <User className="h-4 w-4 text-indigo-600" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">Approved new industry partner</p>
                        <p className="text-sm text-gray-600 mt-0.5">TechInnovate Solutions application was approved</p>
                        <p className="text-xs text-gray-500 mt-1">Today at 2:30 PM</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="h-8 w-8 rounded-full bg-indigo-100 flex items-center justify-center mr-4 mt-1">
                        <Settings className="h-4 w-4 text-indigo-600" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">Updated system settings</p>
                        <p className="text-sm text-gray-600 mt-0.5">Changed email notification preferences</p>
                        <p className="text-xs text-gray-500 mt-1">Today at 11:45 AM</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="h-8 w-8 rounded-full bg-indigo-100 flex items-center justify-center mr-4 mt-1">
                        <Shield className="h-4 w-4 text-indigo-600" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">Security audit completed</p>
                        <p className="text-sm text-gray-600 mt-0.5">Weekly security scan found no issues</p>
                        <p className="text-xs text-gray-500 mt-1">Today at 9:15 AM</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="border-b border-gray-200 pb-6">
                  <div className="text-sm text-gray-500 mb-4">Yesterday, 29 September 2025</div>
                  
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="h-8 w-8 rounded-full bg-indigo-100 flex items-center justify-center mr-4 mt-1">
                        <User className="h-4 w-4 text-indigo-600" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">Reset faculty account</p>
                        <p className="text-sm text-gray-600 mt-0.5">Password reset for Prof. Mehra</p>
                        <p className="text-xs text-gray-500 mt-1">Yesterday at 4:30 PM</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="h-8 w-8 rounded-full bg-indigo-100 flex items-center justify-center mr-4 mt-1">
                        <Database className="h-4 w-4 text-indigo-600" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">Database backup</p>
                        <p className="text-sm text-gray-600 mt-0.5">Scheduled weekly backup completed</p>
                        <p className="text-xs text-gray-500 mt-1">Yesterday at 1:00 AM</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 flex justify-center">
                <button className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50">
                  Load More
                </button>
              </div>
            </div>
            
            {/* System Notifications */}
            <div className="bg-white shadow rounded-lg p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-6">System Notifications</h2>
              
              <div className="space-y-4">
                <div className="flex items-start p-4 bg-yellow-50 border-l-4 border-yellow-400 rounded-md">
                  <div className="flex-shrink-0">
                    <svg className="h-5 w-5 text-yellow-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <h3 className="text-sm font-medium text-yellow-800">Storage approaching limit</h3>
                    <div className="mt-1 text-sm text-yellow-700">
                      <p>The system storage is currently at 85% capacity. Consider archiving old data.</p>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-start p-4 bg-green-50 border-l-4 border-green-400 rounded-md">
                  <div className="flex-shrink-0">
                    <svg className="h-5 w-5 text-green-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <h3 className="text-sm font-medium text-green-800">System update successful</h3>
                    <div className="mt-1 text-sm text-green-700">
                      <p>Platform updated to version 2.5.3. All services running normally.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        
        {/* Approvals Tab Content */}
        {activeTab === 'approvals' && (
          <div className="space-y-8">
            {/* Pending Approvals */}
            <div className="bg-white shadow rounded-lg p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Pending Approvals</h2>
              
              {adminData.pendingApprovals.length === 0 ? (
                <div className="text-center py-8 border border-dashed border-gray-300 rounded-lg">
                  <CheckCircle className="h-12 w-12 mx-auto text-gray-400 mb-3" />
                  <h3 className="text-lg font-medium text-gray-900">No pending approvals</h3>
                  <p className="text-gray-500">All items have been processed.</p>
                </div>
              ) : (
                <div className="space-y-6">
                  {adminData.pendingApprovals.map((approval, index) => (
                    <div key={index} className="border border-gray-200 rounded-lg p-4">
                      <div className="flex justify-between items-start">
                        <div>
                          <div className="flex items-center">
                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800 mr-2">
                              {approval.type}
                            </span>
                            <h3 className="font-medium text-gray-900">{approval.name}</h3>
                          </div>
                          {approval.company && (
                            <p className="text-gray-600 mt-1">{approval.company}</p>
                          )}
                          {approval.department && (
                            <p className="text-gray-600 mt-1">{approval.department}</p>
                          )}
                        </div>
                        <span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded-full">Pending</span>
                      </div>
                      
                      <div className="mt-3 text-sm text-gray-500">
                        <span>Submitted: {formatDate(approval.submittedAt)}</span>
                      </div>
                      
                      <div className="mt-4 pt-3 border-t border-gray-200 flex justify-end space-x-3">
                        <button className="px-3 py-1 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50">
                          Reject
                        </button>
                        <button className="px-3 py-1 bg-indigo-600 text-white rounded-md hover:bg-indigo-700">
                          Approve
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
            
            {/* Recent Approvals */}
            <div className="bg-white shadow rounded-lg p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Recent Approvals</h2>
              
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Type
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Name
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Date
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Status
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800">
                          Industry Partner
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        TechInnovate Solutions
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        Sep 28, 2025
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                          Approved
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-indigo-600">
                        <a href="#">View Details</a>
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800">
                          Faculty Account
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        Dr. Rajiv Kumar
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        Sep 27, 2025
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                          Approved
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-indigo-600">
                        <a href="#">View Details</a>
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800">
                          Internship Posting
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        DevOps Engineer Internship
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        Sep 26, 2025
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                          Rejected
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-indigo-600">
                        <a href="#">View Details</a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <div className="mt-6 flex justify-center">
                <button className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50">
                  View All Approvals
                </button>
              </div>
            </div>
          </div>
        )}
        
        {/* Settings Tab Content */}
        {activeTab === 'settings' && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="bg-white shadow rounded-lg p-6 mb-8">
                <h2 className="text-xl font-bold text-gray-900 mb-6">Account Settings</h2>
                
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                    <input 
                      type="email" 
                      className="w-full border border-gray-300 rounded-md p-2"
                      value={adminData.email}
                      onChange={(e) => setAdminData(prev => ({...prev, email: e.target.value}))}
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                    <input 
                      type="text" 
                      className="w-full border border-gray-300 rounded-md p-2"
                      value={adminData.phone}
                      onChange={(e) => setAdminData(prev => ({...prev, phone: e.target.value}))}
                    />
                  </div>
                  
                  <div className="pt-4 border-t border-gray-200">
                    <h3 className="font-medium text-gray-900 mb-3">Change Password</h3>
                    
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Current Password</label>
                        <input 
                          type="password" 
                          className="w-full border border-gray-300 rounded-md p-2"
                          placeholder="••••••••"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">New Password</label>
                        <input 
                          type="password" 
                          className="w-full border border-gray-300 rounded-md p-2"
                          placeholder="••••••••"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Confirm New Password</label>
                        <input 
                          type="password" 
                          className="w-full border border-gray-300 rounded-md p-2"
                          placeholder="••••••••"
                        />
                      </div>
                    </div>
                    
                    <div className="mt-6">
                      <button className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700">
                        Update Password
                      </button>
                    </div>
                  </div>
                  
                  <div className="pt-4 border-t border-gray-200">
                    <h3 className="font-medium text-gray-900 mb-3">Two-Factor Authentication</h3>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-gray-600">Secure your account with two-factor authentication.</p>
                        <p className="text-sm text-gray-500 mt-1">Currently enabled</p>
                      </div>
                      <button className="px-3 py-1.5 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50">
                        Configure
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white shadow rounded-lg p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-6">System Settings</h2>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="font-medium text-gray-900 mb-3">Email Notifications</h3>
                    
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-gray-600">User Registration Alerts</p>
                          <p className="text-sm text-gray-500">Receive notifications when new users register</p>
                        </div>
                        <div className="relative inline-block w-12 h-6 cursor-pointer">
                          <input type="checkbox" id="toggle-registration" className="sr-only" defaultChecked />
                          <span className="block h-6 w-12 rounded-full bg-indigo-600"></span>
                          <span className="absolute left-1 top-1 bg-white h-4 w-4 rounded-full transition-transform transform translate-x-6"></span>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-gray-600">System Alert Notifications</p>
                          <p className="text-sm text-gray-500">Receive critical system alerts</p>
                        </div>
                        <div className="relative inline-block w-12 h-6 cursor-pointer">
                          <input type="checkbox" id="toggle-alerts" className="sr-only" defaultChecked />
                          <span className="block h-6 w-12 rounded-full bg-indigo-600"></span>
                          <span className="absolute left-1 top-1 bg-white h-4 w-4 rounded-full transition-transform transform translate-x-6"></span>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-gray-600">Weekly Reports</p>
                          <p className="text-sm text-gray-500">Receive weekly system reports</p>
                        </div>
                        <div className="relative inline-block w-12 h-6 cursor-pointer">
                          <input type="checkbox" id="toggle-reports" className="sr-only" defaultChecked />
                          <span className="block h-6 w-12 rounded-full bg-indigo-600"></span>
                          <span className="absolute left-1 top-1 bg-white h-4 w-4 rounded-full transition-transform transform translate-x-6"></span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="pt-4 border-t border-gray-200">
                    <h3 className="font-medium text-gray-900 mb-3">System Preferences</h3>
                    
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Default Language</label>
                        <select className="w-full border border-gray-300 rounded-md p-2">
                          <option value="en">English</option>
                          <option value="hi">Hindi</option>
                          <option value="te">Telugu</option>
                          <option value="ta">Tamil</option>
                        </select>
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Time Zone</label>
                        <select className="w-full border border-gray-300 rounded-md p-2">
                          <option value="ist">(GMT+5:30) India Standard Time</option>
                          <option value="utc">(GMT+0:00) UTC</option>
                          <option value="pst">(GMT-8:00) Pacific Standard Time</option>
                          <option value="est">(GMT-5:00) Eastern Standard Time</option>
                        </select>
                      </div>
                    </div>
                    
                    <div className="mt-6">
                      <button className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700">
                        Save Preferences
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <div className="bg-white shadow rounded-lg p-6 mb-8">
                <h2 className="text-xl font-bold text-gray-900 mb-4">Admin Details</h2>
                <div className="space-y-2">
                  <p className="text-sm text-gray-500">
                    <span className="font-medium text-gray-700 block">Admin ID:</span>
                    {adminData.adminId}
                  </p>
                  <p className="text-sm text-gray-500">
                    <span className="font-medium text-gray-700 block">Access Level:</span>
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800 mt-1">
                      {adminData.accessLevel}
                    </span>
                  </p>
                  <p className="text-sm text-gray-500">
                    <span className="font-medium text-gray-700 block">Last Password Change:</span>
                    August 15, 2025
                  </p>
                  <p className="text-sm text-gray-500">
                    <span className="font-medium text-gray-700 block">Account Created:</span>
                    {new Date(adminData.joiningDate).toLocaleDateString('en-IN')}
                  </p>
                </div>
              </div>
              
              <div className="bg-white shadow rounded-lg p-6 mb-8">
                <h2 className="text-xl font-bold text-gray-900 mb-4">Backup & Recovery</h2>
                <div className="space-y-4">
                  <p className="text-sm text-gray-600">Configure system backup settings and manage data recovery options.</p>
                  
                  <button className="w-full flex items-center justify-between p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition">
                    <span className="flex items-center">
                      <Database className="h-5 w-5 text-indigo-600 mr-3" />
                      <span className="text-gray-700">Backup Settings</span>
                    </span>
                    <span className="text-gray-400">&rarr;</span>
                  </button>
                  
                  <button className="w-full flex items-center justify-between p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition">
                    <span className="flex items-center">
                      <Database className="h-5 w-5 text-indigo-600 mr-3" />
                      <span className="text-gray-700">Restore Data</span>
                    </span>
                    <span className="text-gray-400">&rarr;</span>
                  </button>
                </div>
                
                <div className="mt-4 p-3 bg-gray-50 rounded-md">
                  <p className="text-xs text-gray-500">Last backup: <span className="font-medium">Today at 01:00 AM</span></p>
                  <p className="text-xs text-gray-500">Backup schedule: <span className="font-medium">Daily</span></p>
                </div>
              </div>
              
              <div className="bg-white shadow rounded-lg p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-4">Data & Privacy</h2>
                <div className="space-y-4">
                  <a href="#" className="text-indigo-600 hover:text-indigo-800 block text-sm">
                    Data Retention Policy
                  </a>
                  <a href="#" className="text-indigo-600 hover:text-indigo-800 block text-sm">
                    Privacy Policy
                  </a>
                  <a href="#" className="text-indigo-600 hover:text-indigo-800 block text-sm">
                    Terms of Service
                  </a>
                  <a href="#" className="text-indigo-600 hover:text-indigo-800 block text-sm">
                    System Logs
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminProfile;