// components/Layout.tsx
import React, { ReactNode } from 'react';
import WhatsAppButton from './WhatsAppButton';
import styled from 'styled-components';

type LayoutProps = {
  children: ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Paywall>
        <PaywallContent>
          <PaywallMessage>Payment Pending</PaywallMessage>
          <PaywallSubMessage>
            Please process the payment to activate your hosting. Your services will be restored promptly once </br>the payment is completed. Thank you for your understanding and cooperation.
          </PaywallSubMessage>
          <LinkWrapper href="https://multixion.com">Multixion</LinkWrapper>
        </PaywallContent>
      </Paywall>
      <LayoutWrapper>
        {children}
        <WhatsAppButton />
      </LayoutWrapper>
    </>
  );
};

const LayoutWrapper = styled.div`
  filter: blur(10px);
`;

const LinkWrapper = styled.a`
  color: #193dbf;
  text-decoration: none;
  font-weight: bold;
  margin-top: 20px;
  display: inline-block;

  &:hover {
    text-decoration: underline;
  }
`;

const Paywall = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 99999999;
`;

const PaywallContent = styled.div`
  background: #ffffff;
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

const PaywallMessage = styled.p`
  font-size: 2rem;
  color: #ff6b6b;
  margin: 0;
`;

const PaywallSubMessage = styled.p`
  font-size: 1.25rem;
  color: #333;
  margin-top: 10px;
  margin-bottom: 20px;
`;

export default Layout;
