import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { USP } from '../constants';

gsap.registerPlugin(ScrollTrigger);

const Features: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      
      // Text Reveal
      gsap.from(".ft-header-el", {
        y: 30,
        opacity: 0,
        duration: 1,
        stagger: 0.1,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 75%"
        }
      });

      // Vertical Dividers Grow
      gsap.from(".ft-divider", {
        height: 0,
        duration: 1.5,
        ease: "power4.inOut",
        stagger: 0.05,
        scrollTrigger: {
          trigger: ".ft-grid",
          start: "top 70%"
        }
      });

      // Horizontal Borders Grow
      gsap.from(".ft-border-x", {
        width: 0,
        duration: 1.5,
        ease: "power4.inOut",
        scrollTrigger: {
          trigger: ".ft-grid",
          start: "top 70%"
        }
      });

      // Content Fade
      gsap.from(".ft-item-content", {
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        delay: 0.2,
        scrollTrigger: {
          trigger: ".ft-grid",
          start: "top 70%"
        }
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="w-full py-24 md:py-32 px-6 md:px-12 bg-stone-50 text-stone-900">
      <div className="max-w-[1400px] mx-auto">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="ft-header-el">
             <h2 className="text-xs font-bold tracking-[0.25em] uppercase text-stone-400 mb-4">Why Choose Us</h2>
             <h3 className="text-4xl md:text-5xl font-light leading-tight text-stone-900">
               The FIFTY THREE <br/> Standard
             </h3>
          </div>
          <p className="ft-header-el max-w-md text-stone-500 font-light text-sm leading-relaxed md:text-right">
            We don't just design buildings; we curate lifestyles. Our commitment to excellence is embedded in every line we draw.
          </p>
        </div>

        {/* Grid with Animated Lines */}
        <div className="ft-grid relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          
          {/* Top Border */}
          <div className="ft-border-x absolute top-0 left-0 w-full h-[1px] bg-stone-200/80"></div>
          
          {USP.map((item, index) => (
            <div key={index} className="relative group">
              {/* Vertical Divider (Left) */}
              <div className="ft-divider absolute left-0 top-0 w-[1px] h-full bg-stone-200/80 origin-top"></div>
              
              {/* Divider (Right) for the last item on large screens */}
              {index === USP.length - 1 && (
                 <div className="ft-divider hidden lg:block absolute right-0 top-0 w-[1px] h-full bg-stone-200/80 origin-top"></div>
              )}

              <div className="ft-item-content p-8 pt-12 pb-16 group-hover:bg-white transition-colors duration-500 h-full">
                <div className="flex justify-between items-start mb-10">
                   <div className="text-stone-400 group-hover:text-stone-900 transition-colors duration-500">
                     <item.icon strokeWidth={1} size={32} />
                   </div>
                   <div className="text-5xl font-serif italic text-stone-100 group-hover:text-stone-200 transition-colors duration-500 select-none">
                     0{index + 1}
                   </div>
                </div>

                <h4 className="text-lg font-medium text-stone-900 mb-4 tracking-wide">{item.title}</h4>
                <p className="text-sm text-stone-500 leading-relaxed font-light">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
          
          {/* Bottom Border */}
          <div className="ft-border-x absolute bottom-0 left-0 w-full h-[1px] bg-stone-200/80"></div>
        </div>

      </div>
    </section>
  );
};

export default Features;