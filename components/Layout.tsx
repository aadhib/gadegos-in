// components/Layout.tsx
import React, { ReactNode } from 'react';
import WhatsAppButton from './WhatsAppButton';

type LayoutProps = {
  children: ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      {children}
      <WhatsAppButton />
    </div>
  );
};

export default Layout;
