import React from 'react';
import { MessageSquare } from 'lucide-react';

export default function FloatingWhatsApp({ openWhatsApp }) {
  const handleClick = () => {
    console.log("Analytics: Floating WhatsApp button clicked");
    openWhatsApp();
  };

  return (
    <div 
      className="floating-whatsapp-trigger" 
      onClick={handleClick}
      title="Chat on WhatsApp"
      aria-label="Chat on WhatsApp"
    >
      <MessageSquare fill="currentColor" size={26} />
    </div>
  );
}
