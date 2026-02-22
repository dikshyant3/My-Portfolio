import React from 'react';
import { FileText, BookOpen, Users } from 'lucide-react';

interface PublicationCardProps {
  title: string;
  authors: string;
  venue: string;
  year: string;
  type: 'conference' | 'journal' | 'workshop';
  link?: string;
}

const PublicationCard: React.FC<PublicationCardProps> = ({ title, authors, venue, year, type, link }) => {
  const getIcon = () => {
    switch (type) {
      case 'conference':
        return <Users size={20} />;
      case 'journal':
        return <BookOpen size={20} />;
      case 'workshop':
        return <FileText size={20} />;
      default:
        return <FileText size={20} />;
    }
  };
  
  const getTypeLabel = () => {
    switch (type) {
      case 'conference':
        return 'Conference';
      case 'journal':
        return 'Journal';
      case 'workshop':
        return 'Workshop';
      default:
        return 'Publication';
    }
  };
  
  return (
    <article className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow border-l-4 border-[var(--color-accent-blue)]">
      <div className="flex items-start gap-4">
        <div
          className="w-10 h-10 rounded-full bg-[var(--color-accent-blue)] text-white flex items-center justify-center flex-shrink-0"
          aria-hidden="true"
        >
          {getIcon()}
        </div>
        
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-2">
            <span className="px-2 py-1 bg-blue-100 text-[var(--color-accent-blue)] text-xs rounded">
              {year}
            </span>
            <span className="px-2 py-1 bg-gray-100 text-[var(--color-text-muted)] text-xs rounded">
              {getTypeLabel()}
            </span>
          </div>
          
          <h3 className="text-lg text-[var(--color-text-primary)] mb-2">
            {title}
          </h3>
          
          <p className="text-sm text-[var(--color-text-secondary)] mb-2">
            {authors}
          </p>
          
          <p className="text-sm text-[var(--color-text-muted)] italic mb-3">
            {venue}
          </p>
          
          {link && (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-[var(--color-accent-blue)] hover:underline"
            >
              <FileText size={16} aria-hidden="true" />
              View Publication
            </a>
          )}
        </div>
      </div>
    </article>
  );
};

export const PublicationsSection: React.FC = () => {
  const publications = [
    {
      title: 'Efficient Resource Allocation in Distributed Cloud Environments',
      authors: 'D. Dhungana, J. Smith, and A. Johnson',
      venue: 'International Conference on Distributed Computing Systems (ICDCS)',
      year: '2024',
      type: 'conference' as const,
      link: '#',
    },
    {
      title: 'Scalable Machine Learning Infrastructure for Large-Scale Applications',
      authors: 'D. Dhungana, M. Brown',
      venue: 'ACM Transactions on Computer Systems',
      year: '2024',
      type: 'journal' as const,
      link: '#',
    },
    {
      title: 'Optimizing Data Processing Pipelines in Real-Time Systems',
      authors: 'D. Dhungana, K. Williams, L. Davis',
      venue: 'Workshop on Cloud Computing and Big Data (WCCBD)',
      year: '2023',
      type: 'workshop' as const,
      link: '#',
    },
    {
      title: 'Performance Analysis of Distributed Training Systems',
      authors: 'D. Dhungana, R. Martinez',
      venue: 'IEEE International Symposium on High Performance Computer Architecture',
      year: '2023',
      type: 'conference' as const,
      link: '#',
    },
  ];
  
  return (
    <section className="py-16 bg-[var(--color-bg-light)]" aria-labelledby="publications-heading">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 id="publications-heading" className="text-3xl md:text-4xl mb-12 text-[var(--color-text-primary)] text-center">
          Publications
        </h2>
        
        <div className="space-y-6">
          {publications.map((pub, index) => (
            <PublicationCard
              key={index}
              title={pub.title}
              authors={pub.authors}
              venue={pub.venue}
              year={pub.year}
              type={pub.type}
              link={pub.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
};