import React from 'react';
import { motion } from 'framer-motion';
import { PAGE_CONTENT } from '../constants';
import { CallToAction } from './CallToAction';

interface StoryPageProps {
  pageId?: string;
  onNavigate?: (id: string, type: 'page') => void;
}

export const StoryPage: React.FC<StoryPageProps> = ({ pageId = 'story', onNavigate }) => {
  const content = PAGE_CONTENT[pageId] || PAGE_CONTENT['story'];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={content.headerImage} className="w-full h-full object-cover grayscale brightness-50" alt={content.title} />
          <div className="absolute inset-0 bg-slate-900/40" />
        </div>
        <div className="relative z-10 text-center text-white p-6">
           <motion.div
             initial={{ opacity: 0, y: 30 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.8 }}
           >
             <span className="block text-canadian-red text-xs font-bold tracking-[0.3em] uppercase mb-4">{content.subtitle}</span>
             <h1 className="font-serif text-5xl md:text-7xl">{content.title}</h1>
           </motion.div>
        </div>
      </div>

      {/* Content Sections */}
      <div className="py-24">
        {content.sections.map((section, idx) => {
          // Banner Type: Full width colored background with quote
          if (section.type === 'banner') {
            return (
              <div key={idx} className="bg-slate-900 py-32 mb-24 relative overflow-hidden">
                 <div className="absolute inset-0 opacity-10 pointer-events-none">
                    {/* Abstract texture */}
                    <svg width="100%" height="100%">
                        <filter id="noise">
                            <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="3" stitchTiles="stitch"/>
                        </filter>
                        <rect width="100%" height="100%" filter="url(#noise)" />
                    </svg>
                 </div>
                 <div className="container mx-auto px-6 text-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        {section.title && <h2 className="text-3xl md:text-5xl font-serif text-white mb-8">{section.title}</h2>}
                        {section.quote && (
                            <div className="max-w-4xl mx-auto">
                                <p className="text-xl md:text-3xl text-canadian-red font-serif italic leading-relaxed">
                                    "{section.quote}"
                                </p>
                            </div>
                        )}
                    </motion.div>
                 </div>
              </div>
            );
          }

          // Embed Type: For Bandcamp or other iframes
          if (section.type === 'embed') {
            return (
              <div key={idx} className="container mx-auto px-6 mb-32">
                <div className="max-w-3xl mx-auto">
                  {section.title && (
                    <h2 className="text-3xl font-serif text-slate-900 mb-4 text-center">{section.title}</h2>
                  )}
                  {section.subtitle && (
                    <p className="text-slate-500 text-center mb-8">{section.subtitle}</p>
                  )}
                  <div className="bg-white shadow-xl rounded-sm overflow-hidden">
                    <iframe
                      src={section.embedUrl}
                      style={{ border: 0, width: '100%', height: '920px' }}
                      seamless
                      title={section.title || 'Embedded content'}
                    />
                  </div>
                </div>
              </div>
            );
          }

          // Standard Type: Text and Image split
          return (
            <div key={idx} className="container mx-auto px-6 mb-32">
                <div className={`flex flex-col md:flex-row items-center gap-16 ${section.imageAlign === 'left' ? 'md:flex-row-reverse' : ''}`}>
                    <div className="flex-1">
                        {section.subtitle && <span className="text-canadian-red text-xs font-bold tracking-[0.2em] uppercase mb-4 block">{section.subtitle}</span>}
                        {section.title && <h2 className="text-4xl font-serif text-slate-900 mb-8">{section.title}</h2>}
                        <div className="text-lg text-slate-600 font-light leading-relaxed whitespace-pre-line">
                            {section.content}
                        </div>
                    </div>
                    {section.image && (
                        <div className="flex-1 w-full">
                            <motion.div
                                initial={{ opacity: 0, x: section.imageAlign === 'left' ? -30 : 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8 }}
                            >
                                <img src={section.image} alt="Story" className="w-full h-auto shadow-2xl rounded-sm grayscale hover:grayscale-0 transition-all duration-1000" />
                            </motion.div>
                        </div>
                    )}
                </div>
            </div>
          );
        })}
      </div>

      <CallToAction onNavigate={onNavigate} />
    </div>
  );
};
