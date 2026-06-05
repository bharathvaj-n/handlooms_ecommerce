import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function Collections({ setFilterCategory }) {
  const collectionsList = [
    {
      id: 'festive-sarees',
      name: 'Festive Sarees',
      count: '24 designs',
      category: 'sarees',
      style: {
        background: 'linear-gradient(135deg, #6B0F1A 0%, #3a080f 100%)',
        backgroundImage: 'repeating-linear-gradient(45deg, #6B0F1A, #6B0F1A 10px, #C9A84C 10px, #C9A84C 11px)',
        opacity: 0.95
      }
    },
    {
      id: 'daily-sarees',
      name: 'Daily Wear',
      count: '18 designs',
      category: 'sarees',
      style: {
        background: 'linear-gradient(135deg, #FDF8F0 0%, #FAF3E0 100%)',
        backgroundImage: 'radial-gradient(#2D4A3E 0.5px, transparent 0.5px)',
        backgroundSize: '18px 18px',
        opacity: 0.95
      }
    },
    {
      id: 'dress-materials',
      name: 'Dress Materials',
      count: '15 designs',
      category: 'dress-materials',
      style: {
        background: 'linear-gradient(135deg, #1B2A47 0%, #6B0F1A 100%)',
        backgroundImage: 'repeating-linear-gradient(90deg, #1B2A47, #1B2A47 15px, #C9A84C 16px, #6B0F1A 16px, #6B0F1A 30px)',
        opacity: 0.9
      }
    },
    {
      id: 'home-textiles',
      name: 'Home Textiles',
      count: '12 designs',
      category: 'home-textiles',
      style: {
        background: 'linear-gradient(135deg, #2D4A3E 0%, #1e332a 100%)',
        backgroundImage: 'repeating-linear-gradient(0deg, rgba(201, 168, 76, 0.08), rgba(201, 168, 76, 0.08) 8px, transparent 8px, transparent 16px)',
        opacity: 0.95
      }
    }
  ];

  const handleCollectionClick = (category) => {
    setFilterCategory(category);
    const element = document.getElementById('new-arrivals');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="collections" className="bg-bg py-32 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="font-accent italic text-accent text-lg mb-3 block">Exquisite Handwoven Offerings</span>
          <h2 className="font-heading text-4xl text-primary tracking-[0.15em] uppercase inline-block">The Collections</h2>
          <div className="luxury-divider-gold"></div>
        </div>

        {/* Collection grid: 1col mobile -> 2col tablet -> 4col desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {collectionsList.map((col) => (
            <button 
              key={col.id} 
              className="group text-left border border-primary/10 bg-surface rounded-[4px] overflow-hidden luxury-card-lift shimmer-hover focus:outline-none focus:ring-1 focus:ring-accent"
              onClick={() => handleCollectionClick(col.category)}
              aria-label={`Explore Kanish ${col.name} collection`}
            >
              {/* Tall Image Placeholder - CSS Gradient card */}
              <div 
                className="h-[420px] w-full relative transition-transform duration-700 group-hover:scale-[1.02]"
                style={col.style}
              >
                {/* Shimmering Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_ease-in-out_infinite]"></div>
              </div>
              
              <div className="p-6 flex justify-between items-end border-t border-primary/5">
                <div>
                  <h3 className="font-heading text-xl text-primary font-normal tracking-wider group-hover:text-accent transition-colors duration-300">
                    {col.name}
                  </h3>
                  <span className="font-body text-xs text-text/60 uppercase tracking-widest mt-1.5 block">
                    {col.count}
                  </span>
                </div>
                <span 
                  className="font-body text-xs uppercase tracking-[0.15em] text-accent group-hover:text-primary transition-all duration-300 flex items-center gap-1"
                  aria-hidden="true"
                >
                  Explore <ArrowRight size={14} className="group-hover:translate-x-1.5 transition-transform" />
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
