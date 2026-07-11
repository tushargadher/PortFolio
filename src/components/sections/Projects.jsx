import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';
import { LINKS } from '../../config/links';

const projects = [
  {
    title: "Real-time Messaging Architecture",
    type: "Chat Application",
    description: "Architected a scalable real-time messaging system supporting instant communication, real-time typing indicators, and user presence mapping.",
    challenges: "Handling concurrent socket connections and optimistic UI updates for zero-latency feel.",
    tech: ["React", "Node.js", "Express", "MongoDB", "Socket.io"],
    demoLink: LINKS.chatApp,
    githubLink: LINKS.github,
  },
  {
    title: "High-Performance E-commerce",
    type: "Flipkart Clone",
    description: "Built a fully-functional e-commerce platform replicating complex checkout flows, state management, and product search.",
    challenges: "Optimizing Redux store performance with large product catalogs and complex cart state.",
    tech: ["React", "Express.js", "MongoDB", "Redux"],
    demoLink: LINKS.flipkartClone,
    githubLink: LINKS.github,
  },
  {
    title: "Centralized Data Management",
    type: "BookStore Platform",
    description: "Developed a comprehensive digital bookstore application enabling complex CRUD operations in a centralized database.",
    challenges: "Building a responsive and accessible UI system using pure Tailwind CSS utility classes.",
    tech: ["React", "MERN Stack", "Tailwind CSS"],
    demoLink: LINKS.bookstore,
    githubLink: LINKS.github,
  }
];

const getBadgeVariant = (techName) => {
  const tech = techName.toLowerCase();
  if (tech.includes('react') || tech.includes('socket') || tech.includes('redux')) return 'blue';
  if (tech.includes('node') || tech.includes('express') || tech.includes('mongo') || tech.includes('mern')) return 'purple';
  return 'teal';
};

export function Projects() {
  return (
    <section id="projects" className="py-32 relative bg-surface border-t border-border">
      <div className="container mx-auto px-6 max-w-5xl">
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-sm font-semibold tracking-widest uppercase text-accent-blue mb-2">Selected Work</h2>
          <h3 className="text-3xl font-bold text-primary">Engineering Showcase</h3>
        </motion.div>

        <div className="space-y-12">
          {projects.map((project, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.6 }}
              whileHover={{ y: -4 }}
              className="premium-card rounded-2xl overflow-hidden p-8 md:p-10 cursor-default"
            >
              <div className="flex flex-col lg:flex-row gap-10">
                <div className="flex-1">
                  <div className="mb-6">
                    <span className="text-xs font-semibold text-secondary tracking-widest uppercase mb-2 block">{project.type}</span>
                    <h4 className="text-2xl font-bold text-primary">{project.title}</h4>
                  </div>
                  
                  <div className="space-y-6 text-secondary font-light">
                    <p className="leading-relaxed">
                      {project.description}
                    </p>
                    <div>
                      <strong className="text-primary font-medium text-sm block mb-1">Engineering Challenge</strong>
                      <p className="text-sm leading-relaxed">{project.challenges}</p>
                    </div>
                  </div>
                </div>
                
                <div className="flex-1 flex flex-col justify-between">
                  <div className="mb-8 lg:mb-0">
                    <strong className="text-primary font-medium text-sm block mb-3">Tech Stack</strong>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, tIdx) => (
                        <Badge key={tIdx} variant={getBadgeVariant(tech)}>
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex gap-4 mt-auto justify-start lg:justify-end">
                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="focus-visible:outline-none">
                      <Button variant="outline" className="text-sm" icon={FaGithub}>
                        Source
                      </Button>
                    </a>
                    <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="focus-visible:outline-none">
                      <Button variant="primary" className="text-sm" icon={ExternalLink}>
                        Live Demo
                      </Button>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
