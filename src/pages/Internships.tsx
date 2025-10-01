import { useState, useEffect, useMemo } from 'react';
import { 
  Briefcase, 
  Clock, 
  MapPin, 
  Building2, 
  Filter as FilterIcon, 
  Search, 
  BookOpen, 
  BadgeIndianRupee,
  Sparkles,
  X,
  ArrowRight
} from 'lucide-react';
import { motion } from 'framer-motion';

// Interface Definitions
interface Internship {
  id: number;
  title: string;
  company: string;
  companyLogo?: string;
  location: string;
  locationType: 'Remote' | 'Onsite' | 'Hybrid';
  duration: string;
  stipend: string;
  category: string;
  description: string;
  responsibilities: string[];
  requirements: string[];
  skills: string[];
  postedDate: string;
  deadline: string;
  featured?: boolean;
}

interface FilterOptions {
  categories: string[];
  locations: string[];
  locationTypes: string[];
  durations: string[];
  stipendRanges: string[];
}

const Internships = () => {
  const [internships, setInternships] = useState<Internship[]>([]);
  const [filteredInternships, setFilteredInternships] = useState<Internship[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filterOpen, setFilterOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const internshipsPerPage = 6;

  // Filter states
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedLocation, setSelectedLocation] = useState<string | null>(null);
  const [selectedLocationType, setSelectedLocationType] = useState<string | null>(null);
  const [selectedDuration, setSelectedDuration] = useState<string | null>(null);
  const [selectedStipendRange, setSelectedStipendRange] = useState<string | null>(null);

  // Mock data for internships
  const mockInternships = useMemo<Internship[]>(() => [
    {
      id: 1,
      title: 'Software Development Intern',
      company: 'Tech Innovations Pvt Ltd',
      companyLogo: '/company/tech-innovations.png',
      location: 'Mumbai',
      locationType: 'Hybrid',
      duration: '6 months',
      stipend: '₹15,000 - ₹20,000 per month',
      category: 'Information Technology',
      description: 'Join our development team to work on cutting-edge web applications using modern technologies.',
      responsibilities: [
        'Develop and maintain web applications using React, Node.js and other modern frameworks',
        'Collaborate with senior developers to implement new features',
        'Write clean, maintainable, and efficient code',
        'Participate in code reviews and contribute to technical discussions'
      ],
      requirements: [
        'Currently pursuing B.Tech/M.Tech in Computer Science or related field',
        'Knowledge of JavaScript, HTML, CSS',
        'Familiarity with React.js or similar frontend frameworks',
        'Basic understanding of backend technologies'
      ],
      skills: ['JavaScript', 'React', 'Node.js', 'HTML/CSS', 'Git'],
      postedDate: '2025-08-01',
      deadline: '2025-09-15',
      featured: true
    },
    {
      id: 2,
      title: 'Data Analysis Intern',
      company: 'Future Finance Solutions',
      companyLogo: '/company/future-finance.png',
      location: 'Bangalore',
      locationType: 'Onsite',
      duration: '3 months',
      stipend: '₹12,000 per month',
      category: 'Finance',
      description: 'Assist in analyzing financial data and generating insights for our fintech products.',
      responsibilities: [
        'Collect and analyze financial data from various sources',
        'Create data visualizations and reports for stakeholders',
        'Support the development of data-driven financial models',
        'Assist in preparing presentations for management'
      ],
      requirements: [
        'Currently pursuing B.Com/M.Com/MBA in Finance or related field',
        'Strong analytical skills and attention to detail',
        'Proficiency in Excel and basic knowledge of SQL',
        'Interest in financial technology and data analysis'
      ],
      skills: ['Data Analysis', 'Excel', 'SQL', 'Financial Modeling', 'Statistics'],
      postedDate: '2025-08-05',
      deadline: '2025-09-10',
      featured: true
    },
    {
      id: 3,
      title: 'Renewable Energy Research Intern',
      company: 'Green Earth Enterprises',
      companyLogo: '/company/green-earth.png',
      location: 'Delhi',
      locationType: 'Onsite',
      duration: '4 months',
      stipend: '₹10,000 per month',
      category: 'Renewable Energy',
      description: 'Support research and development efforts in sustainable energy solutions.',
      responsibilities: [
        'Assist in conducting research on renewable energy technologies',
        'Collect and analyze data from field experiments',
        'Support the development of energy efficiency models',
        'Prepare technical reports and presentations'
      ],
      requirements: [
        'Currently pursuing B.Tech/M.Tech in Mechanical/Electrical/Environmental Engineering',
        'Understanding of renewable energy concepts',
        'Basic knowledge of data collection and analysis',
        'Good written and verbal communication skills'
      ],
      skills: ['Research', 'Data Analysis', 'Technical Writing', 'Sustainability'],
      postedDate: '2025-08-10',
      deadline: '2025-09-20'
    },
    {
      id: 4,
      title: 'Digital Marketing Intern',
      company: 'Digital Media Hub',
      companyLogo: '/company/digital-media.png',
      location: 'Mumbai',
      locationType: 'Remote',
      duration: '3 months',
      stipend: '₹8,000 per month',
      category: 'Media & Entertainment',
      description: 'Assist in developing and implementing digital marketing strategies for our clients.',
      responsibilities: [
        'Support the creation of social media content and campaigns',
        'Assist in monitoring and analyzing campaign performance',
        'Help with SEO implementation and keyword research',
        'Contribute to content marketing efforts'
      ],
      requirements: [
        'Currently pursuing BBA/MBA in Marketing or related field',
        'Familiarity with social media platforms and digital marketing concepts',
        'Creative mindset and good writing skills',
        'Basic understanding of SEO and analytics'
      ],
      skills: ['Social Media Marketing', 'Content Creation', 'SEO', 'Analytics'],
      postedDate: '2025-08-15',
      deadline: '2025-09-25'
    },
    {
      id: 5,
      title: 'Healthcare Analytics Intern',
      company: 'Healthcare Solutions Inc',
      companyLogo: '/company/healthcare-solutions.png',
      location: 'Hyderabad',
      locationType: 'Hybrid',
      duration: '6 months',
      stipend: '₹15,000 per month',
      category: 'Healthcare',
      description: 'Work with our data science team to analyze healthcare data and improve patient outcomes.',
      responsibilities: [
        'Collect and process healthcare data from multiple sources',
        'Develop statistical models and data visualizations',
        'Support the implementation of machine learning algorithms',
        'Assist in preparing reports and presentations for stakeholders'
      ],
      requirements: [
        'Currently pursuing B.Tech/M.Tech in Data Science/Computer Science or related field',
        'Strong analytical skills and statistical knowledge',
        'Familiarity with Python, R, or similar data analysis tools',
        'Interest in healthcare technology'
      ],
      skills: ['Python', 'Data Analysis', 'Statistics', 'Machine Learning', 'Healthcare'],
      postedDate: '2025-08-20',
      deadline: '2025-10-01',
      featured: true
    },
    {
      id: 6,
      title: 'Educational Content Development Intern',
      company: 'EduTech Pioneers',
      companyLogo: '/company/edutech.png',
      location: 'Pune',
      locationType: 'Remote',
      duration: '4 months',
      stipend: '₹10,000 per month',
      category: 'Education',
      description: 'Create engaging educational content for our online learning platform.',
      responsibilities: [
        'Develop curriculum materials for various subjects and age groups',
        'Create interactive learning exercises and assessments',
        'Assist in video script writing and storyboarding',
        'Support the evaluation and improvement of existing content'
      ],
      requirements: [
        'Currently pursuing B.Ed/M.Ed or degree in Education/Teaching',
        'Strong written communication skills',
        'Creative thinking and innovative approach to education',
        'Basic knowledge of digital learning tools'
      ],
      skills: ['Content Development', 'Curriculum Design', 'Educational Technology', 'Writing'],
      postedDate: '2025-08-25',
      deadline: '2025-10-05'
    },
    {
      id: 7,
      title: 'Product Design Intern',
      company: 'Manufacturing Excellence',
      companyLogo: '/company/manufacturing.png',
      location: 'Chennai',
      locationType: 'Onsite',
      duration: '6 months',
      stipend: '₹12,000 per month',
      category: 'Manufacturing',
      description: 'Assist in designing and developing innovative product solutions for the manufacturing sector.',
      responsibilities: [
        'Support the product design team in creating 2D and 3D designs',
        'Assist in prototyping and testing new product concepts',
        'Contribute to technical documentation and specifications',
        'Participate in design reviews and feedback sessions'
      ],
      requirements: [
        'Currently pursuing B.Tech/M.Tech in Mechanical/Industrial Engineering or related field',
        'Proficiency in CAD software (AutoCAD, SolidWorks, etc.)',
        'Understanding of manufacturing processes',
        'Attention to detail and creative problem-solving skills'
      ],
      skills: ['CAD', 'Product Design', 'Prototyping', 'Technical Documentation'],
      postedDate: '2025-09-01',
      deadline: '2025-10-15'
    },
    {
      id: 8,
      title: 'Agricultural Technology Intern',
      company: 'Agri Innovations',
      companyLogo: '/company/agri.png',
      location: 'Chandigarh',
      locationType: 'Hybrid',
      duration: '5 months',
      stipend: '₹10,000 per month',
      category: 'Agriculture',
      description: 'Support the development and implementation of technological solutions for agricultural challenges.',
      responsibilities: [
        'Assist in field testing of agricultural technology solutions',
        'Collect and analyze data from field experiments',
        'Support the development of mobile applications for farmers',
        'Contribute to research on sustainable farming practices'
      ],
      requirements: [
        'Currently pursuing B.Tech/M.Tech in Agriculture/Environmental Science or related field',
        'Understanding of agricultural practices and challenges',
        'Basic knowledge of technology applications in agriculture',
        'Willingness to participate in field work'
      ],
      skills: ['Agriculture', 'Field Research', 'Data Collection', 'Mobile Applications'],
      postedDate: '2025-09-05',
      deadline: '2025-10-20'
    },
    {
      id: 9,
      title: 'Machine Learning Intern',
      company: 'Tech Innovations Pvt Ltd',
      companyLogo: '/company/tech-innovations.png',
      location: 'Mumbai',
      locationType: 'Hybrid',
      duration: '6 months',
      stipend: '₹20,000 per month',
      category: 'Information Technology',
      description: 'Join our AI team to develop and implement machine learning models for real-world applications.',
      responsibilities: [
        'Develop and implement machine learning algorithms',
        'Process and analyze large datasets',
        'Assist in model training, testing, and optimization',
        'Contribute to research on new AI techniques'
      ],
      requirements: [
        'Currently pursuing B.Tech/M.Tech in Computer Science/AI/Data Science',
        'Strong foundation in machine learning concepts and algorithms',
        'Programming experience in Python, TensorFlow, or PyTorch',
        'Knowledge of data structures and algorithms'
      ],
      skills: ['Machine Learning', 'Python', 'TensorFlow', 'Data Science', 'Algorithm Design'],
      postedDate: '2025-09-10',
      deadline: '2025-10-25'
    },
    {
      id: 10,
      title: 'Finance & Accounting Intern',
      company: 'Future Finance Solutions',
      companyLogo: '/company/future-finance.png',
      location: 'Bangalore',
      locationType: 'Onsite',
      duration: '3 months',
      stipend: '₹12,000 per month',
      category: 'Finance',
      description: 'Assist our finance team with accounting, financial analysis, and reporting tasks.',
      responsibilities: [
        'Support the preparation of financial statements and reports',
        'Assist in accounts receivable and payable processes',
        'Help with budget preparation and financial forecasting',
        'Contribute to financial data analysis and interpretation'
      ],
      requirements: [
        'Currently pursuing B.Com/M.Com/MBA in Finance/Accounting',
        'Strong understanding of accounting principles',
        'Proficiency in Excel and financial software',
        'Attention to detail and analytical mindset'
      ],
      skills: ['Accounting', 'Financial Analysis', 'Excel', 'Financial Reporting'],
      postedDate: '2025-09-15',
      deadline: '2025-10-30'
    }
  ], []);

  // Filter options
  const filterOptions: FilterOptions = {
    categories: [
      'Information Technology',
      'Finance',
      'Healthcare',
      'Education',
      'Manufacturing',
      'Renewable Energy',
      'Agriculture',
      'Media & Entertainment'
    ],
    locations: [
      'Mumbai',
      'Bangalore',
      'Delhi',
      'Hyderabad',
      'Chennai',
      'Pune',
      'Chandigarh'
    ],
    locationTypes: ['Remote', 'Onsite', 'Hybrid'],
    durations: ['3 months', '4 months', '5 months', '6 months'],
    stipendRanges: [
      'Under ₹10,000',
      '₹10,000 - ₹15,000',
      '₹15,000 - ₹20,000',
      'Above ₹20,000'
    ]
  };

  // Initialize internships state with mock data
  useEffect(() => {
    setInternships(mockInternships);
    setFilteredInternships(mockInternships);
  }, [mockInternships]);

  // Apply filters and search
  useEffect(() => {
    let results = [...internships];
    
    // Apply search query
    if (searchQuery) {
      results = results.filter(
        internship => 
          internship.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          internship.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
          internship.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    
    // Apply category filter
    if (selectedCategory) {
      results = results.filter(internship => internship.category === selectedCategory);
    }
    
    // Apply location filter
    if (selectedLocation) {
      results = results.filter(internship => internship.location === selectedLocation);
    }
    
    // Apply location type filter
    if (selectedLocationType) {
      results = results.filter(internship => internship.locationType === selectedLocationType);
    }
    
    // Apply duration filter
    if (selectedDuration) {
      results = results.filter(internship => internship.duration === selectedDuration);
    }
    
    // Apply stipend range filter
    if (selectedStipendRange) {
      results = results.filter(internship => {
        const stipendValue = parseInt(internship.stipend.match(/₹(\d+)/)?.[1] || '0');
        
        switch(selectedStipendRange) {
          case 'Under ₹10,000':
            return stipendValue < 10000;
          case '₹10,000 - ₹15,000':
            return stipendValue >= 10000 && stipendValue < 15000;
          case '₹15,000 - ₹20,000':
            return stipendValue >= 15000 && stipendValue < 20000;
          case 'Above ₹20,000':
            return stipendValue >= 20000;
          default:
            return true;
        }
      });
    }
    
    setFilteredInternships(results);
    setCurrentPage(1);
  }, [
    internships,
    searchQuery, 
    selectedCategory, 
    selectedLocation, 
    selectedLocationType, 
    selectedDuration, 
    selectedStipendRange
  ]);

  // Pagination logic
  const indexOfLastInternship = currentPage * internshipsPerPage;
  const indexOfFirstInternship = indexOfLastInternship - internshipsPerPage;
  const currentInternships = filteredInternships.slice(indexOfFirstInternship, indexOfLastInternship);
  const totalPages = Math.ceil(filteredInternships.length / internshipsPerPage);

  // Reset all filters
  const resetFilters = () => {
    setSelectedCategory(null);
    setSelectedLocation(null);
    setSelectedLocationType(null);
    setSelectedDuration(null);
    setSelectedStipendRange(null);
    setSearchQuery('');
  };

  // Count active filters
  const activeFiltersCount = 
    (selectedCategory ? 1 : 0) +
    (selectedLocation ? 1 : 0) +
    (selectedLocationType ? 1 : 0) +
    (selectedDuration ? 1 : 0) +
    (selectedStipendRange ? 1 : 0);

  // Featured internships
  const featuredInternships = internships.filter(internship => internship.featured);

  return (
    <div className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Find Your Perfect Internship
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Discover opportunities that align with your career goals and academic requirements
          </p>
          <div className="relative">
            <div className="flex items-center w-full max-w-xl mx-auto">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type="text"
                  placeholder="Search internships by title, company, or keywords"
                  className="pl-10 pr-4 py-3 w-full rounded-l-md border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <button
                className="bg-primary-600 text-white px-6 py-3 rounded-r-md hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
                onClick={() => setFilterOpen(!filterOpen)}
              >
                <div className="flex items-center">
                  <FilterIcon className="h-5 w-5 mr-2" />
                  <span>Filter</span>
                  {activeFiltersCount > 0 && (
                    <span className="ml-2 bg-white text-primary-600 rounded-full h-5 w-5 flex items-center justify-center text-xs font-medium">
                      {activeFiltersCount}
                    </span>
                  )}
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Filter Panel */}
        {filterOpen && (
          <div className="bg-white p-6 rounded-lg shadow-md mb-8 border border-gray-200">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-medium text-gray-900">Filters</h2>
              <div className="flex items-center">
                {activeFiltersCount > 0 && (
                  <button
                    className="text-sm text-gray-600 hover:text-primary-600 mr-4"
                    onClick={resetFilters}
                  >
                    Clear all filters
                  </button>
                )}
                <button
                  className="text-gray-500 hover:text-gray-700"
                  onClick={() => setFilterOpen(false)}
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
              {/* Category Filter */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Category
                </label>
                <select
                  className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm rounded-md"
                  value={selectedCategory || ''}
                  onChange={(e) => setSelectedCategory(e.target.value || null)}
                >
                  <option value="">All Categories</option>
                  {filterOptions.categories.map((category) => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
              </div>
              
              {/* Location Filter */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Location
                </label>
                <select
                  className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm rounded-md"
                  value={selectedLocation || ''}
                  onChange={(e) => setSelectedLocation(e.target.value || null)}
                >
                  <option value="">All Locations</option>
                  {filterOptions.locations.map((location) => (
                    <option key={location} value={location}>{location}</option>
                  ))}
                </select>
              </div>
              
              {/* Location Type Filter */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Location Type
                </label>
                <select
                  className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm rounded-md"
                  value={selectedLocationType || ''}
                  onChange={(e) => setSelectedLocationType(e.target.value || null)}
                >
                  <option value="">All Types</option>
                  {filterOptions.locationTypes.map((type) => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
              </div>
              
              {/* Duration Filter */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Duration
                </label>
                <select
                  className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm rounded-md"
                  value={selectedDuration || ''}
                  onChange={(e) => setSelectedDuration(e.target.value || null)}
                >
                  <option value="">All Durations</option>
                  {filterOptions.durations.map((duration) => (
                    <option key={duration} value={duration}>{duration}</option>
                  ))}
                </select>
              </div>
              
              {/* Stipend Range Filter */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Stipend
                </label>
                <select
                  className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm rounded-md"
                  value={selectedStipendRange || ''}
                  onChange={(e) => setSelectedStipendRange(e.target.value || null)}
                >
                  <option value="">All Ranges</option>
                  {filterOptions.stipendRanges.map((range) => (
                    <option key={range} value={range}>{range}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        )}

        {/* Featured Internships Section - Only show if no filters are active */}
        {!searchQuery && 
         !selectedCategory && 
         !selectedLocation && 
         !selectedLocationType && 
         !selectedDuration && 
         !selectedStipendRange && 
         featuredInternships.length > 0 && (
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
              <Sparkles className="h-6 w-6 text-amber-500 mr-2" />
              Featured Internships
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {featuredInternships.map((internship) => (
                <motion.div
                  key={internship.id}
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  className="bg-white rounded-lg overflow-hidden shadow-md border border-gray-200 hover:border-primary-300"
                >
                  <div className="p-5">
                    <div className="h-12 mb-4 flex items-center">
                      <img 
                        src={internship.companyLogo || '/prashikshan-logo.svg'} 
                        alt={`${internship.company} logo`}
                        className="h-8 max-w-[120px] object-contain"
                      />
                      <span className="ml-auto bg-amber-100 text-amber-800 text-xs px-2 py-1 rounded-full font-medium">
                        Featured
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{internship.title}</h3>
                    <p className="text-sm text-gray-500 mb-4">{internship.company}</p>
                    
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center text-gray-600">
                        <MapPin className="h-4 w-4 mr-2 flex-shrink-0" />
                        <span>{internship.location} ({internship.locationType})</span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <Clock className="h-4 w-4 mr-2 flex-shrink-0" />
                        <span>{internship.duration}</span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <BadgeIndianRupee className="h-4 w-4 mr-2 flex-shrink-0" />
                        <span>{internship.stipend}</span>
                      </div>
                    </div>
                    
                    <div className="pt-4 border-t border-gray-100">
                      <a 
                        href={`/internships/${internship.id}`} 
                        className="block w-full text-center bg-primary-50 text-primary-700 py-2 px-4 rounded-md hover:bg-primary-100 transition-colors font-medium"
                      >
                        View Details
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {/* Main Internships Listing */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-900">
              {filteredInternships.length > 0 ? (
                <>All Internships <span className="text-gray-500 font-normal">({filteredInternships.length})</span></>
              ) : (
                'All Internships'
              )}
            </h2>
            <div className="flex items-center">
              {activeFiltersCount > 0 && (
                <span className="text-sm text-gray-500 mr-2">
                  {filteredInternships.length} results found
                </span>
              )}
            </div>
          </div>

          {currentInternships.length > 0 ? (
            <div className="space-y-6">
              {currentInternships.map((internship) => (
                <motion.div
                  key={internship.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow"
                >
                  <div className="p-6">
                    <div className="flex flex-col md:flex-row md:items-start">
                      <div className="md:mr-6 mb-4 md:mb-0 flex-shrink-0">
                        <div className="h-12 w-12 md:h-16 md:w-16 flex items-center justify-center bg-gray-50 rounded-md">
                          <img 
                            src={internship.companyLogo || '/prashikshan-logo.svg'} 
                            alt={`${internship.company} logo`}
                            className="max-h-10 max-w-10 md:max-h-14 md:max-w-14 object-contain"
                          />
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="flex flex-col md:flex-row md:justify-between md:items-start">
                          <div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-1">
                              {internship.title}
                              {internship.featured && (
                                <span className="ml-2 bg-amber-100 text-amber-800 text-xs px-2 py-0.5 rounded-full font-medium">
                                  Featured
                                </span>
                              )}
                            </h3>
                            <p className="text-sm text-gray-600 mb-2">{internship.company}</p>
                          </div>
                          <div className="md:text-right mt-2 md:mt-0">
                            <div className="text-sm text-gray-500 mb-1">
                              Posted: {new Date(internship.postedDate).toLocaleDateString('en-IN')}
                            </div>
                            <div className="text-sm font-medium text-red-600">
                              Apply by: {new Date(internship.deadline).toLocaleDateString('en-IN')}
                            </div>
                          </div>
                        </div>
                        
                        <div className="mt-3 grid grid-cols-1 md:grid-cols-3 gap-y-2 gap-x-4">
                          <div className="flex items-center text-gray-600">
                            <MapPin className="h-4 w-4 mr-2 flex-shrink-0" />
                            <span className="text-sm">{internship.location} ({internship.locationType})</span>
                          </div>
                          <div className="flex items-center text-gray-600">
                            <Clock className="h-4 w-4 mr-2 flex-shrink-0" />
                            <span className="text-sm">{internship.duration}</span>
                          </div>
                          <div className="flex items-center text-gray-600">
                            <BadgeIndianRupee className="h-4 w-4 mr-2 flex-shrink-0" />
                            <span className="text-sm">{internship.stipend}</span>
                          </div>
                        </div>
                        
                        <p className="mt-3 text-gray-700">{internship.description}</p>
                        
                        <div className="mt-4 flex flex-wrap gap-2">
                          {internship.skills.slice(0, 4).map((skill, index) => (
                            <span 
                              key={index} 
                              className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800"
                            >
                              {skill}
                            </span>
                          ))}
                          {internship.skills.length > 4 && (
                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                              +{internship.skills.length - 4} more
                            </span>
                          )}
                        </div>
                        
                        <div className="mt-4 flex flex-col md:flex-row md:items-center md:justify-end">
                          <a 
                            href={`/internships/${internship.id}`} 
                            className="inline-flex justify-center items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
                          >
                            View Details
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12 bg-white rounded-lg border border-gray-200">
              <Briefcase className="mx-auto h-12 w-12 text-gray-400" />
              <h3 className="mt-2 text-lg font-medium text-gray-900">No internships found</h3>
              <p className="mt-1 text-gray-500">Try adjusting your filters or search criteria</p>
              <div className="mt-6">
                <button
                  onClick={resetFilters}
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
                >
                  Clear filters
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Pagination */}
        {filteredInternships.length > internshipsPerPage && (
          <div className="mt-8 flex justify-center">
            <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
              <button
                onClick={() => setCurrentPage(currentPage > 1 ? currentPage - 1 : 1)}
                disabled={currentPage === 1}
                className={`relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium ${
                  currentPage === 1 ? 'text-gray-300 cursor-not-allowed' : 'text-gray-500 hover:bg-gray-50'
                }`}
              >
                <span className="sr-only">Previous</span>
                <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </button>
              
              {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                // Logic to show correct page numbers even when current page is close to end
                let pageNum;
                if (totalPages <= 5) {
                  pageNum = i + 1;
                } else if (currentPage <= 3) {
                  pageNum = i + 1;
                } else if (currentPage >= totalPages - 2) {
                  pageNum = totalPages - 4 + i;
                } else {
                  pageNum = currentPage - 2 + i;
                }
                
                return (
                  <button
                    key={i}
                    onClick={() => setCurrentPage(pageNum)}
                    className={`relative inline-flex items-center px-4 py-2 border text-sm font-medium ${
                      currentPage === pageNum
                        ? 'z-10 bg-primary-50 border-primary-500 text-primary-600'
                        : 'bg-white border-gray-300 text-gray-500 hover:bg-gray-50'
                    }`}
                  >
                    {pageNum}
                  </button>
                );
              })}
              
              <button
                onClick={() => setCurrentPage(currentPage < totalPages ? currentPage + 1 : totalPages)}
                disabled={currentPage === totalPages}
                className={`relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium ${
                  currentPage === totalPages ? 'text-gray-300 cursor-not-allowed' : 'text-gray-500 hover:bg-gray-50'
                }`}
              >
                <span className="sr-only">Next</span>
                <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
              </button>
            </nav>
          </div>
        )}

        {/* How It Works Section */}
        <div className="mt-20 mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 text-center">
              <div className="inline-flex items-center justify-center p-3 bg-primary-100 rounded-full mb-4">
                <Search className="h-6 w-6 text-primary-600" />
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">1. Find Opportunities</h3>
              <p className="text-gray-600">
                Browse through diverse internship listings from top companies across various industries.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 text-center">
              <div className="inline-flex items-center justify-center p-3 bg-primary-100 rounded-full mb-4">
                <BookOpen className="h-6 w-6 text-primary-600" />
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">2. Apply & Learn</h3>
              <p className="text-gray-600">
                Submit your application through our platform and gain hands-on experience in your field of interest.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 text-center">
              <div className="inline-flex items-center justify-center p-3 bg-primary-100 rounded-full mb-4">
                <Building2 className="h-6 w-6 text-primary-600" />
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">3. Build Your Career</h3>
              <p className="text-gray-600">
                Develop industry-relevant skills, expand your network, and enhance your resume for future opportunities.
              </p>
            </div>
          </div>
        </div>

        {/* For Students and Industry Partners */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-primary-50 rounded-lg p-6 border border-primary-100">
            <h3 className="text-xl font-bold text-gray-900 mb-4">For Students</h3>
            <p className="text-gray-700 mb-4">
              Access internship opportunities that align with your academic requirements and career aspirations. 
              Prashikshan helps you find relevant experiences in accordance with the NEP 2020 guidelines.
            </p>
            <a
              href="/student/register"
              className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium"
            >
              Register as a Student
              <ArrowRight className="ml-1 h-4 w-4" />
            </a>
          </div>
          
          <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
            <h3 className="text-xl font-bold text-gray-900 mb-4">For Industry Partners</h3>
            <p className="text-gray-700 mb-4">
              Connect with talented students and contribute to building the future workforce. 
              Post internship opportunities and manage the entire process through our platform.
            </p>
            <a
              href="/industry/register"
              className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium"
            >
              Become a Partner
              <ArrowRight className="ml-1 h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Internships;