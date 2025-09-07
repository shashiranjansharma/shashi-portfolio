import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaDownload } from 'react-icons/fa';
import profileImg from '../assets/shashi.png';
import { skills, quotes } from '@/constants';
import '../App.css';
import pageAnimation from './pageAnimation';
const Home: React.FC = () => {



  React.useEffect(() => {
    pageAnimation();
  }, []);

  return (
    <>
      <div className="gradient-background">
        <div className="gradient-sphere sphere-1"></div>
        <div className="gradient-sphere sphere-2"></div>
        <div className="gradient-sphere sphere-3"></div>
        <div className="glow"></div>
        <div className="grid-overlay"></div>
        <div className="noise-overlay"></div>
        <div className="particles-container" id="particles-container"></div>
      </div>
      < div className="flex flex-col items-center justify-center text-center min-h-[calc(100vh-15rem)] animate-fade-in-up content-container" >
        <img
          src={profileImg || 'https://placehold.co/150x150/2563eb/ffffff?text=SRK'}
          alt="Shashi Ranjan Kumar"
          className="w-32 h-32 md:w-40 md:h-40 rounded-full my-6 border-4 border-primary shadow-lg animate-pulse-slow"
        />
        <h1 className="text-4xl md:text-6xl font-bold text-text-light mb-4">
          Shashi Ranjan Kumar
        </h1>
        <p className="text-xl md:text-2xl text-primary mb-8">
          Senior Software Engineer | UI Developer
        </p>
        <p className="max-w-2xl text-text-dark mb-10 text-base md:text-lg">
          Innovative developer with 9 years of experience crafting forward-thinking UI solutions. specializing in micro-frontend
          architecture, design systems, and performance-driven UIs. Passionate about building intuitive and efficient web applications. Based in Bengaluru, India.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            to="/projects"
            className="bg-primary hover:bg-primary-dark text-white font-semibold py-3 px-8 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:-translate-y-1 flex items-center justify-center"
          >
            View Projects <FaArrowRight className="ml-2 h-5 w-5" />
          </Link>
          <a
            href="/updatedResume.pdf" // Ensure resume is in public folder
            download="Shashi_Ranjan_Kumar_Resume.pdf"
            className="bg-background-dark hover:bg-gray-700 text-text-light font-semibold py-3 px-8 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:-translate-y-1 flex items-center justify-center border border-primary/50"
          >
            Download CV <FaDownload className="ml-2 h-5 w-5" />
          </a>
        </div>
      </div >
      {/* Skills Section */}
      <div className="mb-8 w-full flex flex-col mt-20 items-center justify-center">
        <h2 className="text-3xl font-bold mb-16">
          Skills & Tools
        </h2>
        {/* Slideshow container */}
        <div className="w-full overflow-hidden">
          {/* Carousel wrapper */}
          <div className="flex w-max animate-carousel">
            {[...skills, ...skills].map((skill, index) => (
              <div
                key={index}
                className="flex flex-col items-center bg-gray-800 p-4 rounded-lg shadow-md mx-4 min-w-[120px] hover:scale-110 transition-transform duration-300"
              >
                <img
                  src={skill.logo}
                  alt={skill.name}
                  className="w-12 h-12 mb-2"
                />
                <p className="text-sm">{skill.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Quotes Section */}
      <section className="w-full h-[25rem] py-20 bg-gray-900 text-white flex flex-col items-center">
        <h2 className="text-3xl font-bold mb-4">What Inspires Me</h2>
        <div className="relative w-full max-w-4xl h-[20rem] flex items-center justify-center overflow-hidden">
          <div className="animate-fade-carousel w-full text-center px-6">
            {quotes.map((q, i) => (
              <div
                key={i}
                className="absolute w-full opacity-0 animate-fade-slide"
                style={{ animationDelay: `${i * 6}s` }}
              >
                <p className="text-xl italic text-gray-300">“{q.text}”</p>
                <p className="mt-4 font-semibold">— {q.author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
