import React, { useState } from 'react';
import useStore from '../stores/useStore';
import { Tab } from '../types/tab';

// Icons as functional components for better rendering
const FolderIcon: React.FC<{ isOpen?: boolean }> = ({ isOpen = false }) => (
  <span className="mr-1">{isOpen ? '📂' : '📁'}</span>
);

const FileIcon: React.FC<{ type: string }> = ({ type }) => {
  // Map file extensions to appropriate icons
  const iconMap: Record<string, string> = {
    tsx: '📄',
    ts: '📑',
    md: '📋',
    json: '📧',
    default: '📄'
  };

  return <span className="mr-1">{iconMap[type] || iconMap.default}</span>;
};

// Folder interface
interface Folder {
  id: string;
  name: string;
  files: Array<Omit<Tab, 'isActive'>>;
  isOpen: boolean;
}

// Section enum for sidebar sections
enum SidebarSection {
  EXPLORER = 'explorer',
  RECENTLY_CLOSED = 'recentlyClosed'
}

const SideBar: React.FC = () => {
  const { tabs, openTab, recentlyClosed, reopenLastClosedTab } = useStore();
  const [activeSection, setActiveSection] = useState<SidebarSection>(SidebarSection.EXPLORER);
  
  // Initialize folders state
  const [folders, setFolders] = useState<Folder[]>([
    {
      id: 'portfolio',
      name: 'Portfolio',
      files: [
        { id: 'home', title: 'Home', extension: 'tsx', icon: '📄' },
        { id: 'about', title: 'About-Me', extension: 'md', icon: '📋' },
        { id: 'projects', title: 'Projects', extension: 'ts', icon: '🗂️' },
        { id: 'contact', title: 'Contact', extension: 'json', icon: '📧' }
      ],
      isOpen: true
    },
    {
      id: 'blog',
      name: 'Blog',
      files: [
        { id: 'blog-post-1', title: 'first-post', extension: 'md', icon: '📋' },
        { id: 'blog-post-2', title: 'second-post', extension: 'md', icon: '📋' }
      ],
      isOpen: false
    }
  ]);

  // Toggle folder open/closed
  const toggleFolder = (folderId: string) => {
    setFolders(folders.map(folder => 
      folder.id === folderId 
        ? { ...folder, isOpen: !folder.isOpen } 
        : folder
    ));
  };

  // Handle file click
  const handleFileClick = (file: Omit<Tab, 'isActive'>) => {
    openTab(file);
  };

  // Check if file is currently open in tabs
  const isFileOpen = (fileId: string) => {
    return tabs.some(tab => tab.id === fileId);
  };

  // Switch between sidebar sections
  const switchSection = (section: SidebarSection) => {
    setActiveSection(section);
  };

  return (
    <div className="w-64 h-full bg-[#252526] border-r border-[#1e1e1e] overflow-y-auto scrollbar-hide">
      {/* Sidebar Tabs */}
      <div className="flex border-b border-[#1e1e1e] bg-[#252526]">
        <div 
          className={`px-4 py-2 text-xs cursor-pointer ${activeSection === SidebarSection.EXPLORER ? 'border-b-2 border-[#007acc]' : ''}`}
          onClick={() => switchSection(SidebarSection.EXPLORER)}
        >
          EXPLORER
        </div>
        {/* <div 
          className={`px-4 py-2 text-xs cursor-pointer ${activeSection === SidebarSection.RECENTLY_CLOSED ? 'border-b-2 border-[#007acc]' : ''}`}
          onClick={() => switchSection(SidebarSection.RECENTLY_CLOSED)}
        >
          RECENTLY CLOSED
        </div> */}
      </div>
      
      {/* Explorer Section */}
      {activeSection === SidebarSection.EXPLORER && (
        <div className="text-sm text-[#cccccc]">
          <div className="p-2 text-sm uppercase text-[#bbbbbb] flex items-center justify-between">
            <span>Files</span>
            <span className="text-xs cursor-pointer hover:bg-[#2d2d2d] w-6 h-6 flex items-center justify-center rounded">
              •••
            </span>
          </div>
          
          {folders.map(folder => (
            <div key={folder.id}>
              <div 
                className="px-2 py-1 cursor-pointer hover:bg-[#2d2d2d] flex items-center"
                onClick={() => toggleFolder(folder.id)}
              >
                <span className="mr-1 w-4 inline-block">
                  {folder.isOpen ? '▼' : '►'}
                </span>
                <FolderIcon isOpen={folder.isOpen} />
                <span>{folder.name}</span>
              </div>
              
              {folder.isOpen && (
                <div className="ml-4">
                  {folder.files.map(file => (
                    <div 
                      key={file.id}
                      className={`px-2 py-1 cursor-pointer flex items-center
                        ${isFileOpen(file.id) ? 'text-white' : 'text-[#cccccc]'}
                        hover:bg-[#2d2d2d]`}
                      onClick={() => handleFileClick(file)}
                    >
                      <FileIcon type={file.extension} />
                      <span>{file.title}.{file.extension}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
      
      {/* Recently Closed Section */}
      {activeSection === SidebarSection.RECENTLY_CLOSED && (
        <div className="text-sm text-[#cccccc]">
          <div className="p-2 text-sm uppercase text-[#bbbbbb] flex items-center justify-between">
            <span>Recently Closed</span>
            <button 
              className="text-xs hover:bg-[#2d2d2d] px-2 py-1 rounded"
              onClick={reopenLastClosedTab}
              disabled={recentlyClosed.length === 0}
              title="Reopen Last Closed"
            >
              Reopen Last
            </button>
          </div>
          
          {recentlyClosed.length === 0 ? (
            <div className="px-4 py-2 text-gray-500 italic">
              No recently closed tabs
            </div>
          ) : (
            <div>
              {recentlyClosed.map(file => (
                <div 
                  key={file.id}
                  className="px-2 py-1 cursor-pointer flex items-center hover:bg-[#2d2d2d]"
                  onClick={() => handleFileClick(file)}
                >
                  <FileIcon type={file.extension} />
                  <span>{file.title}.{file.extension}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default SideBar;