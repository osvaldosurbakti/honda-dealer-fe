'use client';

import { lazy, Suspense } from 'react';
import TrustSection from './TrustSection';
import CTASection from './CTASection';
import LocationSection from './LocationSection';

// Lazy load BlogPreviewSection karena mungkin lebih berat
const BlogPreview = lazy(() => import('./BlogPreview'));

export default function PreFooter() {
  return (
    <div className="bg-gradient-to-br from-gray-50 to-white border-t border-gray-200/60 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,#000_1px,transparent_0)] bg-[length:40px_40px]"></div>
      </div>
      
      <div className="container mx-auto px-4 py-8 lg:py-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 lg:gap-8">
          <TrustSection />
          <CTASection />
          <LocationSection />
          <Suspense fallback={<div className="lg:col-span-1 animate-pulse bg-gray-200 rounded-xl h-64"></div>}>
            <BlogPreview />
          </Suspense>
        </div>
      </div>
    </div>
  );
}