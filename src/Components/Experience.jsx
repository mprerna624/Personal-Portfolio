import React from 'react';
import { ChevronRight, ExternalLink, Download, MessageCircle } from 'lucide-react';
import SectionHeading from './SectionHeading';
import resume from "../assets/Resume_Prerna_Mittal.pdf";

const Experience = () => {
  const experiences = [
    {
      title: "Frontend Developer Intern",
      company: "BeyondChats",
      website: null,
      period: "Feb 2025 - May 2025",
      achievements: [
        "Developed a responsive onboarding site from scratch with Vite, Tailwind CSS v4 & Shadcn/UI library",
        "Led migration of a Dashboard project from Create React App + MUI v6 to Vite, upgraded to MUI v7, and spearheaded the team's transition off Material UI toward Tailwind CSS & Shadcn/UI through incremental component refactoring",
        "Translated Figma designs into production-ready React components, applying Tailwind CSS & Shadcn/UI for a modern, consistent UI",
        "Collaborated with designers, backend engineers & QA to ensure pixel-perfect, cross-browser experiences"
      ],
      techStack: ["Vite", "Tailwind CSS", "Shadcn/UI", "React JS", "Material UI"]
    },
    {
      title: "Freelance Web Developer",
      company: "Jan Kalyan Jan Sahyog Foundation",
      website: "https://www.jkjsfoundation.com",
      period: "",
      achievements: [
        "Led end-to-end development of the foundation's website, enhancing their digital presence",
        "Built responsive and accessible web pages using React and Tailwind CSS",
        "Configured deployment pipeline and managed domain setup via Vercel and GoDaddy"
      ],
      techStack: ["Vite", "React JS", "Tailwind CSS", "EmailJS", "Vercel"]
    }
  ];

  return (
    <section id='experience' className="w-full py-20 bg-[var(--lightSectionBg)] dark:bg-[var(--blue)] transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4">
        <SectionHeading lightColor="blue" darkColor="amber" className='mb-10'>Experience</SectionHeading>

        {/* Experience Cards */}
        <div className="space-y-8 mb-12">
          {experiences.map((exp, index) => (
            <div key={index} className="relative">
              <div className="bg-white dark:bg-[var(--black)] rounded-xl p-8 
                shadow-[0_10px_20px_rgba(0,0,0,0.08)] dark:shadow-[0_10px_20px_rgba(0,0,0,0.3)]
                transform transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.12)]
                dark:hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)] group">
                
                {/* Animated Corner Decorations */}
                <div className="absolute top-0 left-0 w-20 h-20 border-t-4 border-l-4 
                  border-[var(--amber)] rounded-tl-xl opacity-60 group-hover:opacity-100 
                  transition-all duration-500 group-hover:scale-105 group-hover:border-[var(--maroon)]" />
                <div className="absolute bottom-0 right-0 w-20 h-20 border-b-4 border-r-4 
                  border-[var(--amber)] rounded-br-xl opacity-60 group-hover:opacity-100 
                  transition-all duration-500 group-hover:scale-105 group-hover:border-[var(--maroon)]" />
                
                <div className="relative z-10">
                  <div className="space-y-2 mb-6">
                    <h3 className="text-2xl font-bold text-[var(--maroon)] dark:text-[var(--amber)]">
                      {exp.title}
                    </h3>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-center gap-2 sm:gap-4">
                        <h4 className="text-lg text-[var(--blue)] dark:text-[var(--lightYellow)]">
                          {exp.company}
                        </h4>
                        {exp.period && (
                          <span className="text-sm text-[var(--blue)] dark:text-[var(--lightYellow)] sm:mt-1">
                            {exp.period}
                          </span>
                        )}
                      </div>
                      {exp.website && (
                        <a href={exp.website} target='_blank'
                          className="inline-flex items-center max-w-fit px-6 py-2 rounded-full whitespace-nowrap
                            bg-[var(--amber)] text-[var(--blue)] hover:bg-[var(--maroon)] hover:text-white
                            transition-all duration-300 hover:-translate-y-1 shadow-md hover:shadow-lg
                            group/button text-sm sm:text-base">
                          <span>Visit Website</span>
                          <ExternalLink className="w-4 h-4 ml-2 transition-transform duration-300 
                            group-hover/button:translate-x-1" />
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Key Achievements */}
                  <div className="space-y-4 mb-8">
                    {exp.achievements.map((achievement, achievementIndex) => (
                      <div key={achievementIndex} 
                        className="flex items-start space-x-3 group/item 
                        transform transition-all duration-300 hover:translate-x-3">
                        <ChevronRight className="w-6 h-6 text-[var(--amber)] group-hover/item:text-[var(--maroon)]
                          transition-colors duration-300 flex-shrink-0" />
                        <span className="text-[var(--blue)] dark:text-[var(--lightYellow)]">
                          {achievement}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-3">
                    {exp.techStack.map((tech, techIndex) => (
                      <span key={techIndex}
                        className="px-4 py-2 text-sm rounded-lg bg-[var(--lightYellow)] 
                          dark:bg-[var(--maroon)] text-[var(--blue)] dark:text-[var(--lightYellow)]
                          transition-all duration-300 hover:scale-105 hover:-rotate-2 hover:shadow-md">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Opportunities Section */}
        <div className="relative">
          <div className="bg-white dark:bg-[var(--black)] rounded-xl p-8 
            overflow-hidden relative group transition-all duration-500 
            hover:shadow-[0_20px_40px_rgba(0,0,0,0.3)] transform hover:-translate-y-2">
            
            {/* Animated Background Shapes */}
            <div className="absolute -right-16 -top-16 w-32 h-32 bg-[var(--amber)] rounded-full 
              opacity-35 group-hover:scale-150 group-hover:opacity-75 transition-all duration-700" />
            <div className="absolute -left-16 -bottom-16 w-48 h-48 bg-[var(--maroon)] rounded-full 
              opacity-35 group-hover:scale-150 sm:group-hover:scale-125 group-hover:opacity-75 transition-all duration-700" />
            <div className="hidden sm:block absolute -right-2 -bottom-6 w-28 h-28 bg-[var(--blue)] rounded-full 
              opacity-35 group-hover:scale-150 lg:group-hover:scale-150 group-hover:opacity-75 transition-all duration-700" />
            
            <div className="relative z-10 flex flex-col">
              <h3 className="text-2xl font-bold text-[var(--maroon)] dark:text-[var(--amber)] mb-6 
                transform transition-all duration-300 group-hover:translate-y-[-5px]">
                Open to Opportunities
              </h3>
              
              <p className="text-[var(--black)] dark:text-[var(--lightYellow)] mb-8 leading-relaxed tracking-wider
                transform transition-all duration-300 group-hover:translate-y-[-5px] lg:w-[87%]">
                I'm enthusiastically seeking full-time opportunities as a Web Developer. 
                With proven experience in modern web technologies, team collaboration, and 
                delivering production-ready solutions, I'm excited to bring my skills and 
                creativity to your team.
              </p>

              <div className="flex flex-wrap gap-4 transform transition-all duration-300 
                group-hover:translate-y-[-5px]">
                <a href={resume} download
                  className="inline-flex items-center px-6 py-3 rounded-lg 
                    bg-[var(--amber)] text-[var(--blue)] hover:bg-[var(--blue)] hover:text-white
                    transition-all duration-300 hover:-translate-y-1 shadow-md hover:shadow-lg">
                  <Download className="w-5 h-5 mr-2" />
                  Download Resume
                </a>
                
                <a href="#contact"
                  className="inline-flex items-center px-6 py-3 rounded-lg
                    bg-[var(--maroon)] text-white hover:bg-[var(--blue)]
                    transition-all duration-300 hover:-translate-y-1 shadow-md hover:shadow-lg">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Contact Me
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;