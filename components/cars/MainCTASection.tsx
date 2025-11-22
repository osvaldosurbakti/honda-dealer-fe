import { Car } from '@/types/car';

interface MainCTASectionProps {
  car: Car;
}

export default function MainCTASection({ car }: MainCTASectionProps) {
  return (
    <section className="relative bg-gradient-to-br from-red-600 via-red-500 to-red-700 text-white py-20 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-72 h-72 bg-white rounded-full -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full translate-x-1/3 translate-y-1/3"></div>
      </div>
      
      <div className="container mx-auto px-4 text-center relative z-10">
        {/* Header */}
        <div className="mb-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
            Siap Memiliki <span className="text-yellow-300">{car.name}</span>?
          </h2>
          <div className="w-32 h-1 bg-yellow-400 mx-auto mb-8 rounded-full"></div>
          <p className="text-xl md:text-2xl mb-6 max-w-3xl mx-auto leading-relaxed font-light">
            Jangan lewatkan penawaran spesial dan dapatkan harga terbaik langsung dari Rendy Honda
          </p>
        </div>

        {/* Pricing Info */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-10 max-w-2xl mx-auto border border-white/20">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-left">
              <h3 className="text-2xl font-bold text-yellow-300 mb-2">
                Harga Mulai
              </h3>
              <p className="text-3xl md:text-4xl font-bold">
                {car.priceRange}
              </p>
              <p className="text-red-100 mt-2">
                {car.typeCount} Varian Tersedia
              </p>
            </div>
            <div className="flex flex-col gap-2 text-left">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>DP Ringan</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>Bunga Kompetitif</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>Proses Cepat</span>
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center max-w-2xl mx-auto">
          {/* WhatsApp Button - Primary */}
          <a
            href={`https://wa.me/6287852432636?text=${encodeURIComponent(`Halo Rendy, saya tertarik dengan ${car.name} ${car.model} ${car.year}. Bisa info detail harga ${car.priceRange}, spesifikasi, dan penawaran terbaiknya?`)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-10 py-5 rounded-2xl font-bold text-lg shadow-2xl hover:shadow-3xl hover:scale-105 transition-all duration-300 w-full sm:w-auto flex items-center justify-center gap-4 border-2 border-green-400 min-w-[280px]"
          >
            <div className="relative">
              <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893-.001-3.189-1.248-6.189-3.515-8.452"/>
              </svg>
              <div className="absolute -top-1 -right-1 flex gap-1">
                <div className="w-2 h-2 bg-white rounded-full animate-ping"></div>
              </div>
            </div>
            <span className="text-lg">Chat WhatsApp</span>
            <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>

          {/* Secondary Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            {/* Phone Button */}
            <a
              href="tel:087852432636"
              className="group bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 w-full sm:w-auto flex items-center justify-center gap-3 border border-white/20 hover:border-white/40 min-w-[200px]"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span>Telepon</span>
            </a>

            {/* Test Drive Button */}
            <a
              href={`https://wa.me/6287852432636?text=${encodeURIComponent(`Halo Rendy, saya ingin jadwalkan test drive untuk ${car.name} ${car.model}. Kapan tersedia?`)}`}
              className="group bg-yellow-500 hover:bg-yellow-600 text-gray-900 px-8 py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 w-full sm:w-auto flex items-center justify-center gap-3 border border-yellow-400 min-w-[200px]"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              <span>Test Drive</span>
            </a>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-12 text-sm text-red-100 flex flex-col sm:flex-row justify-center items-center gap-6">
          <div className="flex items-center gap-3">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="font-semibold">Respon Cepat 24 Jam</span>
          </div>
          <div className="hidden sm:block w-1 h-1 bg-red-300 rounded-full"></div>
          <div className="flex items-center gap-3">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
            <span className="font-semibold">Penawaran Terbaik</span>
          </div>
          <div className="hidden sm:block w-1 h-1 bg-red-300 rounded-full"></div>
          <div className="flex items-center gap-3">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            <span className="font-semibold">Test Drive Gratis</span>
          </div>
        </div>
      </div>
    </section>
  );
}