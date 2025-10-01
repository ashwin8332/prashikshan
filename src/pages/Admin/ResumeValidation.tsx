import { useState } from 'react';
import {
  Search, Filter, Download, Upload, FileText,
  CheckCircle, AlertTriangle, X, ChevronDown, Eye, ThumbsUp, ThumbsDown
} from 'lucide-react';

// Mock data for student resumes
const resumeData = [
  {
    id: 'RES001',
    studentName: 'Aarav Sharma',
    rollNumber: 'CS2023001',
    email: 'aarav.sharma@student.edu',
    department: 'Computer Science',
    year: '3rd',
    submittedDate: '2023-09-15',
    status: 'validated' as 'validated' | 'rejected' | 'pending',
    skillMatch: 85,
    format: 'PDF',
    fileSize: '420 KB',
    validationComments: [
      {
        type: 'positive' as 'positive' | 'negative',
        comment: 'Good structure and content organization'
      },
      {
        type: 'positive' as 'positive' | 'negative',
        comment: 'Relevant technical skills clearly highlighted'
      },
      {
        type: 'negative' as 'positive' | 'negative',
        comment: 'Missing specific project outcomes and metrics'
      }
    ],
    skillsIdentified: ['React', 'JavaScript', 'Node.js', 'MongoDB', 'Python', 'Git', 'TypeScript'],
    summary: 'Computer Science student with strong frontend development skills and multiple project experiences. Good presentation of technical skills but could improve on quantifying project outcomes.'
  },
  {
    id: 'RES002',
    studentName: 'Neha Patel',
    rollNumber: 'IT2023042',
    email: 'neha.patel@student.edu',
    department: 'Information Technology',
    year: '4th',
    submittedDate: '2023-09-18',
    status: 'pending' as 'validated' | 'rejected' | 'pending',
    skillMatch: null,
    format: 'DOCX',
    fileSize: '380 KB',
    validationComments: [],
    skillsIdentified: [],
    summary: ''
  },
  {
    id: 'RES003',
    studentName: 'Vikram Singh',
    rollNumber: 'EC2023105',
    email: 'vikram.singh@student.edu',
    department: 'Electronics',
    year: '3rd',
    submittedDate: '2023-09-10',
    status: 'rejected' as 'validated' | 'rejected' | 'pending',
    skillMatch: 45,
    format: 'PDF',
    fileSize: '350 KB',
    validationComments: [
      {
        type: 'negative' as 'positive' | 'negative',
        comment: 'Formatting issues with inconsistent spacing'
      },
      {
        type: 'negative' as 'positive' | 'negative',
        comment: 'Multiple spelling and grammar errors'
      },
      {
        type: 'negative' as 'positive' | 'negative',
        comment: 'Projects section lacks detailed descriptions'
      }
    ],
    skillsIdentified: ['Arduino', 'C++', 'PCB Design', 'IoT'],
    summary: 'Electronics student with basic technical skills but poor resume presentation. Multiple formatting issues and grammatical errors. Projects section needs significant improvement.'
  },
  {
    id: 'RES004',
    studentName: 'Priya Mehta',
    rollNumber: 'CS2023089',
    email: 'priya.mehta@student.edu',
    department: 'Computer Science',
    year: '3rd',
    submittedDate: '2023-09-20',
    status: 'validated' as 'validated' | 'rejected' | 'pending',
    skillMatch: 92,
    format: 'PDF',
    fileSize: '410 KB',
    validationComments: [
      {
        type: 'positive' as 'positive' | 'negative',
        comment: 'Excellent project descriptions with clear outcomes'
      },
      {
        type: 'positive' as 'positive' | 'negative',
        comment: 'Strong technical skills relevant to industry needs'
      },
      {
        type: 'positive' as 'positive' | 'negative',
        comment: 'Well-formatted and professional presentation'
      }
    ],
    skillsIdentified: ['Java', 'Spring Boot', 'React', 'Docker', 'AWS', 'MySQL', 'Hibernate', 'Git'],
    summary: 'Outstanding resume showcasing strong full-stack development skills with clear project outcomes. Professional formatting and excellent skill representation. High industry skills match.'
  },
  {
    id: 'RES005',
    studentName: 'Raj Malhotra',
    rollNumber: 'ME2023056',
    email: 'raj.malhotra@student.edu',
    department: 'Mechanical',
    year: '4th',
    submittedDate: '2023-09-12',
    status: 'validated' as 'validated' | 'rejected' | 'pending',
    skillMatch: 78,
    format: 'PDF',
    fileSize: '480 KB',
    validationComments: [
      {
        type: 'positive' as 'positive' | 'negative',
        comment: 'Good technical project descriptions'
      },
      {
        type: 'negative' as 'positive' | 'negative',
        comment: 'Could improve on highlighting soft skills'
      }
    ],
    skillsIdentified: ['AutoCAD', 'SolidWorks', 'MATLAB', '3D Printing', 'Project Management', 'Thermodynamics'],
    summary: 'Mechanical engineering student with strong technical skills in CAD software and design. Good project descriptions but needs improvement in soft skills presentation.'
  },
  {
    id: 'RES006',
    studentName: 'Sanya Gupta',
    rollNumber: 'IT2023021',
    email: 'sanya.gupta@student.edu',
    department: 'Information Technology',
    year: '3rd',
    submittedDate: '2023-09-22',
    status: 'pending' as 'validated' | 'rejected' | 'pending',
    skillMatch: null,
    format: 'PDF',
    fileSize: '395 KB',
    validationComments: [],
    skillsIdentified: [],
    summary: ''
  }
];

