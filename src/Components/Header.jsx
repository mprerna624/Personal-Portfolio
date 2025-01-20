import React, { useState } from 'react';
import useTheme from "../context/themeContext";
import { Menu, X, Sun, Moon } from 'lucide-react';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { themeMode, changeTheme } = useTheme();

  const handleThemeChange = (e) => {
    const themeStatus = e.currentTarget.checked ? "dark" : "light";
    changeTheme(themeStatus);
  };

  const navLinks = ["Home", "About", "Skills", "Projects", "Experience", "Contact"];

  return (
    <nav className="fixed w-full z-50 transition-all duration-300 py-4 bg-[var(--lightNavbarBg)] dark:bg-[var(--darkNavbarBg)] backdrop-blur-sm shadow-lg">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#home" className="relative group">
            <span className="text-2xl sm:text-3xl font-bold heading-font inline-block min-w-min transition-all duration-300
              text-[var(--maroon)] dark:text-[var(--amber)]
              hover:scale-105
              [text-shadow:-1px_1px_0_rgba(252,211,150,0.6),-2px_2px_0_rgba(155,27,48,0.3),-3px_3px_0_rgba(155,27,48,0.2)]
              dark:[text-shadow:-1px_1px_0_var(--maroon),-2px_2px_0_var(--maroon),-3px_3px_0_var(--maroon)]">
              Prerna Mittal
            </span>
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[var(--maroon)] dark:bg-[var(--amber)] 
              transition-all duration-300 group-hover:w-full"></span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="relative group py-2"
              >
                <span className="text-[var(--maroon)] dark:text-[var(--lightYellow)] font-mono
                  transition-all duration-200 group-hover:font-extrabold">
                  {link}
                </span>
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[var(--maroon)] dark:bg-[var(--amber)]
                  transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>

          {/* Theme Toggle */}
          <label className="relative inline-flex items-center cursor-pointer group">
            <input
              type="checkbox"
              className="sr-only peer"
              checked={themeMode === "dark"}
              onChange={handleThemeChange}
            />
            <div className="w-16 h-8 ml-6 rounded-full bg-gradient-to-r from-[var(--amber)] to-[var(--maroon)] relative transition-all duration-300">
              <div className={`absolute top-1 h-6 w-6 bg-white rounded-full shadow-md transition-all duration-300 ${themeMode === "dark" ? "left-9" : "left-1"}`}>
                <div className="absolute inset-0 flex items-center justify-center">
                  {themeMode === "dark" ? (
                    <Moon size={16} fill="var(--maroon)" className="text-[var(--maroon)]" />
                  ) : (
                    <Sun size={16} fill="var(--amber)" className="text-[var(--amber)]" />
                  )}
                </div>
              </div>
            </div>
          </label>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-[var(--maroon)] dark:text-[var(--amber)] 
              hover:opacity-80 transition-all duration-200 ml-4 p-1.5 rounded-lg"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div> 

        {/* Mobile Menu */}
        <div className={`md:hidden transition-all duration-300 ease-in-out ${menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
          <div className="py-4 space-y-3">
            {navLinks.map((link) => (
              <div key={link} className="group flex items-center justify-center">
                <code className="text-[var(--maroon)] dark:text-[var(--amber)] opacity-0 group-hover:opacity-100 transition-all duration-200 -mr-2 font-semibold text-xl" >{"<"}</code>
                <a
                  href={`#${link.toLowerCase()}`}
                  onClick={() => setMenuOpen(false)}
                  className="px-4 py-2 text-[var(--maroon)] dark:text-[var(--lightYellow)] dark:hover:text-[var(--amber)] rounded-lg transition-all duration-200 hover:font-bold"
                >
                  {link}
                </a>
                  <code className='opacity-0 group-hover:opacity-100 transition-all duration-200 -ml-2 text-[var(--maroon)] dark:text-[var(--amber)] font-semibold text-xl'>{"/>"}</code>
              </div>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;