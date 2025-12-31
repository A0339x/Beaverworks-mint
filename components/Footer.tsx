import React from 'react';
import { ViewType } from '../types';

interface FooterProps {
  onNavigate?: (id: string, type: ViewType) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const handleClick = (e: React.MouseEvent, id: string, type: ViewType) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate(id, type);
    }
  };

  return (
    <footer className="bg-slate-900 text-white pt-24 pb-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16 border-b border-white/10 pb-16">
          <div className="lg:col-span-2">
            <button onClick={(e) => handleClick(e, 'home', 'home')} className="text-left">
              <h2 className="font-serif text-3xl mb-6">BEAVERWORKS MINT</h2>
            </button>
            <p className="text-gray-400 max-w-md font-light leading-relaxed">
              Western Canada's only operating private mint. Dedicated to the Royal Canadian Air Force and next-level excellence.
            </p>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-white/50 mb-6">Collections</h4>
            <ul className="space-y-4">
              <li><button onClick={(e) => handleClick(e, '100-collection', 'category')} className="text-sm text-gray-300 hover:text-white transition-colors">The 100 Collection</button></li>
              <li><button onClick={(e) => handleClick(e, 'arrow-collection', 'category')} className="text-sm text-gray-300 hover:text-white transition-colors">Avro Arrow</button></li>
              <li><button onClick={(e) => handleClick(e, 'badges', 'category')} className="text-sm text-gray-300 hover:text-white transition-colors">Flight Badges</button></li>
              <li><button onClick={(e) => handleClick(e, 'watches', 'category')} className="text-sm text-gray-300 hover:text-white transition-colors">Watches</button></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-white/50 mb-6">Company</h4>
            <ul className="space-y-4">
              <li><button onClick={(e) => handleClick(e, 'story', 'page')} className="text-sm text-gray-300 hover:text-white transition-colors">Our Story</button></li>
              <li><button onClick={(e) => handleClick(e, 'contact', 'page')} className="text-sm text-gray-300 hover:text-white transition-colors">Contact</button></li>
              <li><button onClick={(e) => handleClick(e, 'consulting', 'page')} className="text-sm text-gray-300 hover:text-white transition-colors">Consulting</button></li>
              <li><button onClick={(e) => handleClick(e, 'leadership', 'page')} className="text-sm text-gray-300 hover:text-white transition-colors">Leadership</button></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 uppercase tracking-wider">
          <p>© {new Date().getFullYear()} Beaverworks Mint. Crafted in Canada.</p>
        </div>
      </div>
    </footer>
  );
};
