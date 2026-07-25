"use client"
import { useEffect, useState } from 'react';
import { ScrollToTop } from 'react-simple-scroll-up';

const Dependency = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Dynamically import Bootstrap JS to avoid SSR issues
    import('bootstrap/dist/js/bootstrap.bundle.min.js').then(() => {

    }).catch((err) => {
      console.error('Project loading ...:', err);
    });
  }, []);

  return (
    <>
      {mounted && <ScrollToTop symbol={<i className="fal fa-long-arrow-up"></i>} />}
    </>
  );
};

export default Dependency;