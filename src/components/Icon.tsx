// src/components/Icon.tsx
import React from 'react';
import AddIcon from '/src/assets/icons/dark/add.svg';
import ChevronDownIcon from '/src/assets/icons/dark/chevron-down.svg';
import ChevronUpIcon from '/src/assets/icons/dark/chevron-up.svg';
import ChevronLeftIcon from '/src/assets/icons/dark/chevron-left.svg';
import ChevronRightIcon from '/src/assets/icons/dark/chevron-right.svg';
import CodeIcon from '/src/assets/icons/dark/code.svg';
import FolderIcon from '/src/assets/icons/dark/folder.svg';
import FolderOpenedIcon from '/src/assets/icons/dark/folder-opened.svg';
import FolderActiveIcon from '/src/assets/icons/dark/folder-active.svg';
import AccountIcon from '/src/assets/icons/dark/account.svg';
import MailIcon from '/src/assets/icons/dark/mail.svg';
import MailReadIcon from '/src/assets/icons/dark/mail-read.svg';
import BookmarkIcon from '/src/assets/icons/dark/bookmark.svg';
import CheckIcon from '/src/assets/icons/dark/check.svg';
import ChecklistIcon from '/src/assets/icons/dark/checklist.svg';
import CloudIcon from '/src/assets/icons/dark/cloud.svg';
import CloudUploadIcon from '/src/assets/icons/dark/cloud-upload.svg';
import FileMediaIcon from '/src/assets/icons/dark/file-media.svg';
import RepoIcon from '/src/assets/icons/dark/repo.svg';

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

const iconMap: Record<IconName, string> = {
  'add': AddIcon,
  'chevron-down': ChevronDownIcon,
  'chevron-up': ChevronUpIcon,
  'chevron-left': ChevronLeftIcon,
  'chevron-right': ChevronRightIcon,
  'code': CodeIcon,
  'folder': FolderIcon,
  'folder-opened': FolderOpenedIcon,
  'folder-active': FolderActiveIcon,
  'account': AccountIcon,
  'mail': MailIcon,
  'mail-read': MailReadIcon,
  'bookmark': BookmarkIcon,
  'check': CheckIcon,
  'checklist': ChecklistIcon,
  'cloud': CloudIcon,
  'cloud-upload': CloudUploadIcon,
  'file-media': FileMediaIcon,
  'repo': RepoIcon,
};

interface IconProps {
  name: IconName;
  className?: string;
}

/**
 * Component that displays SVG icons from VS Code
 */
const Icon: React.FC<IconProps> = ({ name, className = '' }) => {
  const iconPath = iconMap[name] || CodeIcon; // Fallback to 'code' icon
  
  return (
    <img 
      src={iconPath} 
      alt={`${name} icon`} 
      className={`w-4 h-4 ${className}`}
    />
  );
};

export default Icon;