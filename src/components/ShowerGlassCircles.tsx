import React, { useRef, useEffect } from 'react';
import { PredefinedCircle } from '../types/background';

interface CircleData {
  id: number;
  currentX: number;
  currentY: number;
  targetX: number;
  targetY: number;
  radius: number;
  color: string;
  opacity: number;
  blurAmount: number;
}

interface ShowerGlassCirclesProps {
  width?: string | number;
  height?: string | number;
  backgroundColor?: string;
  glassOpacity?: number;
  glassBlur?: number;
  animated?: boolean;
  predefinedCircles?: PredefinedCircle[];
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

const ShowerGlassCircles: React.FC<ShowerGlassCirclesProps> = ({
  width = '100%',
  height = '300px',
  backgroundColor = '#0d1117',
  glassOpacity = 0.15,
  glassBlur = 80,
  animated = true,
  predefinedCircles = [],
  randomCircles = {
    count: predefinedCircles.length > 0 ? 0 : 3,
    minRadius: 80,
    maxRadius: 150,
    minOpacity: 0.5,
    maxOpacity: 0.8,
    minBlur: 20,
    maxBlur: 40,
    colors: ['#ef4444', '#22c55e', '#3b82f6']
  }
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number | null>(null);
  const circlesRef = useRef<CircleData[]>([]);
  const isFirstRenderRef = useRef(true);
  
  // Convert string percentage to pixels
  const parsePosition = (pos: number | string | undefined, dimension: number, defaultValue: number): number => {
    if (pos === undefined) return defaultValue;
    
    if (typeof pos === 'string' && pos.endsWith('%')) {
      const percentage = parseFloat(pos) / 100;
      return Math.floor(dimension * percentage);
    }
    
    return typeof pos === 'number' ? pos : defaultValue;
  };

  // Main effect to set up canvas and circles
  useEffect(() => {
    if (!containerRef.current || !canvasRef.current) return;
    
    // Cancel any existing animation
    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current);
      animationRef.current = null;
    }
    
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d', { alpha: false });
    if (!ctx) return;
    
    // Set canvas size to match container
    const updateCanvasSize = () => {
      const rect = containerRef.current?.getBoundingClientRect();
      if (!rect) return;
      
      const dpr = window.devicePixelRatio || 1;
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      
      ctx.scale(dpr, dpr);
      
      canvas.style.width = `${rect.width}px`;
      canvas.style.height = `${rect.height}px`;
    };
    
    updateCanvasSize();
    
    const contWidth = containerRef.current.clientWidth;
    const contHeight = containerRef.current.clientHeight;
    
    // Initialize circles based on predefined circles
    const initialCircles: CircleData[] = [];
    
    // Add predefined circles
    predefinedCircles.forEach((circle, index) => {
      const targetX = parsePosition(circle.x, contWidth, contWidth / 2);
      const targetY = parsePosition(circle.y, contHeight, contHeight / 2);
      const radius = circle.radius || Math.floor(Math.random() * 70) + 80;
      const color = circle.color || randomCircles.colors?.[index % (randomCircles.colors?.length || 3)] || '#ef4444';
      const opacity = circle.opacity || 0.7;
      const blurAmount = circle.blurAmount || 30;
      
      // For first render, place circles directly at target
      // For page changes, move them in from offscreen
      let currentX: number, currentY: number;
      
      if (isFirstRenderRef.current) {
        // First render - place at target
        currentX = targetX;
        currentY = targetY;
      } else {
        // Find existing circle with same ID if it exists
        const existingCircle = circlesRef.current.find(c => c.id === index);
        
        if (existingCircle) {
          // Use existing position for smooth transition
          currentX = existingCircle.currentX;
          currentY = existingCircle.currentY;
        } else {
          // Start new circles from offscreen
          const side = Math.floor(Math.random() * 4); // 0: top, 1: right, 2: bottom, 3: left
          
          switch (side) {
            case 0: // top
              currentX = Math.random() * contWidth;
              currentY = -radius * 2;
              break;
            case 1: // right
              currentX = contWidth + radius * 2;
              currentY = Math.random() * contHeight;
              break;
            case 2: // bottom
              currentX = Math.random() * contWidth;
              currentY = contHeight + radius * 2;
              break;
            case 3: // left
              currentX = -radius * 2;
              currentY = Math.random() * contHeight;
              break;
            default:
              currentX = -radius * 2;
              currentY = Math.random() * contHeight;
          }
        }
      }
      
      initialCircles.push({
        id: index,
        currentX,
        currentY,
        targetX,
        targetY,
        radius,
        color,
        opacity,
        blurAmount
      });
    });
    
    // Add random circles if needed
    const randomCount = randomCircles.count || 0;
    for (let i = 0; i < randomCount; i++) {
      const radius = Math.floor(
        Math.random() * ((randomCircles.maxRadius || 150) - (randomCircles.minRadius || 80)) + 
        (randomCircles.minRadius || 80)
      );
      
      const targetX = Math.floor(Math.random() * (contWidth - radius * 2)) + radius;
      const targetY = Math.floor(Math.random() * (contHeight - radius * 2)) + radius;
      
      const colorIndex = Math.floor(Math.random() * (randomCircles.colors?.length || 3));
      const color = randomCircles.colors?.[colorIndex] || 
        ['#ef4444', '#22c55e', '#3b82f6'][colorIndex];
      
      const opacity = Math.random() * 
        ((randomCircles.maxOpacity || 0.8) - (randomCircles.minOpacity || 0.5)) + 
        (randomCircles.minOpacity || 0.5);
      
      const blurAmount = Math.floor(
        Math.random() * ((randomCircles.maxBlur || 40) - (randomCircles.minBlur || 20)) + 
        (randomCircles.minBlur || 20)
      );
      
      const id = predefinedCircles.length + i;
      
      let currentX: number, currentY: number;
      
      if (isFirstRenderRef.current) {
        currentX = targetX;
        currentY = targetY;
      } else {
        // Start new circles from offscreen
        const side = Math.floor(Math.random() * 4);
        
        switch (side) {
          case 0: // top
            currentX = Math.random() * contWidth;
            currentY = -radius * 2;
            break;
          case 1: // right
            currentX = contWidth + radius * 2;
            currentY = Math.random() * contHeight;
            break;
          case 2: // bottom
            currentX = Math.random() * contWidth;
            currentY = contHeight + radius * 2;
            break;
          case 3: // left
            currentX = -radius * 2;
            currentY = Math.random() * contHeight;
            break;
          default:
            currentX = -radius * 2;
            currentY = Math.random() * contHeight;
        }
      }
      
      initialCircles.push({
        id,
        currentX,
        currentY,
        targetX,
        targetY,
        radius,
        color,
        opacity,
        blurAmount
      });
    }
    
    // Update ref
    circlesRef.current = initialCircles;
    
    // Draw a circle with blur effect using shadow
    const drawBlurredCircle = (x: number, y: number, radius: number, color: string, opacity: number, blur: number) => {
      ctx.save();
      ctx.globalAlpha = opacity;
      
      // Skip shadow if blur is minimal to improve performance
      if (blur > 5) {
        ctx.shadowColor = color;
        ctx.shadowBlur = blur;
      }
      
      ctx.fillStyle = color;
      ctx.beginPath();
      ctx.arc(x, y, radius, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    };
    
    // Clear canvas and draw all circles
    const drawCircles = () => {
      ctx.fillStyle = backgroundColor;
      ctx.fillRect(0, 0, canvas.width / (window.devicePixelRatio || 1), canvas.height / (window.devicePixelRatio || 1));
      
      circlesRef.current.forEach(circle => {
        drawBlurredCircle(
          circle.currentX, 
          circle.currentY, 
          circle.radius, 
          circle.color, 
          circle.opacity, 
          circle.blurAmount
        );
      });
    };
    
    // Animation function
    const animate = () => {
      let needsAnimation = false;
      
      // Update positions
      circlesRef.current.forEach(circle => {
        const dx = circle.targetX - circle.currentX;
        const dy = circle.targetY - circle.currentY;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        // If close enough to target, snap to it
        if (distance < 0.5) {
          circle.currentX = circle.targetX;
          circle.currentY = circle.targetY;
        } else {
          // Otherwise, move towards target with easing
          needsAnimation = true;
          const speed = Math.max(distance * 0.05, 0.5); // Speed based on distance, with minimum
          const angle = Math.atan2(dy, dx);
          
          circle.currentX += Math.cos(angle) * speed;
          circle.currentY += Math.sin(angle) * speed;
        }
      });
      
      // Draw
      drawCircles();
      
      // Continue animation if needed
      if (needsAnimation || animated) {
        animationRef.current = requestAnimationFrame(animate);
      }
      
      // If animation is done but subtle animation is enabled
      if (!needsAnimation && animated) {
        // Add very subtle movement
        circlesRef.current.forEach(circle => {
          // Very small random movement (0.2px max)
          if (Math.random() > 0.8) { // Only move some circles each frame
            const dx = (Math.random() - 0.5) * 0.4;
            const dy = (Math.random() - 0.5) * 0.4;
            
            // Keep within bounds of target
            const distFromTarget = Math.sqrt(
              Math.pow(circle.currentX + dx - circle.targetX, 2) + 
              Math.pow(circle.currentY + dy - circle.targetY, 2)
            );
            
            // Only move if we're not going too far from target
            if (distFromTarget < circle.radius * 0.15) {
              circle.currentX += dx;
              circle.currentY += dy;
            } else {
              // Move back towards target slightly
              circle.currentX += (circle.targetX - circle.currentX) * 0.02;
              circle.currentY += (circle.targetY - circle.currentY) * 0.02;
            }
          }
        });
      }
    };
    
    // Initial draw
    drawCircles();
    
    // Start animation
    animationRef.current = requestAnimationFrame(animate);
    
    // Handle resize
    const handleResize = () => {
      updateCanvasSize();
      
      // Update target positions based on new container size
      const newWidth = containerRef.current?.clientWidth || contWidth;
      const newHeight = containerRef.current?.clientHeight || contHeight;
      
      // Only update if size actually changed
      if (newWidth !== contWidth || newHeight !== contHeight) {
        circlesRef.current.forEach((circle, index) => {
          if (index < predefinedCircles.length) {
            const predefined = predefinedCircles[index];
            circle.targetX = parsePosition(predefined.x, newWidth, newWidth / 2);
            circle.targetY = parsePosition(predefined.y, newHeight, newHeight / 2);
          }
        });
      }
      
      drawCircles();
    };
    
    window.addEventListener('resize', handleResize);
    
    // No longer first render
    isFirstRenderRef.current = false;
    
    // Cleanup
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      window.removeEventListener('resize', handleResize);
    };
  }, [backgroundColor, predefinedCircles, randomCircles, animated, glassBlur, glassOpacity]);

  return (
    <div
      ref={containerRef}
      className="relative overflow-hidden rounded-lg"
      style={{ width, height, backgroundColor }}
    >
      {/* Canvas for drawing circles */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
      />
      
      {/* Glass effect overlay */}
      <div
        className="absolute inset-0"
        style={{
          backdropFilter: `blur(${glassBlur}px)`,
          background: `rgba(0, 0, 0, ${glassOpacity})`,
        }}
      />
    </div>
  );
};

export default ShowerGlassCircles;