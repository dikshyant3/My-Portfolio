import React from 'react';
import { Briefcase, Code, Users, Lightbulb } from 'lucide-react';

interface ExperienceCardProps {
  year: string;
  title: string;
  company: string;
  description: string;
  icon: React.ReactNode;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ year, title, company, description, icon }) => (
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
          {title}
        </h3>
        <p className="text-[var(--color-accent-blue)] mb-3">{company}</p>
        <p className="text-[var(--color-text-secondary)] leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  </div>
);

export const ExperienceSection: React.FC = () => {
  const experiences = [
    {
      year: '2024',
      title: 'Graduate Research Assistant',
      company: 'Example State University',
      description: 'Conducting research in distributed systems and cloud computing. Working on novel approaches to resource optimization in large-scale computing environments.',
      icon: <Lightbulb size={24} />,
    },
    {
      year: '2023',
      title: 'Software Engineer',
      company: 'Tech Innovations Inc.',
      description: 'Developed scalable microservices architecture for enterprise applications. Led the implementation of CI/CD pipelines and improved deployment efficiency by 40%.',
      icon: <Code size={24} />,
    },
    {
      year: '2023',
      title: 'Research Intern',
      company: 'Advanced Computing Research Institute',
      description: 'Contributed to machine learning optimization projects. Implemented distributed training algorithms and conducted performance analysis on GPU clusters.',
      icon: <Briefcase size={24} />,
    },
    {
      year: '2021',
      title: 'Junior Software Developer',
      company: 'Digital Solutions Co.',
      description: 'Built responsive web applications using modern frameworks. Collaborated with cross-functional teams to deliver high-quality software products.',
      icon: <Users size={24} />,
    },
  ];
  
  return (
    <section className="py-16 bg-white" aria-labelledby="experience-heading">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 id="experience-heading" className="text-3xl md:text-4xl mb-12 text-[var(--color-text-primary)] text-center">
          Experiences
        </h2>
        
        <div className="relative">
          {experiences.map((exp, index) => (
            <ExperienceCard
              key={index}
              year={exp.year}
              title={exp.title}
              company={exp.company}
              description={exp.description}
              icon={exp.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};