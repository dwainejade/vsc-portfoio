// src/components/content/HomeContent.tsx
import React from 'react';

const HomeContent: React.FC = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4 text-blue-400">Welcome to My VSCode Portfolio</h1>
      <p className="mb-4">This is a VSCode-inspired portfolio showcasing my work and skills.</p>
      <p className="mb-4">Click on the tabs above to navigate through different sections.</p>
      <p className="mb-4">Use the sidebar explorer to browse different file sections.</p>
      <p className="mb-4">Try dragging and rearranging tabs in any order you prefer!</p>
    </div>
  );
};

export default HomeContent;