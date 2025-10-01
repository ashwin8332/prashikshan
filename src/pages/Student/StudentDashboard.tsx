import { 
  BookOpenCheck, 
  Calendar, 
  TrendingUp, 
  AlertCircle, 
  CheckCircle2,
  Clock,
  MapPin,
  Building2
} from 'lucide-react';

const StudentDashboard = () => {
  const stats = [
    { label: 'Applications Sent', value: '12', icon: BookOpenCheck, color: 'bg-blue-500' },
    { label: 'Under Review', value: '4', icon: Clock, color: 'bg-yellow-500' },
    { label: 'Accepted', value: '2', icon: CheckCircle2, color: 'bg-green-500' },
    { label: 'Active Internships', value: '1', icon: TrendingUp, color: 'bg-purple-500' }
  ];

  const recentApplications = [
    {
      id: 1,
      company: 'Tech Innovations Pvt Ltd',
      position: 'Software Development Intern',
      location: 'Bangalore',
      status: 'Under Review',
      appliedDate: '2024-03-15',
      statusColor: 'text-yellow-600 bg-yellow-50'
    },
    {
      id: 2,
      company: 'Digital Solutions Inc',
      position: 'Web Developer Intern',
      location: 'Mumbai',
      status: 'Accepted',
      appliedDate: '2024-03-10',
      statusColor: 'text-green-600 bg-green-50'
    },
    {
      id: 3,
      company: 'StartUp Hub',
      position: 'UI/UX Design Intern',
      location: 'Delhi',
      status: 'Rejected',
      appliedDate: '2024-03-08',
      statusColor: 'text-red-600 bg-red-50'
    }
  ];

  const upcomingDeadlines = [
    {
      id: 1,
      title: 'Submit Weekly Report',
      date: '2024-03-20',
      type: 'Report'
    },
    {
      id: 2,
      title: 'Skill Assessment - JavaScript',
      date: '2024-03-22',
      type: 'Assessment'
    },
    {
      id: 3,
      title: 'Industry Mentor Meeting',
      date: '2024-03-25',
      type: 'Meeting'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Student Dashboard</h1>
          <p className="text-gray-600 mt-2">Welcome back, Raj Kumar! Track your internship journey.</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="bg-white rounded-lg shadow p-6">
                <div className="flex items-center">
                  <div className={`${stat.color} p-3 rounded-lg`}>
                    <Icon className="text-white" size={24} />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-2xl font-bold text-gray-900">{stat.value}</h3>
                    <p className="text-gray-600 text-sm">{stat.label}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Recent Applications */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow">
              <div className="px-6 py-4 border-b border-gray-200">
                <h2 className="text-lg font-semibold text-gray-900">Recent Applications</h2>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  {recentApplications.map((application) => (
                    <div key={application.id} className="border border-gray-200 rounded-lg p-4">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h3 className="font-semibold text-gray-900">{application.position}</h3>
                          <div className="flex items-center text-gray-600 text-sm mt-1">
                            <Building2 size={16} className="mr-1" />
                            {application.company}
                          </div>
                          <div className="flex items-center text-gray-600 text-sm mt-1">
                            <MapPin size={16} className="mr-1" />
                            {application.location}
                          </div>
                        </div>
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${application.statusColor}`}>
                          {application.status}
                        </span>
                      </div>
                      <div className="text-sm text-gray-500">
                        Applied on {new Date(application.appliedDate).toLocaleDateString()}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-6">
                  <button className="w-full text-center py-2 text-primary-600 hover:text-primary-700 font-medium">
                    View All Applications
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Upcoming Deadlines */}
            <div className="bg-white rounded-lg shadow">
              <div className="px-6 py-4 border-b border-gray-200">
                <h2 className="text-lg font-semibold text-gray-900">Upcoming Deadlines</h2>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  {upcomingDeadlines.map((deadline) => (
                    <div key={deadline.id} className="flex items-start space-x-3">
                      <div className="bg-primary-100 p-2 rounded-lg">
                        <Calendar className="text-primary-600" size={16} />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-medium text-gray-900">{deadline.title}</h4>
                        <p className="text-sm text-gray-600">{deadline.type}</p>
                        <p className="text-sm text-gray-500">{new Date(deadline.date).toLocaleDateString()}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white rounded-lg shadow">
              <div className="px-6 py-4 border-b border-gray-200">
                <h2 className="text-lg font-semibold text-gray-900">Quick Actions</h2>
              </div>
              <div className="p-6 space-y-3">
                <button className="w-full bg-primary-600 text-white py-2 px-4 rounded-lg hover:bg-primary-700 transition-colors">
                  Find Internships
                </button>
                <button className="w-full border border-gray-300 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-50 transition-colors">
                  Update Profile
                </button>
                <button className="w-full border border-gray-300 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-50 transition-colors">
                  Take Skill Assessment
                </button>
                <button className="w-full border border-gray-300 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-50 transition-colors">
                  Submit Report
                </button>
              </div>
            </div>

            {/* Progress Tracker */}
            <div className="bg-white rounded-lg shadow">
              <div className="px-6 py-4 border-b border-gray-200">
                <h2 className="text-lg font-semibold text-gray-900">Profile Completion</h2>
              </div>
              <div className="p-6">
                <div className="mb-4">
                  <div className="flex justify-between text-sm font-medium text-gray-900 mb-2">
                    <span>75% Complete</span>
                  </div>
                  <div className="bg-gray-200 rounded-full h-2">
                    <div className="bg-primary-600 h-2 rounded-full" style={{ width: '75%' }}></div>
                  </div>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center">
                    <CheckCircle2 className="text-green-500 mr-2" size={16} />
                    <span>Basic Information</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle2 className="text-green-500 mr-2" size={16} />
                    <span>Academic Details</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle2 className="text-green-500 mr-2" size={16} />
                    <span>Skills & Interests</span>
                  </div>
                  <div className="flex items-center">
                    <AlertCircle className="text-yellow-500 mr-2" size={16} />
                    <span>Resume Upload</span>
                  </div>
                  <div className="flex items-center">
                    <AlertCircle className="text-gray-400 mr-2" size={16} />
                    <span>Portfolio Link</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;