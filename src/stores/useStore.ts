// src/store/useTabStore.ts
import { create } from 'zustand';
import { Tab } from '../types/tab';

interface TabState {
  tabs: Tab[];
  activeTabId: string;
  setActiveTab: (tabId: string) => void;
  closeTab: (tabId: string) => void;
  openTab: (tab: Omit<Tab, 'isActive'>) => void;
}

const initialTabs: Tab[] = [
  { id: 'home', title: 'home', extension: 'tsx', icon: '📄', isActive: true },
  { id: 'about', title: 'about-me', extension: 'md', icon: '📋', isActive: false },
  { id: 'projects', title: 'projects', extension: 'ts', icon: '🗂️', isActive: false },
  { id: 'contact', title: 'contact', extension: 'json', icon: '📧', isActive: false },
];

export const useStore = create<TabState>((set) => ({
  tabs: initialTabs,
  activeTabId: 'home',
  
  setActiveTab: (tabId: string) => set((state) => ({
    activeTabId: tabId,
    tabs: state.tabs.map(tab => ({
      ...tab,
      isActive: tab.id === tabId
    }))
  })),
  
  closeTab: (tabId: string) => set((state) => {
    // Don't close if it's the last tab
    if (state.tabs.length <= 1) {
      return state;
    }
    
    const isClosingActiveTab = tabId === state.activeTabId;
    const filteredTabs = state.tabs.filter(tab => tab.id !== tabId);
    
    // If closing the active tab, activate another tab
    let newActiveTabId = state.activeTabId;
    if (isClosingActiveTab && filteredTabs.length > 0) {
      newActiveTabId = filteredTabs[0].id;
      filteredTabs[0] = { ...filteredTabs[0], isActive: true };
    }
    
    return {
      tabs: filteredTabs,
      activeTabId: newActiveTabId
    };
  }),
  
  openTab: (tab: Omit<Tab, 'isActive'>) => set((state) => {
    // Check if tab already exists
    const existingTab = state.tabs.find(t => t.id === tab.id);
    
    if (existingTab) {
      // If it exists, just activate it
      return {
        activeTabId: tab.id,
        tabs: state.tabs.map(t => ({
          ...t,
          isActive: t.id === tab.id
        }))
      };
    } else {
      // If it doesn't exist, add it
      return {
        activeTabId: tab.id,
        tabs: state.tabs.map(t => ({
          ...t,
          isActive: false
        })).concat({
          ...tab,
          isActive: true
        })
      };
    }
  })
}));

export default useStore;