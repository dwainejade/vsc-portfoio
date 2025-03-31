// src/components/VSCodeIcon.tsx
import React, { useState, useEffect } from 'react';

export type VSCodeIconName = 
  | 'chevron-down'
  | 'chevron-up'
  | 'chevron-left'
  | 'chevron-right'
  | 'folder'
  | 'folder-opened'
  | 'folder-active'
  | 'code'
  | 'account'
  | 'mail'
  | 'mail-read'
  | 'bookmark'
  | 'add'
  | 'check'
  | 'checklist'
  | 'cloud'
  | 'cloud-upload'
  | 'file-media'
  | 'repo';

// Use Vite's import.meta.glob to dynamically import all SVG files
const darkIconModules = import.meta.glob('../assets/icons/dark/*.svg', { eager: true });
const lightIconModules = import.meta.glob('../assets/icons/light/*.svg', { eager: true });

// Create icon maps from the dynamically imported modules
const darkIcons: Record<string, string> = {};
const lightIcons: Record<string, string> = {};

// Process dark theme icons
Object.entries(darkIconModules).forEach(([path, module]) => {
  // Extract the icon name from the path (e.g., '../assets/icons/dark/code.svg' -> 'code')
  const match = path.match(/\/([^/]+)\.svg$/);
  if (match && match[1]) {
    darkIcons[match[1]] = (module as any).default;
  }
});

// Process light theme icons
Object.entries(lightIconModules).forEach(([path, module]) => {
  const match = path.match(/\/([^/]+)\.svg$/);
  if (match && match[1]) {
    lightIcons[match[1]] = (module as any).default;
  }
});

interface VSCodeIconProps {
  name: VSCodeIconName;
  className?: string;
  theme?: 'dark' | 'light';
}

const VSCodeIcon: React.FC<VSCodeIconProps> = ({ 
  name, 
  className = '', 
  theme = 'dark' 
}) => {
  // Select the appropriate icon based on the theme
  const icons = theme === 'dark' ? darkIcons : lightIcons;
  const iconSrc = icons[name];
  
  if (!iconSrc) {
    console.warn(`Icon "${name}" not found for theme "${theme}"`);
    return <span className={`inline-block ${className}`}></span>;
  }

  return (
    <span className={`inline-block ${className}`}>
      <img 
        src={iconSrc} 
        alt={`${name} icon`}
        className="w-full h-full"
      />
    </span>
  );
};

export default VSCodeIcon;