import React from 'react';

export default function Marquee() {
  const marqueeText = "Handwoven in Pollachi • Pure Cotton • Zero Synthetic • Traditional Weave • Ships Across India • ";
  const repeatedText = Array(6).fill(marqueeText).join(" ");

  return (
    <div className="bg-primary text-accent py-5 border-y border-accent/20 overflow-hidden whitespace-nowrap select-none">
      <div 
        className="animate-marquee-reverse font-heading text-lg tracking-widest uppercase"
        aria-hidden="true"
      >
        {repeatedText}
      </div>
    </div>
  );
}
