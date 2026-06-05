import React, { useState } from 'react';
import { MapPin, Mail, Phone } from 'lucide-react';

const WHATSAPP_NUMBER = "916382675859";

export default function ContactSection({ openWhatsApp }) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [interest, setInterest] = useState('Sarees');
  const [message, setMessage] = useState('');

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(`Analytics: Quick Enquiry Form submitted by ${name}`);
    const msg = encodeURIComponent(
      `Hi Kanish Handlooms! 🧵\n\n` +
      `Name: ${name}\n` +
      `Phone: ${phone}\n` +
      `Interested in: ${interest}\n` +
      `Message: ${message}\n\n` +
      `Looking forward to hearing from you!`
    );
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`, '_blank');
  };

  const handleDirections = () => {
    window.open('https://maps.google.com/?q=Kulakkalpalayam,Pollachi,Tamil+Nadu', '_blank');
  };

  return (
    <div id="contact" style={{ width: '100%' }}>
      {/* SECTION A — HERO BANNER */}
      <section 
        style={{
          backgroundColor: '#6B0F1A',
          backgroundImage: 'radial-gradient(var(--color-accent) 0.5px, transparent 0.5px), radial-gradient(var(--color-accent) 0.5px, #6B0F1A 0.5px)',
          backgroundSize: '20px 20px',
          backgroundPosition: '0 0, 10px 10px',
          opacity: 0.95,
          height: '280px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          color: '#FAF3E0',
          padding: '2rem'
        }}
      >
        <span style={{ 
          fontSize: '0.75rem', 
          letterSpacing: '0.2em', 
          color: '#C9A84C', 
          fontWeight: 'bold', 
          textTransform: 'uppercase',
          marginBottom: '0.5rem'
        }}>
          We're Here For You
        </span>
        <h1 style={{ 
          fontFamily: '"Cormorant Garamond", serif', 
          fontSize: '3rem', 
          color: '#FAF3E0', 
          margin: '0.25rem 0 0.75rem 0',
          fontWeight: 300
        }}>
          Let's Talk Handlooms
        </h1>
        <p style={{ 
          fontSize: '0.95rem', 
          maxWidth: '650px', 
          margin: '0 auto 1.5rem auto', 
          color: 'rgba(250, 243, 224, 0.85)',
          lineHeight: '1.5'
        }}>
          Reach us on WhatsApp, visit our studio, or drop us a message. We respond within 2 hours on working days.
        </p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
          <button 
            className="gold-shimmer-btn" 
            style={{ padding: '0.75rem 1.75rem', fontSize: '0.8rem' }}
            onClick={() => openWhatsApp()}
          >
            WhatsApp Us Now
          </button>
          <button 
            className="gold-outline-btn" 
            style={{ padding: '0.75rem 1.75rem', fontSize: '0.8rem', color: '#FAF3E0', borderColor: '#FAF3E0' }}
            onClick={handleDirections}
          >
            Get Directions
          </button>
        </div>
      </section>

      {/* SECTION B — CONTACT CARDS */}
      <section style={{ backgroundColor: '#FAF3E0', padding: '5rem 2rem' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div className="contact-cards-container" style={{ display: 'flex', gap: '2rem', justifyContent: 'space-between' }}>
            
            {/* Card 1: Visit Us */}
            <div className="luxury-card" style={{ flex: 1, padding: '2.5rem 2rem', textAlign: 'center', backgroundColor: '#FDF8F0', borderRadius: '4px' }}>
              <div style={{ color: '#C9A84C', display: 'flex', justifyContent: 'center', marginBottom: '1.25rem' }}>
                <MapPin size={32} strokeWidth={1.5} />
              </div>
              <h3 style={{ fontFamily: '"Cormorant Garamond", serif', fontSize: '1.5rem', color: '#6B0F1A', marginBottom: '0.75rem' }}>
                Our Weaving Studio
              </h3>
              <p style={{ fontSize: '0.95rem', color: '#2C2C2C', lineHeight: '1.6', marginBottom: '1.5rem' }}>
                Kulakkalpalayam, Pollachi <br />
                Tamil Nadu — 642 001
              </p>
              <a 
                href="https://maps.google.com/?q=Kulakkalpalayam,Pollachi,Tamil+Nadu" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{ color: '#C9A84C', textDecoration: 'none', fontWeight: 'bold', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}
              >
                Get Directions →
              </a>
            </div>

            {/* Card 2: WhatsApp (Elevated) */}
            <div className="luxury-card" style={{ 
              flex: 1, 
              padding: '2.5rem 2rem', 
              textAlign: 'center', 
              backgroundColor: '#FDF8F0', 
              borderRadius: '4px',
              border: '1.5px solid #C9A84C', 
              transform: 'translateY(-8px)',
              boxShadow: '0 10px 25px rgba(201, 168, 76, 0.12)'
            }}>
              <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1.25rem' }}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="32" height="32" fill="#25D366">
                  <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L3 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/>
                </svg>
              </div>
              <h3 style={{ fontFamily: '"Cormorant Garamond", serif', fontSize: '1.5rem', color: '#6B0F1A', marginBottom: '0.75rem' }}>
                Chat With Us
              </h3>
              <p style={{ fontSize: '0.95rem', color: '#2C2C2C', lineHeight: '1.6', marginBottom: '1.5rem' }}>
                +91 63826 75859 <br />
                Mon–Sat, 9am–7pm IST
              </p>
              <a 
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi%20Kanish%20Handlooms!%20I%20have%20a%20query%20about%20your%20collection.`} 
                target="_blank" 
                rel="noopener noreferrer"
                style={{ color: '#2D4A3E', textDecoration: 'none', fontWeight: 'bold', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}
              >
                Start a Chat →
              </a>
            </div>

            {/* Card 3: Email / Social */}
            <div className="luxury-card" style={{ flex: 1, padding: '2.5rem 2rem', textAlign: 'center', backgroundColor: '#FDF8F0', borderRadius: '4px' }}>
              <div style={{ color: '#C9A84C', display: 'flex', justifyContent: 'center', marginBottom: '1.25rem' }}>
                <Mail size={32} strokeWidth={1.5} />
              </div>
              <h3 style={{ fontFamily: '"Cormorant Garamond", serif', fontSize: '1.5rem', color: '#6B0F1A', marginBottom: '0.75rem' }}>
                Write to Us
              </h3>
              <p style={{ fontSize: '0.95rem', color: '#2C2C2C', lineHeight: '1.6', marginBottom: '1.5rem' }}>
                kanishhandlooms@gmail.com <br />
                We reply within 24 hours
              </p>
              <a 
                href="mailto:kanishhandlooms@gmail.com" 
                style={{ color: '#C9A84C', textDecoration: 'none', fontWeight: 'bold', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.05em', display: 'block', marginBottom: '1rem' }}
              >
                Send Email →
              </a>
              <div style={{ display: 'flex', justifyContent: 'center', gap: '0.75rem', color: '#C9A84C' }}>
                <a href="#instagram" style={{ color: 'inherit' }} aria-label="Instagram">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
                </a>
                <a href="#facebook" style={{ color: 'inherit' }} aria-label="Facebook">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION C — EMBEDDED GOOGLE MAP */}
      <section style={{ width: '100%', borderTop: '3px solid #C9A84C', position: 'relative' }}>
        <div style={{ 
          position: 'absolute', 
          top: '-15px', 
          left: '50%', 
          transform: 'translateX(-50%)', 
          backgroundColor: '#FAF3E0', 
          padding: '0.25rem 1rem', 
          border: '1px solid #C9A84C',
          borderRadius: '20px',
          fontSize: '0.7rem',
          letterSpacing: '0.15em',
          textTransform: 'uppercase',
          fontWeight: 'bold',
          color: '#C9A84C',
          zIndex: 5
        }}>
          Find Us At
        </div>
        <iframe 
          title="Kanish Handlooms Location Map"
          src="https://maps.google.com/maps?q=Kulakkalpalayam,Pollachi,Tamil+Nadu&output=embed" 
          width="100%" 
          height="400" 
          style={{ border: 'none', display: 'block' }}
          allowFullScreen="" 
          loading="lazy"
        ></iframe>
      </section>

      {/* SECTION D — QUICK ENQUIRY FORM */}
      <section style={{ backgroundColor: '#2D4A3E', padding: '6rem 2rem' }}>
        <div style={{ maxWidth: '600px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontFamily: '"Cormorant Garamond", serif', fontSize: '2.5rem', color: '#FAF3E0', marginBottom: '0.5rem', fontWeight: 300 }}>
            Send a Quick Message
          </h2>
          <p style={{ fontSize: '0.95rem', color: 'rgba(250, 243, 224, 0.8)', marginBottom: '3rem' }}>
            We'll reply on WhatsApp within 2 hours
          </p>

          <form onSubmit={handleFormSubmit} style={{ textAlign: 'left', backgroundColor: '#FDF8F0', padding: '3rem 2.5rem', borderRadius: '4px', boxShadow: '0 15px 35px rgba(0,0,0,0.15)' }}>
            
            {/* Name Input */}
            <div style={{ marginBottom: '1.5rem' }}>
              <label htmlFor="enquiry-name" style={{ display: 'block', fontSize: '0.8rem', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '0.1em', color: '#2C2C2C', marginBottom: '0.5rem' }}>
                Your Name
              </label>
              <input 
                id="enquiry-name"
                type="text" 
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your Name"
                style={{
                  width: '100%',
                  height: '46px',
                  padding: '0 1rem',
                  border: '1px solid #C9A84C',
                  borderRadius: '3px',
                  backgroundColor: '#FFFFFF',
                  fontFamily: '"Lato", sans-serif',
                  fontSize: '0.95rem',
                  color: '#2C2C2C',
                  outline: 'none',
                  transition: 'box-shadow 0.25s ease'
                }}
                onFocus={(e) => e.target.style.boxShadow = '0 0 0 3px rgba(201, 168, 76, 0.25)'}
                onBlur={(e) => e.target.style.boxShadow = 'none'}
              />
            </div>

            {/* Phone Input */}
            <div style={{ marginBottom: '1.5rem' }}>
              <label htmlFor="enquiry-phone" style={{ display: 'block', fontSize: '0.8rem', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '0.1em', color: '#2C2C2C', marginBottom: '0.5rem' }}>
                Phone Number
              </label>
              <input 
                id="enquiry-phone"
                type="tel" 
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="+91 XXXXX XXXXX"
                style={{
                  width: '100%',
                  height: '46px',
                  padding: '0 1rem',
                  border: '1px solid #C9A84C',
                  borderRadius: '3px',
                  backgroundColor: '#FFFFFF',
                  fontFamily: '"Lato", sans-serif',
                  fontSize: '0.95rem',
                  color: '#2C2C2C',
                  outline: 'none',
                  transition: 'box-shadow 0.25s ease'
                }}
                onFocus={(e) => e.target.style.boxShadow = '0 0 0 3px rgba(201, 168, 76, 0.25)'}
                onBlur={(e) => e.target.style.boxShadow = 'none'}
              />
            </div>

            {/* Interest Dropdown */}
            <div style={{ marginBottom: '1.5rem' }}>
              <label htmlFor="enquiry-interest" style={{ display: 'block', fontSize: '0.8rem', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '0.1em', color: '#2C2C2C', marginBottom: '0.5rem' }}>
                I am interested in
              </label>
              <select 
                id="enquiry-interest"
                value={interest}
                onChange={(e) => setInterest(e.target.value)}
                style={{
                  width: '100%',
                  height: '46px',
                  padding: '0 1rem',
                  border: '1px solid #C9A84C',
                  borderRadius: '3px',
                  backgroundColor: '#FFFFFF',
                  fontFamily: '"Lato", sans-serif',
                  fontSize: '0.95rem',
                  color: '#2C2C2C',
                  outline: 'none',
                  cursor: 'pointer',
                  transition: 'box-shadow 0.25s ease'
                }}
                onFocus={(e) => e.target.style.boxShadow = '0 0 0 3px rgba(201, 168, 76, 0.25)'}
                onBlur={(e) => e.target.style.boxShadow = 'none'}
              >
                <option value="Sarees">Sarees</option>
                <option value="Dress Materials">Dress Materials</option>
                <option value="Lungis">Lungis</option>
                <option value="Home Textiles">Home Textiles</option>
                <option value="Bulk Order">Bulk Order</option>
                <option value="Custom Weave">Custom Weave</option>
              </select>
            </div>

            {/* Message Textarea */}
            <div style={{ marginBottom: '2rem' }}>
              <label htmlFor="enquiry-message" style={{ display: 'block', fontSize: '0.8rem', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '0.1em', color: '#2C2C2C', marginBottom: '0.5rem' }}>
                Your Message
              </label>
              <textarea 
                id="enquiry-message"
                rows="4" 
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Tell us what you're looking for..."
                style={{
                  width: '100%',
                  padding: '1rem',
                  border: '1px solid #C9A84C',
                  borderRadius: '3px',
                  backgroundColor: '#FFFFFF',
                  fontFamily: '"Lato", sans-serif',
                  fontSize: '0.95rem',
                  color: '#2C2C2C',
                  outline: 'none',
                  resize: 'vertical',
                  transition: 'box-shadow 0.25s ease'
                }}
                onFocus={(e) => e.target.style.boxShadow = '0 0 0 3px rgba(201, 168, 76, 0.25)'}
                onBlur={(e) => e.target.style.boxShadow = 'none'}
              ></textarea>
            </div>

            {/* Submit Button */}
            <button 
              type="submit"
              style={{
                width: '100%',
                height: '50px',
                backgroundColor: '#C9A84C',
                color: '#6B0F1A',
                border: 'none',
                borderRadius: '3px',
                fontFamily: '"Lato", sans-serif',
                fontSize: '0.85rem',
                fontWeight: 'bold',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                cursor: 'pointer',
                transition: 'all 0.25s ease',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.5rem'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#bba14c';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#C9A84C';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              Send via WhatsApp →
            </button>
          </form>
        </div>
      </section>

      {/* Embedded CSS rule for mobile responsive cards stack */}
      <style>{`
        @media (max-width: 768px) {
          .contact-cards-container {
            flex-direction: column !important;
            gap: 1.5rem !important;
          }
          .luxury-card {
            transform: none !important;
            box-shadow: 0 4px 15px rgba(0,0,0,0.04) !important;
          }
        }
      `}</style>
    </div>
  );
}
