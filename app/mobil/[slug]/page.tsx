import { notFound } from 'next/navigation';
import { cars, getCarBySlug } from '@/data';
import CarHero from '@/components/cars/CarHero';
import CarQuickInfo from '@/components/cars/CarQuickInfo';
import VariantsTable from '@/components/cars/VariantsTable';
import CarFeaturesTabs from '@/components/cars/CarFeaturesTabs';
import VideoSection from '@/components/cars/VideoSection';
import MainCTASection from '@/components/cars/MainCTASection';

type Props = {
  params: Promise<{ slug: string }>;
  searchParams: { [key: string]: string | string[] | undefined };
};

export default async function CarDetailPage({ params }: Props) {
  const { slug } = await params;
  const car = getCarBySlug(slug);

  if (!car) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <CarHero car={car} />
      
      {/* Quick Info Banner */}
      <CarQuickInfo car={car} />

      {/* Video Section */}
      <VideoSection 
        videoUrl={car.videoUrl}
        title={`Video ${car.name}`}
        description={`Lihat keunggulan dan fitur-fitur terbaru ${car.name} dalam video berikut`}
      />

      {/* Variants & Pricing */}
      <section id="harga" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <VariantsTable variants={car.variants} carName={car.name} />
        </div>
      </section>

      {/* Features & Specifications */}
      <CarFeaturesTabs features={car.features} specs={car.specs} />

      {/* Main CTA Section */}
      <MainCTASection car={car} />
    </div>
  );
}