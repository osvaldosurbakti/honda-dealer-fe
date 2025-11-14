import { notFound } from 'next/navigation';
import { cars, getCarBySlug } from '@/data/cars';
import CarHero from '@/components/cars/CarHero';
import CarQuickInfo from '@/components/cars/CarQuickInfo';
import VariantsTable from '@/components/cars/VariantsTable';
import CarFeaturesTabs from '@/components/cars/CarFeaturesTabs';

type Props = {
  params: Promise<{ slug: string }>; // params sekarang Promise
  searchParams: { [key: string]: string | string[] | undefined };
};

export default async function CarDetailPage({ params }: Props) { // Tambahkan async
  // Await params sebelum digunakan
  const { slug } = await params;
  const car = getCarBySlug(slug);

  if (!car) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white">
      <CarHero car={car} />
      <CarQuickInfo car={car} />
      <VariantsTable variants={car.variants} carName={car.name} />
      <CarFeaturesTabs features={car.features} specs={car.specs} />
      
      {/* CTA Section */}
      <section className="bg-red-600 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Tertarik dengan {car.name}?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Hubungi sales consultant kami sekarang untuk informasi lebih detail, 
            test drive, dan penawaran spesial.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`https://wa.me/6287852432636?text=${encodeURIComponent(`Halo, saya tertarik dengan ${car.name}. Bisa info detail dan test drive?`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-600 transition text-lg"
            >
              💬 WhatsApp Sales
            </a>
            <a
              href="tel:087852432636"
              className="bg-white text-red-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition text-lg"
            >
              📞 Telepon Sekarang
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}