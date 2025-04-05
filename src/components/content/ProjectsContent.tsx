// src/components/content/ProjectsContent.tsx
import React from 'react';

interface Project {
  id: number;
  title: string;
  codeName: string;
  imageUrl: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  demoUrl?: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "MetroTopia: City Builder",
    codeName: "_city-builder",
    imageUrl: "/assets/images/metro_1.jpg",
    description: "A full-stack food delivery application clone with user authentication, restaurant browsing, and order management features. Built as part of a development bootcamp.",
    technologies: ["React", "Node.js", "Express", "MongoDB"],
    githubUrl: "https://github.com/dwainejade/metrotopia",
    demoUrl: "https://interactives.strongmind.com/city-builder-interactive/build/aag"
  },
  {
    id: 2,
    title: "Solar System Sim",
    codeName: "_solar",
    imageUrl: "/assets/images/solar_system_1.jpg",
    description: "A responsive e-commerce website clone for digital fashion and collectibles. Features product showcases, shopping cart functionality, and payment integration.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Stripe"],
    demoUrl: "https://devinteractives.strongmind.com/solar-system-interactive/main/"
  },
  {
    id: 3,
    title: "Geometry Solver",
    codeName: "_geometry",
    imageUrl: "/assets/images/geometry_1.png",
    description: "A Discord bot that monitors and relays messages between servers. Built as a personal project for community management and cross-server coordination.",
    technologies: ["JavaScript", "Discord.js", "Node.js", "WebSockets"],
    demoUrl: "https://devinteractives.strongmind.com/geometry-interactive/mix/hybrid",
    githubUrl: "https://github.com/username/alpha-spy"
  },
  {
    id: 4,
    title: "Stock Market Game",
    codeName: "_stocks",
    imageUrl: "/assets/images/stocks_1.png",
    description: "This VSCode-themed portfolio website built with React and TypeScript. Features tab navigation, file explorer, and a realistic IDE experience.",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Zustand"],
    demoUrl: "https://devinteractives.strongmind.com/stock-market-sim/",
    githubUrl: "https://github.com/username/vscode-portfolio"
  }
];


const ProjectsContent: React.FC = () => {
  return (
    <div className="p-6 text-[#d4d4d4] min-h-full">
      <h1 className="text-2xl font-bold mb-8 text-yellow-400">_projects</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {projects.map((project) => (
          <div 
            key={project.id} 
            className="border border-[#3c3c3c] bg-[#252526] rounded-md overflow-hidden flex flex-col"
          >
            <div className="px-6 py-4 border-b border-[#3c3c3c]">
              <h2 className="text-xl">
                <span className="text-yellow-400">{project.title}</span>
                {/* <span className="text-gray-500 ml-2 font-mono">//</span>
                <span className="text-green-400 ml-2 font-mono">{project.codeName}</span> */}
              </h2>
            </div>
            
            <div className="p-1 bg-[#1e1e1e]">
              <img 
                src={project.imageUrl} 
                alt={project.title} 
                className="w-full h-72 object-cover rounded"
              />
            </div>
            
            <div className="p-6 flex-grow">
              <p className="mb-4 text-[#d4d4d4]">{project.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech, index) => (
                  <span 
                    key={index} 
                    className="px-2 py-1 text-xs rounded-full bg-[#3c3c3c] text-[#d4d4d4]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="px-6 py-4 flex gap-4 border-t border-[#3c3c3c]">
              <a 
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-4 py-2 bg-[#2d2d2d] hover:bg-[#3e3e3e] text-[#d4d4d4] rounded-md text-sm transition-colors"
              >
                view-project-on-github
              </a>
              
              {project.demoUrl && (
                <a 
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-4 py-2 bg-[#044289] hover:bg-[#0366d6] text-white rounded-md text-sm transition-colors"
                >
                  view-live-demo
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsContent;