import { useEffect, useMemo } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';
import { posts, postBySlug } from '@/content/posts';
import { authorBySlug } from '@/content/authors';
import { formatDate, setDocumentMeta } from '@/lib/format';
import CategoryChip from '@/components/CategoryChip';
import PostCard from '@/components/PostCard';
import SectionLabel from '@/components/SectionLabel';
import NotFoundPage from './NotFoundPage';

export default function SinglePost() {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? postBySlug(slug) : undefined;
  const author = post ? authorBySlug(post.authorSlug) : undefined;

  useEffect(() => {
    if (post) {
      setDocumentMeta(`${post.title} | Agora Media`, post.excerpt);
      window.scrollTo({ top: 0 });
    }
  }, [post]);

  const readNext = useMemo(() => {
    if (!post) return undefined;
    const olderSharingCategory = posts
      .filter(p => p.id !== post.id && p.date < post.date)
      .find(p => p.categorySlugs.some(c => post.categorySlugs.includes(c)));
    if (olderSharingCategory) return olderSharingCategory;
    return posts.filter(p => p.id !== post.id && p.date < post.date)[0];
  }, [post]);

  if (!post) return <NotFoundPage />;

  return (
    <article className="max-w-3xl mx-auto px-5 py-12">
      <Link
        to="/events"
        className="inline-flex items-center gap-1.5 text-xs uppercase tracking-[0.2em] text-brand-muted hover:text-brand-text transition-colors mb-10"
      >
        <ChevronLeft size={14} /> Back to Media
      </Link>

      <div className="flex flex-wrap gap-1.5 mb-5">
        {post.categorySlugs.map(s => (
          <CategoryChip key={s} slug={s} />
        ))}
      </div>

      <h1 className="font-display text-3xl md:text-5xl leading-tight tracking-tight">
        {post.title}
      </h1>

      <div className="mt-5 text-sm text-brand-muted">
        By{' '}
        <Link
          to={`/author/${post.authorSlug}`}
          className="hover:text-brand-text underline underline-offset-2"
        >
          {post.authorName}
        </Link>
        <span className="mx-2">·</span>
        <time dateTime={post.date}>{formatDate(post.date)}</time>
        <span className="mx-2">·</span>
        <span>{post.readingMinutes} min read</span>
      </div>

      {post.featuredImage && (
        <img
          src={post.featuredImage}
          alt={post.title}
          className="w-full aspect-[16/9] object-cover my-10"
        />
      )}

      <div
        className="prose-agora"
        dangerouslySetInnerHTML={{ __html: post.contentHtml }}
      />

      {readNext && (
        <section className="mt-20">
          <SectionLabel>Read Next</SectionLabel>
          <PostCard post={readNext} />
        </section>
      )}

      {author && (
        <section className="mt-20 border-t border-brand-border pt-10">
          <SectionLabel>About the author</SectionLabel>
          <div className="flex items-start gap-5">
            {author.avatar && (
              <img
                src={author.avatar}
                alt={author.name}
                className="w-20 h-20 rounded-full object-cover shrink-0"
                width={80}
                height={80}
              />
            )}
            <div>
              <Link
                to={`/author/${author.slug}`}
                className="font-display text-xl hover:text-brand-accent"
              >
                {author.name}
              </Link>
              {author.description && (
                <p className="text-sm text-brand-muted mt-2 leading-relaxed">
                  {author.description}
                </p>
              )}
              {author.url && (
                <a
                  href={author.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs uppercase tracking-widest mt-3 inline-block hover:text-brand-accent"
                >
                  Visit homepage →
                </a>
              )}
            </div>
          </div>
        </section>
      )}
    </article>
  );
}
