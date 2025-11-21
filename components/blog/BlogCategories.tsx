import { BlogCategory } from '@/types/blog';
import Link from 'next/link';
import { blogCategories } from '@/data/blog/categories';

interface BlogCategoriesProps {
  activeCategory?: string;
}

export default function BlogCategories({ activeCategory }: BlogCategoriesProps) {
  return (
    <div className="flex flex-wrap gap-2 mb-8">
      <Link
        href="/blog"
        className={`px-4 py-2 rounded-full font-medium transition-colors ${
          !activeCategory 
            ? 'bg-red-600 text-white' 
            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
        }`}
      >
        Semua
      </Link>
      {blogCategories.map((category) => (
        <Link
          key={category.id}
          href={`/blog?category=${category.slug}`}
          className={`px-4 py-2 rounded-full font-medium transition-colors ${
            activeCategory === category.slug
              ? 'bg-red-600 text-white'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          {category.name} ({category.postCount})
        </Link>
      ))}
    </div>
  );
}