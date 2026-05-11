import { Link } from 'react-router-dom';
import type { Post } from '@/content/posts';
import { formatDate } from '@/lib/format';
import CategoryChip from './CategoryChip';

interface PostCardProps {
  post: Post;
  variant?: 'default' | 'hero';
}

export default function PostCard({ post, variant = 'default' }: PostCardProps) {
  const isHero = variant === 'hero';
  return (
    <article className={`group flex flex-col gap-3 ${isHero ? 'gap-4' : ''}`}>
      <Link to={`/post/${post.slug}`} className="block relative overflow-hidden bg-brand-surface">
        <div className={`aspect-[16/9] ${isHero ? 'aspect-[2/1]' : ''}`}>
          {post.featuredImage ? (
            <img
              src={post.featuredImage}
              alt={post.title}
              loading="lazy"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          ) : (
            <div className="w-full h-full bg-brand-border" />
          )}
        </div>
      </Link>

      <div className="flex flex-wrap gap-1.5">
        {post.categorySlugs.slice(0, 2).map(slug => (
          <CategoryChip key={slug} slug={slug} />
        ))}
      </div>

      <h3
        className={`font-display leading-snug ${
          isHero ? 'text-2xl md:text-4xl' : 'text-xl'
        }`}
      >
        <Link to={`/post/${post.slug}`} className="hover:text-brand-accent transition-colors">
          {post.title}
        </Link>
      </h3>

      <div className="text-xs text-brand-muted">
        <Link
          to={`/author/${post.authorSlug}`}
          className="hover:text-brand-text transition-colors"
        >
          {post.authorName}
        </Link>
        <span className="mx-1.5">·</span>
        <time dateTime={post.date}>{formatDate(post.date)}</time>
        <span className="mx-1.5">·</span>
        <span>{post.readingMinutes} min read</span>
      </div>

      {post.excerpt && (
        <p className="text-sm text-brand-muted leading-relaxed line-clamp-3">
          {post.excerpt}
        </p>
      )}
    </article>
  );
}
