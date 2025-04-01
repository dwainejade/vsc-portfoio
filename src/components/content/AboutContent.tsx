// src/components/content/AboutContent.tsx
import React from 'react';

const AboutContent: React.FC = () => {
  return (
    <div className="p-4 max-w-4xl">
      <h1 className="text-2xl font-bold mb-4 text-green-400">About Me</h1>
      
      <section className="mb-8">
        <p className="mb-4 text-gray-200 leading-relaxed">
          Hey there! I'm Dwaine, a Front-End Developer based in Brooklyn, where I was born and raised. Growing up in Brooklyn's inner city, I was a decent student but never considered myself exceptional except in math. Despite that aptitude, programming wasn't on my radar—I still remember struggling with logic gates on a breadboard in high school and thinking, "This isn't for me."
        </p>
        
        <p className="mb-4 text-gray-200 leading-relaxed">
          I did enjoy working with CAD drawings in Autodesk Inventor, which led me to briefly pursue that in college before realizing higher education wasn't my path at the time. Without mentors or guidance, I bounced between various jobs to pay the bills. While none were my dream position, I always took ownership of my responsibilities and consistently became an example employee. This work ethic helped me progress from entry-level positions to supervisory roles with office space and a computer.
        </p>
        
        <p className="mb-4 text-gray-200 leading-relaxed">
          It was in those office roles where technology began to intrigue me. Working with Excel sheets, I found myself enjoying the challenge of creating macros and finding ways to automate tasks. When offered management positions that demanded more work without substantial pay increases, I started researching better opportunities that required minimal formal education.
        </p>
        
        <p className="mb-4 text-gray-200 leading-relaxed">
          That's when I discovered web development and couldn't believe what I was reading—you could be self-taught in this field? After further research, I found coding bootcamps that could accelerate the journey. Wanting both community and accountability to push through challenges, I signed up for Lambda School's bootcamp while maintaining my full-time job. That decision changed everything.
        </p>
        
        <p className="text-gray-200 leading-relaxed">
          I discovered that software development wasn't just a career but a world of limitless possibilities where you can create something from nothing. It's a field that allows my creative and logical sides to work in harmony, building solutions that matter. For the past three years at StrongMind, I've been crafting educational tools that help K-12 students engage with learning in new ways. I've also developed a particular passion for 3D web animations and simulations using Three.js, creating interactive experiences that blur the line between technology and art.
        </p>
      </section>
      
      <section>
        <h2 className="text-xl font-semibold text-blue-400 border-b border-gray-700 pb-1 mb-4">Skills & Technologies</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-medium text-yellow-300 mb-2">Development</h3>
            <ul className="list-disc pl-5 space-y-1 text-gray-300">
              <li>JavaScript / TypeScript</li>
              <li>React / Next.js / Gatsby</li>
              <li>Three.js / React Three Fiber</li>
              <li>HTML5 / CSS3 / LESS / Tailwind</li>
              <li>Zustand / Redux</li>
              <li>Responsive & Accessible Design</li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium text-yellow-300 mb-2">Tools & Practices</h3>
            <ul className="list-disc pl-5 space-y-1 text-gray-300">
              <li>Git / GitHub</li>
              <li>Webpack / Vite</li>
              <li>Cypress / Jest</li>
              <li>Figma / Adobe Creative Suite</li>
              <li>Agile Development / Jira</li>
              <li>CI/CD Pipelines</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutContent;