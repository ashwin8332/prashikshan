import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const faqData: FAQItem[] = [
    {
      question: 'What is Prashikshan?',
      answer: 'Prashikshan is an Academia-Industry Interface platform that facilitates seamless internship management and skill development for students, industries, and educational institutions under NEP 2020 guidelines.',
      category: 'general'
    },
    {
      question: 'How do I apply for an internship?',
      answer: 'To apply for an internship, sign in to your student account, browse available opportunities in the "Internships" section, and click "Apply" on positions that interest you. You\'ll need to complete your profile information and may need to answer specific questions for each application.',
      category: 'student'
    },
    {
      question: 'How can I track my internship application status?',
      answer: 'After submitting an application, you can track its status in the "Applications" section of your student dashboard. Each application will show its current status: Submitted, Under Review, Shortlisted, Accepted, or Rejected.',
      category: 'student'
    },
    {
      question: 'How can my company post internship opportunities?',
      answer: 'Companies can sign up for an industry account, complete their company profile, and use the "Post Internship" option in their dashboard. You\'ll be able to specify requirements, duration, compensation, and other relevant details.',
      category: 'industry'
    },
    {
      question: 'How does the faculty approval process work?',
      answer: 'Faculty members review and approve internships to ensure they meet academic requirements. The approval workflow includes verifying the company, reviewing the internship details, and ensuring the experience contributes to the student\'s learning objectives.',
      category: 'faculty'
    },
    {
      question: 'How are internship credits integrated with academic programs?',
      answer: 'Prashikshan maps internship activities to educational outcomes as defined by NEP 2020. Credits are awarded based on duration, complexity, and learning outcomes. The system automatically generates reports and credit assessments that can be integrated with the institution\'s academic management system.',
      category: 'general'
    },
    {
      question: 'What skills assessments are available for students?',
      answer: 'Students can access various skill assessment tools including technical assessments, soft skills evaluations, and industry-specific knowledge tests. These assessments help identify strengths and areas for improvement before applying for internships.',
      category: 'student'
    },
    {
      question: 'How can I generate reports for my department?',
      answer: 'Faculty can generate comprehensive reports from their dashboard under the "Reports" section. These include student participation statistics, industry engagement metrics, skill development analysis, and credit completion summaries.',
      category: 'faculty'
    },
    {
      question: 'Can multiple departments use the platform?',
      answer: 'Yes, Prashikshan is designed to support multiple departments and institutions. Each department can have its own faculty coordinators, approval workflows, and industry connections while sharing the central database of opportunities.',
      category: 'faculty'
    },
    {
      question: 'How do we verify the authenticity of companies posting internships?',
      answer: 'All companies undergo a verification process before they can post internships. This includes validating their business credentials, reviewing their profile information, and sometimes conducting verification calls. Only approved companies can post opportunities on the platform.',
      category: 'industry'
    },
    {
      question: 'What formats are available for internship reports?',
      answer: 'Internship reports can be generated in multiple formats including PDF, Word, and HTML. These reports include progress tracking, supervisor evaluations, skills gained, and project outcomes, all aligned with NEP 2020 guidelines.',
      category: 'student'
    },
    {
      question: 'How does Prashikshan ensure data privacy?',
      answer: 'Prashikshan implements strict data protection measures including end-to-end encryption, access controls, and regular security audits. Student information is only shared with companies when they explicitly apply for specific positions.',
      category: 'general'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Questions' },
    { id: 'general', name: 'General Information' },
    { id: 'student', name: 'For Students' },
    { id: 'industry', name: 'For Industries' },
    { id: 'faculty', name: 'For Faculty' }
  ];

  const filteredFAQs = activeCategory === 'all' 
    ? faqData 
    : faqData.filter(faq => faq.category === activeCategory);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="bg-gray-50 dark:bg-gray-900 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-50">Frequently Asked Questions</h1>
          <p className="mt-4 text-xl text-gray-600 dark:text-gray-300">
            Find answers to common questions about the Prashikshan platform
          </p>
        </div>

        {/* Category tabs */}
        <div className="flex flex-wrap gap-2 mb-8 justify-center">
          {categories.map((category) => (
            <button
              key={category.id}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeCategory === category.id
                  ? 'bg-primary text-white dark:bg-primary-600'
                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
              }`}
              onClick={() => setActiveCategory(category.id)}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* FAQ accordion */}
        <div className="space-y-4">
          {filteredFAQs.map((faq, index) => {
            const isActive = activeIndex === index;
            
            return (
              <div 
                key={index} 
                className={`bg-white dark:bg-gray-800 rounded-lg shadow-sm transition-all ${
                  isActive ? 'ring-2 ring-primary-300 dark:ring-primary-500' : ''
                }`}
              >
                <button
                  className="flex justify-between items-center w-full px-6 py-4 text-left"
                  onClick={() => toggleFAQ(index)}
                >
                  <span className="text-lg font-medium text-gray-900 dark:text-gray-100">{faq.question}</span>
                  <span className="ml-6 flex-shrink-0">
                    {isActive ? (
                      <ChevronUp className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                    )}
                  </span>
                </button>
                
                <div 
                  className={`px-6 pb-6 transition-all duration-300 ease-in-out ${
                    isActive ? 'opacity-100 max-h-96' : 'opacity-0 max-h-0 overflow-hidden'
                  }`}
                >
                  <p className="text-gray-600 dark:text-gray-300">{faq.answer}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Contact support section */}
        <div className="mt-12 bg-primary-50 dark:bg-primary-900/20 rounded-lg p-6 border border-primary-100 dark:border-primary-800">
          <h3 className="text-xl font-medium text-primary-800 dark:text-primary-300">Didn't find what you're looking for?</h3>
          <p className="mt-2 text-gray-600 dark:text-gray-300">
            If you have more questions or need assistance, our support team is ready to help.
          </p>
          <div className="mt-4">
            <a 
              href="/contact" 
              className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary hover:bg-primary-600 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 dark:focus:ring-offset-gray-900 transition-colors"
            >
              Contact Support
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;