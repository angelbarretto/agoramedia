import { Routes, Route } from 'react-router-dom';
import Layout from '@/components/Layout';
import HomePage from '@/pages/HomePage';
import SinglePost from '@/pages/SinglePost';
import EventsArchive from '@/pages/EventsArchive';
import CategoryArchive from '@/pages/CategoryArchive';
import TagArchive from '@/pages/TagArchive';
import AuthorArchive from '@/pages/AuthorArchive';
import SearchResults from '@/pages/SearchResults';
import DateArchive from '@/pages/DateArchive';
import ContactPage from '@/pages/ContactPage';
import PrivacyPage from '@/pages/PrivacyPage';
import NotFoundPage from '@/pages/NotFoundPage';

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/events" element={<EventsArchive />} />
        <Route path="/events/page/:page" element={<EventsArchive />} />
        <Route path="/post/:slug" element={<SinglePost />} />
        <Route path="/category/:slug" element={<CategoryArchive />} />
        <Route path="/tag/:slug" element={<TagArchive />} />
        <Route path="/author/:slug" element={<AuthorArchive />} />
        <Route path="/archive/:year/:month" element={<DateArchive />} />
        <Route path="/search" element={<SearchResults />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/privacy" element={<PrivacyPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Layout>
  );
}
