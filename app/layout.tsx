import { ReactNode } from 'react';
import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import Layout from '@/components/layout/Layout';
import TimedPopup from '@/components/TimedPopup';
import { siteConfig } from '@/lib/config/site';
import './globals.css';

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: {
    default: siteConfig.seo.defaultTitle,
    template: siteConfig.seo.titleTemplate,
  },
  description: siteConfig.seo.defaultDescription,
  keywords: siteConfig.keywords,
  authors: [{ name: siteConfig.author }],
  creator: siteConfig.author,
};

export const viewport: Viewport = {
  themeColor: '#E40521',
};

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="id" className={inter.variable}>
      <body className="font-sans bg-gray-50">
        <Layout>
          {children}
        </Layout>
        {/* TimedPopup di luar Layout agar z-index bekerja optimal */}
        <TimedPopup 
          delay={5000}
          brosurImage="/images/brosur/main.jpg"
          brosurAlt="Promo Spesial Honda Surabaya - DP 10%, Free Aksesoris, dan Hadiah Menarik"
        />
      </body>
    </html>
  );
}