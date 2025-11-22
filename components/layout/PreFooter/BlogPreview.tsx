'use client';

import { getRecentPosts } from '@/data/blog';
import Link from 'next/link';
import Image from 'next/image';
import { Calendar, Clock, ArrowRight, BookOpen } from 'lucide-react';

export default function BlogPreview() {
  const recentPosts = getRecentPosts(3);

  if (recentPosts.length === 0) {
    return null;
  }

  return (
    <div className="text-center lg:text-left">
      {/* Header */}
      <div className="flex items-center justify-center lg:justify-start space-x-3 mb-6">
        <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg">
          <BookOpen className="text-white text-xl" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-gray-900">Tips Terbaru</h3>
          <p className="text-sm text-gray-600 mt-1">Info & Panduan Honda</p>
        </div>
      </div>

      {/* Blog Posts List */}
      <div className="space-y-4 mb-6">
        {recentPosts.map((post) => (
          <Link
            key={post.id}
            href={`/blog/${post.slug}`}
            className="group block hover:bg-gray-50 rounded-xl p-3 transition-all duration-200 border border-transparent hover:border-purple-100"
          >
            <div className="flex space-x-4">
              {/* Image */}
              <div className="relative w-16 h-16 flex-shrink-0 rounded-lg overflow-hidden">
                <Image
                  src={post.featuredImage}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                  sizes="64px"
                />
                {/* Category Badge */}
                <div className="absolute bottom-1 left-1">
                  <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
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

              {/* Content */}
              <div className="flex-1 min-w-0">
                <h4 className="font-semibold text-gray-900 line-clamp-2 group-hover:text-honda-red transition-colors text-sm leading-tight mb-2">
                  {post.title}
                </h4>
                
                {/* Meta Info */}
                <div className="flex items-center space-x-3 text-xs text-gray-500">
                  <div className="flex items-center space-x-1">
                    <Calendar className="w-3 h-3" />
                    <span>
                      {new Date(post.publishedAt).toLocaleDateString('id-ID', {
                        day: 'numeric',
                        month: 'short'
                      })}
                    </span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="w-3 h-3" />
                    <span>{post.readTime} menit</span>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* View All Link */}
      <div className="mt-6">
        <Link 
          href="/blog"
          className="inline-flex items-center space-x-2 text-honda-red hover:text-red-700 font-semibold text-sm transition-colors group"
        >
          <span>Lihat Semua Artikel</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>
  );
}