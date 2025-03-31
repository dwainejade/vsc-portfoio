// src/stores/useStore.ts - updated version
import { create } from 'zustand';
import { Tab } from '../types/tab';

interface TabState {
  tabs: Tab[];
  activeTabId: string;
  recentlyClosed: Omit<Tab, 'isActive'>[];
  setActiveTab: (tabId: string) => void;
  closeTab: (tabId: string) => void;
  openTab: (tab: Omit<Tab, 'isActive'>) => void;
  reopenLastClosedTab: () => void;
  reorderTabs: (startIndex: number, endIndex: number) => void;
}

const initialTabs: Tab[] = [
  { id: 'home', title: 'Home', extension: 'tsx', icon: '📄', isActive: true },
  { id: 'about', title: 'About-Me', extension: 'md', icon: '📋', isActive: false },
  { id: 'projects', title: 'Projects', extension: 'ts', icon: '🗂️', isActive: false },
  { id: 'contact', title: 'Contact', extension: 'json', icon: '📧', isActive: false },
  { id: 'icons', title: 'Icons', extension: 'tsx', icon: '🎨', isActive: false },
];

export const useStore = create<TabState>((set) => ({
  tabs: initialTabs,
  activeTabId: 'home',
  recentlyClosed: [],
  
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
    const tabToClose = state.tabs.find(tab => tab.id === tabId);
    const filteredTabs = state.tabs.filter(tab => tab.id !== tabId);
    
    // If closing the active tab, activate another tab
    let newActiveTabId = state.activeTabId;
    if (isClosingActiveTab && filteredTabs.length > 0) {
      newActiveTabId = filteredTabs[0].id;
      filteredTabs[0] = { ...filteredTabs[0], isActive: true };
    }
    
    // Add the closed tab to the recently closed list
    const updatedRecentlyClosed = tabToClose 
      ? [{ id: tabToClose.id, title: tabToClose.title, extension: tabToClose.extension, icon: tabToClose.icon }, ...state.recentlyClosed.slice(0, 9)]
      : state.recentlyClosed;
    
    return {
      tabs: filteredTabs,
      activeTabId: newActiveTabId,
      recentlyClosed: updatedRecentlyClosed
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
  }),
  
  reorderTabs: (startIndex: number, endIndex: number) => set((state) => {
    const newTabs = [...state.tabs];
    const [removed] = newTabs.splice(startIndex, 1);
    newTabs.splice(endIndex, 0, removed);
    
    return {
      tabs: newTabs
    };
  }),
  
  reopenLastClosedTab: () => set((state) => {
    // If no recently closed tabs, return current state
    if (state.recentlyClosed.length === 0) {
      return state;
    }
    
    const [tabToReopen, ...remainingRecentlyClosed] = state.recentlyClosed;
    
    // Check if tab already exists (might have been reopened already)
    const existingTab = state.tabs.find(t => t.id === tabToReopen.id);
    
    if (existingTab) {
      // If it exists, just activate it and remove from recently closed
      return {
        activeTabId: tabToReopen.id,
        recentlyClosed: remainingRecentlyClosed,
        tabs: state.tabs.map(t => ({
          ...t,
          isActive: t.id === tabToReopen.id
        }))
      };
    } else {
      // If it doesn't exist, add it and remove from recently closed
      return {
        activeTabId: tabToReopen.id,
        recentlyClosed: remainingRecentlyClosed,
        tabs: state.tabs.map(t => ({
          ...t,
          isActive: false
        })).concat({
          ...tabToReopen,
          isActive: true
        })
      };
    }
  })
}));

export default useStore;