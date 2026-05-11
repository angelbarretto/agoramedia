import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { authorBySlug } from '@/content/authors';
import { postsByAuthor } from '@/content/posts';
import PostListPage from '@/components/PostListPage';
import { setDocumentMeta } from '@/lib/format';
import NotFoundPage from './NotFoundPage';

export default function AuthorArchive() {
  const { slug } = useParams<{ slug: string }>();
  const author = slug ? authorBySlug(slug) : undefined;
  const list = slug ? postsByAuthor(slug) : [];

  useEffect(() => {
    if (author) {
      setDocumentMeta(
        `${author.name} | Agora Media`,
        author.description || `${list.length} stories by ${author.name}.`,
      );
    }
  }, [author, list.length]);

  if (!author) return <NotFoundPage />;

  return (
    <div>
      <div className="max-w-4xl mx-auto px-5 pt-12 pb-2">
        <div className="flex items-start gap-6">
          {author.avatar && (
            <img
              src={author.avatar}
              alt={author.name}
              className="w-24 h-24 rounded-full object-cover shrink-0"
              width={96}
              height={96}
            />
          )}
          <div>
            <h1 className="font-display text-3xl md:text-5xl">{author.name}</h1>
            {author.description && (
              <p className="mt-3 text-brand-muted leading-relaxed max-w-2xl">
                {author.description}
              </p>
            )}
            <p className="mt-3 text-xs uppercase tracking-widest text-brand-muted">
              {list.length} {list.length === 1 ? 'post' : 'posts'}
            </p>
          </div>
        </div>
      </div>

      <PostListPage title="" posts={list} />
    </div>
  );
}
