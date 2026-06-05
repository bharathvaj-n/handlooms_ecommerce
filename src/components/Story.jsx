import React from 'react';
import { Droplet, Layers, HelpCircle } from 'lucide-react';

// Custom cotton yarn icon SVG
const CottonIcon = () => (
  <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2a4 4 0 0 0-4 4c0 1.5.8 2.8 2 3.5A4 4 0 0 0 6 13c0 1.5.8 2.8 2 3.5A4 4 0 0 0 12 22a4 4 0 0 0 4-4c0-1.5-.8-2.8-2-3.5a4 4 0 0 0 4-3.5 4 4 0 0 0-4-4 4 4 0 0 0-4-4z" />
    <path d="M12 6c.5 1.5 1.5 2.5 3 3" />
    <path d="M12 18c-.5-1.5-1.5-2.5-3-3" />
  </svg>
);

// Custom pit loom icon SVG
const LoomIcon = () => (
  <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="3" width="18" height="18" rx="2" />
    <line x1="9" y1="3" x2="9" y2="21" />
    <line x1="15" y1="3" x2="15" y2="21" />
    <line x1="3" y1="9" x2="21" y2="9" />
    <line x1="3" y1="15" x2="21" y2="15" />
  </svg>
);

export default function Story() {
  return (
    <section id="story" className="story-section section-padding">
      <div className="container">
        <div className="story-grid">
          {/* Left Side: Content */}
          <div className="story-left">
            <span className="section-subtitle" style={{ color: 'var(--color-accent)' }}>Preserving Tamil Heritage</span>
            <h2 className="story-title">Handwoven. Not Machine-Made.</h2>
            <p className="story-body-text">
              In a world of mass-produced fast fashion, we slow down. Every saree, dress material, and lungi from Kanish Handlooms is born on a traditional pit loom in Pollachi. 
              <br /><br />
              Our master weavers interlace individual cotton threads, creating a signature resilience, tactile weight, and breatheability that power looms simply cannot replicate. Operating the shuttle is an act of rhythm and soul—producing textiles that feel alive, soft against the skin, and durable enough to be passed down.
            </p>

            <div className="story-icons-row">
              <div className="story-icon-item">
                <div className="story-icon-box">
                  <CottonIcon />
                </div>
                <span className="story-icon-label">Pure Cotton Yarn</span>
              </div>
              <div className="story-icon-item">
                <div className="story-icon-box">
                  <LoomIcon />
                </div>
                <span className="story-icon-label">Traditional Pit Loom</span>
              </div>
              <div className="story-icon-item">
                <div className="story-icon-box">
                  <Droplet size={24} />
                </div>
                <span className="story-icon-label">Natural Dyes</span>
              </div>
            </div>
          </div>

          {/* Right Side: CSS-drawn interactive loom illustration */}
          <div className="story-right">
            <div className="loom-drawing-container">
              {/* Dynamic SVG Loom animation */}
              <svg viewBox="0 0 200 200" width="100%" height="100%">
                {/* Warp Threads (Vertical Background Lines) */}
                <g stroke="rgba(201, 168, 76, 0.25)" strokeWidth="1">
                  {Array.from({ length: 25 }).map((_, i) => (
                    <line key={`warp-${i}`} x1={20 + i * 6} y1="10" x2={20 + i * 6} y2="190" />
                  ))}
                </g>

                {/* Weft Shuttle (Horizontal Moving Bar) */}
                <rect 
                  x="10" 
                  y="90" 
                  width="180" 
                  height="12" 
                  rx="6" 
                  fill="var(--color-accent)" 
                  opacity="0.85"
                >
                  <animate 
                    attributeName="y" 
                    values="30;170;30" 
                    dur="6s" 
                    repeatCount="indefinite" 
                    timingFunction="ease-in-out"
                  />
                </rect>

                {/* Shuttle Center Motif */}
                <circle cx="100" cy="96" r="3" fill="var(--color-primary)">
                  <animate 
                    attributeName="cy" 
                    values="36;176;36" 
                    dur="6s" 
                    repeatCount="indefinite" 
                  />
                </circle>

                {/* Interwoven Highlighted Threads (Woven Cloth growing) */}
                <path 
                  d="M20,10 L20,96 L170,96 L170,10 Z" 
                  fill="var(--color-accent)" 
                  opacity="0.08"
                >
                  <animate 
                    attributeName="d" 
                    values="M20,10 L20,30 L170,30 L170,10 Z; M20,10 L20,170 L170,170 L170,10 Z; M20,10 L20,30 L170,30 L170,10 Z" 
                    dur="6s" 
                    repeatCount="indefinite" 
                  />
                </path>

                {/* Traditional Border Motif details (drawn in loom) */}
                <path 
                  d="M10,10 L190,10 L190,190 L10,190 Z" 
                  fill="none" 
                  stroke="var(--color-accent)" 
                  strokeWidth="1" 
                  strokeDasharray="4 4"
                />

                {/* Loom wooden frame elements */}
                <line x1="5" y1="5" x2="195" y2="5" stroke="var(--color-accent)" strokeWidth="4" />
                <line x1="5" y1="195" x2="195" y2="195" stroke="var(--color-accent)" strokeWidth="4" />
                <line x1="5" y1="5" x2="5" y2="195" stroke="var(--color-accent)" strokeWidth="4" />
                <line x1="195" y1="5" x2="195" y2="195" stroke="var(--color-accent)" strokeWidth="4" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
