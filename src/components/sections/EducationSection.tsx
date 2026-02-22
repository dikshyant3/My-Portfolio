import React from 'react';
import { GraduationCap, Award, BookOpen, Code } from 'lucide-react';

interface EducationCardProps {
  year: string;
  degree: string;
  institution: string;
  description: string;
  icon: React.ReactNode;
}

const EducationCard: React.FC<EducationCardProps> = ({ year, degree, institution, description, icon }) => (
  <div className="flex gap-6">
    {/* Timeline */}
    <div className="flex flex-col items-center">
      <div
        className="w-14 h-14 rounded-full bg-[var(--color-accent-blue)] text-white flex items-center justify-center flex-shrink-0 shadow-lg"
        role="presentation"
        aria-hidden="true"
      >
        {icon}
      </div>
      <div className="w-0.5 flex-1 bg-[var(--color-timeline-line)] mt-4"></div>
    </div>
    
    {/* Content */}
    <div className="flex-1 pb-12">
      <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
        <div className="flex items-center gap-3 mb-3">
          <span className="px-3 py-1 bg-[var(--color-accent-blue)] text-white rounded-full text-sm">
            {year}
          </span>
        </div>
        <h3 className="text-xl text-[var(--color-text-primary)] mb-1">
          {degree}
        </h3>
        <p className="text-[var(--color-accent-blue)] mb-3">{institution}</p>
        <p className="text-[var(--color-text-secondary)] leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  </div>
);

export const EducationSection: React.FC = () => {
  const education = [
    {
      year: '2024',
      degree: 'Ph.D. in Computer Science',
      institution: 'Example State University',
      description: 'Focusing on distributed systems, cloud computing, and machine learning infrastructure. Research on efficient resource allocation and scalable architectures.',
      icon: <GraduationCap size={24} />,
    },
    {
      year: '2023',
      degree: 'M.S. in Computer Science',
      institution: 'Tech University',
      description: 'Specialized in software engineering and distributed systems. Thesis on real-time data processing and stream analytics.',
      icon: <BookOpen size={24} />,
    },
    {
      year: '2021',
      degree: 'B.E. in Computer Engineering',
      institution: 'Engineering College',
      description: 'Graduated with honors. Focus on software development, algorithms, and system design. Completed capstone project on machine learning applications.',
      icon: <Code size={24} />,
    },
    {
      year: '2020',
      degree: 'Merit Scholarship',
      institution: 'Tech University',
      description: 'Awarded full scholarship for academic excellence and research contributions in computer science.',
      icon: <Award size={24} />,
    },
  ];
  
  return (
    <section className="py-16 bg-[var(--color-bg-light)]" aria-labelledby="education-heading">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 id="education-heading" className="text-3xl md:text-4xl mb-12 text-[var(--color-text-primary)] text-center">
          Education
        </h2>
        
        <div className="relative">
          {education.map((edu, index) => (
            <EducationCard
              key={index}
              year={edu.year}
              degree={edu.degree}
              institution={edu.institution}
              description={edu.description}
              icon={edu.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};