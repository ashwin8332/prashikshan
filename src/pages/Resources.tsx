import { useState } from 'react';
import { 
  Search, 
  Book, 
  Video, 
  FileText, 
  Download, 
  ChevronRight, 
  ExternalLink,
  Filter
} from 'lucide-react';

interface Resource {
  id: number;
  title: string;
  description: string;
  type: 'document' | 'video' | 'course' | 'template';
  category: 'internship' | 'skill' | 'nep' | 'career';
  link: string;
  featured?: boolean;
}

const Resources = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [activeType, setActiveType] = useState<string | null>(null);

  const resources: Resource[] = [
    {
      id: 1,
      title: 'Internship Application Guide',
      description: 'Comprehensive guide on how to prepare for and apply to internships effectively.',
      type: 'document',
      category: 'internship',
      link: '#',
      featured: true
    },
    {
      id: 2,
      title: 'Resume Building Workshop',
      description: 'Video tutorial on creating a standout resume for internship applications.',
      type: 'video',
      category: 'career',
      link: '#'
    },
    {
      id: 3,
      title: 'NEP 2020 Internship Requirements',
      description: 'Official document outlining internship requirements under NEP 2020.',
      type: 'document',
      category: 'nep',
      link: '#'
    },
    {
      id: 4,
      title: 'Technical Interview Preparation',
      description: 'Course materials to help prepare for technical interviews in various fields.',
      type: 'course',
      category: 'skill',
      link: '#',
      featured: true
    },
    {
      id: 5,
      title: 'Internship Report Template',
      description: 'Standard template for creating comprehensive internship reports.',
      type: 'template',
      category: 'internship',
      link: '#'
    },
    {
      id: 6,
      title: 'Skill Assessment Guide',
      description: 'Guide on how to prepare for and excel in skill assessments.',
      type: 'document',
      category: 'skill',
      link: '#'
    },
    {
      id: 7,
      title: 'Industry Expectations Tutorial',
      description: 'Video featuring industry professionals discussing what they expect from interns.',
      type: 'video',
      category: 'career',
      link: '#'
    },
    {
      id: 8,
      title: 'Credit System Under NEP 2020',
      description: 'Explanation of how internship credits work under the new education policy.',
      type: 'document',
      category: 'nep',
      link: '#',
      featured: true
    },
    {
      id: 9,
      title: 'Programming Basics Course',
      description: 'Foundational programming course for students from all backgrounds.',
      type: 'course',
      category: 'skill',
      link: '#'
    },
    {
      id: 10,
      title: 'Weekly Progress Report Template',
      description: 'Template for tracking and reporting weekly internship progress.',
      type: 'template',
      category: 'internship',
      link: '#'
    },
    {
      id: 11,
      title: 'Final Presentation Template',
      description: 'Professional template for creating your final internship presentation.',
      type: 'template',
      category: 'internship',
      link: '#'
    },
    {
      id: 12,
      title: 'Soft Skills Development',
      description: 'Course focusing on essential soft skills for workplace success.',
      type: 'course',
      category: 'skill',
      link: '#'
    }
  ];

  const categories = [
    { id: 'internship', name: 'Internship Guidance' },
    { id: 'skill', name: 'Skill Development' },
    { id: 'nep', name: 'NEP 2020 Resources' },
    { id: 'career', name: 'Career Preparation' }
  ];

  const types = [
    { id: 'document', name: 'Documents', icon: FileText },
    { id: 'video', name: 'Videos', icon: Video },
    { id: 'course', name: 'Courses', icon: Book },
    { id: 'template', name: 'Templates', icon: Download }
  ];

  const getTypeIcon = (type: string) => {
    const typeObj = types.find(t => t.id === type);
    if (!typeObj) return FileText;
    return typeObj.icon;
  };

  const filteredResources = resources.filter(resource => {
    const matchesSearch = resource.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                       resource.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = activeCategory ? resource.category === activeCategory : true;
    const matchesType = activeType ? resource.type === activeType : true;
    
    return matchesSearch && matchesCategory && matchesType;
  });

  const featuredResources = resources.filter(resource => resource.featured);

  return (
    <div className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900">Learning Resources</h1>
          <p className="mt-4 text-xl text-gray-600">
            Access guides, tutorials, templates, and courses to enhance your internship experience
          </p>
        </div>

        {/* Featured Resources */}
        {!searchQuery && !activeCategory && !activeType && (
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Featured Resources</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {featuredResources.map(resource => {
                const Icon = getTypeIcon(resource.type);
                return (
                  <div 
                    key={resource.id} 
                    className="bg-white rounded-lg overflow-hidden shadow-md border border-primary-100 hover:shadow-lg transition-shadow"
                  >
                    <div className="bg-primary-50 px-6 py-4 border-b border-primary-100">
                      <div className="flex items-center">
                        <div className="p-2 bg-primary-100 rounded-full">
                          <Icon className="h-5 w-5 text-primary-700" />
                        </div>
                        <span className="ml-2 text-sm font-medium text-primary-700 uppercase">
                          {resource.type}
                        </span>
                      </div>
                    </div>
                    <div className="px-6 py-4">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">{resource.title}</h3>
                      <p className="text-gray-600 mb-4">{resource.description}</p>
                      <a
                        href={resource.link}
                        className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium"
                      >
                        Access Resource
                        <ExternalLink className="ml-1 h-4 w-4" />
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Search and Filters */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
            <div className="flex-1 relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                placeholder="Search resources..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            
            <div className="relative inline-block text-left">
              <div className="flex items-center space-x-2">
                <Filter className="h-5 w-5 text-gray-500" />
                <div className="flex flex-wrap gap-2">
                  {categories.map(category => (
                    <button
                      key={category.id}
                      className={`px-3 py-2 text-sm font-medium rounded-md ${
                        activeCategory === category.id
                          ? 'bg-primary-100 text-primary-800 border border-primary-300'
                          : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
                      }`}
                      onClick={() => setActiveCategory(activeCategory === category.id ? null : category.id)}
                    >
                      {category.name}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-4 flex flex-wrap gap-2">
            {types.map(type => {
              const Icon = type.icon;
              return (
                <button
                  key={type.id}
                  className={`px-3 py-2 text-sm font-medium rounded-md flex items-center ${
                    activeType === type.id
                      ? 'bg-gray-200 text-gray-800'
                      : 'bg-white text-gray-600 border border-gray-300 hover:bg-gray-50'
                  }`}
                  onClick={() => setActiveType(activeType === type.id ? null : type.id)}
                >
                  <Icon className="h-4 w-4 mr-1" />
                  {type.name}
                </button>
              );
            })}
          </div>
        </div>

        {/* Resource Listing */}
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <div className="divide-y divide-gray-200">
            {filteredResources.length > 0 ? (
              filteredResources.map(resource => {
                const Icon = getTypeIcon(resource.type);
                return (
                  <div key={resource.id} className="p-6 hover:bg-gray-50">
                    <div className="flex flex-col md:flex-row md:items-center justify-between">
                      <div className="flex-1">
                        <div className="flex items-center mb-2">
                          <div className={`p-1.5 rounded-full ${
                            resource.type === 'document' ? 'bg-blue-100' :
                            resource.type === 'video' ? 'bg-red-100' :
                            resource.type === 'course' ? 'bg-green-100' : 'bg-purple-100'
                          }`}>
                            <Icon className={`h-4 w-4 ${
                              resource.type === 'document' ? 'text-blue-600' :
                              resource.type === 'video' ? 'text-red-600' :
                              resource.type === 'course' ? 'text-green-600' : 'text-purple-600'
                            }`} />
                          </div>
                          <span className="ml-2 text-xs font-medium uppercase text-gray-500">
                            {resource.type}
                          </span>
                          <span className="ml-2 text-xs font-medium uppercase px-2 py-0.5 rounded-full bg-gray-100 text-gray-800">
                            {resource.category === 'internship' ? 'Internship' : 
                             resource.category === 'skill' ? 'Skill Development' : 
                             resource.category === 'nep' ? 'NEP 2020' : 'Career Prep'}
                          </span>
                        </div>
                        <h3 className="text-lg font-medium text-gray-900">{resource.title}</h3>
                        <p className="mt-1 text-gray-600">{resource.description}</p>
                      </div>
                      <div className="mt-4 md:mt-0 md:ml-6">
                        <a
                          href={resource.link}
                          className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
                        >
                          Access
                          <ChevronRight className="ml-1 h-4 w-4" />
                        </a>
                      </div>
                    </div>
                  </div>
                );
              })
            ) : (
              <div className="p-6 text-center">
                <div className="inline-flex items-center justify-center p-2 bg-gray-100 rounded-full mb-4">
                  <Search className="h-6 w-6 text-gray-400" />
                </div>
                <h3 className="text-lg font-medium text-gray-900">No resources found</h3>
                <p className="mt-1 text-gray-500">Try adjusting your search or filter criteria.</p>
              </div>
            )}
          </div>
        </div>
        
        {/* Help Section */}
        <div className="mt-12 bg-gray-100 rounded-lg p-6">
          <div className="flex flex-col md:flex-row items-center">
            <div className="flex-1">
              <h3 className="text-xl font-semibold text-gray-900">Need specific resources?</h3>
              <p className="mt-1 text-gray-600">
                Contact your faculty coordinator or our support team for specialized materials.
              </p>
            </div>
            <div className="mt-4 md:mt-0">
              <div className="flex space-x-4">
                <a
                  href="/contact"
                  className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
                >
                  Contact Support
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resources;