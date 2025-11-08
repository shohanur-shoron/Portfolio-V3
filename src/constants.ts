import React from 'react';

export interface ResearchItem {
  title: string;
  description: string;
  visual: React.ReactNode;
  pdfLink: string;
  status: 'Published' | 'In Review' | 'Ongoing';
  paperLink?: string;
}

export const researchItems: ResearchItem[] = [
    {
        title: 'Bangla TTS Dataset Visualization',
        description: 'The dataset comprises 183 hours of audio from 40 speakers. The chart below shows the distribution of audio clips among speaker groups, highlighting the dataset\'s scale and diversity.',
        visual: React.createElement('img', { src: 'https://picsum.photos/seed/map/600/300', className:'rounded-lg shadow-md w-full h-auto' }),
        pdfLink: '/tts_dataset_paper.pdf',
        status: 'Published',
        paperLink: 'https://example.com/paper1'
    },
    {
        title: 'Flood Prediction Review',
        description: 'Our review consolidates findings on using ML models like RNNs and CNNs with satellite data (e.g., Sentinel, Landsat) for creating high-resolution flood maps and early warning systems in Bangladesh.',
        visual: React.createElement('img', { src: 'https://picsum.photos/seed/map/600/300', className:'rounded-lg shadow-md w-full h-auto' }),
        pdfLink: '/flood_prediction_review.pdf',
        status: 'In Review',
        paperLink: 'https://example.com/paper2'
    },
    {
        title: 'Aquaculture Climate Risk',
        description: 'Analysis shows a strong negative correlation between prolonged high temperatures and fish yield. This research highlights the vulnerability of the aquaculture sector to climate change.',
        visual: React.createElement('img', { src: 'https://picsum.photos/seed/fish/600/300', className:'rounded-lg shadow-md w-full h-auto' }),
        pdfLink: '/aquaculture_risk_study.pdf',
        status: 'Ongoing',
        paperLink: 'https://example.com/paper3'
    },
];