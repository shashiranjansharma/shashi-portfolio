import React from 'react';

// Define props interface
interface SkillBadgeProps {
    skill: string;
}

const SkillBadge: React.FC<SkillBadgeProps> = ({ skill }) => {
    return (
        <span className="inline-block bg-primary/10 text-primary text-xs font-medium px-2.5 py-0.5 rounded-full border border-primary/30">
            {skill}
        </span>
    );
};

export default SkillBadge;