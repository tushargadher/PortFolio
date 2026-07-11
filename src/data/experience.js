import { SITE_CONFIG } from '../config/site';

export const experiences = [
  {
    role: "Software Engineer",
    company: SITE_CONFIG.company,
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
