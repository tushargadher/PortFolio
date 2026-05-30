import React from 'react';
import { motion } from 'framer-motion';

const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "Vue.js", level: 95 },
      { name: "Nuxt.js", level: 90 },
      { name: "React.js", level: 85 },
      { name: "JavaScript", level: 95 },
      { name: "HTML & CSS", level: 95 },
    ]
  },
  {
    title: "Backend & Database",
    skills: [
      { name: "Node.js", level: 80 },
      { name: "Express.js", level: 80 },
      { name: "GraphQL", level: 75 },
      { name: "MongoDB", level: 85 },
      { name: "MySQL", level: 80 },
    ]
  },
  {
    title: "Tools & Others",
    skills: [
      { name: "Python (Scraping)", level: 85 },
      { name: "Git & GitHub", level: 90 },
      { name: "VS Code", level: 95 },
      { name: "Postman", level: 90 },
    ]
  }
];

export function Skills() {
  return (
    <section id="skills" className="py-32 relative bg-surface border-t border-border">
      <div className="container mx-auto px-6 max-w-5xl">
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-sm font-medium tracking-wide uppercase text-secondary mb-2">Capabilities</h2>
          <h3 className="text-3xl font-bold text-primary">Technical Proficiency</h3>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((category, catIdx) => (
            <motion.div 
              key={catIdx}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: catIdx * 0.1, duration: 0.5 }}
              className="premium-card rounded-2xl p-8"
            >
              <h3 className="text-xl font-bold text-primary mb-6 border-b border-border pb-4">
                {category.title}
              </h3>
              
              <div className="space-y-6">
                {category.skills.map((skill, idx) => (
                  <div key={idx}>
                    <div className="flex justify-between mb-2">
                      <span className="text-secondary font-medium text-sm">{skill.name}</span>
                      <span className="text-primary text-sm font-semibold">{skill.level}%</span>
                    </div>
                    <div className="h-1.5 w-full bg-background rounded-full overflow-hidden">
                      <motion.div 
                        className="h-full bg-secondary rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2 }}
                      ></motion.div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
