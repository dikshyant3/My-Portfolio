import React from 'react';
import { FileDown, Award, Briefcase, GraduationCap, BookOpen } from 'lucide-react';

export const VitaePage: React.FC = () => {
  return (
    <section className="py-16 bg-white" aria-labelledby="vitae-heading">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 id="vitae-heading" className="text-3xl md:text-4xl mb-4 text-[var(--color-text-primary)]">
            Curriculum Vitae
          </h1>
          <p className="text-lg text-[var(--color-text-secondary)] mb-6">
            Download my complete academic CV
          </p>
          <button
            onClick={() => alert('CV download would start here')}
            className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--color-accent-blue)] text-white rounded-lg hover:bg-[var(--color-accent-blue-dark)] transition-colors shadow-md focus:outline-none focus:ring-2 focus:ring-[var(--color-accent-blue)] focus:ring-offset-2"
            aria-label="Download CV as PDF"
          >
            <FileDown size={20} aria-hidden="true" />
            Download CV (PDF)
          </button>
        </div>

        {/* Quick Summary */}
        <div className="space-y-12">
          {/* Education Summary */}
          <div className="bg-[var(--color-bg-light)] rounded-lg p-6 shadow-md">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-[var(--color-accent-blue)] text-white flex items-center justify-center">
                <GraduationCap size={20} aria-hidden="true" />
              </div>
              <h2 className="text-2xl text-[var(--color-text-primary)]">Education</h2>
            </div>
            <div className="space-y-4">
              <div className="border-l-4 border-[var(--color-accent-blue)] pl-4">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="text-lg text-[var(--color-text-primary)]">
                      Ph.D. in Computer Science
                    </h3>
                    <p className="text-[var(--color-text-secondary)]">Example State University</p>
                  </div>
                  <span className="text-sm text-[var(--color-text-muted)]">2024 - Present</span>
                </div>
                <p className="text-sm text-[var(--color-text-secondary)]">
                  Advisor: Dr. Jane Smith | Focus: Distributed Systems & Cloud Computing
                </p>
              </div>

              <div className="border-l-4 border-gray-300 pl-4">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="text-lg text-[var(--color-text-primary)]">
                      M.S. in Computer Science
                    </h3>
                    <p className="text-[var(--color-text-secondary)]">Tech University</p>
                  </div>
                  <span className="text-sm text-[var(--color-text-muted)]">2021 - 2023</span>
                </div>
                <p className="text-sm text-[var(--color-text-secondary)]">
                  GPA: 3.9/4.0 | Thesis: Real-time Data Processing Systems
                </p>
              </div>

              <div className="border-l-4 border-gray-300 pl-4">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="text-lg text-[var(--color-text-primary)]">
                      B.E. in Computer Engineering
                    </h3>
                    <p className="text-[var(--color-text-secondary)]">Engineering College</p>
                  </div>
                  <span className="text-sm text-[var(--color-text-muted)]">2017 - 2021</span>
                </div>
                <p className="text-sm text-[var(--color-text-secondary)]">
                  First Class Honors | Merit Scholarship Recipient
                </p>
              </div>
            </div>
          </div>

          {/* Research Interests */}
          <div className="bg-[var(--color-bg-light)] rounded-lg p-6 shadow-md">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-[var(--color-accent-blue)] text-white flex items-center justify-center">
                <BookOpen size={20} aria-hidden="true" />
              </div>
              <h2 className="text-2xl text-[var(--color-text-primary)]">Research Interests</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                'Distributed Systems',
                'Cloud Computing',
                'Machine Learning Infrastructure',
                'Data Processing Systems',
                'System Performance Optimization',
                'Fault-Tolerant Systems',
              ].map((interest, index) => (
                <div key={index} className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-[var(--color-accent-blue)] rounded-full" aria-hidden="true"></span>
                  <span className="text-[var(--color-text-secondary)]">{interest}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Selected Publications */}
          <div className="bg-[var(--color-bg-light)] rounded-lg p-6 shadow-md">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-[var(--color-accent-blue)] text-white flex items-center justify-center">
                <BookOpen size={20} aria-hidden="true" />
              </div>
              <h2 className="text-2xl text-[var(--color-text-primary)]">Selected Publications</h2>
            </div>
            <div className="space-y-4">
              <div className="border-l-4 border-[var(--color-accent-blue)] pl-4">
                <p className="text-[var(--color-text-primary)] mb-1">
                  <strong>Efficient Resource Allocation in Distributed Cloud Environments</strong>
                </p>
                <p className="text-sm text-[var(--color-text-secondary)] mb-1">
                  D. Dhungana, J. Smith, and A. Johnson
                </p>
                <p className="text-sm text-[var(--color-text-muted)] italic">
                  International Conference on Distributed Computing Systems (ICDCS), 2024
                </p>
              </div>

              <div className="border-l-4 border-gray-300 pl-4">
                <p className="text-[var(--color-text-primary)] mb-1">
                  <strong>Scalable Machine Learning Infrastructure for Large-Scale Applications</strong>
                </p>
                <p className="text-sm text-[var(--color-text-secondary)] mb-1">
                  D. Dhungana, M. Brown
                </p>
                <p className="text-sm text-[var(--color-text-muted)] italic">
                  ACM Transactions on Computer Systems, 2024
                </p>
              </div>
            </div>
          </div>

          {/* Professional Experience */}
          <div className="bg-[var(--color-bg-light)] rounded-lg p-6 shadow-md">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-[var(--color-accent-blue)] text-white flex items-center justify-center">
                <Briefcase size={20} aria-hidden="true" />
              </div>
              <h2 className="text-2xl text-[var(--color-text-primary)]">Professional Experience</h2>
            </div>
            <div className="space-y-4">
              <div className="border-l-4 border-[var(--color-accent-blue)] pl-4">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="text-lg text-[var(--color-text-primary)]">
                      Graduate Research Assistant
                    </h3>
                    <p className="text-[var(--color-text-secondary)]">Example State University</p>
                  </div>
                  <span className="text-sm text-[var(--color-text-muted)]">Aug 2024 - Present</span>
                </div>
                <p className="text-sm text-[var(--color-text-secondary)]">
                  Conducting research in distributed systems and cloud computing under Dr. Jane Smith
                </p>
              </div>

              <div className="border-l-4 border-gray-300 pl-4">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="text-lg text-[var(--color-text-primary)]">
                      Software Engineer
                    </h3>
                    <p className="text-[var(--color-text-secondary)]">Tech Innovations Inc.</p>
                  </div>
                  <span className="text-sm text-[var(--color-text-muted)]">Nov 2023 - Jul 2024</span>
                </div>
                <p className="text-sm text-[var(--color-text-secondary)]">
                  Developed scalable microservices architecture for enterprise applications
                </p>
              </div>

              <div className="border-l-4 border-gray-300 pl-4">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="text-lg text-[var(--color-text-primary)]">
                      Research Intern
                    </h3>
                    <p className="text-[var(--color-text-secondary)]">Advanced Computing Research Institute</p>
                  </div>
                  <span className="text-sm text-[var(--color-text-muted)]">May 2023 - Oct 2023</span>
                </div>
                <p className="text-sm text-[var(--color-text-secondary)]">
                  Contributed to machine learning optimization projects
                </p>
              </div>
            </div>
          </div>

          {/* Honors & Awards */}
          <div className="bg-[var(--color-bg-light)] rounded-lg p-6 shadow-md">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-[var(--color-accent-blue)] text-white flex items-center justify-center">
                <Award size={20} aria-hidden="true" />
              </div>
              <h2 className="text-2xl text-[var(--color-text-primary)]">Honors & Awards</h2>
            </div>
            <ul className="space-y-3" role="list">
              <li className="flex items-start gap-3">
                <span className="text-[var(--color-accent-blue)] mt-1" aria-hidden="true">•</span>
                <div>
                  <p className="text-[var(--color-text-primary)]">Merit Scholarship - Tech University</p>
                  <p className="text-sm text-[var(--color-text-muted)]">2020</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[var(--color-accent-blue)] mt-1" aria-hidden="true">•</span>
                <div>
                  <p className="text-[var(--color-text-primary)]">Best Paper Award - Regional Computing Conference</p>
                  <p className="text-sm text-[var(--color-text-muted)]">2023</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[var(--color-accent-blue)] mt-1" aria-hidden="true">•</span>
                <div>
                  <p className="text-[var(--color-text-primary)]">Graduate Research Fellowship</p>
                  <p className="text-sm text-[var(--color-text-muted)]">2024</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
