import React, { useState, useEffect } from 'react';
import { Menu, X, MessageSquare, Phone } from 'lucide-react';

export default function Navbar({ openWhatsApp }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e, targetId) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`navbar-header ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        {/* Logo Area */}
        <a href="#hero" className="navbar-logo-area" onClick={(e) => handleLinkClick(e, 'hero')}>
          <span className="logo-main">KANISH</span>
          <span className="logo-sub">HANDLOOMS</span>
        </a>

        {/* Navigation Links */}
        <nav>
          <ul className={`navbar-links ${mobileMenuOpen ? 'mobile-open' : ''}`}>
            <li className="navbar-link-item">
              <a href="#collections" onClick={(e) => handleLinkClick(e, 'collections')}>Collections</a>
            </li>
            <li className="navbar-link-item">
              <a href="#story" onClick={(e) => handleLinkClick(e, 'story')}>Story</a>
            </li>
            <li className="navbar-link-item">
              <a href="#craft" onClick={(e) => handleLinkClick(e, 'craft')}>Craft</a>
            </li>
            <li className="navbar-link-item">
              <a href="#contact" onClick={(e) => handleLinkClick(e, 'footer')}>Contact</a>
            </li>
          </ul>
        </nav>

        {/* Right side items */}
        <div className="navbar-right-menu">
          <div 
            className="whatsapp-pulse-badge" 
            title="Chat on WhatsApp" 
            onClick={() => {
              console.log("Analytics: Navbar WhatsApp click");
              openWhatsApp();
            }}
          >
            <MessageSquare size={20} strokeWidth={1.5} />
            <span className="whatsapp-pulse-dot"></span>
          </div>

          <button
            onClick={() => {
              const msg = encodeURIComponent(
                "Hi Kanish Handlooms! 🧵\n\nI'd like to schedule a quick call to discuss your collection and place a custom order.\n\nMy preferred time: ___\n\nPlease confirm a slot. Thank you!"
              );
              window.open(`https://wa.me/916382675859?text=${msg}`, '_blank');
            }}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '7px',
              padding: '9px 18px',
              background: '#6B0F1A',
              color: '#C9A84C',
              border: '1px solid #C9A84C',
              borderRadius: '3px',
              fontFamily: '"Lato", sans-serif',
              fontSize: '12px',
              fontWeight: '600',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              cursor: 'pointer',
              whiteSpace: 'nowrap',
              transition: 'all 0.25s ease',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.background = '#C9A84C';
              e.currentTarget.style.color = '#6B0F1A';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = '#6B0F1A';
              e.currentTarget.style.color = '#C9A84C';
            }}
            aria-label="Book a call with Kanish Handlooms"
          >
            <Phone size={14} />
            <span className="speak-btn-label">Speak to a Weaver</span>
          </button>

          <button 
            className="mobile-nav-toggle" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
    </header>
  );
}
