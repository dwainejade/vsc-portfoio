// src/components/TabsContainer.tsx
import React from 'react';
import Tab from './Tab';
import useStore from '../stores/useStore';

const TabsContainer: React.FC = () => {
  const { tabs } = useStore();

  return (
    <div className="flex bg-[#2d2d2d] border-b border-black overflow-x-auto">
      {tabs.map(tab => (
        <Tab 
          key={tab.id}
          id={tab.id}
          title={tab.title}
          extension={tab.extension}
          icon={tab.icon}
          isActive={tab.isActive}
        />
      ))}
    </div>
  );
};

export default TabsContainer;