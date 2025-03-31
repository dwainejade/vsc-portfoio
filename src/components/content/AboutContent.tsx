// src/components/content/AboutContent.tsx
import React from 'react';

const AboutContent: React.FC = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4 text-green-400">About Me</h1>
      <p className="mb-4">I'm a passionate developer with expertise in React, TypeScript, and UI design.</p>
      <p className="mb-4">My journey in web development started in [Year] and I've been crafting digital experiences ever since.</p>
      <ul className="list-disc pl-5 mb-4">
        <li>Frontend Development</li>
        <li>UI/UX Design</li>
        <li>TypeScript & JavaScript</li>
        <li>React & Next.js</li>
      </ul>
    </div>
  );
};

export default AboutContent;