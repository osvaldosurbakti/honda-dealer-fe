import { BlogCategory } from '@/types/blog';
import { blogPosts } from './index'; // Import dari file yang sama

// Di file categories.ts, tambahkan kategori 'comparison'
const baseCategories: Omit<BlogCategory, 'postCount'>[] = [
  {
    id: '1',
    name: 'Tips & Perawatan',
    slug: 'tips',
    description: 'Tips merawat mobil Honda dan panduan maintenance'
  },
  {
    id: '2', 
    name: 'Berita Terbaru',
    slug: 'news',
    description: 'Update terbaru seputar Honda dan automotive'
  },
  {
    id: '3',
    name: 'Promo & Event',
    slug: 'promo', 
    description: 'Program promo spesial dan event di showroom'
  },
  {
    id: '4',
    name: 'Review Mobil',
    slug: 'review',
    description: 'Review mendalam dan perbandingan model Honda'
  },
  {
    id: '5',
    name: 'Perbandingan',
    slug: 'comparison',
    description: 'Perbandingan antara model Honda dan kompetitor'
  },
  {
    id: '6',
    name: 'After Sales',
    slug: 'maintenance',
    description: 'Informasi service, spare part, dan garansi'
  }
];

// Generate categories dengan postCount yang dihitung otomatis
export const blogCategories: BlogCategory[] = baseCategories.map(category => ({
  ...category,
  postCount: blogPosts.filter(post => post.category === category.slug).length
}));

// Helper functions
export const getCategoryBySlug = (slug: string): BlogCategory | undefined => {
  return blogCategories.find(category => category.slug === slug);
};

export const getCategoryPostCount = (categorySlug: string): number => {
  return blogPosts.filter(post => post.category === categorySlug).length;
};

export default blogCategories;