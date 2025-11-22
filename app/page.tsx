import HeroSection from '@/components/home/HeroSection';
import ProductCarousel from '@/components/home/ProductCarousel';
import FeaturesSection from '@/components/home/FeaturesSection';
import { getFeaturedCars, getAllCars } from '@/data';

export default function Home() {
  const featuredCars = getFeaturedCars();
  const allCars = getAllCars();

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection />

      {/* All Products Carousel */}
      <ProductCarousel 
        cars={allCars}
        title="Semua Model Honda"
        showViewAll={true}
      />

      {/* Features Section */}
      <FeaturesSection />


      {/* Compact CTA Section (optional - bisa ditambahkan di bagian bawah) */}
      {/* <CTASection variant="compact" /> */}
    </div>
  );
}