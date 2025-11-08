import React from 'react';

interface SectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
  className?: string;
}

const Section: React.FC<SectionProps> = ({ id, title, children, className = '' }) => {
  return (
    <section id={id} className={`py-20 px-4 ${className}`}>
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16">{title}</h2>
        {children}
      </div>
    </section>
  );
};

export default Section;