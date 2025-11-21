import { ReactNode } from 'react';

interface BlogLayoutProps {
  children: ReactNode;
}

export default function BlogLayout({ children }: BlogLayoutProps) {
  return (
    <>
      {children}
      
      {/* Global Blog Scripts bisa ditambahkan di sini */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Blog",
            "name": "Blog Rendy Honda Surabaya",
            "description": "Tips, berita, dan informasi terbaru seputar mobil Honda",
            "publisher": {
              "@type": "Organization",
              "name": "Rendy Honda Surabaya",
              "url": "https://rendyhonda.surabaya"
            }
          })
        }}
      />
    </>
  );
}