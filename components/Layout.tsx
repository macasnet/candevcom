// components/Layout.tsx

import React, { ReactNode } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }: LayoutProps) => {
  return (
    <div>
      <Navbar />
      <main className="container mx-auto">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
