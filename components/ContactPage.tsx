import React from 'react';
import { PAGE_CONTENT } from '../constants';

export const ContactPage: React.FC = () => {
  const content = PAGE_CONTENT['contact'];

  return (
    <div className="pt-32 pb-24 min-h-screen bg-gray-50">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-serif text-slate-900 mb-6">{content.title}</h1>
          <p className="text-slate-600 max-w-2xl mx-auto">{content.sections[0].content}</p>
        </div>

        <div className="bg-white p-8 md:p-12 shadow-sm border border-gray-100">
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs uppercase tracking-widest text-slate-500 mb-2">First Name</label>
                <input type="text" className="w-full bg-gray-50 border border-gray-200 p-4 focus:outline-none focus:border-canadian-red transition-colors" />
              </div>
              <div>
                <label className="block text-xs uppercase tracking-widest text-slate-500 mb-2">Last Name</label>
                <input type="text" className="w-full bg-gray-50 border border-gray-200 p-4 focus:outline-none focus:border-canadian-red transition-colors" />
              </div>
            </div>
            <div>
              <label className="block text-xs uppercase tracking-widest text-slate-500 mb-2">Email Address</label>
              <input type="email" className="w-full bg-gray-50 border border-gray-200 p-4 focus:outline-none focus:border-canadian-red transition-colors" />
            </div>
            <div>
              <label className="block text-xs uppercase tracking-widest text-slate-500 mb-2">Message</label>
              <textarea rows={6} className="w-full bg-gray-50 border border-gray-200 p-4 focus:outline-none focus:border-canadian-red transition-colors"></textarea>
            </div>
            <button type="button" className="w-full bg-slate-900 text-white py-4 text-sm uppercase tracking-widest hover:bg-canadian-red transition-colors">
              Send Correspondence
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
