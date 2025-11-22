'use client';

import { useState } from 'react';

interface ColorOptionsProps {
  colors: string[];
  carName: string;
}

export default function ColorOptions({ colors, carName }: ColorOptionsProps) {
  const [selectedColor, setSelectedColor] = useState(0);

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Pilihan Warna {carName}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Tersedia dalam berbagai pilihan warna yang elegan dan sporty
          </p>
          <div className="w-24 h-1 bg-red-600 mx-auto mt-6 rounded-full"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Selected Color Preview */}
          <div className="mb-8">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <img
                src={colors[selectedColor]}
                alt={`Color option ${selectedColor + 1}`}
                className="w-full h-64 object-cover"
              />
            </div>
          </div>

          {/* Color Thumbnails */}
          <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
            {colors.map((color, index) => (
              <button
                key={index}
                onClick={() => setSelectedColor(index)}
                className={`p-2 bg-white rounded-xl shadow-sm border-2 transition-all duration-300 hover:scale-105 ${
                  selectedColor === index 
                    ? 'border-red-500 shadow-md' 
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <img
                  src={color}
                  alt={`Color option ${index + 1}`}
                  className="w-full h-16 object-cover rounded-lg"
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}