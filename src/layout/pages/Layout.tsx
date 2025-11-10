import { Header } from './Header';
import { Navbar } from './Navbar';
import { Footer } from './Footer';

import { ReactNode } from 'react';

import '../styles/layout.css';

interface LayoutProps {
  children?: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <>
      <Header />
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}
