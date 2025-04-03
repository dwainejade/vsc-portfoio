import React, { useState } from 'react';
import { Tab as TabType } from '../types/tab';
import useStore from '../stores/useStore';

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
  const [isHovered, setIsHovered] = useState(false);

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
        ${isActive 
          ? 'bg-[#1e1e1e] border-t-2 border-t-[#007acc]' 
          : 'bg-[#2d2d2d] hover:bg-[#3a3a3a]'}
        ${isDragging ? 'opacity-50' : ''}
        ${isDraggedOver ? 'drop-tab' : ''}
      `}
      onClick={handleTabClick}
      data-active={dataActive}
      draggable
      onDragStart={onDragStart}
      onDragOver={onDragOver}
      onDragEnd={onDragEnd}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="w-4 h-4 flex items-center justify-center mr-2">
        {icon}
      </div>
      <span className="mr-1">{title}</span>
      <span className="opacity-60">.{extension}</span>
        <div 
          className="ml-2 w-4 h-4 flex items-center justify-center rounded hover:bg-[rgba(255,255,255,0.1)]"
          onClick={handleTabClose}
        >
          <span
          className={`${(isActive || isHovered ) ? 'opacity-100' : 'opacity-0'}`}
          >x</span>
        </div>
    </div>
  );
};

export default Tab;