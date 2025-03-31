// src/types/tab.ts

export interface Tab {
    id: string;
    title: string;
    extension: string;
    icon: string;
    isActive: boolean;
  }
  
  export interface TabProps extends Tab {
    onClick: (id: string) => void;
    onClose: (id: string, e: React.MouseEvent) => void;
  }