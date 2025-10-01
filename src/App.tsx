import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ThemeProvider } from './components/theme-provider';
import { AuthProvider } from './contexts/AuthProvider';
import { ToastProvider } from './contexts/ToastContext';
import ProtectedRoute from './components/ProtectedRoute';
import Layout from './components/Layout/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Courses from './pages/Courses';
import ContactFAQ from './pages/ContactFAQ';
import Resources from './pages/Resources';
import IndustryConnect from './pages/IndustryConnect';
import Internships from './pages/Internships';
import StudentDashboard from './pages/Student/Dashboard';
import StudentProfile from './pages/Student/StudentProfile';
import Posts from './pages/Student/Posts';
import IndustryDashboard from './pages/Industry/IndustryDashboard';
import FacultyDashboard from './pages/Faculty/FacultyDashboard';
import Login from './pages/Auth/Login';
import Register from './pages/Auth/Register';
import InternshipPortal from './pages/Student/InternshipPortal';
import SkillAssessment from './pages/Student/SkillAssessment';
import ApplicationStatus from './pages/Student/ApplicationStatus';
import InternshipPostings from './pages/Industry/InternshipPostings';
import StudentApplications from './pages/Industry/StudentApplications';
import CompanyProfile from './pages/Industry/CompanyProfile';
import PostInternshipEvaluation from './pages/Industry/PostInternshipEvaluation';
import StudentMonitoring from './pages/Faculty/StudentMonitoring';
import InternshipApproval from './pages/Faculty/InternshipApproval';
import ReportsGeneration from './pages/Faculty/ReportsGeneration';
import AdminPanel from './pages/Admin/AdminPanel';
import TestComponents from './pages/TestComponents';

const queryClient = new QueryClient();

function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="prashikshan-ui-theme">
      <QueryClientProvider client={queryClient}>
        <Router>
          <AuthProvider>
            <ToastProvider>
              <Layout>
                <Routes>
                  {/* Public Routes */}
                  <Route path="/" element={<Home />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/courses" element={<Courses />} />
                  <Route path="/contact-faq" element={<ContactFAQ />} />
                  <Route path="/contact" element={<Navigate to="/contact-faq" replace />} />
                  <Route path="/faq" element={<Navigate to="/contact-faq" replace />} />
                  <Route path="/resources" element={<Resources />} />
                  <Route path="/industry-connect" element={<IndustryConnect />} />
                  <Route path="/internships" element={<Internships />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/register" element={<Register />} />
                  
                  {/* Student Routes */}
                  <Route element={<ProtectedRoute allowedUserTypes={['student']} />}>
                    <Route path="/student/dashboard" element={<StudentDashboard />} />
                    <Route path="/student/profile" element={<StudentProfile />} />
                    <Route path="/student/posts" element={<Posts />} />
                    <Route path="/student/internships" element={<InternshipPortal />} />
                    <Route path="/student/skills" element={<SkillAssessment />} />
                    <Route path="/student/applications" element={<ApplicationStatus />} />
                  </Route>
                  
                  {/* Industry Routes */}
                  <Route element={<ProtectedRoute allowedUserTypes={['industry']} />}>
                    <Route path="/industry/dashboard" element={<IndustryDashboard />} />
                    <Route path="/industry/postings" element={<InternshipPostings />} />
                    <Route path="/industry/applications" element={<StudentApplications />} />
                    <Route path="/industry/profile" element={<CompanyProfile />} />
                    <Route path="/industry/post-internship-evaluation" element={<PostInternshipEvaluation />} />
                  </Route>
                  
                  {/* Faculty Routes */}
                  <Route element={<ProtectedRoute allowedUserTypes={['faculty']} />}>
                    <Route path="/faculty/dashboard" element={<FacultyDashboard />} />
                    <Route path="/faculty/monitoring" element={<StudentMonitoring />} />
                    <Route path="/faculty/approvals" element={<InternshipApproval />} />
                    <Route path="/faculty/reports" element={<ReportsGeneration />} />
                  </Route>
                  
                  {/* Admin Routes */}
                  <Route element={<ProtectedRoute allowedUserTypes={['admin']} />}>
                    <Route path="/admin" element={<AdminPanel />} />
                  </Route>

                  {/* Test Components */}
                  <Route path="/test" element={<TestComponents />} />
                </Routes>
              </Layout>
            </ToastProvider>
          </AuthProvider>
        </Router>
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default App;
