import { Metadata } from 'next';
import HomePage from '@/src/features/home/HomePage';

export const metadata: Metadata = {
  title: 'HI Labs - Engineering Talent Production Lab',
  description: 'HI Labs is an in-person Engineering lab. We produce deployable junior engineers through enforced evaluation and supervised deployment.',
  alternates: {
    canonical: '/',
  },
};

// Enable static generation
export const dynamic = 'force-static';
export const revalidate = false;

export default function Page() {
  return <HomePage />;
}
