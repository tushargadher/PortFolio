import { motion } from 'framer-motion';

const experiences = [
  {
    role: "Software Engineer",
    company: "Cybercom Creation",
    period: "July 2024 – Present",
    points: [
      "Built scalable frontend architectures using Vue.js & Nuxt.js for enterprise applications.",
      "Improved UI rendering performance and significantly reduced bundle sizes and load times.",
      "Implemented declarative data fetching with GraphQL for optimized API communication.",
      "Engineered automated data extraction pipelines using Python (BeautifulSoup, Scrapy) across 50+ sources."
    ]
  },
  {
    role: "Software Engineer Intern",
    company: "Confidential",
    period: "Jan 2024 – June 2024",
    points: [
      "Developed responsive and accessible user interfaces using modern CSS and semantic HTML.",
      "Contributed to core product features in Vue.js & Nuxt.js codebases.",
      "Architected highly modular, typed, and reusable frontend components for a scalable UI library."
    ]
  }
];

export function Experience() {
  return (
    <section id="experience" className="py-32 relative bg-background border-t border-border">
      <div className="container mx-auto px-6 max-w-5xl">
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-sm font-semibold tracking-widest uppercase text-accent-purple mb-2">Career</h2>
          <h3 className="text-3xl font-bold text-primary">Experience</h3>
        </motion.div>

        <div className="space-y-16">
          {experiences.map((exp, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-4 group cursor-default"
            >
              <div className="md:col-span-3">
                <span className="text-accent-purple text-sm font-semibold tracking-wide">{exp.period}</span>
              </div>
              
              <div className="md:col-span-9">
                <div className="mb-4">
                  <h4 className="text-xl font-bold text-primary group-hover:text-accent-blue transition-colors duration-300">{exp.role}</h4>
                  <h5 className="text-secondary font-medium">{exp.company}</h5>
                </div>
                
                <ul className="space-y-3">
                  {exp.points.map((point, pIdx) => (
                    <li key={pIdx} className="flex gap-4 text-secondary font-light leading-relaxed">
                      <span className="mt-2.5 w-1.5 h-1.5 rounded-full bg-border flex-shrink-0 group-hover:bg-accent-purple transition-colors duration-300"></span>
                      <span>{point}</span>
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
