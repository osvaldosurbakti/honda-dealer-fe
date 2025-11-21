'use client';

import { useState } from 'react';
import { CarVariant } from '@/types/car';

interface VariantsTableProps {
  variants: CarVariant[];
  carName: string;
}

export default function VariantsTable({ variants, carName }: VariantsTableProps) {
  const [selectedVariant, setSelectedVariant] = useState(0);

  return (
    <section id="variants" className="bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Pilihan Tipe & Harga
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Pilih tipe yang sesuai dengan kebutuhan dan budget Anda. Semua harga sudah termasuk PPN.
          </p>
        </div>

        {/* Quick Selector */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Pilih Tipe
              </label>
              <select
                value={selectedVariant}
                onChange={(e) => setSelectedVariant(Number(e.target.value))}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent"
              >
                {variants.map((variant, index) => (
                  <option key={variant.id} value={index}>
                    {variant.type}
                  </option>
                ))}
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Harga
              </label>
              <div className="text-2xl font-bold text-red-600 p-3 bg-gray-50 rounded-lg">
                {variants[selectedVariant].priceFormatted}
              </div>
            </div>
            
          </div>
        </div>

        {/* Variants Table */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <table className="w-full">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-6 py-4 text-left font-semibold text-gray-700">Tipe</th>
                <th className="px-6 py-4 text-left font-semibold text-gray-700">Harga</th>
                <th className="px-6 py-4 text-left font-semibold text-gray-700">Transmisi</th>
                <th className="px-6 py-4 text-left font-semibold text-gray-700">Bahan Bakar</th>
                <th className="px-6 py-4 text-left font-semibold text-gray-700">Aksi</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {variants.map((variant, index) => (
                <tr 
                  key={variant.id} 
                  className={index === selectedVariant ? 'bg-red-50' : 'hover:bg-gray-50'}
                >
                  <td className="px-6 py-4">
                    <div className="font-semibold text-gray-900">{variant.type}</div>
                    <div className="text-sm text-gray-500 mt-1">
                      {variant.features.slice(0, 2).join(', ')}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="font-bold text-red-600 text-lg">
                      {variant.priceFormatted}
                    </div>
                  </td>
                  <td className="px-6 py-4 text-gray-700">{variant.transmission}</td>
                  <td className="px-6 py-4 text-gray-700">{variant.fuelType}</td>
                  <td className="px-6 py-4">
                    <a
                      href={`https://wa.me/6287852432636?text=${encodeURIComponent(`Halo, saya tertarik dengan ${carName} tipe ${variant.type}. Bisa info lebih detail?`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block bg-green-500 text-white px-4 py-2 rounded-lg font-semibold hover:bg-green-600 transition text-sm"
                    >
                      Chat
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Additional Info */}
        <div className="mt-6 text-center text-gray-600 text-sm">
          <p>
            💡 Harga dapat berubah sewaktu-waktu. Hubungi Rendy untuk informasi harga terbaru dan promo.
          </p>
        </div>
      </div>
    </section>
  );
}