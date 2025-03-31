import TitleBar from './components/TitleBar';
import TabsContainer from './components/TabsContainer';
import ContentArea from './components/ContentArea';
import StatusBar from './components/StatusBar';

function App() {
  return (
    <div className="flex flex-col h-screen bg-[#1e1e1e] text-[#d4d4d4] font-mono">
      {/* Title Bar */}
      <TitleBar name="Dwaine Matthew" />
      
      {/* Tabs Container */}
      <TabsContainer />
      
      {/* Main Content Area */}
      <ContentArea />
      
      {/* Status Bar */}
      <StatusBar />
    </div>
  );
}

export default App;