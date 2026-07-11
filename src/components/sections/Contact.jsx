import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Send, Check, AlertCircle } from 'lucide-react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { Button } from '../ui/Button';
import { LINKS } from '../../config/links';
import emailjs from '@emailjs/browser';

export function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState(null); // { type: 'success' | 'error', message: string } | null

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Real validation check
    if (!name.trim() || !email.trim() || !subject.trim() || !message.trim()) {
      setStatus({ type: 'error', message: 'All fields are required.' });
      return;
    }
    
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email.trim())) {
      setStatus({ type: 'error', message: 'Please enter a valid email address.' });
      return;
    }
    
    setIsSubmitting(true);
    setStatus(null);

    const templateParams = {
      from_name: name.trim(),
      from_email: email.trim(),
      subject: subject.trim(),
      message: message.trim(),
      submission_time: new Date().toLocaleString()
    };

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        templateParams,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
      
      setStatus({ type: 'success', message: 'Message sent successfully.' });
      setName('');
      setEmail('');
      setSubject('');
      setMessage('');
      
      // Auto hide success banner after 6s
      setTimeout(() => {
        setStatus(null);
      }, 6000);
    } catch (err) {
      console.error('EmailJS Submit Error:', err);
      setStatus({ type: 'error', message: 'Failed to send message.' });
    } finally {
      setIsSubmitting(false);
    }
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
          <h2 className="text-sm font-semibold tracking-widest uppercase text-accent-blue mb-2">Connect</h2>
          <h3 className="text-3xl font-bold text-primary">Get In Touch</h3>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-12 text-primary">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col"
          >
            <h4 className="text-2xl font-bold mb-6">{"Let's build something."}</h4>
            <p className="text-secondary mb-10 leading-relaxed font-light">
              {"I am currently open to new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!"}
            </p>
            
            <div className="space-y-4 mb-10">
              <a 
                href={LINKS.email} 
                className="flex items-center gap-4 text-secondary hover:text-accent-blue transition-colors border border-border p-4 rounded-xl w-max hover:bg-background focus-visible:ring-2 focus-visible:ring-accent-blue focus-visible:outline-none"
              >
                <Mail className="w-5 h-5 text-accent-blue" />
                <span className="font-medium text-sm">contact@tushargadher.com</span>
              </a>
            </div>

            <div className="flex gap-4">
              <a 
                href={LINKS.github} 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-background hover:text-accent-blue text-secondary transition-colors focus-visible:ring-2 focus-visible:ring-accent-blue focus-visible:outline-none"
                aria-label="GitHub Profile"
              >
                <FaGithub className="w-4 h-4" />
              </a>
              <a 
                href={LINKS.linkedin} 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-background hover:text-accent-purple text-secondary transition-colors focus-visible:ring-2 focus-visible:ring-accent-blue focus-visible:outline-none"
                aria-label="LinkedIn Profile"
              >
                <FaLinkedin className="w-4 h-4" />
              </a>
              <a 
                href={LINKS.twitter} 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-background hover:text-accent-teal text-secondary transition-colors focus-visible:ring-2 focus-visible:ring-accent-blue focus-visible:outline-none"
                aria-label="Twitter Profile"
              >
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
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  disabled={isSubmitting}
                  className="bg-background border border-border rounded-xl px-4 py-3 text-primary focus:outline-none focus:border-accent-blue focus-visible:ring-2 focus-visible:ring-accent-blue/30 transition-all text-sm disabled:opacity-50"
                  placeholder="John Doe"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-sm font-medium text-secondary">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={isSubmitting}
                  className="bg-background border border-border rounded-xl px-4 py-3 text-primary focus:outline-none focus:border-accent-blue focus-visible:ring-2 focus-visible:ring-accent-blue/30 transition-all text-sm disabled:opacity-50"
                  placeholder="john@example.com"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="subject" className="text-sm font-medium text-secondary">Subject</label>
                <input 
                  type="text" 
                  id="subject" 
                  required
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  disabled={isSubmitting}
                  className="bg-background border border-border rounded-xl px-4 py-3 text-primary focus:outline-none focus:border-accent-blue focus-visible:ring-2 focus-visible:ring-accent-blue/30 transition-all text-sm disabled:opacity-50"
                  placeholder="Inquiry / Project Pitch"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-sm font-medium text-secondary">Message</label>
                <textarea 
                  id="message" 
                  rows="4"
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  disabled={isSubmitting}
                  className="bg-background border border-border rounded-xl px-4 py-3 text-primary focus:outline-none focus:border-accent-blue focus-visible:ring-2 focus-visible:ring-accent-blue/30 transition-all resize-none text-sm disabled:opacity-50"
                  placeholder="How can I help you?"
                ></textarea>
              </div>
              
              {status && (
                <div 
                  className={`flex items-center gap-2 p-4 rounded-xl border text-sm transition-all duration-300 ${
                    status.type === 'success' 
                      ? 'bg-accent-teal/15 border-accent-teal/30 text-accent-teal' 
                      : 'bg-red-500/10 border-red-500/30 text-red-400'
                  }`}
                >
                  {status.type === 'success' ? (
                    <Check className="w-5 h-5 flex-shrink-0 text-accent-teal" />
                  ) : (
                    <AlertCircle className="w-5 h-5 flex-shrink-0 text-red-400" />
                  )}
                  <span>{status.message}</span>
                </div>
              )}
              
              <Button type="submit" className="w-full mt-2" disabled={isSubmitting}>
                <AnimatePresence mode="wait">
                  {isSubmitting ? (
                    <motion.div key="submitting" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                      Sending...
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
