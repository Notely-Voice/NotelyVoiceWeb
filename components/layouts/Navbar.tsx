'use client';

import { navbarItems } from "@/contents/globalData";
import Logo from "../ui/Logo";
import Link from "next/link";
import Button from "../ui/Button";
import { useState } from "react";
import { useResponsive } from "@/hooks/useResponsive";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const screenSize = useResponsive();
  
  // Close menu on larger screens
  const shouldShowNavItems = screenSize !== 'xs' && screenSize !== 'sm';

  return (
    <div className="sticky top-0 left-0 py-4 lg:py-6 xl:py-8 flex items-center justify-between px-6 xl:px-8 z-50 bg-[var(--white_bg)]">
      <div className="flex items-center justify-between gap-6 md:gap-10 w-full wrapper mx-auto">
        <Logo className="lg:ml-9" />
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-3 lg:gap-6 xl:gap-8">
          {navbarItems.map((item) => (
            <Link 
              key={item.href} 
              href={item.href} 
              className="font-satoshi font-bold text-sm lg:text-lg leading-[100%] tracking-normal text-black hover:text-[var(--blueBg)] focus:text-[var(--blueBg)]"
            >
              {item.label}
            </Link>
          ))}
        </div>

        
        {/* Mobile Hamburger Menu & CTA */}
        <div className="flex items-center gap-4 md:gap-0">
          {/* CTA Button */}
          <Button btnText="Start for free" className="inline-block md:hidden" />


          {/* Hamburger Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden flex flex-col gap-1.5 cursor-pointer"
            aria-label="Toggle menu"
          >
            <span className={`w-6 h-0.5 bg-black transition-all ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`w-6 h-0.5 bg-black transition-all ${isMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`w-6 h-0.5 bg-black transition-all ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </button>


          {/* CTA Button */}
          <Button btnText="Start for free" className="hidden md:inline-block" />

        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-[var(--white_bg)] border-t border-gray-200 md:hidden">
          <div className="flex flex-col gap-4 px-6 py-4 wrapper mx-auto">
            {navbarItems.map((item) => (
              <Link 
                key={item.href} 
                href={item.href} 
                className="font-satoshi font-bold text-base leading-[100%] tracking-normal text-black hover:text-[var(--blueBg)] focus:text-[var(--blueBg)]"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
