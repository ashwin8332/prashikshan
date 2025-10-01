import { motion } from 'framer-motion';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send,
  Users,
  HelpCircle,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

const ContactFAQ = () => {
  // Contact form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  // FAQ state
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [activeTab, setActiveTab] = useState<'contact' | 'faq'>('contact');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

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

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 via-blue-50 to-indigo-50 dark:from-primary/20 dark:via-gray-900 dark:to-gray-800 py-20">
        <div className="container-max">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
                {activeTab === 'contact' ? 'Contact' : 'FAQ'}
              </span> & Support
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              {activeTab === 'contact' 
                ? 'Have questions about our platform or need assistance? We\'re here to help you succeed in your internship journey.'
                : 'Find answers to common questions about the Prashikshan platform and get the support you need.'}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Tab Navigation */}
      <div className="border-b border-gray-200 dark:border-gray-700">
        <div className="container-max">
          <nav className="flex -mb-px">
            <button
              onClick={() => setActiveTab('contact')}
              className={`py-4 px-6 border-b-2 font-medium text-sm flex items-center space-x-2 transition-colors ${
                activeTab === 'contact'
                  ? 'border-primary text-primary dark:border-primary-400 dark:text-primary-400'
                  : 'border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 hover:border-gray-300 dark:hover:border-gray-600'
              }`}
            >
              <Mail size={18} />
              <span>Contact Us</span>
            </button>
            <button
              onClick={() => setActiveTab('faq')}
              className={`py-4 px-6 border-b-2 font-medium text-sm flex items-center space-x-2 transition-colors ${
                activeTab === 'faq'
                  ? 'border-primary text-primary dark:border-primary-400 dark:text-primary-400'
                  : 'border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 hover:border-gray-300 dark:hover:border-gray-600'
              }`}
            >
              <HelpCircle size={18} />
              <span>FAQ</span>
            </button>
          </nav>
        </div>
      </div>

      {/* Content Sections */}
      <div className="py-16">
        <div className="container-max">
          {/* Contact Content */}
          {activeTab === 'contact' && (
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700"
              >
                <div className="mb-8">
                  <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-gray-50">Send us a Message</h2>
                  <p className="text-muted-foreground">
                    Fill out the form below and we'll get back to you as soon as possible.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm focus:ring-primary focus:border-primary dark:bg-gray-700 dark:text-white"
                        placeholder="John Doe"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm focus:ring-primary focus:border-primary dark:bg-gray-700 dark:text-white"
                        placeholder="john@example.com"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm focus:ring-primary focus:border-primary dark:bg-gray-700 dark:text-white"
                      placeholder="How can we help you?"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm focus:ring-primary focus:border-primary dark:bg-gray-700 dark:text-white resize-none"
                      placeholder="Your message here..."
                      required
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-primary to-blue-600 hover:from-primary-600 hover:to-blue-700 text-white font-medium py-3 px-4 rounded-md shadow-md hover:shadow-lg flex justify-center items-center space-x-2 transition-all duration-300"
                  >
                    <Send size={18} />
                    <span>Send Message</span>
                  </button>
                </form>
              </motion.div>

              {/* Contact Information */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="space-y-8"
              >
                <div className="mb-8">
                  <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-gray-50">Contact Information</h2>
                  <p className="text-muted-foreground mb-8">
                    We're available to help you with any questions or concerns. Reach out to us through any of these channels.
                  </p>
                </div>

                {/* Contact Cards */}
                <div className="space-y-4">
                  {[
                    {
                      icon: Mail,
                      title: "Email Us",
                      content: "support@prashikshan.edu.in",
                      subContent: "We'll respond within 24 hours",
                      color: "from-blue-500 to-cyan-500"
                    },
                    {
                      icon: Phone,
                      title: "Call Us",
                      content: "+91 98765 43210",
                      subContent: "Mon - Fri, 9:00 AM - 6:00 PM IST",
                      color: "from-green-500 to-emerald-500"
                    },
                    {
                      icon: MapPin,
                      title: "Visit Us",
                      content: "Prashikshan Headquarters",
                      subContent: "Mumbai, Maharashtra, India",
                      color: "from-purple-500 to-pink-500"
                    },
                    {
                      icon: Clock,
                      title: "Office Hours",
                      content: "Mon - Fri, 9:00 AM - 6:00 PM",
                      subContent: "Closed on weekends and public holidays",
                      color: "from-amber-500 to-orange-500"
                    },
                  ].map((item, index) => {
                    const Icon = item.icon;
                    return (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                        className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow duration-300"
                      >
                        <div className="flex items-start">
                          <div className={`rounded-full p-3 bg-gradient-to-r ${item.color}`}>
                            <Icon className="h-6 w-6 text-white" />
                          </div>
                          <div className="ml-4">
                            <h3 className="text-lg font-medium text-gray-900 dark:text-gray-50">{item.title}</h3>
                            <p className="text-lg font-medium text-gray-900 dark:text-gray-100 mt-1">{item.content}</p>
                            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{item.subContent}</p>
                          </div>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>

                {/* FAQ Link */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.8 }}
                  className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 mt-8"
                >
                  <div className="flex items-start">
                    <div className="rounded-full p-3 bg-gradient-to-r from-primary to-blue-600">
                      <HelpCircle className="h-6 w-6 text-white" />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-medium text-gray-900 dark:text-gray-50">Have questions?</h3>
                      <p className="text-muted-foreground mb-4">
                        Find quick answers to common questions in our FAQ section.
                      </p>
                      <button
                        onClick={() => setActiveTab('faq')}
                        className="inline-flex items-center text-primary hover:text-primary/80 font-medium transition-colors"
                      >
                        View FAQ
                        <HelpCircle className="w-4 h-4 ml-2" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          )}

          {/* FAQ Content */}
          {activeTab === 'faq' && (
            <div className="max-w-4xl mx-auto">
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="space-y-8"
              >
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
                      <motion.div 
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.05 }}
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
                      </motion.div>
                    );
                  })}
                </div>

                {/* Contact Link */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="mt-12 bg-primary-50 dark:bg-primary-900/20 rounded-lg p-6 border border-primary-100 dark:border-primary-800"
                >
                  <h3 className="text-xl font-medium text-primary-800 dark:text-primary-300">Didn't find what you're looking for?</h3>
                  <p className="mt-2 text-gray-600 dark:text-gray-300">
                    If you have more questions or need assistance, our support team is ready to help.
                  </p>
                  <div className="mt-4">
                    <button 
                      onClick={() => setActiveTab('contact')}
                      className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary hover:bg-primary-600 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 dark:focus:ring-offset-gray-900 transition-colors"
                    >
                      Contact Support
                    </button>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          )}
        </div>
      </div>

      {/* Support Team */}
      <section className="py-20 bg-muted/30 dark:bg-gray-900/30">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-gradient-to-r from-primary to-blue-600 rounded-full">
                <Users className="w-12 h-12 text-white" />
              </div>
            </div>
            <h2 className="text-4xl font-bold mb-6 text-gray-900 dark:text-gray-50">Our Support Team</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our dedicated support team is here to ensure you have the best experience with Prashikshan. 
              We're committed to helping you succeed in your internship journey.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ContactFAQ;