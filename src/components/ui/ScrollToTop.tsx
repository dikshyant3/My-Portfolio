'use client';

import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export const ScrollToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    
    window.addEventListener('scroll', toggleVisibility);
    
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  
  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-40 w-12 h-12 rounded-full bg-[var(--color-accent-blue)] text-white shadow-lg hover:bg-[var(--color-accent-blue-dark)] transition-all hover:scale-110 focus:outline-none focus:ring-2 focus:ring-[var(--color-accent-blue)] focus:ring-offset-2"
          aria-label="Scroll to top"
        >
          <ArrowUp size={24} className="mx-auto" aria-hidden="true" />
        </button>
      )}
    </>
  );
};
