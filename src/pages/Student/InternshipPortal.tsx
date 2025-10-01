import { useState } from 'react';
import { Search, MapPin, Clock, Building2, Heart } from 'lucide-react';

const InternshipPortal = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState({
    location: '',
    duration: '',
    type: '',
    field: ''
  });

  const internships = [
    {
      id: 1,
      title: 'Software Development Intern',
      company: 'Tech Innovations Pvt Ltd',
      location: 'Bangalore',
      duration: '3 months',
      type: 'Full-time',
      field: 'Technology',
      description: 'Work on cutting-edge web applications using React and Node.js',
      requirements: ['JavaScript', 'React', 'Node.js'],
      stipend: '₹15,000/month',
      posted: '2 days ago',
      applications: 45,
      isBookmarked: false
    },
    {
      id: 2,
      title: 'Digital Marketing Intern',
      company: 'Marketing Hub',
      location: 'Mumbai',
      duration: '2 months',
      type: 'Part-time',
      field: 'Marketing',
      description: 'Learn digital marketing strategies and campaign management',
      requirements: ['Social Media', 'Analytics', 'Content Writing'],
      stipend: '₹8,000/month',
      posted: '1 week ago',
      applications: 23,
      isBookmarked: true
    },
    {
      id: 3,
      title: 'UI/UX Design Intern',
      company: 'Design Studio',
      location: 'Delhi',
      duration: '4 months',
      type: 'Full-time',
      field: 'Design',
      description: 'Create user-centered designs for mobile and web applications',
      requirements: ['Figma', 'Adobe XD', 'Prototyping'],
      stipend: '₹12,000/month',
      posted: '3 days ago',
      applications: 67,
      isBookmarked: false
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Internship Portal</h1>
          <p className="text-gray-600 mt-2">Discover and apply for internships that match your interests</p>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-lg shadow p-6 mb-8">
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Search */}
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search internships, companies, or skills..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
            </div>

            {/* Filters */}
            <div className="flex gap-4">
              <select
                value={filters.location}
                onChange={(e) => setFilters({ ...filters, location: e.target.value })}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
              >
                <option value="">All Locations</option>
                <option value="bangalore">Bangalore</option>
                <option value="mumbai">Mumbai</option>
                <option value="delhi">Delhi</option>
              </select>

              <select
                value={filters.duration}
                onChange={(e) => setFilters({ ...filters, duration: e.target.value })}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
              >
                <option value="">Duration</option>
                <option value="1-2">1-2 months</option>
                <option value="3-4">3-4 months</option>
                <option value="6+">6+ months</option>
              </select>

              <select
                value={filters.field}
                onChange={(e) => setFilters({ ...filters, field: e.target.value })}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
              >
                <option value="">All Fields</option>
                <option value="technology">Technology</option>
                <option value="marketing">Marketing</option>
                <option value="design">Design</option>
                <option value="finance">Finance</option>
              </select>
            </div>
          </div>
        </div>

        {/* Results */}
        <div className="space-y-6">
          {internships.map((internship) => (
            <div key={internship.id} className="bg-white rounded-lg shadow p-6">
              <div className="flex justify-between items-start mb-4">
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h2 className="text-xl font-semibold text-gray-900">{internship.title}</h2>
                    <button className={`p-2 rounded-full ${internship.isBookmarked ? 'text-red-500' : 'text-gray-400 hover:text-red-500'}`}>
                      <Heart size={20} fill={internship.isBookmarked ? 'currentColor' : 'none'} />
                    </button>
                  </div>
                  
                  <div className="flex items-center text-gray-600 mb-2">
                    <Building2 size={16} className="mr-2" />
                    <span className="font-medium">{internship.company}</span>
                  </div>

                  <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
                    <div className="flex items-center">
                      <MapPin size={16} className="mr-1" />
                      {internship.location}
                    </div>
                    <div className="flex items-center">
                      <Clock size={16} className="mr-1" />
                      {internship.duration}
                    </div>
                    <span className="bg-primary-100 text-primary-800 px-2 py-1 rounded-full text-xs">
                      {internship.type}
                    </span>
                    <span className="bg-gray-100 text-gray-800 px-2 py-1 rounded-full text-xs">
                      {internship.field}
                    </span>
                  </div>

                  <p className="text-gray-700 mb-3">{internship.description}</p>

                  <div className="mb-3">
                    <h4 className="font-medium text-gray-900 mb-2">Required Skills:</h4>
                    <div className="flex flex-wrap gap-2">
                      {internship.requirements.map((skill, index) => (
                        <span key={index} className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 text-sm text-gray-600">
                      <span className="font-semibold text-green-600">{internship.stipend}</span>
                      <span>{internship.posted}</span>
                      <span>{internship.applications} applications</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex gap-3">
                <button className="bg-primary-600 text-white px-6 py-2 rounded-lg hover:bg-primary-700 transition-colors">
                  Apply Now
                </button>
                <button className="border border-gray-300 text-gray-700 px-6 py-2 rounded-lg hover:bg-gray-50 transition-colors">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-8">
          <button className="bg-gray-200 text-gray-700 px-6 py-2 rounded-lg hover:bg-gray-300 transition-colors">
            Load More Internships
          </button>
        </div>
      </div>
    </div>
  );
};

export default InternshipPortal;