import React, { useState } from 'react';
import { MessageCircle } from 'lucide-react';

export default function LoomCustomizer({ openWhatsApp }) {
  const colors = [
    { name: 'Deep Maroon', hex: '#6B0F1A' },
    { name: 'Forest Green', hex: '#2D4A3E' },
    { name: 'Ivory Cream', hex: '#FAF3E0' },
    { name: 'Royal Indigo', hex: '#1B2A47' }
  ];

  const borders = [
    { id: 'zari', name: 'Zari Stripes', desc: 'Classic gold thread horizontal weave' },
    { id: 'temple', name: 'Temple Motif', desc: 'Sacred Thazhampoo triangle weave' },
    { id: 'annapakshi', name: 'Annapakshi', desc: 'Mystical swan motif representing purity' },
    { id: 'mayilkan', name: 'Mayilkan', desc: 'Peacock eye pattern symbolizing beauty' }
  ];

  const [selectedColor, setSelectedColor] = useState(colors[0]);
  const [selectedBorder, setSelectedBorder] = useState(borders[0]);

  const handleCustomOrder = () => {
    const productName = `Custom Handwoven Cotton Saree (${selectedBorder.name})`;
    console.log(`Analytics: Custom order requested. Color: ${selectedColor.name}, Border: ${selectedBorder.name}`);
    openWhatsApp(productName, selectedColor.name);
  };

  const renderSVGPattern = () => {
    switch(selectedBorder.id) {
      case 'zari':
        return (
          <pattern id="zari-pat-tw" x="0" y="0" width="20" height="50" patternUnits="userSpaceOnUse">
            <line x1="0" y1="10" x2="20" y2="10" stroke="var(--color-accent)" strokeWidth="3" />
            <line x1="0" y1="20" x2="20" y2="20" stroke="var(--color-accent)" strokeWidth="1" />
            <line x1="0" y1="30" x2="20" y2="30" stroke="var(--color-accent)" strokeWidth="3" />
            <line x1="0" y1="40" x2="20" y2="40" stroke="var(--color-accent)" strokeWidth="1" />
          </pattern>
        );
      case 'temple':
        return (
          <pattern id="temple-pat-tw" x="0" y="0" width="30" height="50" patternUnits="userSpaceOnUse">
            <polygon points="0,50 15,15 30,50" fill="var(--color-accent)" />
            <line x1="0" y1="48" x2="30" y2="48" stroke="var(--color-accent)" strokeWidth="2" />
          </pattern>
        );
      case 'annapakshi':
        return (
          <pattern id="annapakshi-pat-tw" x="0" y="0" width="40" height="50" patternUnits="userSpaceOnUse">
            <path d="M10,40 C15,35 15,25 20,25 C25,25 27,28 27,32 C27,37 20,40 10,40 Z" fill="var(--color-accent)" />
            <path d="M20,25 C20,18 25,12 30,15 C33,17 31,22 28,24" fill="none" stroke="var(--color-accent)" strokeWidth="1.5" />
            <circle cx="28" cy="18" r="1.5" fill="var(--color-accent)" />
            <line x1="0" y1="45" x2="40" y2="45" stroke="var(--color-accent)" strokeWidth="1" />
          </pattern>
        );
      case 'mayilkan':
      default:
        return (
          <pattern id="mayilkan-pat-tw" x="0" y="0" width="30" height="50" patternUnits="userSpaceOnUse">
            <polygon points="15,10 27,25 15,40 3,25" fill="none" stroke="var(--color-accent)" strokeWidth="1.5" />
            <polygon points="15,15 23,25 15,35 7,25" fill="var(--color-accent)" opacity="0.6" />
            <circle cx="15" cy="25" r="2" fill="var(--color-accent)" />
          </pattern>
        );
    }
  };

  return (
    <section id="craft" className="bg-bg py-24 px-6 scroll-reveal">
      <div className="max-w-7xl mx-auto">
        
        {/* Title */}
        <div className="text-center">
          <span className="font-accent italic text-accent text-lg mb-2 block">Virtual Showroom Experience</span>
          <h2 className="font-heading text-4xl text-primary tracking-[0.15em] uppercase inline-block">Bespoke Loom Customizer</h2>
          <div className="luxury-divider-gold"></div>
          <p className="font-body text-base max-w-xl mx-auto mb-16 text-text/80 leading-relaxed font-light">
            Experiment with traditional Tamil border patterns and luxury thread colors. Once your design is refined, send it directly to our master weavers on WhatsApp.
          </p>
        </div>

        {/* Layout: Split on desktop, stacked on mobile */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* Visual Drape Preview Box */}
          <div className="lg:col-span-6 flex justify-center w-full">
            <div className="w-full max-w-[420px] aspect-[3/4] bg-surface border border-accent/20 shadow-xl p-8 rounded-[4px] flex items-center justify-center relative">
              <div className="w-full h-full relative flex flex-col">
                <svg width="100%" height="100%" viewBox="0 0 300 400" preserveAspectRatio="none" aria-hidden="true" className="w-full h-full">
                  <defs>
                    {renderSVGPattern()}
                  </defs>

                  {/* Saree Main Body */}
                  <rect 
                    x="10" 
                    y="10" 
                    width="280" 
                    height="380" 
                    fill={selectedColor.hex} 
                    rx="4"
                    style={{ transition: 'fill 0.5s ease-in-out' }} 
                  />
                  
                  {/* Woven Grain Lines */}
                  <g stroke="#ffffff" strokeWidth="0.5" opacity="0.06">
                    {Array.from({ length: 40 }).map((_, i) => (
                      <line key={`custom-grain-${i}`} x1="10" y1={10 + i * 10} x2="290" y2={10 + i * 10} />
                    ))}
                  </g>

                  {/* Top Border */}
                  <rect 
                    x="10" 
                    y="10" 
                    width="280" 
                    height="50" 
                    fill={`url(#${selectedBorder.id}-pat-tw)`} 
                    stroke="rgba(255,255,255,0.15)"
                    strokeWidth="0.5"
                  />

                  {/* Bottom Border */}
                  <rect 
                    x="10" 
                    y="340" 
                    width="280" 
                    height="50" 
                    fill={`url(#${selectedBorder.id}-pat-tw)`}
                    stroke="rgba(255,255,255,0.15)"
                    strokeWidth="0.5"
                  />

                  {/* Pallu Layer */}
                  <rect 
                    x="230" 
                    y="60" 
                    width="60" 
                    height="280" 
                    fill="var(--color-accent)" 
                    opacity="0.25"
                    stroke="var(--color-accent)"
                    strokeWidth="0.5"
                  />
                  <g stroke="var(--color-accent)" strokeWidth="0.75" opacity="0.4">
                    <line x1="240" y1="60" x2="240" y2="340" />
                    <line x1="250" y1="60" x2="250" y2="340" />
                    <line x1="260" y1="60" x2="260" y2="340" />
                    <line x1="270" y1="60" x2="270" y2="340" />
                    <line x1="280" y1="60" x2="280" y2="340" />
                  </g>
                </svg>
              </div>
            </div>
          </div>

          {/* Options Panel Column */}
          <div className="lg:col-span-6 flex flex-col items-stretch text-left">
            {/* Color choice */}
            <h3 className="font-heading text-lg text-primary uppercase tracking-wider mb-4 border-b border-primary/10 pb-2">
              1. Select Saree Body Color
            </h3>
            <div className="flex gap-4 mb-10 flex-wrap">
              {colors.map((c) => (
                <button
                  key={c.name}
                  className={`w-12 h-12 rounded-full border-2 focus:outline-none transition-all duration-300 relative ${
                    selectedColor.name === c.name 
                      ? 'border-accent scale-110 shadow-lg' 
                      : 'border-transparent hover:scale-105'
                  }`}
                  style={{ backgroundColor: c.name === 'Ivory Cream' ? '#FAF3E0' : c.hex }}
                  onClick={() => setSelectedColor(c)}
                  aria-label={`Select Saree Color: ${c.name}`}
                  aria-pressed={selectedColor.name === c.name}
                >
                  <span className="absolute inset-1 rounded-full border border-white/20"></span>
                </button>
              ))}
            </div>

            {/* Border Choice */}
            <h3 className="font-heading text-lg text-primary uppercase tracking-wider mb-4 border-b border-primary/10 pb-2">
              2. Select Saree Border Motif
            </h3>
            <div className="flex flex-col gap-4 mb-12">
              {borders.map((b) => (
                <button
                  key={b.id}
                  className={`p-5 rounded-[4px] border text-left transition-all duration-500 focus:outline-none ${
                    selectedBorder.id === b.id
                      ? 'border-accent bg-accent/5 ring-1 ring-accent'
                      : 'border-primary/10 bg-surface hover:border-primary/20'
                  }`}
                  onClick={() => setSelectedBorder(b)}
                  aria-label={`Select border motif: ${b.name}`}
                  aria-pressed={selectedBorder.id === b.id}
                >
                  <h4 className="font-heading text-base font-medium text-primary tracking-wide mb-1">
                    {b.name}
                  </h4>
                  <p className="font-body text-xs text-text/80 font-light">
                    {b.desc}
                  </p>
                </button>
              ))}
            </div>

            {/* Custom CTA */}
            <button 
              className="gold-shimmer-btn w-full justify-center py-4 text-xs font-body uppercase tracking-widest focus:outline-none"
              onClick={handleCustomOrder}
              aria-label={`Submit customized ${selectedColor.name} saree with ${selectedBorder.name} border via WhatsApp`}
            >
              Order Customized Saree <MessageCircle size={16} />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
