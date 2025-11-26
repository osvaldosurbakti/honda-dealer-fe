'use client';

import { useState, useEffect, useRef, useMemo, useCallback } from 'react';
import { Car } from '@/types/car';
import ProductCard from './ProductCard';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import Link from 'next/link';

interface ProductCarouselProps {
  cars: Car[];
  title?: string;
  autoPlay?: boolean;
  showViewAll?: boolean;
}

export default function ProductCarousel({ 
  cars = [], 
  title = "Mobil Honda Terbaru",
  autoPlay = true,
  showViewAll = true
}: ProductCarouselProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const [itemsPerView, setItemsPerView] = useState(2);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);

  // Minimum swipe distance (px)
  const minSwipeDistance = 50;

  // Responsive setup dengan debounce
  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    
    const updateItemsPerView = () => {
      const width = window.innerWidth;
      if (width < 768) setItemsPerView(2);
      else if (width < 1024) setItemsPerView(3);
      else setItemsPerView(5);
    };

    const handleResize = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(updateItemsPerView, 100);
    };

    updateItemsPerView();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      clearTimeout(timeoutId);
    };
  }, []);

  const totalSlides = Math.max(1, Math.ceil(cars.length / itemsPerView));
  const cardSize = itemsPerView === 5 ? 'xs' : itemsPerView === 3 ? 'sm' : 'md';

  // Optimized slide navigation dengan transition lock
  const nextSlide = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
    setTimeout(() => setIsTransitioning(false), 500);
  }, [totalSlides, isTransitioning]);

  const prevSlide = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
    setTimeout(() => setIsTransitioning(false), 500);
  }, [totalSlides, isTransitioning]);

  const goToSlide = useCallback((index: number) => {
    if (isTransitioning || index === currentSlide) return;
    setIsTransitioning(true);
    setCurrentSlide(index);
    setTimeout(() => setIsTransitioning(false), 500);
  }, [currentSlide, isTransitioning]);

  // Optimized touch handlers
  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  }, []);

  const handleTouchMove = useCallback((e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  }, []);

  const handleTouchEnd = useCallback(() => {
    if (!touchStart || !touchEnd || isTransitioning) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      nextSlide();
    } else if (isRightSwipe) {
      prevSlide();
    }
  }, [touchStart, touchEnd, isTransitioning, nextSlide, prevSlide]);

  // Optimized mouse handlers
  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    setTouchEnd(null);
    setTouchStart(e.clientX);
  }, []);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (touchStart === null) return;
    setTouchEnd(e.clientX);
  }, [touchStart]);

  const handleMouseUp = useCallback(() => {
    if (!touchStart || !touchEnd || isTransitioning) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      nextSlide();
    } else if (isRightSwipe) {
      prevSlide();
    }
    
    setTouchStart(null);
    setTouchEnd(null);
  }, [touchStart, touchEnd, isTransitioning, nextSlide, prevSlide]);

  // Auto-play dengan cleanup yang better
  useEffect(() => {
    if (!autoPlay || isPaused || totalSlides <= 1) return;
    
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [autoPlay, isPaused, totalSlides, nextSlide]);

  // Precompute slides data
  const slides = useMemo(() => 
    Array.from({ length: totalSlides }), [totalSlides]
  );

  if (!cars.length) {
    return (
      <section className="py-12 bg-red-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-3">{title}</h2>
          <p className="text-gray-500">Tidak ada mobil tersedia.</p>
          {showViewAll && (
            <Link 
              href="/mobil"
              className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors mt-4"
            >
              Lihat Semua Produk Honda
              <ArrowRight className="w-4 h-4" />
            </Link>
          )}
        </div>
      </section>
    );
  }

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header dengan title dan view all button */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8 gap-4">
          <div className="text-center sm:text-left">
            <h2 className="text-2xl md:text-3xl font-bold mb-2">{title}</h2>
            <p className="text-gray-600 text-sm md:text-base">
              {cars.length} mobil tersedia
            </p>
          </div>
          
          {showViewAll && (
            <Link 
              href="/mobil"
              className="inline-flex items-center justify-center gap-2 bg-white hover:bg-gray-50 border border-gray-300 text-gray-800 hover:text-red-600 px-4 py-2 sm:px-6 sm:py-3 rounded-lg font-semibold transition-all duration-200 hover:shadow-md group self-center sm:self-auto"
            >
              <span>Lihat Semua</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          )}
        </div>

        <div 
          className="relative group"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Navigation Arrows - Responsive positioning */}
          {totalSlides > 1 && (
            <>
              <button 
                onClick={prevSlide} 
                className="absolute left-2 md:left-0 top-1/2 -translate-y-1/2 md:-translate-x-4 z-10 bg-white border border-gray-300 rounded-full w-8 h-8 md:w-10 md:h-10 flex items-center justify-center shadow-lg hover:bg-gray-50 transition-all opacity-70 lg:group-hover:opacity-100 active:scale-95"
                aria-label="Previous slide"
                disabled={isTransitioning}
              >
                <ChevronLeft className="w-4 h-4 md:w-5 md:h-5" />
              </button>
              <button 
                onClick={nextSlide} 
                className="absolute right-2 md:right-0 top-1/2 -translate-y-1/2 md:translate-x-4 z-10 bg-white border border-gray-300 rounded-full w-8 h-8 md:w-10 md:h-10 flex items-center justify-center shadow-lg hover:bg-gray-50 transition-all opacity-70 lg:group-hover:opacity-100 active:scale-95"
                aria-label="Next slide"
                disabled={isTransitioning}
              >
                <ChevronRight className="w-4 h-4 md:w-5 md:h-5" />
              </button>
            </>
          )}

          {/* Carousel Container */}
          <div 
            ref={carouselRef}
            className="overflow-hidden cursor-grab active:cursor-grabbing"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
          >
            <div 
              className="flex transition-transform duration-500 ease-in-out gap-2 sm:gap-3 lg:gap-4"
              style={{
                transform: `translateX(-${currentSlide * 100}%)`
              }}
            >
              {slides.map((_, slideIndex) => (
                <div 
                  key={slideIndex}
                  className="flex-shrink-0 w-full flex gap-2 sm:gap-3 lg:gap-4"
                >
                  {cars
                    .slice(slideIndex * itemsPerView, (slideIndex + 1) * itemsPerView)
                    .map((car) => (
                      <div 
                        key={car.id}
                        className="flex-1 min-w-0"
                      >
                        <ProductCard car={car} size={cardSize} />
                      </div>
                    ))
                  }
                  {/* Fill empty spaces */}
                  {(slideIndex === totalSlides - 1) && 
                   cars.length % itemsPerView !== 0 &&
                   Array.from({ length: itemsPerView - (cars.length % itemsPerView) }).map((_, index) => (
                     <div key={`empty-${index}`} className="flex-1 min-w-0 opacity-0" aria-hidden="true" />
                   ))
                  }
                </div>
              ))}
            </div>
          </div>

          {/* Indicator & Info */}
          {totalSlides > 1 && (
            <>
              <div className="flex justify-center space-x-2 mt-6 md:mt-8">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all ${
                      index === currentSlide 
                        ? 'bg-red-600 scale-110' 
                        : 'bg-gray-300 hover:bg-red-400'
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                    disabled={isTransitioning}
                  />
                ))}
              </div>

              <div className="text-center mt-3 md:mt-4 text-xs md:text-sm text-gray-600">
                {currentSlide + 1} / {totalSlides} • {cars.length} mobil
              </div>

              {/* Mobile Hint */}
              <div className="lg:hidden flex justify-center items-center space-x-1 mt-3">
                <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                <span className="text-xs text-gray-500 ml-1">Geser untuk lihat lebih</span>
              </div>
            </>
          )}
        </div>

        {/* View All Button for Mobile - Additional */}
        {showViewAll && (
          <div className="flex justify-center mt-8 lg:hidden">
            <Link 
              href="/mobil"
              className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors w-full sm:w-auto justify-center"
            >
              Lihat Semua Produk Honda
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}