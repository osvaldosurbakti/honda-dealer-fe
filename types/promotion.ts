// Promotion Type
export interface Promotion {
  id: string;
  title: string;
  slug: string;
  description: string;
  shortDescription: string;
  image: string;
  bannerImage?: string;
  startDate: string;
  endDate: string;
  carModels: string[]; // slugs of applicable cars
  discount?: {
    type: 'percentage' | 'fixed' | 'special';
    value: number;
    label: string;
  };
  terms: string[];
  isActive: boolean;
  isFeatured: boolean;
  priority: number;
  createdAt: string;
  updatedAt: string;
}

// Promotion Category Type
export interface PromotionCategory {
  id: string;
  name: string;
  slug: string;
  description: string;
  promotions: string[]; // promotion IDs
}

// Promotion Filter Type
export interface PromotionFilter {
  category?: string;
  status?: 'active' | 'upcoming' | 'expired';
  carModel?: string;
  isFeatured?: boolean;
}