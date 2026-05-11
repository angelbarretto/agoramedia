import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { posts } from '@/content/posts';
import PostListPage from '@/components/PostListPage';
import { setDocumentMeta } from '@/lib/format';
import NotFoundPage from './NotFoundPage';

const MONTHS = ['January','February','March','April','May','June','July','August','September','October','November','December'];

export default function DateArchive() {
  const { year, month } = useParams<{ year: string; month: string }>();
  const monthNum = month ? parseInt(month, 10) : NaN;

  if (!year || !month || isNaN(monthNum) || monthNum < 1 || monthNum > 12) {
    return <NotFoundPage />;
  }

  const prefix = `${year}-${String(monthNum).padStart(2, '0')}`;
  const list = posts.filter(p => p.date.startsWith(prefix));
  const monthName = MONTHS[monthNum - 1];

  useEffect(() => {
    setDocumentMeta(
      `${monthName} ${year} | Agora Media`,
      `${list.length} stories from ${monthName} ${year}.`,
    );
  }, [monthName, year, list.length]);

  return (
    <PostListPage
      title={`${monthName} ${year}`}
      subtitle={`${list.length} ${list.length === 1 ? 'story' : 'stories'} from this month.`}
      posts={list}
    />
  );
}
