import React from 'react';
import { Cpu, Cloud, Network, Database } from 'lucide-react';

interface ResearchAreaProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  topics: string[];
}

const ResearchAreaCard: React.FC<ResearchAreaProps> = ({ title, description, icon, topics }) => (
  <article className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-all hover:-translate-y-1">
    <div className="flex items-start gap-4 mb-4">
      <div
        className="w-12 h-12 rounded-lg bg-gradient-to-br from-[var(--color-accent-blue)] to-[var(--color-accent-blue-dark)] text-white flex items-center justify-center flex-shrink-0 shadow-md"
        aria-hidden="true"
      >
        {icon}
      </div>
      <div className="flex-1">
        <h3 className="text-xl text-[var(--color-text-primary)] mb-2">
          {title}
        </h3>
      </div>
    </div>
    
    <p className="text-[var(--color-text-secondary)] leading-relaxed mb-4">
      {description}
    </p>
    
    <div className="space-y-2">
      <h4 className="text-sm text-[var(--color-text-muted)] uppercase tracking-wider">
        Key Topics
      </h4>
      <ul className="space-y-1" role="list">
        {topics.map((topic, index) => (
          <li
            key={index}
            className="flex items-start gap-2 text-sm text-[var(--color-text-secondary)]"
          >
            <span className="text-[var(--color-accent-blue)] mt-1" aria-hidden="true">•</span>
            <span>{topic}</span>
          </li>
        ))}
      </ul>
    </div>
  </article>
);

export const ResearchSection: React.FC = () => {
  const researchAreas = [
    {
      title: 'Distributed Systems',
      description: 'Investigating scalable architectures and efficient resource management in large-scale distributed computing environments. Focus on consensus algorithms, fault tolerance, and system reliability.',
      icon: <Network size={24} />,
      topics: [
        'Consensus protocols and coordination',
        'Fault-tolerant system design',
        'Load balancing and resource scheduling',
        'Distributed synchronization mechanisms',
      ],
    },
    {
      title: 'Cloud Computing',
      description: 'Exploring optimization techniques for cloud infrastructure, including serverless computing, container orchestration, and multi-cloud deployment strategies.',
      icon: <Cloud size={24} />,
      topics: [
        'Serverless architecture optimization',
        'Container orchestration at scale',
        'Multi-cloud resource management',
        'Cost-efficient cloud deployment',
      ],
    },
    {
      title: 'Machine Learning Infrastructure',
      description: 'Developing frameworks and tools for efficient training and deployment of machine learning models in distributed environments with focus on GPU utilization and model serving.',
      icon: <Cpu size={24} />,
      topics: [
        'Distributed training optimization',
        'Model serving and inference',
        'GPU resource allocation',
        'AutoML and hyperparameter tuning',
      ],
    },
    {
      title: 'Data Processing Systems',
      description: 'Building high-throughput data processing pipelines for real-time analytics, stream processing, and batch processing workloads with emphasis on low latency.',
      icon: <Database size={24} />,
      topics: [
        'Stream processing architectures',
        'Real-time data analytics',
        'Data pipeline optimization',
        'Event-driven systems',
      ],
    },
  ];
  
  return (
    <section className="py-16 bg-white" aria-labelledby="research-heading">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 id="research-heading" className="text-3xl md:text-4xl mb-4 text-[var(--color-text-primary)]">
            Research Interests
          </h2>
          <p className="text-lg text-[var(--color-text-secondary)] max-w-3xl mx-auto">
            My research focuses on building scalable, efficient, and reliable systems for modern computing challenges, 
            with applications in distributed systems, cloud computing, and machine learning infrastructure.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          {researchAreas.map((area, index) => (
            <ResearchAreaCard
              key={index}
              title={area.title}
              description={area.description}
              icon={area.icon}
              topics={area.topics}
            />
          ))}
        </div>
      </div>
    </section>
  );
};