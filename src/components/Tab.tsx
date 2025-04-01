import React from 'react';
import { Tab as TabType } from '../types/tab';
import useStore from '../stores/useStore';
import VSCodeIcon, { VSCodeIconName } from './VSCodeIcon';

// File extension to icon name mapping
const getFileIcon = (extension: string): VSCodeIconName => {
  const iconMap: Record<string, VSCodeIconName> = {
    tsx: 'code',
    ts: 'code',
    md: 'file-media',
    json: 'repo'
  };
  
  return iconMap[extension] || 'code';
};

interface TabProps extends Omit<TabType, 'isActive'> {
  isActive: boolean;
  'data-active'?: boolean;
  isDragging?: boolean;
  isDraggedOver?: boolean;
  onDragStart?: () => void;
  onDragOver?: (e: React.DragEvent) => void;
  onDragEnd?: () => void;
}

const Tab: React.FC<TabProps> = ({ 
  id, 
  title, 
  extension, 
  icon, 
  isActive,
  'data-active': dataActive,
  isDragging = false,
  isDraggedOver = false,
  onDragStart,
  onDragOver,
  onDragEnd
}) => {
  const { setActiveTab, closeTab } = useStore();

  const handleTabClick = () => {
    setActiveTab(id);
  };

  const handleTabClose = (e: React.MouseEvent) => {
    e.stopPropagation();
    closeTab(id);
  };

  return (
    <div 
      className={`
        flex items-center h-9 px-4 cursor-pointer whitespace-nowrap select-none
        border-r border-[#1e1e1e] relative
        ${isActive ? 'bg-[#1e1e1e] border-t-2 border-t-[#007acc]' : 'bg-[#2d2d2d]'}
        ${isDragging ? 'opacity-50' : ''}
        ${isDraggedOver ? 'drop-tab' : ''}
      `}
      onClick={handleTabClick}
      data-active={dataActive}
      draggable
      onDragStart={onDragStart}
      onDragOver={onDragOver}
      onDragEnd={onDragEnd}
    >
      <div className="w-4 h-4 flex items-center justify-center mr-2">
        <VSCodeIcon name={getFileIcon(extension)} />
      </div>
      <span className="mr-1">{title}</span>
      <span className="opacity-60">.{extension}</span>
      <div 
        className="ml-2 w-4 h-4 flex items-center justify-center rounded hover:bg-[rgba(255,255,255,0.1)]"
        onClick={handleTabClose}
      >
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M8 8.70711L11.6464 12.3536L12.3536 11.6464L8.70711 8L12.3536 4.35355L11.6464 3.64645L8 7.29289L4.35355 3.64645L3.64645 4.35355L7.29289 8L3.64645 11.6464L4.35355 12.3536L8 8.70711Z" fill="#C5C5C5"/>
        </svg>
      </div>
    </div>
  );
};

export default Tab;