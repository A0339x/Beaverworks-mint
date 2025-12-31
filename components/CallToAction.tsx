import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface CallToActionProps {
  onNavigate?: (id: string, type: 'page') => void;
}

export const CallToAction: React.FC<CallToActionProps> = ({ onNavigate }) => {
  const handleClick = () => {
    if (onNavigate) {
      onNavigate('contact', 'page');
    } else {
      window.location.href = '#contact'; // Fallback if no navigator
    }
  };

  return (
    <section className="bg-slate-900 py-24 relative overflow-hidden">
      {/* Background Texture */}
      <div className="absolute inset-0 opacity-20">
         <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                    <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5"/>
                </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-canadian-red text-xs font-bold tracking-[0.2em] uppercase mb-6 block">
            Start Your Journey
          </span>
          <h2 className="text-4xl md:text-5xl font-serif text-white mb-8">
            Ready to Mint Your Legacy?
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg mb-12 font-light leading-relaxed">
            Whether you are looking for a custom commission, have questions about our process, or simply want to talk shop about Canadian aviation history — we are listening.
          </p>
          
          <button 
            onClick={handleClick}
            className="group inline-flex items-center gap-4 bg-white text-slate-900 px-10 py-4 text-sm uppercase tracking-widest hover:bg-canadian-red hover:text-white transition-all duration-300"
          >
            Contact Us
            <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};
