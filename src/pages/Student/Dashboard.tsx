import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  BookOpen,
  Calendar,
  Clock,
  TrendingUp,
  FileText,
  Bell,
  Bookmark,
  CheckSquare,
  ChevronRight,
  Building,
  MapPin
} from 'lucide-react';

// Types
interface Announcement {
  id: string;
  title: string;
  content: string;
  date: string;
  isNew: boolean;
}

interface InternshipApplication {
  id: string;
  position: string;
  company: string;
  logo: string;
  appliedDate: string;
  status: 'pending' | 'shortlisted' | 'rejected' | 'accepted';
}

interface UpcomingEvent {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  type: 'workshop' | 'seminar' | 'career-fair' | 'deadline';
}

interface SavedInternship {
  id: string;
  position: string;
  company: string;
  logo: string;
  deadline: string;
  status: 'active' | 'closing-soon' | 'closed';
}

const StudentDashboard = () => {
  // Mock data
  const [announcements] = useState<Announcement[]>([
    {
      id: 'ann-001',
      title: 'New Internship Opportunities',
      content: 'Several new internship opportunities from top tech companies are now available. Check them out!',
      date: '2025-09-28',
      isNew: true
    },
    {
      id: 'ann-002',
      title: 'Resume Workshop Next Week',
      content: 'Join us for a resume building workshop conducted by industry experts on October 5th.',
      date: '2025-09-26',
      isNew: true
    },
    {
      id: 'ann-003',
      title: 'Scholarship Applications Open',
      content: 'Applications for the annual merit scholarship are now open. Last date to apply is October 20th.',
      date: '2025-09-24',
      isNew: false
    }
  ]);

  const [applications] = useState<InternshipApplication[]>([
    {
      id: 'app-001',
      position: 'Frontend Development Intern',
      company: 'TechSolutions Pvt Ltd',
      logo: 'https://via.placeholder.com/40',
      appliedDate: '2025-09-27',
      status: 'pending'
    },
    {
      id: 'app-002',
      position: 'Data Science Intern',
      company: 'AnalyticsPro Ltd',
      logo: 'https://via.placeholder.com/40',
      appliedDate: '2025-09-25',
      status: 'shortlisted'
    },
    {
      id: 'app-003',
      position: 'Mobile App Development Intern',
      company: 'AppGenius Technologies',
      logo: 'https://via.placeholder.com/40',
      appliedDate: '2025-09-20',
      status: 'rejected'
    }
  ]);

  const [upcomingEvents] = useState<UpcomingEvent[]>([
    {
      id: 'event-001',
      title: 'Resume Building Workshop',
      date: '2025-10-05',
      time: '14:00 - 16:00',
      location: 'Online (Zoom)',
      type: 'workshop'
    },
    {
      id: 'event-002',
      title: 'Career Fair 2025',
      date: '2025-10-15',
      time: '10:00 - 17:00',
      location: 'University Main Campus',
      type: 'career-fair'
    },
    {
      id: 'event-003',
      title: 'Internship Application Deadline',
      date: '2025-10-10',
      time: '23:59',
      location: 'N/A',
      type: 'deadline'
    }
  ]);

  const [savedInternships] = useState<SavedInternship[]>([
    {
      id: 'saved-001',
      position: 'Frontend Development Intern',
      company: 'TechSolutions Pvt Ltd',
      logo: 'https://via.placeholder.com/40',
      deadline: '2025-10-15',
      status: 'active'
    },
    {
      id: 'saved-002',
      position: 'Data Science Intern',
      company: 'AnalyticsPro Ltd',
      logo: 'https://via.placeholder.com/40',
      deadline: '2025-10-05',
      status: 'closing-soon'
    }
  ]);

  // Helper function to format date
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-IN', {
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    });
  };

  // Helper function to get status badge class
  const getStatusBadgeClass = (status: string) => {
    switch (status) {
      case 'pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'shortlisted':
        return 'bg-blue-100 text-blue-800';
      case 'rejected':
        return 'bg-red-100 text-red-800';
      case 'accepted':
        return 'bg-green-100 text-green-800';
      case 'active':
        return 'bg-green-100 text-green-800';
      case 'closing-soon':
        return 'bg-orange-100 text-orange-800';
      case 'closed':
        return 'bg-gray-100 text-gray-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-gray-900">Student Dashboard</h1>
          <div className="flex space-x-2">
            <Link
              to="/student/profile"
              className="px-4 py-2 bg-white text-primary-600 rounded-md border border-gray-200 hover:bg-gray-50 transition-colors"
            >
              View Profile
            </Link>
            <Link
              to="/student/posts"
              className="px-4 py-2 bg-primary-600 text-white rounded-md hover:bg-primary-700 transition-colors"
            >
              Browse Internships
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left column - Announcements and Application Status */}
          <div className="lg:col-span-2 space-y-6">
            {/* Announcements */}
            <div className="bg-white rounded-lg shadow overflow-hidden">
              <div className="flex justify-between items-center px-6 py-4 bg-gray-50 border-b border-gray-200">
                <div className="flex items-center">
                  <Bell className="h-5 w-5 text-gray-500 mr-2" />
                  <h2 className="text-lg font-medium text-gray-900">Announcements</h2>
                </div>
                <span className="bg-primary-100 text-primary-800 text-xs px-2 py-1 rounded-full">
                  {announcements.filter(ann => ann.isNew).length} new
                </span>
              </div>
              <div className="divide-y divide-gray-200">
                {announcements.map((announcement) => (
                  <div
                    key={announcement.id}
                    className={`px-6 py-4 ${announcement.isNew ? 'bg-blue-50' : ''}`}
                  >
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-sm font-medium text-gray-900 flex items-center">
                          {announcement.title}
                          {announcement.isNew && (
                            <span className="ml-2 bg-blue-100 text-blue-800 text-xs px-1.5 py-0.5 rounded">
                              New
                            </span>
                          )}
                        </h3>
                        <p className="mt-1 text-sm text-gray-600">{announcement.content}</p>
                      </div>
                      <span className="text-xs text-gray-500">{formatDate(announcement.date)}</span>
                    </div>
                  </div>
                ))}
              </div>
              {announcements.length > 3 && (
                <div className="bg-gray-50 px-6 py-3 border-t border-gray-200">
                  <a href="#" className="text-sm font-medium text-primary-600 hover:text-primary-800 flex items-center justify-center">
                    View all announcements
                    <ChevronRight size={16} className="ml-1" />
                  </a>
                </div>
              )}
            </div>

            {/* Application Status */}
            <div className="bg-white rounded-lg shadow overflow-hidden">
              <div className="flex justify-between items-center px-6 py-4 bg-gray-50 border-b border-gray-200">
                <div className="flex items-center">
                  <FileText className="h-5 w-5 text-gray-500 mr-2" />
                  <h2 className="text-lg font-medium text-gray-900">Application Status</h2>
                </div>
                <Link
                  to="/student/applications"
                  className="text-sm font-medium text-primary-600 hover:text-primary-800"
                >
                  View all
                </Link>
              </div>
              <div className="divide-y divide-gray-200">
                {applications.map((application) => (
                  <div key={application.id} className="px-6 py-4">
                    <div className="flex items-start">
                      <img
                        src={application.logo}
                        alt={`${application.company} logo`}
                        className="h-10 w-10 rounded-md mr-4 object-cover"
                      />
                      <div className="flex-1">
                        <h3 className="text-sm font-medium text-gray-900">{application.position}</h3>
                        <p className="text-xs text-gray-600">{application.company}</p>
                        <div className="flex items-center mt-1">
                          <span className="text-xs text-gray-500">Applied: {formatDate(application.appliedDate)}</span>
                          <span className="mx-2 text-gray-300">•</span>
                          <span className={`text-xs px-2 py-0.5 rounded-full ${getStatusBadgeClass(application.status)}`}>
                            {application.status.charAt(0).toUpperCase() + application.status.slice(1)}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}

                {applications.length === 0 && (
                  <div className="px-6 py-8 text-center">
                    <FileText className="mx-auto h-10 w-10 text-gray-400 mb-2" />
                    <p className="text-gray-500 text-sm">No applications yet</p>
                    <Link
                      to="/student/posts"
                      className="mt-2 inline-block text-sm font-medium text-primary-600 hover:text-primary-800"
                    >
                      Browse internships
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Right column - Upcoming Events and Saved Internships */}
          <div className="space-y-6">
            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white rounded-lg shadow p-4 flex flex-col items-center justify-center text-center">
                <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center mb-2">
                  <CheckSquare className="h-5 w-5 text-blue-600" />
                </div>
                <div className="text-2xl font-bold text-gray-900">{applications.length}</div>
                <div className="text-xs text-gray-600">Applications</div>
              </div>

              <div className="bg-white rounded-lg shadow p-4 flex flex-col items-center justify-center text-center">
                <div className="h-10 w-10 rounded-full bg-yellow-100 flex items-center justify-center mb-2">
                  <Bookmark className="h-5 w-5 text-yellow-600" />
                </div>
                <div className="text-2xl font-bold text-gray-900">{savedInternships.length}</div>
                <div className="text-xs text-gray-600">Saved</div>
              </div>
            </div>

            {/* Upcoming Events */}
            <div className="bg-white rounded-lg shadow overflow-hidden">
              <div className="px-6 py-4 bg-gray-50 border-b border-gray-200">
                <div className="flex items-center">
                  <Calendar className="h-5 w-5 text-gray-500 mr-2" />
                  <h2 className="text-lg font-medium text-gray-900">Upcoming Events</h2>
                </div>
              </div>
              <div className="divide-y divide-gray-200">
                {upcomingEvents.map((event) => (
                  <div key={event.id} className="px-6 py-4">
                    <div className="flex items-start">
                      <div className={`flex-shrink-0 w-10 h-10 rounded-md flex items-center justify-center mr-4 ${
                        event.type === 'workshop' ? 'bg-purple-100' :
                        event.type === 'seminar' ? 'bg-blue-100' :
                        event.type === 'career-fair' ? 'bg-green-100' : 'bg-red-100'
                      }`}>
                        {event.type === 'workshop' && <BookOpen className="h-5 w-5 text-purple-600" />}
                        {event.type === 'seminar' && <TrendingUp className="h-5 w-5 text-blue-600" />}
                        {event.type === 'career-fair' && <Building className="h-5 w-5 text-green-600" />}
                        {event.type === 'deadline' && <Clock className="h-5 w-5 text-red-600" />}
                      </div>
                      <div>
                        <h3 className="text-sm font-medium text-gray-900">{event.title}</h3>
                        <div className="mt-1 text-xs text-gray-600">
                          <div className="flex items-center">
                            <Calendar size={12} className="mr-1" />
                            <span>{formatDate(event.date)}</span>
                          </div>
                          <div className="flex items-center mt-1">
                            <Clock size={12} className="mr-1" />
                            <span>{event.time}</span>
                          </div>
                          {event.location !== 'N/A' && (
                            <div className="flex items-center mt-1">
                              <MapPin size={12} className="mr-1" />
                              <span>{event.location}</span>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}

                {upcomingEvents.length === 0 && (
                  <div className="px-6 py-8 text-center">
                    <Calendar className="mx-auto h-10 w-10 text-gray-400 mb-2" />
                    <p className="text-gray-500 text-sm">No upcoming events</p>
                  </div>
                )}
              </div>
            </div>

            {/* Saved Internships */}
            <div className="bg-white rounded-lg shadow overflow-hidden">
              <div className="flex justify-between items-center px-6 py-4 bg-gray-50 border-b border-gray-200">
                <div className="flex items-center">
                  <Bookmark className="h-5 w-5 text-gray-500 mr-2" />
                  <h2 className="text-lg font-medium text-gray-900">Saved Internships</h2>
                </div>
                <Link
                  to="/student/saved"
                  className="text-sm font-medium text-primary-600 hover:text-primary-800"
                >
                  View all
                </Link>
              </div>
              <div className="divide-y divide-gray-200">
                {savedInternships.map((internship) => (
                  <div key={internship.id} className="px-6 py-4">
                    <div className="flex items-start">
                      <img
                        src={internship.logo}
                        alt={`${internship.company} logo`}
                        className="h-10 w-10 rounded-md mr-4 object-cover"
                      />
                      <div className="flex-1">
                        <h3 className="text-sm font-medium text-gray-900">{internship.position}</h3>
                        <p className="text-xs text-gray-600">{internship.company}</p>
                        <div className="flex items-center mt-1">
                          <span className="text-xs text-gray-500">Deadline: {formatDate(internship.deadline)}</span>
                          <span className="mx-2 text-gray-300">•</span>
                          <span className={`text-xs px-2 py-0.5 rounded-full ${getStatusBadgeClass(internship.status)}`}>
                            {internship.status === 'closing-soon' ? 'Closing Soon' : 
                             internship.status === 'closed' ? 'Closed' : 'Active'}
                          </span>
                        </div>
                      </div>
                      <Link
                        to={`/student/posts/${internship.id}`}
                        className="px-3 py-1 text-xs font-medium text-primary-600 border border-primary-300 rounded-md hover:bg-primary-50"
                      >
                        View
                      </Link>
                    </div>
                  </div>
                ))}

                {savedInternships.length === 0 && (
                  <div className="px-6 py-8 text-center">
                    <Bookmark className="mx-auto h-10 w-10 text-gray-400 mb-2" />
                    <p className="text-gray-500 text-sm">No saved internships</p>
                    <Link
                      to="/student/posts"
                      className="mt-2 inline-block text-sm font-medium text-primary-600 hover:text-primary-800"
                    >
                      Browse internships
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;