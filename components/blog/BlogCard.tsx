'use client'; // ← TAMBAHKAN INI DI BARIS PERTAMA

import Link from 'next/link';
import Image from 'next/image';
import { BlogPost } from '@/types/blog';
import { Calendar, Clock, User } from 'lucide-react';
import { useState } from 'react'; // ← IMPORT useState

interface BlogCardProps {
  post: BlogPost;
  featured?: boolean;
}

export default function BlogCard({ post, featured = false }: BlogCardProps) {
  const [imageError, setImageError] = useState(false);
  
  // Fallback image URL
  const fallbackImage = 'https://images.unsplash.com/photo-1563720223185-11003d516935?w=400&h=200&fit=crop';
  const imageSrc = imageError ? fallbackImage : post.featuredImage;

  if (featured) {
    return (
      <Link href={`/blog/${post.slug}`} className="group block">
        <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
          <div className="relative h-64 md:h-80 overflow-hidden">
            <Image
              src={imageSrc}
              alt={post.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
              onError={() => setImageError(true)}
            />
            <div className="absolute top-4 left-4">
              <span className="bg-red-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                Featured
              </span>
            </div>
          </div>
          <div className="p-6">
            <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
              <div className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                {new Date(post.publishedAt).toLocaleDateString('id-ID')}
              </div>
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                {post.readTime} menit baca
              </div>
            </div>
            <h3 className="text-xl md:text-2xl font-bold mb-3 group-hover:text-red-600 transition-colors">
              {post.title}
            </h3>
            <p className="text-gray-600 mb-4 line-clamp-2">
              {post.excerpt}
            </p>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                  <User className="w-4 h-4 text-gray-500" />
                </div>
                <span className="text-sm text-gray-600">{post.author.name}</span>
              </div>
              <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                post.category === 'tips' ? 'bg-blue-100 text-blue-700' :
                post.category === 'news' ? 'bg-green-100 text-green-700' :
                post.category === 'promo' ? 'bg-yellow-100 text-yellow-700' :
                post.category === 'review' ? 'bg-purple-100 text-purple-700' :
                'bg-gray-100 text-gray-700'
              }`}>
                {post.category}
              </span>
            </div>
          </div>
        </div>
      </Link>
    );
  }

  // Regular card
  return (
    <Link href={`/blog/${post.slug}`} className="group block h-full">
      <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden h-full flex flex-col">
        <div className="relative h-48 overflow-hidden">
          <Image
            src={imageSrc}
            alt={post.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
            onError={() => setImageError(true)}
          />
        </div>
        <div className="p-4 flex-1 flex flex-col">
          <div className="flex items-center gap-3 text-xs text-gray-500 mb-2">
            <span>{new Date(post.publishedAt).toLocaleDateString('id-ID')}</span>
            <span>•</span>
            <span>{post.readTime} min read</span>
          </div>
          <h3 className="font-bold mb-2 group-hover:text-red-600 transition-colors line-clamp-2 flex-1">
            {post.title}
          </h3>
          <p className="text-gray-600 text-sm line-clamp-2 mb-3">
            {post.excerpt}
          </p>
          <div className="flex items-center justify-between mt-auto">
            <span className={`px-2 py-1 rounded text-xs ${
              post.category === 'tips' ? 'bg-blue-100 text-blue-700' :
              post.category === 'news' ? 'bg-green-100 text-green-700' :
              post.category === 'promo' ? 'bg-yellow-100 text-yellow-700' :
              post.category === 'review' ? 'bg-purple-100 text-purple-700' :
              'bg-gray-100 text-gray-700'
            }`}>
              {post.category}
            </span>
            <span className="text-xs text-gray-500">by {post.author.name}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}