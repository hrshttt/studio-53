import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { NAV_LINKS } from '../constants';

gsap.registerPlugin(ScrollTrigger);

const Navbar: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY < 50) {
        setIsVisible(true);
      } else {
        if (currentScrollY > lastScrollY) {
          // Scrolling down
          setIsVisible(false);
        } else {
          // Scrolling up
          setIsVisible(true);
        }
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    if (navRef.current) {
      gsap.to(navRef.current, {
        y: isVisible ? 0 : -100,
        opacity: isVisible ? 1 : 0,
        duration: 0.4,
        ease: "power3.out"
      });
    }
  }, [isVisible]);

  const scrollToSection = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="fixed top-8 left-0 w-full flex justify-center z-50 pointer-events-none">
      <nav 
        ref={navRef}
        className="glass-panel pointer-events-auto px-8 py-4 rounded-full flex items-center justify-between gap-12 shadow-sm shadow-stone-200/50 border border-white/40"
      >
        <div 
          className="font-semibold text-lg tracking-tight cursor-pointer"
          onClick={() => scrollToSection('#home')}
        >
          FIFTY THREE<span className="text-stone-400">.</span>
        </div>

        <ul className="hidden md:flex items-center gap-8 text-sm font-medium text-stone-600">
          {NAV_LINKS.map((link) => (
            <li key={link.name} className="relative group cursor-pointer">
              <button onClick={() => scrollToSection(link.href)} className="hover:text-stone-900 transition-colors">
                {link.name}
              </button>
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-stone-900 transition-all duration-300 group-hover:w-full"></span>
            </li>
          ))}
        </ul>

        <button 
          onClick={() => scrollToSection('#contact')}
          className="bg-stone-900 text-stone-50 text-xs font-semibold uppercase tracking-wider px-5 py-2.5 rounded-full hover:bg-stone-800 transition-transform hover:scale-105 active:scale-95"
        >
          Get in Touch
        </button>
      </nav>
    </div>
  );
};

export default Navbar;