// src/config/backgroundConfigs.ts
import { PredefinedCircle } from '../types/background';

// Define the page routes/IDs - match exactly with your tab IDs
export type PageId = 'home' | 'about' | 'projects' | 'contact' | 'blog-post-1' | 'blog-post-2';

// Configuration for each page
interface BackgroundConfig {
  predefinedCircles: PredefinedCircle[];
  glassBlur?: number;
  glassOpacity?: number;
  backgroundColor?: string;
}

// Define configurations for each page
const backgroundConfigs: Record<string, BackgroundConfig> = {
  home: {
    backgroundColor: '#222',
    glassBlur: 80,
    glassOpacity: 0.2,
    predefinedCircles: [
      {
        x: '30%',
        y: '40%',
        radius: 180,
        color: '#3b82f6', // Blue
        opacity: 0.6,
        blurAmount: 60
      },
      {
        x: '70%',
        y: '60%',
        radius: 100,
        color: '#8b5cf6', // Purple
        opacity: 0.5,
        blurAmount: 70
      }
    ]
  },
  
  about: {
    backgroundColor: '#222',
    glassBlur: 80,
    glassOpacity: 0.15,
    predefinedCircles: [
      {
        x: '25%',
        y: '30%',
        radius: 160,
        color: '#22c55e', // Green
        opacity: 0.6,
        blurAmount: 50
      },
      {
        x: '70%',
        y: '50%',
        radius: 190,
        color: '#10b981', // Emerald
        opacity: 0.5,
        blurAmount: 60
      }
    ]
  },
  
  projects: {
    backgroundColor: '#111',
    glassBlur: 80,
    glassOpacity: 0.15,
    predefinedCircles: [
      {
        x: '20%',
        y: '60%',
        radius: 150,
        color: '#f59e0b', // Amber
        opacity: 0.6,
        blurAmount: 50
      },
      {
        x: '60%',
        y: '30%',
        radius: 170,
        color: '#f97316', // Orange
        opacity: 0.5,
        blurAmount: 60
      },
      {
        x: '80%',
        y: '70%',
        radius: 120,
        color: '#eab308', // Yellow
        opacity: 0.4,
        blurAmount: 40
      }
    ]
  },
  
  contact: {
    backgroundColor: '#0d1117',
    glassBlur: 80,
    glassOpacity: 0.15,
    predefinedCircles: [
      {
        x: '30%',
        y: '40%',
        radius: 150,
        color: '#ec4899', // Pink
        opacity: 0.6,
        blurAmount: 50
      },
      {
        x: '70%',
        y: '60%',
        radius: 170,
        color: '#6366f1', // Indigo
        opacity: 0.5,
        blurAmount: 60
      }
    ]
  },
  
  'blog-post-1': {
    backgroundColor: '#0d1117',
    glassBlur: 80,
    glassOpacity: 0.15,
    predefinedCircles: [
      {
        x: '20%',
        y: '30%',
        radius: 140,
        color: '#6366f1', // Indigo
        opacity: 0.6,
        blurAmount: 50
      },
      {
        x: '60%',
        y: '60%',
        radius: 160,
        color: '#8b5cf6', // Purple
        opacity: 0.5,
        blurAmount: 60
      }
    ]
  },
  
  'blog-post-2': {
    backgroundColor: '#0d1117',
    glassBlur: 80,
    glassOpacity: 0.15,
    predefinedCircles: [
      {
        x: '30%',
        y: '60%',
        radius: 150,
        color: '#ec4899', // Pink
        opacity: 0.6,
        blurAmount: 50
      },
      {
        x: '70%',
        y: '40%',
        radius: 170,
        color: '#f472b6', // Pink/Rose
        opacity: 0.5,
        blurAmount: 60
      }
    ]
  }
};

export default backgroundConfigs;