'use client';

import { useState } from 'react';
import { CarVariant } from '@/types/car';

interface VariantsTableProps {
  variants: CarVariant[];
  carName: string;
}

export default function VariantsTable({ variants, carName }: VariantsTableProps) {
  const [selectedVariant, setSelectedVariant] = useState(0);
  const [showAllFeatures, setShowAllFeatures] = useState<number | null>(null);

  const toggleFeatures = (index: number) => {
    setShowAllFeatures(showAllFeatures === index ? null : index);
  };

  return (
    <section id="variants" className="bg-gradient-to-br from-gray-50 to-white py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-3">
            Pilihan Varian & Harga
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Temukan varian yang tepat sesuai kebutuhan dan budget Anda.
          </p>
          <div className="w-20 h-1 bg-red-600 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Quick Selector Card */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8 border border-gray-200">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 items-end">
            <div className="lg:col-span-2">
              <label className="block text-base font-bold text-gray-900 mb-2">
                🚗 Pilih Varian {carName}
              </label>
              <select
                value={selectedVariant}
                onChange={(e) => setSelectedVariant(Number(e.target.value))}
                className="w-full p-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 text-base font-semibold transition-all duration-300 hover:border-gray-400"
              >
                {variants.map((variant, index) => (
                  <option key={variant.id} value={index}>
                    {variant.type}
                  </option>
                ))}
              </select>
            </div>
            
            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1">
                Harga OTR
              </label>
              <div className="text-2xl font-bold text-red-600 p-3 bg-red-50 rounded-lg border-2 border-red-200">
                {variants[selectedVariant].priceFormatted}
              </div>
            </div>
            
            <div>
              <a
                href={`https://wa.me/6287852432636?text=${encodeURIComponent(`Halo Rendy, saya tertarik dengan ${carName} tipe ${variants[selectedVariant].type} seharga ${variants[selectedVariant].priceFormatted}. Bisa info detail dan test drive?`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white px-4 py-3 rounded-lg font-bold text-base hover:from-green-600 hover:to-green-700 transition-all duration-300 shadow-md hover:shadow-lg hover:scale-105 flex items-center justify-center gap-2"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893-.001-3.189-1.248-6.189-3.515-8.452"/>
                </svg>
                Konsultasi
              </a>
            </div>
          </div>
        </div>

        {/* Variants Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {variants.map((variant, index) => (
            <div
              key={variant.id}
              className={`bg-white rounded-xl shadow-md border-2 transition-all duration-300 hover:shadow-lg hover:scale-105 ${
                index === selectedVariant 
                  ? 'border-red-500 ring-1 ring-red-200' 
                  : 'border-gray-200 hover:border-red-300'
              }`}
            >
              {/* Variant Header */}
              <div className="bg-gradient-to-r from-gray-900 to-gray-800 text-white p-4 rounded-t-xl">
                <h3 className="text-lg font-bold mb-1">{variant.type}</h3>
                <div className="text-xl font-bold text-red-400">{variant.priceFormatted}</div>
                <div className="flex items-center gap-3 mt-2 text-xs text-gray-300">
                  <span className="flex items-center gap-1">
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                    {variant.transmission}
                  </span>
                  <span className="flex items-center gap-1">
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {variant.fuelType}
                  </span>
                </div>
              </div>

              {/* Features */}
              <div className="p-4">
                <div className="mb-3">
                  <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2 text-sm">
                    <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                    Fitur Utama
                  </h4>
                  <ul className="space-y-1">
                    {(showAllFeatures === index ? variant.features : variant.features.slice(0, 4)).map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-2 text-xs text-gray-700">
                        <svg className="w-3 h-3 text-green-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  {variant.features.length > 4 && (
                    <button
                      onClick={() => toggleFeatures(index)}
                      className="text-red-600 text-xs font-semibold mt-2 hover:text-red-700 transition-colors duration-200 flex items-center gap-1"
                    >
                      {showAllFeatures === index ? 'Tampilkan Lebih Sedikit' : `Lihat ${variant.features.length - 4} Fitur Lainnya`}
                      <svg className={`w-3 h-3 transition-transform duration-200 ${showAllFeatures === index ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                  )}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2 mt-4">
                  <a
                    href={`https://wa.me/6287852432636?text=${encodeURIComponent(`Halo Rendy, saya tertarik dengan ${carName} tipe ${variant.type} seharga ${variant.priceFormatted}. Bisa info detail lebih lanjut?`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-gradient-to-r from-green-500 to-green-600 text-white text-center py-2 rounded-lg font-semibold hover:from-green-600 hover:to-green-700 transition-all duration-300 shadow-sm hover:shadow-md text-xs"
                  >
                    Chat WhatsApp
                  </a>
                  <a
                    href="tel:087852432636"
                    className="px-3 py-2 bg-gray-100 text-gray-700 rounded-lg font-semibold hover:bg-gray-200 transition-all duration-300 shadow-sm hover:shadow-md flex items-center justify-center text-xs"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}