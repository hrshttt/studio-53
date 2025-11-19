import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SERVICES } from '../constants';
import { ArrowUpRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Services: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Header Animation
      gsap.from(".srv-header-el", {
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        }
      });

      // Cards Animation
      gsap.from(".srv-card", {
        y: 60,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".srv-grid",
          start: "top 75%",
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="services" ref={containerRef} className="w-full py-32 px-6 md:px-12 bg-[#121212] text-stone-300 relative overflow-hidden">
      
      {/* Background Subtle Grid */}
      <div className="absolute inset-0 w-full h-full opacity-[0.03]" 
          style={{ 
            backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', 
            backgroundSize: '60px 60px' 
          }}
      ></div>

      <div className="max-w-[1400px] mx-auto relative z-10">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-8">
          <div className="srv-header-el">
            <h2 className="text-xs font-bold tracking-[0.25em] uppercase text-stone-500 mb-4">Our Expertise</h2>
            <h3 className="text-4xl md:text-6xl font-light text-white leading-[1.1]">
              Comprehensive <br/> 
              <span className="italic font-serif text-stone-500">Design Solutions</span>
            </h3>
          </div>
          <div className="srv-header-el max-w-md">
            <p className="text-stone-400 font-light text-sm leading-relaxed pl-6 border-l border-stone-800">
              We bridge the gap between architectural vision and structural reality, ensuring every detail breathes luxury and purpose.
            </p>
          </div>
        </div>

        <div className="srv-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service, index) => (
            <div 
              key={index} 
              className="srv-card group relative p-8 rounded-xl bg-stone-900/40 border border-white/5 hover:bg-stone-800/60 hover:border-white/10 transition-all duration-500 cursor-pointer overflow-hidden backdrop-blur-sm"
            >
              {/* Hover Gradient Blob */}
              <div className="absolute -right-12 -top-12 w-40 h-40 bg-stone-600/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>

              <div className="relative z-10 flex flex-col h-full justify-between min-h-[280px]">
                <div>
                  <div className="flex justify-between items-start mb-8">
                    <div className="p-3 rounded-lg bg-white/5 text-stone-400 group-hover:text-white group-hover:bg-white/10 transition-all duration-500 ring-1 ring-white/5">
                      <service.icon strokeWidth={1} size={26} />
                    </div>
                    <span className="text-xs font-mono text-stone-600 group-hover:text-stone-500 transition-colors">
                      0{index + 1}
                    </span>
                  </div>
                  
                  <h4 className="text-2xl font-light text-white mb-4 group-hover:translate-x-1 transition-transform duration-500">{service.title}</h4>
                  <p className="text-stone-500 font-light text-sm leading-relaxed group-hover:text-stone-400 transition-colors">
                    {service.description}
                  </p>
                </div>

                <div className="mt-8 pt-6 border-t border-white/5 flex items-center justify-between text-xs uppercase tracking-widest text-stone-600 group-hover:text-white transition-colors">
                  <span>Explore</span>
                  <ArrowUpRight size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300 text-stone-500 group-hover:text-white" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;