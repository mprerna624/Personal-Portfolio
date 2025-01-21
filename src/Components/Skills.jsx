import React, { useEffect, useState } from 'react';
import { Server, Wrench, Layout } from 'lucide-react';
import SectionHeading from './SectionHeading';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);

  const skills = [
    {
      category: "Frontend Development",
      icon: <Layout className="w-6 h-6" />,
      items: [
        "HTML",
        "CSS",
        "JavaScript",
        "React JS",
        "Redux",
        "Context API",
        "React-Hook-Form",
        "REST APIs",
        "Bootstrap",
        "Tailwind CSS",
      ]
    },
    {
      category: "Backend Development",
      icon: <Server className="w-6 h-6" />,
      items: [
        "Node.js",
        "Express.js",
        "MongoDB",
        "Passport.js",
        "WebSockets(Socket.io)",
        "EJS Templating Engine",
      ]
    },
    {
      category: "Development Tools",
      icon: <Wrench className="w-6 h-6" />,
      items: [
        "Git",
        "GitHub",
        "VS Code",
        "npm",
        "TinyMCE Real-Time Text Editor",
        "Appwrite(Backend As a Service)",
        "Vercel", 
        "Render",
        "EmailJS"
      ]
    }
  ];

  useEffect(() => {
    // Check if viewport is mobile size and set appropriate threshold
    const isMobile = window.matchMedia('(max-width: 767px)').matches;
    const threshold = isMobile ? 0.1 : 0.3;

    // Create single observer with conditional threshold
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold }
    );

    const skillCards = document.querySelector('.cards-container');
    if (skillCards) {
      observer.observe(skillCards);
    }

    return () => {
      if (skillCards) {
        observer.unobserve(skillCards);
      }
    };
  }, []);

  return (
  <>
    <style>
      {`
        .cards-container {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(min(100%, 350px), 1fr));
          gap: 2rem;
          width: 100%;
        }

        @media (min-width: 768px) {
          .cards-container {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (min-width: 1024px) {
          .cards-container {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        .skill-card {
          opacity: 0;
          transform-origin: left center;
          will-change: transform, opacity;
        }

        /* Desktop and Tablet Layout Animation (2+ columns) */
        @media (min-width: 768px) {
          .skill-card {
            transform: translateX(-100%);
          }

          .deal-cards .skill-card {
            animation: dealFromLeft 0.8s ease-out forwards;
            animation-delay: calc(var(--card-index) * 200ms);
          }

          @keyframes dealFromLeft {
            0% {
              opacity: 0;
              transform: translateX(-100%);
            }
            100% {
              opacity: 1;
              transform: translateX(0);
            }
          }
        }

        /* Mobile Layout Animation (1 column) */
        @media (max-width: 767px) {
          .skill-card {
            transform: translateY(-100%);
          }

          .deal-cards .skill-card {
            animation: dealFromTop 0.8s ease-out forwards;
            animation-delay: calc(var(--card-index) * 200ms);
          }

          @keyframes dealFromTop {
            0% {
              opacity: 0;
              transform: translateY(-100%);
            }
            100% {
              opacity: 1;
              transform: translateY(0);
            }
          }
        }
      `}
    </style>

    <section id="skills" className="py-16 dark:bg-[var(--blue)] transition-colors duration-300">

      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16 space-y-5">
          <SectionHeading lightColor="blue" darkColor="amber">Technical Skills</SectionHeading>

          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Experienced in both frontend and backend development, with a passion for creating responsive and efficient web applications.
          </p>
        </div>
        
        <div className={`cards-container ${isVisible ? 'deal-cards' : ''}`}>
          {skills.map((skillGroup, index) => (
            <div 
              key={skillGroup.category}
              className="skill-card bg-white dark:bg-[var(--black)] rounded-xl shadow-lg p-6 
                       hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              style={{
                '--card-index': index,
              }}
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="text-[var(--maroon)] dark:text-[var(--amber)]">
                  {skillGroup.icon}
                </span>
                <h3 className="text-xl font-semibold text-[var(--blue)] dark:text-[var(--offWhite)]">
                  {skillGroup.category}
                </h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {skillGroup.items.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 rounded-lg bg-[var(--lightYellow)] dark:bg-[var(--darkNavbarBg)] 
                             text-[var(--blue)] dark:text-[var(--lightYellow)] text-sm font-medium
                             hover:bg-[var(--amber)] dark:hover:bg-[var(--maroon)] 
                             transition-colors duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  </>
  );
};

export default Skills;