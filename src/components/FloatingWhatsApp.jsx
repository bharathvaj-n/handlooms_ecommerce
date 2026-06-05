import React from 'react';
import { MessageCircle } from 'lucide-react';

export default function FloatingWhatsApp({ openWhatsApp }) {
  const handleClick = () => {
    console.log("Analytics: Floating WhatsApp button clicked");
    openWhatsApp();
  };

  return (
    <button 
      className="fixed bottom-6 right-6 w-[60px] h-[60px] rounded-full bg-whatsapp text-white flex items-center justify-center shadow-2xl z-40 border-2 border-bg animate-whatsapp-pulse transition-all duration-300 hover:scale-105 hover:bg-[#20ba5a] focus:outline-none focus:ring-2 focus:ring-accent"
      onClick={handleClick}
      title="Chat on WhatsApp"
      aria-label="Open chat conversation with Kanish Handlooms on WhatsApp"
    >
      <MessageCircle fill="currentColor" size={28} />
    </button>
  );
}
