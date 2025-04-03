// src/types/background.ts

export interface PredefinedCircle {
  x?: number | string; // Can be percent (e.g., '30%') or absolute position
  y?: number | string; // Can be percent (e.g., '40%') or absolute position
  radius?: number;
  color?: string;
  opacity?: number;
  blurAmount?: number;
}

export interface ShowerGlassCirclesProps {
  width?: string | number;
  height?: string | number;
  backgroundColor?: string;
  glassOpacity?: number;
  glassBlur?: number;
  animated?: boolean;
  predefinedCircles?: PredefinedCircle[]; // For specific circle positions
  randomCircles?: {
    count?: number;
    minRadius?: number;
    maxRadius?: number;
    minOpacity?: number;
    maxOpacity?: number;
    minBlur?: number;
    maxBlur?: number;
    colors?: string[];
  };
}