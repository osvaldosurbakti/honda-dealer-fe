'use client';

import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

interface TimedPopupProps {
  delay?: number;
  brosurImages?: string[];
  brosurAlts?: string[];
}

const TimedPopup = ({ 
  delay = 5000, 
  brosurImages = [
    "/images/brosur/main.jpg",
    "/images/brosur/brosur1.jpg", 
    "/images/brosur/brosur2.jpg",
    "/images/brosur/brosur3.jpg"
  ],
  brosurAlts = [
    "Promo Spesial Honda Surabaya - DP 10%",
    "Promo Honda HR-V 2024 - Teknologi Terbaru",
    "Promo Honda CR-V - SUV Premium",
    "Promo Honda Brio - City Car Terbaik"
  ]
}: TimedPopupProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [imageErrors, setImageErrors] = useState<boolean[]>([]);

  // Initialize image errors array
  useEffect(() => {
    setImageErrors(new Array(brosurImages.length).fill(false));
  }, [brosurImages.length]);

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

  // Auto-rotate slides
useEffect(() => {
  if (!isOpen || brosurImages.length <= 1) return;

  const interval = setInterval(() => {
    nextSlide();
  }, 3000); // Ganti slide setiap 4 detik

  return () => clearInterval(interval);
}, [isOpen, currentSlide, brosurImages.length]);

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };

  const handleImageError = (index: number) => {
    setImageErrors(prev => {
      const newErrors = [...prev];
      newErrors[index] = true;
      return newErrors;
    });
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % brosurImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + brosurImages.length) % brosurImages.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-70 z-50 flex items-center justify-center p-4 animate-fadeIn"
      onClick={handleOverlayClick}
    >
      <div className="bg-white rounded-xl max-w-2xl w-full relative shadow-2xl transform animate-scaleIn">
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute -top-4 -right-4 bg-red-600 text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-red-700 z-20 transition-all duration-200 shadow-lg text-xl font-bold"
          aria-label="Tutup popup"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Carousel Container */}
        <div className="relative">
          {/* Navigation Arrows */}
          {brosurImages.length > 1 && (
            <>
              <button
                onClick={prevSlide}
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 z-10 transition-all duration-200 hover:scale-110"
                aria-label="Brosur sebelumnya"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 z-10 transition-all duration-200 hover:scale-110"
                aria-label="Brosur berikutnya"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </>
          )}

          {/* Image Slide */}
          <div className="p-2">
            {imageErrors[currentSlide] ? (
              <div className="w-full h-64 bg-gray-200 rounded-lg flex items-center justify-center">
                <p className="text-gray-500">Gambar brosur tidak ditemukan</p>
              </div>
            ) : (
              <div className="relative">
                <img 
                  src={brosurImages[currentSlide]}
                  alt={brosurAlts[currentSlide] || `Brosur promo ${currentSlide + 1}`}
                  className="w-full h-auto rounded-lg max-h-[60vh] object-contain mx-auto"
                  onError={() => handleImageError(currentSlide)}
                />
                
                {/* Slide Counter */}
                {brosurImages.length > 1 && (
                  <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded-full">
                    {currentSlide + 1} / {brosurImages.length}
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Indicator Dots */}
          {brosurImages.length > 1 && (
            <div className="flex justify-center space-x-2 mb-4 px-4">
              {brosurImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentSlide 
                      ? 'bg-red-600 w-6' 
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`Lihat brosur ${index + 1}`}
                />
              ))}
            </div>
          )}
        </div>
        
        {/* Action Buttons */}
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
              className="flex-1 bg-red-600 text-white py-3 rounded-lg hover:bg-red-700 transition-colors text-center font-semibold flex items-center justify-center"
              onClick={handleClose}
            >
              Dapatkan Promo
            </a>
          </div>
          
          {/* Additional Info */}
          <p className="text-center text-xs text-gray-600 mt-3">
            {brosurImages.length > 1 ? 'Geser untuk lihat promo lainnya' : 'Hubungi kami untuk info promo terbaru'}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TimedPopup;