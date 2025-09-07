import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const contacts = [
  {
    name: "LinkedIn",
    icon: <FaLinkedin />,
    link: "https://www.linkedin.com/in/shashiranjansharma/",
  },
  {
    name: "GitHub",
    icon: <FaGithub />,
    link: "https://github.com/shashiranjansharma",
  },
  {
    name: "LeetCode",
    icon: <SiLeetcode />,
    link: "https://leetcode.com/u/shashiranjansharma/",
  },
  {
    name: "Email",
    icon: <FaEnvelope />,
    link: "mailto:shashiranjansharma@live.in",
  },
];

const Contact = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col justify-center items-center px-6 py-16">
      {/* Heading */}
      <h1 className="text-3xl md:text-4xl font-bold mb-4 flex items-center gap-2">
        ✦ Let’s Connect!
      </h1>

      <p className="text-gray-400 max-w-2xl text-center mb-12">
        If you’re looking to collaborate, build something awesome, or just talk
        tech, I’d love to hear from you!
      </p>

      {/* Contact Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 mb-16">
        {contacts.map((item, i) => (
          <a
            key={i}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="relative group bg-black/40 hover:bg-black/70 rounded-xl p-10 flex flex-col items-center justify-center shadow-lg transition transform hover:scale-105"
          >
            {/* Hover floating label */}
            <span className="absolute -top-10 opacity-0 group-hover:opacity-100 bg-black px-4 py-1 rounded-full text-sm transition-all duration-300">
              {item.name}
            </span>

            {/* Icon wrapper */}
            <div className="relative flex items-center justify-center">
              {/* Glowing line (centered on icon) */}
              <span className="absolute -top-10 left-1/2 transform -translate-x-1/2 w-px h-10 bg-gradient-to-b from-transparent via-cyan-400 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-pulse"></span>

              {/* Icon with tilt + glow on hover */}
              <div className="text-gray-400 text-6xl group-hover:text-white group-hover:rotate-6 group-hover:drop-shadow-[0_0_15px_#22d3ee] transition-all duration-500">
                {item.icon}
              </div>
            </div>

            {/* Title */}
            <span className="mt-4 font-semibold">{item.name}</span>
          </a>
        ))}
      </div>

      {/* Quote */}
      <blockquote className="text-gray-400 italic text-center max-w-xl">
        "Great things in business are never done by one person. They’re done by a team of people."
      </blockquote>
      <p className="mt-2 font-semibold">— Steve Jobs</p>
    </div>
  );
};

export default Contact;
