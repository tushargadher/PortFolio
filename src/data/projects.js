import { LINKS } from '../config/links';

export const projects = [
  {
    title: "Real-time Messaging Architecture",
    type: "Chat Application",
    description: "Architected a scalable real-time messaging system supporting instant communication, real-time typing indicators, and user presence mapping.",
    challenges: "Handling concurrent socket connections and optimistic UI updates for zero-latency feel.",
    tech: ["React", "Node.js", "Express", "MongoDB", "Socket.io"],
    demoLink: LINKS.chatApp,
    githubLink: LINKS.github,
  },
  {
    title: "High-Performance E-commerce",
    type: "Flipkart Clone",
    description: "Built a fully-functional e-commerce platform replicating complex checkout flows, state management, and product search.",
    challenges: "Optimizing Redux store performance with large product catalogs and complex cart state.",
    tech: ["React", "Express.js", "MongoDB", "Redux"],
    demoLink: LINKS.flipkartClone,
    githubLink: LINKS.github,
  },
  {
    title: "Centralized Data Management",
    type: "BookStore Platform",
    description: "Developed a comprehensive digital bookstore application enabling complex CRUD operations in a centralized database.",
    challenges: "Building a responsive and accessible UI system using pure Tailwind CSS utility classes.",
    tech: ["React", "MERN Stack", "Tailwind CSS"],
    demoLink: LINKS.bookstore,
    githubLink: LINKS.github,
  }
];
