import { useState } from 'react';
import { 
  Search, Filter, Plus, Briefcase, Calendar, MapPin, 
  ChevronDown, Clock, Download, Upload,
  Trash2, Edit, Eye, CheckCircle
} from 'lucide-react';

// Mock data for internships
const internshipData = [
  {
    id: 'INT001',
    title: 'Frontend Developer Intern',
    company: 'TechSolutions Pvt Ltd',
    location: 'Delhi NCR',
    type: 'Remote',
    duration: '3 months',
    stipend: '₹15,000/month',
    startDate: '2023-10-15',
    endDate: '2024-01-15',
    status: 'Active' as 'Active' | 'Upcoming' | 'Completed',
    applications: 42,
    department: 'Computer Science',
    description: 'Looking for passionate frontend developers to work on exciting projects using React, TypeScript and modern web technologies.',
    requirements: [
      'Knowledge of HTML, CSS, JavaScript',
      'Experience with React',
      'Good problem-solving skills',
      'Basic understanding of UI/UX principles'
    ]
  },
  {
    id: 'INT002',
    title: 'Data Science Intern',
    company: 'Analytics Global',
    location: 'Bangalore',
    type: 'Hybrid',
    duration: '6 months',
    stipend: '₹20,000/month',
    startDate: '2023-11-01',
    endDate: '2024-05-01',
    status: 'Active' as 'Active' | 'Upcoming' | 'Completed',
    applications: 38,
    department: 'Data Science',
    description: 'Join our data science team to work on real-world machine learning and AI projects across various domains.',
    requirements: [
      'Strong foundation in statistics and mathematics',
      'Programming skills in Python',
      'Knowledge of ML libraries like scikit-learn, TensorFlow, or PyTorch',
      'Data visualization skills'
    ]
  },
  {
    id: 'INT003',
    title: 'Mobile App Developer Intern',
    company: 'Mobilotics',
    location: 'Mumbai',
    type: 'In-office',
    duration: '4 months',
    stipend: '₹18,000/month',
    startDate: '2023-10-01',
    endDate: '2024-02-01',
    status: 'Active' as 'Active' | 'Upcoming' | 'Completed',
    applications: 35,
    department: 'Information Technology',
    description: 'Develop cross-platform mobile applications using Flutter framework for both Android and iOS.',
    requirements: [
      'Knowledge of Dart programming language',
      'Experience with Flutter framework',
      'Understanding of mobile app UI principles',
      'Problem-solving ability'
    ]
  },
  {
    id: 'INT004',
    title: 'IoT Development Intern',
    company: 'Smart Systems',
    location: 'Pune',
    type: 'In-office',
    duration: '5 months',
    stipend: '₹16,000/month',
    startDate: '2023-09-15',
    endDate: '2024-02-15',
    status: 'Active' as 'Active' | 'Upcoming' | 'Completed',
    applications: 28,
    department: 'Electronics',
    description: 'Work on cutting-edge IoT solutions for smart homes and industrial automation using embedded systems.',
    requirements: [
      'Knowledge of embedded systems programming',
      'Experience with microcontrollers (Arduino, Raspberry Pi)',
      'Basic electronics understanding',
      'Programming skills in C/C++'
    ]
  },
  {
    id: 'INT005',
    title: 'UX/UI Design Intern',
    company: 'Design Innovate',
    location: 'Hyderabad',
    type: 'Remote',
    duration: '3 months',
    stipend: '₹15,000/month',
    startDate: '2023-11-15',
    endDate: '2024-02-15',
    status: 'Upcoming' as 'Active' | 'Upcoming' | 'Completed',
    applications: 32,
    department: 'Design',
    description: 'Join our design team to create user-centered interfaces and experiences for web and mobile applications.',
    requirements: [
      'Proficiency in design tools (Figma, Adobe XD)',
      'Understanding of user-centered design principles',
      'Basic knowledge of HTML/CSS',
      'Good communication skills'
    ]
  },
  {
    id: 'INT006',
    title: 'Marketing Analytics Intern',
    company: 'Market Vision',
    location: 'Chennai',
    type: 'Hybrid',
    duration: '4 months',
    stipend: '₹12,000/month',
    startDate: '2023-08-01',
    endDate: '2023-12-01',
    status: 'Completed' as 'Active' | 'Upcoming' | 'Completed',
    applications: 45,
    department: 'Marketing',
    description: 'Analyze marketing data to derive insights and improve campaign performance for various brands.',
    requirements: [
      'Knowledge of marketing principles',
      'Data analysis skills',
      'Experience with Excel and basic SQL',
      'Understanding of digital marketing channels'
    ]
  }
];

