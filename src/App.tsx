// src/App.tsx
import TabsContainer from './components/TabsContainer';
import SideBar from './components/SideBar';
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
            <p className="mb-4">Use the sidebar explorer to browse different file sections.</p>
          </div>
        );
      case 'about':
        return (
          <div className="p-4">
            <h1 className="text-2xl font-bold mb-4 text-green-400">About Me</h1>
            <p className="mb-4">I'm a passionate developer with expertise in React, TypeScript, and UI design.</p>
            <p className="mb-4">My journey in web development started in [Year] and I've been crafting digital experiences ever since.</p>
            <ul className="list-disc pl-5 mb-4">
              <li>Frontend Development</li>
              <li>UI/UX Design</li>
              <li>TypeScript & JavaScript</li>
              <li>React & Next.js</li>
            </ul>
          </div>
        );
      case 'projects':
        return (
          <div className="p-4">
            <h1 className="text-2xl font-bold mb-4 text-yellow-400">Projects</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="border border-gray-700 p-4 rounded">
                <h2 className="text-xl font-semibold mb-2">Project One</h2>
                <p className="text-sm text-gray-400 mb-2">React, TypeScript, TailwindCSS</p>
                <p>A brief description of this amazing project.</p>
              </div>
              <div className="border border-gray-700 p-4 rounded">
                <h2 className="text-xl font-semibold mb-2">Project Two</h2>
                <p className="text-sm text-gray-400 mb-2">Next.js, GraphQL</p>
                <p>A brief description of another fantastic project.</p>
              </div>
            </div>
          </div>
        );
      case 'contact':
        return (
          <div className="p-4">
            <h1 className="text-2xl font-bold mb-4 text-purple-400">Contact</h1>
            <p className="mb-4">Feel free to reach out to me through any of these channels:</p>
            <ul className="space-y-2">
              <li>
                <span className="font-semibold">Email:</span> your.email@example.com
              </li>
              <li>
                <span className="font-semibold">GitHub:</span> github.com/yourusername
              </li>
              <li>
                <span className="font-semibold">LinkedIn:</span> linkedin.com/in/yourusername
              </li>
              <li>
                <span className="font-semibold">Twitter:</span> @yourusername
              </li>
            </ul>
          </div>
        );
      case 'blog-post-1':
        return (
          <div className="p-4">
            <h1 className="text-2xl font-bold mb-4 text-indigo-400">My First Blog Post</h1>
            <p className="text-sm text-gray-400 mb-4">Published on March 15, 2025</p>
            <p className="mb-4">This is the content of my first blog post. It's a placeholder that you can replace with your actual content.</p>
            <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
        );
      case 'blog-post-2':
        return (
          <div className="p-4">
            <h1 className="text-2xl font-bold mb-4 text-pink-400">My Second Blog Post</h1>
            <p className="text-sm text-gray-400 mb-4">Published on March 25, 2025</p>
            <p className="mb-4">Welcome to my second blog post! This is where I share my thoughts on recent technologies.</p>
            <p className="mb-4">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          </div>
        );
      default:
        return <div className="p-4">No content available for this tab</div>;
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
      
      {/* Main Content Area with Sidebar */}
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <SideBar />
        
        {/* Content */}
        <div className="flex-1 overflow-auto">
          {renderContent()}
        </div>
      </div>
    </div>
  );
}

export default App;