import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const About: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".about-text", {
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".about-content",
          start: "top 80%",
        }
      });

      gsap.from(".about-image", {
        scale: 0.95,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".about-image-wrap",
          start: "top 70%",
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="about" ref={containerRef} className="w-full py-24 md:py-32 px-6 md:px-12 lg:px-24 bg-stone-50">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        
        <div className="about-content order-2 lg:order-1">
          <h2 className="about-text text-xs font-bold tracking-[0.2em] uppercase text-stone-400 mb-6">Who We Are</h2>
          <h3 className="about-text text-4xl md:text-5xl font-light text-stone-900 mb-8 leading-tight">
            Designing spaces that <span className="italic font-serif font-medium">breathe</span> life and elegance.
          </h3>
          <div className="space-y-6 text-stone-600 font-light leading-relaxed text-lg">
            <p className="about-text">
              FIFTY THREE Studio is a Udaipur-based multidisciplinary design practice aimed at crafting spaces that are not just visually stunning but deeply experiential.
            </p>
            <p className="about-text">
              We believe that architecture is the silent language of space. Our philosophy is rooted in minimalism, functionality, and an unwavering attention to detail. From luxury villas overlooking the Aravallis to boutique retail spaces in the heart of the city, we bring a modern architectural dialogue to every project.
            </p>
            <p className="about-text">
              Our approach combines advanced conceptual planning with the rich heritage of Indian craftsmanship, redefined for the contemporary era.
            </p>
          </div>
          <div className="about-text mt-10">
            <span className="inline-block border-b border-stone-900 pb-1 text-stone-900 uppercase tracking-widest text-xs font-semibold cursor-pointer hover:opacity-60 transition-opacity">
              Read Our Philosophy
            </span>
          </div>
        </div>

        <div className="about-image-wrap order-1 lg:order-2 relative">
          <div className="absolute inset-0 bg-stone-200 rounded-3xl transform rotate-3 translate-x-4 translate-y-4 -z-10"></div>
          <div className="about-image overflow-hidden rounded-3xl shadow-2xl shadow-stone-200 aspect-[4/5]">
            <img 
              src="https://picsum.photos/seed/architectural/1000/1250" 
              alt="Modern Interior" 
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000 ease-out"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;