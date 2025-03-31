// src/components/content/ProjectsContent.tsx
import React from 'react';

const ProjectsContent: React.FC = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4 text-yellow-400">Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="border border-gray-700 p-4 rounded">
          <h2 className="text-xl font-semibold mb-2">Project One</h2>
          <p className="text-sm text-gray-400 mb-2">React, TypeScript, TailwindCSS</p>
          <p>A brief description of this amazing project.</p>
        </div>
        <div className="border border-gray-700 p-4 rounded">
          <h2 className="text-xl font-semibold mb-2">Project Two</h2>
          <p className="text-sm text-gray-400 mb-2">Next.js, GraphQL</p>
          <p>A brief description of another fantastic project.</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectsContent;