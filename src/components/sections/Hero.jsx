import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { Button } from '../ui/Button';

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center pt-20 overflow-hidden bg-background" id="hero">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h2 className="text-secondary font-medium tracking-wide uppercase mb-6 text-sm">
              Tushar Gadher
            </h2>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-primary mb-8 leading-tight tracking-tight">
              Frontend Engineer. <br />
              <span className="text-secondary">Building scalable web interfaces.</span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
            className="max-w-2xl"
          >
            <p className="text-lg md:text-xl text-secondary font-light mb-12 leading-relaxed">
              I specialize in creating high-performance, accessible, and beautifully designed user experiences for the web. Currently focused on React, Vue, and modern frontend architectures.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6, ease: "easeOut" }}
            className="flex flex-col sm:flex-row items-start sm:items-center gap-6"
          >
            <Button href="#projects" icon={ArrowRight} className="!bg-primary !text-background hover:!bg-white">
              View Work
            </Button>
            <div className="flex items-center gap-6 text-secondary">
              <a href="#" className="hover:text-primary transition-colors"><FaGithub className="w-5 h-5" /></a>
              <a href="#" className="hover:text-primary transition-colors"><FaLinkedin className="w-5 h-5" /></a>
              <a href="#" className="hover:text-primary transition-colors"><FaTwitter className="w-5 h-5" /></a>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-12 left-6 md:left-auto md:right-12 text-secondary flex items-center gap-3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 1 }}
      >
        <span className="text-xs font-medium uppercase tracking-widest">Scroll</span>
        <div className="w-12 h-px bg-border"></div>
      </motion.div>
    </section>
  );
}
