const StudentMonitoring = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Student Monitoring</h1>
        <p className="text-gray-600 mb-6">Track progress and performance of students during their internships.</p>
        
        <div className="bg-white rounded-lg shadow">
          <div className="px-6 py-4 border-b border-gray-200">
            <h2 className="text-lg font-semibold text-gray-900">Students Under Guidance</h2>
          </div>
          <div className="divide-y divide-gray-200">
            {[1, 2, 3, 4, 5].map((item) => (
              <div key={item} className="px-6 py-4">
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="font-semibold">Raj Kumar</h3>
                    <p className="text-gray-600">Software Development Intern at Tech Innovations</p>
                    <p className="text-sm text-gray-500">Week 6 of 12 • Last report: 2 days ago</p>
                    <div className="mt-2">
                      <div className="bg-gray-200 rounded-full h-2 w-48">
                        <div className="bg-green-500 h-2 rounded-full" style={{ width: '50%' }}></div>
                      </div>
                      <p className="text-xs text-gray-500 mt-1">50% Complete</p>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                      View Details
                    </button>
                    <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
                      Send Message
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentMonitoring;