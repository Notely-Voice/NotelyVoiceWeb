'use client';

import { useState, useEffect } from 'react';

export type BreakpointSize =  'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';

export const useResponsive = () => {
  const [screenSize, setScreenSize] = useState<BreakpointSize>('sm');

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      
      if (width >= 1536) {
        setScreenSize('2xl');
      } else if (width >= 1280) {
        setScreenSize('xl');
      } else if (width >= 1024) {
        setScreenSize('lg');
      } else if (width >= 768) {
        setScreenSize('md');
      } else if (width >= 640) {
        setScreenSize('sm');
      } else {
        setScreenSize('xs');
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
