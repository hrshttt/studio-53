import React from 'react';
import { NAV_LINKS } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-stone-950 text-stone-400 py-16 px-6 border-t border-stone-900">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        
        <div className="text-center md:text-left">
          <h3 className="text-2xl text-stone-200 tracking-tight font-semibold mb-2">FIFTY THREE<span className="text-stone-600">.</span></h3>
          <p className="text-xs uppercase tracking-widest text-stone-600">Udaipur, Rajasthan</p>
        </div>

        <ul className="flex gap-8 text-sm font-medium">
          {NAV_LINKS.map(link => (
            <li key={link.name}>
              <a href={link.href} className="hover:text-white transition-colors">{link.name}</a>
            </li>
          ))}
        </ul>

        <div className="text-xs text-stone-600 font-light tracking-wide">
          © {new Date().getFullYear()} FIFTY THREE Studio. All rights reserved.
        </div>

      </div>
    </footer>
  );
};

export default Footer;