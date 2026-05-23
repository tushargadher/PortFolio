import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, TrendingUp, SearchCode, MonitorSmartphone } from 'lucide-react';

const stats = [
  {
    icon: <TrendingUp className="w-8 h-8 text-green-400" />,
    value: "25%",
    label: "Reduced Development Effort",
    desc: "Achieved by implementing reusable Vue and Nuxt components."
  },
  {
    icon: <SearchCode className="w-8 h-8 text-primary" />,
    value: "50+",
    label: "Websites Scraped",
    desc: "Automated large scale data extraction pipelines using Python."
  },
  {
    icon: <MonitorSmartphone className="w-8 h-8 text-secondary" />,
    value: "100%",
    label: "Responsive Rate",
    desc: "Ensuring all applications are perfectly tuned for any device."
  }
];

export function Achievements() {
  return (
    <section id="achievements" className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 flex items-center justify-center gap-3">
            Key <span className="text-gradient">Highlights</span> <Trophy className="w-10 h-10 text-yellow-400" />
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5, type: 'spring' }}
              className="glass-card rounded-3xl p-8 text-center flex flex-col items-center group hover:border-primary/50"
            >
              <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                {stat.icon}
              </div>
              <h3 className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-white/40 mb-2">
                {stat.value}
              </h3>
              <h4 className="text-xl font-bold text-white mb-3">{stat.label}</h4>
              <p className="text-gray-400 text-sm leading-relaxed">{stat.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
