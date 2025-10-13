import React, { useState, useEffect } from 'react';
import { FaLinkedin, FaGithub, FaBars, FaTimes } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#about', label: 'About Me' },
    { href: '#experience', label: 'Experience' },
    { href: '#technologies', label: 'Technologies' },
    { href: '#projects', label: 'Projects' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 z-50 w-full backdrop-blur-md transition-all duration-500 ${scrolled
          ? 'bg-white/70 shadow-md'
          : 'bg-transparent shadow-none'
        }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
        {/* Logo */}
        <a
          href="#"
          className="text-xl font-semibold tracking-wide text-gray-800 transition-colors duration-300 hover:text-blue-600"
        >
          Portfolio
        </a>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8 text-[16px] font-medium text-gray-700">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative group transition-colors duration-300 hover:text-blue-600"
            >
              {link.label}
              <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}

          {/* Social Icons */}
          <div className="ml-4 flex gap-5 text-xl text-gray-600">
            <a
              href="https://linkedin.com/in/13-nitin-khare"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-600 transition-colors"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/NitinKhare1331"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-900 transition-colors"
            >
              <FaGithub />
            </a>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="text-2xl text-gray-700 lg:hidden focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          className="lg:hidden bg-white/80 backdrop-blur-xl shadow-lg"
        >
          <div className="flex flex-col items-center gap-6 py-6 text-lg text-gray-700">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="hover:text-blue-600 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="flex gap-6 text-2xl">
              <a
                href="https://linkedin.com/in/13-nitin-khare"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-600"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://github.com/NitinKhare1331"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-900"
              >
                <FaGithub />
              </a>
            </div>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;

