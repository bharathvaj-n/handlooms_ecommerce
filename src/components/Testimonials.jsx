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
    <section className="testimonials-section section-padding">
      <div className="container">
        <div className="text-center">
          <span className="section-subtitle">Patron Voices</span>
          <h2 className="section-title-luxury">Worn and Loved</h2>
          <div className="luxury-divider-gold"></div>
        </div>

        <div className="testimonials-grid">
          {reviews.map((rev, index) => (
            <div key={index} className="testimonial-card luxury-card" style={{ backgroundColor: 'var(--color-surface)' }}>
              <div className="quote-icon-gold">“</div>
              <p className="testimonial-text">{rev.quote}</p>
              <div className="testimonial-author-box">
                <h4 className="author-name">{rev.author}</h4>
                <div className="author-meta">{rev.city} • Purchased: {rev.product}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
