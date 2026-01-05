'use client';

import { useState, useEffect } from 'react';

export type BreakpointSize =  'xxs' | 'xs' | 'sm' | 'md' | 'lmd' | 'lg' | 'xl';

export const useResponsive = () => {
  const [screenSize, setScreenSize] = useState<BreakpointSize>('sm');

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      
      if (width >= 1280) {
        setScreenSize('xl');
      } else if (width >= 1024) {
        setScreenSize('lg');
      } else if (width >= 860) {
        setScreenSize('lmd');
      } else if (width >= 768) {
        setScreenSize('md');
      }  else if (width >= 640) {
        setScreenSize('sm');
      } else if (width >= 420) {
        setScreenSize('xs');
      } else {
        setScreenSize('xxs');
      }
    };

    // Set initial size
    handleResize();

    // Add event listener
    window.addEventListener('resize', handleResize);
    
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return screenSize;
};

// Helper type for optional styles per breakpoint
export type ResponsiveStyles<T> = Partial<Record<BreakpointSize, T>>;

