'use client';

import { useState } from 'react';

interface VideoSectionProps {
  videoUrl?: string;
  title?: string;
  description?: string;
}

export default function VideoSection({ 
  videoUrl, 
  title = "Video", 
  description = "Lihat keunggulan dan fitur-fitur terbaru dalam video berikut"
}: VideoSectionProps) {
  const [isLoading, setIsLoading] = useState(true);

  if (!videoUrl) return null;

  const getYouTubeId = (url: string) => {
    const match = url.match(/(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))([^&?]+)/);
    return match ? match[1] : null;
  };

  const videoId = getYouTubeId(videoUrl);
  if (!videoId) return null;

  const embedUrl = `https://www.youtube.com/embed/${videoId}`;

  return (
    <section className="py-8 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
            {title}
          </h2>
          <p className="text-base text-gray-600 max-w-2xl mx-auto">
            {description}
          </p>
          <div className="w-20 h-1 bg-red-600 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Video Container */}
        <div className="max-w-4xl mx-auto">
          <div className="relative aspect-video bg-black rounded-xl overflow-hidden shadow-xl">
            {isLoading && (
              <div className="absolute inset-0 flex items-center justify-center bg-gray-200">
                <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-red-600"></div>
              </div>
            )}
            <iframe
              src={embedUrl}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
              onLoad={() => setIsLoading(false)}
            />
          </div>
        </div>
      </div>
    </section>
  );
}