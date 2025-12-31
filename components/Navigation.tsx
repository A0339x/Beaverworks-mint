import React, { useState, useEffect } from 'react';
import { Menu, X, ShoppingBag, User, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { NAV_ITEMS } from '../constants';
import { NavItem, ViewType } from '../types';

interface NavigationProps {
  onNavigate: (id: string, type: ViewType) => void;
  currentView: string;
}

export const Navigation: React.FC<NavigationProps> = ({ onNavigate, currentView }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (item: NavItem) => {
    if (!item.children) {
      onNavigate(item.id, item.type);
      setMobileMenuOpen(false);
    } else {
        // For mobile, we toggle submenu. For desktop, this click might go to a main category page
        if (window.innerWidth < 1024) {
             setActiveSubmenu(activeSubmenu === item.label ? null : item.label);
        } else {
             onNavigate(item.id, item.type);
        }
    }
  };

  const handleChildClick = (e: React.MouseEvent, child: NavItem) => {
    e.stopPropagation();
    onNavigate(child.id, child.type);
    setMobileMenuOpen(false);
  };

  // Helper for colors based on state
  const isDarkText = isScrolled || mobileMenuOpen || currentView !== 'home';
  const textColorClass = isDarkText ? 'text-slate-900' : 'text-white';
  const borderColorClass = isDarkText ? 'bg-slate-900' : 'bg-white';
  const fillClass = isDarkText ? 'fill-slate-900' : 'fill-white';

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-500 ease-in-out ${
        isScrolled || mobileMenuOpen || currentView !== 'home' ? 'bg-white/95 backdrop-blur-md shadow-sm py-2' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Brand Logo Recreation */}
        <button onClick={() => onNavigate('home', 'home')} className="flex flex-col items-center group z-50 select-none">
             <div className="flex flex-col items-center w-[160px] md:w-[180px]">
                {/* Top Line & Leaf */}
                <div className="relative w-full flex justify-center items-end mb-[2px]">
                    <div className={`h-[1px] w-full ${borderColorClass} transition-colors duration-300 absolute bottom-[5px]`}></div>
                    <div className={`relative z-10 ${textColorClass} transition-colors duration-300 bg-transparent`}>
                         {/* Maple Leaf SVG - Positioned to break the line slightly visually or sit on top */}
                         <div className={isDarkText ? 'bg-white/95 px-1' : 'bg-transparent px-1'}> 
                             {/* Note: Background mask trick only works if bg is solid. For transparent header, we rely on z-index */}
                             <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="transform translate-y-[2px]">
                                <path d="M21.6 10.6l-4.2-1.4 1.7-3.6c0.3-0.7-0.3-1.4-1-1.1l-3.8 1.8-1-4C13.1 1.6 12.6 1.6 12.4 2.3l-1 4-3.8-1.8c-0.7-0.3-1.3 0.4-1 1.1l1.7 3.6-4.2 1.4c-0.7 0.2-0.8 1.2-0.1 1.6l3.5 1.9-1.6 4.1c-0.3 0.7 0.4 1.4 1.1 1.1l4-1.9v4.2c0 0.6 0.9 0.6 0.9 0l0-4.2 4 1.9c0.7 0.3 1.4-0.4 1.1-1.1l-1.6-4.1 3.5-1.9C22.4 11.8 22.3 10.8 21.6 10.6z"/>
                             </svg>
                         </div>
                    </div>
                </div>
                
                {/* BEAVERWORKS */}
                <h1 className={`font-serif text-2xl md:text-3xl font-normal leading-none tracking-wide ${textColorClass} transition-colors duration-300`}>
                  BEAVERWORKS
                </h1>

                {/* Middle Line */}
                <div className={`h-[1px] w-full ${borderColorClass} transition-colors duration-300 my-[3px]`}></div>

                {/* MINT */}
                <div className={`flex justify-between w-full px-1 ${textColorClass} transition-colors duration-300`}>
                    <span className="text-[10px] md:text-xs font-serif tracking-[0.4em]">M</span>
                    <span className="text-[10px] md:text-xs font-serif tracking-[0.4em]">I</span>
                    <span className="text-[10px] md:text-xs font-serif tracking-[0.4em]">N</span>
                    <span className="text-[10px] md:text-xs font-serif tracking-[0.4em]">T</span>
                </div>
                
                {/* Bottom Line */}
                <div className={`h-[1px] w-full ${borderColorClass} transition-colors duration-300 mt-[3px]`}></div>
             </div>
        </button>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-8 pl-12">
          {NAV_ITEMS.map((item) => (
            <div key={item.label} className="relative group">
              <button
                onClick={() => handleNavClick(item)}
                className={`text-sm uppercase tracking-widest font-medium transition-colors hover:text-canadian-red flex items-center gap-1 ${textColorClass}`}
              >
                {item.label}
                {item.children && <ChevronDown className="w-3 h-3" />}
              </button>
              
              {/* Dropdown */}
              {item.children && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-8 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:translate-y-0 translate-y-2">
                  <div className="bg-white shadow-xl p-4 min-w-[200px] border-t-2 border-canadian-red">
                    {item.children.map((child) => (
                      <button
                        key={child.label}
                        onClick={(e) => handleChildClick(e, child)}
                        className="block w-full text-left py-2 text-slate-600 hover:text-canadian-red hover:bg-red-50 px-2 text-sm transition-colors uppercase tracking-wider whitespace-nowrap"
                      >
                        {child.label}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Actions */}
        <div className="hidden lg:flex items-center gap-6">
          <button className={`transition-colors hover:text-canadian-red ${textColorClass}`}>
            <User className="w-5 h-5" />
          </button>
          <button className={`transition-colors hover:text-canadian-red ${textColorClass}`}>
            <div className="relative">
              <ShoppingBag className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 w-2 h-2 bg-canadian-red rounded-full" />
            </div>
          </button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className={`lg:hidden transition-colors z-50 ${textColorClass}`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: '100vh' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white fixed top-0 left-0 w-full overflow-y-auto pb-20 pt-32 z-40"
          >
            <div className="p-6 flex flex-col gap-4">
              {NAV_ITEMS.map((item) => (
                <div key={item.label}>
                  <button
                    onClick={() => handleNavClick(item)}
                    className="flex justify-between items-center w-full text-left text-lg font-serif text-slate-800 py-3 border-b border-gray-100"
                  >
                    {item.label}
                    {item.children && (
                      <ChevronDown className={`w-4 h-4 transition-transform ${activeSubmenu === item.label ? 'rotate-180' : ''}`} />
                    )}
                  </button>
                  
                  <AnimatePresence>
                    {item.children && activeSubmenu === item.label && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="bg-gray-50 overflow-hidden"
                      >
                        {item.children.map((child) => (
                          <button 
                            key={child.label} 
                            onClick={(e) => handleChildClick(e, child)} 
                            className="block w-full text-left py-3 px-6 text-sm text-slate-600 hover:text-canadian-red"
                          >
                            {child.label}
                          </button>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
              <div className="flex gap-4 mt-6 justify-center">
                <button className="flex items-center gap-2 px-6 py-3 bg-slate-900 text-white w-full justify-center">
                  <User className="w-4 h-4" /> Account
                </button>
                <button className="flex items-center gap-2 px-6 py-3 bg-canadian-red text-white w-full justify-center">
                  <ShoppingBag className="w-4 h-4" /> Cart
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
