import React from 'react';
import { MessageSquare, ShoppingBag, Send, CreditCard } from 'lucide-react';

export default function WhatsAppOrder({ openWhatsApp }) {
  return (
    <section className="steps-section section-padding">
      <div className="container">
        <span className="section-subtitle" style={{ color: 'var(--color-accent)' }}>Boutique Experience, Redefined</span>
        <h2 className="section-title-luxury" style={{ color: 'var(--color-bg)' }}>Order in 3 Simple Steps</h2>
        <div className="luxury-divider-gold"></div>

        <div className="steps-grid">
          {/* Step 1 */}
          <div className="step-card">
            <div className="step-num">01</div>
            <h3 className="step-title">Select Fabric</h3>
            <p className="step-desc">
              Browse our collections, use the Bespoke Loom Customizer, or check our feed. Tap the WhatsApp icon on the product.
            </p>
          </div>

          {/* Step 2 */}
          <div className="step-card">
            <div className="step-num">02</div>
            <h3 className="step-title">Chat & Refine</h3>
            <p className="step-desc">
              We discuss border colorways, length customization, and add handmade paper gift wrap if desired.
            </p>
          </div>

          {/* Step 3 */}
          <div className="step-card">
            <div className="step-num">03</div>
            <h3 className="step-title">Pay & Ship</h3>
            <p className="step-desc">
              Secure billing with quick UPI or bank transfer. We ship your handloomed treasures securely across India.
            </p>
          </div>
        </div>

        <div style={{ marginTop: '2rem' }}>
          <button 
            className="large-wa-cta-btn"
            onClick={() => {
              console.log("Analytics: Large step section WhatsApp CTA click");
              openWhatsApp();
            }}
          >
            <MessageSquare fill="currentColor" size={20} /> Chat with Master Weavers Now
          </button>
        </div>
      </div>
    </section>
  );
}
