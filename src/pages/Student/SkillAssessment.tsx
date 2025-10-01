const SkillAssessment = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Skill Assessment</h1>
        <p className="text-gray-600">Take skill assessments to improve your profile and match with better internships.</p>
        
        <div className="mt-8 bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold mb-4">Available Assessments</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="border border-gray-200 rounded-lg p-4">
              <h3 className="font-semibold">JavaScript Programming</h3>
              <p className="text-gray-600 text-sm">Test your JavaScript knowledge</p>
              <button className="mt-2 bg-primary-600 text-white px-4 py-2 rounded hover:bg-primary-700">
                Start Assessment
              </button>
            </div>
            <div className="border border-gray-200 rounded-lg p-4">
              <h3 className="font-semibold">React Framework</h3>
              <p className="text-gray-600 text-sm">Evaluate your React skills</p>
              <button className="mt-2 bg-primary-600 text-white px-4 py-2 rounded hover:bg-primary-700">
                Start Assessment
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillAssessment;