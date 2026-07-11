import { motion } from 'framer-motion';
import { Award, Code, CheckCircle } from 'lucide-react';
import { Badge } from '../ui/Badge';

const certifications = [
  {
    title: "JavaScript Algorithms",
    issuer: "freeCodeCamp",
    icon: <Code className="w-5 h-5 text-accent-blue" />,
    iconBg: "bg-accent-blue/10 border-accent-blue/20",
    badgeVariant: "blue",
    date: "2023"
  },
  {
    title: "React Certificate",
    issuer: "HackerRank",
    icon: <CheckCircle className="w-5 h-5 text-accent-purple" />,
    iconBg: "bg-accent-purple/10 border-accent-purple/20",
    badgeVariant: "purple",
    date: "2023"
  },
  {
    title: "Web Dev Internship",
    issuer: "IBM",
    icon: <Award className="w-5 h-5 text-accent-teal" />,
    iconBg: "bg-accent-teal/10 border-accent-teal/20",
    badgeVariant: "teal",
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
          <h2 className="text-sm font-semibold tracking-widest uppercase text-accent-purple mb-2">Validation</h2>
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
              whileHover={{ y: -4 }}
              className="premium-card rounded-2xl p-6 cursor-default"
            >
              <div className="flex items-center justify-between mb-8">
                <div className={`w-10 h-10 rounded-lg border flex items-center justify-center transition-colors duration-300 ${cert.iconBg}`}>
                  {cert.icon}
                </div>
                <Badge variant={cert.badgeVariant}>{cert.date}</Badge>
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
