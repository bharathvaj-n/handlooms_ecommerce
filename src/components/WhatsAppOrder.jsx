import React from 'react';
import { MessageCircle } from 'lucide-react';

export default function WhatsAppOrder({ openWhatsApp }) {
  return (
    <section className="relative bg-secondary text-bg py-32 px-8 text-center overflow-hidden">
      {/* Texture overlay */}
      <div className="fabric-texture-overlay-premium"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <span className="font-accent italic text-accent text-lg mb-3 block">Boutique Experience, Redefined</span>
        <h2 className="font-heading text-4xl text-bg tracking-[0.15em] uppercase inline-block">Order in 3 Simple Steps</h2>
        <div className="luxury-divider-gold"></div>

        {/* Step cards with generous margins */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 my-20 max-w-5xl mx-auto">
          {/* Step 1 */}
          <div className="bg-white/5 border border-accent/20 p-10 lg:p-12 rounded-[4px] hover:border-accent hover:bg-white/10 transition-all duration-500 flex flex-col items-center">
            <span className="font-heading text-4xl text-accent mb-6 font-light">01</span>
            <h3 className="font-heading text-xl text-bg tracking-[0.1em] uppercase mb-4">Selection & Curation</h3>
            <p className="font-body text-sm text-bg/75 leading-relaxed font-light tracking-wide">
              Browse our catalog of traditional weaves or customize your borders. Click "Order via WhatsApp" on any curated fabric that speaks to you.
            </p>
          </div>

          {/* Step 2 */}
          <div className="bg-white/5 border border-accent/20 p-10 lg:p-12 rounded-[4px] hover:border-accent hover:bg-white/10 transition-all duration-500 flex flex-col items-center">
            <span className="font-heading text-4xl text-accent mb-6 font-light">02</span>
            <h3 className="font-heading text-xl text-bg tracking-[0.1em] uppercase mb-4">Personal Consultation</h3>
            <p className="font-body text-sm text-bg/75 leading-relaxed font-light tracking-wide">
              Chat directly with our showroom team to discuss border colorways, blouse piece coordinates, or custom length requests.
            </p>
          </div>

          {/* Step 3 */}
          <div className="bg-white/5 border border-accent/20 p-10 lg:p-12 rounded-[4px] hover:border-accent hover:bg-white/10 transition-all duration-500 flex flex-col items-center">
            <span className="font-heading text-4xl text-accent mb-6 font-light">03</span>
            <h3 className="font-heading text-xl text-bg tracking-[0.1em] uppercase mb-4">Heritage Dispatch</h3>
            <p className="font-body text-sm text-bg/75 leading-relaxed font-light tracking-wide">
              We confirm availability and wrap your fabric in heritage boxes. Pay securely via UPI/Bank transfer with tracked shipping across India.
            </p>
          </div>
        </div>

        <div>
          <button 
            className="inline-flex items-center gap-3 bg-white text-secondary hover:bg-whatsapp hover:text-white py-4.5 px-10 text-xs font-body uppercase font-bold tracking-[0.15em] transition-all duration-500 shadow-2xl focus:outline-none focus:ring-1 focus:ring-accent rounded-[4px]"
            onClick={() => {
              console.log("Analytics: Large step section WhatsApp CTA click");
              openWhatsApp();
            }}
            aria-label="Start chatting with Kanish Handlooms master weavers on WhatsApp"
          >
            <MessageCircle size={18} fill="currentColor" /> Chat with Showroom Team
          </button>
        </div>
      </div>
    </section>
  );
}
