const InternshipPostings = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Internship Postings</h1>
            <p className="text-gray-600">Create and manage your internship opportunities</p>
          </div>
          <button className="bg-primary-600 text-white px-6 py-2 rounded-lg hover:bg-primary-700">
            Post New Internship
          </button>
        </div>
        
        <div className="bg-white rounded-lg shadow">
          <div className="px-6 py-4 border-b border-gray-200">
            <h2 className="text-lg font-semibold text-gray-900">Your Postings</h2>
          </div>
          <div className="divide-y divide-gray-200">
            {[1, 2, 3].map((item) => (
              <div key={item} className="px-6 py-4">
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="font-semibold">Software Development Intern</h3>
                    <p className="text-gray-600">Posted 3 days ago • 23 applications</p>
                  </div>
                  <div className="flex gap-2">
                    <button className="text-primary-600 hover:text-primary-700">Edit</button>
                    <button className="text-red-600 hover:text-red-700">Delete</button>
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

export default InternshipPostings;