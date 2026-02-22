import React from 'react';
import { Code, Database, Cloud, Brain, Network, Terminal } from 'lucide-react';

interface SkillCategoryProps {
  title: string;
  skills: string[];
  icon: React.ReactNode;
}

const SkillCategory: React.FC<SkillCategoryProps> = ({ title, skills, icon }) => (
  <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
    <div className="flex items-center gap-3 mb-4">
      <div
        className="w-10 h-10 rounded-full bg-[var(--color-accent-blue)] text-white flex items-center justify-center"
        aria-hidden="true"
      >
        {icon}
      </div>
      <h3 className="text-xl text-[var(--color-text-primary)]">
        {title}
      </h3>
    </div>
    
    <div className="flex flex-wrap gap-2">
      {skills.map((skill, index) => (
        <span
          key={index}
          className="px-3 py-1 bg-blue-50 text-[var(--color-accent-blue)] rounded-full text-sm border border-blue-100"
        >
          {skill}
        </span>
      ))}
    </div>
  </div>
);

export const SkillsSection: React.FC = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      skills: ['Python', 'JavaScript', 'Java', 'C++', 'Go', 'TypeScript'],
      icon: <Code size={20} />,
    },
    {
      title: 'Cloud & Infrastructure',
      skills: ['AWS', 'Azure', 'Docker', 'Kubernetes', 'Terraform', 'CI/CD'],
      icon: <Cloud size={20} />,
    },
    {
      title: 'Databases',
      skills: ['PostgreSQL', 'MongoDB', 'Redis', 'Elasticsearch', 'MySQL'],
      icon: <Database size={20} />,
    },
    {
      title: 'Machine Learning',
      skills: ['TensorFlow', 'PyTorch', 'Scikit-learn', 'Keras', 'MLflow'],
      icon: <Brain size={20} />,
    },
    {
      title: 'Distributed Systems',
      skills: ['Kafka', 'RabbitMQ', 'Apache Spark', 'Hadoop', 'gRPC'],
      icon: <Network size={20} />,
    },
    {
      title: 'Tools & Frameworks',
      skills: ['React', 'Node.js', 'Django', 'Flask', 'FastAPI', 'Git'],
      icon: <Terminal size={20} />,
    },
  ];
  
  return (
    <section className="py-16 bg-white" aria-labelledby="skills-heading">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 id="skills-heading" className="text-3xl md:text-4xl mb-12 text-[var(--color-text-primary)] text-center">
          Skills & Expertise
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <SkillCategory
              key={index}
              title={category.title}
              skills={category.skills}
              icon={category.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};