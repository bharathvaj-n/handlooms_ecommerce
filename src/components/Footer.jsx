import React from 'react';
import { Mail, Phone, MapPin, Heart } from 'lucide-react';

export default function Footer({ openWhatsApp }) {
  const handleScrollTo = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer id="footer" className="footer-wrap">
      <div className="container">
        <div className="footer-grid">
          {/* Brand Col */}
          <div className="footer-brand-col">
            <span className="footer-logo">KANISH</span>
            <span className="footer-logo-sub">HANDLOOMS</span>
            <p className="footer-tagline">
              Dedicated to preserving the slow craft of Tamil Nadu's pit looms. Weaving stories of gold and cotton since 1990.
            </p>
          </div>

          {/* Links Col */}
          <div>
            <h3 className="footer-title">Explore</h3>
            <ul className="footer-links-list">
              <li className="footer-link-item">
                <a href="#collections" onClick={(e) => handleScrollTo(e, 'collections')}>Collections</a>
              </li>
              <li className="footer-link-item">
                <a href="#story" onClick={(e) => handleScrollTo(e, 'story')}>Our Story</a>
              </li>
              <li className="footer-link-item">
                <a href="#craft" onClick={(e) => handleScrollTo(e, 'craft')}>Bespoke Loom</a>
              </li>
              <li className="footer-link-item">
                <a href="#new-arrivals" onClick={(e) => handleScrollTo(e, 'new-arrivals')}>New Arrivals</a>
              </li>
            </ul>
          </div>

          {/* Contact / Address Col */}
          <div>
            <h3 className="footer-title">The Weaving Salon</h3>
            <address className="footer-address">
              <p style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                <MapPin size={18} style={{ color: 'var(--color-accent)', flexShrink: 0, marginTop: '2px' }} />
                <span>
                  Kulakkalpalayam,<br />
                  Pollachi - 642002,<br />
                  Tamil Nadu, India
                </span>
              </p>
              <p 
                style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}
                onClick={() => {
                  console.log("Analytics: Footer phone clicked");
                  openWhatsApp();
                }}
              >
                <Phone size={16} style={{ color: 'var(--color-accent)' }} />
                <span>+91 63826 75859</span>
              </p>
              <p style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Mail size={16} style={{ color: 'var(--color-accent)' }} />
                <span>orders@kanishhandlooms.com</span>
              </p>
            </address>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="footer-bottom">
          <div>
            &copy; {new Date().getFullYear()} Kanish Handlooms. All Rights Reserved.
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
            <span>Woven with love in Pollachi</span>
            <Heart size={12} fill="var(--color-accent)" stroke="var(--color-accent)" />
            <span>🧵</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
