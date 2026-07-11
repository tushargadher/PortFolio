import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Button } from '../ui/Button';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const sections = ['hero', 'about', 'skills', 'experience', 'projects', 'contact'];
    
    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observerOptions = {
      root: null,
      rootMargin: '-40% 0px -55% 0px', // targets section in center of viewport
      threshold: 0,
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) {
        observer.observe(el);
      }
    });

    return () => observer.disconnect();
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'py-4 bg-background/80 backdrop-blur-md border-b border-border shadow-lg shadow-background/5' 
            : 'py-6 bg-transparent'
        }`}
      >
        <div className="container mx-auto px-6 flex items-center justify-between">
          <a 
            href="#hero" 
            className="text-xl font-bold text-primary tracking-tight focus-visible:ring-2 focus-visible:ring-accent-blue focus-visible:outline-none rounded-sm"
            aria-label="Tushar Gadher Portfolio Home"
          >
            Tushar<span className="text-accent-blue">.</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <ul className="flex items-center gap-6">
              {navLinks.map((link) => {
                const targetId = link.href.substring(1);
                const isActive = activeSection === targetId;
                return (
                  <li key={link.name}>
                    <a 
                      href={link.href} 
                      className={`relative py-1 text-sm font-medium transition-colors duration-300 focus-visible:ring-2 focus-visible:ring-accent-blue focus-visible:outline-none rounded-md px-1 ${
                        isActive ? 'text-accent-blue' : 'text-secondary hover:text-primary'
                      }`}
                    >
                      {link.name}
                      {isActive && (
                        <motion.div 
                          layoutId="active-underline"
                          className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-accent-blue to-accent-purple rounded-full"
                          transition={{ type: "spring", stiffness: 350, damping: 25 }}
                        />
                      )}
                    </a>
                  </li>
                );
              })}
            </ul>
            <Button variant="outline" href="#contact" className="!py-2 !px-4 text-sm">
              Contact Me
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden text-primary focus-visible:ring-2 focus-visible:ring-accent-blue focus-visible:outline-none rounded p-1 hover:text-accent-blue transition-colors"
            onClick={() => setIsMobileMenuOpen(true)}
            aria-label="Open navigation menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[60] bg-background flex flex-col justify-center items-center"
          >
            <button 
              className="absolute top-6 right-6 text-primary focus-visible:ring-2 focus-visible:ring-accent-blue focus-visible:outline-none rounded p-1 hover:text-accent-blue transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
              aria-label="Close navigation menu"
            >
              <X className="w-8 h-8" />
            </button>
            <ul className="flex flex-col items-center gap-8">
              {navLinks.map((link) => {
                const targetId = link.href.substring(1);
                const isActive = activeSection === targetId;
                return (
                  <li key={link.name}>
                    <a 
                      href={link.href} 
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`text-3xl font-bold transition-colors duration-300 focus-visible:ring-2 focus-visible:ring-accent-blue focus-visible:outline-none rounded px-2 ${
                        isActive ? 'text-accent-blue' : 'text-primary hover:text-secondary'
                      }`}
                    >
                      {link.name}
                    </a>
                  </li>
                );
              })}
              <li>
                <Button 
                  href="#contact" 
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Contact Me
                </Button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
