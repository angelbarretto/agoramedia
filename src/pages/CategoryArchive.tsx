import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { categoryBySlug } from '@/content/categories';
import { postsByCategory } from '@/content/posts';
import PostListPage from '@/components/PostListPage';
import { setDocumentMeta } from '@/lib/format';
import NotFoundPage from './NotFoundPage';

export default function CategoryArchive() {
  const { slug } = useParams<{ slug: string }>();
  const cat = slug ? categoryBySlug(slug) : undefined;
  const list = slug ? postsByCategory(slug) : [];

  useEffect(() => {
    if (cat) setDocumentMeta(`${cat.name} | Agora Media`, cat.description || `${cat.count} stories tagged ${cat.name}.`);
  }, [cat]);

  if (!cat) return <NotFoundPage />;

  return (
    <PostListPage
      title={cat.name}
      subtitle={cat.description || `${list.length} stories.`}
      posts={list}
    />
  );
}
