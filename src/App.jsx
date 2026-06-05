import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import Collections from './components/Collections';
import Story from './components/Story';
import Showcase from './components/Showcase';
import LoomCustomizer from './components/LoomCustomizer';
import WhatsAppOrder from './components/WhatsAppOrder';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';

const WHATSAPP_NUMBER = "918015611680"; 

function openWhatsApp(productName = "", color = "") {
  const message = productName 
    ? `Hi Kanish Handlooms! 🧵\n\nI'm interested in: *${productName}*\nColor preference: ${color || "Please suggest"}\nQuantity: 1\n\nKindly confirm availability, price, and delivery details.`
    : `Hi Kanish Handlooms! 🧵\n\nI'd like to browse your latest collection. Could you share available sarees/dress materials with prices?`;
  
  const encoded = encodeURIComponent(message);
  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`, '_blank');
}

function App() {
  const [filterCategory, setFilterCategory] = useState("All");

  const openWhatsAppWithTracking = (productName = "", color = "") => {
    console.log(`Analytics: WhatsApp clicked - Product: "${productName || 'General Inquiry'}", Color: "${color || 'N/A'}"`);
    openWhatsApp(productName, color);
  };

  // Scroll Reveal System using IntersectionObserver
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, {
      threshold: 0.15
    });

    const revealElements = document.querySelectorAll('.scroll-reveal');
    revealElements.forEach((el) => observer.observe(el));

    return () => {
      revealElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <>
      {/* Navigation Header */}
      <Navbar openWhatsApp={openWhatsAppWithTracking} />

      {/* Hero Section */}
      <Hero openWhatsApp={openWhatsAppWithTracking} />

      {/* Slow Scrolling Marquee Band */}
      <Marquee />

      {/* Collections Section */}
      <div className="scroll-reveal">
        <Collections setFilterCategory={setFilterCategory} />
      </div>

      <hr className="section-divider-gold" />

      {/* Heritage Story Section */}
      <div className="scroll-reveal">
        <Story />
      </div>

      <hr className="section-divider-gold" />

      {/* Showcase Section (New Arrivals carousel) */}
      <div className="scroll-reveal">
        <Showcase 
          openWhatsApp={openWhatsAppWithTracking} 
          filterCategory={filterCategory} 
          setFilterCategory={setFilterCategory} 
        />
      </div>

      <hr className="section-divider-gold" />

      {/* Bespoke Customizer Playground */}
      <div className="scroll-reveal">
        <LoomCustomizer openWhatsApp={openWhatsAppWithTracking} />
      </div>

      <hr className="section-divider-gold" />

      {/* Forest Green Step-by-Step Checkout Section */}
      <div className="scroll-reveal">
        <WhatsAppOrder openWhatsApp={openWhatsAppWithTracking} />
      </div>

      <hr className="section-divider-gold" />

      {/* Customer Testimonials */}
      <div className="scroll-reveal">
        <Testimonials />
      </div>

      {/* Footer Details */}
      <Footer openWhatsApp={openWhatsAppWithTracking} />

      {/* Fixed Pulsing Chat Trigger */}
      <FloatingWhatsApp openWhatsApp={openWhatsAppWithTracking} />
    </>
  );
}

export default App;
