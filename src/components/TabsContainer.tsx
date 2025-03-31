import React, { useRef, useEffect, useState } from 'react';
import Tab from './Tab';
import useStore from '../stores/useStore';

const TabsContainer: React.FC = () => {
  const { tabs, reorderTabs } = useStore();
  const containerRef = useRef<HTMLDivElement>(null);
  const [draggedTab, setDraggedTab] = useState<string | null>(null);
  const [draggedOverTab, setDraggedOverTab] = useState<string | null>(null);

  useEffect(() => {
    // Scroll to the active tab when tabs change
    const scrollToActiveTab = () => {
      if (!containerRef.current) return;
      
      const activeTab = containerRef.current.querySelector('[data-active="true"]');
      if (activeTab) {
        const containerRect = containerRef.current.getBoundingClientRect();
        const activeTabRect = activeTab.getBoundingClientRect();
        
        // Check if the active tab is outside the visible area
        if (activeTabRect.left < containerRect.left || activeTabRect.right > containerRect.right) {
          activeTab.scrollIntoView({
            behavior: 'smooth',
            block: 'nearest',
            inline: 'nearest'
          });
        }
      }
    };
    
    scrollToActiveTab();
  }, [tabs]);

  // Handle wheel scrolling for horizontal scroll
  const handleWheel = (e: React.WheelEvent<HTMLDivElement>) => {
    if (containerRef.current) {
      e.preventDefault();
      containerRef.current.scrollLeft += e.deltaY;
    }
  };

  // Drag and Drop handlers
  const handleDragStart = (id: string) => {
    setDraggedTab(id);
  };

  const handleDragOver = (e: React.DragEvent, id: string) => {
    e.preventDefault();
    if (draggedTab !== id) {
      setDraggedOverTab(id);
    }
  };

  const handleDragEnd = () => {
    if (draggedTab && draggedOverTab) {
      const startIndex = tabs.findIndex(tab => tab.id === draggedTab);
      const endIndex = tabs.findIndex(tab => tab.id === draggedOverTab);
      
      if (startIndex !== -1 && endIndex !== -1) {
        reorderTabs(startIndex, endIndex);
      }
    }
    
    setDraggedTab(null);
    setDraggedOverTab(null);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    handleDragEnd();
  };

  return (
    <div 
      ref={containerRef}
      className="flex bg-[#2d2d2d] border-b border-black overflow-x-auto no-scrollbar"
      onWheel={handleWheel}
      onDragOver={(e) => e.preventDefault()}
      onDrop={handleDrop}
    >
      {tabs.map(tab => (
        <Tab 
          key={tab.id}
          id={tab.id}
          title={tab.title}
          extension={tab.extension}
          icon={tab.icon}
          isActive={tab.isActive}
          data-active={tab.isActive}
          isDragging={draggedTab === tab.id}
          isDraggedOver={draggedOverTab === tab.id}
          onDragStart={() => handleDragStart(tab.id)}
          onDragOver={(e) => handleDragOver(e, tab.id)}
          onDragEnd={handleDragEnd}
        />
      ))}
    </div>
  );
};

export default TabsContainer;