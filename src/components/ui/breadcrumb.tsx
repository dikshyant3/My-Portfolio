import React from 'react';
import { ChevronRight, Home } from 'lucide-react';

interface BreadcrumbProps {
  currentPage: string;
}

export const Breadcrumb: React.FC<BreadcrumbProps> = ({ currentPage }) => {

  const getPageTitle = (path: string) => {
    const titles: Record<string, string> = {
      '/': 'Home',
      '/research': 'Research',
      '/publications': 'Publications',
      '/experience': 'Experience',
      '/skills': 'Skills',
      '/vitae': 'Vitae',
      '/contact': 'Contact',
    };
    return titles[path] || 'Home';
  };

  if (currentPage === '/') return null;

  return (
    <nav aria-label="Breadcrumb" className="bg-[var(--color-bg-light)] border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <ol className="flex items-center gap-2 text-sm">
          <li>
            <a
              href="/"
              className="flex items-center gap-1 text-[var(--color-text-secondary)] hover:text-[var(--color-accent-blue)] transition-colors"
              aria-label="Go to home page"
            >
              <Home size={16} aria-hidden="true" />
              <span>Home</span>
            </a>
          </li>
          <li aria-hidden="true">
            <ChevronRight size={16} className="text-[var(--color-text-muted)]" />
          </li>
          <li>
            <span className="text-[var(--color-accent-blue)]" aria-current="page">
              {getPageTitle(currentPage)}
            </span>
          </li>
        </ol>
      </div>
    </nav>
  );
};
