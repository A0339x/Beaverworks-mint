import React from 'react';
import { motion } from 'framer-motion';
import { ViewType } from '../types';

interface HeroProps {
  onNavigate: (id: string, type: ViewType) => void;
}

export const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  return (
    <div className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://picsum.photos/id/29/1920/1080" 
          alt="Canadian Mountain Landscape" 
          className="w-full h-full object-cover grayscale brightness-50"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 to-slate-900/20 mix-blend-multiply" />
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-block mb-6">
            <span className="py-1 px-3 border border-white/30 rounded-full text-xs uppercase tracking-[0.3em] backdrop-blur-sm">
              Western Canada's Only Private Mint
            </span>
          </div>
          
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl mb-6 leading-tight">
            Crafted in <span className="text-canadian-red italic">Canada.</span><br />
            Minted for <span className="italic">Collectors.</span>
          </h1>
          
          <p className="font-sans text-lg md:text-xl text-gray-200 max-w-2xl mx-auto mb-10 font-light leading-relaxed">
            Specializing in meticulously crafted silver and gold coins dedicated to the Royal Canadian Air Force — forged from national pride.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() => onNavigate('100-collection', 'category')}
              className="px-10 py-4 bg-canadian-red text-white text-sm uppercase tracking-widest hover:bg-canadian-dark transition-all transform hover:-translate-y-1 shadow-lg shadow-red-900/20 min-w-[200px]"
            >
              View Collection
            </button>
            <button
              onClick={() => onNavigate('story', 'page')}
              className="px-10 py-4 border border-white text-white text-sm uppercase tracking-widest hover:bg-white hover:text-slate-900 transition-all min-w-[200px]"
            >
              Our Story
            </button>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ delay: 1, duration: 1.5, repeat: Infinity }}
      >
        <div className="w-[1px] h-12 bg-gradient-to-b from-transparent via-white to-transparent" />
      </motion.div>
    </div>
  );
};
