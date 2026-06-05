import React from 'react';
import { Droplet } from 'lucide-react';

const CottonIcon = () => (
  <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M12 2a4 4 0 0 0-4 4c0 1.5.8 2.8 2 3.5A4 4 0 0 0 6 13c0 1.5.8 2.8 2 3.5A4 4 0 0 0 12 22a4 4 0 0 0 4-4c0-1.5-.8-2.8-2-3.5a4 4 0 0 0 4-3.5 4 4 0 0 0-4-4 4 4 0 0 0-4-4z" />
    <path d="M12 6c.5 1.5 1.5 2.5 3 3" />
    <path d="M12 18c-.5-1.5-1.5-2.5-3-3" />
  </svg>
);

const LoomIcon = () => (
  <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="3" y="3" width="18" height="18" rx="2" />
    <line x1="9" y1="3" x2="9" y2="21" />
    <line x1="15" y1="3" x2="15" y2="21" />
    <line x1="3" y1="9" x2="21" y2="9" />
    <line x1="3" y1="15" x2="21" y2="15" />
  </svg>
);

export default function Story() {
  return (
    <section id="story" className="relative bg-primary text-bg py-24 px-6 overflow-hidden">
      {/* Texture overlay */}
      <div className="fabric-texture-overlay-premium"></div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center relative z-10">
        {/* Left Side: Content */}
        <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left">
          <span className="font-accent italic text-accent text-lg mb-2 tracking-wider">Preserving Tamil Heritage</span>
          <h2 className="font-heading text-4xl font-light text-accent tracking-widest uppercase mb-6">
            Handwoven. Not Machine-Made.
          </h2>
          <p className="font-body text-base md:text-lg text-bg/85 leading-relaxed font-light mb-12 max-w-2xl">
            In a world of mass-produced fast fashion, we slow down. Every saree, dress material, and lungi from Kanish Handlooms is born on a traditional pit loom in Pollachi. 
            <br /><br />
            Our master weavers interlace individual cotton threads, creating a signature resilience, tactile weight, and breatheability that power looms simply cannot replicate. Operating the shuttle is an act of rhythm and soul—producing textiles that feel alive, soft against the skin, and durable enough to be passed down.
          </p>

          {/* Icon badges */}
          <div className="grid grid-cols-3 gap-6 md:gap-8 w-full max-w-lg">
            <div className="flex flex-col items-center text-center">
              <div className="w-14 h-14 rounded-full border border-accent/40 flex items-center justify-center text-accent bg-bg/5 hover:bg-accent hover:text-primary transition-all duration-500 mb-3">
                <CottonIcon />
              </div>
              <span className="font-heading text-sm text-bg tracking-wider font-light">Pure Cotton Yarn</span>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-14 h-14 rounded-full border border-accent/40 flex items-center justify-center text-accent bg-bg/5 hover:bg-accent hover:text-primary transition-all duration-500 mb-3">
                <LoomIcon />
              </div>
              <span className="font-heading text-sm text-bg tracking-wider font-light">Pit Loom Weaving</span>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-14 h-14 rounded-full border border-accent/40 flex items-center justify-center text-accent bg-bg/5 hover:bg-accent hover:text-primary transition-all duration-500 mb-3">
                <Droplet size={24} />
              </div>
              <span className="font-heading text-sm text-bg tracking-wider font-light">Natural Dyes</span>
            </div>
          </div>
        </div>

        {/* Right Side: Decorative Loom Element (CSS Animated SVG) */}
        <div className="lg:col-span-5 flex justify-center">
          <div className="border border-accent/25 bg-black/15 p-6 relative w-full max-w-[360px] aspect-square flex items-center justify-center rounded-[4px] after:absolute after:inset-[6px] after:border after:border-dashed after:border-accent/15 after:pointer-events-none">
            {/* SVG Loom Shuttle animation */}
            <svg viewBox="0 0 200 200" width="100%" height="100%" aria-hidden="true" className="w-full h-full">
              {/* Warp Threads */}
              <g stroke="rgba(201, 168, 76, 0.25)" strokeWidth="1">
                {Array.from({ length: 25 }).map((_, i) => (
                  <line key={`warp-story-${i}`} x1={20 + i * 6} y1="10" x2={20 + i * 6} y2="190" />
                ))}
              </g>

              {/* Shuttle */}
              <rect x="10" y="90" width="180" height="12" rx="6" fill="var(--color-accent)" opacity="0.85">
                <animate attributeName="y" values="30;170;30" dur="6s" repeatCount="indefinite" />
              </rect>

              {/* Shuttle Center */}
              <circle cx="100" cy="96" r="3" fill="var(--color-primary)">
                <animate attributeName="cy" values="36;176;36" dur="6s" repeatCount="indefinite" />
              </circle>

              {/* Woven cloth growth */}
              <path d="M20,10 L20,96 L170,96 L170,10 Z" fill="var(--color-accent)" opacity="0.08">
                <animate attributeName="d" values="M20,10 L20,30 L170,30 L170,10 Z; M20,10 L20,170 L170,170 L170,10 Z; M20,10 L20,30 L170,30 L170,10 Z" dur="6s" repeatCount="indefinite" />
              </path>

              {/* Boarder lines */}
              <path d="M10,10 L190,10 L190,190 L10,190 Z" fill="none" stroke="var(--color-accent)" strokeWidth="1" strokeDasharray="4 4" />
              <line x1="5" y1="5" x2="195" y2="5" stroke="var(--color-accent)" strokeWidth="4" />
              <line x1="5" y1="195" x2="195" y2="195" stroke="var(--color-accent)" strokeWidth="4" />
              <line x1="5" y1="5" x2="5" y2="195" stroke="var(--color-accent)" strokeWidth="4" />
              <line x1="195" y1="5" x2="195" y2="195" stroke="var(--color-accent)" strokeWidth="4" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
