import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      // Initial reveal
      tl.from(".hero-text-line", {
        y: 100,
        opacity: 0,
        duration: 1.2,
        stagger: 0.15,
        ease: "power4.out",
        delay: 0.2
      })
      .from(".hero-sub", {
        y: 20,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out"
      }, "-=0.6")
      .from(".hero-btn", {
        y: 20,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power2.out"
      }, "-=0.6")
      .from(".hero-bg-shape", {
        scale: 0.8,
        opacity: 0,
        duration: 2,
        ease: "power3.out"
      }, "-=1.5");

      // Parallax on scroll
      gsap.to(".hero-parallax", {
        yPercent: 30,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true
        }
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="home" ref={containerRef} className="relative w-full h-screen flex flex-col items-center justify-center overflow-hidden bg-stone-50">
      
      {/* Background Elements */}
      <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden">
         {/* Grid lines */}
        <div className="absolute w-full h-full opacity-[0.03]" 
          style={{ 
            backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', 
            backgroundSize: '80px 80px' 
          }}
        ></div>
        
        {/* Abstract Architectural Shape */}
        <div className="hero-bg-shape hero-parallax absolute -right-20 top-0 w-[60vw] h-[80vh] bg-stone-200 rounded-bl-[10rem] rounded-tl-[4rem] opacity-40 blur-3xl"></div>
        <div className="hero-bg-shape hero-parallax absolute -left-40 bottom-0 w-[50vw] h-[60vh] bg-stone-300 rounded-tr-[12rem] opacity-30 blur-3xl"></div>
      </div>

      <div className="relative z-10 text-center px-6 flex flex-col items-center">
        <h1 ref={textRef} className="font-light text-6xl md:text-8xl lg:text-9xl tracking-tighter text-stone-900 leading-[0.9]">
          <div className="overflow-hidden"><span className="hero-text-line block">FIFTY</span></div>
          <div className="overflow-hidden"><span className="hero-text-line block font-normal">THREE</span></div>
        </h1>
        
        <div className="mt-8 md:mt-12 space-y-2 overflow-hidden">
          <p className="hero-sub text-lg md:text-xl font-light text-stone-500 tracking-widest uppercase">
            Architecture & Interior Design
          </p>
          <p className="hero-sub text-sm font-medium text-stone-400 tracking-widest">
            EST. 2024 — UDAIPUR
          </p>
        </div>

        <div className="mt-12 flex flex-col md:flex-row gap-4 items-center overflow-hidden">
          <a href="#projects" className="hero-btn px-8 py-4 bg-stone-900 text-white rounded-full text-sm uppercase tracking-wider hover:bg-stone-800 transition-all duration-300">
            View Portfolio
          </a>
          <a href="#contact" className="hero-btn px-8 py-4 bg-transparent border border-stone-300 text-stone-900 rounded-full text-sm uppercase tracking-wider hover:bg-stone-100 transition-all duration-300">
            Book Consultation
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-60 animate-bounce">
        <span className="text-[10px] uppercase tracking-widest text-stone-400">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-stone-400 to-transparent"></div>
      </div>
    </section>
  );
};

export default Hero;