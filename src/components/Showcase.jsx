import React from 'react';
import { MessageCircle, ChevronLeft, ChevronRight } from 'lucide-react';

export default function Showcase({ openWhatsApp, filterCategory, setFilterCategory }) {
  const products = [
    { id: 1, name: "Kovai Cotton Saree", material: "Pure Cotton", price: 1850, category: "sarees", color: "Deep Red", isNew: true },
    { id: 2, name: "Temple Border Saree", material: "Handloom Cotton", price: 2400, category: "sarees", color: "Ivory Gold", isNew: true },
    { id: 3, name: "Striped Dress Material", material: "Cotton Silk Blend", price: 950, category: "dress-materials", color: "Forest Green", isNew: false },
    { id: 4, name: "Checks Lungi", material: "Pure Cotton", price: 450, category: "lungis", color: "Multi", isNew: false },
    { id: 5, name: "Mullai Motif Saree", material: "Handloom Cotton", price: 3200, category: "sarees", color: "Maroon Gold", isNew: true },
    { id: 6, name: "Woven Table Runner", material: "Cotton Linen", price: 750, category: "home-textiles", color: "Natural Ivory", isNew: false }
  ];

  const categories = [
    { id: "All", label: "All Weaves" },
    { id: "sarees", label: "Sarees" },
    { id: "dress-materials", label: "Dress Materials" },
    { id: "lungis", label: "Lungis" },
    { id: "home-textiles", label: "Home Textiles" }
  ];

  const getProductCSSStyle = (id) => {
    switch (id) {
      case 1:
        return {
          background: 'linear-gradient(135deg, #6B0F1A 0%, #3a080f 100%)',
          backgroundImage: 'repeating-linear-gradient(45deg, #6B0F1A, #6B0F1A 12px, #C9A84C 12px, #C9A84C 14px)'
        };
      case 2:
        return {
          background: 'linear-gradient(135deg, #FAF3E0 0%, #C9A84C 100%)',
          backgroundImage: 'repeating-linear-gradient(90deg, #FAF3E0, #FAF3E0 20px, #C9A84C 21px, #FAF3E0 21px, #FAF3E0 40px)'
        };
      case 3:
        return {
          background: 'linear-gradient(135deg, #2D4A3E 0%, #FAF3E0 100%)',
          backgroundImage: 'repeating-linear-gradient(45deg, #2D4A3E, #2D4A3E 10px, #FAF3E0 10px, #FAF3E0 20px)'
        };
      case 4:
        return {
          background: '#FAF3E0',
          backgroundImage: 'repeating-linear-gradient(90deg, #6B0F1A, #6B0F1A 15px, #2D4A3E 15px, #2D4A3E 30px), repeating-linear-gradient(0deg, #6B0F1A, #6B0F1A 15px, #2D4A3E 15px, #2D4A3E 30px)'
        };
      case 5:
        return {
          background: 'linear-gradient(135deg, #6B0F1A 0%, #C9A84C 100%)',
          backgroundImage: 'radial-gradient(#C9A84C 2px, transparent 2px)',
          backgroundSize: '20px 20px'
        };
      case 6:
      default:
        return {
          background: 'linear-gradient(135deg, #FAF3E0 0%, #2D4A3E 100%)',
          backgroundImage: 'repeating-linear-gradient(0deg, rgba(201, 168, 76, 0.1), rgba(201, 168, 76, 0.1) 12px, transparent 12px, transparent 24px)'
        };
    }
  };

  const filteredProducts = filterCategory === "All"
    ? products
    : products.filter(p => p.category === filterCategory);

  const scrollLeft = () => {
    const el = document.getElementById('product-strip-grid');
    if (el) el.scrollBy({ left: -320, behavior: 'smooth' });
  };

  const scrollRight = () => {
    const el = document.getElementById('product-strip-grid');
    if (el) el.scrollBy({ left: 320, behavior: 'smooth' });
  };

  return (
    <section id="new-arrivals" className="bg-surface py-32 px-8 scroll-reveal">
      <div className="max-w-7xl mx-auto">
        
        {/* Title */}
        <div className="text-center mb-16">
          <span className="font-accent italic text-accent text-lg mb-2 block">The Latest Weaves</span>
          <h2 className="font-heading text-4xl text-primary tracking-[0.15em] uppercase inline-block">New Arrivals</h2>
          <div className="luxury-divider-gold"></div>
        </div>

        {/* Category Filters */}
        <div className="flex justify-center gap-4 mt-6 mb-16 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat.id}
              className={`py-2 px-6 border text-xs font-body uppercase tracking-[0.15em] rounded-[4px] transition-all duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] focus:outline-none focus:ring-1 focus:ring-accent ${
                (filterCategory === cat.id)
                  ? "bg-primary text-bg border-primary shadow-md"
                  : "bg-surface text-primary border-primary/20 hover:border-primary/50"
              }`}
              onClick={() => setFilterCategory(cat.id)}
              aria-label={`Filter weaves by ${cat.label}`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Horizontal Strip on Mobile */}
        <div className="relative mt-8 group">
          {/* Scroll button Left */}
          <button 
            className="absolute top-1/2 -translate-y-1/2 -left-6 z-10 w-12 h-12 rounded-full border border-accent/30 bg-bg text-accent hover:bg-primary hover:text-bg transition-all duration-500 flex items-center justify-center shadow-lg focus:outline-none focus:ring-1 focus:ring-accent hidden lg:flex opacity-0 group-hover:opacity-100"
            onClick={scrollLeft}
            aria-label="Scroll products left"
          >
            <ChevronLeft size={20} />
          </button>

          {/* Scroll button Right */}
          <button 
            className="absolute top-1/2 -translate-y-1/2 -right-6 z-10 w-12 h-12 rounded-full border border-accent/30 bg-bg text-accent hover:bg-primary hover:text-bg transition-all duration-500 flex items-center justify-center shadow-lg focus:outline-none focus:ring-1 focus:ring-accent hidden lg:flex opacity-0 group-hover:opacity-100"
            onClick={scrollRight}
            aria-label="Scroll products right"
          >
            <ChevronRight size={20} />
          </button>

          {/* Product Cards Row */}
          <div 
            id="product-strip-grid"
            className="flex gap-8 overflow-x-auto snap-x snap-mandatory scrollbar-none pb-8 px-2 lg:px-0"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {filteredProducts.map((product) => (
              <div 
                key={product.id}
                className="snap-start min-w-[290px] md:min-w-[320px] flex-1 bg-surface border border-primary/10 rounded-[4px] overflow-hidden luxury-card-lift relative flex flex-col justify-between"
              >
                {/* Image Area - CSS gradient card */}
                <div 
                  className="h-[360px] w-full relative"
                  style={getProductCSSStyle(product.id)}
                  role="img"
                  aria-label={`${product.name} material pattern preview`}
                >
                  {product.isNew && (
                    <span className="absolute top-4 left-4 bg-primary text-bg font-body text-[0.65rem] uppercase tracking-[0.2em] px-3.5 py-1 border border-accent rounded-full shadow-md z-10">
                      New Weave
                    </span>
                  )}
                  {/* Shimmer Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full hover:animate-[shimmer_1.5s_ease-in-out_infinite]"></div>
                </div>

                {/* Details */}
                <div className="p-6 flex flex-col flex-grow justify-between">
                  <div>
                    {/* Pure Handloom Maroon Badge */}
                    <div className="mb-3.5">
                      <span className="bg-primary text-bg text-[0.6rem] font-body font-bold uppercase tracking-[0.2em] px-3 py-1 rounded-[4px] inline-block">
                        Pure Handloom
                      </span>
                    </div>

                    <span className="font-body text-[0.7rem] text-accent font-semibold uppercase tracking-[0.15em] mb-1.5 block">
                      {product.material} • {product.color}
                    </span>
                    <h3 className="font-heading text-xl text-primary font-normal leading-snug mb-4 tracking-wide">
                      {product.name}
                    </h3>
                  </div>

                  <div>
                    {/* Maroon Price, Large, Cormorant */}
                    <div className="font-heading text-3xl text-primary font-normal mb-5 tracking-wide">
                      ₹ {product.price.toLocaleString('en-IN')}
                    </div>

                    <button 
                      className="w-full flex items-center justify-center gap-2 bg-transparent border border-primary text-primary hover:bg-primary hover:text-bg py-3.5 text-xs font-body uppercase tracking-[0.15em] transition-all duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] focus:outline-none focus:ring-1 focus:ring-accent rounded-[4px]"
                      onClick={() => {
                        console.log(`Analytics: WhatsApp order click - Product ID: ${product.id}`);
                        openWhatsApp(product.name, product.color);
                      }}
                      aria-label={`Order ${product.name} via WhatsApp`}
                    >
                      <MessageCircle size={14} /> Order via WhatsApp
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <p className="text-center font-body text-xs text-text/50 tracking-[0.1em] mt-6">
          ← Swipe horizontally to browse all items →
        </p>
      </div>
    </section>
  );
}
