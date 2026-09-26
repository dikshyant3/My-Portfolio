import React, { useState } from 'react';
import { Code } from 'lucide-react';
import { href } from '../../lib/paths';

interface NavItemProps {
  to: string;
  children: React.ReactNode;
  isActive?: boolean;
  onClick?: () => void;
}

const NavItem: React.FC<NavItemProps> = ({ to, children, isActive = false, onClick }) => {
  return (
    <a
      href={href(to)}
      onClick={onClick}
      className={`px-4 py-2 transition-colors rounded-md ${
        isActive
          ? 'text-[var(--color-accent-blue)] bg-blue-50'
          : 'text-[var(--color-text-primary)] hover:text-[var(--color-accent-blue)] hover:bg-gray-50'
      }`}
    >
      {children}
    </a>
  );
};

interface HeaderProps {
  currentPath: string;
}

export const Header: React.FC<HeaderProps> = ({ currentPath }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const closeMenu = () => setIsMenuOpen(false);
  
  const isActive = (path: string) => currentPath === path;
  
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a
            href={href('/')}
            className="flex items-center gap-2 text-[var(--color-text-primary)] hover:text-[var(--color-accent-blue)] transition-colors"
            aria-label="Dikshyant Dhungana - Home"
          >
            <div className="w-8 h-8 border-2 border-[var(--color-text-primary)] rounded flex items-center justify-center">
              <Code size={18} aria-hidden="true" />
            </div>
            <span className="text-sm uppercase tracking-wider hidden sm:inline">
              Dikshyant<br />Dhungana
            </span>
          </a>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-2" aria-label="Main navigation">
            <NavItem to="/" isActive={isActive('/')}>Home</NavItem>
            <NavItem to="/research" isActive={isActive('/research')}>Research</NavItem>
            <NavItem to="/publications" isActive={isActive('/publications')}>Publications</NavItem>
            <NavItem to="/experience" isActive={isActive('/experience')}>Experience</NavItem>
            <NavItem to="/skills" isActive={isActive('/skills')}>Skills</NavItem>
            <NavItem to="/blog" isActive={isActive('/blog')}>Blog</NavItem>
            <NavItem to="/contact" isActive={isActive('/contact')}>Contact</NavItem>
          </nav>
          
          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-md text-[var(--color-text-primary)] hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-[var(--color-accent-blue)]"
            aria-expanded={isMenuOpen}
            aria-label="Toggle navigation menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
        
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-gray-200" aria-label="Mobile navigation">
            <div className="flex flex-col gap-2">
              <NavItem to="/" isActive={isActive('/')} onClick={closeMenu}>Home</NavItem>
              <NavItem to="/research" isActive={isActive('/research')} onClick={closeMenu}>Research</NavItem>
              <NavItem to="/publications" isActive={isActive('/publications')} onClick={closeMenu}>Publications</NavItem>
              <NavItem to="/experience" isActive={isActive('/experience')} onClick={closeMenu}>Experience</NavItem>
              <NavItem to="/skills" isActive={isActive('/skills')} onClick={closeMenu}>Skills</NavItem>
              <NavItem to="/blog" isActive={isActive('/blog')} onClick={closeMenu}>Blog</NavItem>
              <NavItem to="/contact" isActive={isActive('/contact')} onClick={closeMenu}>Contact</NavItem>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};
