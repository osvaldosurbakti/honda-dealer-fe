import { BlogPost } from '@/types/blog';

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    slug: 'tips-merawat-mobil-honda-agar-awet',
    title: '7 Tips Merawat Mobil Honda Agar Tetap Awet dan Bertenaga',
    excerpt: 'Pelajari cara merawat mobil Honda Anda dengan benar untuk menjaga performa dan nilai jualnya dalam jangka panjang. Tips dari ahli mekanik Honda berpengalaman.',
    content: `
      <h2>1. Lakukan Service Berkala Teratur</h2>
      <p>Service berkala adalah kunci utama menjaga performa mobil Honda Anda. Ikuti jadwal service yang direkomendasikan:</p>
      <ul>
        <li>Service 1.000 km: Cek seluruh komponen dasar</li>
        <li>Service 10.000 km: Ganti oli dan filter</li>
        <li>Service 20.000 km: Cek sistem rem dan suspensi</li>
      </ul>

      <h2>2. Gunakan Bahan Bakar Berkualitas</h2>
      <p>Gunakan bahan bakar dengan oktan sesuai rekomendasi untuk mesin Honda. Bahan bakar berkualitas rendah dapat merusak injektor dan menurunkan performa.</p>

      <h2>3. Perhatikan Tekanan Angin Ban</h2>
      <p>Tekanan ban yang tidak tepat dapat menyebabkan konsumsi BBM lebih boros dan keausan ban tidak merata. Cek tekanan ban secara rutin setiap 2 minggu.</p>

      <h2>4. Jaga Kebersihan Mobil</h2>
      <p>Kebersihan mobil tidak hanya tentang penampilan, tetapi juga mencegah karat dan kerusakan pada komponen interior.</p>

      <h2>5. Perhatikan Sistem Pendingin</h2>
      <p>Pastikan radiator dan coolant dalam kondisi baik untuk mencegah overheating pada mesin.</p>

      <h2>6. Gunakan Suku Cadang Original</h2>
      <p>Gunakan selalu suku cadang original Honda untuk menjaga performa dan garansi kendaraan.</p>

      <h2>7. Simpan di Tempat Teduh</h2>
      <p>Hindari parkir di bawah terik matahari langsung dalam waktu lama untuk menjaga kondisi cat dan interior.</p>
    `,
    featuredImage: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?w=800&h=400&fit=crop',
    author: {
      name: 'Rendy Sales',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face',
      role: 'Sales Executive'
    },
    category: 'tips',
    tags: ['perawatan', 'maintenance', 'tips', 'service'],
    publishedAt: '2024-01-15',
    readTime: 5,
    isFeatured: true,
    metaTitle: 'Tips Merawat Mobil Honda - Rendy Honda Surabaya',
    metaDescription: '7 tips praktis merawat mobil Honda agar tetap awet dan bertenaga. Dari service berkala hingga perawatan harian dari ahli Honda.'
  },
  {
    id: '2',
    slug: 'review-honda-hrv-2024-fitur-terbaru',
    title: 'Review Honda HR-V 2024: Fitur Terbaru dan Spesifikasi Lengkap',
    excerpt: 'Simak review lengkap Honda HR-V 2024 dengan fitur terbaru, spesifikasi, dan perbandingan dengan generasi sebelumnya. Mobil SUV compact yang cocok untuk keluarga muda.',
    content: `
      <h2>Desain Eksterior yang Lebih Sporty</h2>
      <p>Honda HR-V 2024 hadir dengan desain yang lebih tajam dan modern. Grille depan yang lebih lebar serta lampu LED yang menyatu memberikan kesan premium.</p>

      <h2>Fitur Keselamatan Terbaru</h2>
      <p>Dilengkapi dengan Honda SENSING yang lebih canggih, termasuk:</p>
      <ul>
        <li>Collision Mitigation Braking System</li>
        <li>Road Departure Mitigation</li>
        <li>Adaptive Cruise Control</li>
        <li>Lane Keeping Assist</li>
      </ul>

      <h2>Interior yang Luas dan Nyaman</h2>
      <p>Magic Seat yang legendaris tetap dipertahankan, memberikan fleksibilitas ruang bagasi yang luar biasa.</p>

      <h2>Performa Mesin</h2>
      <p>Menggunakan mesin 1.5L DOHC i-VTEC yang responsive dan hemat bahan bakar dengan konsumsi hingga 20 km/liter.</p>
    `,
    featuredImage: 'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=800&h=400&fit=crop',
    author: {
      name: 'Sari Test Drive',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face',
      role: 'Test Drive Specialist'
    },
    category: 'review',
    tags: ['hrv', 'review', '2024', 'suv', 'honda'],
    publishedAt: '2024-01-12',
    readTime: 8,
    isFeatured: true,
    metaTitle: 'Review Honda HR-V 2024 - Fitur dan Spesifikasi',
    metaDescription: 'Review mendalam Honda HR-V 2024: desain, fitur keselamatan, performa, dan perbandingan harga. Baca sebelum beli!'
  },
  {
    id: '3',
    slug: 'promo-dp-rendah-bulan-ini',
    title: 'Promo DP 10% untuk Semua Model Honda Bulan Ini',
    excerpt: 'Manfaatkan promo spesial DP mulai 10% untuk semua model Honda. Dapatkan juga hadiah menarik dan free aksesoris.',
    content: '...',
    featuredImage: 'https://images.unsplash.com/photo-1563720223185-11003d516935?w=800&h=400&fit=crop',
    author: {
      name: 'Rendy Sales',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face',
      role: 'Sales Executive'
    },
    category: 'promo',
    tags: ['promo', 'dp rendah', 'diskon', 'cicilan'],
    publishedAt: '2024-01-10',
    readTime: 3,
    isFeatured: false
  }
  // ... tambahkan posts lainnya
];

// Export helper functions
export const getFeaturedPosts = (): BlogPost[] => {
  return blogPosts.filter(post => post.isFeatured);
};

export const getRecentPosts = (limit?: number): BlogPost[] => {
  const sorted = blogPosts.sort((a, b) => 
    new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );
  return limit ? sorted.slice(0, limit) : sorted;
};

export const getPostsByCategory = (category: BlogPost['category']): BlogPost[] => {
  return blogPosts.filter(post => post.category === category);
};

export const getPostBySlug = (slug: string): BlogPost | undefined => {
  return blogPosts.find(post => post.slug === slug);
};

export const getRelatedPosts = (currentPost: BlogPost, limit: number = 3): BlogPost[] => {
  return blogPosts
    .filter(post => 
      post.id !== currentPost.id && 
      (post.category === currentPost.category || 
       post.tags.some(tag => currentPost.tags.includes(tag)))
    )
    .slice(0, limit);
};

// Export default untuk convenience
export default {
  blogPosts,
  getFeaturedPosts,
  getRecentPosts,
  getPostsByCategory,
  getPostBySlug,
  getRelatedPosts
};