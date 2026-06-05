import React from 'react';
import { MessageSquare, ArrowRight } from 'lucide-react';

export default function Hero({ openWhatsApp }) {
  const handleScrollToCollections = () => {
    const element = document.getElementById('collections');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="hero-wrapper">
      {/* CSS Pattern Overlay */}
      <div className="hero-pattern-overlay"></div>

      <div className="hero-grid">
        {/* Left Side: Content */}
        <div className="hero-content">
          <span className="hero-tagline">Pollachi's Finest Handloom Heritage</span>
          <h1 className="hero-title">
            Woven in Pollachi.<br />
            Worn for Generations.
          </h1>
          <p className="hero-desc">
            Since 1990, Kanish Handlooms has preserved the timeless artistry of pure cotton sarees, dress materials, and home textiles, spun with the heritage of Tamil Nadu.
          </p>
          <div className="hero-ctas">
            <button 
              className="gold-shimmer-btn" 
              onClick={handleScrollToCollections}
            >
              Explore Collection <ArrowRight size={16} />
            </button>
            <button 
              className="gold-outline-btn" 
              onClick={() => {
                console.log("Analytics: Hero WhatsApp order clicked");
                openWhatsApp();
              }}
            >
              Order via WhatsApp <MessageSquare size={16} />
            </button>
          </div>
        </div>

        {/* Right Side: Animated Fabric Swatches */}
        <div className="hero-visuals">
          <div className="swatch-container">
            <div className="swatch-item one">
              <img src="/saree_festive.png" alt="Festive Saree Collection" />
            </div>
            <div className="swatch-item two">
              <img src="/saree_daily.png" alt="Daily Wear Saree Collection" />
            </div>
            <div className="swatch-item three">
              <img src="/dress_material.png" alt="Pure Cotton Dress Materials" />
            </div>
          </div>
        </div>
      </div>

      {/* Floating Scroll Indicator */}
      <div className="hero-scroll-indicator" onClick={handleScrollToCollections}>
        <span>Scroll Down</span>
        <div className="scroll-indicator-line"></div>
      </div>
    </section>
  );
}
