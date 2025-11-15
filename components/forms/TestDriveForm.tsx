'use client';

import { useState } from 'react';

interface TestDriveFormData {
  name: string;
  email: string;
  phone: string;
  carModel: string;
  preferredDate: string;
  preferredTime: string;
  location: string;
  message?: string;
}

export default function TestDriveForm() {
  const [formData, setFormData] = useState<TestDriveFormData>({
    name: '',
    email: '',
    phone: '',
    carModel: '',
    preferredDate: '',
    preferredTime: '',
    location: 'showroom',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset form after success
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        phone: '',
        carModel: '',
        preferredDate: '',
        preferredTime: '',
        location: 'showroom',
        message: '',
      });
      setIsSubmitted(false);
    }, 5000);
  };

  // Get tomorrow's date for min date
  const getTomorrowDate = () => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    return tomorrow.toISOString().split('T')[0];
  };

  if (isSubmitted) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
        <div className="text-green-500 text-4xl mb-4">🎉</div>
        <h3 className="text-xl font-semibold text-green-800 mb-2">
          Booking Test Drive Berhasil!
        </h3>
        <p className="text-green-700">
          Tim sales akan menghubungi Anda untuk konfirmasi jadwal test drive.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Name */}
        <div>
          <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
            Nama Lengkap *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent transition"
            placeholder="Masukkan nama lengkap"
          />
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
            Email *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent transition"
            placeholder="email@contoh.com"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Phone */}
        <div>
          <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
            Nomor Telepon *
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent transition"
            placeholder="08xxxxxxxxxx"
          />
        </div>

        {/* Car Model */}
        <div>
          <label htmlFor="carModel" className="block text-sm font-semibold text-gray-700 mb-2">
            Model Mobil *
          </label>
          <select
            id="carModel"
            name="carModel"
            value={formData.carModel}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent transition"
          >
            <option value="">Pilih model...</option>
            <option value="New HR-V">New HR-V</option>
            <option value="New Brio">New Brio</option>
            <option value="New CR-V">New CR-V</option>
            <option value="Honda WR-V">Honda WR-V</option>
            <option value="City Hatchback">City Hatchback</option>
            <option value="Civic">Civic</option>
            <option value="BR-V">BR-V</option>
            <option value="Accord">Accord</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Preferred Date */}
        <div>
          <label htmlFor="preferredDate" className="block text-sm font-semibold text-gray-700 mb-2">
            Tanggal yang Diinginkan *
          </label>
          <input
            type="date"
            id="preferredDate"
            name="preferredDate"
            value={formData.preferredDate}
            onChange={handleChange}
            required
            min={getTomorrowDate()}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent transition"
          />
        </div>

        {/* Preferred Time */}
        <div>
          <label htmlFor="preferredTime" className="block text-sm font-semibold text-gray-700 mb-2">
            Waktu yang Diinginkan *
          </label>
          <select
            id="preferredTime"
            name="preferredTime"
            value={formData.preferredTime}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent transition"
          >
            <option value="">Pilih waktu...</option>
            <option value="08:00-10:00">08:00 - 10:00</option>
            <option value="10:00-12:00">10:00 - 12:00</option>
            <option value="13:00-15:00">13:00 - 15:00</option>
            <option value="15:00-17:00">15:00 - 17:00</option>
          </select>
        </div>
      </div>

      {/* Location */}
      <div>
        <label htmlFor="location" className="block text-sm font-semibold text-gray-700 mb-2">
          Lokasi Test Drive *
        </label>
        <select
          id="location"
          name="location"
          value={formData.location}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent transition"
        >
          <option value="showroom">Showroom Honda Prisma Surabaya</option>
          <option value="home">Test Drive ke Lokasi Saya</option>
        </select>
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
          Catatan Tambahan (Opsional)
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={3}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent transition resize-none"
          placeholder="Contoh: warna mobil yang diinginkan, fitur khusus yang ingin dicoba, dll."
        />
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-red-600 text-white py-4 px-6 rounded-lg font-semibold hover:bg-red-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? (
          <span className="flex items-center justify-center">
            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Memproses...
          </span>
        ) : (
          'Booking Test Drive'
        )}
      </button>

      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
        <h4 className="font-semibold text-blue-800 mb-2">📝 Informasi Test Drive</h4>
        <ul className="text-blue-700 text-sm space-y-1">
          <li>• Test drive gratis tanpa biaya</li>
          <li>• Durasi test drive ±30 menit</li>
          <li>• Bawa SIM asli dan KTP</li>
          <li>• Konfirmasi jadwal akan dilakukan via telepon</li>
        </ul>
      </div>
    </form>
  );
}