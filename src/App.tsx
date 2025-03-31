// src/App.tsx
import TabsContainer from './components/TabsContainer';
import useStore from './stores/useStore';

function App() {
  const { activeTabId } = useStore();

  // Render content based on active tab
  const renderContent = () => {
    switch (activeTabId) {
      case 'home':
        return (
          <div className="p-4">
            <h1 className="text-2xl font-bold mb-4 text-blue-400">Welcome to My VSCode Portfolio</h1>
            <p className="mb-4">This is a VSCode-inspired portfolio showcasing my work and skills.</p>
            <p className="mb-4">Click on the tabs above to navigate through different sections.</p>
          </div>
        );
      case 'about':
        return (
          <div className="p-4">
            <h1 className="text-2xl font-bold mb-4 text-green-400">About Me</h1>
            <p>This is the about page content.</p>
          </div>
        );
      case 'projects':
        return (
          <div className="p-4">
            <h1 className="text-2xl font-bold mb-4 text-yellow-400">Projects</h1>
            <p>This is the projects page content.</p>
          </div>
        );
      case 'contact':
        return (
          <div className="p-4">
            <h1 className="text-2xl font-bold mb-4 text-purple-400">Contact</h1>
            <p>This is the contact page content.</p>
          </div>
        );
      default:
        return <div>No content available</div>;
    }
  };

  return (
    <div className="flex flex-col h-screen bg-[#1e1e1e] text-[#d4d4d4] font-mono">
      {/* Title Bar */}
      <div className="h-8 bg-[#1e1e1e] border-b border-black flex items-center px-4 text-xs">
        VSCode Portfolio - Your Name
      </div>
      
      {/* Tabs Container */}
      <TabsContainer />
      
      {/* Content Area */}
      <div className="flex-1 overflow-auto">
        {renderContent()}
      </div>
    </div>
  );
}

export default App;