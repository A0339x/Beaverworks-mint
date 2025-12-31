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
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden fixed inset-0 bg-slate-900 z-40 flex flex-col"
          >
            {/* Header area with logo and close button */}
            <div className="flex-shrink-0 flex justify-between items-center px-6 py-4 border-b border-slate-800">
              <img
                src="/logo-1.png"
                alt="Beaverworks Mint"
                className="h-10 w-auto invert"
              />
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="text-white p-2"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Scrollable menu content - flex-1 takes remaining space */}
            <div className="flex-1 overflow-y-auto px-6 py-4">
              {NAV_ITEMS.map((item, index) => (
                <div key={item.label}>
                  <button
                    onClick={() => handleNavClick(item)}
                    className="flex justify-between items-center w-full text-left py-4 border-b border-slate-800"
                  >
                    <span className="text-white text-lg font-medium tracking-wide">
                      {item.label}
                    </span>
                    {item.children && (
                      <ChevronDown
                        className={`w-5 h-5 text-slate-400 transition-transform duration-300 ${
                          activeSubmenu === item.label ? 'rotate-180 text-canadian-red' : ''
                        }`}
                      />
                    )}
                  </button>

                  {/* Submenu */}
                  {item.children && activeSubmenu === item.label && (
                    <div className="bg-slate-800/50 -mx-6 px-6">
                      {item.children.map((child) => (
                        <button
                          key={child.label}
                          onClick={(e) => handleChildClick(e, child)}
                          className="block w-full text-left py-3 pl-4 text-slate-300 hover:text-canadian-red transition-colors border-b border-slate-700/50 last:border-b-0"
                        >
                          <span className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 bg-canadian-red rounded-full"></span>
                            {child.label}
                          </span>
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Bottom action buttons */}
            <div className="flex-shrink-0 p-6 bg-slate-900 border-t border-slate-800">
              <div className="flex gap-3">
                <button className="flex items-center justify-center gap-2 flex-1 py-4 bg-slate-800 text-white font-medium rounded-sm hover:bg-slate-700 transition-colors">
                  <User className="w-5 h-5" />
                  Account
                </button>
                <button className="flex items-center justify-center gap-2 flex-1 py-4 bg-canadian-red text-white font-medium rounded-sm hover:bg-red-700 transition-colors">
                  <ShoppingBag className="w-5 h-5" />
                  Cart
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
