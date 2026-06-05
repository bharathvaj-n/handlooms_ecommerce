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
    <footer id="footer" className="bg-primary text-bg pt-20 pb-8 px-6 border-t-2 border-accent">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16 text-center md:text-left">
          
          {/* Logo & Tagline */}
          <div className="md:col-span-5 flex flex-col items-center md:items-start">
            <span className="font-heading text-3xl font-light text-bg tracking-widest leading-none">KANISH</span>
            <span className="font-body text-[0.7rem] text-accent tracking-[0.35em] uppercase mt-1.5 mb-6">HANDLOOMS</span>
            <p className="font-accent italic text-base text-bg/85 leading-relaxed max-w-sm">
              Dedicated to preserving the slow craft of Tamil Nadu's pit looms. Weaving stories of gold and cotton since 1990.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 flex flex-col items-center md:items-start">
            <h3 className="font-heading text-lg text-accent uppercase tracking-wider mb-6">Explore</h3>
            <ul className="flex flex-col gap-3 list-none">
              <li>
                <a 
                  href="#collections" 
                  onClick={(e) => handleScrollTo(e, 'collections')}
                  className="font-body text-sm text-bg/75 hover:text-accent transition-all duration-300"
                  aria-label="Scroll to Collections"
                >
                  Collections
                </a>
              </li>
              <li>
                <a 
                  href="#story" 
                  onClick={(e) => handleScrollTo(e, 'story')}
                  className="font-body text-sm text-bg/75 hover:text-accent transition-all duration-300"
                  aria-label="Scroll to Our Story"
                >
                  Our Story
                </a>
              </li>
              <li>
                <a 
                  href="#craft" 
                  onClick={(e) => handleScrollTo(e, 'craft')}
                  className="font-body text-sm text-bg/75 hover:text-accent transition-all duration-300"
                  aria-label="Scroll to Bespoke Loom customizer"
                >
                  Bespoke Loom
                </a>
              </li>
              <li>
                <a 
                  href="#new-arrivals" 
                  onClick={(e) => handleScrollTo(e, 'new-arrivals')}
                  className="font-body text-sm text-bg/75 hover:text-accent transition-all duration-300"
                  aria-label="Scroll to New Weaves"
                >
                  New Arrivals
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="md:col-span-4 flex flex-col items-center md:items-start">
            <h3 className="font-heading text-lg text-accent uppercase tracking-wider mb-6">The Weaving Salon</h3>
            <address className="not-italic text-sm text-bg/85 flex flex-col gap-4 font-body font-light">
              <p className="flex gap-3 justify-center md:justify-start items-start">
                <MapPin size={18} className="text-accent shrink-0 mt-0.5" aria-hidden="true" />
                <span>
                  Kulakkalpalayam,<br />
                  Pollachi - 642002,<br />
                  Tamil Nadu, India
                </span>
              </p>
              <button 
                className="flex gap-3 justify-center md:justify-start items-center hover:text-accent transition-colors duration-300 text-left focus:outline-none focus:ring-1 focus:ring-accent rounded-sm"
                onClick={() => {
                  console.log("Analytics: Footer phone clicked");
                  openWhatsApp();
                }}
                aria-label="Call or message support number on WhatsApp: +91 80156 11680"
              >
                <Phone size={16} className="text-accent" aria-hidden="true" />
                <span>+91 80156 11680</span>
              </button>
              <p className="flex gap-3 justify-center md:justify-start items-center">
                <Mail size={16} className="text-accent" aria-hidden="true" />
                <span>orders@kanishhandlooms.com</span>
              </p>
            </address>
          </div>

        </div>

        {/* Footer Bottom */}
        <div className="border-t border-bg/10 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-bg/60 font-body">
          <div>
            &copy; {new Date().getFullYear()} Kanish Handlooms. All Rights Reserved.
          </div>
          <div className="flex items-center gap-1.5">
            <span>Woven with love in Pollachi</span>
            <Heart size={12} fill="var(--color-accent)" stroke="var(--color-accent)" aria-hidden="true" />
            <span>🧵</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
