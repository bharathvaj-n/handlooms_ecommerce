import React, { useState } from 'react';
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

const WHATSAPP_NUMBER = "916382675859"; 

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

  return (
    <>
      {/* Texture Overlay for Handwoven Fabric tactile feel */}
      <div className="fabric-texture-overlay"></div>

      {/* Navigation Header */}
      <Navbar openWhatsApp={openWhatsAppWithTracking} />

      {/* Hero Section */}
      <Hero openWhatsApp={openWhatsAppWithTracking} />

      {/* Slow Scrolling Marquee Band */}
      <Marquee />

      {/* Collections Section */}
      <Collections setFilterCategory={setFilterCategory} />

      {/* Heritage Story Section */}
      <Story />

      {/* Showcase Section (New Arrivals carousel) */}
      <Showcase 
        openWhatsApp={openWhatsAppWithTracking} 
        filterCategory={filterCategory} 
        setFilterCategory={setFilterCategory} 
      />

      {/* Bespoke Customizer Playground */}
      <LoomCustomizer openWhatsApp={openWhatsAppWithTracking} />

      {/* Forest Green Step-by-Step Checkout Section */}
      <WhatsAppOrder openWhatsApp={openWhatsAppWithTracking} />

      {/* Customer Testimonials */}
      <Testimonials />

      {/* Footer Details */}
      <Footer openWhatsApp={openWhatsAppWithTracking} />

      {/* Fixed Pulsing Chat Trigger */}
      <FloatingWhatsApp openWhatsApp={openWhatsAppWithTracking} />
    </>
  );
}

export default App;
