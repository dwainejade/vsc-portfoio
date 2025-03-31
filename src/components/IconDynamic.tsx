// src/components/IconDynamic.tsx
import React from 'react';

export type IconName = 
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

/**
 * A dynamic icon component that uses VS Code SVG icons
 * This approach loads SVGs from public folder at runtime
 */
interface IconProps {
  name: IconName;
  className?: string;
  theme?: 'dark' | 'light';
}

const IconDynamic: React.FC<IconProps> = ({ name, className = '', theme = 'dark' }) => {
  // Public folder is the safest place for assets that need to be loaded at runtime
  const iconPath = `/icons/${theme}/${name}.svg`;
  
  // Using an img tag is the most reliable way to display SVGs loaded at runtime
  return (
    <img 
      src={iconPath} 
      alt={`${name} icon`} 
      className={`inline-block w-4 h-4 ${className}`}
    />
  );
};

export default IconDynamic;