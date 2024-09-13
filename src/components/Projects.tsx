import React from 'react';
import { FaHtml5, FaCss3Alt, FaJs, FaPython, FaNodeJs } from 'react-icons/fa';
import { SiDjango, SiGoland, SiPostgresql, SiMongodb } from 'react-icons/si';
import { Badge } from './ui/badge';

type Language = 'JavaScript' | 'HTML' | 'CSS' | 'Python' | 'Django' | 'Go' | 'PostgreSQL' | 'Node.js' | 'MongoDB';

interface LanguageColorsIcons {
  [key: string]: { color: string; icon: React.ReactElement };
}

export const Projects = () => {
  const projectData = [
    {
      title: 'Project 1',
      description: 'A description of project 1 goes here.',
      link: '#',
      languages: ['JavaScript', 'HTML', 'CSS'] as Language[],
    },
    {
      title: 'Project 2',
      description: 'A description of project 2 goes here.',
      link: '#',
      languages: ['Python', 'Django'] as Language[],
    },
    {
      title: 'Project 3',
      description: 'A description of project 3 goes here.',
      link: '#',
      languages: ['Go', 'PostgreSQL'] as Language[],
    },
    {
      title: 'Project 4',
      description: 'A description of project 4 goes here.',
      link: '#',
      languages: ['Node.js', 'MongoDB'] as Language[],
    },
  ];

  // Language color and icon mapping
  const languageColorsIcons: LanguageColorsIcons = {
    JavaScript: { color: '#f7df1e', icon: <FaJs /> },
    HTML: { color: '#e34c26', icon: <FaHtml5 /> },
    CSS: { color: '#264de4', icon: <FaCss3Alt /> },
    Python: { color: '#306998', icon: <FaPython /> },
    Django: { color: '#092e20', icon: <SiDjango /> },
    Go: { color: '#00add8', icon: <SiGoland /> },
    PostgreSQL: { color: '#336791', icon: <SiPostgresql /> },
    'Node.js': { color: '#68a063', icon: <FaNodeJs /> },
    MongoDB: { color: '#47a248', icon: <SiMongodb /> },
  };

  return (
    <div id="projects" className="py-12 px-6 bg-gray-900 text-gray-100">
      <h2 className="text-4xl font-bold mb-12 text-center text-teal-500">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projectData.map((project, index) => (
          <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <h3 className="text-2xl font-semibold mb-2 text-teal-400">{project.title}</h3>
            <p className="text-md text-gray-300 mb-4">{project.description}</p>

            {/* Language Badges */}
            <div className="flex flex-wrap gap-2 mb-4">
              {project.languages.map((language, langIndex) => (
                <Badge key={langIndex} className="text-white flex items-center gap-1"
                  style={{ backgroundColor: languageColorsIcons[language].color }}>
                  {languageColorsIcons[language].icon}
                  {language}
                </Badge>
              ))}
            </div>
            <div className='flex float-end'>
              <a href={project.link} className="text-teal-500 hover:text-teal-300">
                View Project &rarr;
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
