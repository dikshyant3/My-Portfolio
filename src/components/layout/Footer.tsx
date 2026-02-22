import React from 'react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-white border-t border-gray-200 py-6" role="contentinfo">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm text-[var(--color-text-muted)]">
          Copyright © {currentYear} Dikshyant Dhungana | All rights reserved
        </p>
      </div>
    </footer>
  );
};
