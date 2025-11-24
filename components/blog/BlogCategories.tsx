// components/blog/BlogCategories.tsx
import { blogCategories } from '@/data/blog/categories';

export default function BlogCategories() { // HAPUS activeCategory prop
  return (
    <div className="flex flex-wrap gap-2 mb-8">
      {/* Tampilkan categories sebagai static info saja */}
      {blogCategories.map((category) => (
        <span
          key={category.slug}
          className="px-4 py-2 rounded-full bg-gray-100 text-gray-700 border border-gray-300 cursor-not-allowed opacity-70"
          title="Filter by category tidak tersedia di versi static"
        >
          {category.name}
        </span>
      ))}
    </div>
  );
}