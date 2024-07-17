'use client'
import React from 'react';
import { useRouter } from 'next/router';

const AllEventsPage: React.FC = () => {
  const router = useRouter();
  const [isMobile, setIsMobile] = React.useState(false);

  const checkScreenSize = () => {
    if (typeof window !== 'undefined') {
      setIsMobile(window.innerWidth <= 768);
    }
  };

  React.useEffect(() => {
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);

    return () => {
      window.removeEventListener('resize', checkScreenSize);
    };
  }, []);

  React.useEffect(() => {
    if (isMobile) {
      router.push('/allevents/[slug]/mobile');
    } else {
      router.push('/allevents/[slug]/desktop');
    }
  }, [isMobile, router]);

  return null; // This component doesn't render anything
};

export default AllEventsPage;