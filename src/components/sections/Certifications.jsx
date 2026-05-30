import React from 'react';
import { motion } from 'framer-motion';
import { Award, Code, CheckCircle } from 'lucide-react';
import { Badge } from '../ui/Badge';

const certifications = [
  {
    title: "JavaScript Algorithms",
    issuer: "freeCodeCamp",
    icon: <Code className="w-5 h-5 text-primary" />,
    date: "2023"
  },
  {
    title: "React Certificate",
    issuer: "HackerRank",
    icon: <CheckCircle className="w-5 h-5 text-primary" />,
    date: "2023"
  },
  {
    title: "Web Dev Internship",
    issuer: "IBM",
    icon: <Award className="w-5 h-5 text-primary" />,
    date: "2024"
  }
];

export function Certifications() {
  return (
    <section id="certifications" className="py-32 relative bg-surface border-t border-border">
      <div className="container mx-auto px-6 max-w-5xl relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-sm font-medium tracking-wide uppercase text-secondary mb-2">Validation</h2>
          <h3 className="text-3xl font-bold text-primary">Licenses & Certifications</h3>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {certifications.map((cert, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="premium-card rounded-2xl p-6"
            >
              <div className="flex items-center justify-between mb-8">
                <div className="w-10 h-10 rounded-lg bg-background border border-border flex items-center justify-center">
                  {cert.icon}
                </div>
                <Badge variant="outline" className="!bg-background !text-secondary !border-border">{cert.date}</Badge>
              </div>
              <h3 className="text-lg font-bold text-primary mb-1">{cert.title}</h3>
              <p className="text-secondary text-sm font-medium">{cert.issuer}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
