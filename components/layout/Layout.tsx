// src/components/layout/Layout.tsx
import { ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';
import PreFooter from './PreFooter';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="grow">
        {children}
      </main>
      <PreFooter /> {/* 👈 PREFOOTER DITAMBAHKAN DI SINI */}
      <Footer />
    </div>
  );
}