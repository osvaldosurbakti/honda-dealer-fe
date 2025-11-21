import { BlogCategory } from '@/types/blog';

export const blogCategories: BlogCategory[] = [
  {
    id: '1',
    name: 'Tips & Perawatan',
    slug: 'tips',
    description: 'Tips merawat mobil Honda dan panduan maintenance',
    postCount: 12
  },
  {
    id: '2',
    name: 'Berita Terbaru',
    slug: 'news',
    description: 'Update terbaru seputar Honda dan automotive',
    postCount: 8
  },
  {
    id: '3',
    name: 'Promo & Event',
    slug: 'promo',
    description: 'Program promo spesial dan event di showroom',
    postCount: 5
  },
  {
    id: '4',
    name: 'Review Mobil',
    slug: 'review',
    description: 'Review mendalam dan perbandingan model Honda',
    postCount: 10
  },
  {
    id: '5',
    name: 'After Sales',
    slug: 'maintenance',
    description: 'Informasi service, spare part, dan garansi',
    postCount: 6
  }
];

// Helper functions untuk categories
export const getCategoryBySlug = (slug: string): BlogCategory | undefined => {
  return blogCategories.find(category => category.slug === slug);
};

export const getCategoryPostCount = (categorySlug: string): number => {
  return blogCategories.find(cat => cat.slug === categorySlug)?.postCount || 0;
};

export default blogCategories;