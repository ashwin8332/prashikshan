import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="logo-container">
                <img src="/prashikshan-logo.svg" alt="Prashikshan Logo" className="h-10 w-10 logo-glow" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold text-white">Prashikshan</span>
                <span className="logo-subtitle text-gray-300 -mt-1">Academia Industry Interface</span>
              </div>
            </div>
            <p className="text-gray-300 mb-4">
              Academia Industry Interface platform facilitating seamless internship
              management and skill development for students, industries, and educational
              institutions under NEP 2020 guidelines.
            </p>
            <div className="text-sm text-gray-400">
              <p>Government of Jammu and Kashmir</p>
              <p>Higher Education Department</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/student/internships" className="text-gray-300 hover:text-white transition-colors">
                  Find Internships
                </Link>
              </li>
              <li>
                <Link to="/industry/postings" className="text-gray-300 hover:text-white transition-colors">
                  Post Internship
                </Link>
              </li>
              <li>
                <Link to="/faculty/monitoring" className="text-gray-300 hover:text-white transition-colors">
                  Faculty Portal
                </Link>
              </li>
              <li>
                <Link to="/student/skills" className="text-gray-300 hover:text-white transition-colors">
                  Skill Assessment
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Documentation
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Guidelines
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Prashikshan - Academia Industry Interface. All rights reserved.</p>
          <p className="mt-2 text-sm">
            Developed in accordance with NEP 2020 guidelines for enhanced industry-academia collaboration.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;