import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope, } from "react-icons/fa";

// Define type for social link items
interface SocialLink {
    name: string;
    icon: any;
    url: string;
}

const Footer: React.FC = () => {
    const currentYear: number = new Date().getFullYear();

    const socialLinks: SocialLink[] = [
        { name: 'LinkedIn', icon: FaLinkedin, url: "https://www.linkedin.com/in/shashiranjansharma/" },
        { name: 'GitHub', icon: FaGithub, url: "https://github.com/shashiranjansharma" },
        { name: 'Email', icon: FaEnvelope, url: 'mailto:shashiranjansharma@live.in' },
    ];

    return (
        <footer className="bg-background-dark text-text-dark py-6 mt-12">
            <div className="container mx-auto px-4 text-center">
                <div className="flex justify-center space-x-6 mb-4">
                    {socialLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`Link to ${link.name}`}
                            className="text-text-dark hover:text-primary transition-colors duration-200"
                        >
                            <link.icon className="h-6 w-6" /> {/* Render the icon component */}
                        </a>
                    ))}
                </div>
                <p className="text-sm">
                    &copy; {currentYear} Shashi Ranjan Kumar. All rights reserved.
                </p>
                <p className="text-xs mt-1">
                    Built with React, TypeScript, Tailwind CSS, and Vite.
                </p>
            </div>
        </footer>
    );
};

export default Footer;