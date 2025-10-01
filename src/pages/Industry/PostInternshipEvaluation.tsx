import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Star, Check, FileText, Award, Send } from 'lucide-react';
import { emptyEvaluation } from '../../types/InternshipEvaluation';
import type { InternshipEvaluation } from '../../types/InternshipEvaluation';

// Types
interface Intern {
  id: string;
  name: string;
  email: string;
  college: string;
  department: string;
  internshipTitle: string;
  startDate: string;
  endDate: string;
  status: 'active' | 'completed' | 'pending-evaluation';
}

const PostInternshipEvaluation = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const internParam = queryParams.get('intern');
  
  const [activeTab, setActiveTab] = useState<'pending' | 'completed'>('pending');
  const [selectedIntern, setSelectedIntern] = useState<Intern | null>(null);
  const [evaluation, setEvaluation] = useState<InternshipEvaluation>({...emptyEvaluation});

  // Mock data for interns
  const [interns] = useState<Intern[]>([
    {
      id: 'intern-001',
      name: 'Priya Sharma',
      email: 'priya.sharma@student.edu',
      college: 'Delhi Technical University',
      department: 'Computer Science',
      internshipTitle: 'Full Stack Developer',
      startDate: '2023-05-15',
      endDate: '2023-08-15',
      status: 'pending-evaluation'
    },
    {
      id: 'intern-002',
      name: 'Michael Johnson',
      email: 'michael.johnson@student.edu',
      college: 'Mumbai Institute of Technology',
      department: 'Information Technology',
      internshipTitle: 'UX/UI Designer',
      startDate: '2023-05-22',
      endDate: '2023-08-22',
      status: 'pending-evaluation'
    },
    {
      id: 'intern-003',
      name: 'Vikram Desai',
      email: 'vikram.desai@student.edu',
      college: 'Bangalore Engineering College',
      department: 'Electronics',
      internshipTitle: 'IoT Development Intern',
      startDate: '2023-06-10',
      endDate: '2023-09-10',
      status: 'completed'
    },
    {
      id: 'intern-004',
      name: 'Aisha Khan',
      email: 'aisha.khan@student.edu',
      college: 'Chennai Institute of Science',
      department: 'Data Science',
      internshipTitle: 'Machine Learning Intern',
      startDate: '2023-05-01',
      endDate: '2023-08-01',
      status: 'completed'
    }
  ]);

  // Check URL parameters and pre-select an intern if specified
  useEffect(() => {
    if (internParam) {
      const foundIntern = interns.find(intern => intern.id.toLowerCase() === internParam.toLowerCase());
      if (foundIntern) {
        setSelectedIntern(foundIntern);
        setActiveTab(foundIntern.status === 'completed' ? 'completed' : 'pending');
        
        // Pre-fill the evaluation form
        setEvaluation({
          ...emptyEvaluation,
          internId: foundIntern.id,
          studentName: foundIntern.name,
          internshipPosition: foundIntern.internshipTitle,
          startDate: foundIntern.startDate,
          endDate: foundIntern.endDate
        });
      }
    }
  }, [internParam, interns]);

  const pendingInterns = interns.filter(intern => intern.status === 'pending-evaluation');
  const completedInterns = interns.filter(intern => intern.status === 'completed');

  const handleRatingChange = (field: string, value: number) => {
    setEvaluation(prev => ({ ...prev, [field]: value }));
  };

  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setEvaluation(prev => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    if (name === 'hireRecommendation') {
      setEvaluation(prev => ({ 
        ...prev, 
        [name]: checked ? 'yes' : 'no' 
      }));
    } else {
      setEvaluation(prev => ({ ...prev, [name]: checked }));
    }
  };

  const handleSubmit = () => {
    // Here you would submit the evaluation to your backend
    console.log('Submitting evaluation:', evaluation);
    console.log('For intern:', selectedIntern);
    
    // Reset the form and update UI
    alert('Evaluation submitted successfully!');
    setSelectedIntern(null);
    setEvaluation({...emptyEvaluation});
  };

  const renderStarRating = (name: string, value: number) => {
    return (
      <div className="flex items-center">
        {[1, 2, 3, 4, 5].map((star) => (
          <button
            key={star}
            type="button"
            onClick={() => handleRatingChange(name, star)}
            className={`${
              star <= value ? 'text-yellow-400' : 'text-gray-300'
            } text-2xl focus:outline-none`}
            aria-label={`${star} stars`}
          >
            <Star fill={star <= value ? 'currentColor' : 'none'} />
          </button>
        ))}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Post-Internship Evaluation</h1>
        <p className="text-gray-600 mb-8">Evaluate interns who have completed their internships at your company</p>
        
        {/* Tabs */}
        <div className="flex border-b border-gray-200 mb-6">
          <button
            className={`py-3 px-6 font-medium text-sm ${
              activeTab === 'pending'
                ? 'border-b-2 border-primary-600 text-primary-600'
                : 'text-gray-500 hover:text-gray-700'
            }`}
            onClick={() => setActiveTab('pending')}
          >
            Pending Evaluations ({pendingInterns.length})
          </button>
          <button
            className={`py-3 px-6 font-medium text-sm ${
              activeTab === 'completed'
                ? 'border-b-2 border-primary-600 text-primary-600'
                : 'text-gray-500 hover:text-gray-700'
            }`}
            onClick={() => setActiveTab('completed')}
          >
            Completed Evaluations ({completedInterns.length})
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Interns List */}
          <div className="lg:col-span-1">
            <div className="bg-white shadow rounded-lg overflow-hidden">
              <div className="px-6 py-4 bg-gray-50 border-b border-gray-200">
                <h2 className="font-semibold text-gray-800">
                  {activeTab === 'pending' ? 'Pending Evaluations' : 'Completed Evaluations'}
                </h2>
              </div>
              <div className="divide-y divide-gray-200">
                {(activeTab === 'pending' ? pendingInterns : completedInterns).map((intern) => (
                  <div
                    key={intern.id}
                    className={`px-6 py-4 cursor-pointer hover:bg-gray-50 ${
                      selectedIntern?.id === intern.id ? 'bg-gray-50' : ''
                    }`}
                    onClick={() => setSelectedIntern(intern)}
                  >
                    <h3 className="font-medium text-gray-900">{intern.name}</h3>
                    <p className="text-sm text-gray-600">{intern.internshipTitle}</p>
                    <div className="flex items-center mt-1 text-xs text-gray-500">
                      <span>
                        {new Date(intern.endDate).toLocaleDateString('en-IN', {
                          year: 'numeric',
                          month: 'short',
                          day: 'numeric',
                        })}
                      </span>
                      {intern.status === 'completed' && (
                        <span className="ml-2 flex items-center text-green-600">
                          <Check size={14} className="mr-1" />
                          Evaluated
                        </span>
                      )}
                    </div>
                  </div>
                ))}

                {(activeTab === 'pending' ? pendingInterns : completedInterns).length === 0 && (
                  <div className="px-6 py-8 text-center text-gray-500">
                    <FileText className="mx-auto h-10 w-10 text-gray-400 mb-2" />
                    <p>No {activeTab === 'pending' ? 'pending' : 'completed'} evaluations available.</p>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Evaluation Form */}
          <div className="lg:col-span-2">
            {selectedIntern ? (
              <div className="bg-white shadow rounded-lg overflow-hidden">
                <div className="px-6 py-4 bg-gray-50 border-b border-gray-200">
                  <h2 className="font-semibold text-gray-800">
                    Evaluate: {selectedIntern.name} - {selectedIntern.internshipTitle}
                  </h2>
                </div>
                <div className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4 mb-6">
                    <div>
                      <p className="text-sm font-medium text-gray-700 mb-1">Technical Skills</p>
                      {renderStarRating('technicalSkills', evaluation.technicalSkills)}
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-700 mb-1">Communication Skills</p>
                      {renderStarRating('communication', evaluation.communication)}
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-700 mb-1">Problem Solving</p>
                      {renderStarRating('problemSolving', evaluation.problemSolving)}
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-700 mb-1">Teamwork</p>
                      {renderStarRating('teamwork', evaluation.teamwork)}
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-700 mb-1">Punctuality</p>
                      {renderStarRating('workEthic', evaluation.workEthic)}
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-700 mb-1">Adaptability</p>
                      {renderStarRating('adaptability', evaluation.adaptability)}
                    </div>
                  </div>

                  <div className="mb-6">
                    <p className="text-sm font-medium text-gray-700 mb-1">Overall Performance</p>
                    {renderStarRating('overallRating', evaluation.overallRating)}
                  </div>

                  <div className="space-y-4">
                    <div>
                      <label htmlFor="strengths" className="block text-sm font-medium text-gray-700 mb-1">
                        Key Strengths
                      </label>
                      <textarea
                        id="strengths"
                        name="strengthsComments"
                        rows={3}
                        className="shadow-sm focus:ring-primary-500 focus:border-primary-500 block w-full sm:text-sm border border-gray-300 rounded-md"
                        placeholder="What were the intern's key strengths?"
                        value={evaluation.strengthsComments}
                        onChange={handleTextChange}
                      ></textarea>
                    </div>

                    <div>
                      <label htmlFor="areasOfImprovement" className="block text-sm font-medium text-gray-700 mb-1">
                        Areas for Improvement
                      </label>
                      <textarea
                        id="areasOfImprovement"
                        name="improvementComments"
                        rows={3}
                        className="shadow-sm focus:ring-primary-500 focus:border-primary-500 block w-full sm:text-sm border border-gray-300 rounded-md"
                        placeholder="What areas could the intern improve upon?"
                        value={evaluation.improvementComments}
                        onChange={handleTextChange}
                      ></textarea>
                    </div>

                    <div>
                      <label htmlFor="projectOutcome" className="block text-sm font-medium text-gray-700 mb-1">
                        Project Outcome
                      </label>
                      <textarea
                        id="projectOutcome"
                        name="projectOutcome"
                        rows={3}
                        className="shadow-sm focus:ring-primary-500 focus:border-primary-500 block w-full sm:text-sm border border-gray-300 rounded-md"
                        placeholder="Describe the outcome of the intern's project/work"
                        value={evaluation.projectOutcome}
                        onChange={handleTextChange}
                      ></textarea>
                    </div>

                    <div>
                      <label htmlFor="additionalComments" className="block text-sm font-medium text-gray-700 mb-1">
                        Additional Comments
                      </label>
                      <textarea
                        id="additionalComments"
                        name="additionalComments"
                        rows={3}
                        className="shadow-sm focus:ring-primary-500 focus:border-primary-500 block w-full sm:text-sm border border-gray-300 rounded-md"
                        placeholder="Any additional comments about the intern's performance?"
                        value={evaluation.additionalComments}
                        onChange={handleTextChange}
                      ></textarea>
                    </div>

                    <div className="flex items-center">
                      <input
                        id="recommendForHiring"
                        name="hireRecommendation"
                        type="checkbox"
                        className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                        checked={evaluation.hireRecommendation === 'yes'}
                        onChange={handleCheckboxChange}
                      />
                      <label htmlFor="recommendForHiring" className="ml-2 block text-sm text-gray-900">
                        Would you recommend this intern for future hiring opportunities?
                      </label>
                    </div>
                  </div>

                  <div className="mt-6 flex justify-end">
                    <button
                      type="button"
                      className="mr-3 px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
                      onClick={() => setSelectedIntern(null)}
                    >
                      Cancel
                    </button>
                    <button
                      type="button"
                      className="px-4 py-2 text-sm font-medium text-white bg-primary-600 border border-transparent rounded-md shadow-sm hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 flex items-center"
                      onClick={handleSubmit}
                    >
                      <Send className="h-4 w-4 mr-2" />
                      Submit Evaluation
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <div className="bg-white shadow rounded-lg p-8 text-center">
                <Award className="mx-auto h-12 w-12 text-gray-400" />
                <h3 className="mt-4 text-lg font-medium text-gray-900">Select an Intern</h3>
                <p className="mt-2 text-sm text-gray-500">
                  Select an intern from the list to evaluate their internship performance.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostInternshipEvaluation;