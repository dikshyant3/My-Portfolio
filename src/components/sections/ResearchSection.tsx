import React from 'react';
import { Sparkles, ShieldAlert, Bot, Cloud } from 'lucide-react';

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
      title: 'AI Security',
      description: 'The core of my doctoral research: understanding how machine learning models fail when someone is deliberately trying to break them, and what practical defenses hold up outside of controlled benchmarks.',
      icon: <ShieldAlert size={24} />,
      topics: [
        'Adversarial examples and evasion attacks',
        'Data poisoning and training-time threats',
        'Adversarial training and model robustness',
        'Machine learning for malware classification',
      ],
    },
    {
      title: 'Agentic AI',
      description: 'Exploring systems where language models plan, call tools, and act over multiple steps \u2014 and the new attack surface that autonomy creates once a model can take real actions on a user\u2019s behalf.',
      icon: <Bot size={24} />,
      topics: [
        'Multi-agent orchestration and tool use',
        'Trust boundaries in autonomous agents',
        'Indirect prompt injection through external content',
        'Guardrails and human oversight',
      ],
    },
    {
      title: 'Large Language Models',
      description: 'Studying how large language models behave, where they break down, and what it takes to deploy them responsibly \u2014 from fine-tuning and retrieval-augmented generation to evaluating outputs you can actually trust.',
      icon: <Sparkles size={24} />,
      topics: [
        'Fine-tuning and parameter-efficient adaptation',
        'Retrieval-augmented generation (RAG)',
        'Prompt injection and jailbreak resistance',
        'Evaluation and benchmarking of model outputs',
      ],
    },
    {
      title: 'Cloud Computing',
      description: 'Looking at how AI workloads are trained, served, and secured in the cloud \u2014 where models meet real infrastructure, and where deployment choices quietly become security decisions.',
      icon: <Cloud size={24} />,
      topics: [
        'Securing ML workloads on cloud platforms',
        'Containerized training and model serving',
        'Access control for models and data',
        'Scalable inference infrastructure',
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
            My research sits at the intersection of artificial intelligence and security — studying how large
            language models and agentic systems behave under adversarial pressure, and how to deploy them
            safely on real cloud infrastructure.
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