interface InternshipDetails {
  id: string;
  title: string;
  company: string;
  location: string;
  type: string;
  duration: string;
  stipend: string;
  startDate: string;
  endDate: string;
  status: 'Active' | 'Upcoming' | 'Completed';
  applications: number;
  department: string;
  description: string;
  requirements: string[];
}

const InternshipManagement = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('All');
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [selectedInternship, setSelectedInternship] = useState<InternshipDetails | null>(null);
  const [isDetailsModalOpen, setIsDetailsModalOpen] = useState(false);

  // Filter internships based on search term and status
  const filteredInternships = internshipData.filter(internship => {
    const matchesSearch = internship.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         internship.company.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'All' || internship.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const handleOpenDetails = (internship: InternshipDetails) => {
    setSelectedInternship(internship);
    setIsDetailsModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Internship Management</h1>
            <p className="text-gray-600">Create, track and manage internship programs</p>
          </div>
          
          <div className="flex gap-3">
            <button className="flex items-center gap-2 bg-white px-4 py-2 rounded-md border border-gray-300 shadow-sm">
              <Download className="h-4 w-4" />
              <span>Export</span>
            </button>
            <button className="flex items-center gap-2 bg-white px-4 py-2 rounded-md border border-gray-300 shadow-sm">
              <Upload className="h-4 w-4" />
              <span>Import</span>
            </button>
            <button className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-md">
              <Plus className="h-4 w-4" />
              <span>Add Internship</span>
            </button>
          </div>
        </div>
        
        {/* Search and Filter */}
        <div className="bg-white rounded-lg shadow p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm"
                placeholder="Search internships..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            <div className="relative">
              <select 
                className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
              >
                <option value="All">All Status</option>
                <option value="Active">Active</option>
                <option value="Upcoming">Upcoming</option>
                <option value="Completed">Completed</option>
              </select>
            </div>
            
            <div className="relative">
              <button
                className="flex items-center justify-between w-full px-4 py-2 bg-white border border-gray-300 rounded-md shadow-sm"
                onClick={() => setIsFilterOpen(!isFilterOpen)}
              >
                <div className="flex items-center">
                  <Filter className="h-5 w-5 mr-2 text-gray-400" />
                  <span>More Filters</span>
                </div>
                <ChevronDown className="h-5 w-5 text-gray-400" />
              </button>
              
              {isFilterOpen && (
                <div className="absolute right-0 mt-2 w-64 bg-white border border-gray-200 rounded-md shadow-lg z-10">
                  <div className="p-4">
                    <h3 className="text-sm font-medium text-gray-900 mb-2">Department</h3>
                    <div className="space-y-2">
                      {['Computer Science', 'Data Science', 'Information Technology', 'Electronics', 'Design', 'Marketing'].map((dept) => (
                        <div className="flex items-center" key={dept}>
                          <input
                            id={`department-${dept}`}
                            type="checkbox"
                            className="h-4 w-4 border-gray-300 rounded text-blue-600"
                          />
                          <label htmlFor={`department-${dept}`} className="ml-2 text-sm text-gray-700">
                            {dept}
                          </label>
                        </div>
                      ))}
                    </div>
                    
                    <h3 className="text-sm font-medium text-gray-900 mt-4 mb-2">Location</h3>
                    <div className="space-y-2">
                      {['Delhi NCR', 'Mumbai', 'Bangalore', 'Hyderabad', 'Pune', 'Chennai'].map((loc) => (
                        <div className="flex items-center" key={loc}>
                          <input
                            id={`location-${loc}`}
                            type="checkbox"
                            className="h-4 w-4 border-gray-300 rounded text-blue-600"
                          />
                          <label htmlFor={`location-${loc}`} className="ml-2 text-sm text-gray-700">
                            {loc}
                          </label>
                        </div>
                      ))}
                    </div>
                    
                    <h3 className="text-sm font-medium text-gray-900 mt-4 mb-2">Type</h3>
                    <div className="space-y-2">
                      {['Remote', 'In-office', 'Hybrid'].map((type) => (
                        <div className="flex items-center" key={type}>
                          <input
                            id={`type-${type}`}
                            type="checkbox"
                            className="h-4 w-4 border-gray-300 rounded text-blue-600"
                          />
                          <label htmlFor={`type-${type}`} className="ml-2 text-sm text-gray-700">
                            {type}
                          </label>
                        </div>
                      ))}
                    </div>
                    
                    <div className="mt-4 flex justify-between">
                      <button className="text-sm text-gray-700">Clear All</button>
                      <button className="text-sm bg-blue-600 text-white px-3 py-1 rounded">Apply</button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
        
        {/* Internship List */}
        <div className="bg-white rounded-lg shadow overflow-hidden mb-8">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Internship Details
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Duration & Stipend
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Applications
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredInternships.length === 0 ? (
                <tr>
                  <td colSpan={5} className="px-6 py-10 text-center text-sm text-gray-500">
                    No internships found matching your search criteria.
                  </td>
                </tr>
              ) : (
                filteredInternships.map((internship) => (
                  <tr key={internship.id}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 h-10 w-10 bg-blue-100 rounded-full flex items-center justify-center">
                          <Briefcase className="h-5 w-5 text-blue-600" />
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">{internship.title}</div>
                          <div className="text-sm text-gray-500">{internship.company}</div>
                          <div className="flex items-center text-xs text-gray-500 mt-1">
                            <MapPin className="h-3 w-3 mr-1" /> {internship.location} • {internship.type}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex flex-col">
                        <div className="flex items-center text-sm text-gray-900">
                          <Clock className="h-4 w-4 mr-1 text-gray-400" /> {internship.duration}
                        </div>
                        <div className="text-sm text-gray-500 mt-1">{internship.stipend}</div>
                        <div className="flex items-center text-xs text-gray-500 mt-1">
                          <Calendar className="h-3 w-3 mr-1" /> {new Date(internship.startDate).toLocaleDateString('en-IN')} to {new Date(internship.endDate).toLocaleDateString('en-IN')}
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{internship.applications}</div>
                      <div className="text-xs text-gray-500">Applications</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full 
                        ${internship.status === 'Active' ? 'bg-green-100 text-green-800' : 
                          internship.status === 'Upcoming' ? 'bg-blue-100 text-blue-800' : 
                          'bg-gray-100 text-gray-800'}`}>
                        {internship.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <div className="flex justify-end items-center space-x-3">
                        <button 
                          className="text-blue-600 hover:text-blue-900"
                          onClick={() => handleOpenDetails(internship)}
                        >
                          <Eye className="h-4 w-4" />
                        </button>
                        <button className="text-gray-600 hover:text-gray-900">
                          <Edit className="h-4 w-4" />
                        </button>
                        <button className="text-red-600 hover:text-red-900">
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
        
        {/* Pagination */}
        <div className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6 rounded-lg shadow">
          <div className="flex flex-1 justify-between sm:hidden">
            <a href="#" className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">
              Previous
            </a>
            <a href="#" className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">
              Next
            </a>
          </div>
          <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
            <div>
              <p className="text-sm text-gray-700">
                Showing <span className="font-medium">1</span> to <span className="font-medium">6</span> of{' '}
                <span className="font-medium">6</span> results
              </p>
            </div>
            <div>
              <nav className="isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
                <a href="#" className="relative inline-flex items-center rounded-l-md border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20">
                  <span className="sr-only">Previous</span>
                  <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#" aria-current="page" className="relative z-10 inline-flex items-center border border-blue-500 bg-blue-50 px-4 py-2 text-sm font-medium text-blue-600 focus:z-20">
                  1
                </a>
                <a href="#" className="relative inline-flex items-center rounded-r-md border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20">
                  <span className="sr-only">Next</span>
                  <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" />
                  </svg>
                </a>
              </nav>
            </div>
          </div>
        </div>
        
        {/* Internship Details Modal */}
        {isDetailsModalOpen && selectedInternship && (
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg shadow-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto">
              <div className="px-6 py-4 border-b border-gray-200 flex justify-between items-center">
                <h2 className="text-lg font-bold text-gray-900">Internship Details</h2>
                <button onClick={() => setIsDetailsModalOpen(false)} className="text-gray-400 hover:text-gray-500">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              
              <div className="px-6 py-4">
                <div className="mb-6">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">{selectedInternship.title}</h3>
                      <p className="text-gray-600">{selectedInternship.company}</p>
                    </div>
                    <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full 
                      ${selectedInternship.status === 'Active' ? 'bg-green-100 text-green-800' : 
                        selectedInternship.status === 'Upcoming' ? 'bg-blue-100 text-blue-800' : 
                        'bg-gray-100 text-gray-800'}`}>
                      {selectedInternship.status}
                    </span>
                  </div>
                  
                  <div className="mt-4 grid grid-cols-2 gap-4">
                    <div className="flex items-center">
                      <MapPin className="h-5 w-5 mr-2 text-gray-400" />
                      <span className="text-gray-700">{selectedInternship.location}</span>
                    </div>
                    <div className="flex items-center">
                      <Briefcase className="h-5 w-5 mr-2 text-gray-400" />
                      <span className="text-gray-700">{selectedInternship.type}</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-5 w-5 mr-2 text-gray-400" />
                      <span className="text-gray-700">{selectedInternship.duration}</span>
                    </div>
                    <div className="flex items-center">
                      <Calendar className="h-5 w-5 mr-2 text-gray-400" />
                      <span className="text-gray-700">
                        {new Date(selectedInternship.startDate).toLocaleDateString('en-IN')} to {new Date(selectedInternship.endDate).toLocaleDateString('en-IN')}
                      </span>
                    </div>
                  </div>
                </div>
                
                <div className="border-t border-gray-200 pt-4 mb-6">
                  <h4 className="font-medium text-gray-900 mb-2">Description</h4>
                  <p className="text-gray-700">{selectedInternship.description}</p>
                </div>
                
                <div className="border-t border-gray-200 pt-4 mb-6">
                  <h4 className="font-medium text-gray-900 mb-2">Requirements</h4>
                  <ul className="list-disc pl-5 text-gray-700">
                    {selectedInternship.requirements.map((req, index) => (
                      <li key={index}>{req}</li>
                    ))}
                  </ul>
                </div>
                
                <div className="border-t border-gray-200 pt-4 mb-6">
                  <h4 className="font-medium text-gray-900 mb-2">Application Statistics</h4>
                  <div className="bg-gray-50 p-4 rounded-md">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm text-gray-500">Total Applications</p>
                        <p className="text-lg font-semibold">{selectedInternship.applications}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Department</p>
                        <p className="text-lg font-semibold">{selectedInternship.department}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="px-6 py-4 border-t border-gray-200 bg-gray-50 flex justify-between">
                <div className="flex space-x-3">
                  <button className="flex items-center text-sm font-medium text-red-600 hover:text-red-800">
                    <Trash2 className="h-4 w-4 mr-1" />
                    Delete
                  </button>
                  <button className="flex items-center text-sm font-medium text-gray-600 hover:text-gray-800">
                    <Edit className="h-4 w-4 mr-1" />
                    Edit
                  </button>
                </div>
                
                <button 
                  className="flex items-center bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
                  onClick={() => setIsDetailsModalOpen(false)}
                >
                  <CheckCircle className="h-4 w-4 mr-1" />
                  Done
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default InternshipManagement;