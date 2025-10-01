import { useState } from 'react';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, 
  PieChart, Pie, Cell, ResponsiveContainer, 
  LineChart, Line
} from 'recharts';
import type { PieLabelRenderProps } from 'recharts';
import { Calendar, ChevronDown, Download, Filter } from 'lucide-react';

// Mock data for analytics
const departmentData = [
  { name: 'Computer Science', count: 124 },
  { name: 'Information Technology', count: 85 },
  { name: 'Electronics', count: 42 },
  { name: 'Mechanical', count: 38 },
  { name: 'Civil', count: 21 },
  { name: 'Electrical', count: 35 },
];

const monthlyTrendsData = [
  { name: 'Jan', applications: 65, placements: 22, evaluations: 18 },
  { name: 'Feb', applications: 78, placements: 28, evaluations: 20 },
  { name: 'Mar', applications: 92, placements: 32, evaluations: 25 },
  { name: 'Apr', applications: 105, placements: 36, evaluations: 28 },
  { name: 'May', applications: 120, placements: 40, evaluations: 33 },
  { name: 'Jun', applications: 135, placements: 45, evaluations: 38 },
  { name: 'Jul', applications: 150, placements: 50, evaluations: 42 },
  { name: 'Aug', applications: 168, placements: 56, evaluations: 48 },
  { name: 'Sep', applications: 182, placements: 62, evaluations: 53 },
  { name: 'Oct', applications: 195, placements: 68, evaluations: 58 },
  { name: 'Nov', applications: 210, placements: 72, evaluations: 62 },
  { name: 'Dec', applications: 225, placements: 78, evaluations: 68 },
];

const evaluationScoresData = [
  { name: 'Technical Skills', average: 4.2 },
  { name: 'Communication', average: 3.8 },
  { name: 'Problem Solving', average: 4.0 },
  { name: 'Teamwork', average: 4.3 },
  { name: 'Initiative', average: 3.7 },
  { name: 'Adaptability', average: 3.9 },
  { name: 'Work Ethic', average: 4.4 },
];

const locationData = [
  { name: 'Delhi NCR', value: 35 },
  { name: 'Mumbai', value: 25 },
  { name: 'Bangalore', value: 20 },
  { name: 'Hyderabad', value: 10 },
  { name: 'Pune', value: 8 },
  { name: 'Other', value: 2 },
];

