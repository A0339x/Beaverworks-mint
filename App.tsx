import React, { useState, useEffect } from 'react';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { ProductGrid } from './components/ProductGrid';
import { NewsSection } from './components/NewsSection';
import { Footer } from './components/Footer';
import { CollectionPage } from './components/CollectionPage';
import { ProductDetail } from './components/ProductDetail';
import { StoryPage } from './components/StoryPage';
import { ContactPage } from './components/ContactPage';
import { ViewState, ViewType } from './types';
import { PAGE_CONTENT } from './constants';

function App() {
  const [view, setView] = useState<ViewState>({ type: 'home', id: 'home' });

  // Scroll to top on view change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [view]);

  const handleNavigate = (id: string, type: ViewType) => {
    setView({ id, type });
  };

  const renderContent = () => {
    switch (view.type) {
      case 'home':
        return (
          <>
            <Hero />
            <Features />
            <ProductGrid />
            {/* Banner Section */}
            <section className="relative py-32 bg-slate-900 text-white overflow-hidden">
              <div className="absolute inset-0 opacity-20">
                 <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <pattern id="smallGrid" width="20" height="20" patternUnits="userSpaceOnUse">
                            <path d="M 20 0 L 0 0 0 20" fill="none" stroke="white" strokeWidth="0.5"/>
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#smallGrid)" />
                </svg>
              </div>
              <div className="container mx-auto px-6 text-center relative z-10">
                <h2 className="text-4xl md:text-6xl font-serif mb-6">Always Keep a Promise</h2>
                <p className="text-lg text-gray-300 max-w-2xl mx-auto font-light leading-relaxed">
                  We built our own Mint to keep faith with Canada. 6 years and 18,000 hours ago, we made a promise. Today, we deliver.
                </p>
              </div>
            </section>
            <NewsSection onNavigate={handleNavigate} />
          </>
        );
      case 'category':
        return <CollectionPage categoryId={view.id} onNavigate={handleNavigate} />;
      case 'product':
        return <ProductDetail productId={view.id} onNavigate={handleNavigate} />;
      case 'page':
        // Dynamically route to any page defined in PAGE_CONTENT
        if (PAGE_CONTENT[view.id]) {
             return <StoryPage pageId={view.id} onNavigate={handleNavigate} />;
        }
        if (view.id === 'contact') return <ContactPage />;
        return <div>Page not found</div>;
      default:
        return <div>Not found</div>;
    }
  };

  return (
    <div className="min-h-screen">
      <Navigation onNavigate={handleNavigate} currentView={view.type} />
      <main>
        {renderContent()}
      </main>
      <Footer />
    </div>
  );
}

export default App;
