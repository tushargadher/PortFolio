import React from 'react';
import { motion } from 'framer-motion';
import { Award, Code, CheckCircle } from 'lucide-react';
import { Badge } from '../ui/Badge';

const certifications = [
  {
    title: "JavaScript Algorithms",
    issuer: "freeCodeCamp",
    icon: <Code className="w-6 h-6 text-[#f5a623]" />,
    date: "2023"
  },
  {
    title: "React Certificate",
    issuer: "HackerRank",
    icon: <CheckCircle className="w-6 h-6 text-[#1ba94c]" />,
    date: "2023"
  },
  {
    title: "Web Dev Internship",
    issuer: "IBM",
    icon: <Award className="w-6 h-6 text-[#054ada]" />,
    date: "2024"
  }
];

export function Certifications() {
  return (
    <section id="certifications" className="py-24 relative bg-black/50 overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full mix-blend-screen filter blur-[80px]"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Licenses & <span className="text-gradient">Certifications</span></h2>
        </motion.div>

        <div className="flex flex-col md:flex-row justify-center gap-6 max-w-4xl mx-auto">
          {certifications.map((cert, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15, duration: 0.5 }}
              className="glass-card rounded-2xl p-6 flex-1 hover:border-primary/30 group"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center group-hover:scale-110 transition-transform">
                  {cert.icon}
                </div>
                <Badge variant="outline">{cert.date}</Badge>
              </div>
              <h3 className="text-xl font-bold text-white mb-1">{cert.title}</h3>
              <p className="text-gray-400 font-medium">{cert.issuer}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
