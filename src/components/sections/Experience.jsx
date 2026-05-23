import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar } from 'lucide-react';

const experiences = [
  {
    role: "Software Engineer",
    company: "Cybercom Creation",
    period: "July 2024 – Present",
    points: [
      "Built scalable frontend apps using Vue.js & Nuxt.js.",
      "Improved UI performance and significantly reduced application load times.",
      "Implemented and used GraphQL for optimized, declarative API communication.",
      "Automated data extraction by scraping 50+ websites using Python (BeautifulSoup, Scrapy)."
    ]
  },
  {
    role: "Software Engineer Intern",
    company: "Confidential",
    period: "Jan 2024 – June 2024",
    points: [
      "Built responsive and interactive web applications using HTML, CSS, JavaScript.",
      "Gained hands-on experience by actively contributing to Vue.js & Nuxt.js projects.",
      "Created highly modular and reusable frontend components tailored for scalability."
    ]
  }
];

export function Experience() {
  return (
    <section id="experience" className="py-24 relative">
      <div className="container mx-auto px-6 max-w-5xl">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Professional <span className="text-gradient">Experience</span></h2>
        </motion.div>

        <div className="relative border-l-2 border-primary/30 ml-3 md:ml-0 md:mx-auto lg:mx-0">
          {experiences.map((exp, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
              className="mb-12 ml-8 relative"
            >
              {/* Timeline Dot */}
              <div className="absolute -left-[41px] top-1.5 w-5 h-5 bg-background border-4 border-primary rounded-full shadow-[0_0_10px_rgba(14,165,233,0.8)]"></div>
              
              <div className="glass-card rounded-2xl p-8 hover:-translate-y-1 transition-transform">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-1 flex items-center gap-2">
                      <Briefcase className="w-5 h-5 text-primary" />
                      {exp.role}
                    </h3>
                    <h4 className="text-xl text-secondary font-medium">{exp.company}</h4>
                  </div>
                  <div className="flex items-center gap-2 text-gray-400 mt-2 md:mt-0 bg-white/5 px-3 py-1 rounded-full text-sm">
                    <Calendar className="w-4 h-4" />
                    <span>{exp.period}</span>
                  </div>
                </div>
                
                <ul className="space-y-3 mt-6">
                  {exp.points.map((point, pIdx) => (
                    <li key={pIdx} className="flex gap-3 text-gray-300">
                      <span className="text-primary mt-1.5 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0"></span>
                      <span className="leading-relaxed">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
