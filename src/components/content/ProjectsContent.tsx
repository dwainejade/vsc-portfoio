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
    description: "An educational interactive app designed to help students understand the environmental impacts of urbanization. This SimCity-like experience allows users to build and manage cities while learning about sustainable development, pollution effects, and urban planning. Features include realistic sound effects and dynamic environmental feedback.",
    technologies: ["React", "Three.js", "Zustand", "Howler.js", "Framer Motion"],
    githubUrl: "https://github.com/dwainejade/metrotopia",
    demoUrl: "https://interactives.strongmind.com/city-builder-interactive/build/aag"
  },
  {
    id: 2,
    title: "Solar System Simulator",
    codeName: "_solar",
    imageUrl: "/assets/images/solar_system_1.jpg",
    description: "An immersive 3D solar system simulation for astronomy education. Explore planets and their major moons in detail, with accurate orbital mechanics. Features include a vast asteroid belt comprising thousands of meshes, interactive planet info panels showing mass, orbital speed, and eccentricity, and the ability to adjust planetary distances to visualize gravitational effects on orbital periods.",
    technologies: ["React", "Three.js", "Zustand", "WebGL", "React Three Fiber"],
    demoUrl: "https://devinteractives.strongmind.com/solar-system-interactive/main/"
  },
  {
    id: 3,
    title: "Geometry Solver",
    codeName: "_geometry",
    imageUrl: "/assets/images/geometry_1.png",
    description: "An interactive geometry learning tool that helps students visualize and solve geometric problems. Users can create, manipulate, and analyze shapes while the application provides step-by-step solutions and explanations. Perfect for understanding spatial relationships and geometric principles in an engaging environment.",
    technologies: ["JavaScript", "React", "Canvas API", "Mathematics Libraries"],
    demoUrl: "https://devinteractives.strongmind.com/geometry-interactive/mix/hybrid",
    // githubUrl: "https://github.com/username/geometry-solver"
  },
  {
    id: 4,
    title: "Stock Market Simulator",
    codeName: "_stocks",
    imageUrl: "/assets/images/stocks_1.png",
    description: "A financial literacy educational game that teaches students about stock market investing. The simulator generates realistic market movements using algorithmic modeling. Players can invest virtual funds, track portfolio performance, and fast-forward through market cycles in 3-month increments. Learn investment strategies, risk management, and market analysis in a safe, gamified environment.",
    technologies: ["TypeScript", "React", "Zustand", "Recharts", "Financial Algorithms"],
    demoUrl: "https://devinteractives.strongmind.com/stock-market-sim/",
    // githubUrl: "https://github.com/username/stock-market-simulator"
  },
  {
    id: 5,
    title: "Algebra Solver",
    codeName: "_algebra",
    imageUrl: "/assets/images/algebra_1.png",
    description: "An interactive algebra learning tool that helps students visualize and solve algebraic problems. Users can create, manipulate, and analyze equations while the application provides step-by-step solutions and explanations. Perfect for understanding algebraic principles in an engaging environment.",
    technologies: ["TypeScript", "React", "Zustand", "Recharts",],
    demoUrl: "https://devinteractives.strongmind.com/algebra-interactive/public/algebra/linear-equations-one-hybrid/",
    // githubUrl: "https://github.com/username/stock-market-simulator"
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
              {project.githubUrl && (
                <a 
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-4 py-2 bg-[#2d2d2d] hover:bg-[#3e3e3e] text-[#d4d4d4] rounded-md text-sm transition-colors"
                >
                  view-project-on-github
                </a>
              )}
              
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