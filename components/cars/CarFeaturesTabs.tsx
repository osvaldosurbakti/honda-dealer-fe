'use client';

import { useState } from 'react';
import { CarFeatureSections, CarSpecs } from '@/types/car';

interface CarFeaturesTabsProps {
  features: CarFeatureSections;
  specs: CarSpecs;
}

export default function CarFeaturesTabs({ features, specs }: CarFeaturesTabsProps) {
  const [activeTab, setActiveTab] = useState('exterior');

  const tabs = [
    { id: 'exterior', label: 'Eksterior', emoji: '🚗' },
    { id: 'interior', label: 'Interior', emoji: '🛋️' },
    { id: 'safety', label: 'Keselamatan', emoji: '🛡️' },
    { id: 'technology', label: 'Teknologi', emoji: '🔧' },
    { id: 'specs', label: 'Spesifikasi', emoji: '📊' },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'exterior':
        return (
          <div>
            <h3 className="text-2xl font-bold mb-4">{features.exterior.title}</h3>
            <p className="text-gray-700 mb-6 leading-relaxed">{features.exterior.description}</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {features.exterior.features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <span className="text-green-500 text-lg">✓</span>
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        );

      case 'interior':
        return (
          <div>
            <h3 className="text-2xl font-bold mb-4">{features.interior.title}</h3>
            <p className="text-gray-700 mb-6 leading-relaxed">{features.interior.description}</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {features.interior.features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <span className="text-green-500 text-lg">✓</span>
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        );

      case 'safety':
        return (
          <div>
            <h3 className="text-2xl font-bold mb-4">{features.safety.title}</h3>
            <p className="text-gray-700 mb-6 leading-relaxed">{features.safety.description}</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {features.safety.features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <span className="text-green-500 text-lg">✓</span>
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        );

      case 'technology':
        return (
          <div>
            <h3 className="text-2xl font-bold mb-4">{features.technology.title}</h3>
            <p className="text-gray-700 mb-6 leading-relaxed">{features.technology.description}</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {features.technology.features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <span className="text-green-500 text-lg">✓</span>
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        );

      case 'specs':
        return (
          <div>
            <h3 className="text-2xl font-bold mb-6">Spesifikasi Teknis</h3>
            
            {/* Dimensi */}
            <div className="mb-8">
              <h4 className="text-xl font-semibold mb-4">Dimensi</h4>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="text-gray-600 text-sm">Panjang</div>
                  <div className="font-semibold">{specs.dimensions.length}</div>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="text-gray-600 text-sm">Lebar</div>
                  <div className="font-semibold">{specs.dimensions.width}</div>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="text-gray-600 text-sm">Tinggi</div>
                  <div className="font-semibold">{specs.dimensions.height}</div>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="text-gray-600 text-sm">Jarak Sumbu</div>
                  <div className="font-semibold">{specs.dimensions.wheelbase}</div>
                </div>
              </div>
            </div>

            {/* Performa */}
            <div className="mb-8">
              <h4 className="text-xl font-semibold mb-4">Performa</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <div className="flex justify-between border-b pb-2">
                    <span className="text-gray-600">Mesin</span>
                    <span className="font-semibold">{specs.performance.engine}</span>
                  </div>
                  <div className="flex justify-between border-b pb-2">
                    <span className="text-gray-600">Kapasitas</span>
                    <span className="font-semibold">{specs.performance.displacement}</span>
                  </div>
                  <div className="flex justify-between border-b pb-2">
                    <span className="text-gray-600">Tenaga Maks</span>
                    <span className="font-semibold">{specs.performance.maxPower}</span>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between border-b pb-2">
                    <span className="text-gray-600">Torsi Maks</span>
                    <span className="font-semibold">{specs.performance.maxTorque}</span>
                  </div>
                  <div className="flex justify-between border-b pb-2">
                    <span className="text-gray-600">Transmisi</span>
                    <span className="font-semibold">{specs.performance.transmission}</span>
                  </div>
                  <div className="flex justify-between border-b pb-2">
                    <span className="text-gray-600">Konsumsi BBM</span>
                    <span className="font-semibold">{specs.performance.fuelConsumption}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <section className="bg-white py-12">
      <div className="container mx-auto px-4">
        {/* Tabs Navigation */}
        <div className="flex overflow-x-auto mb-8 border-b">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center space-x-2 px-6 py-4 font-semibold whitespace-nowrap border-b-2 transition ${
                activeTab === tab.id
                  ? 'border-red-600 text-red-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              <span>{tab.emoji}</span>
              <span>{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="min-h-96">
          {renderContent()}
        </div>
      </div>
    </section>
  );
}