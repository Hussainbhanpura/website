import React from "react";
import "./WhatsappIcon.css";

const WhatsappIcon = () => {
  const phoneNumber = "8657585996"; // Replace with your phone number

  return (
    <>
      <div className='whatsapp-container'>
        <span className='whatsapp-text'>
          Need Help? <strong>Chat with us</strong>
        </span>
        <a
          href={`https://wa.me/${phoneNumber}`}
          className='whatsapp-button'
          target='_blank'
          rel='noopener noreferrer'
        >
          <i className='fa fab fa-whatsapp'></i>
        </a>
      </div>
    </>
  );
};

export default WhatsappIcon;
