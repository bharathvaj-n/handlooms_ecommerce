import React from 'react';
import { MessageCircle, ArrowRight } from 'lucide-react';

export default function Hero({ openWhatsApp }) {
  const handleScrollToCollections = () => {
    const element = document.getElementById('collections');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="hero" 
      className="min-h-screen relative bg-primary flex items-center overflow-hidden text-bg px-8 md:px-12 py-32 lg:py-40"
    >
      {/* Fabric texture overlay */}
      <div className="fabric-texture-overlay-premium"></div>
      
      {/* CSS Pattern Overlay */}
      <div className="hero-pattern-overlay"></div>

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center relative z-10">
        {/* Left Side: Content */}
        <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left">
          <span className="font-accent italic text-accent text-xl mb-6 tracking-widest block">
            The Sound of Pollachi Looms
          </span>
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-light leading-none mb-8 text-bg tracking-[0.05em] uppercase">
            Woven in Pollachi.<br />
            Worn for Generations.
          </h1>
          <p className="font-body text-base md:text-lg max-w-xl mb-12 text-bg/75 font-light leading-relaxed tracking-wide">
            Since 1990, Kanish Handlooms has preserved the timeless artistry of pure cotton sarees, dress materials, and home textiles, spun with the heritage of Tamil Nadu.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto">
            <button 
              className="gold-shimmer-btn flex justify-center items-center gap-3 w-full sm:w-auto focus:outline-none py-4 px-8 border border-transparent" 
              onClick={handleScrollToCollections}
              aria-label="Explore our handloom collections"
            >
              Explore Collection <ArrowRight size={15} />
            </button>
            <button 
              className="gold-outline-btn flex justify-center items-center gap-3 w-full sm:w-auto focus:outline-none py-4 px-8" 
              onClick={() => {
                console.log("Analytics: Hero WhatsApp order clicked");
                openWhatsApp();
              }}
              aria-label="Order handloom fabrics directly via WhatsApp chat"
            >
              Order via WhatsApp <MessageCircle size={15} />
            </button>
          </div>
        </div>

        {/* Right Side: Animated Fabric Swatches (Abstract Museum Silks) */}
        <div className="lg:col-span-5 flex justify-center items-center h-[400px] lg:h-[500px]">
          <div className="relative w-[300px] lg:w-[340px] h-[400px] lg:h-[450px]">
            {/* Swatch 1: Maroon-to-Gold Zari Weave */}
            <div className="absolute w-[200px] lg:w-[240px] h-[260px] lg:h-[300px] rounded-[4px] shadow-2xl overflow-hidden border border-accent/20 top-0 left-0 rotate-[-8deg] z-20 animate-[float-one_8s_ease-in-out_infinite_alternate]">
              <div 
                className="w-full h-full flex flex-col justify-end p-6"
                style={{
                  background: 'linear-gradient(135deg, #6B0F1A 0%, #4a060e 100%)',
                  backgroundImage: 'repeating-linear-gradient(45deg, #6B0F1A, #6B0F1A 8px, #C9A84C 8px, #C9A84C 9px)'
                }}
              >
                <span className="font-heading text-xs uppercase tracking-[0.2em] text-white/90 bg-black/40 backdrop-blur-md py-1 px-3 rounded-sm self-start">
                  Koorai Zari
                </span>
              </div>
            </div>

            {/* Swatch 2: Ivory-to-Forest Green Checks */}
            <div className="absolute w-[200px] lg:w-[240px] h-[260px] lg:h-[300px] rounded-[4px] shadow-2xl overflow-hidden border border-accent/20 top-[60px] right-0 rotate-[6deg] z-10 animate-[float-two_9s_ease-in-out_infinite_alternate]">
              <div 
                className="w-full h-full flex flex-col justify-end p-6"
                style={{
                  background: '#FDF8F0',
                  backgroundImage: 'repeating-linear-gradient(90deg, rgba(45, 74, 62, 0.1), rgba(45, 74, 62, 0.1) 12px, transparent 12px, transparent 24px), repeating-linear-gradient(0deg, rgba(45, 74, 62, 0.1), rgba(45, 74, 62, 0.1) 12px, transparent 12px, transparent 24px)'
                }}
              >
                <span className="font-heading text-xs uppercase tracking-[0.2em] text-primary bg-white/80 backdrop-blur-md py-1 px-3 rounded-sm self-start">
                  Mayilkan checks
                </span>
              </div>
            </div>

            {/* Swatch 3: Pure Cotton Natural Indigo */}
            <div className="absolute w-[200px] lg:w-[240px] h-[260px] lg:h-[300px] rounded-[4px] shadow-xl overflow-hidden border border-accent/15 bottom-0 left-[40px] rotate-[-2deg] opacity-40 animate-[float-three_10s_ease-in-out_infinite_alternate]">
              <div 
                className="w-full h-full flex flex-col justify-end p-6"
                style={{
                  background: 'linear-gradient(135deg, #1B2A47 0%, #FAF3E0 100%)',
                  backgroundImage: 'radial-gradient(var(--color-accent) 0.5px, transparent 0.5px)',
                  backgroundSize: '16px 16px'
                }}
              >
                <span className="font-heading text-xs uppercase tracking-[0.2em] text-white/80 bg-black/30 backdrop-blur-md py-1 px-3 rounded-sm self-start">
                  Organic Indigo
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Scroll Indicator */}
      <button 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 text-[0.7rem] tracking-[0.3em] uppercase text-accent/70 hover:text-accent transition-colors duration-500 focus:outline-none"
        onClick={handleScrollToCollections}
        aria-label="Scroll down to collections section"
      >
        <span>Scroll Down</span>
        <div className="w-[1px] h-[50px] bg-gradient-to-b from-accent to-transparent relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-[15px] bg-bg animate-[scroll-dot_2.5s_cubic-bezier(0.15,0.85,0.45,1)_infinite]"></div>
        </div>
      </button>

      <style>{`
        @keyframes float-one {
          0% { transform: translateY(0px) rotate(-8deg); }
          100% { transform: translateY(-15px) rotate(-5deg); }
        }
        @keyframes float-two {
          0% { transform: translateY(0px) rotate(6deg); }
          100% { transform: translateY(-20px) rotate(9deg); }
        }
        @keyframes float-three {
          0% { transform: translateY(0px) rotate(-2deg); }
          100% { transform: translateY(15px) rotate(-4deg); }
        }
        @keyframes scroll-dot {
          0% { top: -25px; }
          80% { top: 50px; }
          100% { top: 50px; }
        }
      `}</style>
    </section>
  );
}
