import { useState } from 'react';
import { Search, MapPin, Building, Calendar, BookOpen, ExternalLink, Bookmark, Share2 } from 'lucide-react';

// Types
interface InternshipPost {
  id: string;
  title: string;
  company: string;
  location: string;
  type: 'remote' | 'onsite' | 'hybrid';
  duration: string;
  stipend: string;
  postedDate: string;
  deadline: string;
  skills: string[];
  description: string;
  responsibilities: string[];
  requirements: string[];
  applicationLink: string;
  companyLogo: string;
  saved: boolean;
}

const Posts = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [locationFilter, setLocationFilter] = useState('');
  const [typeFilter, setTypeFilter] = useState('');
  const [durationFilter, setDurationFilter] = useState('');
  const [skillsFilter, setSkillsFilter] = useState('');
  
  // Mock internship posts data
  const [internshipPosts, setInternshipPosts] = useState<InternshipPost[]>([
    {
      id: 'post-001',
      title: 'Frontend Development Intern',
      company: 'TechSolutions Pvt Ltd',
      location: 'Bangalore',
      type: 'hybrid',
      duration: '3 months',
      stipend: '₹15,000/month',
      postedDate: '2025-09-25',
      deadline: '2025-10-15',
      skills: ['HTML', 'CSS', 'JavaScript', 'React'],
      description: 'We are looking for a passionate Frontend Development Intern to join our dynamic team. The intern will work on real-world projects and gain hands-on experience in building modern web applications.',
      responsibilities: [
        'Develop and maintain responsive web applications',
        'Collaborate with the design team to implement UI/UX designs',
        'Debug and fix issues in existing applications',
        'Optimize applications for maximum speed and scalability'
      ],
      requirements: [
        'Currently pursuing a degree in Computer Science or related field',
        'Basic knowledge of HTML, CSS, and JavaScript',
        'Familiarity with React is a plus',
        'Good problem-solving skills'
      ],
      applicationLink: 'https://techsolutions.com/careers/frontend-intern',
      companyLogo: 'https://via.placeholder.com/100',
      saved: false
    },
    {
      id: 'post-002',
      title: 'Data Science Intern',
      company: 'AnalyticsPro Ltd',
      location: 'Mumbai',
      type: 'onsite',
      duration: '6 months',
      stipend: '₹20,000/month',
      postedDate: '2025-09-27',
      deadline: '2025-10-20',
      skills: ['Python', 'Machine Learning', 'SQL', 'Data Visualization'],
      description: 'AnalyticsPro is seeking a detail-oriented Data Science Intern to assist in analyzing large datasets and developing predictive models. This is an excellent opportunity to work with experienced data scientists on real business problems.',
      responsibilities: [
        'Analyze and interpret complex data sets',
        'Develop machine learning models',
        'Create data visualizations to communicate findings',
        'Assist in preparing reports and presentations'
      ],
      requirements: [
        'Currently pursuing a degree in Computer Science, Statistics, or related field',
        'Strong programming skills in Python',
        'Knowledge of SQL and database concepts',
        'Understanding of basic machine learning algorithms'
      ],
      applicationLink: 'https://analyticspro.com/careers/data-science-intern',
      companyLogo: 'https://via.placeholder.com/100',
      saved: true
    },
    {
      id: 'post-003',
      title: 'Mobile App Development Intern',
      company: 'AppGenius Technologies',
      location: 'Delhi',
      type: 'remote',
      duration: '4 months',
      stipend: '₹18,000/month',
      postedDate: '2025-09-28',
      deadline: '2025-10-25',
      skills: ['Java', 'Kotlin', 'Android Studio', 'Firebase'],
      description: 'AppGenius is looking for an enthusiastic Mobile App Development Intern to join our mobile team. The intern will work on developing and improving Android applications under the guidance of senior developers.',
      responsibilities: [
        'Develop and maintain Android applications',
        'Implement new features and improve existing ones',
        'Fix bugs and optimize application performance',
        'Write clean, efficient, and well-documented code'
      ],
      requirements: [
        'Currently pursuing a degree in Computer Science or related field',
        'Knowledge of Java or Kotlin',
        'Familiarity with Android Studio',
        'Understanding of mobile app development lifecycle'
      ],
      applicationLink: 'https://appgenius.com/careers/android-intern',
      companyLogo: 'https://via.placeholder.com/100',
      saved: false
    }
  ]);

  // Filter posts based on search and filter criteria
  const filteredPosts = internshipPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                        post.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
                        post.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesLocation = locationFilter ? post.location.toLowerCase() === locationFilter.toLowerCase() : true;
    
    const matchesType = typeFilter ? post.type === typeFilter : true;
    
    const matchesDuration = durationFilter ? post.duration.toLowerCase().includes(durationFilter.toLowerCase()) : true;
    
    const matchesSkills = skillsFilter ? 
      post.skills.some(skill => skill.toLowerCase().includes(skillsFilter.toLowerCase())) : true;
    
    return matchesSearch && matchesLocation && matchesType && matchesDuration && matchesSkills;
  });

  // Toggle saved status for a post
  const toggleSaved = (postId: string) => {
    setInternshipPosts(prevPosts => 
      prevPosts.map(post => 
        post.id === postId ? { ...post, saved: !post.saved } : post
      )
    );
  };

  // Generate relative time string for post dates
  const getRelativeTime = (dateString: string) => {
    const postDate = new Date(dateString);
    const currentDate = new Date();
    const diffTime = Math.abs(currentDate.getTime() - postDate.getTime());
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays === 0) {
      return 'Today';
    } else if (diffDays === 1) {
      return 'Yesterday';
    } else if (diffDays < 7) {
      return `${diffDays} days ago`;
    } else if (diffDays < 30) {
      const weeks = Math.floor(diffDays / 7);
      return `${weeks} ${weeks === 1 ? 'week' : 'weeks'} ago`;
    } else {
      const months = Math.floor(diffDays / 30);
      return `${months} ${months === 1 ? 'month' : 'months'} ago`;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Internship Opportunities</h1>
            <p className="mt-2 text-gray-600">Discover and apply for internships matching your skills and interests</p>
          </div>
        </div>
        
        {/* Search and Filters */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                <input
                  type="text"
                  placeholder="Search by title, company, or keywords"
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row gap-2 md:gap-4">
              <select
                className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500"
                value={locationFilter}
                onChange={(e) => setLocationFilter(e.target.value)}
              >
                <option value="">All Locations</option>
                <option value="bangalore">Bangalore</option>
                <option value="mumbai">Mumbai</option>
                <option value="delhi">Delhi</option>
                <option value="hyderabad">Hyderabad</option>
                <option value="pune">Pune</option>
              </select>
              
              <select
                className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500"
                value={typeFilter}
                onChange={(e) => setTypeFilter(e.target.value)}
              >
                <option value="">All Types</option>
                <option value="remote">Remote</option>
                <option value="onsite">On-site</option>
                <option value="hybrid">Hybrid</option>
              </select>
              
              <select
                className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500"
                value={durationFilter}
                onChange={(e) => setDurationFilter(e.target.value)}
              >
                <option value="">All Durations</option>
                <option value="1 month">1 Month</option>
                <option value="2 months">2 Months</option>
                <option value="3 months">3 Months</option>
                <option value="6 months">6 Months</option>
              </select>
              
              <select
                className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500"
                value={skillsFilter}
                onChange={(e) => setSkillsFilter(e.target.value)}
              >
                <option value="">All Skills</option>
                <option value="react">React</option>
                <option value="python">Python</option>
                <option value="java">Java</option>
                <option value="machine learning">Machine Learning</option>
                <option value="android">Android</option>
              </select>
            </div>
          </div>
        </div>
        
        {/* Internship Posts */}
        <div className="space-y-6">
          {filteredPosts.length > 0 ? (
            filteredPosts.map((post) => (
              <div key={post.id} className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
                <div className="p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <img 
                          src={post.companyLogo} 
                          alt={`${post.company} logo`}
                          className="w-16 h-16 object-contain rounded-md border border-gray-200"
                        />
                      </div>
                      <div>
                        <h2 className="text-xl font-semibold text-gray-900">{post.title}</h2>
                        <p className="text-gray-600 flex items-center mt-1">
                          <Building size={16} className="mr-1" />
                          {post.company}
                        </p>
                        <div className="flex flex-wrap gap-2 mt-2">
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                            <MapPin size={12} className="mr-1" />
                            {post.location}
                          </span>
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                            {post.type === 'remote' ? 'Remote' : post.type === 'onsite' ? 'On-site' : 'Hybrid'}
                          </span>
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                            <Calendar size={12} className="mr-1" />
                            {post.duration}
                          </span>
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                            {post.stipend}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() => toggleSaved(post.id)}
                        className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                        aria-label={post.saved ? "Unsave" : "Save"}
                      >
                        <Bookmark
                          size={20}
                          className={post.saved ? "fill-yellow-500 text-yellow-500" : "text-gray-400"}
                        />
                      </button>
                      <button
                        className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                        aria-label="Share"
                      >
                        <Share2 size={20} className="text-gray-400" />
                      </button>
                    </div>
                  </div>
                  
                  <div className="mt-4">
                    <div className="flex flex-wrap gap-1 mb-3">
                      {post.skills.map((skill, index) => (
                        <span
                          key={index}
                          className="text-xs bg-gray-100 text-gray-800 px-2 py-1 rounded-md"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                    <p className="text-gray-600 text-sm line-clamp-2">{post.description}</p>
                  </div>
                  
                  <div className="mt-6 flex flex-col sm:flex-row sm:items-center justify-between">
                    <div className="text-sm text-gray-500 flex items-center space-x-4">
                      <span>Posted: {getRelativeTime(post.postedDate)}</span>
                      <span className="hidden sm:inline">•</span>
                      <span className="text-red-600 font-medium">
                        Apply by: {new Date(post.deadline).toLocaleDateString('en-IN', {
                          day: 'numeric',
                          month: 'short',
                          year: 'numeric'
                        })}
                      </span>
                    </div>
                    <a
                      href={post.applicationLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 sm:mt-0 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
                    >
                      Apply Now
                      <ExternalLink size={16} className="ml-1.5" />
                    </a>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 text-center">
              <BookOpen className="mx-auto h-12 w-12 text-gray-400" />
              <h3 className="mt-2 text-lg font-medium text-gray-900">No internships found</h3>
              <p className="mt-1 text-sm text-gray-500">
                Try adjusting your search filters or check back later for new opportunities.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Posts;