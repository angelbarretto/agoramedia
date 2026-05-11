import { Link } from 'react-router-dom';
import { categoryAccent, getCategoryName } from '@/lib/format';

export default function CategoryChip({ slug }: { slug: string }) {
  const color = categoryAccent(slug);
  return (
    <Link
      to={`/category/${slug}`}
      className="inline-block text-[10px] uppercase tracking-[0.2em] font-semibold px-2.5 py-1 text-white hover:opacity-90 transition-opacity"
      style={{ backgroundColor: color }}
    >
      {getCategoryName(slug)}
    </Link>
  );
}
