import { useToast } from '../contexts/useToast';
import { Sparkles, Bell, Ban, Info } from 'lucide-react';

const TestComponents = () => {
  const toast = useToast();

  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-8">Component Testing Page</h1>
      
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Toast Notifications</h2>
        <div className="flex flex-wrap gap-3">
          <button
            onClick={() => toast.showSuccess('This is a success notification!')}
            className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition-colors flex items-center gap-2"
          >
            <Sparkles size={18} /> Show Success Toast
          </button>
          
          <button
            onClick={() => toast.showError('This is an error notification!')}
            className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors flex items-center gap-2"
          >
            <Ban size={18} /> Show Error Toast
          </button>
          
          <button
            onClick={() => toast.showWarning('This is a warning notification!')}
            className="px-4 py-2 bg-yellow-500 text-white rounded-md hover:bg-yellow-600 transition-colors flex items-center gap-2"
          >
            <Bell size={18} /> Show Warning Toast
          </button>
          
          <button
            onClick={() => toast.showInfo('This is an info notification!')}
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors flex items-center gap-2"
          >
            <Info size={18} /> Show Info Toast
          </button>
        </div>
      </section>
      
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Chatbot Interaction</h2>
        <p className="mb-4 text-gray-700 dark:text-gray-300">
          The chatbot is available in the bottom-right corner of every page. Click the button below to test some pre-defined questions.
        </p>
        
        <div className="space-y-4">
          <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
            <h3 className="font-medium mb-2">Test the following questions:</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>How do I apply for an internship?</li>
              <li>What documents do I need for registration?</li>
              <li>How can I contact faculty members?</li>
              <li>Where can I find my application status?</li>
            </ul>
          </div>
        </div>
      </section>
      
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Header Features</h2>
        <p className="mb-4 text-gray-700 dark:text-gray-300">
          The header now includes enhanced navigation, search functionality, and user profiles.
        </p>
        
        <div className="space-y-4">
          <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
            <h3 className="font-medium mb-2">Try these features:</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>Click the search icon in the header to open the search overlay</li>
              <li>Use the theme toggle to switch between light and dark modes</li>
              <li>Test responsive navigation on mobile view</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TestComponents;