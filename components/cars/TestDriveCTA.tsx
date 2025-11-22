interface TestDriveCTAProps {
  car: any;
}

export default function TestDriveCTA({ car }: TestDriveCTAProps) {
  return (
    <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Rasakan Sensasi Mengendarai {car.name}
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Jadwalkan test drive gratis dan rasakan langsung performa {car.name} bersama Rendy Honda
          </p>
          <a
            href={`https://wa.me/6287852432636?text=${encodeURIComponent(`Halo Rendy, saya ingin jadwalkan test drive untuk ${car.name}. Kapan tersedia?`)}`}
            className="inline-flex items-center gap-3 bg-white text-blue-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            Jadwalkan Test Drive Gratis
          </a>
        </div>
      </div>
    </section>
  );
}