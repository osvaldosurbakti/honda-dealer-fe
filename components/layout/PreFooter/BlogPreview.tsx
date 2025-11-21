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
    <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-4 h-full">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center shadow-sm">
            <BookOpen className="text-white w-4 h-4" />
          </div>
          <div>
            <h3 className="text-base font-bold text-gray-900">Tips Terbaru</h3>
            <p className="text-xs text-gray-600">Info & panduan Honda</p>
          </div>
        </div>
        
        <Link 
          href="/blog"
          className="flex items-center space-x-1 text-honda-red hover:text-red-700 font-semibold text-xs transition-colors group"
        >
          <span>Semua</span>
          <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
        </Link>
      </div>

      {/* Blog Posts List - Vertical Layout */}
      <div className="space-y-3">
        {recentPosts.map((post) => (
          <Link
            key={post.id}
            href={`/blog/${post.slug}`}
            className="group block hover:bg-gray-50 rounded-lg p-2 transition-all duration-200 border border-transparent hover:border-red-100"
          >
            <div className="flex space-x-3">
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
                  <span className={`px-1.5 py-0.5 rounded text-[10px] font-semibold ${
                    post.category === 'tips' ? 'bg-blue-100 text-blue-700' :
                    post.category === 'news' ? 'bg-green-100 text-green-700' :
                    post.category === 'promo' ? 'bg-yellow-100 text-yellow-700' :
                    post.category === 'review' ? 'bg-purple-100 text-purple-700' :
                    'bg-gray-100 text-gray-700'
                  }`}>
                    {post.category.charAt(0).toUpperCase()}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <h4 className="font-semibold text-gray-900 line-clamp-2 group-hover:text-honda-red transition-colors text-sm leading-tight mb-1">
                  {post.title}
                </h4>
                
                {/* Meta Info */}
                <div className="flex items-center space-x-2 text-xs text-gray-500">
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
                    <span>{post.readTime}m</span>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Mobile View All Button */}
      <div className="mt-4 pt-3 border-t border-gray-200 md:hidden">
        <Link
          href="/blog"
          className="w-full bg-gray-100 hover:bg-honda-red text-gray-700 hover:text-white px-3 py-2 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center space-x-2 group text-sm"
        >
          <span>Lihat Semua Artikel</span>
          <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
        </Link>
      </div>
    </div>
  );
}