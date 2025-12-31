import React from 'react';
import { motion } from 'framer-motion';

const PRODUCTS = [
  { id: 1, title: 'The Golden Arrow', subtitle: 'The Coin They Tried to Kill', price: '$12,500.00', image: 'https://beaverworksmint.ca/wp-content/uploads/2025/08/GoldenArrow22.jpg' },
  { id: 2, title: 'The RCAF Silver Maple', subtitle: 'Born from Grit', price: '$145.00', image: 'https://beaverworksmint.ca/wp-content/uploads/2025/08/SilverMaple1.jpg' },
  { id: 3, title: 'The Supermarine Spitfire', subtitle: 'Legacy Series', price: '$155.00', image: 'https://beaverworksmint.ca/wp-content/uploads/2025/08/Spitfire.jpg' },
];

export const ProductGrid: React.FC = () => {
  return (
    <section className="py-24 bg-white" id="shop">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-xs font-bold tracking-[0.2em] uppercase text-canadian-red mb-3 block">Featured Collection</span>
          <h2 className="text-4xl font-serif text-slate-900">Canadian Heritage</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-gray-100 border border-gray-100">
          {PRODUCTS.map((product) => (
            <div key={product.id} className="relative group bg-white p-12 overflow-hidden cursor-pointer">
              <div className="aspect-square relative mb-8">
                <img 
                  src={product.image} 
                  alt={product.title}
                  className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/10 transition-colors duration-300" />
              </div>
              
              <div className="text-center relative z-10">
                <h3 className="font-serif text-2xl text-slate-900 mb-1">{product.title}</h3>
                <p className="text-xs uppercase tracking-widest text-slate-500 mb-4">{product.subtitle}</p>
                <div className="w-8 h-[1px] bg-canadian-red mx-auto mb-4 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                <p className="font-medium text-slate-900">{product.price}</p>
              </div>

              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 bg-slate-900 text-white px-6 py-2 text-xs uppercase tracking-widest"
              >
                Quick View
              </motion.button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
