// src/types/tab.ts
import { IconName } from '../components/Icon';

export interface Tab {
  id: string;
  title: string;
  extension: string;
  icon: string; // For backward compatibility, will be replaced with IconName
  isActive: boolean;
}

export interface TabProps extends Tab {
  onClick: (id: string) => void;
  onClose: (id: string, e: React.MouseEvent) => void;
}

// Future improved Tab interface with proper icon typing
export interface ImprovedTab {
  id: string;
  title: string;
  extension: string;
  iconName: IconName; // Use specific icon names from our Icon component
  isActive: boolean;
}