import React from 'react';
import SkillBadge from '../components/SkillBadge.tsx'; // Updated import
import { FaBriefcase, FaGraduationCap, FaAward, FaCamera, FaPlane, FaMusic, FaCookie, FaTrophy } from 'react-icons/fa';
import profileImg from '../assets/shashi.png';


// Define interfaces for data structures
interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  description: string;
  icon: any;
}

interface AwardItem {
  name: string;
  issuer: string;
  date: string;
  icon: any;
}

interface ActivityItem {
  name: string;
  icon: any;
}

const About: React.FC = () => {
  const skills: string[] = [
    'JavaScript', 'HTML', 'CSS', 'SCSS', 'Typescript', 'Vue 3', 'Vue Js',
    'Pinia', 'Vuex', 'High Chart', 'Jenkins', 'Git', 'Node Js', 'Problem Solving', 'React', 'AngularJS'
  ];

  const experience: ExperienceItem[] = [
    {
      role: 'Senior Software Engineer - 1', company: 'Cyware Labs', period: 'Feb 2022 - Present', description: `Micro-Frontend Architecture (Vue): Spearheaded the transformation of flagship products (Collaborate and Intel Exchange) by adopting a micro-frontend architecture, using Module Federation and Vue 3, which improved scalability and reduced load times by 20%. Tooling & Performance(Vite / Webpack): Overhauled build tooling by introducing Vite for Vue and optimizing Webpack configurations, reducing deployment times by 40 %. Key Implementations: Threat Defender Library workflows for the threat defender collaboration network, enabling the sharing of rules, analytics, and files for cyber threat detection and defense.Developed Requirements - Driven Approach to Threat Intelligence Life cycle(Intelligence Requirement Sharing).`, icon: FaBriefcase
    },
    { role: 'Software Engineer - II', company: 'Cyware Labs', period: 'Feb 2018 - Feb 2022', description: 'Mentored junior developers, stayed updated with the Vue.js ecosystem, and contributed to an in-house Vue.js UI library for reusable components.', icon: FaBriefcase },
    { role: 'Software Engineer', company: '99tests.com', period: 'Aug 2017 - Feb 2018', description: 'Built user-friendly interfaces using AngularJS, JavaScript, HTML, and CSS, focusing on visually appealing and interactive web elements.', icon: FaBriefcase },
    { role: 'Test Engineer', company: 'Diduce Technology', period: 'Feb 2014 - Aug 2017', description: 'Ensured software quality through manual and automated testing, test planning, execution, and debugging.', icon: FaBriefcase }
  ];

  const awards: AwardItem[] = [
    { name: 'TEAM AWARD', issuer: 'Cyware Labs', date: 'June 2024', icon: FaTrophy },
    { name: 'STAR AWARD', issuer: 'Cyware Labs', date: 'February 2022', icon: FaAward },
  ];

  const activities: ActivityItem[] = [
    { name: 'Photography', icon: FaCamera },
    { name: 'Travel', icon: FaPlane },
    { name: 'Music', icon: FaMusic },
    { name: 'Cooking', icon: FaCookie },
  ];

  return (
    <div className="space-y-12 animate-fade-in-up mt-24 text-left">
      {/* About Me Section */}
      <section>
        <h2 className="text-3xl font-bold text-text-light mb-6 border-l-4 border-primary pl-4">About Me</h2>
        <div className="flex flex-col md:flex-row items-center gap-8 bg-background-dark p-6 rounded-lg shadow-md">
          <img
            src={profileImg || 'https://placehold.co/200x200/0f172a/cbd5e1?text=About+Me'}
            alt="Shashi Ranjan Kumar - Profile"
            className="w-40 h-40 rounded-full border-4 border-primary flex-shrink-0"
          />
          <p className="text-text-dark leading-relaxed">
            I'm Shashi Ranjan Kumar, a dedicated and innovative Senior Software Engineer based in Bengaluru, India, with 9 years of hands-on experience in UI development. I thrive on tackling complex challenges and developing forward-thinking solutions, particularly in creating intuitive and efficient user interfaces. My expertise spans across modern JavaScript frameworks like Vue.js (including Vue 3, Pinia, Vuex) and I also have experience with React and AngularJS. I possess strong analytical and problem-solving skills, coupled with a hardworking and adaptable approach. Always eager to learn and stay updated with the latest advancements in web technologies.
          </p>
        </div>
      </section>

      {/* Experience Section */}
      <section>
        <h2 className="text-3xl font-bold text-text-light mb-6 border-l-4 border-primary pl-4">Experience</h2>
        <div className="space-y-8 relative border-l-2 border-primary/30 ml-3 pl-8">
          {experience.map((job, index) => (
            <div key={index} className="relative group">
              <div className="absolute -left-[42px] top-1 h-6 w-6 bg-primary rounded-full flex items-center justify-center ring-4 ring-background-dark group-hover:scale-110 transition-transform duration-200">
                {/* Render the icon component directly */}
                <job.icon className="h-3 w-3 text-white" />
              </div>
              <div className="bg-background-dark p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                <h3 className="text-lg font-semibold text-text-light">{job.role}</h3>
                <p className="text-primary font-medium text-sm">{job.company}</p>
                <p className="text-text-dark text-xs mb-2">{job.period}</p>
                <p className="text-text-dark text-sm">{job.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section>
        <h2 className="text-3xl font-bold text-text-light mb-6 border-l-4 border-primary pl-4">Skills</h2>
        <div className="flex flex-wrap gap-3 bg-background-dark p-6 rounded-lg shadow-md">
          {skills.map((skill) => (
            <SkillBadge key={skill} skill={skill} />
          ))}
        </div>
      </section>

      {/* Education Section */}
      <section>
        <h2 className="text-3xl font-bold text-text-light mb-6 border-l-4 border-primary pl-4">Education</h2>
        <div className="bg-background-dark p-6 rounded-lg shadow-md flex items-center gap-4">
          <div className="flex-shrink-0 bg-primary/10 p-3 rounded-full border border-primary/30">
            <FaGraduationCap className="h-6 w-6 text-primary" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-text-light">B.Tech in Electronics and Communication</h3>
            <p className="text-primary font-medium text-sm">RIET, Jaipur</p>
            <p className="text-text-dark text-xs">July 2009 - July 2013</p>
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <section>
        <h2 className="text-3xl font-bold text-text-light mb-6 border-l-4 border-primary pl-4">Awards</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {awards.map((award, index) => (
            <div key={index} className="bg-background-dark p-4 rounded-lg shadow-md flex items-center gap-4 hover:bg-gray-800 transition-colors duration-200">
              <div className="flex-shrink-0 bg-accent/10 p-3 rounded-full border border-accent/30">
                <award.icon className="h-6 w-6 text-accent" />
              </div>
              <div>
                <h3 className="text-md font-semibold text-text-light">{award.name}</h3>
                <p className="text-secondary font-medium text-sm">{award.issuer}</p>
                <p className="text-text-dark text-xs">{award.date}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Activities/Hobbies Section */}
      <section>
        <h2 className="text-3xl font-bold text-text-light mb-6 border-l-4 border-primary pl-4">Interests & Activities</h2>
        <div className="flex flex-wrap gap-4 bg-background-dark p-6 rounded-lg shadow-md">
          {activities.map((activity) => (
            <div key={activity.name} className="flex items-center gap-2 bg-primary/10 text-primary text-sm font-medium px-3 py-1 rounded-full border border-primary/30">
              <activity.icon className="h-4 w-4" />
              <span>{activity.name}</span>
            </div>
          ))}
          <div className="flex items-center gap-2 bg-primary/10 text-primary text-sm font-medium px-3 py-1 rounded-full border border-primary/30">
            <span>🏸</span>
            <span>Badminton</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
