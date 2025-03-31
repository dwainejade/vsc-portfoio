// src/components/content/AboutContent.tsx
import React from 'react';
import VSCodeIcon from '../VSCodeIcon';

const AboutContent: React.FC = () => {
  return (
    <div className="p-4 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-4 text-green-400">About Me</h1>
      
      <section className="mb-6">
        <p className="mb-4">
          Hello! I'm Dwaine Matthew, a passionate full-stack developer with a love for creating 
          intuitive and engaging web experiences. My journey in software development began in 2018, 
          and I've been constantly learning and growing ever since.
        </p>
        <p className="mb-4">
          I specialize in modern JavaScript frameworks like React and Next.js, with a strong 
          foundation in TypeScript, HTML, CSS, and various backend technologies. I'm particularly 
          interested in UI/UX design principles and creating accessible web applications that 
          deliver exceptional user experiences.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-3 text-green-300">Skills & Technologies</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <div>
            <h3 className="font-bold mb-2">Frontend</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <VSCodeIcon name="code" className="w-5 h-5 mr-2 text-blue-400" />
                React
              </li>
              <li className="flex items-center">
                <VSCodeIcon name="chevron-right" className="w-5 h-5 mr-2 text-blue-400" />
                Next.js
              </li>
              <li className="flex items-center">
                <VSCodeIcon name="file-media" className="w-5 h-5 mr-2 text-blue-400" />
                TypeScript
              </li>
              <li className="flex items-center">
                <VSCodeIcon name="file-media" className="w-5 h-5 mr-2 text-yellow-400" />
                JavaScript
              </li>
              <li className="flex items-center">
                <VSCodeIcon name="code" className="w-5 h-5 mr-2 text-orange-400" />
                HTML5 / CSS3
              </li>
              <li className="flex items-center">
                <VSCodeIcon name="cloud" className="w-5 h-5 mr-2 text-cyan-400" />
                TailwindCSS
              </li>
              <li className="flex items-center">
                <VSCodeIcon name="repo" className="w-5 h-5 mr-2 text-purple-400" />
                Responsive Design
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-2">Backend</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <VSCodeIcon name="code" className="w-5 h-5 mr-2 text-green-400" />
                Node.js
              </li>
              <li className="flex items-center">
                <VSCodeIcon name="chevron-right" className="w-5 h-5 mr-2 text-green-400" />
                Express
              </li>
              <li className="flex items-center">
                <VSCodeIcon name="repo" className="w-5 h-5 mr-2 text-blue-400" />
                RESTful APIs
              </li>
              <li className="flex items-center">
                <VSCodeIcon name="cloud" className="w-5 h-5 mr-2 text-green-400" />
                MongoDB
              </li>
              <li className="flex items-center">
                <VSCodeIcon name="folder-active" className="w-5 h-5 mr-2 text-blue-400" />
                PostgreSQL
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-2">Tools & Others</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <VSCodeIcon name="repo" className="w-5 h-5 mr-2 text-orange-400" />
                Git / GitHub
              </li>
              <li className="flex items-center">
                <VSCodeIcon name="code" className="w-5 h-5 mr-2 text-blue-400" />
                VS Code
              </li>
              <li className="flex items-center">
                <VSCodeIcon name="cloud-upload" className="w-5 h-5 mr-2 text-blue-400" />
                Docker
              </li>
              <li className="flex items-center">
                <VSCodeIcon name="checklist" className="w-5 h-5 mr-2 text-green-400" />
                CI/CD Pipelines
              </li>
              <li className="flex items-center">
                <VSCodeIcon name="account" className="w-5 h-5 mr-2 text-yellow-400" />
                Agile Methodologies
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-3 text-green-300">
          <VSCodeIcon name="bookmark" className="w-5 h-5 mr-2 inline-block" />
          Work Experience
        </h2>
        <div className="space-y-4">
          <div className="border-l-2 border-green-400 pl-4 py-1">
            <h3 className="font-bold flex items-center">
              <VSCodeIcon name="code" className="w-4 h-4 mr-2 text-blue-400" />
              Senior Frontend Developer
            </h3>
            <p className="text-sm text-gray-400">TechCorp Inc. • 2021 - Present</p>
            <p className="mt-2">
              Leading UI development for enterprise web applications, mentoring junior developers,
              and implementing modern React patterns and best practices.
            </p>
          </div>
          <div className="border-l-2 border-green-400 pl-4 py-1">
            <h3 className="font-bold flex items-center">
              <VSCodeIcon name="code" className="w-4 h-4 mr-2 text-blue-400" />
              Web Developer
            </h3>
            <p className="text-sm text-gray-400">Digital Solutions Ltd. • 2018 - 2021</p>
            <p className="mt-2">
              Collaborated on full-stack web applications, implemented responsive designs,
              and worked with RESTful APIs in an agile environment.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-3 text-green-300">
          <VSCodeIcon name="mail-read" className="w-5 h-5 mr-2 inline-block" />
          Education
        </h2>
        <div className="border-l-2 border-green-400 pl-4 py-1">
          <h3 className="font-bold flex items-center">
            <VSCodeIcon name="check" className="w-4 h-4 mr-2 text-green-400" />
            BSc in Computer Science
          </h3>
          <p className="text-sm text-gray-400">University of Technology • 2014 - 2018</p>
          <p className="mt-2">
            Focused on software development, data structures, and web technologies.
            Graduated with honors.
          </p>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-3 text-green-300">
          <VSCodeIcon name="account" className="w-5 h-5 mr-2 inline-block" />
          What I'm Up To
        </h2>
        <p className="mb-3">
          When I'm not coding, you'll find me:
        </p>
        <ul className="space-y-2">
          <li className="flex items-start">
            <VSCodeIcon name="repo" className="w-5 h-5 mr-2 text-blue-400 mt-0.5" />
            <span>Contributing to open-source projects</span>
          </li>
          <li className="flex items-start">
            <VSCodeIcon name="code" className="w-5 h-5 mr-2 text-purple-400 mt-0.5" />
            <span>Learning new programming languages and frameworks</span>
          </li>
          <li className="flex items-start">
            <VSCodeIcon name="folder-opened" className="w-5 h-5 mr-2 text-green-400 mt-0.5" />
            <span>Exploring hiking trails and photographing landscapes</span>
          </li>
          <li className="flex items-start">
            <VSCodeIcon name="bookmark" className="w-5 h-5 mr-2 text-yellow-400 mt-0.5" />
            <span>Reading books on technology and science fiction</span>
          </li>
          <li className="flex items-start">
            <VSCodeIcon name="mail" className="w-5 h-5 mr-2 text-blue-400 mt-0.5" />
            <span>Attending tech meetups and conferences</span>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default AboutContent;