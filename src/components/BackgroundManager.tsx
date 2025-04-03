// src/components/BackgroundManager.tsx
import ShowerGlassCircles from './ShowerGlassCircles';
import useStore from '../stores/useStore';
import backgroundConfigs, { PageId } from '../config/backgroundConfigs';

const BackgroundManager: React.FC = () => {
  const { activeTabId } = useStore();
  
  // Set a default fallback in case activeTabId doesn't match any PageId
  let currentConfig = backgroundConfigs.home;
  
  // Find matching config or use home as default
  if (activeTabId && backgroundConfigs[activeTabId as PageId]) {
    currentConfig = backgroundConfigs[activeTabId as PageId];
  }
  
  return (
    <ShowerGlassCircles
      width="100%"
      height="100%"
      backgroundColor={currentConfig.backgroundColor}
      glassBlur={currentConfig.glassBlur}
      glassOpacity={currentConfig.glassOpacity}
      animated={true} // Always animate to enable position transitions
      predefinedCircles={currentConfig.predefinedCircles}
    />
  );
};

export default BackgroundManager;