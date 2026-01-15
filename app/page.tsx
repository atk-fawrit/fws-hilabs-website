import { Metadata } from 'next';
import HomePage from '@/src/features/home/HomePage';

export const metadata: Metadata = {
  title: 'HI Labs - Engineering Talent Production Lab',
  description: 'HI Labs is an in-person Engineering lab. We produce deployable junior engineers through enforced evaluation and supervised deployment.',
  alternates: {
    canonical: '/',
  },
};

export default function Page() {
  return <HomePage />;
}
