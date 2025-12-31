import React from 'react';
import { motion } from 'framer-motion';
import { ALL_PRODUCTS, COLLECTION_INFO } from '../constants';
import { ProductHighlight, ViewType } from '../types';
import { CallToAction } from './CallToAction';

interface CollectionPageProps {
  categoryId: string;
  onNavigate: (id: string, type: ViewType) => void;
}

export const CollectionPage: React.FC<CollectionPageProps> = ({ categoryId, onNavigate }) => {
  // Filter products. If categoryId is 'shop', show all.
  const products = categoryId === 'shop' 
    ? ALL_PRODUCTS 
    : ALL_PRODUCTS.filter(p => p.category === categoryId || p.category.includes(categoryId));

  const collectionInfo = COLLECTION_INFO[categoryId];

  const getTitle = () => {
    if (collectionInfo) return collectionInfo.title;
    switch(categoryId) {
      case 'shop': return 'All Collections';
      case 'arrow-collection': return 'The Avro Arrow';
      case '100-collection': return 'The 100 Collection';
      case 'watches': return 'Timepieces';
      case 'bullion': return 'Investment Bullion';
      default: return 'Collection';
    }
  };

  const renderHeader = () => {
    if (collectionInfo) {
      return (
        <div className="mb-24">
          {/* Rich Hero Banner */}
          <div className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden mb-24 bg-slate-900">
             {collectionInfo.heroImage && (
               <div className="absolute inset-0">
                 <img src={collectionInfo.heroImage} className="w-full h-full object-cover opacity-60" alt="" />
                 <div className="absolute inset-0 bg-black/60" />
               </div>
             )}
             <div className="relative z-10 text-center text-white px-6 max-w-5xl mx-auto">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  <span className="block text-canadian-red text-xs font-bold tracking-[0.3em] uppercase mb-6">{collectionInfo.subtitle}</span>
                  <h1 className="font-serif text-4xl md:text-6xl leading-tight mb-6 tracking-wide">
                    {collectionInfo.heroHeadline}
                  </h1>
                  {collectionInfo.heroSubheadline && (
                    <p className="text-xl md:text-2xl text-gray-300 font-light tracking-widest uppercase">
                      {collectionInfo.heroSubheadline}
                    </p>
                  )}
                </motion.div>
             </div>
          </div>

          {/* Narrative & Stats Section - Vertical Editorial Layout */}
          <div className="container mx-auto px-6 max-w-4xl">
             <motion.div
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               className="text-center mb-16"
             >
               <span className="text-canadian-red text-xs font-bold tracking-[0.2em] uppercase mb-4 block">Our Commitment</span>
               {collectionInfo.contentTitle && <h2 className="text-4xl md:text-5xl font-serif text-slate-900 mb-10">{collectionInfo.contentTitle}</h2>}
               
               {/* Stats Grid - Centered */}
               {collectionInfo.stats && (
                 <div className="flex justify-center gap-16 mb-12">
                   {collectionInfo.stats.map((stat, idx) => (
                     <div key={idx} className="text-center">
                       <span className="block text-5xl font-serif text-slate-900 mb-2">{stat.value}</span>
                       <span className="text-xs uppercase tracking-widest text-slate-500">{stat.label}</span>
                     </div>
                   ))}
                 </div>
               )}
             </motion.div>

             {/* Cinematic Image */}
             {collectionInfo.secondaryImage && (
               <motion.div
                 initial={{ opacity: 0, scale: 0.95 }}
                 whileInView={{ opacity: 1, scale: 1 }}
                 viewport={{ once: true }}
                 className="mb-16"
               >
                 <img src={collectionInfo.secondaryImage} alt="Collection Highlight" className="w-full h-auto shadow-2xl rounded-sm" />
               </motion.div>
             )}

             {/* Narrative Text */}
             <motion.div
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               className="prose prose-lg prose-slate mx-auto text-slate-600 font-light leading-relaxed whitespace-pre-line text-justify max-w-3xl"
             >
               {collectionInfo.content}
             </motion.div>

             {/* Section Divider */}
             <div className="w-full h-px bg-gray-100 mt-24" />
          </div>
        </div>
      );
    }

    // Default Header
    return (
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16 pt-32"
        >
          <span className="text-canadian-red text-xs font-bold tracking-[0.2em] uppercase mb-4 block">Official Release</span>
          <h1 className="text-4xl md:text-5xl font-serif text-slate-900 mb-6">{getTitle()}</h1>
          <div className="w-20 h-1 bg-slate-900 mx-auto" />
        </motion.div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {renderHeader()}

      <div className="container mx-auto px-6 pb-24">
        {/* Only show products grid title if we have a custom header, to separate the narrative from the shop */}
        {collectionInfo && (
           <div className="text-center mb-16 mt-12">
              <span className="text-xs font-bold tracking-[0.2em] uppercase text-slate-400 mb-3 block">The Collection</span>
              <h3 className="text-3xl font-serif text-slate-900">Available Coins</h3>
           </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.length > 0 ? (
            products.map((product) => (
              <motion.div 
                key={product.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                whileHover={{ y: -5 }}
                className="bg-white group cursor-pointer shadow-sm hover:shadow-xl transition-all duration-300"
                onClick={() => onNavigate(product.id, 'product')}
              >
                <div className="aspect-square relative overflow-hidden bg-gray-100">
                  <img 
                    src={product.image} 
                    alt={product.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/10 transition-colors" />
                </div>
                
                <div className="p-8 text-center">
                  <h3 className="font-serif text-xl text-slate-900 mb-2">{product.title}</h3>
                  <p className="text-xs uppercase tracking-widest text-slate-500 mb-4">{product.subtitle}</p>
                  <p className="font-medium text-canadian-red">{product.price}</p>
                </div>
              </motion.div>
            ))
          ) : (
            <div className="col-span-full text-center text-gray-400 py-20">
              <p>No products found in this collection yet.</p>
            </div>
          )}
        </div>
      </div>

      {/* Call To Action */}
      <CallToAction onNavigate={onNavigate} />
    </div>
  );
};
