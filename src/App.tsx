import React, { useState, useEffect } from 'react';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { Breadcrumb } from './components/ui/Breadcrumb';
import { ScrollToTop } from './components/ui/ScrollToTop';
import { HomePage } from './components/pages/HomePage';
import { ResearchPage } from './components/pages/ResearchPage';
import { PublicationsPage } from './components/pages/PublicationsPage';
import { ExperiencePage } from './components/pages/ExperiencePage';
import { SkillsPage } from './components/pages/SkillsPage';
import { BlogPage } from './components/pages/BlogPage';
import { ContactPage } from './components/pages/ContactPage';

export default function App() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener('popstate', handlePopState);

    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, []);

  const renderPage = () => {
    switch (currentPath) {
      case '/':
        return <HomePage />;
      case '/research':
        return <ResearchPage />;
      case '/publications':
        return <PublicationsPage />;
      case '/experience':
        return <ExperiencePage />;
      case '/skills':
        return <SkillsPage />;
      case '/blog':
        return <BlogPage />;
      case '/contact':
        return <ContactPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Skip to main content link for accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-[var(--color-accent-blue)] focus:text-white focus:rounded-md"
      >
        Skip to main content
      </a>
      
      <Header currentPath={currentPath} />
      <Breadcrumb currentPage={currentPath} />
      
      <main id="main-content">
        {renderPage()}
      </main>
      
      <Footer />
      <ScrollToTop />
    </div>
  );
}