const skillsGapData = [
  { name: 'Web Development', industry: 90, students: 75, gap: 15 },
  { name: 'AI/ML', industry: 85, students: 45, gap: 40 },
  { name: 'Cloud Computing', industry: 80, students: 55, gap: 25 },
  { name: 'DevOps', industry: 75, students: 40, gap: 35 },
  { name: 'Cybersecurity', industry: 70, students: 35, gap: 35 },
  { name: 'Data Analytics', industry: 65, students: 50, gap: 15 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8', '#82ca9d'];

const InternshipAnalytics = () => {
  const [timeRange, setTimeRange] = useState('year');
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Internship Analytics</h1>
            <p className="text-gray-600">Comprehensive metrics and insights for internship programs</p>
          </div>
          
          <div className="flex gap-3">
            <div className="relative">
              <button
                className="flex items-center gap-2 bg-white px-4 py-2 rounded-md border border-gray-300 shadow-sm"
                onClick={() => setIsFilterOpen(!isFilterOpen)}
              >
                <Filter className="h-4 w-4" />
                <span>Filters</span>
                <ChevronDown className="h-4 w-4" />
              </button>
              
              {isFilterOpen && (
                <div className="absolute right-0 mt-2 w-60 bg-white border border-gray-200 rounded-md shadow-lg z-10">
                  <div className="p-3 border-b">
                    <h3 className="font-medium">Filter By</h3>
                  </div>
                  <div className="p-3">
                    <label className="block mb-2 text-sm font-medium">Department</label>
                    <select className="w-full border rounded p-2 text-sm">
                      <option value="all">All Departments</option>
                      <option value="cs">Computer Science</option>
                      <option value="it">Information Technology</option>
                      <option value="ec">Electronics</option>
                      <option value="me">Mechanical</option>
                    </select>
                  </div>
                  <div className="p-3">
                    <label className="block mb-2 text-sm font-medium">Academic Year</label>
                    <select className="w-full border rounded p-2 text-sm">
                      <option value="2025-2026">2025-2026</option>
                      <option value="2024-2025">2024-2025</option>
                      <option value="2023-2024">2023-2024</option>
                    </select>
                  </div>
                  <div className="p-3 border-t flex justify-between">
                    <button className="text-sm text-gray-600">Reset</button>
                    <button className="text-sm bg-blue-600 text-white px-3 py-1 rounded">Apply</button>
                  </div>
                </div>
              )}
            </div>
            
            <div className="flex border border-gray-300 rounded-md overflow-hidden">
              <button
                className={`px-4 py-2 text-sm ${timeRange === 'month' ? 'bg-blue-600 text-white' : 'bg-white text-gray-700'}`}
                onClick={() => setTimeRange('month')}
              >
                Month
              </button>
              <button
                className={`px-4 py-2 text-sm ${timeRange === 'quarter' ? 'bg-blue-600 text-white' : 'bg-white text-gray-700'}`}
                onClick={() => setTimeRange('quarter')}
              >
                Quarter
              </button>
              <button
                className={`px-4 py-2 text-sm ${timeRange === 'year' ? 'bg-blue-600 text-white' : 'bg-white text-gray-700'}`}
                onClick={() => setTimeRange('year')}
              >
                Year
              </button>
            </div>
            
            <button className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-md">
              <Download className="h-4 w-4" />
              <span>Export Report</span>
            </button>
          </div>
        </div>
        
        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm">Total Internships</p>
                <h2 className="text-3xl font-bold text-gray-900">852</h2>
              </div>
              <div className="text-green-500 text-sm font-medium">
                +12.5% <span className="text-gray-500">from last year</span>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm">Active Interns</p>
                <h2 className="text-3xl font-bold text-gray-900">324</h2>
              </div>
              <div className="text-green-500 text-sm font-medium">
                +8.2% <span className="text-gray-500">from last year</span>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm">Partner Companies</p>
                <h2 className="text-3xl font-bold text-gray-900">178</h2>
              </div>
              <div className="text-green-500 text-sm font-medium">
                +15.6% <span className="text-gray-500">from last year</span>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm">Avg. Completion Rate</p>
                <h2 className="text-3xl font-bold text-gray-900">94.3%</h2>
              </div>
              <div className="text-green-500 text-sm font-medium">
                +2.1% <span className="text-gray-500">from last year</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Monthly Trends */}
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold text-gray-900">Monthly Trends</h2>
              <div className="flex items-center space-x-2">
                <button className="text-sm text-gray-500 hover:text-gray-900">
                  <Calendar className="h-4 w-4" />
                </button>
              </div>
            </div>
            
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={monthlyTrendsData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="applications" stroke="#8884d8" activeDot={{ r: 8 }} strokeWidth={2} />
                <Line type="monotone" dataKey="placements" stroke="#82ca9d" strokeWidth={2} />
                <Line type="monotone" dataKey="evaluations" stroke="#ffc658" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </div>
          
          {/* Department Distribution */}
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-6">Department Distribution</h2>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={departmentData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="count" fill="#8884d8" barSize={30} />
              </BarChart>
            </ResponsiveContainer>
          </div>
          
          {/* Skills Gap Analysis */}
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-6">Skills Gap Analysis</h2>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={skillsGapData} layout="vertical">
                <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} />
                <XAxis type="number" />
                <YAxis type="category" dataKey="name" width={120} />
                <Tooltip />
                <Legend />
                <Bar dataKey="industry" stackId="a" fill="#8884d8" name="Industry Demand" />
                <Bar dataKey="students" stackId="a" fill="#82ca9d" name="Student Skills" />
              </BarChart>
            </ResponsiveContainer>
          </div>
          
          {/* Geographic Distribution */}
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-6">Geographic Distribution</h2>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={locationData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="value"
                  nameKey="name"
                  label={(props: PieLabelRenderProps) => {
                    const name = props.name;
                    const total = locationData.reduce((sum, entry) => sum + entry.value, 0);
                    const value = props.value as number;
                    const percent = value / total;
                    
                    return `${String(name)} ${(percent * 100).toFixed(0)}%`;
                  }}
                >
                  {locationData.map((_, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
        
        {/* Additional Charts */}
        <div className="grid grid-cols-1 gap-8 mb-8">
          {/* Performance Evaluation Scores */}
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-6">Average Performance Evaluation Scores</h2>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={evaluationScoresData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="name" />
                <YAxis domain={[0, 5]} />
                <Tooltip />
                <Bar dataKey="average" fill="#82ca9d" barSize={40} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
        
        {/* Detailed Metrics Table */}
        <div className="bg-white rounded-lg shadow overflow-hidden mb-8">
          <div className="px-6 py-4 border-b border-gray-200">
            <h2 className="text-xl font-bold text-gray-900">Detailed Metrics</h2>
            <p className="text-gray-600 text-sm">Comprehensive breakdown of key internship program metrics</p>
          </div>
          
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Department</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Applications</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Placements</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Completion Rate</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Avg. Duration (Weeks)</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Hire Rate</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Computer Science</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">458</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">124</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">96.8%</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">12</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">32.5%</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Information Technology</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">362</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">85</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">94.1%</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">10</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">28.2%</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Electronics</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">215</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">42</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">92.9%</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">14</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">19.5%</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Mechanical</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">185</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">38</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">92.1%</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">16</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">20.5%</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Civil</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">142</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">21</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">90.5%</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">20</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">14.8%</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        
        {/* Insights and Recommendations */}
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Insights & Recommendations</h2>
          
          <div className="space-y-4">
            <div className="p-4 border-l-4 border-blue-500 bg-blue-50 rounded">
              <h3 className="font-medium text-blue-800">Skills Gap Alert</h3>
              <p className="text-blue-700">There is a significant gap in AI/ML and DevOps skills. Consider implementing specialized training programs in these areas.</p>
            </div>
            
            <div className="p-4 border-l-4 border-green-500 bg-green-50 rounded">
              <h3 className="font-medium text-green-800">Success Trend</h3>
              <p className="text-green-700">Computer Science and Information Technology departments show consistent growth in placement rates. Continue current strategies for these departments.</p>
            </div>
            
            <div className="p-4 border-l-4 border-amber-500 bg-amber-50 rounded">
              <h3 className="font-medium text-amber-800">Improvement Opportunity</h3>
              <p className="text-amber-700">Civil Engineering has the lowest hire rate (14.8%). Consider industry partnerships specific to this field to improve opportunities.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InternshipAnalytics;