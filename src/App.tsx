// src/App.tsx
import TitleBar from './components/TitleBar';
import TabsContainer from './components/TabsContainer';
import ContentArea from './components/ContentArea';
import StatusBar from './components/StatusBar';
import BackgroundManager from './components/BackgroundManager';

function App() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background layer (fixed position, behind everything) */}
      <div className="fixed inset-0 -z-10">
        <BackgroundManager />
      </div>
      
      {/* Content layer (above background) */}
      <div className="relative flex flex-col h-screen font-mono">
        {/* Title Bar */}
        <TitleBar name="Dwaine Matthew" />
        
        {/* Tabs Container */}
        <TabsContainer />
        
        {/* Main Content Area */}
        <ContentArea />
        
        {/* Status Bar */}
        <StatusBar />
      </div>
    </div>
  );
}

export default App;