interface ResumeDetails {
  id: string;
  studentName: string;
  rollNumber: string;
  email: string;
  department: string;
  year: string;
  submittedDate: string;
  status: 'validated' | 'rejected' | 'pending';
  skillMatch: number | null;
  format: string;
  fileSize: string;
  validationComments: {
    type: 'positive' | 'negative';
    comment: string;
  }[];
  skillsIdentified: string[];
  summary: string;
}

const ResumeValidation = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('All');
  const [departmentFilter, setDepartmentFilter] = useState('All');
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [selectedResume, setSelectedResume] = useState<ResumeDetails | null>(null);
  const [isDetailsModalOpen, setIsDetailsModalOpen] = useState(false);

  // Filter resumes based on search term and status
  const filteredResumes = resumeData.filter(resume => {
    const matchesSearch = resume.studentName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         resume.rollNumber.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         resume.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'All' || resume.status === statusFilter;
    const matchesDepartment = departmentFilter === 'All' || resume.department === departmentFilter;
    return matchesSearch && matchesStatus && matchesDepartment;
  });

  // Function to get status badge style based on status
  const getStatusBadgeStyle = (status: string) => {
    switch (status) {
      case 'validated':
        return 'bg-green-100 text-green-800';
      case 'rejected':
        return 'bg-red-100 text-red-800';
      case 'pending':
        return 'bg-yellow-100 text-yellow-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  // Function to get status icon based on status
  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'validated':
        return <CheckCircle className="h-4 w-4 text-green-600" />;
      case 'rejected':
        return <X className="h-4 w-4 text-red-600" />;
      case 'pending':
        return <AlertTriangle className="h-4 w-4 text-yellow-600" />;
      default:
        return null;
    }
  };

  const handleOpenDetails = (resume: ResumeDetails) => {
    setSelectedResume(resume);
    setIsDetailsModalOpen(true);
  };

  // Mocked AI validation function (in a real app, this would call an API)
  const handleValidateResume = () => {
    if (selectedResume && selectedResume.status === 'pending') {
      // Simulate API call delay
      setTimeout(() => {
        const updatedResume: ResumeDetails = {
          ...selectedResume,
          status: 'validated',
          skillMatch: 88,
          validationComments: [
            {
              type: 'positive',
              comment: 'Good organization and structure'
            },
            {
              type: 'positive',
              comment: 'Relevant technical skills clearly presented'
            },
            {
              type: 'negative',
              comment: 'Could improve quantitative achievements'
            }
          ],
          skillsIdentified: ['React', 'JavaScript', 'Node.js', 'MongoDB', 'Express', 'Git'],
          summary: 'Well-structured resume with strong technical skills. Projects are clearly described but could be enhanced with more quantitative achievements. Overall good presentation and content.'
        };
        
        setSelectedResume(updatedResume);
      }, 1500);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Resume Validation</h1>
            <p className="text-gray-600">Review, validate and provide feedback on student resumes</p>
          </div>
          
          <div className="flex gap-3">
            <button className="flex items-center gap-2 bg-white px-4 py-2 rounded-md border border-gray-300 shadow-sm">
              <Download className="h-4 w-4" />
              <span>Export</span>
            </button>
            <button className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-md">
              <Upload className="h-4 w-4" />
              <span>Bulk Upload</span>
            </button>
          </div>
        </div>
        
        {/* Search and Filter */}
        <div className="bg-white rounded-lg shadow p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm"
                placeholder="Search student name or ID..."
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
                <option value="validated">Validated</option>
                <option value="rejected">Rejected</option>
                <option value="pending">Pending</option>
              </select>
            </div>
            
            <div className="relative">
              <select 
                className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
                value={departmentFilter}
                onChange={(e) => setDepartmentFilter(e.target.value)}
              >
                <option value="All">All Departments</option>
                <option value="Computer Science">Computer Science</option>
                <option value="Information Technology">Information Technology</option>
                <option value="Electronics">Electronics</option>
                <option value="Mechanical">Mechanical</option>
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
                    <h3 className="text-sm font-medium text-gray-900 mb-2">Year</h3>
                    <div className="space-y-2">
                      {['1st', '2nd', '3rd', '4th'].map((year) => (
                        <div className="flex items-center" key={year}>
                          <input
                            id={`year-${year}`}
                            type="checkbox"
                            className="h-4 w-4 border-gray-300 rounded text-blue-600"
                          />
                          <label htmlFor={`year-${year}`} className="ml-2 text-sm text-gray-700">
                            {year} Year
                          </label>
                        </div>
                      ))}
                    </div>
                    
                    <h3 className="text-sm font-medium text-gray-900 mt-4 mb-2">Skill Match</h3>
                    <div className="space-y-2">
                      {[
                        { label: 'High Match (80%+)', value: 'high' },
                        { label: 'Medium Match (50-79%)', value: 'medium' },
                        { label: 'Low Match (<50%)', value: 'low' }
                      ].map((match) => (
                        <div className="flex items-center" key={match.value}>
                          <input
                            id={`match-${match.value}`}
                            type="checkbox"
                            className="h-4 w-4 border-gray-300 rounded text-blue-600"
                          />
                          <label htmlFor={`match-${match.value}`} className="ml-2 text-sm text-gray-700">
                            {match.label}
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
        
        {/* Resume List */}
        <div className="bg-white rounded-lg shadow overflow-hidden mb-8">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Student
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Department & Year
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Submitted
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Skill Match
                </th>
                <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredResumes.length === 0 ? (
                <tr>
                  <td colSpan={6} className="px-6 py-10 text-center text-sm text-gray-500">
                    No resumes found matching your search criteria.
                  </td>
                </tr>
              ) : (
                filteredResumes.map((resume) => (
                  <tr key={resume.id}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 h-10 w-10 bg-blue-100 rounded-full flex items-center justify-center">
                          <FileText className="h-5 w-5 text-blue-600" />
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">{resume.studentName}</div>
                          <div className="text-sm text-gray-500">{resume.email}</div>
                          <div className="text-xs text-gray-500 mt-1">ID: {resume.rollNumber}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{resume.department}</div>
                      <div className="text-sm text-gray-500">{resume.year} Year</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{new Date(resume.submittedDate).toLocaleDateString('en-IN')}</div>
                      <div className="text-xs text-gray-500">{resume.format} • {resume.fileSize}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full items-center
                        ${getStatusBadgeStyle(resume.status)}`}>
                        {getStatusIcon(resume.status)}
                        <span className="ml-1 capitalize">{resume.status}</span>
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {resume.skillMatch !== null ? (
                        <div className="flex items-center">
                          <div className="flex-1 bg-gray-200 rounded-full h-2 w-16 mr-2">
                            <div 
                              className={`h-full rounded-full ${
                                resume.skillMatch >= 80 ? 'bg-green-500' : 
                                resume.skillMatch >= 50 ? 'bg-yellow-500' : 
                                'bg-red-500'
                              }`} 
                              style={{ width: `${resume.skillMatch}%` }}
                            ></div>
                          </div>
                          <span className="text-sm text-gray-700">{resume.skillMatch}%</span>
                        </div>
                      ) : (
                        <span className="text-xs text-gray-500">Not analyzed</span>
                      )}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <div className="flex justify-end space-x-3">
                        <button 
                          className="text-blue-600 hover:text-blue-900"
                          onClick={() => handleOpenDetails(resume)}
                        >
                          <Eye className="h-4 w-4" />
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
        
        {/* Resume Details Modal */}
        {isDetailsModalOpen && selectedResume && (
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg shadow-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto">
              <div className="px-6 py-4 border-b border-gray-200 flex justify-between items-center">
                <h2 className="text-lg font-bold text-gray-900">Resume Details</h2>
                <button onClick={() => setIsDetailsModalOpen(false)} className="text-gray-400 hover:text-gray-500">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              
              <div className="px-6 py-4">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{selectedResume.studentName}</h3>
                    <p className="text-gray-600">{selectedResume.rollNumber} • {selectedResume.department}</p>
                  </div>
                  <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full items-center
                    ${getStatusBadgeStyle(selectedResume.status)}`}>
                    {getStatusIcon(selectedResume.status)}
                    <span className="ml-1 capitalize">{selectedResume.status}</span>
                  </span>
                </div>
                
                {/* Resume Preview Placeholder */}
                <div className="border border-gray-200 rounded-lg p-4 mb-6 bg-gray-50 min-h-[200px] flex flex-col items-center justify-center">
                  <FileText className="h-12 w-12 text-gray-400 mb-2" />
                  <p className="text-gray-500 text-sm">Resume Preview</p>
                  <button className="mt-2 bg-blue-600 text-white px-3 py-1 rounded text-sm">
                    Download Resume
                  </button>
                </div>
                
                {/* AI Analysis */}
                <div className="mb-6">
                  <h4 className="font-medium text-gray-900 mb-3">AI Analysis</h4>
                  
                  {selectedResume.status === 'pending' ? (
                    <div className="bg-yellow-50 border border-yellow-200 rounded-md p-4">
                      <div className="flex items-center">
                        <AlertTriangle className="h-5 w-5 text-yellow-500 mr-2" />
                        <p className="text-yellow-700">This resume has not been analyzed yet.</p>
                      </div>
                      <button 
                        onClick={handleValidateResume}
                        className="mt-2 bg-blue-600 text-white px-3 py-1 rounded text-sm"
                      >
                        Run AI Analysis
                      </button>
                    </div>
                  ) : (
                    <>
                      {/* Skill Match */}
                      <div className="bg-gray-50 rounded-md p-4 mb-4">
                        <div className="flex items-center justify-between mb-2">
                          <h5 className="font-medium text-gray-800">Industry Skill Match</h5>
                          <span className={`text-sm font-medium ${
                            selectedResume.skillMatch && selectedResume.skillMatch >= 80 ? 'text-green-600' : 
                            selectedResume.skillMatch && selectedResume.skillMatch >= 50 ? 'text-yellow-600' : 
                            'text-red-600'
                          }`}>
                            {selectedResume.skillMatch}%
                          </span>
                        </div>
                        <div className="bg-gray-200 rounded-full h-2.5">
                          <div 
                            className={`h-full rounded-full ${
                              selectedResume.skillMatch && selectedResume.skillMatch >= 80 ? 'bg-green-500' : 
                              selectedResume.skillMatch && selectedResume.skillMatch >= 50 ? 'bg-yellow-500' : 
                              'bg-red-500'
                            }`} 
                            style={{ width: `${selectedResume.skillMatch}%` }}
                          ></div>
                        </div>
                      </div>
                      
                      {/* Skills Identified */}
                      <div className="mb-4">
                        <h5 className="font-medium text-gray-800 mb-2">Skills Identified</h5>
                        <div className="flex flex-wrap gap-2">
                          {selectedResume.skillsIdentified.map((skill, index) => (
                            <span 
                              key={index} 
                              className="bg-blue-50 text-blue-700 px-2 py-1 rounded-md text-xs"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      {/* Summary */}
                      <div className="mb-4">
                        <h5 className="font-medium text-gray-800 mb-2">Resume Summary</h5>
                        <p className="text-sm text-gray-700 bg-gray-50 p-3 rounded-md">
                          {selectedResume.summary}
                        </p>
                      </div>
                      
                      {/* Validation Comments */}
                      <div>
                        <h5 className="font-medium text-gray-800 mb-2">Validation Comments</h5>
                        <div className="space-y-2">
                          {selectedResume.validationComments.map((comment, index) => (
                            <div 
                              key={index} 
                              className={`flex items-start p-2 rounded-md ${
                                comment.type === 'positive' ? 'bg-green-50' : 'bg-red-50'
                              }`}
                            >
                              {comment.type === 'positive' ? (
                                <ThumbsUp className="h-4 w-4 text-green-600 mr-2 mt-0.5" />
                              ) : (
                                <ThumbsDown className="h-4 w-4 text-red-600 mr-2 mt-0.5" />
                              )}
                              <p className={`text-sm ${
                                comment.type === 'positive' ? 'text-green-700' : 'text-red-700'
                              }`}>
                                {comment.comment}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </>
                  )}
                </div>
                
                {/* Admin Feedback Form */}
                <div className="border-t border-gray-200 pt-4">
                  <h4 className="font-medium text-gray-900 mb-3">Add Faculty Feedback</h4>
                  <textarea 
                    className="w-full border border-gray-300 rounded-md p-2 min-h-[100px]"
                    placeholder="Add your feedback or suggestions for the student..."
                  ></textarea>
                </div>
              </div>
              
              <div className="px-6 py-4 border-t border-gray-200 bg-gray-50 flex justify-between">
                <div className="flex space-x-3">
                  {selectedResume.status !== 'rejected' && (
                    <button className="flex items-center text-sm font-medium text-red-600 hover:text-red-800">
                      <X className="h-4 w-4 mr-1" />
                      Reject Resume
                    </button>
                  )}
                  {selectedResume.status !== 'validated' && (
                    <button className="flex items-center text-sm font-medium text-green-600 hover:text-green-800">
                      <CheckCircle className="h-4 w-4 mr-1" />
                      Validate Resume
                    </button>
                  )}
                </div>
                
                <button 
                  className="flex items-center bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
                  onClick={() => setIsDetailsModalOpen(false)}
                >
                  Save & Close
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ResumeValidation;