import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';

const projects = [
  {
    title: "Chat App",
    description: "A real-time messaging application supporting instant communication, real-time typing indicators, and user presence mapping.",
    tech: ["React", "Node.js", "Express", "MongoDB", "Socket.io"],
    demoLink: "#",
    githubLink: "#",
    color: "from-blue-500 to-cyan-400"
  },
  {
    title: "Flipkart Clone",
    description: "A fully-functional e-commerce platform replicating key features of Flipkart, featuring product search, cart management, and checkout flows.",
    tech: ["React", "Express.js", "MongoDB", "Redux"],
    demoLink: "#",
    githubLink: "#",
    color: "from-yellow-400 to-orange-500"
  },
  {
    title: "BookStore Platform",
    description: "A comprehensive digital bookstore application enabling users to browse, create, read, update, and delete book entries in a centralized database.",
    tech: ["React", "MERN Stack", "Tailwind CSS"],
    demoLink: "#",
    githubLink: "#",
    color: "from-purple-500 to-pink-500"
  }
];

export function Projects() {
  return (
    <section id="projects" className="py-24 relative bg-black/50">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Featured <span className="text-gradient">Projects</span></h2>
          <p className="text-gray-400">A selection of my recent works.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="glass-card rounded-3xl overflow-hidden group flex flex-col h-full"
            >
              {/* Image / Graphic Placeholder */}
              <div className={`h-48 w-full bg-gradient-to-br ${project.color} opacity-80 group-hover:opacity-100 transition-opacity flex items-center justify-center relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
                <h3 className="text-3xl font-black text-white mix-blend-overlay opacity-50 transform -rotate-12 scale-150 group-hover:scale-110 transition-transform duration-500">
                  {project.title.toUpperCase()}
                </h3>
              </div>
              
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold text-white mb-3">{project.title}</h3>
                <p className="text-gray-400 mb-6 text-sm leading-relaxed flex-grow">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tech.map((tech, tIdx) => (
                    <Badge key={tIdx} variant="outline">{tech}</Badge>
                  ))}
                </div>
                
                <div className="flex gap-4 mt-auto">
                  <a href={project.demoLink} className="flex-1">
                    <Button variant="primary" className="w-full text-sm !px-4 !py-2" icon={ExternalLink}>
                      Live Demo
                    </Button>
                  </a>
                  <a href={project.githubLink}>
                    <Button variant="outline" className="text-sm !px-4 !py-2 !rounded-lg" icon={FaGithub}>
                    </Button>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
