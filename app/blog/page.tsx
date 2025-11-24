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

// HAPUS interface BlogPageProps dan searchParams

export default function BlogPage() { 

  // Gunakan semua posts tanpa filter
  const displayedPosts = blogPosts;
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
      {featuredPosts.length > 0 && ( // HAPUS: !category && !tag && !search
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
                    Semua Artikel {/* HAPUS conditional title */}
                  </h2>
                  {displayedPosts.length > 0 && (
                    <p className="text-gray-600 mt-2">
                      {displayedPosts.length} artikel tersedia {/* HAPUS: ditemukan */}
                    </p>
                  )}
                </div>
                
                {/* Sort Options - BISA DIBIARKAN atau DIHAPUS */}
                <div className="flex gap-2">
                  <select className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-red-500">
                    <option value="newest">Terbaru</option>
                    <option value="oldest">Terlama</option>
                    <option value="popular">Populer</option>
                  </select>
                </div>
              </div>

              {/* Categories Filter - TANPA activeCategory */}
              <BlogCategories />

              {/* Posts Grid */}
              {displayedPosts.length > 0 ? (
                <BlogGrid posts={displayedPosts} columns={2} />
              ) : (
                <div className="text-center py-12">
                  <div className="text-gray-400 text-6xl mb-4">📝</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Tidak ada artikel
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Belum ada artikel yang tersedia.
                  </p>
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