import React, { useState } from 'react';
import { MessageSquare } from 'lucide-react';

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

  // Helper to render motif patterns in SVG
  const renderSVGPattern = () => {
    switch(selectedBorder.id) {
      case 'zari':
        return (
          <pattern id="zari-pat" x="0" y="0" width="20" height="50" patternUnits="userSpaceOnUse">
            <line x1="0" y1="10" x2="20" y2="10" stroke="var(--color-accent)" strokeWidth="3" />
            <line x1="0" y1="20" x2="20" y2="20" stroke="var(--color-accent)" strokeWidth="1" />
            <line x1="0" y1="30" x2="20" y2="30" stroke="var(--color-accent)" strokeWidth="3" />
            <line x1="0" y1="40" x2="20" y2="40" stroke="var(--color-accent)" strokeWidth="1" />
          </pattern>
        );
      case 'temple':
        return (
          <pattern id="temple-pat" x="0" y="0" width="30" height="50" patternUnits="userSpaceOnUse">
            <polygon points="0,50 15,15 30,50" fill="var(--color-accent)" />
            <line x1="0" y1="48" x2="30" y2="48" stroke="var(--color-accent)" strokeWidth="2" />
          </pattern>
        );
      case 'annapakshi':
        return (
          <pattern id="annapakshi-pat" x="0" y="0" width="40" height="50" patternUnits="userSpaceOnUse">
            {/* Elegant abstract swan/bird path representing Annapakshi */}
            <path d="M10,40 C15,35 15,25 20,25 C25,25 27,28 27,32 C27,37 20,40 10,40 Z" fill="var(--color-accent)" />
            <path d="M20,25 C20,18 25,12 30,15 C33,17 31,22 28,24" fill="none" stroke="var(--color-accent)" strokeWidth="1.5" />
            <circle cx="28" cy="18" r="1.5" fill="var(--color-accent)" />
            <line x1="0" y1="45" x2="40" y2="45" stroke="var(--color-accent)" strokeWidth="1" />
          </pattern>
        );
      case 'mayilkan':
      default:
        return (
          <pattern id="mayilkan-pat" x="0" y="0" width="30" height="50" patternUnits="userSpaceOnUse">
            {/* Concentric diamond representing peacock eye motif */}
            <polygon points="15,10 27,25 15,40 3,25" fill="none" stroke="var(--color-accent)" strokeWidth="1.5" />
            <polygon points="15,15 23,25 15,35 7,25" fill="var(--color-accent)" opacity="0.6" />
            <circle cx="15" cy="25" r="2" fill="var(--color-accent)" />
          </pattern>
        );
    }
  };

  return (
    <section id="craft" className="customizer-section section-padding">
      <div className="container">
        <div className="text-center">
          <span className="section-subtitle">Virtual Showroom Experience</span>
          <h2 className="section-title-luxury">Bespoke Loom Customizer</h2>
          <div className="luxury-divider-gold"></div>
          <p style={{ maxWidth: '600px', margin: '0 auto 3rem auto', fontSize: '1rem', opacity: '0.8' }}>
            Experiment with traditional Tamil border patterns and luxury thread colors. Once your design is refined, send it directly to our master weavers on WhatsApp.
          </p>
        </div>

        <div className="customizer-grid">
          {/* Left Column: Visual Saree Preview */}
          <div className="customizer-visual-preview">
            <div className="customizer-saree-art">
              {/* Dynamic SVG Drawing of the saree drape/folds */}
              <svg width="100%" height="100%" viewBox="0 0 300 400" preserveAspectRatio="none">
                <defs>
                  {renderSVGPattern()}
                </defs>

                {/* Saree Main Body with selected color */}
                <rect 
                  x="10" 
                  y="10" 
                  width="280" 
                  height="380" 
                  fill={selectedColor.hex} 
                  rx="4"
                  style={{ transition: 'fill 0.5s ease' }} 
                />
                
                {/* Woven grain overlay lines */}
                <g stroke="#ffffff" strokeWidth="0.5" opacity="0.06">
                  {Array.from({ length: 40 }).map((_, i) => (
                    <line key={`grain-${i}`} x1="10" y1={10 + i * 10} x2="290" y2={10 + i * 10} />
                  ))}
                </g>

                {/* Saree Top Border (motif fill) */}
                <rect 
                  x="10" 
                  y="10" 
                  width="280" 
                  height="50" 
                  fill={`url(#${selectedBorder.id}-pat)`} 
                  stroke="rgba(255,255,255,0.15)"
                  strokeWidth="1"
                />

                {/* Saree Bottom Border (motif fill) */}
                <rect 
                  x="10" 
                  y="340" 
                  width="280" 
                  height="50" 
                  fill={`url(#${selectedBorder.id}-pat)`}
                  stroke="rgba(255,255,255,0.15)"
                  strokeWidth="1"
                />

                {/* Saree Pallu (Right side vertical stripe block) */}
                <rect 
                  x="240" 
                  y="60" 
                  width="50" 
                  height="280" 
                  fill="var(--color-accent)" 
                  opacity="0.3"
                  stroke="var(--color-accent)"
                  strokeWidth="0.5"
                />
                
                {/* Vertical stripes on Pallu */}
                <g stroke="var(--color-accent)" strokeWidth="1" opacity="0.5">
                  <line x1="250" y1="60" x2="250" y2="340" />
                  <line x1="260" y1="60" x2="260" y2="340" />
                  <line x1="270" y1="60" x2="270" y2="340" />
                  <line x1="280" y1="60" x2="280" y2="340" />
                </g>
              </svg>
            </div>
          </div>

          {/* Right Column: Customizer Options Panels */}
          <div className="customizer-options-panel">
            {/* Color Selector */}
            <h3 className="option-group-label">1. Saree Body Color</h3>
            <div className="option-choices-grid">
              {colors.map((c) => (
                <div 
                  key={c.name}
                  className={`color-choice-bubble ${selectedColor.name === c.name ? 'active' : ''}`}
                  style={{ backgroundColor: c.name === 'Ivory Cream' ? '#FAF3E0' : c.hex }}
                  onClick={() => setSelectedColor(c)}
                  title={c.name}
                ></div>
              ))}
            </div>

            {/* Border Selector */}
            <h3 className="option-group-label">2. Traditional Border Motif</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', width: '100%', marginBottom: '2.5rem' }}>
              {borders.map((b) => (
                <div 
                  key={b.id}
                  className={`luxury-card ${selectedBorder.id === b.id ? 'active-border-selection' : ''}`}
                  style={{ 
                    padding: '1.25rem', 
                    cursor: 'pointer',
                    borderColor: selectedBorder.id === b.id ? 'var(--color-accent)' : 'rgba(107, 15, 26, 0.08)',
                    backgroundColor: selectedBorder.id === b.id ? 'rgba(201, 168, 76, 0.06)' : 'var(--color-surface)',
                    borderWidth: selectedBorder.id === b.id ? '2px' : '1px'
                  }}
                  onClick={() => setSelectedBorder(b)}
                >
                  <h4 style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-primary)', fontSize: '1.2rem', marginBottom: '0.25rem' }}>
                    {b.name}
                  </h4>
                  <p style={{ fontSize: '0.85rem', opacity: '0.8' }}>{b.desc}</p>
                </div>
              ))}
            </div>

            {/* Custom CTA */}
            <button 
              className="gold-shimmer-btn" 
              style={{ width: '100%', justifyContent: 'center' }}
              onClick={handleCustomOrder}
            >
              Order Customized Saree <MessageSquare size={16} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
