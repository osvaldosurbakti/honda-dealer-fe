'use client';

import { useState } from 'react';
import { CarFeatureSections, CarSpecs } from '@/types/car';

interface CarFeaturesTabsProps {
  features?: CarFeatureSections;
  specs?: CarSpecs;
}

export default function CarFeaturesTabs({ features, specs }: CarFeaturesTabsProps) {
  const [activeTab, setActiveTab] = useState('exterior');

  // Filter tabs berdasarkan data yang tersedia
  const availableTabs = [
    features?.exterior && { 
      id: 'exterior', 
      label: 'Eksterior', 
      emoji: '🚗',
      color: 'blue',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
        </svg>
      )
    },
    features?.interior && { 
      id: 'interior', 
      label: 'Interior', 
      emoji: '🛋️',
      color: 'purple',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2 2z" />
        </svg>
      )
    },
    features?.safety && { 
      id: 'safety', 
      label: 'Keselamatan', 
      emoji: '🛡️',
      color: 'green',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    features?.technology && { 
      id: 'technology', 
      label: 'Teknologi', 
      emoji: '🔧',
      color: 'orange',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      )
    },
    specs && { 
      id: 'specs', 
      label: 'Spesifikasi', 
      emoji: '📊',
      color: 'red',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      )
    },
  ].filter(Boolean) as { 
    id: string; 
    label: string; 
    emoji: string; 
    color: string;
    icon: React.ReactNode;
  }[];

  // Set active tab pertama yang tersedia jika activeTab tidak tersedia
  if (availableTabs.length > 0 && !availableTabs.find(tab => tab.id === activeTab)) {
    setActiveTab(availableTabs[0].id);
  }

  const getColorClasses = (color: string, isActive: boolean) => {
    const baseClasses = "transition-all duration-300 transform hover:scale-105";
    
    if (isActive) {
      switch (color) {
        case 'blue': return `${baseClasses} bg-blue-600 text-white shadow-lg`;
        case 'purple': return `${baseClasses} bg-purple-600 text-white shadow-lg`;
        case 'green': return `${baseClasses} bg-green-600 text-white shadow-lg`;
        case 'orange': return `${baseClasses} bg-orange-600 text-white shadow-lg`;
        case 'red': return `${baseClasses} bg-red-600 text-white shadow-lg`;
        default: return `${baseClasses} bg-gray-600 text-white shadow-lg`;
      }
    } else {
      return `${baseClasses} bg-white text-gray-700 hover:bg-gray-50 border-2 border-gray-200`;
    }
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'exterior':
        if (!features?.exterior) return null;
        return (
          <div className="animate-fadeIn">
            <div className="bg-gradient-to-r from-blue-50 to-white p-8 rounded-2xl mb-8">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">{features.exterior.title}</h3>
              <p className="text-lg text-gray-700 leading-relaxed">{features.exterior.description}</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {features.exterior.features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-4 p-4 bg-white rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-300">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-blue-600 text-lg font-bold">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">{feature}</h4>
                    <p className="text-gray-600 text-sm">Fitur eksterior premium</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 'interior':
        if (!features?.interior) return null;
        return (
          <div className="animate-fadeIn">
            <div className="bg-gradient-to-r from-purple-50 to-white p-8 rounded-2xl mb-8">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">{features.interior.title}</h3>
              <p className="text-lg text-gray-700 leading-relaxed">{features.interior.description}</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {features.interior.features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-4 p-4 bg-white rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-300">
                  <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-purple-600 text-lg font-bold">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">{feature}</h4>
                    <p className="text-gray-600 text-sm">Kenyamanan interior</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 'safety':
        if (!features?.safety) return null;
        return (
          <div className="animate-fadeIn">
            <div className="bg-gradient-to-r from-green-50 to-white p-8 rounded-2xl mb-8">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">{features.safety.title}</h3>
              <p className="text-lg text-gray-700 leading-relaxed">{features.safety.description}</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {features.safety.features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-4 p-4 bg-white rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-300">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-green-600 text-lg font-bold">🛡️</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">{feature}</h4>
                    <p className="text-gray-600 text-sm">Sistem keselamatan</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 'technology':
        if (!features?.technology) return null;
        return (
          <div className="animate-fadeIn">
            <div className="bg-gradient-to-r from-orange-50 to-white p-8 rounded-2xl mb-8">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">{features.technology.title}</h3>
              <p className="text-lg text-gray-700 leading-relaxed">{features.technology.description}</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {features.technology.features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-4 p-4 bg-white rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-300">
                  <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-orange-600 text-lg font-bold">⚡</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">{feature}</h4>
                    <p className="text-gray-600 text-sm">Teknologi canggih</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 'specs':
        if (!specs) return null;
        return (
          <div className="animate-fadeIn">
            <div className="bg-gradient-to-r from-red-50 to-white p-8 rounded-2xl mb-8">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Spesifikasi Teknis Lengkap</h3>
              <p className="text-lg text-gray-700">Detail spesifikasi dan performa kendaraan</p>
            </div>

            {/* Dimensi */}
            <div className="mb-12">
              <h4 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5v-4m0 4h-4m4 0l-5-5" />
                  </svg>
                </div>
                Dimensi Kendaraan
              </h4>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {[
                  { label: 'Panjang', value: specs.dimensions.length, icon: '📏' },
                  { label: 'Lebar', value: specs.dimensions.width, icon: '📐' },
                  { label: 'Tinggi', value: specs.dimensions.height, icon: '📊' },
                  { label: 'Jarak Sumbu Roda', value: specs.dimensions.wheelbase, icon: '🚗' },
                ].map((item, index) => (
                  <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 text-center hover:shadow-md transition-shadow duration-300">
                    <div className="text-2xl mb-3">{item.icon}</div>
                    <div className="text-gray-600 text-sm mb-2">{item.label}</div>
                    <div className="font-bold text-lg text-gray-900">{item.value}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Performa */}
            <div className="mb-12">
              <h4 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                Performa Mesin
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  {[
                    { label: 'Tipe Mesin', value: specs.performance.engine },
                    { label: 'Kapasitas Mesin', value: specs.performance.displacement },
                    { label: 'Tenaga Maksimum', value: specs.performance.maxPower },
                    { label: 'Torsi Maksimum', value: specs.performance.maxTorque },
                  ].map((item, index) => (
                    <div key={index} className="flex justify-between items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200">
                      <span className="text-gray-700 font-medium">{item.label}</span>
                      <span className="font-semibold text-gray-900 text-right">{item.value}</span>
                    </div>
                  ))}
                </div>
                <div className="space-y-4">
                  {[
                    { label: 'Transmisi', value: specs.performance.transmission },
                    { label: 'Konsumsi BBM', value: specs.performance.fuelConsumption },
                    { label: 'Akselerasi 0-100 km/h', value: specs.performance.acceleration },
                    { label: 'Kecepatan Maksimum', value: specs.performance.topSpeed },
                  ].map((item, index) => (
                    <div key={index} className="flex justify-between items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200">
                      <span className="text-gray-700 font-medium">{item.label}</span>
                      <span className="font-semibold text-gray-900 text-right">{item.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );

      default:
        return (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">😕</div>
            <p className="text-gray-500 text-lg">Data tidak tersedia</p>
          </div>
        );
    }
  };

  // Jika tidak ada data sama sekali
  if (availableTabs.length === 0) {
    return (
      <section className="bg-white py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="text-6xl mb-4">🔧</div>
          <p className="text-gray-500 text-lg">Fitur dan spesifikasi belum tersedia</p>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-gradient-to-br from-gray-50 to-white py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Fitur & Spesifikasi
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Jelajahi semua fitur unggulan dan spesifikasi teknis yang membuat mobil ini istimewa
          </p>
          <div className="w-24 h-1 bg-red-600 mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Tabs Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {availableTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center space-x-3 px-6 py-4 font-semibold rounded-2xl transition-all duration-300 ${getColorClasses(tab.color, activeTab === tab.id)}`}
            >
              <div className="flex items-center gap-2">
                {tab.icon}
                <span>{tab.label}</span>
              </div>
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="min-h-96 bg-white rounded-2xl shadow-lg p-8 border border-gray-200">
          {renderContent()}
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-in-out;
        }
      `}</style>
    </section>
  );
}