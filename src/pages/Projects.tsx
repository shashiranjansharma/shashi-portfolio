import React from 'react';
import ProjectCard from '../components/ProjectCard.tsx'; // Updated import
import { projectData } from '@/constants/index.ts';

const Projects: React.FC = () => {

  return (
    <div className="animate-fade-in-up mt-24">
      <h2 className="text-3xl font-bold text-text-light mb-8 border-l-4 border-primary pl-4">My Projects</h2>
      <p className="text-text-dark mb-10 max-w-3xl">
        Here are some of the key projects and initiatives I've worked on, showcasing my skills in UI development, framework implementation, and collaborative problem-solving.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectData.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            imageUrl={project.imageUrl}
            techStack={project.techStack}
            projectUrl={project.projectUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;