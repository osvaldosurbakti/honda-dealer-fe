import { blogPosts, getFeaturedPosts, getRecentPosts } from '@/data/blog';
import { blogCategories } from '@/data/blog/categories';
import BlogGrid from '@/components/blog/BlogGrid';
import BlogSidebar from '@/components/blog/BlogSidebar';
import BlogCategories from '@/components/blog/BlogCategories';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog & Berita - Tips dan Informasi Terbaru Honda',
  description: 'Temukan tips merawat mobil, berita terbaru Honda, promo spesial, dan review mobil di blog Rendy Honda Surabaya.',
  keywords: 'blog honda, tips mobil, berita honda, review mobil, perawatan mobil',
};

interface BlogPageProps {
  searchParams: Promise<{
    category?: string;
    tag?: string;
    search?: string;
  }>;
}

export default async function BlogPage({ searchParams }: BlogPageProps) {
  // Unwrap searchParams Promise
  const params = await searchParams;
  const { category, tag, search } = params;

  // Filter posts based on search params
  let filteredPosts = blogPosts;

  if (category) {
    filteredPosts = filteredPosts.filter(post => 
      post.category === category
    );
  }

  if (tag) {
    filteredPosts = filteredPosts.filter(post =>
      post.tags.includes(tag)
    );
  }

  if (search) {
    const searchLower = search.toLowerCase();
    filteredPosts = filteredPosts.filter(post =>
      post.title.toLowerCase().includes(searchLower) ||
      post.excerpt.toLowerCase().includes(searchLower) ||
      post.content.toLowerCase().includes(searchLower) ||
      post.tags.some(tag => tag.toLowerCase().includes(searchLower))
    );
  }

  const featuredPosts = getFeaturedPosts();
  const recentPosts = getRecentPosts();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-red-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Blog & Berita Honda
          </h1>
          <p className="text-xl text-red-100 max-w-2xl mx-auto">
            Temukan tips merawat mobil, berita terbaru, promo spesial, dan informasi menarik seputar Honda
          </p>
        </div>
      </section>

      {/* Featured Posts */}
      {featuredPosts.length > 0 && !category && !tag && !search && (
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
              Artikel Pilihan
            </h2>
            <BlogGrid posts={featuredPosts} featured columns={1} />
          </div>
        </section>
      )}

      {/* Main Content */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Posts Grid */}
            <div className="lg:col-span-3">
              {/* Page Title & Filters */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8 gap-4">
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                    {category ? `Kategori: ${blogCategories.find(c => c.slug === category)?.name}` :
                     tag ? `Tag: #${tag}` :
                     search ? `Hasil pencarian: "${search}"` :
                     'Artikel Terbaru'}
                  </h2>
                  {filteredPosts.length > 0 && (
                    <p className="text-gray-600 mt-2">
                      {filteredPosts.length} artikel ditemukan
                    </p>
                  )}
                </div>
                
                {/* Sort Options */}
                <div className="flex gap-2">
                  <select className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-red-500">
                    <option value="newest">Terbaru</option>
                    <option value="oldest">Terlama</option>
                    <option value="popular">Populer</option>
                  </select>
                </div>
              </div>

              {/* Categories Filter */}
              <BlogCategories activeCategory={category} />

              {/* Posts Grid */}
              {filteredPosts.length > 0 ? (
                <BlogGrid posts={filteredPosts} columns={2} />
              ) : (
                <div className="text-center py-12">
                  <div className="text-gray-400 text-6xl mb-4">📝</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Tidak ada artikel ditemukan
                  </h3>
                  <p className="text-gray-600 mb-6">
                    {search 
                      ? `Tidak ada hasil untuk "${search}". Coba dengan kata kunci lain.`
                      : 'Silakan coba kategori atau tag yang berbeda.'
                    }
                  </p>
                  <a
                    href="/blog"
                    className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                  >
                    Lihat Semua Artikel
                  </a>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <BlogSidebar posts={recentPosts} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}