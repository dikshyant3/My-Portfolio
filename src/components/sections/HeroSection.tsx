import React from 'react';
import { Mail, Linkedin, Github, GraduationCap, FileDown } from 'lucide-react';

// Drop your PDF at public/resume.pdf, or point this at an external link
// (Google Drive, Dropbox, etc.) if you'd rather host it elsewhere.
const RESUME_URL = '/resume.pdf';

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
                src=""
                alt="Dikshyant Dhungana"
                className="w-full h-full object-cover"
              />
            </div>
            
            <h1 id="hero-heading" className="text-3xl md:text-4xl mb-2 text-[var(--color-text-primary)]">
              Dikshyant Dhungana
            </h1>
            
            <p className="text-lg text-[var(--color-text-secondary)] mb-4">PhD Student</p>
            
            <div className="mb-4 text-center md:text-left">
              <p className="text-sm text-[var(--color-text-muted)]">
                Department of Computer Science
              <br />
                Tennessee Technological University
              </p>
            </div>
            
            <div className="mb-6">
              <p className="mb-1">
                <strong>Graduate Research Assistant</strong>{' '}
                <a
                  href="https://www.maanakgupta.com/students"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--color-accent-blue)] hover:underline"
                >
                  [Research Lab]
                </a>
              </p>
              <p className="text-sm text-[var(--color-text-muted)] mb-1">
                AIEB (Room 231)
              </p>
              <p className="text-sm text-[var(--color-text-muted)] mb-1">
                1021 Stadium Drive
              </p>
              <p className="text-sm text-[var(--color-text-muted)]">
                Cookeville, TN 38501.
              </p>
            </div>
            
            <nav className="flex flex-col gap-3" aria-label="Social media links">
              <SocialLink
                icon={<Mail size={18} />}
                href="mailto:dikshyant@example.edu"
                label="dikshyantdhungana@gmail.com"
              />
              <SocialLink
                icon={<Linkedin size={18} />}
                href="https://www.linkedin.com/in/dikshyantdhungana/"
                label="LinkedIn Profile"
              />
              <SocialLink
                icon={<Github size={18} />}
                href="https://github.com/dikshyant3"
                label="GitHub Profile"
              />
              <SocialLink
                icon={<GraduationCap size={18} />}
                href="https://scholar.google.com/citations?user=-PkiYYIAAAAJ&hl=en"
                label="Google Scholar"
              />
            </nav>
          </div>
          
          {/* Right column - About */}
          <div className="space-y-6">
            <div>
              <h2 className="text-3xl md:text-4xl mb-6 text-[var(--color-text-primary)]">
                Hi, I am Dikshyant👋🏻
              </h2>
              
              <div className="space-y-4 text-[var(--color-text-secondary)] leading-relaxed">
                <p>
                  I'm a PhD student and Graduate Research Assistant in the Department of Computer
                  Science at Tennessee Technological University, where I joined Dr. Maanak Gupta's
                  research group in January 2026. My work sits at the intersection of artificial
                  intelligence and security — I study how modern AI systems fail under adversarial
                  pressure, and how to build models that hold up when someone is actively trying to
                  break them.
                </p>
                
                <p>
                  My research centers on adversarial machine learning: understanding attacks that
                  steer model behavior through carefully perturbed inputs, poisoned training data,
                  and queries that extract information a model was never meant to reveal. I'm
                  equally invested in the defensive side — robust training, threat modeling for ML
                  pipelines, and evaluation methods that measure genuine resilience rather than
                  robustness against a single known attack.
                </p>
                
                <p>
                  I came to this work from a background in software engineering and systems, which
                  shapes how I approach AI security: the vulnerabilities that matter most tend to
                  surface where models meet real deployments, not in isolated benchmarks. At
                  Tennessee Tech I'm glad to be part of a group that pairs rigorous research with
                  practical impact, through publications, open-source tooling, and engagement with
                  the wider security community.
                </p>
              </div>
            </div>
            
            <a
              href={RESUME_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--color-accent-blue)] text-white rounded-lg hover:bg-[var(--color-accent-blue-dark)] transition-colors shadow-md focus:outline-none focus:ring-2 focus:ring-[var(--color-accent-blue)] focus:ring-offset-2"
              aria-label="Download my resume as a PDF"
            >
              <FileDown size={18} aria-hidden="true" />
              Download my resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};