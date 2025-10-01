import { useState } from 'react';
import { 
  Mail, Phone, Globe, Briefcase, Building, 
  Edit, Save, X, Users, CheckCircle
} from 'lucide-react';

const IndustryProfile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [activeTab, setActiveTab] = useState('profile');
  
  // Mock industry data
  const [industryData, setIndustryData] = useState({
    name: 'TechSolutions Pvt Ltd',
    contactPerson: 'Amit Sharma',
    contactEmail: 'amit.sharma@techsolutions.com',
    contactPhone: '+91 9876543210',
    industryId: 'IND2023056',
    industry: 'Information Technology',
    size: '1000-5000 employees',
    foundedYear: '2005',
    website: 'https://www.techsolutions.com',
    headquarters: 'Bengaluru, Karnataka',
    address: 'Tech Park, Electronic City Phase 1, Bengaluru - 560100',
    description: 'TechSolutions is a leading provider of innovative software solutions across multiple domains including fintech, healthcare, and e-commerce. We specialize in developing custom enterprise applications, cloud infrastructure, and AI-driven analytics platforms. Our company is committed to fostering industry-academia partnerships to nurture emerging talent and drive technological innovation.',
    internshipAreas: ['Software Development', 'Data Science', 'Cloud Computing', 'UI/UX Design', 'DevOps', 'Cybersecurity'],
    pastInternships: [
      {
        title: 'Web Development Intern',
        description: 'Developing responsive web applications using modern frameworks',
        duration: '3 months',
        stipend: '₹15,000/month',
        openings: 5,
        skills: ['JavaScript', 'React', 'Node.js', 'HTML/CSS'],
        year: 2023,
        hires: 5,
        status: 'completed'
      },
      {
        title: 'Machine Learning Intern',
        description: 'Working on ML models for predictive analytics',
        duration: '6 months',
        stipend: '₹20,000/month',
        openings: 3,
        skills: ['Python', 'TensorFlow', 'Data Analysis', 'Statistics'],
        year: 2023,
        hires: 2,
        status: 'completed'
      }
    ],
    currentInternships: [
      {
        title: 'Cloud Engineering Intern',
        description: 'Working on cloud infrastructure and deployment pipelines',
        duration: '4 months',
        stipend: '₹18,000/month',
        openings: 4,
        skills: ['AWS', 'Docker', 'Kubernetes', 'CI/CD'],
        applicants: 45,
        status: 'ongoing',
        startDate: '2023-08-01',
        endDate: '2023-12-01'
      }
    ],
    projects: [
      {
        title: 'Healthcare Management System',
        description: 'Developed a comprehensive healthcare management system for hospitals and clinics',
        technologies: ['Java', 'Spring Boot', 'React', 'PostgreSQL'],
        year: 2023,
        collaborations: ['Delhi Medical College', 'Healthcare Innovations Labs']
      },
      {
        title: 'FinTech Payment Gateway',
        description: 'Built a secure payment processing system with advanced fraud detection',
        technologies: ['Node.js', 'MongoDB', 'Docker', 'Machine Learning'],
        year: 2022,
        collaborations: ['National Payments Corporation', 'Secure Transactions Inc.']
      }
    ],
    partnerships: [
      {
        institution: 'Delhi Technical University',
        program: 'Technical Skill Development Program',
        description: 'Annual training program for final year students',
        startYear: 2020,
        status: 'active'
      },
      {
        institution: 'Indian Institute of Technology, Mumbai',
        program: 'Research Collaboration in AI',
        description: 'Joint research on AI applications in industry',
        startYear: 2021,
        status: 'active'
      }
    ],
    profileCompletion: 90
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
    setIndustryData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleInternshipAreasChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const areasString = e.target.value;
    const areasArray = areasString.split(',').map(area => area.trim());
    setIndustryData(prev => ({
      ...prev,
      internshipAreas: areasArray
    }));
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Profile Header */}
        <div className="bg-white shadow rounded-lg overflow-hidden mb-8">
          <div className="relative bg-gray-800 h-40">
            {/* Cover Image Area */}
            <div className="absolute bottom-0 left-0 -mb-12 ml-6">
              {/* Profile Image */}
              <div className="h-24 w-24 rounded-full bg-white p-1 shadow-md">
                <div className="h-full w-full rounded-full bg-blue-100 flex items-center justify-center">
                  <Building className="h-12 w-12 text-gray-800" />
                </div>
              </div>
            </div>
          </div>
          
          <div className="pt-16 pb-6 px-6">
            <div className="flex justify-between items-start">
              <div>
                <h1 className="text-2xl font-bold text-gray-900">{industryData.name}</h1>
                <p className="text-gray-600">{industryData.industry} • {industryData.headquarters}</p>
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
                      className="flex items-center px-4 py-2 border border-transparent rounded-md bg-gray-800 text-white hover:bg-gray-900"
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
                <Globe className="h-5 w-5 text-gray-400 mr-2" />
                <a href={industryData.website} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                  {industryData.website.replace('https://', '')}
                </a>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-gray-400 mr-2" />
                <span className="text-gray-600">{industryData.contactEmail}</span>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 text-gray-400 mr-2" />
                <span className="text-gray-600">{industryData.contactPhone}</span>
              </div>
            </div>
          </div>
          
          {/* Profile Completion Bar */}
          <div className="px-6 pb-6">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-sm font-medium text-gray-700">Profile Completion</h3>
              <span className="text-sm font-medium text-gray-800">{industryData.profileCompletion}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div
                className="bg-gray-800 h-2.5 rounded-full"
                style={{ width: `${industryData.profileCompletion}%` }}
              ></div>
            </div>
          </div>
        </div>
        
        {/* Navigation Tabs */}
        <div className="flex border-b border-gray-200 mb-8 overflow-x-auto">
          <button
            className={`py-4 px-6 whitespace-nowrap ${
              activeTab === 'profile'
                ? 'border-b-2 border-gray-800 text-gray-900'
                : 'text-gray-500 hover:text-gray-700'
            }`}
            onClick={() => setActiveTab('profile')}
          >
            Profile
          </button>
          <button
            className={`py-4 px-6 whitespace-nowrap ${
              activeTab === 'internships'
                ? 'border-b-2 border-gray-800 text-gray-900'
                : 'text-gray-500 hover:text-gray-700'
            }`}
            onClick={() => setActiveTab('internships')}
          >
            Internships
          </button>
          <button
            className={`py-4 px-6 whitespace-nowrap ${
              activeTab === 'partnerships'
                ? 'border-b-2 border-gray-800 text-gray-900'
                : 'text-gray-500 hover:text-gray-700'
            }`}
            onClick={() => setActiveTab('partnerships')}
          >
            Partnerships
          </button>
          <button
            className={`py-4 px-6 whitespace-nowrap ${
              activeTab === 'settings'
                ? 'border-b-2 border-gray-800 text-gray-900'
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
              {/* About Company Section */}
              <div className="bg-white shadow rounded-lg p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-4">About Company</h2>
                {isEditing ? (
                  <textarea
                    name="description"
                    className="w-full border border-gray-300 rounded-md p-3"
                    rows={5}
                    value={industryData.description}
                    onChange={handleInputChange}
                  ></textarea>
                ) : (
                  <p className="text-gray-600">{industryData.description}</p>
                )}
              </div>
              
              {/* Projects Section */}
              <div className="bg-white shadow rounded-lg p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-4">Notable Projects</h2>
                <div className="space-y-6">
                  {industryData.projects.map((project, index) => (
                    <div key={index} className="border-t border-gray-200 pt-4 first:border-0 first:pt-0">
                      <h3 className="font-medium text-gray-900">{project.title}</h3>
                      <p className="text-gray-600 mt-2">{project.description}</p>
                      <div className="flex flex-wrap gap-2 mt-3">
                        {project.technologies.map((tech, techIndex) => (
                          <span 
                            key={techIndex} 
                            className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      {project.collaborations && project.collaborations.length > 0 && (
                        <div className="mt-3 text-sm text-gray-500">
                          <span className="font-medium">Collaborations:</span> {project.collaborations.join(', ')}
                        </div>
                      )}
                      <div className="mt-1 text-sm text-gray-500">
                        <span>{project.year}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Internship Areas */}
              <div className="bg-white shadow rounded-lg p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-4">Internship Areas</h2>
                {isEditing ? (
                  <div>
                    <input
                      type="text"
                      className="w-full border border-gray-300 rounded-md p-2"
                      value={industryData.internshipAreas.join(', ')}
                      onChange={handleInternshipAreasChange}
                      placeholder="Enter areas separated by commas"
                    />
                    <p className="text-xs text-gray-500 mt-2">Separate areas with commas</p>
                  </div>
                ) : (
                  <div className="flex flex-wrap gap-2">
                    {industryData.internshipAreas.map((area, index) => (
                      <span 
                        key={index} 
                        className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm"
                      >
                        {area}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
            
            {/* Right Column */}
            <div className="space-y-8">
              {/* Company Information */}
              <div className="bg-white shadow rounded-lg p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-4">Company Information</h2>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Industry</label>
                    {isEditing ? (
                      <input
                        type="text"
                        name="industry"
                        className="w-full border border-gray-300 rounded-md p-2"
                        value={industryData.industry}
                        onChange={handleInputChange}
                      />
                    ) : (
                      <p className="text-gray-600">{industryData.industry}</p>
                    )}
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Company Size</label>
                    {isEditing ? (
                      <input
                        type="text"
                        name="size"
                        className="w-full border border-gray-300 rounded-md p-2"
                        value={industryData.size}
                        onChange={handleInputChange}
                      />
                    ) : (
                      <p className="text-gray-600">{industryData.size}</p>
                    )}
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Founded</label>
                    {isEditing ? (
                      <input
                        type="text"
                        name="foundedYear"
                        className="w-full border border-gray-300 rounded-md p-2"
                        value={industryData.foundedYear}
                        onChange={handleInputChange}
                      />
                    ) : (
                      <p className="text-gray-600">{industryData.foundedYear}</p>
                    )}
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Headquarters</label>
                    {isEditing ? (
                      <input
                        type="text"
                        name="headquarters"
                        className="w-full border border-gray-300 rounded-md p-2"
                        value={industryData.headquarters}
                        onChange={handleInputChange}
                      />
                    ) : (
                      <p className="text-gray-600">{industryData.headquarters}</p>
                    )}
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Address</label>
                    {isEditing ? (
                      <input
                        type="text"
                        name="address"
                        className="w-full border border-gray-300 rounded-md p-2"
                        value={industryData.address}
                        onChange={handleInputChange}
                      />
                    ) : (
                      <p className="text-gray-600">{industryData.address}</p>
                    )}
                  </div>
                </div>
              </div>
              
              {/* Contact Information */}
              <div className="bg-white shadow rounded-lg p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-4">Primary Contact</h2>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Contact Person</label>
                    {isEditing ? (
                      <input
                        type="text"
                        name="contactPerson"
                        className="w-full border border-gray-300 rounded-md p-2"
                        value={industryData.contactPerson}
                        onChange={handleInputChange}
                      />
                    ) : (
                      <p className="text-gray-600">{industryData.contactPerson}</p>
                    )}
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                    {isEditing ? (
                      <input
                        type="email"
                        name="contactEmail"
                        className="w-full border border-gray-300 rounded-md p-2"
                        value={industryData.contactEmail}
                        onChange={handleInputChange}
                      />
                    ) : (
                      <p className="text-gray-600">{industryData.contactEmail}</p>
                    )}
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                    {isEditing ? (
                      <input
                        type="text"
                        name="contactPhone"
                        className="w-full border border-gray-300 rounded-md p-2"
                        value={industryData.contactPhone}
                        onChange={handleInputChange}
                      />
                    ) : (
                      <p className="text-gray-600">{industryData.contactPhone}</p>
                    )}
                  </div>
                </div>
              </div>
              
              {/* Quick Stats */}
              <div className="bg-white shadow rounded-lg p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-4">Internship Stats</h2>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <Briefcase className="h-5 w-5 text-gray-800 mr-3" />
                      <span className="text-gray-700">Total Internships Offered</span>
                    </div>
                    <span className="font-semibold text-gray-900">{industryData.pastInternships.length + industryData.currentInternships.length}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <Users className="h-5 w-5 text-gray-800 mr-3" />
                      <span className="text-gray-700">Students Hired</span>
                    </div>
                    <span className="font-semibold text-gray-900">
                      {industryData.pastInternships.reduce((total, item) => total + item.hires, 0)}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <Building className="h-5 w-5 text-gray-800 mr-3" />
                      <span className="text-gray-700">Institution Partnerships</span>
                    </div>
                    <span className="font-semibold text-gray-900">{industryData.partnerships.length}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        
        {/* Internships Tab Content */}
        {activeTab === 'internships' && (
          <div className="space-y-8">
            {/* Active Internships */}
            <div className="bg-white shadow rounded-lg p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold text-gray-900">Active Internship Opportunities</h2>
                <button className="px-4 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-900">
                  Post New Internship
                </button>
              </div>
              
              {industryData.currentInternships.length === 0 ? (
                <div className="text-center py-8 border border-dashed border-gray-300 rounded-lg">
                  <Briefcase className="h-12 w-12 mx-auto text-gray-400 mb-3" />
                  <h3 className="text-lg font-medium text-gray-900">No active internships</h3>
                  <p className="text-gray-500">You don't have any active internship postings.</p>
                </div>
              ) : (
                <div className="space-y-6">
                  {industryData.currentInternships.map((internship, index) => (
                    <div key={index} className="border border-gray-200 rounded-lg p-4 hover:border-gray-400 transition-colors">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-medium text-gray-900">{internship.title}</h3>
                          <p className="text-gray-600 mt-1">{internship.description}</p>
                        </div>
                        <span className={`px-2 py-1 text-xs font-medium rounded-full bg-green-100 text-green-800`}>
                          Active
                        </span>
                      </div>
                      
                      <div className="mt-4 grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <span className="text-gray-500">Duration:</span>
                          <span className="ml-1 text-gray-700">{internship.duration}</span>
                        </div>
                        <div>
                          <span className="text-gray-500">Stipend:</span>
                          <span className="ml-1 text-gray-700">{internship.stipend}</span>
                        </div>
                        <div>
                          <span className="text-gray-500">Openings:</span>
                          <span className="ml-1 text-gray-700">{internship.openings}</span>
                        </div>
                        <div>
                          <span className="text-gray-500">Applicants:</span>
                          <span className="ml-1 text-gray-700">{internship.applicants}</span>
                        </div>
                      </div>
                      
                      <div className="mt-3 flex flex-wrap gap-2">
                        {internship.skills.map((skill, skillIndex) => (
                          <span 
                            key={skillIndex} 
                            className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                      
                      <div className="mt-4 pt-3 border-t border-gray-200 flex justify-between items-center">
                        <div className="text-sm text-gray-500">
                          <span>Posted: {new Date(internship.startDate).toLocaleDateString('en-IN')}</span>
                        </div>
                        <div className="flex space-x-3">
                          <button className="text-blue-600 hover:text-blue-800 text-sm">
                            View Applicants
                          </button>
                          <button className="text-blue-600 hover:text-blue-800 text-sm">
                            Edit Posting
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
            
            {/* Past Internships */}
            <div className="bg-white shadow rounded-lg p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Past Internship Programs</h2>
              
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Title
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Duration
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Year
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Openings
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Hired
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {industryData.pastInternships.map((internship, index) => (
                      <tr key={index}>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm font-medium text-gray-900">{internship.title}</div>
                          <div className="text-sm text-gray-500 truncate max-w-xs">{internship.description}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {internship.duration}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {internship.year}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {internship.openings}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="px-2 py-1 text-xs font-medium rounded-full bg-green-100 text-green-800">
                            {internship.hires}/{internship.openings}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                          <a href="#" className="text-blue-600 hover:text-blue-800 mr-4">Report</a>
                          <a href="#" className="text-blue-600 hover:text-blue-800">Reopen</a>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            
            {/* Post New Internship */}
            <div className="bg-white shadow rounded-lg p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Post New Internship</h2>
              
              <form>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Internship Title</label>
                    <input type="text" className="w-full border border-gray-300 rounded-md p-2" placeholder="e.g., Frontend Development Intern" />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                    <textarea className="w-full border border-gray-300 rounded-md p-2" rows={4} placeholder="Describe the internship role and responsibilities"></textarea>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Duration</label>
                      <input type="text" className="w-full border border-gray-300 rounded-md p-2" placeholder="e.g., 3 months" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Stipend</label>
                      <input type="text" className="w-full border border-gray-300 rounded-md p-2" placeholder="e.g., ₹15,000/month" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Number of Openings</label>
                      <input type="number" className="w-full border border-gray-300 rounded-md p-2" min="1" />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Required Skills</label>
                    <input type="text" className="w-full border border-gray-300 rounded-md p-2" placeholder="e.g., JavaScript, React, HTML/CSS" />
                    <p className="text-xs text-gray-500 mt-1">Separate skills with commas</p>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Start Date</label>
                      <input type="date" className="w-full border border-gray-300 rounded-md p-2" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">End Date</label>
                      <input type="date" className="w-full border border-gray-300 rounded-md p-2" />
                    </div>
                  </div>
                </div>
                
                <div className="mt-6">
                  <button type="submit" className="px-4 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-900">
                    Post Internship
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
        
        {/* Partnerships Tab Content */}
        {activeTab === 'partnerships' && (
          <div className="space-y-8">
            {/* Active Partnerships */}
            <div className="bg-white shadow rounded-lg p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold text-gray-900">Active Academic Partnerships</h2>
                <button className="px-4 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-900">
                  Propose Partnership
                </button>
              </div>
              
              <div className="space-y-6">
                {industryData.partnerships.map((partnership, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-medium text-gray-900">{partnership.institution}</h3>
                        <p className="text-blue-600 font-medium">{partnership.program}</p>
                        <p className="text-gray-600 mt-1">{partnership.description}</p>
                      </div>
                      <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                        partnership.status === 'active' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {partnership.status === 'active' ? 'Active' : 'Proposed'}
                      </span>
                    </div>
                    
                    <div className="mt-4 text-sm">
                      <span className="text-gray-500">Started:</span>
                      <span className="ml-1 text-gray-700">{partnership.startYear}</span>
                    </div>
                    
                    <div className="mt-4 pt-3 border-t border-gray-200 flex justify-end space-x-3">
                      <button className="text-blue-600 hover:text-blue-800 text-sm">
                        View Details
                      </button>
                      <button className="text-blue-600 hover:text-blue-800 text-sm">
                        Contact Faculty
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Partnership Opportunities */}
            <div className="bg-white shadow rounded-lg p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Partnership Opportunities</h2>
              
              <div className="space-y-6">
                <div className="border border-gray-200 rounded-lg p-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-medium text-gray-900">Delhi Technical University</h3>
                      <p className="text-gray-600 mt-1">Looking for industry partners for student projects in AI/ML</p>
                    </div>
                    <span className="bg-blue-100 text-blue-700 px-2 py-1 text-xs rounded-full">
                      New Opportunity
                    </span>
                  </div>
                  
                  <div className="mt-4 pt-3 border-t border-gray-200 flex justify-end">
                    <button className="px-3 py-1 bg-gray-800 text-white rounded-md hover:bg-gray-900 text-sm">
                      Express Interest
                    </button>
                  </div>
                </div>
                
                <div className="border border-gray-200 rounded-lg p-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-medium text-gray-900">VIT Vellore</h3>
                      <p className="text-gray-600 mt-1">Seeking collaboration for a 6-week summer training program in cloud technologies</p>
                    </div>
                    <span className="bg-blue-100 text-blue-700 px-2 py-1 text-xs rounded-full">
                      New Opportunity
                    </span>
                  </div>
                  
                  <div className="mt-4 pt-3 border-t border-gray-200 flex justify-end">
                    <button className="px-3 py-1 bg-gray-800 text-white rounded-md hover:bg-gray-900 text-sm">
                      Express Interest
                    </button>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Propose New Partnership */}
            <div className="bg-white shadow rounded-lg p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Propose New Partnership</h2>
              
              <form>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Institution</label>
                    <select className="w-full border border-gray-300 rounded-md p-2">
                      <option value="">Select an institution</option>
                      <option value="dtu">Delhi Technical University</option>
                      <option value="iitd">IIT Delhi</option>
                      <option value="nsit">Netaji Subhas University of Technology</option>
                      <option value="iitb">IIT Mumbai</option>
                      <option value="iisc">Indian Institute of Science, Bangalore</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Program Title</label>
                    <input type="text" className="w-full border border-gray-300 rounded-md p-2" placeholder="e.g., Industry-Academia Research Collaboration" />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Program Description</label>
                    <textarea className="w-full border border-gray-300 rounded-md p-2" rows={4} placeholder="Describe the proposed partnership program"></textarea>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Proposed Start Date</label>
                      <input type="date" className="w-full border border-gray-300 rounded-md p-2" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Duration</label>
                      <select className="w-full border border-gray-300 rounded-md p-2">
                        <option value="6months">6 months</option>
                        <option value="1year">1 year</option>
                        <option value="2years">2 years</option>
                        <option value="3years">3 years</option>
                        <option value="5years">5 years</option>
                      </select>
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Areas of Collaboration</label>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mt-2">
                      <label className="flex items-center">
                        <input type="checkbox" className="rounded border-gray-300 text-gray-800 mr-2" />
                        <span className="text-sm text-gray-700">Research</span>
                      </label>
                      <label className="flex items-center">
                        <input type="checkbox" className="rounded border-gray-300 text-gray-800 mr-2" />
                        <span className="text-sm text-gray-700">Internships</span>
                      </label>
                      <label className="flex items-center">
                        <input type="checkbox" className="rounded border-gray-300 text-gray-800 mr-2" />
                        <span className="text-sm text-gray-700">Guest Lectures</span>
                      </label>
                      <label className="flex items-center">
                        <input type="checkbox" className="rounded border-gray-300 text-gray-800 mr-2" />
                        <span className="text-sm text-gray-700">Workshops</span>
                      </label>
                      <label className="flex items-center">
                        <input type="checkbox" className="rounded border-gray-300 text-gray-800 mr-2" />
                        <span className="text-sm text-gray-700">Mentorship</span>
                      </label>
                      <label className="flex items-center">
                        <input type="checkbox" className="rounded border-gray-300 text-gray-800 mr-2" />
                        <span className="text-sm text-gray-700">Curriculum Development</span>
                      </label>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6">
                  <button type="submit" className="px-4 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-900">
                    Submit Proposal
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
                    <label className="block text-sm font-medium text-gray-700 mb-1">Primary Email Address</label>
                    <input 
                      type="email" 
                      className="w-full border border-gray-300 rounded-md p-2"
                      value={industryData.contactEmail}
                      onChange={(e) => setIndustryData(prev => ({...prev, contactEmail: e.target.value}))}
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Primary Contact Phone</label>
                    <input 
                      type="text" 
                      className="w-full border border-gray-300 rounded-md p-2"
                      value={industryData.contactPhone}
                      onChange={(e) => setIndustryData(prev => ({...prev, contactPhone: e.target.value}))}
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
                      <button className="px-4 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-900">
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
                      <h3 className="font-medium text-gray-900">Internship Applications</h3>
                      <p className="text-sm text-gray-500">Receive notifications when students apply for internships</p>
                    </div>
                    <div className="relative inline-block w-12 h-6 cursor-pointer">
                      <input type="checkbox" id="toggle-applications" className="sr-only" defaultChecked />
                      <span className="block h-6 w-12 rounded-full bg-gray-800"></span>
                      <span className="absolute left-1 top-1 bg-white h-4 w-4 rounded-full transition-transform transform translate-x-6"></span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-medium text-gray-900">Partnership Proposals</h3>
                      <p className="text-sm text-gray-500">Get notified about new academic partnership opportunities</p>
                    </div>
                    <div className="relative inline-block w-12 h-6 cursor-pointer">
                      <input type="checkbox" id="toggle-partnerships" className="sr-only" defaultChecked />
                      <span className="block h-6 w-12 rounded-full bg-gray-800"></span>
                      <span className="absolute left-1 top-1 bg-white h-4 w-4 rounded-full transition-transform transform translate-x-6"></span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-medium text-gray-900">Platform Updates</h3>
                      <p className="text-sm text-gray-500">Receive updates about new features and platform changes</p>
                    </div>
                    <div className="relative inline-block w-12 h-6 cursor-pointer">
                      <input type="checkbox" id="toggle-updates" className="sr-only" />
                      <span className="block h-6 w-12 rounded-full bg-gray-300"></span>
                      <span className="absolute left-1 top-1 bg-white h-4 w-4 rounded-full transition-transform"></span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-medium text-gray-900">Weekly Digest</h3>
                      <p className="text-sm text-gray-500">Get a weekly summary of activities and updates</p>
                    </div>
                    <div className="relative inline-block w-12 h-6 cursor-pointer">
                      <input type="checkbox" id="toggle-digest" className="sr-only" defaultChecked />
                      <span className="block h-6 w-12 rounded-full bg-gray-800"></span>
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
                    <span className="font-medium text-gray-700 block">Industry ID:</span>
                    {industryData.industryId}
                  </p>
                  <p className="text-sm text-gray-500">
                    <span className="font-medium text-gray-700 block">Account Status:</span>
                    <span className="flex items-center mt-1">
                      <CheckCircle className="h-4 w-4 text-green-600 mr-1" /> 
                      Verified Partner
                    </span>
                  </p>
                  <p className="text-sm text-gray-500">
                    <span className="font-medium text-gray-700 block">Joined:</span>
                    October 15, 2020
                  </p>
                  <p className="text-sm text-gray-500">
                    <span className="font-medium text-gray-700 block">Last Login:</span>
                    Today at 11:45 AM
                  </p>
                </div>
              </div>
              
              <div className="bg-white shadow rounded-lg p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-4">Data & Privacy</h2>
                <div className="space-y-4">
                  <a href="#" className="text-blue-600 hover:text-blue-800 block text-sm">
                    Download Company Data
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
export default IndustryProfile;