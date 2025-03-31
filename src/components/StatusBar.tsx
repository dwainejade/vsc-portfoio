import React from 'react';

const StatusBar: React.FC = () => {
  return (
    <div className="h-6 bg-[#007acc] flex items-center px-4 text-xs text-white">
      <span className="mr-4">Ln 1, Col 1</span>
      <span className="mr-4">TypeScript</span>
      <span className="mr-4">UTF-8</span>
      <span className="mr-4">2 spaces</span>
      <div className="flex-1"></div>
      <span>Made with React & TypeScript</span>
    </div>
  );
};

export default StatusBar;