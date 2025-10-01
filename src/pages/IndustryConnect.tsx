import { useState } from 'react';
import { Building2, MapPin, Calendar, ArrowRight, CheckCircle2, ExternalLink } from 'lucide-react';

interface IndustryPartner {
  id: number;
  name: string;
  location: string;
  sector: string;
  logo: string;
  internships: number;
  description: string;
  featured?: boolean;
  website?: string;
}

const IndustryConnect = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeSector, setActiveSector] = useState<string | null>(null);
  const [activeLocation, setActiveLocation] = useState<string | null>(null);
  
  const industryPartners: IndustryPartner[] = [
    {
      id: 1,
      name: 'Tech Innovations Pvt Ltd',
      location: 'Mumbai',
      sector: 'Information Technology',
      logo: '/company/tech-innovations.png',
      internships: 12,
      description: 'Leading software development company specializing in AI and machine learning solutions.',
      featured: true,
      website: 'https://example.com/tech-innovations'
    },
    {
      id: 2,
      name: 'Future Finance Solutions',
      location: 'Bangalore',
      sector: 'Finance',
      logo: '/company/future-finance.png',
      internships: 8,
      description: 'Financial technology firm offering innovative solutions for banking and investment sectors.',
      featured: true,
      website: 'https://example.com/future-finance'
    },
    {
      id: 3,
      name: 'Green Earth Enterprises',
      location: 'Delhi',
      sector: 'Renewable Energy',
      logo: '/company/green-earth.png',
      internships: 5,
      description: 'Sustainable energy company focused on developing eco-friendly power solutions.',
      website: 'https://example.com/green-earth'
    },
    {
      id: 4,
      name: 'Digital Media Hub',
      location: 'Mumbai',
      sector: 'Media & Entertainment',
      logo: '/company/digital-media.png',
      internships: 7,
      description: 'Creative agency specializing in digital marketing and content production.',
      website: 'https://example.com/digital-media'
    },
    {
      id: 5,
      name: 'Healthcare Solutions Inc',
      location: 'Hyderabad',
      sector: 'Healthcare',
      logo: '/company/healthcare-solutions.png',
      internships: 6,
      description: 'Healthcare technology company developing innovative medical software and devices.',
      featured: true,
      website: 'https://example.com/healthcare-solutions'
    },
    {
      id: 6,
      name: 'EduTech Pioneers',
      location: 'Pune',
      sector: 'Education',
      logo: '/company/edutech.png',
      internships: 10,
      description: 'Educational technology company transforming learning through digital platforms.',
      website: 'https://example.com/edutech'
    },
    {
      id: 7,
      name: 'Manufacturing Excellence',
      location: 'Chennai',
      sector: 'Manufacturing',
      logo: '/company/manufacturing.png',
      internships: 4,
      description: 'Advanced manufacturing firm implementing Industry 4.0 technologies.',
      website: 'https://example.com/manufacturing'
    },
    {
      id: 8,
      name: 'Agri Innovations',
      location: 'Chandigarh',
      sector: 'Agriculture',
      logo: '/company/agri.png',
      internships: 3,
      description: 'Agricultural technology company developing sustainable farming solutions.',
      website: 'https://example.com/agri'
    }
  ];

  const sectors = [
    'Information Technology',
    'Finance',
    'Healthcare',
    'Education',
    'Manufacturing',
    'Renewable Energy',
    'Agriculture',
    'Media & Entertainment'
  ];

  const locations = [
    'Mumbai',
    'Delhi',
    'Bangalore',
    'Hyderabad',
    'Chennai',
    'Pune',
    'Chandigarh'
  ];

  const featuredPartners = industryPartners.filter(partner => partner.featured);

  const filteredPartners = industryPartners.filter(partner => {
    const matchesSearch = partner.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                        partner.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesSector = activeSector ? partner.sector === activeSector : true;
    const matchesLocation = activeLocation ? partner.location === activeLocation : true;
    
    return matchesSearch && matchesSector && matchesLocation;
  });

  const upcomingEvents = [
    {
      id: 1,
      title: 'Industry Connect Webinar Series',
      date: 'October 15, 2025',
      description: 'Join industry experts for insights on emerging technologies and career opportunities.',
      location: 'Online'
    },
    {
      id: 2,
      title: 'Career Fair 2025',
      date: 'November 5-6, 2025',
      description: 'Annual career fair featuring top companies from various sectors offering internship and job opportunities.',
      location: 'Main Campus'
    },
    {
      id: 3,
      title: 'Entrepreneurship Workshop',
      date: 'December 2, 2025',
      description: 'Learn from successful entrepreneurs about building startups and innovation ecosystems.',
      location: 'Innovation Center'
    }
  ];

  return (
    <div className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Industry Connect
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Bridging the gap between academia and industry with meaningful partnerships and opportunities
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href="/industry/register" 
              className="px-6 py-3 bg-primary-600 text-white font-medium rounded-md hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
            >
              Become a Partner
            </a>
            <a 
              href="/internships" 
              className="px-6 py-3 bg-white text-primary-600 font-medium rounded-md border border-primary-300 hover:bg-primary-50 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
            >
              Browse Internships
            </a>
          </div>
        </div>

        {/* Featured Partners */}
        {!searchQuery && !activeSector && !activeLocation && (
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Featured Industry Partners</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {featuredPartners.map(partner => (
                <div 
                  key={partner.id} 
                  className="bg-white rounded-lg overflow-hidden shadow-md border border-gray-200 hover:shadow-lg transition-shadow"
                >
                  <div className="p-6">
                    <div className="h-16 flex items-center justify-center mb-4">
                      <img 
                        src={partner.logo || '/prashikshan-logo.svg'} 
                        alt={`${partner.name} logo`}
                        className="max-h-full max-w-full object-contain"
                      />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{partner.name}</h3>
                    <div className="flex items-center text-gray-600 mb-2">
                      <MapPin className="h-4 w-4 mr-1" />
                      <span>{partner.location}</span>
                    </div>
                    <div className="text-sm text-gray-500 mb-4">{partner.sector}</div>
                    <p className="text-gray-700 mb-4">{partner.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-primary-600 font-medium">
                        {partner.internships} active internships
                      </span>
                      {partner.website && (
                        <a 
                          href={partner.website} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-primary-600 hover:text-primary-700"
                        >
                          Visit Website
                          <ExternalLink className="ml-1 h-4 w-4" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Search and Filters */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:items-end gap-4">
            <div className="flex-1">
              <label htmlFor="search" className="block text-sm font-medium text-gray-700 mb-1">
                Search Companies
              </label>
              <input
                type="text"
                id="search"
                className="block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                placeholder="Search by name or description..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            
            <div>
              <label htmlFor="sector" className="block text-sm font-medium text-gray-700 mb-1">
                Filter by Sector
              </label>
              <select
                id="sector"
                className="block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                value={activeSector || ''}
                onChange={(e) => setActiveSector(e.target.value || null)}
              >
                <option value="">All Sectors</option>
                {sectors.map(sector => (
                  <option key={sector} value={sector}>{sector}</option>
                ))}
              </select>
            </div>
            
            <div>
              <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">
                Filter by Location
              </label>
              <select
                id="location"
                className="block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                value={activeLocation || ''}
                onChange={(e) => setActiveLocation(e.target.value || null)}
              >
                <option value="">All Locations</option>
                {locations.map(location => (
                  <option key={location} value={location}>{location}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Industry Partners Listing */}
        <div className="bg-white rounded-lg shadow overflow-hidden mb-16">
          <div className="px-6 py-4 border-b border-gray-200 bg-gray-50">
            <h2 className="text-lg font-medium text-gray-900">Industry Partners</h2>
          </div>

          <div className="divide-y divide-gray-200">
            {filteredPartners.length > 0 ? (
              filteredPartners.map(partner => (
                <div key={partner.id} className="p-6 flex flex-col md:flex-row md:items-center hover:bg-gray-50">
                  <div className="flex-shrink-0 h-16 w-16 flex items-center justify-center mr-6 mb-4 md:mb-0">
                    <img 
                      src={partner.logo || '/prashikshan-logo.svg'} 
                      alt={`${partner.name} logo`}
                      className="max-h-full max-w-full object-contain"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-medium text-gray-900">{partner.name}</h3>
                    <div className="text-sm text-gray-500 mt-1 mb-2">
                      <span className="inline-flex items-center mr-4">
                        <Building2 className="h-4 w-4 mr-1" />
                        {partner.sector}
                      </span>
                      <span className="inline-flex items-center">
                        <MapPin className="h-4 w-4 mr-1" />
                        {partner.location}
                      </span>
                    </div>
                    <p className="text-gray-600">{partner.description}</p>
                  </div>
                  <div className="mt-4 md:mt-0 md:ml-6 flex flex-col items-end">
                    <div className="text-primary-600 font-medium mb-2">
                      {partner.internships} active internships
                    </div>
                    <div className="flex space-x-3">
                      <a 
                        href={`/internships?company=${partner.id}`}
                        className="inline-flex items-center px-3 py-1.5 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
                      >
                        View Internships
                      </a>
                      {partner.website && (
                        <a 
                          href={partner.website} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="inline-flex items-center px-3 py-1.5 border border-primary-300 shadow-sm text-sm font-medium rounded-md text-primary-700 bg-primary-50 hover:bg-primary-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
                        >
                          Visit Website
                          <ExternalLink className="ml-1 h-4 w-4" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="p-6 text-center">
                <div className="inline-flex items-center justify-center p-2 bg-gray-100 rounded-full mb-4">
                  <Building2 className="h-6 w-6 text-gray-400" />
                </div>
                <h3 className="text-lg font-medium text-gray-900">No industry partners found</h3>
                <p className="mt-1 text-gray-500">Try adjusting your search or filter criteria.</p>
              </div>
            )}
          </div>
        </div>

        {/* Upcoming Events */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Upcoming Industry Connect Events</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {upcomingEvents.map(event => (
              <div
                key={event.id}
                className="bg-white rounded-lg overflow-hidden shadow-md border border-gray-200 hover:shadow-lg transition-shadow"
              >
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{event.title}</h3>
                  <div className="flex items-center text-primary-600 mb-2">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center text-gray-600 mb-4">
                    <MapPin className="h-4 w-4 mr-2" />
                    <span>{event.location}</span>
                  </div>
                  <p className="text-gray-700 mb-4">{event.description}</p>
                  <a
                    href={`/events/${event.id}`}
                    className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium"
                  >
                    Learn More
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Become a Partner */}
        <div className="bg-primary-50 rounded-lg p-8 border border-primary-100">
          <div className="flex flex-col md:flex-row items-center">
            <div className="flex-1 mb-6 md:mb-0 md:mr-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Become an Industry Partner</h3>
              <p className="text-gray-700 mb-4">
                Join our network of leading companies to access talented students, contribute to educational initiatives, 
                and shape the future workforce through internship programs aligned with NEP 2020.
              </p>
              <div className="space-y-2">
                <div className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-primary-600 mr-2 mt-0.5" />
                  <span className="text-gray-700">Access to pre-vetted talent pool from top institutions</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-primary-600 mr-2 mt-0.5" />
                  <span className="text-gray-700">Streamlined internship management platform</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-primary-600 mr-2 mt-0.5" />
                  <span className="text-gray-700">Opportunity to participate in industry-academia collaboration initiatives</span>
                </div>
              </div>
            </div>
            <div className="md:flex-shrink-0 text-center md:text-right">
              <a
                href="/industry/register"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
              >
                Register as Partner
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndustryConnect;