import { useState, useRef, useEffect } from 'react';
import { 
  MessageSquare, 
  Send, 
  X, 
  Loader, 
  Bot,
  PanelRight,
  PanelLeft
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

interface ChatbotProps {
  userType?: string | null;
}

const Chatbot = ({ userType = null }: ChatbotProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: `Hello${userType ? ' ' + userType : ''}! I'm Prashikshan's AI assistant. How can I help you today?`,
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && !isMinimized && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen, isMinimized]);

  const toggleChatbot = () => {
    setIsOpen(!isOpen);
    setIsMinimized(false);
  };

  const minimizeChatbot = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsMinimized(!isMinimized);
  };

  const closeChatbot = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsOpen(false);
  };

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!inputText.trim()) return;
    
    // Create a new user message
    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputText,
      sender: 'user',
      timestamp: new Date()
    };
    
    // Add the user message to the chat
    setMessages(prev => [...prev, userMessage]);
    setInputText('');
    setIsTyping(true);
    
    // Simulate API delay
    setTimeout(() => {
      // Generate response based on user input
      const botResponse = generateResponse(inputText, userType);
      
      // Create a bot message
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: botResponse,
        sender: 'bot',
        timestamp: new Date()
      };
      
      // Add the bot response to the chat
      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 1000);
  };

  const generateResponse = (userInput: string, userType: string | null): string => {
    // Convert input to lowercase for easier matching
    const input = userInput.toLowerCase();

    // Common responses regardless of user type
    if (input.includes('hello') || input.includes('hi') || input.includes('hey')) {
      return `Hello there! How can I assist you with Prashikshan today?`;
    }
    
    if (input.includes('thank')) {
      return `You're welcome! Is there anything else I can help with?`;
    }
    
    if (input.includes('who are you') || input.includes('what are you')) {
      return `I'm Prashikshan's AI assistant designed to help students, faculty, industry partners, and administrators with any questions about our platform!`;
    }
    
    // User-type specific responses
    if (userType === 'student') {
      if (input.includes('internship') || input.includes('apply')) {
        return `To apply for internships, go to the "Internships" section, browse available opportunities, and click "Apply" on positions that interest you. Make sure your profile is complete with all required information.`;
      }
      
      if (input.includes('application') || input.includes('status')) {
        return `You can track your application status in the "Applications" section of your dashboard. Each application will show its current status: Submitted, Under Review, Shortlisted, Accepted, or Rejected.`;
      }
      
      if (input.includes('skill') || input.includes('assessment')) {
        return `Access skill assessments in the "Skills" section of your dashboard. These will help you identify strengths and areas for improvement before applying for internships.`;
      }
    }
    
    else if (userType === 'industry') {
      if (input.includes('post') || input.includes('internship')) {
        return `To post a new internship opportunity, use the "Post Internship" option in your dashboard. You'll be able to specify requirements, duration, compensation, and other details.`;
      }
      
      if (input.includes('application') || input.includes('review')) {
        return `Review student applications in the "Applications" section. You can filter candidates, view profiles, and change application statuses.`;
      }
      
      if (input.includes('profile') || input.includes('company')) {
        return `Manage your company profile in the "Profile" section. A complete profile with detailed information helps attract the best students to your opportunities.`;
      }
    }
    
    else if (userType === 'faculty') {
      if (input.includes('student') || input.includes('monitor')) {
        return `Monitor your students' internship progress in the "Students" section. You can view detailed reports and activity for each student.`;
      }
      
      if (input.includes('approve') || input.includes('approval')) {
        return `Review and approve internships in the "Approvals" section. You can verify company information and ensure the internship meets educational standards.`;
      }
      
      if (input.includes('report') || input.includes('generate')) {
        return `Generate comprehensive reports from the "Reports" section, including student participation statistics, industry engagement metrics, and credit completion summaries.`;
      }
    }
    
    else if (userType === 'admin') {
      if (input.includes('user') || input.includes('manage')) {
        return `Manage all users in the "Users" section. You can add, edit, or deactivate accounts as needed.`;
      }
      
      if (input.includes('analytics') || input.includes('data')) {
        return `Access platform analytics in the "Analytics" section for insights on user engagement, internship performance, and more.`;
      }
      
      if (input.includes('setting') || input.includes('configure')) {
        return `Configure platform settings in the "Settings" section. Here you can adjust notification preferences, integration options, and other system settings.`;
      }
    }
    
    // General responses for all users
    if (input.includes('contact')) {
      return `You can reach out to support via the Contact & FAQ page or email at support@prashikshan.edu.in.`;
    }
    
    if (input.includes('faq')) {
      return `Check our FAQ section on the Contact & FAQ page for answers to common questions.`;
    }
    
    if (input.includes('course')) {
      return `Explore available courses in the Courses section. These can help you build skills needed for specific internships.`;
    }
    
    // Default response
    return `I'm not sure I understand your question. Could you rephrase it or ask about specific features like internships, applications, courses, or support?`;
  };

  const renderMessageContent = (message: Message) => {
    return message.text.split('\n').map((line, index) => (
      <span key={index} className="block">
        {line}
      </span>
    ));
  };

  return (
    <>
      {/* Chatbot trigger button */}
      <button
        onClick={toggleChatbot}
        className="fixed bottom-6 right-6 z-40 flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-r from-primary to-blue-600 text-white shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
        aria-label="Open chatbot assistant"
      >
        <MessageSquare size={24} />
      </button>

      {/* Chatbot interface */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ type: 'spring', damping: 20, stiffness: 300 }}
            className="fixed bottom-24 right-6 z-40 w-[340px] sm:w-[380px] rounded-2xl bg-white dark:bg-gray-800 shadow-2xl border border-gray-200 dark:border-gray-700 overflow-hidden"
            style={{ maxHeight: isMinimized ? '72px' : 'calc(100vh - 150px)' }}
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-primary to-blue-600 text-white p-3 flex justify-between items-center cursor-pointer" onClick={minimizeChatbot}>
              <div className="flex items-center space-x-2">
                <Bot size={20} />
                <h3 className="font-medium">Prashikshan Assistant</h3>
              </div>
              <div className="flex items-center space-x-2">
                <button onClick={minimizeChatbot} className="p-1 hover:bg-white/20 rounded" aria-label="Minimize chatbot">
                  {isMinimized ? <PanelRight size={18} /> : <PanelLeft size={18} />}
                </button>
                <button onClick={closeChatbot} className="p-1 hover:bg-white/20 rounded" aria-label="Close chatbot">
                  <X size={18} />
                </button>
              </div>
            </div>

            {/* Messages area */}
            {!isMinimized && (
              <div className="flex flex-col h-[400px]">
                <div className="flex-1 p-4 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 dark:scrollbar-thumb-gray-600">
                  {messages.map((message) => (
                    <div
                      key={message.id}
                      className={`mb-4 flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                      <div
                        className={`px-4 py-3 rounded-2xl max-w-[80%] ${
                          message.sender === 'user'
                            ? 'bg-primary text-white rounded-tr-none'
                            : 'bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-100 rounded-tl-none'
                        }`}
                      >
                        <div className="flex items-start mb-1">
                          {message.sender === 'bot' && (
                            <div className="bg-blue-600 rounded-full p-1 mr-2">
                              <Bot size={12} className="text-white" />
                            </div>
                          )}
                          <div className="flex-1">
                            {renderMessageContent(message)}
                          </div>
                        </div>
                        <div className="text-xs opacity-70 text-right mt-1">
                          {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                        </div>
                      </div>
                    </div>
                  ))}
                  {isTyping && (
                    <div className="mb-4 flex justify-start">
                      <div className="px-4 py-3 rounded-2xl rounded-tl-none bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-100">
                        <div className="flex items-center space-x-1">
                          <div className="h-2 w-2 bg-gray-400 dark:bg-gray-500 rounded-full animate-bounce"></div>
                          <div className="h-2 w-2 bg-gray-400 dark:bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                          <div className="h-2 w-2 bg-gray-400 dark:bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                        </div>
                      </div>
                    </div>
                  )}
                  <div ref={messagesEndRef} />
                </div>

                {/* Message input */}
                <form onSubmit={handleSendMessage} className="border-t border-gray-200 dark:border-gray-700 p-3">
                  <div className="flex items-center space-x-2">
                    <input
                      ref={inputRef}
                      type="text"
                      value={inputText}
                      onChange={(e) => setInputText(e.target.value)}
                      placeholder="Type your message..."
                      className="flex-1 px-4 py-2 bg-gray-100 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-full focus:outline-none focus:ring-2 focus:ring-primary dark:text-white text-sm"
                    />
                    <button
                      type="submit"
                      className="p-2 bg-primary text-white rounded-full hover:bg-primary-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                      disabled={!inputText.trim() || isTyping}
                    >
                      {isTyping ? <Loader size={18} className="animate-spin" /> : <Send size={18} />}
                    </button>
                  </div>
                </form>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Chatbot;