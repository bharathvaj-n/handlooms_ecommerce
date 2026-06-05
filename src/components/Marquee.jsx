import React from 'react';

export default function Marquee() {
  const marqueeText = "Handwoven in Pollachi • Pure Cotton • Zero Synthetic • Traditional Weave • Ships Across India • ";
  // Duplicate text to ensure continuous scrolling
  const repeatedText = Array(8).fill(marqueeText).join(" ");

  return (
    <div className="marquee-wrapper">
      <div 
        className="marquee-content" 
        style={{ 
          animationName: 'marquee-scroll-reverse', 
          animationDuration: '30s', 
          animationIterationCount: 'infinite', 
          animationTimingFunction: 'linear'
        }}
      >
        {repeatedText}
      </div>
      
      {/* Inline styles for the reverse marquee animation if not already in index.css */}
      <style>{`
        @keyframes marquee-scroll-reverse {
          0% { transform: translate3d(-50%, 0, 0); }
          100% { transform: translate3d(0, 0, 0); }
        }
      `}</style>
    </div>
  );
}
