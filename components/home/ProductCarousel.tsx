'use client';

import { useState, useRef, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { Car } from '@/types/car';
import ProductCard from './ProductCard';
import Button from '@/components/ui/Button';
import { ChevronLeft, ChevronRight, Pause, Play } from 'lucide-react';

interface ProductCarouselProps {
  cars?: Car[];
  title?: string;
  description?: string;
  autoPlay?: boolean;
  showControls?: boolean;
  speed?: number; // seconds for one complete loop
}

export default function ProductCarousel({ 
  cars = [],
  title = "Mobil Honda Terbaru",
  description = "Temukan mobil Honda impian Anda dengan teknologi terkini dan desain terbaru",
  autoPlay = true,
  showControls = true,
  speed = 30 // 30 seconds for one complete loop
}: ProductCarouselProps) {
  const [isPaused, setIsPaused] = useState(false);
  const [currentSet, setCurrentSet] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<Animation | null>(null);

  // Validasi cars data
  const validCars = Array.isArray(cars) ? cars : [];

  // Duplicate data untuk infinite effect
  const infiniteData = [...validCars, ...validCars];

  // Setup CSS animation
  useEffect(() => {
    if (!carouselRef.current || validCars.length === 0) return;

    const track = carouselRef.current;
    const trackWidth = track.scrollWidth / 2; // Karena data diduplikasi

    // Setup CSS animation
    const animation = track.animate(
      [
        { transform: 'translateX(0)' },
        { transform: `translateX(-${trackWidth}px)` }
      ],
      {
        duration: speed * 1000,
        iterations: Infinity,
        easing: 'linear'
      }
    );

    animationRef.current = animation;

    if (isPaused) {
      animation.pause();
    } else if (!autoPlay) {
      animation.pause();
    }

    return () => {
      animation.cancel();
    };
  }, [validCars.length, speed, isPaused, autoPlay]);

  // Handle manual pause/play
  const togglePlay = useCallback(() => {
    setIsPaused(!isPaused);
  }, [isPaused]);

  // Manual navigation
  const scrollToItem = useCallback((index: number) => {
    if (!carouselRef.current || validCars.length === 0) return;

    const track = carouselRef.current;
    const itemWidth = track.children[0]?.clientWidth || 0;
    const scrollPosition = index * itemWidth;

    // Smooth scroll to position
    track.style.transform = `translateX(-${scrollPosition}px)`;
    track.style.transition = 'transform 0.5s ease-in-out';

    // Reset animation after manual scroll
    if (animationRef.current) {
      animationRef.current.cancel();
      
      // Restart animation after a delay if autoPlay is enabled
      if (autoPlay && !isPaused) {
        setTimeout(() => {
          if (carouselRef.current && animationRef.current) {
            const newAnimation = carouselRef.current.animate(
              [
                { transform: `translateX(-${scrollPosition}px)` },
                { transform: `translateX(-${scrollPosition + (carouselRef.current.scrollWidth / 2)}px)` }
              ],
              {
                duration: speed * 1000,
                iterations: Infinity,
                easing: 'linear'
              }
            );
            animationRef.current = newAnimation;
          }
        }, 500);
      }
    }
  }, [validCars.length, autoPlay, isPaused, speed]);

  // Handle hover events
  const handleMouseEnter = useCallback(() => {
    if (animationRef.current && autoPlay) {
      animationRef.current.pause();
    }
  }, [autoPlay]);

  const handleMouseLeave = useCallback(() => {
    if (animationRef.current && autoPlay && !isPaused) {
      animationRef.current.play();
    }
  }, [autoPlay, isPaused]);

  // Reset animation when data changes
  useEffect(() => {
    if (animationRef.current) {
      animationRef.current.cancel();
    }
  }, [validCars]);

  // Loading state jika tidak ada data
  if (validCars.length === 0) {
    return (
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {title}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {description}
            </p>
          </div>
          <div className="text-center py-12">
            <div className="text-gray-500 text-lg">
              Tidak ada mobil yang tersedia saat ini.
            </div>
            <div className="mt-6">
              <Button size="lg" variant="primary">
                <Link href="/mobil" className="flex items-center space-x-2">
                  <span>Jelajahi Semua Mobil</span>
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  // Jika hanya ada 1-2 items, tidak perlu infinite scroll
  const shouldAnimate = validCars.length > 2 && autoPlay;

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {title}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {description}
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Controls */}
          {showControls && validCars.length > 2 && (
            <div className="flex justify-center items-center gap-4 mb-6">
              <button
                onClick={togglePlay}
                className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                aria-label={isPaused ? 'Putar carousel' : 'Jeda carousel'}
              >
                {isPaused ? (
                  <>
                    <Play className="w-4 h-4" />
                    <span>Putar</span>
                  </>
                ) : (
                  <>
                    <Pause className="w-4 h-4" />
                    <span>Jeda</span>
                  </>
                )}
              </button>
              
              <div className="text-sm text-gray-600">
                {validCars.length} mobil • Scroll tanpa batas
              </div>
            </div>
          )}

          {/* Carousel Track dengan Infinite Scroll */}
          <div className="relative overflow-hidden">
            {/* Gradient Overlays */}
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-gray-50 to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-gray-50 to-transparent z-10 pointer-events-none" />
            
            {/* Infinite Carousel Track */}
            <div
              ref={carouselRef}
              className="flex gap-8 pb-6"
              style={{
                width: 'max-content',
                animation: shouldAnimate && !isPaused 
                  ? `infiniteScrollHorizontal ${speed}s linear infinite` 
                  : 'none'
              }}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              {infiniteData.map((car, index) => (
                <div 
                  key={`${car.id}-${index}`} 
                  className="flex-shrink-0 w-80"
                >
                  <ProductCard car={car} />
                </div>
              ))}
            </div>
          </div>

          {/* Manual Navigation Dots */}
          {validCars.length > 1 && (
            <div className="flex justify-center mt-8 space-x-2">
              {validCars.map((_, index) => (
                <button
                  key={index}
                  onClick={() => scrollToItem(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSet % validCars.length
                      ? 'bg-red-600 scale-125' 
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`Pergi ke mobil ${index + 1}`}
                />
              ))}
            </div>
          )}

          {/* Auto-play Status */}
          <div className="flex justify-center items-center mt-4 space-x-3">
            <span className="text-sm text-gray-600">
              {validCars.length} mobil tersedia
            </span>
            {autoPlay && (
              <>
                <div className={`w-2 h-2 rounded-full ${!isPaused ? 'bg-green-500 animate-pulse' : 'bg-gray-400'}`} />
                <span className="text-xs text-gray-500">
                  {!isPaused ? 'Auto-scroll aktif' : 'Auto-scroll dijeda'}
                </span>
              </>
            )}
          </div>
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Button size="lg" variant="primary">
            <Link href="/mobil" className="flex items-center space-x-2">
              <span>Lihat Semua Mobil Honda</span>
              <ChevronRight className="w-4 h-4" />
            </Link>
          </Button>
        </div>
      </div>

      <style jsx>{`
        @keyframes infiniteScrollHorizontal {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-50%));
          }
        }

        /* Smooth scrolling for manual navigation */
        .smooth-scroll {
          transition: transform 0.5s ease-in-out;
        }
      `}</style>
    </section>
  );
}