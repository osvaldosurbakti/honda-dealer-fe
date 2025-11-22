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
  },
  {
    id: '4',
    slug: 'perbandingan-honda-brio-vs-toyota-calya',
    title: 'Perbandingan Honda Brio vs Toyota Calya: Mana yang Lebih Unggul?',
    excerpt: 'Analisis detail perbandingan antara Honda Brio dan Toyota Calya. Simak kelebihan dan kekurangan masing-masing sebelum memutuskan membeli.',
    content: `
      <h2>Desain dan Dimensi</h2>
      <p>Honda Brio memiliki desain yang lebih modern dan compact, sementara Toyota Calya menawarkan bodi yang lebih besar dengan kapasitas 7 penumpang.</p>

      <h2>Performa Mesin</h2>
      <p>Brio menggunakan mesin 1.2L i-VTEC yang responsif, sedangkan Calya menggunakan mesin 1.2L Dual VVT-i dengan torsi yang lebih baik untuk muatan penuh.</p>

      <h2>Fitur dan Teknologi</h2>
      <p>Brio menawarkan fitur keselamatan yang lebih lengkap, sementara Calya fokus pada kenyamanan dengan interior yang lebih luas.</p>

      <h2>Harga dan Biaya Perawatan</h2>
      <p>Kedua mobil memiliki harga yang kompetitif, namun Brio memiliki biaya perawatan yang sedikit lebih ekonomis.</p>
    `,
    featuredImage: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&h=400&fit=crop',
    author: {
      name: 'Ahmad Comparo',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
      role: 'Automotive Analyst'
    },
    category: 'comparison',
    tags: ['perbandingan', 'brio', 'calya', 'lcgc', 'hatchback'],
    publishedAt: '2024-01-08',
    readTime: 6,
    isFeatured: true,
    metaTitle: 'Honda Brio vs Toyota Calya - Perbandingan Lengkap',
    metaDescription: 'Perbandingan detail Honda Brio dan Toyota Calya: desain, performa, fitur, harga, dan biaya perawatan.'
  },
  {
    id: '5',
    slug: 'cara-menghemat-bbm-honda-city-hybrid',
    title: 'Cara Menghemat BBM di Honda City Hybrid: Tips Efisiensi Bahan Bakar',
    excerpt: 'Pelajari teknik mengemudi yang tepat untuk mendapatkan efisiensi bahan bakar maksimal dari Honda City Hybrid Anda.',
    content: `
      <h2>Pahami Sistem Hybrid</h2>
      <p>Honda City Hybrid menggunakan sistem i-MMD yang secara otomatis beralih antara listrik dan bensin. Pahami kapan sistem menggunakan masing-masing sumber daya.</p>

      <h2>Teknik Eco Driving</h2>
      <p>Gunakan mode Eco untuk pengalaman berkendara yang lebih hemat bahan bakar. Hindari akselerasi dan pengereman mendadak.</p>

      <h2>Manfaatkan Regenerative Braking</h2>
      <p>Sistem pengereman regeneratif mengisi ulang baterai hybrid saat Anda mengerem. Manfaatkan dengan pengereman halus dan bertahap.</p>

      <h2>Perawatan Rutin</h2>
      <p>Pastikan tekanan ban optimal dan lakukan service berkala untuk menjaga efisiensi sistem hybrid.</p>
    `,
    featuredImage: 'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=800&h=400&fit=crop',
    author: {
      name: 'Budi EcoDrive',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face',
      role: 'Eco Driving Specialist'
    },
    category: 'tips',
    tags: ['hybrid', 'hemat bbm', 'eco driving', 'city hybrid', 'efisiensi'],
    publishedAt: '2024-01-05',
    readTime: 4,
    isFeatured: false,
    metaTitle: 'Tips Hemat BBM Honda City Hybrid - Efisiensi Maksimal',
    metaDescription: 'Panduan lengkap cara mengemudi Honda City Hybrid untuk mendapatkan konsumsi BBM terbaik dan efisiensi maksimal.'
  },
  {
    id: '6',
    slug: 'test-drive-honda-crv-2024-pengalaman-nyata',
    title: 'Test Drive Honda CR-V 2024: Pengalaman Nyata di Jalan Kota dan Tol',
    excerpt: 'Simak pengalaman langsung test drive Honda CR-V 2024 dalam berbagai kondisi jalan. Dari kemacetan kota hingga kecepatan tinggi di tol.',
    content: `
      <h2>Di Jalan Perkotaan</h2>
      <p>CR-V 2024 sangat nyaman di jalan perkotaan. Suspensi yang empuk dan kabin yang sunyi membuat perjalanan di jalan berlubang tetap nyaman.</p>

      <h2>Performa di Tol</h2>
      <p>Mesin 1.5L Turbo memberikan akselerasi yang kuat saat menyalip. Cruise Control adaptif bekerja sempurna untuk perjalanan jarak jauh.</p>

      <h2>Konsumsi BBM Real</h2>
      <p>Dari pengujian kami, CR-V 2024 mampu mencapai 12-14 km/liter di kota dan 16-18 km/liter di tol.</p>

      <h2>Fitur Keselamatan Aktif</h2>
      <p>Honda SENSING sangat membantu dalam kondisi lalu lintas padat dengan kemampuannya mendeteksi pejalan kaki dan kendaraan di blind spot.</p>
    `,
    featuredImage: 'https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?w=800&h=400&fit=crop',
    author: {
      name: 'Sari Test Drive',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face',
      role: 'Test Drive Specialist'
    },
    category: 'review',
    tags: ['crv', 'test drive', 'review', 'suv', '2024'],
    publishedAt: '2024-01-03',
    readTime: 7,
    isFeatured: true,
    metaTitle: 'Test Drive Honda CR-V 2024 - Review Pengalaman Nyata',
    metaDescription: 'Pengalaman test drive Honda CR-V 2024 di berbagai kondisi jalan. Performa real, konsumsi BBM, dan fitur keselamatan.'
  },
  {
    id: '7',
    slug: 'aksesoris-wajib-honda-mobilio-untuk-keluarga',
    title: '5 Aksesoris Wajib untuk Honda Mobilio yang Membuat Perjalanan Keluarga Lebih Nyaman',
    excerpt: 'Temukan aksesoris penting yang harus dimiliki pemilik Honda Mobilio untuk meningkatkan kenyamanan dan keamanan perjalanan keluarga.',
    content: `
      <h2>1. Roof Rack untuk Barang Tambahan</h2>
      <p>Tambahan kapasitas bagasi dengan roof rack yang kuat dan aman.</p>

      <h2>2. Seat Cover Berkualitas</h2>
      <p>Lindungi kursi dari tumpahan dan keausan dengan seat cover yang mudah dibersihkan.</p>

      <h2>3. Camera Mundur</h2>
      <p>Essential untuk mobil MPV dengan blind spot yang besar di bagian belakang.</p>

      <h2>4. Sunshade untuk Anak</h2>
      <p>Jaga anak dari terik matahari dengan sunshade yang praktis.</p>

      <h2>5. Organizer Bagasi</h2>
      <p>Buat barang-barang di bagasi tetap rapi dan tidak berantakan selama perjalanan.</p>
    `,
    featuredImage: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800&h=400&fit=crop',
    author: {
      name: 'Rendy Sales',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face',
      role: 'Sales Executive'
    },
    category: 'tips',
    tags: ['aksesoris', 'mobilio', 'keluarga', 'modifikasi', 'kenyamanan'],
    publishedAt: '2023-12-28',
    readTime: 4,
    isFeatured: false,
    metaTitle: 'Aksesoris Wajib Honda Mobilio - Untuk Keluarga',
    metaDescription: 'Rekomendasi aksesoris penting untuk Honda Mobilio yang meningkatkan kenyamanan dan keamanan perjalanan keluarga.'
  },
  {
    id: '8',
    slug: 'program-service-gratis-honda-sampai-50-000-km',
    title: 'Program Service Gratis Honda: Nikmati Free Service Sampai 50.000 KM',
    excerpt: 'Manfaatkan program service gratis dari Honda untuk perawatan kendaraan Anda tanpa biaya sampai 50.000 kilometer.',
    content: `
      <h2>Syarat dan Ketentuan</h2>
      <p>Program ini berlaku untuk pembelian unit baru periode Januari-Maret 2024 dengan syarat tertentu.</p>

      <h2>Apa Saja yang Ditanggung?</h2>
      <p>Service gratis meliputi ganti oli, filter, dan pemeriksaan komponen dasar sesuai jadwal service berkala.</p>

      <h2>Model yang Tersedia</h2>
      <p>Program berlaku untuk semua model Honda: Brio, Mobilio, HR-V, CR-V, City, dan Civic.</p>

      <h2>Cara Klaim</h2>
      <p>Bawa buku service dan bukti kepemilikan kendaraan ke dealer Honda terdekat.</p>
    `,
    featuredImage: 'https://images.unsplash.com/photo-1563720223185-11003d516935?w=800&h=400&fit=crop',
    author: {
      name: 'Rendy Sales',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face',
      role: 'Sales Executive'
    },
    category: 'promo',
    tags: ['promo', 'service gratis', 'maintenance', 'program', 'honda'],
    publishedAt: '2023-12-25',
    readTime: 3,
    isFeatured: true,
    metaTitle: 'Program Service Gratis Honda - Free Service 50.000 KM',
    metaDescription: 'Program service gratis Honda untuk perawatan kendaraan tanpa biaya sampai 50.000 km. Syarat dan ketentuan berlaku.'
  },
  {
    id: '9',
    slug: 'solusi-masalah-mobil-honda-yang-sering-dialami',
    title: 'Solusi 5 Masalah Mobil Honda yang Sering Dialami dan Cara Mengatasinya',
    excerpt: 'Kenali masalah umum yang sering terjadi pada mobil Honda dan pelajari cara mengatasinya sendiri sebelum bawa ke bengkel.',
    content: `
      <h2>1. Mesin Sulit Hidup di Pagi Hari</h2>
      <p>Biasanya disebabkan oleh aki lemah atau fuel pump yang mulai bermasalah.</p>

      <h2>2. Getaran di Setir</h2>
      <p>Cek keseimbangan ban dan kondisi tie rod. Sering terjadi setelah 30.000 km.</p>

      <h2>3. AC Kurang Dingin</h2>
      <p>Periksa level freon dan kebersihan evaporator. Cleaning AC rutin setiap 1 tahun.</p>

      <h2>4. Rem Berbunyi</h2>
      <p>Bisa karena kampas rem habis atau teras benda asing. Periksa ketebalan kampas rem.</p>

      <h2>5. Konsumsi BBM Boros</h2>
      <p>Cek tekanan ban, filter udara, dan kondisi spark plug.</p>
    `,
    featuredImage: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800&h=400&fit=crop',
    author: {
      name: 'Ahmad Comparo',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
      role: 'Automotive Analyst'
    },
    category: 'tips',
    tags: ['masalah', 'solusi', 'troubleshoot', 'perbaikan', 'maintenance'],
    publishedAt: '2023-12-20',
    readTime: 5,
    isFeatured: false,
    metaTitle: 'Solusi Masalah Mobil Honda - Troubleshoot Guide',
    metaDescription: 'Panduan mengatasi masalah umum mobil Honda: mesin sulit hidup, getaran, AC kurang dingin, dan konsumsi BBM boros.'
  },
  {
    id: '10',
    slug: 'kenapa-pilih-honda-civic-turbo-2024',
    title: 'Kenapa Harus Pilih Honda Civic Turbo 2024? 7 Alasan yang Membuat Anda Tidak Menyesal',
    excerpt: 'Temukan 7 alasan kuat mengapa Honda Civic Turbo 2024 menjadi pilihan tepat untuk penggemar sedan sporty dan nyaman.',
    content: `
      <h2>1. Performa Turbo yang Responsif</h2>
      <p>Mesin 1.5L Turbo memberikan tenaga 182 HP dengan akselerasi yang smooth.</p>

      <h2>2. Desain yang Timeless</h2>
      <p>Desain eksterior yang sporty namun elegan, tidak mudah ketinggalan zaman.</p>

      <h2>3. Teknologi Canggih</h2>
      <p>Dilengkapi dengan Honda CONNECT dan fitur keselamatan lengkap.</p>

      <h2>4. Kenyamanan Kabin</h2>
      <p>Interior yang luas dengan material premium dan fitur kenyamanan lengkap.</p>

      <h2>5. Nilai Jual Tinggi</h2>
      <p>Civic dikenal memiliki nilai jual yang tetap tinggi di pasaran bekas.</p>

      <h2>6. Efisiensi Bahan Bakar</h2>
      <p>Konsumsi BBM yang irit untuk segmen sedan sport dengan teknologi turbo.</p>

      <h2>7. Komunitas yang Besar</h2>
      <p>Komunitas Civic yang aktif dan supportive di seluruh Indonesia.</p>
    `,
    featuredImage: 'https://images.unsplash.com/photo-1592198084033-aade902d1aae?w=800&h=400&fit=crop',
    author: {
      name: 'Sari Test Drive',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face',
      role: 'Test Drive Specialist'
    },
    category: 'review',
    tags: ['civic', 'turbo', 'sedan', 'sport', '2024'],
    publishedAt: '2023-12-15',
    readTime: 6,
    isFeatured: true,
    metaTitle: '7 Alasan Pilih Honda Civic Turbo 2024 - Review',
    metaDescription: '7 alasan kuat memilih Honda Civic Turbo 2024: performa, desain, teknologi, kenyamanan, dan nilai jual tinggi.'
  }
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