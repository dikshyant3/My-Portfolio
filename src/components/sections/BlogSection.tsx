import React from 'react';
import { ArrowUpRight, PenLine } from 'lucide-react';

const MEDIUM_URL = 'https://medium.com/@dikshyantdhungana';

interface BlogPostProps {
  title: string;
  date: string;
  summary: string;
  tags: string[];
  link: string;
}

const BlogCard: React.FC<BlogPostProps> = ({ title, date, summary, tags, link }) => (
  <article className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-all hover:-translate-y-1 border-l-4 border-[var(--color-accent-blue)]">
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="group block focus:outline-none focus:ring-2 focus:ring-[var(--color-accent-blue)] focus:ring-offset-2 rounded"
    >
      <p className="text-sm text-[var(--color-text-muted)] mb-2">{date}</p>

      <h3 className="text-lg text-[var(--color-text-primary)] mb-3 group-hover:text-[var(--color-accent-blue)] transition-colors">
        {title}
        <ArrowUpRight
          size={16}
          className="inline-block ml-1 align-text-top text-[var(--color-accent-blue)]"
          aria-hidden="true"
        />
      </h3>

      <p className="text-[var(--color-text-secondary)] leading-relaxed mb-4">
        {summary}
      </p>

      <div className="flex flex-wrap gap-2">
        {tags.map((tag, index) => (
          <span
            key={index}
            className="px-3 py-1 bg-blue-50 text-[var(--color-accent-blue)] rounded-full text-sm border border-blue-100"
          >
            {tag}
          </span>
        ))}
      </div>
    </a>
  </article>
);

export const BlogSection: React.FC = () => {
  const posts = [
    {
      title: 'Understanding Model Context Protocol (MCP): The Backbone of Secure, Context-Aware AI Agents',
      date: 'July 2025',
      summary:
        'How MCP standardises the way AI applications talk to language models, and what its resources, prompts, tools, and sampling primitives mean for building agents that stay secure and context-aware.',
      tags: ['Agentic AI', 'LLMs', 'AI Security'],
      link: 'https://medium.com/data-and-beyond/understanding-model-context-protocol-mcp-the-backbone-of-secure-context-aware-ai-agents-603741a0c138',
    },
    {
      title: 'Kubernetes Demystified: Concepts on Services and Networking',
      date: 'January 2025',
      summary:
        'A walk through Kubernetes networking — how ClusterIP, NodePort, and LoadBalancer services differ, and where Ingress fits when you need to route external traffic into a cluster.',
      tags: ['Kubernetes', 'Cloud'],
      link: 'https://blog.devops.dev/kubernetes-demystified-concepts-on-services-and-networking-8b30fa4a2176',
    },
    {
      title: 'Decoding 101: VPC, Subnets, Internet Gateways, and Routing Tables in AWS',
      date: 'September 2024',
      summary:
        'The building blocks of an AWS Virtual Private Cloud explained from first principles, followed by a step-by-step build of a working VPC with its subnets, gateway, and routing configured.',
      tags: ['AWS', 'Cloud', 'Networking'],
      link: 'https://medium.com/@dikshyantdhungana/decoding-101-virtual-private-cloud-vpc-subnets-internet-gateways-routing-table-and-how-to-278e7c1d7a71',
    },
  ];

  return (
    <section className="py-16 bg-[var(--color-bg-light)]" aria-labelledby="blog-heading">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 id="blog-heading" className="text-3xl md:text-4xl mb-4 text-[var(--color-text-primary)]">
            Blog
          </h2>
          <p className="text-lg text-[var(--color-text-secondary)] max-w-2xl mx-auto">
            I write about AI security, agentic systems, and the cloud infrastructure they run on.
          </p>
        </div>

        <div className="space-y-6">
          {posts.map((post, index) => (
            <BlogCard
              key={index}
              title={post.title}
              date={post.date}
              summary={post.summary}
              tags={post.tags}
              link={post.link}
            />
          ))}
        </div>

        <div className="mt-10 text-center">
          <a
            href={MEDIUM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[var(--color-accent-blue)] hover:underline"
          >
            <PenLine size={18} aria-hidden="true" />
            Read all posts on Medium
          </a>
        </div>
      </div>
    </section>
  );
};
