// src/components/TitleBar.tsx
import React from 'react';

interface TitleBarProps {
  name: string;
}

const TitleBar: React.FC<TitleBarProps> = ({ name }) => {
  return (
    <div className="h-8 bg-[#1e1e1e] border-b border-black flex items-center px-4 text-xs">
      VSCode Portfolio - {name}
    </div>
  );
};

export default TitleBar;