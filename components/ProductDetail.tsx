import React from 'react';
import { motion } from 'framer-motion';
import { ALL_PRODUCTS } from '../constants';
import { ViewType } from '../types';
import { ArrowLeft, Check, Shield, MessageCircle } from 'lucide-react';

interface ProductDetailProps {
  productId: string;
  onNavigate: (id: string, type: ViewType) => void;
}

export const ProductDetail: React.FC<ProductDetailProps> = ({ productId, onNavigate }) => {
  const product = ALL_PRODUCTS.find(p => p.id === productId);

  if (!product) return <div>Product not found</div>;

  return (
    <div className="pt-32 pb-24 min-h-screen bg-white">
      <div className="container mx-auto px-6">
        <button 
          onClick={() => onNavigate(product.category, 'category')}
          className="flex items-center gap-2 text-xs uppercase tracking-widest text-slate-500 hover:text-canadian-red mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Collection
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Image Side */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-gray-50 aspect-square flex items-center justify-center p-8"
          >
            <img 
              src={product.image} 
              alt={product.title} 
              className="max-w-full max-h-full object-contain shadow-2xl rounded-full"
            />
          </motion.div>

          {/* Details Side */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex flex-col justify-center"
          >
            <span className="text-canadian-red text-xs font-bold tracking-[0.2em] uppercase mb-4">{product.subtitle}</span>
            <h1 className="text-4xl md:text-5xl font-serif text-slate-900 mb-6">{product.title}</h1>
            <p className="text-2xl font-light text-slate-900 mb-8">{product.price}</p>
            
            <p className="text-slate-600 leading-relaxed mb-8 border-b border-gray-100 pb-8">
              {product.longDescription || product.description}
            </p>

            {product.specs && (
              <div className="mb-10">
                <h3 className="text-sm font-bold uppercase tracking-widest text-slate-900 mb-4">Specifications</h3>
                <div className="grid grid-cols-2 gap-y-4">
                  {product.specs.map((spec, idx) => (
                    <div key={idx}>
                      <span className="block text-xs text-slate-400 uppercase tracking-wider">{spec.label}</span>
                      <span className="block text-slate-800 font-medium">{spec.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="flex flex-col gap-4 mb-8">
              <button className="w-full bg-canadian-red text-white py-4 px-8 text-sm uppercase tracking-widest hover:bg-canadian-dark transition-colors shadow-lg shadow-red-900/20">
                Add to Cart
              </button>
              <button 
                onClick={() => onNavigate('contact', 'page')}
                className="w-full border border-slate-200 text-slate-600 py-3 px-8 text-xs uppercase tracking-widest hover:border-slate-900 hover:text-slate-900 transition-colors flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4" /> Have Questions about this piece?
              </button>
            </div>

            <div className="flex items-center gap-6 text-xs text-slate-500 uppercase tracking-wider">
               <div className="flex items-center gap-2">
                 <Shield className="w-4 h-4" /> Authentic
               </div>
               <div className="flex items-center gap-2">
                 <Check className="w-4 h-4" /> In Stock
               </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
