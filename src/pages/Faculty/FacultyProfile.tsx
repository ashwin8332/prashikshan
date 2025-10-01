import { useState } from 'react';
import { 
  User, Mail, Phone, Calendar, Briefcase, Book, 
  Edit, Save, X, FileText, ExternalLink, Award, Users
} from 'lucide-react';

const FacultyProfile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [activeTab, setActiveTab] = useState('profile');
  
  // Mock faculty data
  const [facultyData, setFacultyData] = useState({
    name: 'Dr. Rajesh Kumar',
    email: 'rajesh.kumar@faculty.edu',
    phone: '+91 9876543210',
    department: 'Computer Science & Engineering',
    facultyId: 'FAC2023108',
    designation: 'Associate Professor',
    joiningDate: '2015-06-15',
    address: '45 Faculty Housing, University Campus, New Delhi',
    bio: 'Experienced computer science educator with over 10 years of teaching and research experience. Specializing in machine learning, artificial intelligence, and distributed systems. Passionate about mentoring students and bridging the gap between academia and industry.',
    expertise: ['Machine Learning', 'Artificial Intelligence', 'Distributed Systems', 'Cloud Computing', 'Data Mining'],
    education: [
      {
        degree: 'Ph.D. in Computer Science',
        institution: 'Indian Institute of Technology, Delhi',
        year: '2008 - 2013',
      },
      {
        degree: 'M.Tech in Computer Science',
        institution: 'National Institute of Technology, Warangal',
        year: '2006 - 2008',
      },
      {
        degree: 'B.Tech in Computer Science',
        institution: 'Anna University, Chennai',
        year: '2002 - 2006',
      }
    ],
    publications: [
      {
        title: 'A Novel Approach to Distributed Machine Learning in Resource-Constrained Environments',
        journal: 'IEEE Transactions on Parallel and Distributed Systems',
        year: 2022,
        link: 'https://example.com/publication/1',
        coAuthors: 'S. Gupta, A. Sharma, P. Verma'
      },
      {
        title: 'Enhancing Privacy in Federated Learning: A Comprehensive Study',
        journal: 'Journal of Machine Learning Research',
        year: 2021,
        link: 'https://example.com/publication/2',
        coAuthors: 'M. Singh, R. Patel'
      }
    ],
    courses: [
      {
        code: 'CS401',
        title: 'Advanced Machine Learning',
        semester: 'Fall 2023',
        students: 45
      },
      {
        code: 'CS305',
        title: 'Distributed Systems',
        semester: 'Fall 2023',
        students: 60
      },
      {
        code: 'CS201',
        title: 'Data Structures and Algorithms',
        semester: 'Spring 2023',
        students: 120
      }
    ],
    researchProjects: [
      {
        title: 'AI-Driven Approaches for Smart Healthcare Systems',
        funding: 'Ministry of Electronics and IT',
        duration: '2022-2025',
        role: 'Principal Investigator',
        status: 'ongoing'
      },
      {
        title: 'Privacy-Preserving Techniques for Edge Computing',
        funding: 'Department of Science and Technology',
        duration: '2020-2023',
        role: 'Co-Investigator',
        status: 'completed'
      }
    ],
    internshipSupervision: [
      {
        title: 'Machine Learning for Predictive Maintenance',
        company: 'Tech Solutions India Ltd.',
        students: 4,
        year: 2023,
        status: 'ongoing'
      },
      {
        title: 'Cloud-Based Education Platform',
        company: 'EduTech Innovations',
        students: 3,
        year: 2022,
        status: 'completed'
      }
    ],
    awards: [
      {
        title: 'Outstanding Faculty Award',
        organization: 'Delhi Technical University',
        year: 2022
      },
      {
        title: 'Best Research Paper',
        organization: 'International Conference on Machine Learning',
        year: 2021
      }
    ],
    profileCompletion: 95
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
    setFacultyData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleExpertiseChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const expertiseString = e.target.value;
    const expertiseArray = expertiseString.split(',').map(item => item.trim());
    setFacultyData(prev => ({
      ...prev,
      expertise: expertiseArray
    }));
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Profile Header */}
        <div className="bg-white shadow rounded-lg overflow-hidden mb-8">
          <div className="relative bg-blue-700 h-40">
            {/* Cover Image Area */}
            <div className="absolute bottom-0 left-0 -mb-12 ml-6">
              {/* Profile Image */}
              <div className="h-24 w-24 rounded-full bg-white p-1 shadow-md">
                <div className="h-full w-full rounded-full bg-blue-100 flex items-center justify-center">
                  <User className="h-12 w-12 text-blue-700" />
                </div>
              </div>
            </div>
          </div>
          
          <div className="pt-16 pb-6 px-6">
            <div className="flex justify-between items-start">
              <div>
                <h1 className="text-2xl font-bold text-gray-900">{facultyData.name}</h1>
                <p className="text-gray-600">{facultyData.designation} • {facultyData.department}</p>
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
                      className="flex items-center px-4 py-2 border border-transparent rounded-md bg-blue-700 text-white hover:bg-blue-800"
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
                <span className="text-gray-600">{facultyData.email}</span>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 text-gray-400 mr-2" />
                <span className="text-gray-600">{facultyData.phone}</span>
              </div>
              <div className="flex items-center">
                <Calendar className="h-5 w-5 text-gray-400 mr-2" />
                <span className="text-gray-600">Joined {new Date(facultyData.joiningDate).toLocaleDateString('en-IN')}</span>
              </div>
            </div>
          </div>
          
          {/* Profile Completion Bar */}
          <div className="px-6 pb-6">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-sm font-medium text-gray-700">Profile Completion</h3>
              <span className="text-sm font-medium text-blue-700">{facultyData.profileCompletion}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div
                className="bg-blue-700 h-2.5 rounded-full"
                style={{ width: `${facultyData.profileCompletion}%` }}
              ></div>
            </div>
          </div>
        </div>
        
        {/* Navigation Tabs */}
        <div className="flex border-b border-gray-200 mb-8 overflow-x-auto">
          <button
            className={`py-4 px-6 whitespace-nowrap ${
              activeTab === 'profile'
                ? 'border-b-2 border-blue-600 text-blue-700'
                : 'text-gray-500 hover:text-gray-700'
            }`}
            onClick={() => setActiveTab('profile')}
          >
            Profile
          </button>
          <button
            className={`py-4 px-6 whitespace-nowrap ${
              activeTab === 'publications'
                ? 'border-b-2 border-blue-600 text-blue-700'
                : 'text-gray-500 hover:text-gray-700'
            }`}
            onClick={() => setActiveTab('publications')}
          >
            Publications
          </button>
          <button
            className={`py-4 px-6 whitespace-nowrap ${
              activeTab === 'courses'
                ? 'border-b-2 border-blue-600 text-blue-700'
                : 'text-gray-500 hover:text-gray-700'
            }`}
            onClick={() => setActiveTab('courses')}
          >
            Courses
          </button>
          <button
            className={`py-4 px-6 whitespace-nowrap ${
              activeTab === 'internships'
                ? 'border-b-2 border-blue-600 text-blue-700'
                : 'text-gray-500 hover:text-gray-700'
            }`}
            onClick={() => setActiveTab('internships')}
          >
            Internships
          </button>
          <button
            className={`py-4 px-6 whitespace-nowrap ${
              activeTab === 'settings'
                ? 'border-b-2 border-blue-600 text-blue-700'
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
              {/* About Me Section */}
              <div className="bg-white shadow rounded-lg p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-4">About Me</h2>
                {isEditing ? (
                  <textarea
                    name="bio"
                    className="w-full border border-gray-300 rounded-md p-3"
                    rows={5}
                    value={facultyData.bio}
                    onChange={handleInputChange}
                  ></textarea>
                ) : (
                  <p className="text-gray-600">{facultyData.bio}</p>
                )}
              </div>
              
              {/* Education Section */}
              <div className="bg-white shadow rounded-lg p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-4">Education</h2>
                <div className="space-y-4">
                  {facultyData.education.map((edu, index) => (
                    <div key={index} className="border-l-2 border-blue-600 pl-4 py-1">
                      <h3 className="font-medium text-gray-900">{edu.degree}</h3>
                      <p className="text-gray-600">{edu.institution}</p>
                      <div className="mt-1 text-sm text-gray-500">
                        <span>{edu.year}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Research Projects Section */}
              <div className="bg-white shadow rounded-lg p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-4">Research Projects</h2>
                <div className="space-y-6">
                  {facultyData.researchProjects.map((project, index) => (
                    <div key={index} className="border-t border-gray-200 pt-4 first:border-0 first:pt-0">
                      <div className="flex justify-between items-start">
                        <h3 className="font-medium text-gray-900">{project.title}</h3>
                        <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                          project.status === 'completed' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'
                        }`}>
                          {project.status === 'completed' ? 'Completed' : 'Ongoing'}
                        </span>
                      </div>
                      <p className="text-gray-600 mt-2">
                        <span className="font-medium">Funding:</span> {project.funding}
                      </p>
                      <p className="text-gray-600">
                        <span className="font-medium">Duration:</span> {project.duration}
                      </p>
                      <p className="text-gray-600">
                        <span className="font-medium">Role:</span> {project.role}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Awards and Recognition */}
              <div className="bg-white shadow rounded-lg p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-4">Awards & Recognition</h2>
                <div className="space-y-4">
                  {facultyData.awards.map((award, index) => (
                    <div key={index} className="flex items-start">
                      <Award className="h-5 w-5 text-yellow-500 mr-3 mt-0.5" />
                      <div>
                        <h3 className="font-medium text-gray-900">{award.title}</h3>
                        <p className="text-gray-600">{award.organization}, {award.year}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Right Column */}
            <div className="space-y-8">
              {/* Personal Information */}
              <div className="bg-white shadow rounded-lg p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-4">Faculty Information</h2>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Faculty ID</label>
                    <p className="text-gray-600">{facultyData.facultyId}</p>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Department</label>
                    {isEditing ? (
                      <input
                        type="text"
                        name="department"
                        className="w-full border border-gray-300 rounded-md p-2"
                        value={facultyData.department}
                        onChange={handleInputChange}
                      />
                    ) : (
                      <p className="text-gray-600">{facultyData.department}</p>
                    )}
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Designation</label>
                    {isEditing ? (
                      <input
                        type="text"
                        name="designation"
                        className="w-full border border-gray-300 rounded-md p-2"
                        value={facultyData.designation}
                        onChange={handleInputChange}
                      />
                    ) : (
                      <p className="text-gray-600">{facultyData.designation}</p>
                    )}
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Address</label>
                    {isEditing ? (
                      <input
                        type="text"
                        name="address"
                        className="w-full border border-gray-300 rounded-md p-2"
                        value={facultyData.address}
                        onChange={handleInputChange}
                      />
                    ) : (
                      <p className="text-gray-600">{facultyData.address}</p>
                    )}
                  </div>
                </div>
              </div>
              
              {/* Areas of Expertise */}
              <div className="bg-white shadow rounded-lg p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-4">Areas of Expertise</h2>
                {isEditing ? (
                  <div>
                    <input
                      type="text"
                      className="w-full border border-gray-300 rounded-md p-2"
                      value={facultyData.expertise.join(', ')}
                      onChange={handleExpertiseChange}
                      placeholder="Enter areas of expertise separated by commas"
                    />
                    <p className="text-xs text-gray-500 mt-2">Separate areas with commas</p>
                  </div>
                ) : (
                  <div className="flex flex-wrap gap-2">
                    {facultyData.expertise.map((area, index) => (
                      <span 
                        key={index} 
                        className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm"
                      >
                        {area}
                      </span>
                    ))}
                  </div>
                )}
              </div>
              
              {/* Quick Stats */}
              <div className="bg-white shadow rounded-lg p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-4">Quick Stats</h2>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <FileText className="h-5 w-5 text-blue-700 mr-3" />
                      <span className="text-gray-700">Publications</span>
                    </div>
                    <span className="font-semibold text-gray-900">{facultyData.publications.length}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <Book className="h-5 w-5 text-blue-700 mr-3" />
                      <span className="text-gray-700">Current Courses</span>
                    </div>
                    <span className="font-semibold text-gray-900">{facultyData.courses.filter(c => c.semester.includes('Fall 2023')).length}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <Briefcase className="h-5 w-5 text-blue-700 mr-3" />
                      <span className="text-gray-700">Research Projects</span>
                    </div>
                    <span className="font-semibold text-gray-900">{facultyData.researchProjects.length}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <Users className="h-5 w-5 text-blue-700 mr-3" />
                      <span className="text-gray-700">Interns Supervised</span>
                    </div>
                    <span className="font-semibold text-gray-900">
                      {facultyData.internshipSupervision.reduce((total, item) => total + item.students, 0)}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        
        {/* Publications Tab Content */}
        {activeTab === 'publications' && (
          <div className="bg-white shadow rounded-lg p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold text-gray-900">Publications</h2>
              <button className="text-blue-700 hover:text-blue-800 text-sm font-medium">
                Add New Publication
              </button>
            </div>
            
            <div className="mb-6">
              <div className="relative">
                <input 
                  type="text" 
                  placeholder="Search publications..." 
                  className="w-full border border-gray-300 rounded-md py-2 px-4 pl-10"
                />
                <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                  <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
              </div>
            </div>
            
            <div className="space-y-8">
              {facultyData.publications.map((publication, index) => (
                <div key={index} className="border-b border-gray-200 pb-6 last:border-0 last:pb-0">
                  <h3 className="text-lg font-medium text-gray-900">{publication.title}</h3>
                  <p className="text-gray-600 mt-1">
                    {publication.journal} ({publication.year})
                  </p>
                  <p className="text-gray-500 text-sm mt-2">
                    <span className="font-medium">Co-authors:</span> {publication.coAuthors}
                  </p>
                  <div className="mt-4 flex">
                    <a 
                      href={publication.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-700 hover:text-blue-800 flex items-center text-sm"
                    >
                      <ExternalLink className="h-4 w-4 mr-1" />
                      View Publication
                    </a>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-8 border-t border-gray-200 pt-6">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Citation Metrics</h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <div className="text-sm text-blue-800 mb-1">h-index</div>
                  <div className="text-2xl font-bold text-blue-900">18</div>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <div className="text-sm text-blue-800 mb-1">Citations</div>
                  <div className="text-2xl font-bold text-blue-900">1,245</div>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <div className="text-sm text-blue-800 mb-1">i10-index</div>
                  <div className="text-2xl font-bold text-blue-900">22</div>
                </div>
              </div>
            </div>
          </div>
        )}
        
        {/* Courses Tab Content */}
        {activeTab === 'courses' && (
          <div className="bg-white shadow rounded-lg p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold text-gray-900">Courses</h2>
              <div>
                <select className="border border-gray-300 rounded-md p-2 text-gray-600">
                  <option value="all">All Semesters</option>
                  <option value="fall2023" selected>Fall 2023</option>
                  <option value="spring2023">Spring 2023</option>
                  <option value="fall2022">Fall 2022</option>
                </select>
              </div>
            </div>
            
            <div className="space-y-6">
              {facultyData.courses.map((course, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-4 hover:border-blue-300 transition-colors">
                  <div className="flex justify-between items-start">
                    <div>
                      <span className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded-full">{course.code}</span>
                      <h3 className="font-medium text-gray-900 mt-2">{course.title}</h3>
                    </div>
                    <div className="text-right">
                      <span className="text-sm text-gray-500">{course.semester}</span>
                      <p className="text-gray-600 mt-1">{course.students} Students</p>
                    </div>
                  </div>
                  
                  <div className="mt-4 pt-4 border-t border-gray-100 flex justify-between">
                    <a href="#" className="text-blue-700 hover:text-blue-800 text-sm">Course Materials</a>
                    <a href="#" className="text-blue-700 hover:text-blue-800 text-sm">Student List</a>
                    <a href="#" className="text-blue-700 hover:text-blue-800 text-sm">Grade Book</a>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-8 pt-6 border-t border-gray-200">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Past Courses</h3>
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Course Code
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Course Name
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Semester
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Students
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">CS202</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">Database Management Systems</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">Fall 2022</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">85</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">CS405</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">Machine Learning</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">Spring 2022</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">50</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">CS301</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">Operating Systems</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">Fall 2021</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">110</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )}
        
        {/* Internships Tab Content */}
        {activeTab === 'internships' && (
          <div className="space-y-8">
            {/* Ongoing Internship Supervision */}
            <div className="bg-white shadow rounded-lg p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Current Internship Supervision</h2>
              
              {facultyData.internshipSupervision
                .filter(intern => intern.status === 'ongoing')
                .map((internship, index) => (
                  <div key={index} className="mb-6 last:mb-0 border-l-2 border-blue-600 pl-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-medium text-gray-900">{internship.title}</h3>
                        <p className="text-gray-600">{internship.company}</p>
                      </div>
                      <span className="bg-blue-100 text-blue-700 px-2 py-1 text-xs rounded-full">
                        {internship.students} Students
                      </span>
                    </div>
                    
                    <div className="mt-4 flex justify-between items-center">
                      <span className="text-sm text-gray-500">{internship.year}</span>
                      <div className="space-x-2">
                        <button className="text-blue-700 hover:text-blue-800 text-sm">View Details</button>
                        <button className="text-blue-700 hover:text-blue-800 text-sm">Student List</button>
                      </div>
                    </div>
                  </div>
                ))}
              
              {!facultyData.internshipSupervision.some(i => i.status === 'ongoing') && (
                <div className="text-center py-8 border border-dashed border-gray-300 rounded-lg">
                  <Briefcase className="h-12 w-12 mx-auto text-gray-400 mb-3" />
                  <h3 className="text-lg font-medium text-gray-900">No active internships</h3>
                  <p className="text-gray-500 mb-4">You're not currently supervising any internships.</p>
                  <button className="px-4 py-2 bg-blue-700 text-white rounded-md hover:bg-blue-800">
                    Create Internship Opportunity
                  </button>
                </div>
              )}
            </div>
            
            {/* Internship History */}
            <div className="bg-white shadow rounded-lg p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Internship History</h2>
              
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Project Title
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Company
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Year
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Students
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {facultyData.internshipSupervision
                    .filter(intern => intern.status === 'completed')
                    .map((internship, index) => (
                      <tr key={index}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          {internship.title}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                          {internship.company}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                          {internship.year}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                          {internship.students}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                          <a href="#" className="text-blue-700 hover:text-blue-800">Report</a>
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
            
            {/* Create New Internship */}
            <div className="bg-white shadow rounded-lg p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Create Internship Opportunity</h2>
              
              <form>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Project Title</label>
                    <input type="text" className="w-full border border-gray-300 rounded-md p-2" />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Company</label>
                      <input type="text" className="w-full border border-gray-300 rounded-md p-2" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Number of Positions</label>
                      <input type="number" className="w-full border border-gray-300 rounded-md p-2" min="1" />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Project Description</label>
                    <textarea className="w-full border border-gray-300 rounded-md p-2" rows={4}></textarea>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Required Skills</label>
                      <input type="text" className="w-full border border-gray-300 rounded-md p-2" placeholder="e.g., Python, Machine Learning, SQL" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Duration</label>
                      <input type="text" className="w-full border border-gray-300 rounded-md p-2" placeholder="e.g., 2 months" />
                    </div>
                  </div>
                </div>
                
                <div className="mt-6">
                  <button type="submit" className="px-4 py-2 bg-blue-700 text-white rounded-md hover:bg-blue-800">
                    Create Opportunity
                  </button>
                </div>
              </form>
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
                      value={facultyData.email}
                      readOnly
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                    <input 
                      type="text" 
                      className="w-full border border-gray-300 rounded-md p-2"
                      value={facultyData.phone}
                      onChange={(e) => setFacultyData(prev => ({...prev, phone: e.target.value}))}
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
                      <button className="px-4 py-2 bg-blue-700 text-white rounded-md hover:bg-blue-800">
                        Update Password
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white shadow rounded-lg p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-6">Notification Preferences</h2>
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-medium text-gray-900">Email Notifications</h3>
                      <p className="text-sm text-gray-500">Receive emails about internship applications</p>
                    </div>
                    <div className="relative inline-block w-12 h-6 cursor-pointer">
                      <input type="checkbox" id="toggle-email" className="sr-only" defaultChecked />
                      <span className="block h-6 w-12 rounded-full bg-blue-700"></span>
                      <span className="absolute left-1 top-1 bg-white h-4 w-4 rounded-full transition-transform transform translate-x-6"></span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-medium text-gray-900">Student Submissions</h3>
                      <p className="text-sm text-gray-500">Get notified when students submit assignments</p>
                    </div>
                    <div className="relative inline-block w-12 h-6 cursor-pointer">
                      <input type="checkbox" id="toggle-submissions" className="sr-only" defaultChecked />
                      <span className="block h-6 w-12 rounded-full bg-blue-700"></span>
                      <span className="absolute left-1 top-1 bg-white h-4 w-4 rounded-full transition-transform transform translate-x-6"></span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-medium text-gray-900">Research Updates</h3>
                      <p className="text-sm text-gray-500">Receive updates on research funding opportunities</p>
                    </div>
                    <div className="relative inline-block w-12 h-6 cursor-pointer">
                      <input type="checkbox" id="toggle-research" className="sr-only" defaultChecked />
                      <span className="block h-6 w-12 rounded-full bg-blue-700"></span>
                      <span className="absolute left-1 top-1 bg-white h-4 w-4 rounded-full transition-transform transform translate-x-6"></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <div className="bg-white shadow rounded-lg p-6 mb-8">
                <h2 className="text-xl font-bold text-gray-900 mb-4">Faculty Information</h2>
                <div className="space-y-2">
                  <p className="text-sm text-gray-500">
                    <span className="font-medium text-gray-700 block">Faculty ID:</span>
                    {facultyData.facultyId}
                  </p>
                  <p className="text-sm text-gray-500">
                    <span className="font-medium text-gray-700 block">Joined:</span>
                    {new Date(facultyData.joiningDate).toLocaleDateString('en-IN')}
                  </p>
                  <p className="text-sm text-gray-500">
                    <span className="font-medium text-gray-700 block">Last Login:</span>
                    Today at 09:15 AM
                  </p>
                </div>
              </div>
              
              <div className="bg-white shadow rounded-lg p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-4">Data & Privacy</h2>
                <div className="space-y-4">
                  <a href="#" className="text-blue-700 hover:text-blue-800 block text-sm">
                    Download Your Data
                  </a>
                  <a href="#" className="text-blue-700 hover:text-blue-800 block text-sm">
                    Privacy Policy
                  </a>
                  <a href="#" className="text-blue-700 hover:text-blue-800 block text-sm">
                    Terms of Service
                  </a>
                  <hr className="my-2" />
                  <button className="text-red-600 hover:text-red-800 block text-sm">
                    Deactivate Account
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default FacultyProfile;