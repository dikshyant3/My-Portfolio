import React from 'react';

interface TimelineItemProps {
  date: string;
  title: string;
  description: string;
  icon?: React.ReactNode;
}

export const TimelineItem: React.FC<TimelineItemProps> = ({ date, title, description, icon }) => {
  return (
    <div className="flex gap-6 group">
      {/* Timeline line and dot */}
      <div className="flex flex-col items-center">
        <div
          className="w-12 h-12 rounded-full bg-[var(--color-accent-blue)] text-white flex items-center justify-center flex-shrink-0 shadow-md group-hover:scale-110 transition-transform"
          role="presentation"
        >
          {icon || (
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <circle cx="12" cy="12" r="3" />
            </svg>
          )}
        </div>
        <div className="w-0.5 h-full bg-[var(--color-timeline-line)] min-h-[60px] group-last:hidden"></div>
      </div>
      
      {/* Content */}
      <div className="flex-1 pb-8">
        <time className="text-sm text-[var(--color-text-muted)] mb-2 block" dateTime={date}>
          {date}
        </time>
        <h3 className="text-lg text-[var(--color-text-primary)] mb-2">
          {title}
        </h3>
        <p className="text-[var(--color-text-secondary)] leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
};
