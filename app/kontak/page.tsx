import ContactForm from '@/components/forms/ContactForm';

export default function KontakPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Hubungi Saya
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Saya siap membantu Anda menemukan mobil Honda yang tepat. 
            Jangan ragu untuk menghubungi saya melalui berbagai channel yang tersedia.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information - Personal Branding */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Informasi Kontak
            </h2>

            {/* Personal Info Card */}
            <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center text-white font-bold text-2xl">
                  RH
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">Rendy Honda</h3>
                  <p className="text-gray-600">Honda Sales Consultant</p>
                  <p className="text-gray-500 text-sm">Pengalaman: 5+ tahun</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                  <span className="text-gray-500 text-xl">📍</span>
                  <div>
                    <p className="font-semibold">Lokasi</p>
                    <p className="text-gray-600">Surabaya & Sekitarnya</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                  <span className="text-gray-500 text-xl">📞</span>
                  <div>
                    <p className="font-semibold">Telepon/WhatsApp</p>
                    <a href="tel:087852432636" className="text-red-600 hover:text-red-700 font-semibold">
                      087852432636
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                  <span className="text-gray-500 text-xl">✉️</span>
                  <div>
                    <p className="font-semibold">Email</p>
                    <a href="mailto:rendyhondasurabaya@gmail.com" className="text-red-600 hover:text-red-700 font-semibold">
                      rendyhondasurabaya@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                  <span className="text-gray-500 text-xl">🕐</span>
                  <div>
                    <p className="font-semibold">Jam Layanan</p>
                    <p className="text-gray-600">Setiap Hari</p>
                    <p className="text-gray-600">24 Jam</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Specialization */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Spesialisasi</h3>
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-red-50 text-red-700 px-3 py-2 rounded-lg text-center font-semibold">
                  HR-V
                </div>
                <div className="bg-red-50 text-red-700 px-3 py-2 rounded-lg text-center font-semibold">
                  CR-V
                </div>
                <div className="bg-red-50 text-red-700 px-3 py-2 rounded-lg text-center font-semibold">
                  BR-V
                </div>
                <div className="bg-red-50 text-red-700 px-3 py-2 rounded-lg text-center font-semibold">
                  SUV Models
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                <h4 className="font-semibold text-blue-800 mb-2">💡 Kenapa Memilih Saya?</h4>
                <ul className="text-blue-700 text-sm space-y-1">
                  <li>• Konsultasi gratis & tanpa tekanan</li>
                  <li>• Proses kredit mudah & transparan</li>
                  <li>• Harga kompetitif</li>
                  <li>• Layanan after sales terpadu</li>
                </ul>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white rounded-xl shadow-lg p-6 mt-6">
              <h3 className="text-xl font-semibold mb-4">Aksi Cepat</h3>
              <div className="space-y-3">
                <a
                  href="https://wa.me/6287852432636?text=Halo%20Rendy,%20saya%20tertarik%20dengan%20mobil%20Honda.%20Bisa%20info%20lebih%20lanjut?"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-green-500 text-white py-3 px-4 rounded-lg font-semibold hover:bg-green-600 transition flex items-center justify-center space-x-2"
                >
                  <span>💬</span>
                  <span>Chat WhatsApp Langsung</span>
                </a>
                <a
                  href="tel:087852432636"
                  className="w-full bg-red-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-red-700 transition flex items-center justify-center space-x-2"
                >
                  <span>📞</span>
                  <span>Telepon Sekarang</span>
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">
                Kirim Pesan
              </h2>
              <p className="text-gray-600 mb-8">
                Isi form di bawah ini dan saya akan menghubungi Anda dalam waktu 1x24 jam.
              </p>
              
              <ContactForm />
            </div>

            {/* Test Drive CTA */}
            <div className="bg-linear-to-r from-red-600 to-red-700 text-white rounded-xl p-6 mt-6 text-center">
              <h3 className="text-xl font-semibold mb-2">
                🚗 Ingin Test Drive?
              </h3>
              <p className="mb-4">
                Jadwalkan test drive mobil Honda impian Anda
              </p>
              <a
                href="https://wa.me/6287852432636?text=Halo%20Rendy,%20saya%20ingin%20jadwalkan%20test%20drive%20mobil%20Honda."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-white text-red-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
              >
                Booking Test Drive
              </a>
            </div>

            {/* Response Time Info */}
            <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6 mt-6">
              <h4 className="font-semibold text-yellow-800 mb-2">⚡ Response Time</h4>
              <ul className="text-yellow-700 text-sm space-y-1">
                <li>• <strong>WhatsApp:</strong> Dalam beberapa menit (24 jam)</li>
                <li>• <strong>Telepon:</strong> Langsung diangkat</li>
                <li>• <strong>Email:</strong> Maksimal 24 jam</li>
                <li>• <strong>Form:</strong> Maksimal 24 jam</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}