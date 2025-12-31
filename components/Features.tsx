import React from 'react';
import { motion } from 'framer-motion';
import { PROCESS_STEPS, STATS } from '../constants';

export const Features: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        
        {/* Intro Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24 border-b border-gray-100 pb-16">
          {STATS.map((stat, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="text-center group"
            >
              <stat.icon className="w-8 h-8 mx-auto mb-4 text-canadian-red opacity-80 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-4xl font-serif text-slate-800 mb-2">{stat.value}</h3>
              <p className="text-sm uppercase tracking-widest text-slate-500">{stat.label}</p>
              {stat.sub && <p className="text-xs text-canadian-red mt-1 font-medium">{stat.sub}</p>}
            </motion.div>
          ))}
        </div>

        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <span className="text-canadian-red text-xs font-bold tracking-[0.2em] uppercase mb-4 block">Our Process</span>
          <h2 className="text-4xl md:text-5xl font-serif text-slate-900 mb-6">
            Precision. Craft. <span className="italic">Legacy.</span>
          </h2>
          <p className="text-slate-600 leading-relaxed">
            From 2D layout to 3D sculpting, laser die engraving to heat treating — we handle every step with technical mastery right here in our Canadian facility.
          </p>
        </div>

        {/* Process Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-12 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gray-200 to-transparent -z-10" />
          
          {PROCESS_STEPS.map((step, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="relative bg-white pt-8"
            >
              <div className="w-10 h-10 bg-slate-50 border border-gray-100 rounded-full flex items-center justify-center mb-6 mx-auto shadow-sm">
                <step.icon className="w-5 h-5 text-slate-700" />
              </div>
              <h4 className="text-xl font-serif text-slate-900 mb-3 text-center">{step.title}</h4>
              <p className="text-sm text-slate-500 text-center leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
