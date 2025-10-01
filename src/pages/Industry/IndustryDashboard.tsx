import { Link } from 'react-router-dom';
import { FileText, Users, Briefcase, ClipboardCheck } from 'lucide-react';

const IndustryDashboard = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Industry Dashboard</h1>
        <p className="text-gray-600 mb-6">Manage your internship programs and connect with talented students.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-2xl font-bold text-gray-900">25</h3>
            <p className="text-gray-600">Active Postings</p>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-2xl font-bold text-gray-900">156</h3>
            <p className="text-gray-600">Applications Received</p>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-2xl font-bold text-gray-900">12</h3>
            <p className="text-gray-600">Active Interns</p>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-2xl font-bold text-gray-900">4</h3>
            <p className="text-gray-600">Pending Evaluations</p>
          </div>
        </div>
        
        {/* Quick Links */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Link to="/industry/internships" className="bg-white rounded-lg shadow p-6 transition-all hover:shadow-md hover:bg-gray-50">
            <div className="flex items-center">
              <div className="bg-blue-100 p-3 rounded-full">
                <FileText className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="ml-4 text-lg font-medium text-gray-900">Internship Postings</h3>
            </div>
          </Link>
          
          <Link to="/industry/applications" className="bg-white rounded-lg shadow p-6 transition-all hover:shadow-md hover:bg-gray-50">
            <div className="flex items-center">
              <div className="bg-green-100 p-3 rounded-full">
                <Users className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="ml-4 text-lg font-medium text-gray-900">Student Applications</h3>
            </div>
          </Link>
          
          <Link to="/industry/profile" className="bg-white rounded-lg shadow p-6 transition-all hover:shadow-md hover:bg-gray-50">
            <div className="flex items-center">
              <div className="bg-purple-100 p-3 rounded-full">
                <Briefcase className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="ml-4 text-lg font-medium text-gray-900">Company Profile</h3>
            </div>
          </Link>
          
          <Link to="/industry/post-internship-evaluation" className="bg-white rounded-lg shadow p-6 transition-all hover:shadow-md hover:bg-gray-50">
            <div className="flex items-center">
              <div className="bg-amber-100 p-3 rounded-full">
                <ClipboardCheck className="h-6 w-6 text-amber-600" />
              </div>
              <h3 className="ml-4 text-lg font-medium text-gray-900">Post-Internship Evaluation</h3>
            </div>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Recent Applications</h2>
            <div className="border-t border-gray-200 pt-4">
              <div className="py-3 border-b border-gray-100">
                <div className="flex justify-between">
                  <div>
                    <p className="font-medium text-gray-800">John Smith</p>
                    <p className="text-sm text-gray-500">Frontend Developer Intern</p>
                  </div>
                  <span className="px-2 py-1 text-xs rounded-full bg-blue-100 text-blue-800">New</span>
                </div>
              </div>
              <div className="py-3 border-b border-gray-100">
                <div className="flex justify-between">
                  <div>
                    <p className="font-medium text-gray-800">Sophia Chen</p>
                    <p className="text-sm text-gray-500">Data Science Intern</p>
                  </div>
                  <span className="px-2 py-1 text-xs rounded-full bg-gray-100 text-gray-800">Reviewed</span>
                </div>
              </div>
              <div className="mt-4">
                <Link to="/industry/applications" className="text-sm font-medium text-blue-600 hover:text-blue-800">
                  View all applications →
                </Link>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Current Interns</h2>
            <div className="border-t border-gray-200 pt-4">
              <div className="py-3 border-b border-gray-100">
                <div className="flex justify-between">
                  <div>
                    <p className="font-medium text-gray-800">Priya Sharma</p>
                    <p className="text-sm text-gray-500">Full Stack Developer • 4 weeks remaining</p>
                  </div>
                  <Link 
                    to="/industry/post-internship-evaluation?intern=priya-sharma" 
                    className="px-3 py-1 text-xs rounded bg-amber-500 text-white hover:bg-amber-600"
                  >
                    Evaluate
                  </Link>
                </div>
              </div>
              <div className="py-3 border-b border-gray-100">
                <div className="flex justify-between">
                  <div>
                    <p className="font-medium text-gray-800">Michael Johnson</p>
                    <p className="text-sm text-gray-500">UX/UI Designer • 2 weeks remaining</p>
                  </div>
                  <Link 
                    to="/industry/post-internship-evaluation?intern=michael-johnson" 
                    className="px-3 py-1 text-xs rounded bg-amber-500 text-white hover:bg-amber-600"
                  >
                    Evaluate
                  </Link>
                </div>
              </div>
              <div className="mt-4">
                <Link to="/industry/interns" className="text-sm font-medium text-blue-600 hover:text-blue-800">
                  Manage all interns →
                </Link>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow p-6 mb-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold text-gray-900">Pending Evaluations</h2>
            <Link 
              to="/industry/post-internship-evaluation" 
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 text-sm font-medium"
            >
              View All Evaluations
            </Link>
          </div>
          <div className="border-t border-gray-200 pt-4">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Intern</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Position</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">End Date</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  <tr>
                    <td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Priya Sharma</td>
                    <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">Full Stack Developer</td>
                    <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">Aug 15, 2023</td>
                    <td className="px-4 py-4 whitespace-nowrap">
                      <span className="px-2 py-1 text-xs rounded-full bg-red-100 text-red-800">Pending</span>
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap text-sm">
                      <Link 
                        to="/industry/post-internship-evaluation?intern=priya-sharma" 
                        className="text-blue-600 hover:text-blue-800"
                      >
                        Complete Now
                      </Link>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Michael Johnson</td>
                    <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">UX/UI Designer</td>
                    <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">Aug 22, 2023</td>
                    <td className="px-4 py-4 whitespace-nowrap">
                      <span className="px-2 py-1 text-xs rounded-full bg-red-100 text-red-800">Pending</span>
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap text-sm">
                      <Link 
                        to="/industry/post-internship-evaluation?intern=michael-johnson" 
                        className="text-blue-600 hover:text-blue-800"
                      >
                        Complete Now
                      </Link>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndustryDashboard;