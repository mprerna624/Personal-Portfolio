import React, { useState } from 'react';
import { Linkedin, Github, Mail, Phone, Code, Terminal, Cpu } from 'lucide-react';

const Footer = () => {
  const [isTerminalHovered, setIsTerminalHovered] = useState(false);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' }
  ];

  const socialLinks = [
    { 
      name: 'LinkedIn', 
      icon: Linkedin, 
      href: 'https://www.linkedin.com/in/prerna-mittal-797384297/' 
    },
    { 
      name: 'GitHub', 
      icon: Github, 
      href: 'https://github.com/mprerna624' 
    }
  ];

  const contactInfo = [
    { 
      icon: Mail, 
      text: 'mprerna624@gmail.com', 
      href: 'mailto:mprerna624@gmail.com' 
    },
    { 
      icon: Phone, 
      text: '(+91) 9811053427', 
      href: 'tel:+919811053427' 
    }
  ];

  return (

  <>
    <style>
      {`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(10deg); }
        }
        @keyframes float-reverse {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(20px) rotate(-10deg); }
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes spin-slow-reverse {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-float-reverse {
          animation: float-reverse 5s ease-in-out infinite;
        }
        .animate-spin-slow {
          animation: spin-slow 15s linear infinite;
        }
        .animate-spin-slow-reverse {
          animation: spin-slow-reverse 15s linear infinite;
        }
      `}
    </style>

    <footer className="bg-[var(--darkNavbarBg)] text-[var(--lightYellow)] py-8 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[var(--lightYellow)] via-[var(--maroon)] to-[var(--amber)]" />
      
      {/* Animated Background Decorative Icons */}
      <div className="absolute opacity-10 right-8 top-8 transition-transform duration-3000 animate-float">
        <Code className="w-28 h-28 animate-spin-slow" />
      </div>
      <div className="absolute opacity-10 left-8 bottom-8 transition-transform duration-3000 animate-float-reverse">
        <Cpu className="w-28 h-28 animate-spin-slow-reverse" />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8  mb-8">
          {/* Quick Links with Terminal Style */}
          <div className="flex flex-col items-center md:items-start">
            <div className="flex items-center gap-2 mb-3">
              <Terminal 
                className={`w-5 h-5 ${isTerminalHovered ? 'text-[var(--amber)]' : ''} transition-colors duration-300`}
                onMouseEnter={() => setIsTerminalHovered(true)}
                onMouseLeave={() => setIsTerminalHovered(false)}
              />
              <h3 className="text-[var(--amber)] font-mono font-bold text-lg">Navigation</h3>
            </div>
            <ul className="space-y-1.5 font-mono w-full">
              {navLinks.map((link) => (
                <li key={link.name} className="flex items-center justify-center md:justify-start gap-2">
                  <span className="text-[var(--amber)] opacity-70">&gt;</span>
                  <a
                    href={link.href}
                    className="hover:text-[var(--amber)] transition-all duration-300 hover:translate-x-2"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information with Glowing Effect */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-[var(--amber)] font-bold text-lg mb-3">Let's Connect</h3>
            <ul className="space-y-2 w-full">
              {contactInfo.map((item) => (
                <li key={item.text} className="flex justify-center md:justify-start">
                  <a
                    href={item.href}
                    className="flex items-center gap-3 hover:text-[var(--amber)] font-mono tracking-wide transition-all group"
                  >
                    <div className="p-2 rounded-full bg-[var(--maroon)] bg-opacity-20 hover:bg-opacity-30 transition-all ">
                      <item.icon className="w-5 h-5 group-hover:scale-110" />
                    </div>
                    <span className="font-light">{item.text}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links with Animation */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-[var(--amber)] font-bold text-lg mb-3">Social Links</h3>
            <ul className="space-y-2 w-full">
              {socialLinks.map((social) => (
                <li key={social.name} className="flex justify-center md:justify-start">
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 hover:text-[var(--amber)] font-mono tracking-wide transition-all group"
                    aria-label={social.name}
                  >
                    <div className="p-2 rounded-full bg-[var(--maroon)]  hover:bg-opacity-30 transition-all">
                      <social.icon className="w-5 h-5" />
                    </div>
                    <span className="">{social.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Made with Love Section */}
        <div className="text-center space-y-2">
          <div className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-[var(--maroon)] bg-opacity-20 hover:bg-opacity-30 transition-all duration-300 cursor-pointer group">
            <span className="">Made with</span>
            <span className="text-red-500 animate-pulse text-xl">❤️</span>
            <span className="">by</span>
            <span className="text-[var(--amber)] text-lg font-bold heading-font tracking-wide">Prerna Mittal</span>
          </div>
          
          <p className="text-xs opacity-70">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  </>
  );
};

export default Footer;