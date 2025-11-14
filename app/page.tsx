import Link from 'next/link';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-linear-to-br from-honda-red to-red-700 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Selamat Datang di <br />
            <span className="text-yellow-300">Honda Prisma Surabaya</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Dealer Resmi Honda di Surabaya. Temukan mobil Honda impian Anda dengan harga terbaik dan pelayanan terpercaya.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/mobil">
              <Button size="lg" variant="secondary">
                🚗 Lihat Semua Mobil
              </Button>
            </Link>
            <a
              href={`https://wa.me/6287852432636?text=${encodeURIComponent('Halo, saya tertarik dengan mobil Honda. Bisa info lebih lanjut?')}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="lg" variant="outline">
                💬 WhatsApp
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Mengapa Memilih Honda Prisma Surabaya?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card hover className="text-center">
              <div className="text-4xl mb-4">🏆</div>
              <h3 className="text-xl font-semibold mb-3">Dealer Resmi</h3>
              <p className="text-gray-600">
                Dealer resmi Honda dengan layanan terpercaya dan garansi resmi dari Astra Honda.
              </p>
            </Card>
            
            <Card hover className="text-center">
              <div className="text-4xl mb-4">🔧</div>
              <h3 className="text-xl font-semibold mb-3">Layanan Lengkap</h3>
              <p className="text-gray-600">
                Layanan penjualan dan after sales lengkap dengan teknisi berpengalaman.
              </p>
            </Card>
            
            <Card hover className="text-center">
              <div className="text-4xl mb-4">📍</div>
              <h3 className="text-xl font-semibold mb-3">Lokasi Strategis</h3>
              <p className="text-gray-600">
                Berlokasi di Surabaya dengan akses mudah dan area parkir yang luas.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Siap Memiliki Honda Impian Anda?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Hubungi sales consultant kami sekarang untuk informasi lebih lanjut dan penawaran spesial.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`https://wa.me/6287852432636?text=${encodeURIComponent('Halo, saya tertarik dengan mobil Honda. Bisa info lebih lanjut?')}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="lg" variant="primary">
                💬 WhatsApp Sales
              </Button>
            </a>
            <a href="tel:087852432636">
              <Button size="lg" variant="outline">
                📞 Telepon Sekarang
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}