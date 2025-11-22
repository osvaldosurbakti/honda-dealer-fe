'use client';

import { useState, useEffect } from 'react';

interface TimedPopupProps {
  delay?: number;
  brosurImage: string;
  brosurAlt: string;
}

const TimedPopup = ({ 
  delay = 5000, 
  brosurImage = "/images/brosur/main.jpg",
  brosurAlt = "Promo Spesial Honda Surabaya"
}: TimedPopupProps) => {
  // ... kode komponen sama seperti sebelumnya
  const [isOpen, setIsOpen] = useState(false);
  const [imageError, setImageError] = useState(false);

  useEffect(() => {
    const hasSeenPopup = sessionStorage.getItem('popupShown');
    
    if (!hasSeenPopup) {
      const timer = setTimeout(() => {
        setIsOpen(true);
        sessionStorage.setItem('popupShown', 'true');
      }, delay);

      return () => clearTimeout(timer);
    }
  }, [delay]);

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };

  const handleImageError = () => {
    setImageError(true);
  };

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-70 z-50 flex items-center justify-center p-4 animate-fadeIn"
      onClick={handleOverlayClick}
    >
      <div className="bg-white rounded-xl max-w-2xl w-full relative shadow-2xl transform animate-scaleIn">
        <button
          onClick={handleClose}
          className="absolute -top-4 -right-4 bg-red-600 text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-red-700 z-10 transition-all duration-200 shadow-lg text-xl font-bold"
          aria-label="Tutup popup"
        >
          ×
        </button>
        
        <div className="p-2">
          {imageError ? (
            <div className="w-full h-64 bg-gray-200 rounded-lg flex items-center justify-center">
              <p className="text-gray-500">Gambar brosur tidak ditemukan</p>
            </div>
          ) : (
            <img 
              src={brosurImage}
              alt={brosurAlt}
              className="w-full h-auto rounded-lg max-h-[70vh] object-contain"
              onError={handleImageError}
            />
          )}
        </div>
        
        <div className="p-4 border-t bg-gray-50 rounded-b-xl">
          <div className="flex gap-3">
            <button 
              onClick={handleClose}
              className="flex-1 bg-gray-300 text-gray-700 py-3 rounded-lg hover:bg-gray-400 transition-colors font-semibold"
            >
              Lihat Nanti
            </button>
            <a 
              href="/kontak"
              className="flex-1 bg-red-600 text-white py-3 rounded-lg hover:bg-red-700 transition-colors text-center font-semibold"
              onClick={handleClose}
            >
              Dapatkan Promo
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimedPopup;