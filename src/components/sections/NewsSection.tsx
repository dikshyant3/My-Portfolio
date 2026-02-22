import React from 'react';

const newsData = [
  {
    date: 'August 2024',
    content: 'Joined the PhD program in Computer Science at Kent State University and began working as a Graduate Research Assistant.',
  },
  {
    date: 'November 2022',
    content: 'Started as a Part-time Lecturer at Sagarmatha Engineering College, Tribhuvan University, Kathmandu, Nepal.',
  },
  {
    date: 'October 2022',
    content: 'Published a paper and presented a poster at the Institute of Engineering Graduate Conference, Nepal.',
  },
  {
    date: 'May 2022',
    content: 'Joined Himalaya College of Engineering, Tribhuvan University as an "Assistant Lecturer" and started teaching courses "EX603 - Computer Graphics", "SH553 - Numerical methods" and "CSC109 - Introduction to IT"',
  },
  {
    date: 'May 2021',
    content: 'Completed the undergraduate thesis "English Sign Gesture Recognition using CNN" and successfully defended.',
  },
  {
    date: 'April 2021',
    content: 'Voulunteered at the "Himalaya Electronics and Computer Club (HECC)" at Himalaya College of Engineering, IOE, Tribhuvan University.',
  },
  {
    date: 'September 2020',
    content: 'Completed the undergraduate project "Colleges Recommendation System using Collaborative Filtering" and successfully defended the project.',
  },
  {
    date: 'November 2017',
    content: 'Awarded Partial Scholarship for B.E. in Computer Engineering at Tribhuvan University.',
  },
];

export const NewsSection: React.FC = () => {
  return (
    <section className="py-16 bg-white" aria-labelledby="news-heading">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 id="news-heading" className="text-3xl font-bold mb-8 text-[#333333] text-center">
          News
        </h2>
        
        <div className="space-y-6">
          {newsData.map((item, index) => (
            <div 
              key={index} 
              className={`flex flex-col md:flex-row gap-2 md:gap-8 pb-6 ${index !== newsData.length - 1 ? 'border-b border-gray-100' : ''}`}
            >
              <div className="md:w-32 flex-shrink-0 text-sm text-gray-500 font-medium">
                {item.date}
              </div>
              <div className="flex-1 text-[#4a4a4a] text-sm leading-relaxed">
                {item.content}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};