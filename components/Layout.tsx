// components/Layout.tsx
import React, { ReactNode } from 'react';
import WhatsAppButton from './WhatsAppButton';
import styled from 'styled-components';

type LayoutProps = {
  children: ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <LayoutWrapper>
      <Paywall>
          <p>Payment Pending</p>
          <LinkWrapper href="https://multixion.com">Multixion</LinkWrapper>
      </Paywall>
      {children}
      <WhatsAppButton />
    </LayoutWrapper>
  );
};

const LayoutWrapper = styled.div`
    filter: blur(10px);
`;

const LinkWrapper = styled.a`
  color: #193dbf;
`

const Paywall = styled.div`
  position: fixed;
  width: 100vw;
  left: 0;
  top: 50%;
  font-size: 6rem;
  display: flex;

`

export default Layout;

