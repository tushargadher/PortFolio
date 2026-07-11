import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { Button } from '../ui/Button';
import { LINKS } from '../../config/links';
import profileImg from '../../assets/profile.png';

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center pt-28 pb-16 overflow-hidden bg-background" id="hero">
      {/* Subtle background glow circles */}
      <div className="absolute top-12 left-12 w-96 h-96 rounded-full bg-accent-blue/10 blur-[100px] pointer-events-none z-0 animate-glow-1" />
      <div className="absolute bottom-12 right-12 w-96 h-96 rounded-full bg-accent-purple/10 blur-[100px] pointer-events-none z-0 animate-glow-2" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Text Content */}
          <div className="lg:col-span-7 max-w-2xl order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <h2 className="text-accent-blue font-semibold tracking-widest uppercase mb-4 text-xs">
                Tushar Gadher
              </h2>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-primary mb-6 leading-tight tracking-tight">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-blue via-accent-purple to-accent-teal">
                  Frontend Engineer.
                </span>
                <br />
                <span className="text-secondary font-medium">Building scalable web interfaces.</span>
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
            >
              <p className="text-base md:text-lg text-secondary font-light mb-10 leading-relaxed">
                I specialize in creating high-performance, accessible, and beautifully designed user experiences for the web. Currently focused on React, Vue, and modern frontend architectures.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6, ease: "easeOut" }}
              className="flex flex-col sm:flex-row items-start sm:items-center gap-6"
            >
              <Button href="#projects" icon={ArrowRight}>
                View Work
              </Button>
              <div className="flex items-center gap-5 text-secondary pl-2 sm:pl-0">
                <a 
                  href={LINKS.github} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-accent-blue transition-colors focus-visible:ring-2 focus-visible:ring-accent-blue focus-visible:outline-none rounded p-1"
                  aria-label="GitHub Profile"
                >
                  <FaGithub className="w-5 h-5" />
                </a>
                <a 
                  href={LINKS.linkedin} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-accent-purple transition-colors focus-visible:ring-2 focus-visible:ring-accent-blue focus-visible:outline-none rounded p-1"
                  aria-label="LinkedIn Profile"
                >
                  <FaLinkedin className="w-5 h-5" />
                </a>
                <a 
                  href={LINKS.twitter} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-accent-teal transition-colors focus-visible:ring-2 focus-visible:ring-accent-blue focus-visible:outline-none rounded p-1"
                  aria-label="Twitter Profile"
                >
                  <FaTwitter className="w-5 h-5" />
                </a>
              </div>
            </motion.div>
          </div>

          {/* Profile Image Container */}
          <div className="lg:col-span-5 flex justify-center order-1 lg:order-2">
            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="relative"
            >
              {/* Animated aura ring behind the profile picture */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-accent-blue/30 via-accent-purple/30 to-accent-teal/30 blur-md scale-105" />
              
              <motion.div 
                className="relative p-[4px] bg-gradient-to-tr from-accent-blue via-accent-purple to-accent-teal rounded-full w-48 h-48 md:w-60 md:h-60 lg:w-72 lg:h-72 shadow-2xl flex items-center justify-center cursor-pointer"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 350, damping: 22 }}
              >
                <div className="w-full h-full rounded-full overflow-hidden bg-background border-[3px] border-background flex items-center justify-center">
                  <img 
                    src={profileImg} 
                    loading="lazy" 
                    alt="Tushar Gadher Professional Headshot" 
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-12 left-6 md:left-auto md:right-12 text-secondary flex items-center gap-3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 1 }}
      >
        <span className="text-xs font-medium uppercase tracking-widest text-accent-blue">Scroll</span>
        <div className="w-12 h-px bg-border group-hover:bg-accent-blue transition-colors"></div>
      </motion.div>
    </section>
  );
}
