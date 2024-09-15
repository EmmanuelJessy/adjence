import React, { useEffect } from 'react';

const SmoothScrollWrapper = ({ children }) => {
  useEffect(() => {
    let lastScrollTop = 0;
    const scrollSpeed = 0.2; // Ajustez la vitesse de défilement ici

    const handleScroll = () => {
      const currentScrollTop = window.scrollY;
      const delta = (currentScrollTop - lastScrollTop) * scrollSpeed;
      lastScrollTop = currentScrollTop;

      // Appliquer le défilement ralenti
      window.scrollTo({
        top: currentScrollTop - delta,
        behavior: 'auto'
      });
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return <div>{children}</div>;
};

export default SmoothScrollWrapper;
