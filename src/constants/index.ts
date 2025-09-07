export const skills = [
    { name: "HTML", logo: "/skills/html5.svg" },
    { name: "CSS", logo: "/skills/css.svg" },
    { name: "SASS", logo: "/skills/sass.svg" },
    { name: "Vue.js", logo: "/skills/vuejs.svg" },
    { name: "Pinia", logo: "/skills/pinia.svg" },
    { name: "React.js", logo: "/skills/react.svg" },
    { name: "Type Script", logo: "/skills/typescript.svg" },
    { name: "Node.js", logo: "/skills/nodejs.svg" },
    { name: "Jenkins", logo: "/skills/jenkins.svg" },
    { name: "AWS EC2", logo: "/skills/ec2.svg" }
];

export const quotes = [
    {
        text: "Great things in business are never done by one person. They’re done by a team of people.",
        author: "Steve Jobs",
    },
    {
        text: "Code is like humor. When you have to explain it, it’s bad.",
        author: "Cory House",
    },
    {
        text: "Simplicity is the soul of efficiency.",
        author: "Austin Freeman",
    },
    {
        text: "First, solve the problem. Then, write the code.",
        author: "John Johnson",
    },
];

export const projectData: Project[] = [
    { title: 'Threat Defender Collaboration Network', description: 'Developed key UI workflows for sharing rules, analytics, and files within a cyber threat defense network using Vue 3.', techStack: ['Vue 3', 'JavaScript', 'REST API', 'Cybersecurity'], projectUrl: '../../public/tdl.svg' },
    { title: 'Intelligence Requirement Sharing Platform', description: 'Implemented UI features for a Requirements-Driven Threat Intelligence Lifecycle, enhancing collaboration among security teams.', techStack: ['Vue 3', 'Pinia/Vuex', 'JavaScript', 'UI/UX'], projectUrl: '../../public/ir.svg' },
    { title: 'In-House Vue.js UI Library', description: 'Contributed to the development and maintenance of a reusable component library in Vue.js to standardize UI elements across applications.', techStack: ['Vue Js', 'Component Library', 'CSS/SCSS', 'Collaboration'], projectUrl: '../../public/storybook.png' },
    { title: '99tests Platform UI Enhancements', description: 'Built and improved user interfaces for the 99tests platform using AngularJS, focusing on user experience and interactivity.', techStack: ['AngularJS', 'JavaScript', 'HTML', 'CSS', 'Testing Platform'], projectUrl: '../../public/99test.webp' },
    { title: 'Portfolio Website (This Site)', description: 'Personal portfolio website built with React, TypeScript, Tailwind CSS, and Vite to showcase skills and experience.', techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Vite', 'React Router'], projectUrl: '../../public/port.png' }, // Update link
];

// Define type for project data
interface Project {
    title: string;
    description: string;
    imageUrl?: string;
    techStack: string[];
    projectUrl?: string | any;
}