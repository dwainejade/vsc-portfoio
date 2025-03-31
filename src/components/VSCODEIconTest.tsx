// src/components/VSCodeIconTest.tsx
import React from 'react';
import VSCodeIcon, { VSCodeIconName } from './VSCodeIcon';

const VSCodeIconTest: React.FC = () => {
  // List of all icons to display
  const icons: VSCodeIconName[] = [
    'chevron-down',
    'chevron-up',
    'chevron-left',
    'chevron-right',
    'folder',
    'folder-opened',
    'folder-active',
    'code',
    'account',
    'mail',
    'mail-read',
    'bookmark',
    'add',
    'check',
    'checklist',
    'cloud',
    'cloud-upload',
    'file-media',
    'repo'
  ];

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-6 text-blue-400">VS Code Icons</h1>
      
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 mb-8">
        {icons.map((iconName) => (
          <div 
            key={iconName}
            className="flex flex-col items-center p-4 bg-[#2d2d2d] rounded border border-[#3d3d3d] hover:border-[#007acc]"
          >
            <div className="w-8 h-8 flex items-center justify-center mb-2">
              <VSCodeIcon name={iconName} className="w-6 h-6" />
            </div>
            <span className="text-xs text-center">{iconName}</span>
          </div>
        ))}
      </div>
      
      <h2 className="text-xl font-bold mb-4 text-blue-400">Color Examples</h2>
      <div className="grid grid-cols-4 gap-4 mb-8">
        <div className="flex flex-col items-center p-3 bg-[#2d2d2d] rounded">
          <VSCodeIcon name="code" className="w-6 h-6 text-blue-400 mb-2" />
          <span className="text-xs">blue-400</span>
        </div>
        <div className="flex flex-col items-center p-3 bg-[#2d2d2d] rounded">
          <VSCodeIcon name="code" className="w-6 h-6 text-green-400 mb-2" />
          <span className="text-xs">green-400</span>
        </div>
        <div className="flex flex-col items-center p-3 bg-[#2d2d2d] rounded">
          <VSCodeIcon name="code" className="w-6 h-6 text-yellow-400 mb-2" />
          <span className="text-xs">yellow-400</span>
        </div>
        <div className="flex flex-col items-center p-3 bg-[#2d2d2d] rounded">
          <VSCodeIcon name="code" className="w-6 h-6 text-red-400 mb-2" />
          <span className="text-xs">red-400</span>
        </div>
      </div>
      
      <h2 className="text-xl font-bold mb-4 text-blue-400">Size Examples</h2>
      <div className="flex items-end space-x-6">
        <div className="flex flex-col items-center">
          <VSCodeIcon name="folder" className="w-4 h-4 mb-2" />
          <span className="text-xs">w-4 h-4</span>
        </div>
        <div className="flex flex-col items-center">
          <VSCodeIcon name="folder" className="w-6 h-6 mb-2" />
          <span className="text-xs">w-6 h-6</span>
        </div>
        <div className="flex flex-col items-center">
          <VSCodeIcon name="folder" className="w-8 h-8 mb-2" />
          <span className="text-xs">w-8 h-8</span>
        </div>
        <div className="flex flex-col items-center">
          <VSCodeIcon name="folder" className="w-12 h-12 mb-2" />
          <span className="text-xs">w-12 h-12</span>
        </div>
      </div>
      
      <div className="mt-8 p-4 bg-[#2d2d2d] rounded border border-[#3d3d3d]">
        <h3 className="text-lg font-semibold mb-2 text-blue-400">Usage Example</h3>
        <pre className="bg-[#1e1e1e] p-3 rounded overflow-x-auto text-sm">
          {`import VSCodeIcon from './components/VSCodeIcon';

// In your component:
<VSCodeIcon name="folder" className="text-blue-400" />`}
        </pre>
      </div>
    </div>
  );
};

export default VSCodeIconTest;