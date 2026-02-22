import React from 'react';
import { Mail, Linkedin, Github, GraduationCap } from 'lucide-react';

interface SocialLinkProps {
  icon: React.ReactNode;
  href: string;
  label: string;
}

const SocialLink: React.FC<SocialLinkProps> = ({ icon, href, label }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-2 text-[var(--color-text-secondary)] hover:text-[var(--color-accent-blue)] transition-colors"
    aria-label={label}
  >
    <span className="w-5 h-5 flex items-center justify-center" aria-hidden="true">
      {icon}
    </span>
    <span className="text-sm">{label}</span>
  </a>
);

export const HeroSection: React.FC = () => {
  return (
    <section className="py-12 md:py-20 bg-white" aria-labelledby="hero-heading">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start">
          {/* Left column - Profile */}
          <div className="flex flex-col items-center md:items-start">
            <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden bg-gradient-to-br from-blue-100 to-blue-200 mb-6 shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop"
                alt="Dikshyant Dhungana"
                className="w-full h-full object-cover"
              />
            </div>
            
            <h1 id="hero-heading" className="text-3xl md:text-4xl mb-2 text-[var(--color-text-primary)]">
              Dikshyant Dhungana
            </h1>
            
            <p className="text-lg text-[var(--color-text-secondary)] mb-4">PhD Student</p>
            
            <div className="mb-4 text-center md:text-left">
              <a
                href="https://cs.example.edu"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--color-accent-blue)] hover:underline"
              >
                Department of Computer Science
              </a>
              <br />
              <a
                href="https://example.edu"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--color-accent-blue)] hover:underline"
              >
                Example State University
              </a>
            </div>
            
            <div className="mb-6">
              <p className="mb-1">
                <strong>Graduate Research Assistant</strong>{' '}
                <a
                  href="https://lab.example.edu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--color-accent-blue)] hover:underline"
                >
                  [Research Lab]
                </a>
              </p>
              <p className="text-sm text-[var(--color-text-muted)] mb-1">
                123 Research Building (Room 456)
              </p>
              <p className="text-sm text-[var(--color-text-muted)] mb-1">
                1234 University Avenue
              </p>
              <p className="text-sm text-[var(--color-text-muted)]">
                City, State 12345
              </p>
            </div>
            
            <nav className="flex flex-col gap-3" aria-label="Social media links">
              <SocialLink
                icon={<Mail size={18} />}
                href="mailto:dikshyant@example.edu"
                label="dikshyant@example.edu"
              />
              <SocialLink
                icon={<Linkedin size={18} />}
                href="https://linkedin.com/in/dikshyant-dhungana"
                label="LinkedIn Profile"
              />
              <SocialLink
                icon={<Github size={18} />}
                href="https://github.com/dikshyantdhungana"
                label="GitHub Profile"
              />
              <SocialLink
                icon={<GraduationCap size={18} />}
                href="https://scholar.google.com"
                label="Google Scholar"
              />
            </nav>
          </div>
          
          {/* Right column - About */}
          <div className="space-y-6">
            <div>
              <h2 className="text-3xl md:text-4xl mb-6 text-[var(--color-text-primary)]">
                Hi, I am
              </h2>
              
              <div className="space-y-4 text-[var(--color-text-secondary)] leading-relaxed">
                <p>
                  I'm a PhD student and Graduate Research Assistant in the Computer Science Department at Example State University. I joined the research lab in August 2024 and work under Dr. Jane Smith, contributing to innovative research in distributed systems, cloud computing, and machine learning infrastructure.
                </p>
                
                <p>
                  Building on my background in software engineering and system architecture, from projects like scalable web applications and real-time data processing systems, I bring my research experience to the lab. Previously, I worked as a Software Engineer at Tech Company, where I developed high-performance distributed systems.
                </p>
                
                <p>
                  At the Research Lab, I am excited to be part of a dynamic team that not only advances cutting-edge research in cloud-native architectures but also actively engages with the community through impactful publications and open-source contributions.
                </p>
              </div>
            </div>
            
            <a
              href="/vitae"
              onClick={(e) => {
                e.preventDefault();
                window.history.pushState({}, '', '/vitae');
                window.dispatchEvent(new PopStateEvent('popstate'));
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="inline-flex items-center justify-center px-6 py-3 bg-[var(--color-accent-blue)] text-white rounded-lg hover:bg-[var(--color-accent-blue-dark)] transition-colors shadow-md focus:outline-none focus:ring-2 focus:ring-[var(--color-accent-blue)] focus:ring-offset-2"
              aria-label="View my resume"
            >
              See my vitae
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};