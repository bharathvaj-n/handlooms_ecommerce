import React from 'react';

export default function Testimonials() {
  const reviews = [
    {
      quote: "The handloomed cotton has an unbelievable texture and weight. The gold zari work on my Pollachi Classic Maroon is incredibly neat. A textile masterpiece!",
      author: "Priyamvada R.",
      city: "Chennai",
      product: "Pollachi Classic Maroon Saree"
    },
    {
      quote: "I custom designed a Temple Border saree using their bespoke options. The ordering process on WhatsApp was completely seamless and personal. Truly heritage craft.",
      author: "Madhumitha S.",
      city: "Bengaluru",
      product: "Custom Temple Saree"
    },
    {
      quote: "Pollachi cottons are famous for their breathability, and Kanish has elevated them to museum-level luxury. It drapes beautifully and handles summer heat perfectly.",
      author: "Devaki K.",
      city: "Coimbatore",
      product: "Ivory & Forest Daily Saree"
    }
  ];

  return (
    <section className="bg-bg py-24 px-6 text-center">
      <div className="max-w-7xl mx-auto">
        
        {/* Title */}
        <div className="text-center">
          <span className="font-accent italic text-accent text-lg mb-2 block">Patron Voices</span>
          <h2 className="font-heading text-4xl text-primary tracking-widest uppercase inline-block">Worn and Loved</h2>
          <div className="luxury-divider-gold"></div>
        </div>

        {/* Testimonials Grid: 1col mobile -> 3col desktop */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 max-w-6xl mx-auto">
          {reviews.map((rev, index) => (
            <div 
              key={index} 
              className="bg-surface border border-primary/10 p-8 rounded-[4px] text-left relative luxury-card-lift flex flex-col justify-between"
            >
              <div>
                <span className="font-heading text-4xl text-accent leading-none block mb-4" aria-hidden="true">“</span>
                <p className="font-accent italic text-base text-text leading-relaxed mb-6 font-light">
                  {rev.quote}
                </p>
              </div>
              <div className="border-t border-primary/10 pt-4">
                <h4 className="font-heading text-lg font-normal text-primary">{rev.author}</h4>
                <div className="font-body text-[0.7rem] text-text/70 uppercase tracking-widest mt-1">
                  {rev.city} • Purchased: {rev.product}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
