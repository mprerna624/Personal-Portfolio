import { useState, useEffect } from 'react';
import {blogApp, chatApp, ecommerceApp, userApp, jkjsFoundation} from "../assets"
import { ExternalLink, Github, X } from 'lucide-react';
import SectionHeading from './SectionHeading';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  
  const projects = [
    {
      id: 1,
      title: "Jan Kalyan Jan Sahyog Foundation",
      shortDesc: "Professional Website for an NGO",
      fullDesc: "Developed a professional and engaging website for a nonprofit organization, highlighting its initiatives and social impact.",
      tech: ["React JS", "Tailwind CSS", "EmailJS", "React-Hook-Form", "Vercel", "GoDaddy"],
      image: jkjsFoundation,
      liveLink: "https://www.jkjksfoundation.com/",
      githubLink: "https://github.com/mprerna624/JKJS-NGO",
      highlights: [
        "Responsive layout using React and Tailwind CSS",
        "Mobile-first design for enhanced user engagement",
        "Deployed using Vercel with a custom domain",
        "Custom domain integration with GoDaddy",
        "Spotlights NGO's initiatives and social impact"
      ]
    },
    {
      id: 2,
      title: "E-Commerce App",
      shortDesc: "Feature-rich E-Commerce platform",
      fullDesc: "A robust e-commerce platform featuring add-to-cart functionality, star ratings, reviews, and buyer-seller dashboards, optimized for seamless shopping experiences.",
      tech: ["Node.js", "Express.js", "MongoDB", "HTML", "CSS", "JavaScript", "EJS", "Passport.js"],
      image: ecommerceApp,
      liveLink: "https://e-commerce-project-p9it.onrender.com/",
      githubLink: "https://github.com/mprerna624/E-Commerce-App",
      highlights: [
        "Secure REST API for user authentication using Passport.js",
        "Efficient product and user management with MongoDB",
        "Responsive UI with Bootstrap",
        "Features like add-to-cart, star rating, and reviews",
        "Separate role permissions for buyers and sellers"
      ]
    },
    {
      id: 3,
      title: "Blogs React App",
      shortDesc: "Full-featured blog app with rich text editing",
      fullDesc: "A comprehensive blog application with rich real-time text editing capabilities, robust authentication, and full CRUD functionality for blog posts.",
      tech: ["React JS", "Redux Toolkit", "Appwrite", "Tailwind CSS", "TinyMCE", "React-Hook-Form"],
      image: blogApp,
      liveLink: "https://blogs-react-app-one.vercel.app/",
      githubLink: "https://github.com/mprerna624/Blogs-React-App",
      highlights: [
        "Rich real-time text editing with TinyMCE",
        "Form handling using React-Hook-Form",
        "State management with Redux Toolkit",
        "User authentication and roles via Appwrite",
        "Responsive design with Tailwind CSS"
      ]
    },
    {
      id: 4,
      title: "User Management App",
      shortDesc: "CRUD application for user management",
      fullDesc: "A responsive User Management Application with comprehensive CRUD operations, search functionality, and robust error handling.",
      tech: ["React JS", "Tailwind CSS", "Context API", "React-Hook-Form", "JSONPlaceholder API"],
      image: userApp,
      liveLink: "https://user-management-application-inky.vercel.app/",
      githubLink: "https://github.com/mprerna624/User-Management-Application",
      highlights: [
        "Integrated JSONPlaceholder API for CRUD operations",
        "Responsive UI with Tailwind CSS",
        "Form handling and validation using React-Hook-Form",
        "Efficient state management with Context API",
        "User-friendly table-based UI with modals and search functionality"
      ]
    },
    {
      id: 5,
      title: "Chat App",
      shortDesc: "Real-time Chat Application with Socket.io",
      fullDesc: "A real-time browser-based chat application enabling seamless communication between users.",
      tech: ["Express.js", "Socket.io", "jQuery", "Node.js", "HTML", "JavaScript", "Bootstrap"],
      image: chatApp,
      liveLink: "https://chat-app-stdv.onrender.com/",
      githubLink: "https://github.com/mprerna624/Chat-App",
      highlights: [
        "Real-time communication enabled with Socket.io",
        "Robust backend powered by Node.js and Express.js",
        "Responsive design with Bootstrap",
        "Intuitive and clean user interface",
      ]  
    }
  ];

  useEffect(() => {
    const dialog = document.querySelector('dialog');
    
    const handleDialogClose = () => {
      // Add the closing animation class
      dialog?.classList.add('modal-closing');
      document.body.style.overflow = '';
      
      // Wait for animation to complete then cleanup
      setTimeout(() => {
        setSelectedProject(null);
        dialog?.classList.remove('modal-closing');
      }, 300);
    };
  
    const handleBackdropClick = (e) => {
      const dialogDimensions = dialog?.getBoundingClientRect();
      if (dialogDimensions && (
        e.clientX < dialogDimensions.left ||
        e.clientX > dialogDimensions.right ||
        e.clientY < dialogDimensions.top ||
        e.clientY > dialogDimensions.bottom
      )) {
        dialog.close();
      }
    };
  
    dialog?.addEventListener('close', handleDialogClose);
    dialog?.addEventListener('click', handleBackdropClick);
    
    return () => {
      dialog?.removeEventListener('close', handleDialogClose);
      dialog?.removeEventListener('click', handleBackdropClick);
    };
  }, []);

  const openModal = (project) => {
    setSelectedProject(project);
    const dialog = document.querySelector('dialog');
    if (dialog) {
      dialog.showModal();
      document.body.style.overflow = 'hidden';
    }
  };

  return (
  <>
    <style>
      {`
        dialog::backdrop {
          background: rgba(0, 0, 0, 0.5);
          backdrop-filter: blur(4px);
        }
        
        @keyframes modalFadeOut {
          from { 
            opacity: 1; 
            transform: translate(-50%, -50%);
          }
          to { 
            opacity: 0; 
            transform: translate(-50%, calc(-50% + 20px));
          }
        }
        
        @keyframes slideIn {
          from { transform: translateX(-100%); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
        
        .modal-closing {
          animation: modalFadeOut 0.3s ease-out forwards;
        }
        
        .slideIn-animation {
          opacity: 0;
          animation: slideIn 0.5s ease-out forwards;
        }
        
        .modal-open .slideIn-animation:nth-child(1) { animation-delay: 0.1s; }
        .modal-open .slideIn-animation:nth-child(2) { animation-delay: 0.2s; }
        .modal-open .slideIn-animation:nth-child(3) { animation-delay: 0.3s; }
        .modal-open .slideIn-animation:nth-child(4) { animation-delay: 0.4s; }
      `}
    </style>

    <section id='projects' className="py-20 px-6 bg-[var(--lightNavbarBg)] dark:bg-[var(--darkSectionBg)]">
      <div className="max-w-6xl mx-auto">
        <SectionHeading lightColor="maroon" darkColor="lightYellow" className='mb-14'>Featured Projects</SectionHeading>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group relative bg-white dark:bg-[var(--blue)] rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl cursor-pointer"
              onClick={() => openModal(project)}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-[var(--blue)] dark:bg-[var(--maroon)] opacity-0 group-hover:opacity-70 transition-opacity duration-300" />
                
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button className="px-4 py-2 bg-[var(--amber)] dark:bg-[var(--lightYellow)] text-white dark:text-[var(--blue)] rounded-md -translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    View Details
                  </button>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-[var(--blue)] dark:text-[var(--lightYellow)] mb-2">
                  {project.title}
                </h3>
                <p className="text-[var(--black)] dark:text-[var(--offWhite)] opacity-75 mb-4">
                  {project.shortDesc}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-sm rounded-full bg-[var(--lightYellow)] dark:bg-[var(--amber)] text-[var(--blue)] dark:text-white"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <dialog 
          className={`
            fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
            max-w-[800px] w-[90%] max-h-[90vh] z-50
            p-0 m-0 border-none bg-transparent overflow-visible
            flex items-center justify-center
            rounded-lg
          `}
          onClick={(e) => e.stopPropagation()}
        >
          {selectedProject && (
            <div className="modal-content w-full max-h-[90vh] overflow-y-auto bg-white dark:bg-[var(--black)] rounded-lg shadow-2xl relative">
              <div className="relative h-72 overflow-hidden">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-contain"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/80" />
                
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="flex gap-4 mb-4 slideIn-animation">
                    <a
                      href={selectedProject.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-[var(--amber)] dark:bg-[var(--lightYellow)] text-white dark:text-[var(--blue)] rounded-md hover:bg-[var(--maroon)] dark:hover:bg-[var(--amber)] transition-all duration-300 hover:scale-105"
                    >
                      <ExternalLink size={20} />
                      Live Demo
                    </a>
                    <a
                      href={selectedProject.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 border-2 border-white text-white rounded-md hover:bg-white hover:text-[var(--blue)] transition-all duration-300 hover:scale-105"
                    >
                      <Github size={20} />
                      Source Code
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="p-8">
                <div className="mb-8 slideIn-animation">
                  <h3 className="text-3xl font-bold text-[var(--blue)] dark:text-[var(--lightYellow)] mb-2">
                    {selectedProject.title}
                  </h3>
                  <p className="text-lg text-[var(--black)] dark:text-[var(--offWhite)]">
                    {selectedProject.shortDesc}
                  </p>
                </div>
                
                <div className="mb-8 slideIn-animation">
                  <h4 className="text-lg font-semibold text-[var(--maroon)] dark:text-[var(--amber)] mb-3">
                    Project Overview
                  </h4>
                  <p className="text-[var(--black)] dark:text-[var(--offWhite)] leading-relaxed">
                    {selectedProject.fullDesc}
                  </p>
                </div>
                
                <div className="mb-8 slideIn-animation">
                  <h4 className="text-lg font-semibold text-[var(--maroon)] dark:text-[var(--amber)] mb-3">
                    Key Highlights
                  </h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {selectedProject.highlights.map((highlight) => (
                      <li 
                        key={highlight} 
                        className="flex items-start text-[var(--black)] dark:text-[var(--offWhite)]"
                      >
                        <span className="mr-2 mt-1 text-[var(--amber)]">•</span>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mb-8 slideIn-animation">
                  <h4 className="text-lg font-semibold text-[var(--maroon)] dark:text-[var(--amber)] mb-3">
                    Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-4 py-2 text-sm rounded-full bg-[var(--lightYellow)] dark:bg-[var(--amber)] text-[var(--blue)] dark:text-white transform transition-transform hover:scale-105"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              
              <button
                onClick={() => document.querySelector('dialog')?.close()}
                className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center rounded-full bg-black/50 text-white hover:bg-black/70 transition-all duration-300 transform hover:rotate-90"
              >
                <X />
              </button>
            </div>
          )}
        </dialog>
      </div>
    </section>
  </>
);
};

export default Projects;