import { Github, Linkedin, Twitter } from 'lucide-react';

export const Footer = () => {
  return (
    <footer id='connect' className='flex flex-col items-center py-8 px-8 bg-gray-900'>
      <div className="text-xl font-bold text-teal-400 dark:text-gray-900 mb-4">
        <span className="dark:hover:text-teal-600">CONNECT WITH ME</span>
      </div>
      <div className="flex space-x-6">
        <a href="https://github.com/ayushpandey5" target="_blank" rel="noopener noreferrer" className="text-teal-400 hover:text-teal-300 dark:text-gray-900 dark:hover:text-teal-600">
          <Github />
        </a>
        <a href="https://linkedin.com/in/ayushpandey2000" target="_blank" rel="noopener noreferrer" className="text-teal-400 hover:text-teal-300 dark:text-gray-900 dark:hover:text-teal-600">
          <Linkedin />
        </a>
        <a href="https://twitter.com/your-twitter-username" target="_blank" rel="noopener noreferrer" className="text-teal-400 hover:text-teal-300 dark:text-gray-900 dark:hover:text-teal-600">
          <Twitter />
        </a>
      </div>
    </footer>
  );
};
