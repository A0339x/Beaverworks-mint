import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-white pt-24 pb-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16 border-b border-white/10 pb-16">
          <div className="lg:col-span-2">
            <h2 className="font-serif text-3xl mb-6">BEAVERWORKS MINT</h2>
            <p className="text-gray-400 max-w-md font-light leading-relaxed mb-8">
              Western Canada's only operating private mint. Dedicated to the Royal Canadian Air Force and next-level excellence.
            </p>
            <div className="flex gap-4">
              {/* Social placeholders */}
              <div className="w-10 h-10 border border-white/20 rounded-full flex items-center justify-center hover:bg-white hover:text-slate-900 transition-all cursor-pointer">IG</div>
              <div className="w-10 h-10 border border-white/20 rounded-full flex items-center justify-center hover:bg-white hover:text-slate-900 transition-all cursor-pointer">FB</div>
            </div>
          </div>
          
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-white/50 mb-6">Collections</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-sm text-gray-300 hover:text-white transition-colors">The 100 Collection</a></li>
              <li><a href="#" className="text-sm text-gray-300 hover:text-white transition-colors">Avro Arrow</a></li>
              <li><a href="#" className="text-sm text-gray-300 hover:text-white transition-colors">Bullion</a></li>
              <li><a href="#" className="text-sm text-gray-300 hover:text-white transition-colors">Custom Coins</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-white/50 mb-6">Company</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-sm text-gray-300 hover:text-white transition-colors">Our Story</a></li>
              <li><a href="#" className="text-sm text-gray-300 hover:text-white transition-colors">Contact</a></li>
              <li><a href="#" className="text-sm text-gray-300 hover:text-white transition-colors">Press</a></li>
              <li><a href="#" className="text-sm text-gray-300 hover:text-white transition-colors">My Account</a></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 uppercase tracking-wider">
          <p>© {new Date().getFullYear()} Beaverworks Mint. Crafted in Canada.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
