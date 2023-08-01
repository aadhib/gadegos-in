import React from 'react';
import { WhatsappIcon } from 'react-share';
import styled from 'styled-components';

const WhatsAppButtonWrapper = styled.a`
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 60px;
  height: 60px;
  background-color: --primary; /* Customize the button color */
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const IconWrapper = styled.div`
  width: 50px;
  height: 50px;
`;

const WhatsAppButton = () => {
  const phoneNumber = '+919745826915';
  const message = 'Hello, How can we help you today?';
  const apiLink = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;

  return (
    <WhatsAppButtonWrapper href={apiLink} target="_blank" rel="noopener noreferrer">
      <IconWrapper>
        <WhatsappIcon round size={50} />
      </IconWrapper>
    </WhatsAppButtonWrapper>
  );
};

export default WhatsAppButton;
