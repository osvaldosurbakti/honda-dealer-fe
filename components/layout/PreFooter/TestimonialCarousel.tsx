// src/components/layout/PreFooter/TestimonialCarousel.tsx
'use client';

import { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';

const testimonials = [
  {
    id: 1,
    image: '/images/testimonial/testimonial-1.jpg',
    alt: 'Testimoni Pelanggan 1'
  },
  {
    id: 2,
    image: '/images/testimonial/testimonial-2.jpg',
    alt: 'Testimoni Pelanggan 2'
  },
  {
    id: 3,
    image: '/images/testimonial/testimonial-3.jpg',
    alt: 'Testimoni Pelanggan 3'
  },
  {
    id: 4,
    image: '/images/testimonial/testimonial-4.jpg',
    alt: 'Testimoni Pelanggan 4'
  },
  {
    id: 5,
    image: '/images/testimonial/testimonial-5.jpg',
    alt: 'Testimoni Pelanggan 5'
  },
  {
    id: 6,
    image: '/images/testimonial/testimonial-6.jpg',
    alt: 'Testimoni Pelanggan 6'
  },
  {    
    id: 7,
    image: '/images/testimonial/testimonial-7.jpg',
    alt: 'Testimoni Pelanggan 7'
  },
  {    
    id: 8,
    image: '/images/testimonial/testimonial-8.jpg',
    alt: 'Testimoni Pelanggan 8'
  },
  {    
    id: 9,
    image: '/images/testimonial/testimonial-9.jpg',
    alt: 'Testimoni Pelanggan 9'
  },
];

// Default aspect ratio (akan diupdate setelah images load)
const defaultAspectRatio = 3/4; // 4:3 aspect ratio

export default function TestimonialCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const [aspectRatios, setAspectRatios] = useState<number[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const carouselRef = useRef<HTMLDivElement>(null);

  // Minimum swipe distance (px)
  const minSwipeDistance = 50;

  // Preload images dengan approach yang aman
  useEffect(() => {
    const loadImages = async () => {
      try {
        const ratios = await Promise.all(
          testimonials.map((testimonial) => 
            new Promise<number>((resolve) => {
              // Gunakan HTMLImageElement constructor dengan jelas
              const img = new window.Image(); // ✅ FIX: tambahkan window.
              img.onload = () => {
                const aspectRatio = img.height / img.width;
                resolve(aspectRatio);
              };
              img.onerror = () => resolve(defaultAspectRatio); // Fallback
              img.src = testimonial.image;
            })
          )
        );
        setAspectRatios(ratios);
        setIsLoading(false);
      } catch (error) {
        console.error('Error loading images:', error);
        // Fallback ke default aspect ratios
        setAspectRatios(testimonials.map(() => defaultAspectRatio));
        setIsLoading(false);
      }
    };

    loadImages();
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  // Touch handlers
  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      nextSlide();
    } else if (isRightSwipe) {
      prevSlide();
    }
  };

  // Mouse drag handlers (for desktop)
  const onMouseDown = (e: React.MouseEvent) => {
    setTouchEnd(null);
    setTouchStart(e.clientX);
  };

  const onMouseMove = (e: React.MouseEvent) => {
    if (touchStart === null) return;
    setTouchEnd(e.clientX);
  };

  const onMouseUp = () => {
    if (!touchStart || !touchEnd) return;
    
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
  };

  // Auto-rotate slides
  useEffect(() => {
    if (isPaused || isLoading) return;

    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [currentSlide, isPaused, isLoading]);

  // Calculate height based on aspect ratio
  const getSlideHeight = () => {
    if (isLoading || !aspectRatios.length) return 200;
    
    const baseWidth = 300; // Base width for calculation
    const currentAspectRatio = aspectRatios[currentSlide] || defaultAspectRatio;
    return baseWidth * currentAspectRatio;
  };

  if (isLoading) {
    return (
      <div className="relative">
        <div className="overflow-hidden rounded-xl bg-gray-200 border border-gray-300">
          <div 
            className="w-full flex items-center justify-center transition-all duration-300"
            style={{ height: '200px' }}
          >
            <div className="text-gray-500">Memuat testimoni...</div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div 
      className="relative group"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Carousel Container - Dynamic height */}
      <div 
        ref={carouselRef}
        className="overflow-hidden rounded-xl bg-gray-100 border border-gray-200 cursor-grab active:cursor-grabbing transition-all duration-300"
        style={{ height: `${getSlideHeight()}px` }}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={onMouseUp}
        onMouseLeave={onMouseUp}
      >
        <div 
          className="flex transition-transform duration-500 ease-out h-full"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="w-full shrink-0 select-none flex items-center justify-center p-4"
              style={{ height: `${getSlideHeight()}px` }}
            >
              {/* Image Container - Maintain aspect ratio */}
              <div className="relative w-full h-full max-w-sm mx-auto">
                <Image
                  src={testimonial.image}
                  alt={testimonial.alt}
                  fill
                  className="object-contain rounded-lg"
                  draggable={false}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority={index === 0} // Prioritize first image
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/70 hover:bg-black/90 text-white rounded-full p-2 shadow-lg transition-all duration-200 hover:scale-110 opacity-0 lg:group-hover:opacity-100 lg:opacity-70 z-10"
        aria-label="Previous testimonial"
      >
        <ChevronLeft className="w-3 h-3" />
      </button>
      
      <button
        onClick={nextSlide}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/70 hover:bg-black/90 text-white rounded-full p-2 shadow-lg transition-all duration-200 hover:scale-110 opacity-0 lg:group-hover:opacity-100 lg:opacity-70 z-10"
        aria-label="Next testimonial"
      >
        <ChevronRight className="w-3 h-3" />
      </button>

      {/* Indicator Dots */}
      <div className="flex justify-center space-x-2 mt-3">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentSlide 
                ? 'bg-honda-red w-6' 
                : 'bg-gray-400 hover:bg-gray-500'
            }`}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>

      {/* Caption */}
      <p className="text-center text-xs text-gray-600 mt-2 font-medium">
        Testimoni Pelanggan Puas
      </p>

      {/* Swipe Hint for Mobile */}
      <div className="lg:hidden flex justify-center items-center space-x-1 mt-2">
        <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
        <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
        <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
        <span className="text-xs text-gray-500 ml-1">Geser untuk lihat lebih</span>
      </div>
    </div>
  );
}