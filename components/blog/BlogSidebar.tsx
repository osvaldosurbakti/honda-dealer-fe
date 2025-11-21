import { BlogPost, BlogCategory } from '@/types/blog';
import { blogCategories } from '@/data/blog/categories';
import Link from 'next/link';
import { Search, Calendar, User } from 'lucide-react';

interface BlogSidebarProps {
  posts: BlogPost[];
  currentPost?: BlogPost;
}

export default function BlogSidebar({ posts, currentPost }: BlogSidebarProps) {
  // Get popular posts (bisa diganti dengan logic berdasarkan views)
  const popularPosts = posts
    .filter(post => post.id !== currentPost?.id)
    .slice(0, 5);

  // Get recent posts
  const recentPosts = posts
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
    .slice(0, 5);

  // Get all unique tags
  const allTags = Array.from(new Set(posts.flatMap(post => post.tags))).slice(0, 10);

  return (
    <div className="space-y-8">
      {/* Search Box */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
        <h3 className="font-semibold mb-3 text-gray-900">Cari Artikel</h3>
        <div className="relative">
          <input
            type="text"
            placeholder="Ketik kata kunci..."
            className="w-full px-4 py-2 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
          />
          <Search className="w-4 h-4 text-gray-400 absolute left-3 top-3" />
        </div>
      </div>

      {/* Categories */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
        <h3 className="font-semibold mb-3 text-gray-900">Kategori</h3>
        <div className="space-y-2">
          {blogCategories.map((category) => (
            <Link
              key={category.id}
              href={`/blog?category=${category.slug}`}
              className="flex items-center justify-between py-2 px-3 rounded-lg hover:bg-gray-50 transition-colors group"
            >
              <span className="text-gray-700 group-hover:text-red-600 transition-colors">
                {category.name}
              </span>
              <span className="bg-gray-100 text-gray-500 text-xs px-2 py-1 rounded-full">
                {category.postCount}
              </span>
            </Link>
          ))}
        </div>
      </div>

      {/* Popular Posts */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
        <h3 className="font-semibold mb-3 text-gray-900">Populer</h3>
        <div className="space-y-4">
          {popularPosts.map((post) => (
            <Link
              key={post.id}
              href={`/blog/${post.slug}`}
              className="flex gap-3 group"
            >
              <div className="w-16 h-16 bg-gray-200 rounded-lg overflow-hidden flex-shrink-0">
                <img
                  src={post.featuredImage}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                />
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="font-medium text-sm line-clamp-2 group-hover:text-red-600 transition-colors mb-1">
                  {post.title}
                </h4>
                <div className="flex items-center text-xs text-gray-500">
                  <Calendar className="w-3 h-3 mr-1" />
                  {new Date(post.publishedAt).toLocaleDateString('id-ID')}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Recent Posts */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
        <h3 className="font-semibold mb-3 text-gray-900">Terbaru</h3>
        <div className="space-y-3">
          {recentPosts.map((post) => (
            <Link
              key={post.id}
              href={`/blog/${post.slug}`}
              className="block py-2 border-b border-gray-100 last:border-b-0 group"
            >
              <h4 className="font-medium text-sm line-clamp-2 group-hover:text-red-600 transition-colors mb-1">
                {post.title}
              </h4>
              <div className="flex items-center justify-between text-xs text-gray-500">
                <span>{new Date(post.publishedAt).toLocaleDateString('id-ID')}</span>
                <span>{post.readTime} min baca</span>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Tags */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
        <h3 className="font-semibold mb-3 text-gray-900">Tags</h3>
        <div className="flex flex-wrap gap-2">
          {allTags.map((tag) => (
            <Link
              key={tag}
              href={`/blog?tag=${tag}`}
              className="bg-gray-100 hover:bg-red-100 text-gray-700 hover:text-red-700 px-3 py-1 rounded-full text-sm transition-colors"
            >
              #{tag}
            </Link>
          ))}
        </div>
      </div>

      {/* CTA Box */}
      <div className="bg-red-600 text-white rounded-lg p-6 text-center">
        <h3 className="font-bold mb-2">Butuh Konsultasi?</h3>
        <p className="text-red-100 text-sm mb-4">
          Hubungi kami untuk info lebih lanjut tentang mobil Honda
        </p>
        <a
          href="https://wa.me/6287852432636"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-white text-red-600 px-4 py-2 rounded-lg font-semibold text-sm hover:bg-gray-100 transition-colors"
        >
          WhatsApp Kami
        </a>
      </div>
    </div>
  );
}