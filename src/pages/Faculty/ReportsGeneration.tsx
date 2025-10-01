const ReportsGeneration = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Reports Generation</h1>
        <p className="text-gray-600 mb-6">Generate comprehensive reports for internship programs and student performance.</p>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold mb-4">Quick Reports</h2>
            <div className="space-y-4">
              <button className="w-full text-left border border-gray-200 rounded-lg p-4 hover:bg-gray-50">
                <h3 className="font-semibold">Student Performance Report</h3>
                <p className="text-gray-600 text-sm">Individual student internship performance</p>
              </button>
              <button className="w-full text-left border border-gray-200 rounded-lg p-4 hover:bg-gray-50">
                <h3 className="font-semibold">Department Summary</h3>
                <p className="text-gray-600 text-sm">Overall department internship statistics</p>
              </button>
              <button className="w-full text-left border border-gray-200 rounded-lg p-4 hover:bg-gray-50">
                <h3 className="font-semibold">Industry Partnership Report</h3>
                <p className="text-gray-600 text-sm">Collaboration with industry partners</p>
              </button>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold mb-4">Custom Report Builder</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Report Type</label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-md">
                  <option>Student Progress</option>
                  <option>Company Feedback</option>
                  <option>Skills Assessment</option>
                  <option>Completion Rates</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Date Range</label>
                <div className="grid grid-cols-2 gap-2">
                  <input type="date" className="px-3 py-2 border border-gray-300 rounded-md" />
                  <input type="date" className="px-3 py-2 border border-gray-300 rounded-md" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Filters</label>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    <label className="text-sm">Include completed internships</label>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    <label className="text-sm">Include active internships</label>
                  </div>
                </div>
              </div>
              <button className="w-full bg-primary-600 text-white py-2 rounded-lg hover:bg-primary-700">
                Generate Report
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReportsGeneration;