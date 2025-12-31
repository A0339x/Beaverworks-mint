import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Play, ExternalLink, PlayCircle, FileText, X } from 'lucide-react';
import { PAGE_CONTENT } from '../constants';
import { CallToAction } from './CallToAction';

interface StoryPageProps {
  pageId?: string;
  onNavigate?: (id: string, type: 'page') => void;
}

export const StoryPage: React.FC<StoryPageProps> = ({ pageId = 'story', onNavigate }) => {
  const content = PAGE_CONTENT[pageId] || PAGE_CONTENT['story'];
  const [selectedTrack, setSelectedTrack] = useState<number | null>(null);
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  // Check if first section is videoHero - if so, skip default header
  const hasVideoHero = content.sections[0]?.type === 'videoHero';

  return (
    <div className="min-h-screen bg-white">
      {/* Lightbox for gallery images */}
      {lightboxImage && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setLightboxImage(null)}
        >
          <button
            className="absolute top-6 right-6 text-white hover:text-canadian-red transition-colors"
            onClick={() => setLightboxImage(null)}
          >
            <X className="w-8 h-8" />
          </button>
          <img
            src={lightboxImage}
            alt="Gallery"
            className="max-w-full max-h-[90vh] object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}

      {/* Default Header - only show if no videoHero */}
      {!hasVideoHero && (
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
      )}

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

          // Music Player Type: Side-by-side album art and track list
          if (section.type === 'musicPlayer') {
            const trackParam = selectedTrack ? `/track=${selectedTrack}/` : '';
            return (
              <div key={idx} className="container mx-auto px-6 mb-32">
                <div className="max-w-5xl mx-auto">
                  {section.title && (
                    <h2 className="text-3xl font-serif text-slate-900 mb-2 text-center">{section.title}</h2>
                  )}
                  {section.subtitle && (
                    <p className="text-slate-500 text-center mb-10">{section.subtitle}</p>
                  )}
                  <div className="flex flex-col md:flex-row bg-white shadow-xl rounded-sm">
                    {/* Album Art with embedded player */}
                    <div className="md:w-2/5 flex flex-col bg-[#333333]">
                      <img
                        src={section.albumArt}
                        alt={section.title || 'Album'}
                        className="w-full h-auto object-cover"
                      />
                      {/* Instruction when track is selected */}
                      {selectedTrack && (
                        <div className="bg-canadian-red text-white text-center py-3 text-sm font-medium animate-pulse">
                          ▶ Press play below to start
                        </div>
                      )}
                      {/* Bandcamp player - updates when track is selected */}
                      <div className="p-3">
                        <iframe
                          key={selectedTrack || 'default'}
                          src={`https://bandcamp.com/EmbeddedPlayer/album=${section.bandcampAlbumId}${trackParam}/size=small/bgcol=333333/linkcol=c8102e/transparent=true/`}
                          style={{ border: 0, width: '100%', height: '120px' }}
                          seamless
                          title="Music player"
                        />
                      </div>
                    </div>
                    {/* Track List */}
                    <div className="md:w-3/5 p-6 md:p-8 overflow-y-auto" style={{ maxHeight: '500px' }}>
                      <h3 className="text-xs font-bold tracking-[0.2em] uppercase text-slate-400 mb-6">Track List — Click to Play</h3>
                      <ul className="space-y-1">
                        {section.tracks?.map((track, trackIdx) => (
                          <li
                            key={trackIdx}
                            onClick={() => setSelectedTrack(track.trackId)}
                            className={`flex justify-between items-center py-3 border-b border-gray-100 hover:bg-gray-50 transition-colors cursor-pointer group ${selectedTrack === track.trackId ? 'bg-gray-50' : ''}`}
                          >
                            <div className="flex items-center gap-4">
                              <span className={`w-6 h-6 flex items-center justify-center rounded-full text-sm ${selectedTrack === track.trackId ? 'bg-canadian-red text-white' : 'text-slate-400 group-hover:bg-canadian-red group-hover:text-white'} transition-colors`}>
                                {selectedTrack === track.trackId ? (
                                  <Play className="w-3 h-3 fill-current" />
                                ) : (
                                  trackIdx + 1
                                )}
                              </span>
                              <span className={`${selectedTrack === track.trackId ? 'text-canadian-red font-medium' : 'text-slate-900 group-hover:text-canadian-red'} transition-colors`}>{track.title}</span>
                            </div>
                          </li>
                        ))}
                      </ul>
                      <a
                        href="https://johnsonthebeavers.bandcamp.com/album/per-ardua-ad-astra"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block mt-8 text-xs font-bold tracking-[0.2em] uppercase text-canadian-red hover:text-canadian-dark transition-colors"
                      >
                        View Full Album on Bandcamp →
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            );
          }

          // Press Gallery Type: Grid of press items with links
          if (section.type === 'pressGallery') {
            return (
              <div key={idx} className="container mx-auto px-6 mb-32">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {section.items?.map((item, itemIdx) => (
                    <motion.a
                      key={itemIdx}
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: itemIdx * 0.1 }}
                      className="group bg-white shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
                    >
                      <div className="relative aspect-[4/3] overflow-hidden">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/20 transition-colors duration-300" />
                        <div className="absolute top-4 left-4">
                          <span className="bg-canadian-red text-white text-xs font-bold uppercase tracking-wider px-3 py-1">
                            {item.source}
                          </span>
                        </div>
                        <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          {item.type === 'video' ? (
                            <PlayCircle className="w-12 h-12 text-white drop-shadow-lg" />
                          ) : (
                            <ExternalLink className="w-8 h-8 text-white drop-shadow-lg" />
                          )}
                        </div>
                      </div>
                      <div className="p-6">
                        <p className="text-xs text-slate-400 uppercase tracking-wider mb-2">{item.date}</p>
                        <h3 className="font-serif text-xl text-slate-900 mb-3 group-hover:text-canadian-red transition-colors">
                          {item.title}
                        </h3>
                        <p className="text-slate-600 text-sm leading-relaxed">
                          {item.description}
                        </p>
                        <div className="mt-4 flex items-center gap-2 text-canadian-red text-sm font-medium">
                          {item.type === 'video' ? (
                            <>
                              <PlayCircle className="w-4 h-4" />
                              Watch Video
                            </>
                          ) : (
                            <>
                              <FileText className="w-4 h-4" />
                              Read Article
                            </>
                          )}
                          <ExternalLink className="w-3 h-3" />
                        </div>
                      </div>
                    </motion.a>
                  ))}
                </div>
              </div>
            );
          }

          // Video Hero Type: Full screen video background with text overlay
          if (section.type === 'videoHero') {
            const isYouTube = section.videoUrl?.includes('youtube.com');
            return (
              <div key={idx} className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden -mt-24">
                <div className="absolute inset-0">
                  {section.videoUrl && isYouTube ? (
                    <div className="absolute inset-0 w-full h-full overflow-hidden">
                      <iframe
                        src={section.videoUrl}
                        title="Background video"
                        className="absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto -translate-x-1/2 -translate-y-1/2 scale-150"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        style={{ pointerEvents: 'none' }}
                      />
                      {/* Fallback image for when YouTube doesn't autoplay */}
                      {section.image && (
                        <img src={section.image} className="absolute inset-0 w-full h-full object-cover -z-10" alt="" />
                      )}
                    </div>
                  ) : section.videoUrl ? (
                    <video
                      autoPlay
                      muted
                      loop
                      playsInline
                      className="w-full h-full object-cover"
                    >
                      <source src={section.videoUrl} type="video/mp4" />
                    </video>
                  ) : section.image ? (
                    <img src={section.image} className="w-full h-full object-cover" alt="" />
                  ) : null}
                  <div className="absolute inset-0 bg-slate-900/50" />
                </div>
                <div className="relative z-10 text-center text-white p-6">
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                  >
                    {section.subtitle && (
                      <span className="block text-canadian-red text-xs font-bold tracking-[0.3em] uppercase mb-4">
                        {section.subtitle}
                      </span>
                    )}
                    {section.title && (
                      <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl mb-6">{section.title}</h1>
                    )}
                    {section.content && (
                      <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto font-light">
                        {section.content}
                      </p>
                    )}
                  </motion.div>
                </div>
              </div>
            );
          }

          // Gallery Type: Grid of images with lightbox
          if (section.type === 'gallery') {
            return (
              <div key={idx} className="container mx-auto px-6 mb-32">
                {section.title && (
                  <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-serif text-slate-900 mb-4">{section.title}</h2>
                    {section.subtitle && (
                      <p className="text-slate-500 text-lg">{section.subtitle}</p>
                    )}
                  </div>
                )}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3">
                  {section.images?.map((img, imgIdx) => (
                    <motion.div
                      key={imgIdx}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: imgIdx * 0.05 }}
                      className="aspect-square overflow-hidden cursor-pointer group"
                      onClick={() => setLightboxImage(img)}
                    >
                      <img
                        src={img}
                        alt={`Gallery ${imgIdx + 1}`}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </motion.div>
                  ))}
                </div>
              </div>
            );
          }

          // Movie Section Type: Centered title with subtitle for film references
          if (section.type === 'movieSection') {
            return (
              <div key={idx} className="py-24 bg-slate-900 text-white mb-24">
                <div className="container mx-auto px-6 text-center">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                  >
                    {section.title && (
                      <h2 className="text-4xl md:text-6xl font-serif mb-6">{section.title}</h2>
                    )}
                    {section.subtitle && (
                      <p className="text-xl md:text-2xl text-canadian-red font-medium uppercase tracking-wider">
                        {section.subtitle}
                      </p>
                    )}
                    {section.content && (
                      <p className="text-lg text-gray-300 max-w-3xl mx-auto mt-8 leading-relaxed">
                        {section.content}
                      </p>
                    )}
                    {section.videoUrl && (
                      <div className="mt-12 max-w-4xl mx-auto aspect-video">
                        <iframe
                          src={section.videoUrl}
                          title={section.title || 'Video'}
                          className="w-full h-full rounded-sm shadow-2xl"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        />
                      </div>
                    )}
                    {section.image && !section.videoUrl && (
                      <div className="mt-12 max-w-4xl mx-auto">
                        <img src={section.image} alt={section.title} className="w-full rounded-sm shadow-2xl" />
                      </div>
                    )}
                  </motion.div>
                </div>
              </div>
            );
          }

          // Product Info Type: Specs and details for product pages
          if (section.type === 'productInfo') {
            return (
              <div key={idx} className="container mx-auto px-6 mb-32">
                <div className="max-w-4xl mx-auto bg-slate-50 p-8 md:p-12 rounded-sm">
                  {section.title && (
                    <h2 className="text-3xl font-serif text-slate-900 mb-6">{section.title}</h2>
                  )}
                  {section.price && (
                    <p className="text-3xl font-bold text-canadian-red mb-8">{section.price}</p>
                  )}
                  {section.specs && section.specs.length > 0 && (
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-8">
                      {section.specs.map((spec, specIdx) => (
                        <div key={specIdx} className="border-l-2 border-canadian-red pl-4">
                          <p className="text-xs text-slate-500 uppercase tracking-wider mb-1">{spec.label}</p>
                          <p className="text-lg font-medium text-slate-900">{spec.value}</p>
                        </div>
                      ))}
                    </div>
                  )}
                  {section.content && (
                    <p className="text-slate-600 leading-relaxed whitespace-pre-line">{section.content}</p>
                  )}
                </div>
              </div>
            );
          }

          // Standard Type: Text and Image/Video split
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
                    {section.videoUrl ? (
                        <div className="flex-1 w-full">
                            <motion.div
                                initial={{ opacity: 0, x: section.imageAlign === 'left' ? -30 : 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8 }}
                                className="aspect-video"
                            >
                                <iframe
                                    src={section.videoUrl}
                                    title={section.title || 'Video'}
                                    className="w-full h-full shadow-2xl rounded-sm"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                />
                            </motion.div>
                        </div>
                    ) : section.image && (
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
