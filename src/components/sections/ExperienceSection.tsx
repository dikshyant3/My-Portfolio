import React from 'react';
import { Smartphone, FlaskConical } from 'lucide-react';

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
      year: 'Jan 2026 - Present',
      title: 'Graduate Research Assistant',
      company: 'Tennessee Technological University, Cookeville, TN',
      description: 'Getting started in AI security research with Dr. Maanak Gupta\u2019s group. Building foundations in machine learning and model robustness \u2014 working through the core literature, reproducing baseline attacks and defenses from published work, and setting up the training and evaluation pipelines the group\u2019s experiments run on.',
      icon: <FlaskConical size={24} />,
    },
    {
      year: 'Jun 2025 - Dec 2025',
      title: 'Mobile Application Developer Fellow',
      company: 'Gritfeat Solutions Pvt. Ltd., Kathmandu, Nepal',
      description: 'Built and shipped production mobile applications as part of the company\u2019s developer fellowship, working across the full delivery cycle from feature implementation to release. Hands-on experience with the engineering practices \u2014 testing, code review, and deployment \u2014 that carry directly into building reliable AI systems.',
      icon: <Smartphone size={24} />,
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