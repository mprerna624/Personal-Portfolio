import React, { useState, useEffect } from 'react';
import { ChevronRight, Code2, Sparkles } from 'lucide-react';

const HeroSection = () => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const [currentLine, setCurrentLine] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  const roles = [
    'Web Developer',
    'Frontend Developer',
    'Backend Developer',
    'Full Stack Developer'
  ];

  const codeLines = [
    { type: 'comment', text: '// Welcome to my portfolio' },
    { type: 'const', text: 'const name = "Prerna Mittal";' },
    { type: 'const', text: 'const role = "Web Developer";' },
    { type: 'const', text: 'const skills = ["React", "NodeJS", "Express.js", "MongoDB"];' },
    { type: 'function', text: 'function createAmazingWebsites() {' },
    { type: 'return', text: '  return passion + creativity + code;' },
    { type: 'close', text: '}' }
  ];

  useEffect(() => {
    const lineInterval = setInterval(() => {
      setCurrentLine(prev => (prev < codeLines.length - 1 ? prev + 1 : prev));
    }, 800);

    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);

    return () => {
      clearInterval(lineInterval);
      clearInterval(cursorInterval);
    };
  }, []);

  useEffect(() => {
    const text = roles[currentIndex];
    let timeout;

    if (isTyping) {
      if (currentText.length < text.length) {
        timeout = setTimeout(() => {
          setCurrentText(text.slice(0, currentText.length + 1));
        }, 100);
      } else {
        timeout = setTimeout(() => {
          setIsTyping(false);
        }, 2000);
      }
    } else {
      if (currentText.length > 0) {
        timeout = setTimeout(() => {
          setCurrentText(text.slice(0, currentText.length - 1));
        }, 50);
      } else {
        setCurrentIndex((prev) => (prev + 1) % roles.length);
        setIsTyping(true);
      }
    }

    return () => clearTimeout(timeout);
  }, [currentText, currentIndex, isTyping]);

  return (
    <>
      <style>{`
        .animate-blob {
          animation: blob 6s infinite cubic-bezier(0.4, 0, 0.2, 1)
        }
        
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.2);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.8);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        
        .animate-blink {
          animation: blink 1s step-end infinite;
        }
        
        @keyframes blink {
          50% { opacity: 0; }
        }
        
        .animate-slide-up {
          animation: slideUp 0.8s ease-out forwards;
        }
        
        .animate-fade-in {
          animation: fadeIn 0.5s ease-out forwards;
        }
        
        @keyframes slideUp {
          from { transform: translateY(20px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        .delay-200 {
          animation-delay: 200ms;
        }
        
        .delay-300 {
          animation-delay: 300ms;
        }
      `}</style>

      <div id='home' className="min-h-screen bg-gradient-to-br from-[#1F1F35] via-[#2A1F35] to-[#1a1a2e] transition-colors duration-300">
        {/* Grid Background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#312952_1px,transparent_1px),linear-gradient(to_bottom,#312952_1px,transparent_1px)] opacity-20 bg-[size:24px_24px]" />
        
        {/* Animated blobs */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute left-20 top-20 w-96 h-96 bg-indigo-900 rounded-full mix-blend-overlay filter blur-3xl opacity-40 animate-blob" />
          <div className="absolute right-20 bottom-20 w-96 h-96 bg-blue-900 rounded-full mix-blend-overlay filter blur-3xl opacity-40 animate-blob animation-delay-2000" />
          <div className="absolute left-1/2 top-1/2 w-96 h-96 bg-slate-900 rounded-full mix-blend-overlay filter blur-3xl opacity-40 animate-blob animation-delay-4000" />
          <div className="absolute left-20 top-40 w-96 h-96 bg-[#9d8cff] rounded-full mix-blend-overlay filter blur-3xl opacity-25 animate-blob animation-delay-3000" />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between min-h-screen py-20 gap-12 pt-32 lg:pt-20">
            {/* Left Content */}
            <div className="lg:w-1/2 space-y-8">
              <div className="space-y-6">
                <span className="inline-flex items-center gap-2 px-4 py-1.5 border border-[var(--amber)] text-[var(--amber)] rounded-full text-sm animate-fade-in">
                  <Sparkles className="w-4 h-4" />
                  Welcome to my portfolio
                </span>
                
                <h1 className="text-4xl md:text-6xl font-bold text-[var(--offWhite)] space-y-4 animate-slide-up">
                  <span className="block">Hi, I'm Prerna</span>
                  <span className="block text-[var(--amber)] text-3xl md:text-5xl">
                    {currentText}
                    <span className="inline-block w-1 h-8 ml-1 bg-[var(--amber)] animate-blink" />
                  </span>
                </h1>

                <p className="text-lg text-[var(--lightYellow)] max-w-xl animate-slide-up delay-200 leading-relaxed">
                  Passionate about creating innovative web solutions and 
                  transforming ideas into seamless digital experiences.
                </p>
              </div>

              <div className="flex flex-wrap gap-4 animate-slide-up delay-300">
                <button onClick={() => {document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }); }}
                  className="group flex items-center gap-2 px-6 py-3 bg-[var(--maroon)] text-[var(--offWhite)] rounded-lg hover:bg-[#7B1626] transition-all duration-300"
                >
                  <span>View Projects</span>
                  <ChevronRight className="w-4 h-4 transform transition-transform group-hover:translate-x-1" />
                </button>
                
                <button onClick={() => {document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }}
                  className="px-6 py-3 border-2 border-[#CD7F32] text-[#CD7F32] rounded-lg hover:bg-[#CD7F32] hover:text-[var(--offWhite)] transition-all duration-300"
                >
                  Get in Touch
                </button>
              </div>
            </div>

            
            {/* Right Code Editor */}
            <div className="lg:w-1/2 w-[80%] hidden min-[551px]:block">
              <div className="bg-[var(--black)] rounded-lg overflow-hidden shadow-2xl transform transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(229,149,0,0.3)] group">
                {/* Editor header */}
                <div className="flex items-center justify-between px-4 py-2 bg-[var(--black)] border-b border-[#2D3748] transition-colors duration-300 group-hover:border-[var(--amber)]">
                  <div className="flex items-center gap-2">
                    <div className="flex gap-2">
                      <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
                      <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                      <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
                    </div>
                    <span className="ml-4 text-sm text-[#A0AEC0] group-hover:text-[var(--amber)] transition-colors duration-300">portfolio.js</span>
                  </div>
                  <Code2 className="w-4 h-4 text-[var(--amber)]" />
                </div>

                {/* Code content */}
                <div className="p-4 font-mono text-sm md:text-base">
                  {codeLines.map((line, index) => (
                    <div
                      key={index}
                      className={`min-h-6 py-1 ${index <= currentLine ? 'opacity-100' : 'opacity-0'} transition-all duration-300 hover:translate-x-2 whitespace-pre-wrap break-words`}
                      style={{ 
                        color: line.type === 'comment' ? '#4A5568' : 
                              line.type === 'const' ? 'var(--amber)' : 'var(--offWhite)',
                        transform: index <= currentLine ? 'translateX(0)' : 'translateX(-20px)',
                        transition: 'transform 0.3s ease-out'
                      }}
                    >
                      <span className="mr-4 text-[#4A5568] group-hover:text-[var(--amber)] transition-colors duration-300">{index + 1}</span>
                      {line.text}
                      {index === currentLine && showCursor && (
                        <span className="ml-1 animate-pulse">|</span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;