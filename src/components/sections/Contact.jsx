import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Send, Check } from 'lucide-react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { Button } from '../ui/Button';

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-32 relative bg-surface border-t border-border">
      <div className="container mx-auto px-6 max-w-5xl relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-sm font-medium tracking-wide uppercase text-secondary mb-2">Connect</h2>
          <h3 className="text-3xl font-bold text-primary">Get In Touch</h3>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-12 text-primary">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col"
          >
            <h4 className="text-2xl font-bold mb-6">Let's build something.</h4>
            <p className="text-secondary mb-10 leading-relaxed font-light">
              I am currently open to new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
            </p>
            
            <div className="space-y-4 mb-10">
              <a href="mailto:contact@tushargadher.com" className="flex items-center gap-4 text-secondary hover:text-primary transition-colors border border-border p-4 rounded-xl w-max hover:bg-background">
                <Mail className="w-5 h-5" />
                <span className="font-medium text-sm">contact@tushargadher.com</span>
              </a>
            </div>

            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-background hover:text-primary text-secondary transition-colors">
                <FaGithub className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-background hover:text-primary text-secondary transition-colors">
                <FaLinkedin className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-background hover:text-primary text-secondary transition-colors">
                <FaTwitter className="w-4 h-4" />
              </a>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="premium-card rounded-2xl p-8 lg:p-10 flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-sm font-medium text-secondary">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  required
                  className="bg-background border border-border rounded-xl px-4 py-3 text-primary focus:outline-none focus:border-secondary transition-colors text-sm"
                  placeholder="John Doe"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-sm font-medium text-secondary">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  required
                  className="bg-background border border-border rounded-xl px-4 py-3 text-primary focus:outline-none focus:border-secondary transition-colors text-sm"
                  placeholder="john@example.com"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-sm font-medium text-secondary">Message</label>
                <textarea 
                  id="message" 
                  rows="4"
                  required
                  className="bg-background border border-border rounded-xl px-4 py-3 text-primary focus:outline-none focus:border-secondary transition-colors resize-none text-sm"
                  placeholder="How can I help you?"
                ></textarea>
              </div>
              
              <Button type="submit" className="w-full mt-4" disabled={isSubmitting || submitted}>
                <AnimatePresence mode="wait">
                  {isSubmitting ? (
                    <motion.div key="submitting" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                      Sending...
                    </motion.div>
                  ) : submitted ? (
                    <motion.div key="success" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex items-center gap-2">
                      <Check className="w-5 h-5" /> Message Sent
                    </motion.div>
                  ) : (
                    <motion.div key="send" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex items-center gap-2">
                      <Send className="w-4 h-4" /> Send Message
                    </motion.div>
                  )}
                </AnimatePresence>
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
