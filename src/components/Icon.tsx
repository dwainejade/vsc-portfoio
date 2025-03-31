// src/components/Icon.tsx
import React from 'react';

// Define a type for the names of our icons
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

// Import all icon SVGs
// Dark theme icons
const darkIcons: Record<string, string> = {
  'add': '/src/assets/icons/dark/add.svg',
  'chevron-down': '/src/assets/icons/dark/chevron-down.svg',
  'chevron-up': '/src/assets/icons/dark/chevron-up.svg',
  'chevron-left': '/src/assets/icons/dark/chevron-left.svg',
  'chevron-right': '/src/assets/icons/dark/chevron-right.svg',
  'code': '/src/assets/icons/dark/code.svg',
  'folder': '/src/assets/icons/dark/folder-opened.svg',
  'folder-opened': '/src/assets/icons/dark/folder-opened.svg',
  'folder-active': '/src/assets/icons/dark/folder-active.svg',
  'account': '/src/assets/icons/dark/account.svg',
  'mail': '/src/assets/icons/dark/mail.svg',
  'mail-read': '/src/assets/icons/dark/mail-read.svg',
  'bookmark': '/src/assets/icons/dark/bookmark.svg',
  'check': '/src/assets/icons/dark/check.svg',
  'checklist': '/src/assets/icons/dark/checklist.svg',
  'cloud': '/src/assets/icons/dark/cloud.svg',
  'cloud-upload': '/src/assets/icons/dark/cloud-upload.svg',
  'file-media': '/src/assets/icons/dark/file-media.svg',
  'repo': '/src/assets/icons/dark/repo.svg',
};

// Light theme icons - add these when implementing light theme
const lightIcons: Record<string, string> = {
  'add': '/src/assets/icons/light/add.svg',
  'chevron-down': '/src/assets/icons/light/chevron-down.svg',
  'chevron-up': '/src/assets/icons/light/chevron-up.svg',
  'chevron-left': '/src/assets/icons/light/chevron-left.svg',
  'chevron-right': '/src/assets/icons/light/chevron-right.svg',
  'code': '/src/assets/icons/light/code.svg',
  // Add more light theme icons as needed
};

interface IconProps {
  name: IconName;
  className?: string;
  theme?: 'dark' | 'light';
}

/**
 * Component that displays SVG icons from VS Code
 */
const Icon: React.FC<IconProps> = ({ name, className = '', theme = 'dark' }) => {
  const iconSet = theme === 'dark' ? darkIcons : lightIcons;
  const iconPath = iconSet[name] || darkIcons['code']; // Fallback to 'code' icon
  
  // Inline SVG using an <img> tag - simplest approach
  return (
    <img 
      src={iconPath} 
      alt={`${name} icon`} 
      className={`w-4 h-4 ${className}`}
      style={{ filter: 'brightness(1)' }} // Adjust as needed for different themes
    />
  );
};

export default Icon;