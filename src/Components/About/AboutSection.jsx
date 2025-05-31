import React from 'react';
import { Code, Server, Globe, Lightbulb } from 'lucide-react';
import AboutCard from './AboutCard';
import SectionHeading from '../SectionHeading';

const AboutSection = () => {
  const cards = [
    {
      title: "Frontend Expertise",
      description: "Proficient in React, Redux Toolkit, and modern CSS frameworks and libraries like Tailwind CSS and Shadcn/UI. I create responsive interfaces with a focus on performance and accessibility.",
      Icon: Code,
      variant: "primary",
      circleSize: "small"
    },
    {
      title: "Backend Knowledge",
      description: "Experienced with Node.js, Express.js, MongoDB, and backend services like Appwrite. I build robust APIs and handle complex database operations.",
      Icon: Server,
      variant: "primary",
      circleSize: "small"
    },
    {
      title: "Recent Work",
      description: "In my previous company BeyondChats, I built a fully responsive onboarding site from scratch using Vite, Tailwind CSS & Shadcn/UI, migrated a CRA+MUI v6 Dashboard project to Vite + MUI v7, and refactored components incrementally to Tailwind & Shadcn/UI while translating Figma designs into pixel-perfect React components.",
      Icon: Globe,
      variant: "secondary",
      circleSize: "large"
    },
    {
      title: "Professional Goals",
      description: "I aim to develop robust web applications while building practical experience in modern development practices. I thrive in collaborative environments where I can contribute to meaningful projects while growing as a professional in the web development space.",
      Icon: Lightbulb,
      variant: "secondary",
      circleSize: "large"
    }
  ];

  return (
    <section id='about' className="w-full py-16 px-4 bg-[var(--lightNavbarBg)] dark:bg-[var(--darkSectionBg)] transition-colors duration-300">
      <div className="max-w-4xl mx-auto">
        <SectionHeading lightColor="maroon" darkColor="lightYellow" className='mb-8'>About Me</SectionHeading>
        
        <div className="text-[var(--black)] dark:text-[var(--offWhite)] mb-12">
          <p className="text-lg leading-relaxed">
            Hi! I'm Prerna Mittal, a Full Stack Web Developer with a passion for creating responsive, user-centric web applications. Through personal projects and continuous learning, I'm building a foundation in both frontend and backend technologies.
          </p>
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {cards.slice(0, 2).map((card, index) => (
            <AboutCard key={index} {...card} />
          ))}
        </div>

        {/* Education Section */}
        <div className="mb-12 text-[var(--black)] dark:text-[var(--offWhite)]">
          <p className="text-lg leading-relaxed">
            With a Master's in Computer Application(MCA) from Amity University and hands-on experience in 
            developing various web applications, I bring both academic knowledge and practical expertise 
            to every project I undertake.
          </p>
        </div>

        {/* Recent Work & Goals Cards */}
        <div className="space-y-6">
          {cards.slice(2).map((card, index) => (
            <AboutCard key={index} {...card} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;