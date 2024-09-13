import { Link } from 'react-router-dom';

export const Header = () => {
    return (
        <nav className="flex justify-between items-center py-4 px-8 bg-gray-900 dark:bg-white">
          <div className="flex items-center align-middle space-x-4">
        <Link to="/" className="text-xl font-bold text-teal-400 dark:text-gray-900 hover:text-teal-300 dark:hover:text-teal-600">
          AYUSH PANDEY
        </Link>
      </div>
      <div className="flex space-x-6 text-lg font-bold text-gray-300 dark:text-gray-100">
        <a href="#projects" className="hover:text-teal-300 dark:hover:text-teal-600">PROJECTS</a>
        <a href="#education" className="hover:text-teal-300 dark:hover:text-teal-600">EDUCATION</a>
        <a href="#skills" className="hover:text-teal-300 dark:hover:text-teal-600">SKILLS</a>
        <a href="#connect" className="hover:text-teal-300 dark:hover:text-teal-600">CONNECT</a>
      </div>
        </nav>
      );
};
