import { motion } from 'framer-motion';
import { TrendingUp, SearchCode, MonitorSmartphone } from 'lucide-react';

const stats = [
  {
    icon: <TrendingUp className="w-6 h-6 text-accent-teal" />,
    iconBg: "bg-accent-teal/10 border-accent-teal/20",
    value: "25%",
    valueColor: "text-accent-teal",
    label: "Reduced Development Effort",
    desc: "Achieved by implementing reusable Vue and Nuxt components."
  },
  {
    icon: <SearchCode className="w-6 h-6 text-accent-purple" />,
    iconBg: "bg-accent-purple/10 border-accent-purple/20",
    value: "50+",
    valueColor: "text-accent-purple",
    label: "Websites Scraped",
    desc: "Automated large scale data extraction pipelines using Python."
  },
  {
    icon: <MonitorSmartphone className="w-6 h-6 text-accent-blue" />,
    iconBg: "bg-accent-blue/10 border-accent-blue/20",
    value: "100%",
    valueColor: "text-accent-blue",
    label: "Responsive Rate",
    desc: "Ensuring all applications are perfectly tuned for any device."
  }
];

export function Achievements() {
  return (
    <section id="achievements" className="py-32 relative bg-background border-t border-border">
      <div className="container mx-auto px-6 max-w-5xl">
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-sm font-semibold tracking-widest uppercase text-accent-teal mb-2">Metrics</h2>
          <h3 className="text-3xl font-bold text-primary">Key Highlights</h3>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              whileHover={{ y: -4 }}
              className="premium-card rounded-2xl p-8 flex flex-col items-start group cursor-default"
            >
              <div className={`w-12 h-12 rounded-xl border flex items-center justify-center mb-8 transition-colors duration-300 ${stat.iconBg}`}>
                {stat.icon}
              </div>
              <h3 className={`text-4xl font-bold mb-2 transition-colors duration-300 ${stat.valueColor}`}>
                {stat.value}
              </h3>
              <h4 className="text-lg font-bold text-primary mb-2">{stat.label}</h4>
              <p className="text-secondary text-sm leading-relaxed">{stat.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
