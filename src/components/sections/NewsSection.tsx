import React from 'react';

const newsData = [
  {
    date: 'Jan 2026',
    content: 'Joined the Ph.D. program in Computer Science at Tennessee Technological University as a Graduate Research Assistant, working with Dr. Maanak Gupta on adversarial machine learning and the security of AI systems.',
  },
  {
    date: 'Jun 2025',
    content: 'Started as a Mobile Application Developer Fellow at Gritfeat Solutions Pvt. Ltd., Kathmandu, Nepal, building production mobile applications.',
  },
  {
    date: 'Apr 2024',
    content: 'Completed my Bachelor of Engineering in Computer Engineering at Western Regional Campus, Tribhuvan University, Nepal.',
  },
];

export const NewsSection: React.FC = () => {
  return (
    <section className="py-16 bg-white" aria-labelledby="news-heading">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 id="news-heading" className="text-3xl md:text-4xl mb-12 text-[var(--color-text-primary)] text-center">
          News
        </h2>
        
        <div className="space-y-6">
          {newsData.map((item, index) => (
            <div 
              key={index} 
              className={`flex flex-col md:flex-row gap-2 md:gap-8 pb-6 ${index !== newsData.length - 1 ? 'border-b border-gray-100' : ''}`}
            >
              <div className="md:w-32 flex-shrink-0 text-sm text-[var(--color-text-muted)] font-medium">
                {item.date}
              </div>
              <div className="flex-1 text-[var(--color-text-secondary)] text-sm leading-relaxed">
                {item.content}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};