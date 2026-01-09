import { usePathname } from 'next/navigation';

export interface ThemeConfig {
  navbar: {
    bgColor: string;
    bgClass: string;
    textColor: string;
    textClass: string;
    logoColorClass?: string;
  };
  footer: {
    bgColor: string;
    bgClass: string;
  };
}

const THEME_MAP: Record<string, ThemeConfig> = {
  // Homepage - light background
  '/': {
    navbar: {
      bgColor: '#F2FFFF',
      bgClass: 'bg-[#F2FFFF]',
      textColor: '#1F2747',
      textClass: 'text-black',
      logoColorClass: 'text-black',
    },
    footer: {
      bgColor: '#1F2747',
      bgClass: 'bg-[#1F2747]',
    },
  },
  
  // Features - Blue background
  '/features': {
    navbar: {
      bgColor: '#3E45FB',
      bgClass: 'bg-[#3E45FB]',
      textColor: '#F2FFFF',
      textClass: 'text-white',
      logoColorClass: 'text-white',
    },
    footer: {
      bgColor: '#1F2747',
      bgClass: 'bg-[#1F2747]',
    },
  },

  // Pricing - Light background
  '/pricing': {
    navbar: {
      bgColor: '#F2FFFF',
      bgClass: 'bg-[#F2FFFF]',
      textColor: '#1F2747',
      textClass: 'text-black',
      logoColorClass: 'text-black',
    },
    footer: {
      bgColor: '#1F2747',
      bgClass: 'bg-[#1F2747]',
    },
  },

  // FAQ - Light background
  '/faq': {
    navbar: {
      bgColor: '#F2FFFF',
      bgClass: 'bg-[#F2FFFF]',
      textColor: '#1F2747',
      textClass: 'text-black',
      logoColorClass: 'text-black',
    },
    footer: {
      bgColor: '#1F2747',
      bgClass: 'bg-[#1F2747]',
    },
  },

  // Privacy - Light background
  '/privacy': {
    navbar: {
      bgColor: '#F2FFFF',
      bgClass: 'bg-[#F2FFFF]',
      textColor: '#1F2747',
      textClass: 'text-black',
      logoColorClass: 'text-black',
    },
    footer: {
      bgColor: '#1F2747',
      bgClass: 'bg-[#1F2747]',
    },
  },

  // About Us - Black background
  '/about': {
    navbar: {
      bgColor: '#000000',
      bgClass: 'bg-black',
      textColor: '#F2FFFF',
      textClass: 'text-white',
      logoColorClass: 'text-white',
    },
    footer: {
      bgColor: '#1F2747',
      bgClass: 'bg-[#1F2747]',
    },
  },
};

/**
 * Custom hook to get theme configuration based on current pathname
 * @returns ThemeConfig object with navbar and footer theme properties
 */
export const usePageTheme = (): ThemeConfig => {
  const pathname = usePathname();

  // Get theme for current pathname, fallback to homepage theme
  return THEME_MAP[pathname] || THEME_MAP['/'];
};

/**
 * Get navbar theme based on pathname
 */
export const useNavbarTheme = () => {
  const theme = usePageTheme();
  return theme.navbar;
};

/**
 * Get footer theme based on pathname
 */
export const useFooterTheme = () => {
  const theme = usePageTheme();
  return theme.footer;
};
