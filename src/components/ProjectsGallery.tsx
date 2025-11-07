import React from 'react';
import SplitTextComponent from './SplitText';

const ProjectsGallery: React.FC = () => {
  return (
    <div>
      <SplitTextComponent text="Projects Gallery" />
      <p className="text-center text-white">Projects will be displayed here.</p>
    </div>
  );
};

export default ProjectsGallery;
