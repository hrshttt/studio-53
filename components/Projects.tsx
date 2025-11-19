import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { PROJECTS } from '../constants';

gsap.registerPlugin(ScrollTrigger);

const Projects: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const projects = gsap.utils.toArray<HTMLElement>(".project-item");
      
      projects.forEach((project, i) => {
        gsap.from(project, {
          y: 80,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: project,
            start: "top 85%",
          }
        });
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="projects" ref={containerRef} className="w-full py-24 md:py-32 px-4 md:px-8 bg-stone-50">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 px-4">
          <div>
            <h2 className="text-xs font-bold tracking-[0.2em] uppercase text-stone-400 mb-4">Selected Works</h2>
            <h3 className="text-4xl md:text-6xl font-light text-stone-900">Recent Projects</h3>
          </div>
          <a href="#" className="hidden md:block text-sm uppercase tracking-widest font-medium border-b border-stone-300 pb-1 hover:border-stone-900 transition-colors">
            View All Works
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {PROJECTS.map((project) => (
            <div key={project.id} className="project-item group cursor-pointer">
              <div className="relative overflow-hidden rounded-xl aspect-[3/4] bg-stone-200">
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors z-10 duration-500"></div>
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center z-20">
                  <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <span className="text-2xl font-light">+</span>
                  </div>
                </div>
              </div>
              <div className="mt-5 px-2">
                <p className="text-xs font-bold tracking-widest text-stone-400 uppercase mb-1">{project.category}</p>
                <h4 className="text-xl text-stone-900 font-medium group-hover:underline decoration-1 underline-offset-4">{project.title}</h4>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center md:hidden">
          <a href="#" className="text-sm uppercase tracking-widest font-medium border-b border-stone-300 pb-1">
            View All Works
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;