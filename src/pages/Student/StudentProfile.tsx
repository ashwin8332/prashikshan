import { useState } from 'react';
import { 
  User, Mail, Phone, Calendar, Briefcase, Book, Download, 
  Edit, Save, X, Upload, FileText, ExternalLink, CheckCircle
} from 'lucide-react';

const StudentProfile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [activeTab, setActiveTab] = useState('profile');
  
  // Mock student data
  const [studentData, setStudentData] = useState({
    name: 'Priya Sharma',
    email: 'priya.sharma@student.edu',
    phone: '+91 9876543210',
    department: 'Computer Science',
    enrollmentNumber: 'CS2023042',
    year: '3rd',
    semester: '5th',
    dateOfBirth: '1999-05-15',
    address: '123 Student Housing, University Road, New Delhi',
    bio: 'Passionate computer science student with interests in web development, machine learning, and data analysis. Looking for internship opportunities to apply classroom knowledge in real-world settings.',
    skills: ['JavaScript', 'React', 'Node.js', 'Python', 'Data Analysis', 'Machine Learning', 'Git'],
    education: [
      {
        degree: 'B.Tech Computer Science',
        institution: 'Delhi Technical University',
        year: '2021 - Present',
        score: 'CGPA: 8.7/10'
      },
      {
        degree: 'Senior Secondary (CBSE)',
        institution: 'Delhi Public School',
        year: '2019 - 2021',
        score: 'Percentage: 94.5%'
      }
    ],
    internships: [
      {
        title: 'Web Development Intern',
        company: 'TechSolutions Pvt Ltd',
        duration: 'May 2023 - Jul 2023',
        description: 'Developed responsive web applications using React and Node.js. Collaborated with a team of 5 developers to implement new features and improve existing functionality.',
        status: 'completed',
        certificate: 'certificate.pdf'
      }
    ],
    projects: [
      {
        title: 'E-commerce Website',
        description: 'Built a full-stack e-commerce platform with React, Node.js, and MongoDB. Implemented features like user authentication, product search, cart management, and payment integration.',
        link: 'https://github.com/priya-sharma/ecommerce-project',
        technologies: ['React', 'Node.js', 'MongoDB', 'Express']
      },
      {
        title: 'Weather Forecast App',
        description: 'Created a weather forecast application that shows current weather and 5-day forecast for any location. Used OpenWeatherMap API and implemented geolocation services.',
        link: 'https://github.com/priya-sharma/weather-app',
        technologies: ['JavaScript', 'APIs', 'HTML/CSS', 'Bootstrap']
      }
    ],
    resumeStatus: 'validated',
    profileCompletion: 85
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
    setStudentData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSkillsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const skillsString = e.target.value;
    const skillsArray = skillsString.split(',').map(skill => skill.trim());
    setStudentData(prev => ({
      ...prev,
      skills: skillsArray
    }));
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Profile Header */}
        <div className="bg-white shadow rounded-lg overflow-hidden mb-8">
          <div className="relative bg-blue-600 h-40">
            {/* Cover Image Area */}
            <div className="absolute bottom-0 left-0 -mb-12 ml-6">
              {/* Profile Image */}
              <div className="h-24 w-24 rounded-full bg-white p-1 shadow-md">
                <div className="h-full w-full rounded-full bg-blue-100 flex items-center justify-center">
                  <User className="h-12 w-12 text-blue-600" />
                </div>
              </div>
            </div>
          </div>
          
          <div className="pt-16 pb-6 px-6">
            <div className="flex justify-between items-start">
              <div>
                <h1 className="text-2xl font-bold text-gray-900">{studentData.name}</h1>
                <p className="text-gray-600">{studentData.enrollmentNumber} • {studentData.department}</p>
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
                      className="flex items-center px-4 py-2 border border-transparent rounded-md bg-blue-600 text-white hover:bg-blue-700"
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
                <span className="text-gray-600">{studentData.email}</span>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 text-gray-400 mr-2" />
                <span className="text-gray-600">{studentData.phone}</span>
              </div>
              <div className="flex items-center">
                <Calendar className="h-5 w-5 text-gray-400 mr-2" />
                <span className="text-gray-600">{new Date(studentData.dateOfBirth).toLocaleDateString('en-IN')}</span>
              </div>
            </div>
          </div>
          
          {/* Profile Completion Bar */}
          <div className="px-6 pb-6">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-sm font-medium text-gray-700">Profile Completion</h3>
              <span className="text-sm font-medium text-blue-600">{studentData.profileCompletion}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div
                className="bg-blue-600 h-2.5 rounded-full"
                style={{ width: `${studentData.profileCompletion}%` }}
              ></div>
            </div>
          </div>
        </div>
        
        {/* Navigation Tabs */}
        <div className="flex border-b border-gray-200 mb-8">
          <button
            className={`py-4 px-6 ${
              activeTab === 'profile'
                ? 'border-b-2 border-blue-500 text-blue-600'
                : 'text-gray-500 hover:text-gray-700'
            }`}
            onClick={() => setActiveTab('profile')}
          >
            Profile
          </button>
          <button
            className={`py-4 px-6 ${
              activeTab === 'internships'
                ? 'border-b-2 border-blue-500 text-blue-600'
                : 'text-gray-500 hover:text-gray-700'
            }`}
            onClick={() => setActiveTab('internships')}
          >
            Internships
          </button>
          <button
            className={`py-4 px-6 ${
              activeTab === 'resume'
                ? 'border-b-2 border-blue-500 text-blue-600'
                : 'text-gray-500 hover:text-gray-700'
            }`}
            onClick={() => setActiveTab('resume')}
          >
            Resume
          </button>
          <button
            className={`py-4 px-6 ${
              activeTab === 'settings'
                ? 'border-b-2 border-blue-500 text-blue-600'
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
                    value={studentData.bio}
                    onChange={handleInputChange}
                  ></textarea>
                ) : (
                  <p className="text-gray-600">{studentData.bio}</p>
                )}
              </div>
              
              {/* Education Section */}
              <div className="bg-white shadow rounded-lg p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-4">Education</h2>
                <div className="space-y-4">
                  {studentData.education.map((edu, index) => (
                    <div key={index} className="border-l-2 border-blue-500 pl-4 py-1">
                      <h3 className="font-medium text-gray-900">{edu.degree}</h3>
                      <p className="text-gray-600">{edu.institution}</p>
                      <div className="flex justify-between mt-1 text-sm text-gray-500">
                        <span>{edu.year}</span>
                        <span>{edu.score}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Projects Section */}
              <div className="bg-white shadow rounded-lg p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-4">Projects</h2>
                <div className="space-y-6">
                  {studentData.projects.map((project, index) => (
                    <div key={index} className="border-t border-gray-200 pt-4 first:border-0 first:pt-0">
                      <div className="flex justify-between items-start">
                        <h3 className="font-medium text-gray-900">{project.title}</h3>
                        <a 
                          href={project.link} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:text-blue-800 flex items-center text-sm"
                        >
                          <ExternalLink className="h-4 w-4 mr-1" />
                          View Project
                        </a>
                      </div>
                      <p className="text-gray-600 mt-2">{project.description}</p>
                      <div className="flex flex-wrap gap-2 mt-3">
                        {project.technologies.map((tech, techIndex) => (
                          <span 
                            key={techIndex} 
                            className="bg-blue-50 text-blue-700 text-xs px-2 py-1 rounded"
                          >
                            {tech}
                          </span>
                        ))}
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
                <h2 className="text-xl font-bold text-gray-900 mb-4">Personal Information</h2>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Department</label>
                    {isEditing ? (
                      <input
                        type="text"
                        name="department"
                        className="w-full border border-gray-300 rounded-md p-2"
                        value={studentData.department}
                        onChange={handleInputChange}
                      />
                    ) : (
                      <p className="text-gray-600">{studentData.department}</p>
                    )}
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Year & Semester</label>
                    {isEditing ? (
                      <div className="grid grid-cols-2 gap-3">
                        <input
                          type="text"
                          name="year"
                          className="w-full border border-gray-300 rounded-md p-2"
                          value={studentData.year}
                          onChange={handleInputChange}
                        />
                        <input
                          type="text"
                          name="semester"
                          className="w-full border border-gray-300 rounded-md p-2"
                          value={studentData.semester}
                          onChange={handleInputChange}
                        />
                      </div>
                    ) : (
                      <p className="text-gray-600">{studentData.year} Year, {studentData.semester} Semester</p>
                    )}
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Address</label>
                    {isEditing ? (
                      <input
                        type="text"
                        name="address"
                        className="w-full border border-gray-300 rounded-md p-2"
                        value={studentData.address}
                        onChange={handleInputChange}
                      />
                    ) : (
                      <p className="text-gray-600">{studentData.address}</p>
                    )}
                  </div>
                </div>
              </div>
              
              {/* Skills Section */}
              <div className="bg-white shadow rounded-lg p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-4">Skills</h2>
                {isEditing ? (
                  <div>
                    <input
                      type="text"
                      className="w-full border border-gray-300 rounded-md p-2"
                      value={studentData.skills.join(', ')}
                      onChange={handleSkillsChange}
                      placeholder="Enter skills separated by commas"
                    />
                    <p className="text-xs text-gray-500 mt-2">Separate skills with commas</p>
                  </div>
                ) : (
                  <div className="flex flex-wrap gap-2">
                    {studentData.skills.map((skill, index) => (
                      <span 
                        key={index} 
                        className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                )}
              </div>
              
              {/* Quick Links */}
              <div className="bg-white shadow rounded-lg p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-4">Quick Links</h2>
                <div className="space-y-3">
                  <a href="#" className="flex items-center text-blue-600 hover:text-blue-800">
                    <FileText className="h-5 w-5 mr-2" />
                    <span>View Resume</span>
                  </a>
                  <a href="#" className="flex items-center text-blue-600 hover:text-blue-800">
                    <Briefcase className="h-5 w-5 mr-2" />
                    <span>Internship Applications</span>
                  </a>
                  <a href="#" className="flex items-center text-blue-600 hover:text-blue-800">
                    <Book className="h-5 w-5 mr-2" />
                    <span>Academic Records</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
        
        {/* Internships Tab Content */}
        {activeTab === 'internships' && (
          <div className="bg-white shadow rounded-lg p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold text-gray-900">My Internships</h2>
              <a href="#" className="text-blue-600 hover:text-blue-800 text-sm">View All Available Internships</a>
            </div>
            
            {studentData.internships.length === 0 ? (
              <div className="text-center py-8 border border-dashed border-gray-300 rounded-lg">
                <Briefcase className="h-12 w-12 mx-auto text-gray-400 mb-3" />
                <h3 className="text-lg font-medium text-gray-900">No internships yet</h3>
                <p className="text-gray-500">You haven't applied for any internships yet.</p>
                <a href="#" className="mt-4 inline-block px-4 py-2 bg-blue-600 text-white rounded-md">
                  Browse Internships
                </a>
              </div>
            ) : (
              <div className="space-y-6">
                {studentData.internships.map((internship, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-medium text-gray-900">{internship.title}</h3>
                        <p className="text-gray-600">{internship.company}</p>
                      </div>
                      <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                        internship.status === 'completed' ? 'bg-green-100 text-green-800' :
                        internship.status === 'ongoing' ? 'bg-blue-100 text-blue-800' :
                        'bg-yellow-100 text-yellow-800'
                      }`}>
                        {internship.status === 'completed' ? 'Completed' : 
                         internship.status === 'ongoing' ? 'Ongoing' : 'Applied'}
                      </span>
                    </div>
                    
                    <div className="mt-2 flex items-center text-sm text-gray-500">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span>{internship.duration}</span>
                    </div>
                    
                    <p className="mt-3 text-gray-600">{internship.description}</p>
                    
                    {internship.status === 'completed' && internship.certificate && (
                      <div className="mt-4 pt-3 border-t border-gray-200">
                        <a 
                          href="#" 
                          className="flex items-center text-blue-600 hover:text-blue-800 text-sm"
                        >
                          <Download className="h-4 w-4 mr-1" />
                          Download Certificate
                        </a>
                      </div>
                    )}
                  </div>
                ))}
                
                <div className="mt-6">
                  <a 
                    href="#" 
                    className="inline-block bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
                  >
                    Browse More Internship Opportunities
                  </a>
                </div>
              </div>
            )}
          </div>
        )}
        
        {/* Resume Tab Content */}
        {activeTab === 'resume' && (
          <div className="bg-white shadow rounded-lg p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold text-gray-900">My Resume</h2>
              <div className="flex space-x-3">
                <button className="flex items-center text-gray-600 hover:text-gray-800">
                  <Download className="h-5 w-5 mr-1" />
                  Download
                </button>
                <button className="flex items-center bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700">
                  <Upload className="h-5 w-5 mr-1" />
                  Upload New
                </button>
              </div>
            </div>
            
            <div className="mb-6 border border-gray-200 rounded-lg p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <FileText className="h-8 w-8 text-blue-600 mr-3" />
                  <div>
                    <h3 className="font-medium text-gray-900">resume_priya_sharma.pdf</h3>
                    <p className="text-sm text-gray-500">Uploaded on Sep 10, 2023 • 420 KB</p>
                  </div>
                </div>
                <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                  studentData.resumeStatus === 'validated' ? 'bg-green-100 text-green-800' :
                  studentData.resumeStatus === 'rejected' ? 'bg-red-100 text-red-800' :
                  'bg-yellow-100 text-yellow-800'
                }`}>
                  {studentData.resumeStatus === 'validated' ? 'Validated' : 
                   studentData.resumeStatus === 'rejected' ? 'Rejected' : 'Pending'}
                </span>
              </div>
            </div>
            
            {studentData.resumeStatus === 'validated' && (
              <div className="mb-6 bg-green-50 border border-green-200 rounded-lg p-4">
                <h3 className="font-medium text-green-800 flex items-center">
                  <CheckCircle className="h-5 w-5 mr-2" />
                  Resume Validation Successful
                </h3>
                <p className="text-green-700 mt-2">
                  Your resume has been reviewed and validated. It's ready to be shared with potential employers.
                </p>
              </div>
            )}
            
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-3">Resume Feedback</h3>
              <div className="bg-gray-50 rounded-lg p-4">
                <div className="mb-4">
                  <h4 className="font-medium text-gray-800 mb-2">Strengths</h4>
                  <ul className="list-disc pl-5 text-gray-600 space-y-1">
                    <li>Well-structured format with clear sections</li>
                    <li>Strong technical skills clearly highlighted</li>
                    <li>Good project descriptions with technologies used</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-medium text-gray-800 mb-2">Suggestions for Improvement</h4>
                  <ul className="list-disc pl-5 text-gray-600 space-y-1">
                    <li>Add quantifiable achievements for each experience</li>
                    <li>Include relevant coursework section</li>
                    <li>Consider adding a brief summary/objective statement</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="mt-6 border-t border-gray-200 pt-6">
              <h3 className="text-lg font-medium text-gray-900 mb-3">Resume Resources</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <a href="#" className="flex items-center p-3 border border-gray-200 rounded-lg hover:bg-gray-50">
                  <Book className="h-5 w-5 text-blue-600 mr-3" />
                  <span className="text-gray-700">Resume Writing Guide</span>
                </a>
                <a href="#" className="flex items-center p-3 border border-gray-200 rounded-lg hover:bg-gray-50">
                  <FileText className="h-5 w-5 text-blue-600 mr-3" />
                  <span className="text-gray-700">Resume Templates</span>
                </a>
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
                      value={studentData.email}
                      readOnly
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                    <input 
                      type="text" 
                      className="w-full border border-gray-300 rounded-md p-2"
                      value={studentData.phone}
                      onChange={(e) => setStudentData(prev => ({...prev, phone: e.target.value}))}
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
                      <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
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
                      <p className="text-sm text-gray-500">Receive emails about new internship opportunities</p>
                    </div>
                    <div className="relative inline-block w-12 h-6 cursor-pointer">
                      <input type="checkbox" id="toggle-email" className="sr-only" defaultChecked />
                      <span className="block h-6 w-12 rounded-full bg-blue-600"></span>
                      <span className="absolute left-1 top-1 bg-white h-4 w-4 rounded-full transition-transform transform translate-x-6"></span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-medium text-gray-900">SMS Notifications</h3>
                      <p className="text-sm text-gray-500">Receive text messages for important updates</p>
                    </div>
                    <div className="relative inline-block w-12 h-6 cursor-pointer">
                      <input type="checkbox" id="toggle-sms" className="sr-only" />
                      <span className="block h-6 w-12 rounded-full bg-gray-300"></span>
                      <span className="absolute left-1 top-1 bg-white h-4 w-4 rounded-full transition-transform"></span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-medium text-gray-900">Application Updates</h3>
                      <p className="text-sm text-gray-500">Get notified when your application status changes</p>
                    </div>
                    <div className="relative inline-block w-12 h-6 cursor-pointer">
                      <input type="checkbox" id="toggle-updates" className="sr-only" defaultChecked />
                      <span className="block h-6 w-12 rounded-full bg-blue-600"></span>
                      <span className="absolute left-1 top-1 bg-white h-4 w-4 rounded-full transition-transform transform translate-x-6"></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <div className="bg-white shadow rounded-lg p-6 mb-8">
                <h2 className="text-xl font-bold text-gray-900 mb-4">Account Information</h2>
                <div className="space-y-2">
                  <p className="text-sm text-gray-500">
                    <span className="font-medium text-gray-700 block">Account Type:</span>
                    Student
                  </p>
                  <p className="text-sm text-gray-500">
                    <span className="font-medium text-gray-700 block">Member Since:</span>
                    August 15, 2021
                  </p>
                  <p className="text-sm text-gray-500">
                    <span className="font-medium text-gray-700 block">Last Login:</span>
                    Today at 10:30 AM
                  </p>
                </div>
              </div>
              
              <div className="bg-white shadow rounded-lg p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-4">Data & Privacy</h2>
                <div className="space-y-4">
                  <a href="#" className="text-blue-600 hover:text-blue-800 block text-sm">
                    Download Your Data
                  </a>
                  <a href="#" className="text-blue-600 hover:text-blue-800 block text-sm">
                    Privacy Policy
                  </a>
                  <a href="#" className="text-blue-600 hover:text-blue-800 block text-sm">
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

export default StudentProfile;