import { motion } from 'framer-motion';

export function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section id="about" className="py-32 relative bg-background border-t border-border">
      <div className="container mx-auto px-6 max-w-5xl">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
            <motion.div variants={itemVariants} className="lg:col-span-4">
              <h2 className="text-sm font-semibold tracking-widest uppercase text-accent-purple mb-2">
                About
              </h2>
              <h3 className="text-3xl font-bold text-primary">
                Engineering <br /> Mindset
              </h3>
            </motion.div>
            
            <div className="lg:col-span-8 space-y-10 text-lg text-secondary font-light leading-relaxed">
              <motion.div variants={itemVariants}>
                <p>
                  I am a results-driven <strong className="text-accent-purple font-medium">Frontend Engineer</strong> who cares deeply about the intersection of design and engineering. My focus is on building scalable, high-performance web applications that feel fast and look beautiful.
                </p>
              </motion.div>
              
              <motion.div variants={itemVariants}>
                <p>
                  With expertise in <span className="text-accent-blue font-medium">React, Vue.js, and Nuxt.js</span>, I specialize in crafting robust UI systems, optimizing frontend architecture, and ensuring seamless communication with backend services via GraphQL and REST.
                </p>
              </motion.div>

              <motion.div variants={itemVariants} className="pt-6 border-t border-border">
                <h4 className="text-primary font-medium mb-4 text-base">Core Principles</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <h5 className="text-accent-blue font-semibold text-sm mb-1">Performance First</h5>
                    <p className="text-sm text-secondary">Optimizing rendering pipelines, minimizing bundle sizes, and ensuring buttery-smooth interactions.</p>
                  </div>
                  <div>
                    <h5 className="text-accent-purple font-semibold text-sm mb-1">Scalable Systems</h5>
                    <p className="text-sm text-secondary">Building component libraries and architectural foundations that scale with the product.</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
