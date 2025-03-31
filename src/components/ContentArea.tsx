import React from 'react';
import SideBar from './SideBar';
import HomeContent from './content/HomeContent';
import AboutContent from './content/AboutContent';
import ProjectsContent from './content/ProjectsContent';
import ContactContent from './content/ContactContent';
import BlogPost1 from './content/BlogPost1';
import BlogPost2 from './content/BlogPost2';
import VSCodeIconTest from './VSCodeIconTest';
import useStore from '../stores/useStore';

const ContentArea: React.FC = () => {
  const { activeTabId } = useStore();

  // Render content based on active tab
  const renderContent = () => {
    switch (activeTabId) {
      case 'home':
        return <HomeContent />;
      case 'about':
        return <AboutContent />;
      case 'projects':
        return <ProjectsContent />;
      case 'contact':
        return <ContactContent />;
      case 'blog-post-1':
        return <BlogPost1 />;
      case 'blog-post-2':
        return <BlogPost2 />;
      case 'icons':
        return <VSCodeIconTest />;
      default:
        return <div className="p-4">No content available for this tab</div>;
    }
  };

  return (
    <div className="flex flex-1 overflow-hidden">
      {/* Sidebar */}
      <SideBar />
      
      {/* Content */}
      <div className="flex-1 overflow-auto">
        {renderContent()}
      </div>
    </div>
  );
};

export default ContentArea;