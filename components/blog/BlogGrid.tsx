'use client'; // ← TAMBAHKAN INI

import { BlogPost } from '@/types/blog';
import BlogCard from './BlogCard';

interface BlogGridProps {
  posts: BlogPost[];
  featured?: boolean;
  columns?: 1 | 2 | 3;
}

export default function BlogGrid({ posts, featured = false, columns = 3 }: BlogGridProps) {
  const gridClasses = {
    1: 'grid-cols-1',
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
  };

  if (posts.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500 text-lg">Tidak ada artikel ditemukan.</p>
      </div>
    );
  }

  return (
    <div className={`grid ${gridClasses[columns]} gap-6`}>
      {posts.map((post) => (
        <BlogCard 
          key={post.id} 
          post={post} 
          featured={featured}
        />
      ))}
    </div>
  );
}