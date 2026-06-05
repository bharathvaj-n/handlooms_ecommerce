import React, { useState, useEffect } from 'react';
import { Menu, X, MessageCircle } from 'lucide-react';

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
    <header 
      className={`fixed top-0 left-0 w-full z-40 transition-all duration-500 backdrop-blur-md ${
        scrolled 
          ? 'bg-bg/90 border-b-2 border-primary shadow-md' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo Area */}
        <a 
          href="#hero" 
          className="flex flex-col items-start focus:outline-none"
          onClick={(e) => handleLinkClick(e, 'hero')}
          aria-label="Kanish Handlooms Home"
        >
          <span className="font-heading text-2xl md:text-3xl font-light text-primary tracking-widest leading-none">KANISH</span>
          <span className="font-body text-[0.65rem] font-normal text-accent tracking-[0.35em] uppercase mt-1">HANDLOOMS</span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:block">
          <ul className="flex gap-8 items-center list-none">
            <li>
              <a 
                href="#collections" 
                onClick={(e) => handleLinkClick(e, 'collections')}
                className="font-body text-xs font-normal uppercase tracking-widest text-text hover:text-primary relative py-2 after:absolute after:bottom-0 after:left-0 after:w-0 after:height-[1px] after:bg-accent hover:after:w-full after:transition-all after:duration-300"
                aria-label="View Collections"
              >
                Collections
              </a>
            </li>
            <li>
              <a 
                href="#story" 
                onClick={(e) => handleLinkClick(e, 'story')}
                className="font-body text-xs font-normal uppercase tracking-widest text-text hover:text-primary relative py-2 after:absolute after:bottom-0 after:left-0 after:w-0 after:height-[1px] after:bg-accent hover:after:w-full after:transition-all after:duration-300"
                aria-label="Our Story"
              >
                Story
              </a>
            </li>
            <li>
              <a 
                href="#craft" 
                onClick={(e) => handleLinkClick(e, 'craft')}
                className="font-body text-xs font-normal uppercase tracking-widest text-text hover:text-primary relative py-2 after:absolute after:bottom-0 after:left-0 after:w-0 after:height-[1px] after:bg-accent hover:after:w-full after:transition-all after:duration-300"
                aria-label="Interactive Craft Loom"
              >
                Craft
              </a>
            </li>
            <li>
              <a 
                href="#contact" 
                onClick={(e) => handleLinkClick(e, 'footer')}
                className="font-body text-xs font-normal uppercase tracking-widest text-text hover:text-primary relative py-2 after:absolute after:bottom-0 after:left-0 after:w-0 after:height-[1px] after:bg-accent hover:after:w-full after:transition-all after:duration-300"
                aria-label="Contact Us"
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>

        {/* Right side controls */}
        <div className="flex items-center gap-4">
          <button 
            className="relative flex items-center justify-center text-accent hover:text-primary p-2 focus:outline-none" 
            title="Chat on WhatsApp" 
            onClick={() => {
              console.log("Analytics: Navbar WhatsApp click");
              openWhatsApp();
            }}
            aria-label="Chat with Kanish Handlooms support on WhatsApp"
          >
            <MessageCircle size={20} strokeWidth={1.5} />
            <span className="absolute top-2 right-2 w-2 height-2 bg-whatsapp rounded-full shadow-[0_0_0_0_rgba(37,211,102,0.4)] animate-[pulse_2s_infinite]"></span>
          </button>

          {/* Hamburger toggle */}
          <button 
            className="md:hidden text-primary p-2 focus:outline-none" 
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Open navigation menu"
          >
            <Menu size={24} />
          </button>
        </div>
      </div>

      {/* Mobile Drawer (Slides from Right, Maroon Background) */}
      <div 
        className={`fixed top-0 right-0 h-full w-72 bg-primary text-bg p-8 z-50 shadow-2xl transform transition-transform duration-300 ease-in-out ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        aria-hidden={!mobileMenuOpen}
      >
        <div className="flex justify-between items-center mb-12">
          <div className="flex flex-col items-start">
            <span className="font-heading text-xl font-light text-bg tracking-widest">KANISH</span>
            <span className="font-body text-[0.6rem] text-accent tracking-widest">HANDLOOMS</span>
          </div>
          <button 
            className="text-bg p-2 focus:outline-none" 
            onClick={() => setMobileMenuOpen(false)}
            aria-label="Close navigation menu"
          >
            <X size={24} />
          </button>
        </div>

        <nav>
          <ul className="flex flex-col gap-6 list-none text-left">
            <li>
              <a 
                href="#collections" 
                onClick={(e) => handleLinkClick(e, 'collections')}
                className="font-body text-base font-normal uppercase tracking-widest text-bg hover:text-accent block py-2 border-b border-bg/10"
                aria-label="View Collections"
              >
                Collections
              </a>
            </li>
            <li>
              <a 
                href="#story" 
                onClick={(e) => handleLinkClick(e, 'story')}
                className="font-body text-base font-normal uppercase tracking-widest text-bg hover:text-accent block py-2 border-b border-bg/10"
                aria-label="Our Story"
              >
                Story
              </a>
            </li>
            <li>
              <a 
                href="#craft" 
                onClick={(e) => handleLinkClick(e, 'craft')}
                className="font-body text-base font-normal uppercase tracking-widest text-bg hover:text-accent block py-2 border-b border-bg/10"
                aria-label="Interactive Craft Loom"
              >
                Craft
              </a>
            </li>
            <li>
              <a 
                href="#contact" 
                onClick={(e) => handleLinkClick(e, 'footer')}
                className="font-body text-base font-normal uppercase tracking-widest text-bg hover:text-accent block py-2 border-b border-bg/10"
                aria-label="Contact Us"
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>

        <div className="absolute bottom-8 left-8 right-8">
          <button 
            onClick={() => {
              setMobileMenuOpen(false);
              openWhatsApp();
            }}
            className="w-full flex items-center justify-center gap-2 bg-accent text-primary py-3 px-4 font-body text-xs font-normal uppercase tracking-widest hover:bg-gold-light rounded-[4px]"
            aria-label="Chat on WhatsApp"
          >
            <MessageCircle size={16} /> WhatsApp Chat
          </button>
        </div>
      </div>

      {/* Backdrop for drawer */}
      {mobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/40 z-40 md:hidden"
          onClick={() => setMobileMenuOpen(false)}
          aria-hidden="true"
        ></div>
      )}
    </header>
  );
}
