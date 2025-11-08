import React from 'react';
import { researchItems } from '../constants';
import { DownloadIcon } from './ui/icons';
import ScrollFloat from './ui/ScrollFloat';

interface ResearchItem {
  title: string;
  description: string;
  visual: React.ReactNode;
  pdfLink: string;
  status: 'Published' | 'In Review' | 'Ongoing';
  paperLink?: string;
}

const Research: React.FC = () => {
  // Function to determine status tag styling
  const getStatusStyle = (status: string) => {
    switch(status) {
      case 'Published':
        return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100';
      case 'In Review':
        return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-100';
      case 'Ongoing':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-100';
    }
  };

  return (
    <div>
      <ScrollFloat
        animationDuration={0.7}
        ease='back.inOut(2)'
        scrollStart='center bottom+=50%'
        scrollEnd='bottom bottom-=40%'
        stagger={0.04}
        textClassName="font-extrabold"
      >
        Research Highlights
      </ScrollFloat>

      <section id="research" className="min-h-screen flex items-center justify-center px-4 py-20">
        <div className="w-full max-w-7xl">
          <div className="mb-16 text-center space-y-4 animate-fade-in-up">
            <div className="w-16 h-0.5 bg-accent mx-auto" />
          </div>

          <div className="space-y-16">
            {researchItems.map((item: ResearchItem, index) => (
              <div key={index} className="flex flex-col md:flex-row items-center gap-8 even:md:flex-row-reverse">
                <div className={`md:w-1/2 text-left ${index % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}>
                  {item.paperLink ? (
                    <a href={item.paperLink} target="_blank" rel="noopener noreferrer" className="text-2xl font-bold text-foreground hover:underline block mb-2">
                      {item.title}
                    </a>
                  ) : (
                    <h3 className="text-2xl font-bold text-foreground mb-2">{item.title}</h3>
                  )}
                  <p className="text-muted-foreground mb-4">{item.description}</p>
                  <div className={`flex items-center gap-3 ${index % 2 === 0 ? 'md:justify-start justify-start' : 'md:justify-end justify-start'}`}>
                    {item.pdfLink && (
                      <a href={item.pdfLink} download className="inline-flex items-center gap-2 text-accent font-semibold hover:underline">
                        <DownloadIcon className="w-5 h-5" />
                        Download PDF
                      </a>
                    )}
                    <span className={`text-xs px-2 py-1 rounded-full ${getStatusStyle(item.status)}`}>
                      {item.status}
                    </span>
                  </div>
                </div>
                <div className="md:w-1/2 overflow-hidden rounded-lg">
                  <div className="transition-transform duration-300 hover:scale-105">
                    {item.visual}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Research;