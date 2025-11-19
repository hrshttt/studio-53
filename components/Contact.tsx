import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { CONTACT_INFO } from '../constants';
import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Contact: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".contact-left > *", {
        x: -30,
        opacity: 0,
        duration: 1,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 70%",
        }
      });

      gsap.from(".contact-form", {
        x: 30,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 70%",
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="contact" ref={containerRef} className="w-full py-24 md:py-32 px-6 md:px-12 bg-stone-900 text-stone-50 overflow-hidden relative">
      {/* Decorative background circle */}
      <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-stone-800 rounded-full blur-3xl opacity-20 translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
        
        {/* Left Side Info */}
        <div className="contact-left space-y-10">
          <div>
            <h2 className="text-xs font-bold tracking-[0.2em] uppercase text-stone-500 mb-4">Get Started</h2>
            <h3 className="text-4xl md:text-5xl font-light mb-6">Let's craft your vision.</h3>
            <p className="text-stone-400 font-light text-lg max-w-md">
              Ready to elevate your space? Reach out to us for a consultation or visit our studio in Udaipur.
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="mt-1 p-2 bg-stone-800 rounded-full text-stone-300">
                <Phone size={18} />
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-stone-500 mb-1">Phone</p>
                <p className="text-xl font-light tracking-wide">{CONTACT_INFO.phone}</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="mt-1 p-2 bg-stone-800 rounded-full text-stone-300">
                <Mail size={18} />
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-stone-500 mb-1">Email</p>
                <p className="text-xl font-light tracking-wide">{CONTACT_INFO.email}</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="mt-1 p-2 bg-stone-800 rounded-full text-stone-300">
                <MapPin size={18} />
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-stone-500 mb-1">Studio</p>
                <p className="text-lg font-light text-stone-300 max-w-xs leading-relaxed">
                  {CONTACT_INFO.address}
                </p>
              </div>
            </div>
          </div>

          <div className="pt-6">
             <p className="text-xs uppercase tracking-widest text-stone-500 mb-4">Follow Us</p>
             <div className="flex gap-6">
               {CONTACT_INFO.socials.map(social => (
                 <a key={social} href="#" className="text-stone-400 hover:text-white transition-colors text-sm font-medium underline-offset-4 hover:underline">
                   {social}
                 </a>
               ))}
             </div>
          </div>
        </div>

        {/* Right Side Form */}
        <div className="contact-form bg-stone-800/30 backdrop-blur-md p-8 md:p-10 rounded-3xl border border-white/5 shadow-2xl">
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-stone-500 ml-1">Name</label>
                <input type="text" className="w-full bg-stone-900/50 border border-stone-700 rounded-xl px-4 py-3 text-stone-200 focus:outline-none focus:border-stone-500 transition-colors" placeholder="John Doe" />
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-stone-500 ml-1">Phone</label>
                <input type="tel" className="w-full bg-stone-900/50 border border-stone-700 rounded-xl px-4 py-3 text-stone-200 focus:outline-none focus:border-stone-500 transition-colors" placeholder="+91 ..." />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs uppercase tracking-widest text-stone-500 ml-1">Email</label>
              <input type="email" className="w-full bg-stone-900/50 border border-stone-700 rounded-xl px-4 py-3 text-stone-200 focus:outline-none focus:border-stone-500 transition-colors" placeholder="john@example.com" />
            </div>

            <div className="space-y-2">
              <label className="text-xs uppercase tracking-widest text-stone-500 ml-1">Project Details</label>
              <textarea rows={4} className="w-full bg-stone-900/50 border border-stone-700 rounded-xl px-4 py-3 text-stone-200 focus:outline-none focus:border-stone-500 transition-colors" placeholder="Tell us about your project..."></textarea>
            </div>

            <button className="w-full bg-white text-stone-900 rounded-xl py-4 font-semibold tracking-wide uppercase text-sm hover:bg-stone-200 transition-colors flex items-center justify-center gap-2 group">
              Send Inquiry
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </form>
        </div>

      </div>
    </section>
  );
};

export default Contact;