// src/components/TabsContainer.tsx
import React, { useRef, useEffect } from 'react';
import Tab from './Tab';
import useStore from '../stores/useStore';

const TabsContainer: React.FC = () => {
  const { tabs } = useStore();
  const containerRef = useRef<HTMLDivElement>(null);

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

  return (
    <div 
      ref={containerRef}
      className="flex bg-[#2d2d2d] border-b border-black overflow-x-auto scrollbar-hide"
      onWheel={handleWheel}
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
        />
      ))}
    </div>
  );
};

export default TabsContainer;