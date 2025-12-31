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

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-500 ease-in-out ${
        isScrolled || mobileMenuOpen || currentView !== 'home' ? 'bg-white/95 backdrop-blur-md shadow-sm py-2' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Brand Logo */}
        <button onClick={() => onNavigate('home', 'home')} className="z-50 select-none">
          <img
            src="/logo-1.png"
            alt="Beaverworks Mint"
            className={`h-12 md:h-16 w-auto transition-all duration-300 ${isDarkText ? '' : 'invert'}`}
          />
        </button>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-1 xl:gap-2 pl-4 xl:pl-8">
          {NAV_ITEMS.map((item) => (
            <div key={item.label} className="relative group">
              <button
                onClick={() => handleNavClick(item)}
                className={`text-xs xl:text-sm uppercase tracking-wider xl:tracking-widest font-medium transition-colors hover:text-canadian-red flex items-center gap-1 px-2 xl:px-3 py-2 ${textColorClass}`}
              >
                {item.label}
                {item.children && <ChevronDown className="w-3 h-3 opacity-60" />}
              </button>

              {/* Dropdown */}
              {item.children && (
                <div className="absolute top-full left-0 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:translate-y-0 translate-y-2 z-50">
                  <div className="bg-white shadow-2xl rounded-sm min-w-[220px] border-t-2 border-canadian-red overflow-hidden">
                    {item.children.map((child, idx) => (
                      <button
                        key={child.label}
                        onClick={(e) => handleChildClick(e, child)}
                        className={`block w-full text-left py-3 px-4 text-slate-600 hover:text-canadian-red hover:bg-red-50 text-sm transition-colors tracking-wide whitespace-nowrap ${idx !== item.children!.length - 1 ? 'border-b border-gray-100' : ''}`}
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
