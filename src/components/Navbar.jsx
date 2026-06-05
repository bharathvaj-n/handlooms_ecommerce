import React, { useState, useEffect } from 'react';
import { Menu, X, MessageSquare } from 'lucide-react';

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
