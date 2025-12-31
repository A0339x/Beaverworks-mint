import React from 'react';
import { ArrowRight } from 'lucide-react';
import { NEWS_UPDATES } from '../constants';
import { ViewType } from '../types';

interface NewsSectionProps {
  onNavigate?: (id: string, type: ViewType) => void;
}

export const NewsSection: React.FC<NewsSectionProps> = ({ onNavigate }) => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-end mb-12">
          <div>
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-slate-400 mb-2 block">The Beaverworks Dam</span>
            <h2 className="text-3xl md:text-4xl font-serif text-slate-900">Latest News</h2>
          </div>
          <button className="hidden md:flex items-center gap-2 text-sm uppercase tracking-widest text-canadian-red hover:text-slate-900 transition-colors group">
            View All 
            <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {NEWS_UPDATES.map((item, idx) => (
            <div 
              key={idx} 
              onClick={() => onNavigate && onNavigate(item.id, 'page')}
              className="group block bg-white h-full shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer"
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-2 text-center min-w-[60px]">
                  <span className="block text-sm font-serif font-bold text-slate-900">{item.date.split(' ')[1]}</span>
                  <span className="block text-xs uppercase tracking-wider text-slate-500">{item.date.split(' ')[0]}</span>
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-xl font-serif text-slate-900 mb-3 group-hover:text-canadian-red transition-colors">
                  {item.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-6 line-clamp-3">
                  {item.excerpt}
                </p>
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-400 group-hover:text-slate-800 transition-colors">
                  Read More
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
