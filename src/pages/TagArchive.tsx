import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { tagBySlug } from '@/content/tags';
import { postsByTag } from '@/content/posts';
import PostListPage from '@/components/PostListPage';
import { setDocumentMeta } from '@/lib/format';
import NotFoundPage from './NotFoundPage';

export default function TagArchive() {
  const { slug } = useParams<{ slug: string }>();
  const tag = slug ? tagBySlug(slug) : undefined;
  const list = slug ? postsByTag(slug) : [];

  useEffect(() => {
    if (tag) setDocumentMeta(`#${tag.name} | Agora Media`, `${list.length} stories tagged ${tag.name}.`);
  }, [tag, list.length]);

  if (!tag) return <NotFoundPage />;

  return (
    <PostListPage
      title={`#${tag.name}`}
      subtitle={`${list.length} stories tagged ${tag.name}.`}
      posts={list}
    />
  );
}
