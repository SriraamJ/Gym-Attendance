import React from 'react';

const WhatsAppButton = () => {
  const redirectToWhatsApp = () => {
    const phoneNumber = '+919080123809'; // Your phone number in international format
    const message = 'I%20am%20interested%20in%20your%20car%20for%20sale'; // Your pre-made message with spaces encoded

    // Construct the WhatsApp URL
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

    // Open the WhatsApp URL in a new tab/window
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div>
      <button onClick={redirectToWhatsApp}>Send Message on WhatsApp</button>
    </div>
  );
};

export default WhatsAppButton;
