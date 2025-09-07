import React from 'react';
import SkillBadge from './SkillBadge.tsx'; // Updated import

// Define props interface
interface ProjectCardProps {
    title: string;
    description: string;
    imageUrl?: string; // Optional image URL
    techStack: string[];
    projectUrl?: string; // Optional project URL
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, imageUrl, techStack, projectUrl }) => {
    const placeholderImageUrl: string = projectUrl as string;

    // Type the event handler for the image onError
    const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
        const target = e.target as HTMLImageElement; // Type assertion
        target.onerror = null; // Prevent infinite loop if placeholder also fails
        target.src = placeholderImageUrl;
    };

    return (
        <div className="bg-background-dark rounded-lg overflow-hidden shadow-lg hover:shadow-primary/30 transition-shadow duration-300 group animate-fade-in-up">
            <img
                className="w-full h-48 object-cover group-hover:opacity-90 transition-opacity duration-300"
                src={imageUrl || placeholderImageUrl}
                alt={`Screenshot of ${title}`}
                onError={handleImageError} // Use typed error handler
            />
            <div className="p-6">
                <h3 className="text-xl font-semibold text-text-light mb-2 group-hover:text-primary transition-colors duration-300">{title}</h3>
                <p className="text-text-dark text-sm mb-4">{description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                    {techStack.map((tech) => (
                        <SkillBadge key={tech} skill={tech} />
                    ))}
                </div>
                {projectUrl && projectUrl !== '#' && ( // Added check for '#' placeholder
                    <a
                        href={projectUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block text-sm text-primary hover:text-primary-light transition-colors duration-200 font-medium"
                    >
                        View Project <span aria-hidden="true">→</span>
                    </a>
                )}
            </div>
        </div>
    );
};

export default ProjectCard;