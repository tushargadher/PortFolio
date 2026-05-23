import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Zap, Layout } from 'lucide-react';

export function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  const highlights = [
    {
      icon: <Zap className="w-6 h-6 text-primary" />,
      title: "Performance Focus",
      desc: "Improved UI performance and reduced load times in production apps."
    },
    {
      icon: <Layout className="w-6 h-6 text-secondary" />,
      title: "Scalable Architecture",
      desc: "Built scalable frontend apps using Vue.js, Nuxt.js, and React.js."
    },
    {
      icon: <Code2 className="w-6 h-6 text-green-400" />,
      title: "Web Scraping",
      desc: "Scraped 50+ websites using Python (BeautifulSoup, Scrapy)."
    }
  ];

  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="max-w-4xl mx-auto"
        >
          <motion.h2 variants={itemVariants} className="text-3xl md:text-5xl font-bold mb-8 text-center">
            About <span className="text-gradient">Me</span>
          </motion.h2>

          <motion.div variants={itemVariants} className="glass-card rounded-3xl p-8 md:p-12 mb-12">
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed font-light">
              I am a results-driven <strong className="text-white font-medium">Software Engineer</strong> specializing in Frontend Development. 
              With expertise in modern frameworks like <span className="text-primary font-medium">Vue.js, Nuxt.js, and React.js</span>, 
              I am passionate about building scalable, high-performance applications with a strong focus on UI/UX and optimized communication via GraphQL.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {highlights.map((item, idx) => (
              <motion.div 
                key={idx}
                variants={itemVariants}
                className="glass-card rounded-2xl p-6 group hover:-translate-y-2"
              >
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
