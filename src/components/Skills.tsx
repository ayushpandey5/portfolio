import { FaJs, FaReact, FaNode, FaAws, FaDocker, FaGit, FaCss3Alt } from 'react-icons/fa'; // Icons from react-icons
import { SiTypescript, SiTailwindcss, SiJest, SiMocha, SiChai } from 'react-icons/si'; // Additional icons

export const Skills = () => {
  const allSkills = [
    { name: 'JavaScript', icon: <FaJs className="w-10 h-10 text-yellow-500" /> },
    { name: 'TypeScript', icon: <SiTypescript className="w-10 h-10 text-blue-500" /> },
    { name: 'CSS3', icon: <FaCss3Alt className="w-10 h-10 text-blue-600" /> },
    { name: 'React', icon: <FaReact className="w-10 h-10 text-blue-400" /> },
    { name: 'Node.js', icon: <FaNode className="w-10 h-10 text-green-500" /> },
    { name: 'Tailwind CSS', icon: <SiTailwindcss className="w-10 h-10 text-teal-400" /> },
    { name: 'AWS', icon: <FaAws className="w-10 h-10 text-orange-500" /> },
    { name: 'Git', icon: <FaGit className="w-10 h-10 text-red-500" /> },
    { name: 'Docker', icon: <FaDocker className="w-10 h-10 text-blue-400" /> },
    { name: 'Jest', icon: <SiJest className="w-10 h-10 text-red-600" /> },
    { name: 'Chai', icon: <SiChai className="w-10 h-10 text-red-400" /> }
  ];

  return (
    <div id='skills' className="py-8 px-4 bg-gray-900 dark:bg-gray-800 text-gray-100 dark:text-gray-100">
      <h2 className="text-4xl font-bold mb-8 text-center text-teal-500 dark:text-teal-600">Skills</h2>
      <div className="flex flex-wrap justify-center gap-8">
        {allSkills.map(({ name, icon }) => (
          <div
            key={name}
            className="flex items-center justify-center outline hover:bg-teal-600 rounded-full p-4 cursor-pointer transition-transform transform hover:scale-105 shadow-md"
          >
            {icon}
          </div>
        ))}
      </div>
    </div>
  );
};
