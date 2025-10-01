const CompanyProfile = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Company Profile</h1>
        <p className="text-gray-600 mb-6">Manage your company information and preferences.</p>
        
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold mb-4">Company Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Company Name</label>
              <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded-md" defaultValue="Tech Innovations Pvt Ltd" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Industry</label>
              <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded-md" defaultValue="Information Technology" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Website</label>
              <input type="url" className="w-full px-3 py-2 border border-gray-300 rounded-md" defaultValue="https://techinnovations.com" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Company Size</label>
              <select className="w-full px-3 py-2 border border-gray-300 rounded-md">
                <option>1-10 employees</option>
                <option>11-50 employees</option>
                <option>51-200 employees</option>
                <option>200+ employees</option>
              </select>
            </div>
          </div>
          <div className="mt-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">Company Description</label>
            <textarea rows={4} className="w-full px-3 py-2 border border-gray-300 rounded-md" 
              defaultValue="We are a leading technology company focused on innovative software solutions..."></textarea>
          </div>
          <div className="mt-6">
            <button className="bg-primary-600 text-white px-6 py-2 rounded-lg hover:bg-primary-700">
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyProfile;