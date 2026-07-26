import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function PortfolioRedirect() {
  const router = useRouter();

  useEffect(() => {
    router.replace('/#projects').then(() => {
      document.getElementById('projects')?.scrollIntoView();
    });
  }, [router]);

  return null;
}
