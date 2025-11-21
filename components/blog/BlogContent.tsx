'use client';

import { BlogPost } from '@/types/blog';
import Image from 'next/image';
import Link from 'next/link';
import { Calendar, Clock, User, Share2, ArrowLeft } from 'lucide-react';
import { useState } from 'react'; // ← IMPORT useState

interface BlogContentProps {
  post: BlogPost;
}

export default function BlogContent({ post }: BlogContentProps) {
  const [imageError, setImageError] = useState(false);
  const fallbackImage = 'https://images.unsplash.com/photo-1563720223185-11003d516935?w=800&h=400&fit=crop';
  const imageSrc = imageError ? fallbackImage : post.featuredImage;

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: post.title,
          text: post.excerpt,
          url: window.location.href,
        });
      } catch (error) {
        console.log('Error sharing:', error);
      }
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(window.location.href);
      alert('Link berhasil disalin!');
    }
  };

  return (
    <article className="bg-white rounded-xl shadow-lg overflow-hidden">
      {/* Back Button */}
      <div className="border-b border-gray-200 p-6">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-gray-600 hover:text-red-600 transition-colors font-medium"
        >
          <ArrowLeft className="w-4 h-4" />
          Kembali ke Blog
        </Link>
      </div>

      {/* Featured Image */}
      <div className="relative h-64 md:h-96 bg-gray-200">
        <Image
          src={imageSrc}
          alt={post.title}
          fill
          className="object-cover"
          priority
          onError={() => setImageError(true)}
        />
      </div>

      {/* Article Header */}
      <div className="p-6 md:p-8">
        {/* Meta Info */}
        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-4">
          <div className="flex items-center gap-1">
            <Calendar className="w-4 h-4" />
            {new Date(post.publishedAt).toLocaleDateString('id-ID', {
              weekday: 'long',
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}
          </div>
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            {post.readTime} menit baca
          </div>
          <div className="flex items-center gap-1">
            <User className="w-4 h-4" />
            {post.author.name}
          </div>
        </div>

        {/* Title */}
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
          {post.title}
        </h1>

        {/* Excerpt */}
        <p className="text-lg text-gray-600 mb-6 leading-relaxed">
          {post.excerpt}
        </p>

        {/* Category & Tags */}
        <div className="flex flex-wrap items-center gap-3 mb-6">
          <span className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm font-medium">
            {post.category}
          </span>
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs"
            >
              #{tag}
            </span>
          ))}
        </div>

        {/* Share Button */}
        <button
          onClick={handleShare}
          className="flex items-center gap-2 text-gray-600 hover:text-red-600 transition-colors mb-8"
        >
          <Share2 className="w-4 h-4" />
          Bagikan Artikel
        </button>

        {/* Article Content */}
        <div 
          className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-700 prose-li:text-gray-700 prose-strong:text-gray-900 prose-a:text-red-600 hover:prose-a:text-red-700"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* Author Bio */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-gray-200 rounded-full overflow-hidden flex items-center justify-center">
              <User className="w-8 h-8 text-gray-400" />
            </div>
            <div>
              <h3 className="font-bold text-gray-900">{post.author.name}</h3>
              <p className="text-gray-600 text-sm mb-2">{post.author.role}</p>
              <p className="text-gray-700 text-sm">
                Ahli di bidang otomotif dengan pengalaman lebih dari 5 tahun. 
                Spesialisasi dalam produk Honda dan perawatan kendaraan.
              </p>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}