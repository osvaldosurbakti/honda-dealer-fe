export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  featuredImage: string;
  author: {
    name: string;
    avatar: string;
    role: string;
  };
  category: 'tips' | 'news' | 'promo' | 'review' | 'maintenance' | 'comparison';
  tags: string[];
  publishedAt: string;
  updatedAt?: string;
  readTime: number;
  isFeatured: boolean;
  metaTitle?: string;
  metaDescription?: string;
}

export interface BlogCategory {
  id: string;
  name: string;
  slug: string;
  description: string;
  postCount: number;
}

export interface BlogSidebarData {
  categories: BlogCategory[];
  popularPosts: BlogPost[];
  tags: string[];
}