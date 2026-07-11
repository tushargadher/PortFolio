import { LINKS } from '../../config/links';

export function Footer() {
  return (
    <footer className="py-8 text-center border-t border-border relative z-10 bg-background">
      <div className="container mx-auto px-6 max-w-5xl flex flex-col md:flex-row items-center justify-between">
        <p className="text-secondary text-sm mb-4 md:mb-0">
          © {new Date().getFullYear()} Tushar Gadher. All rights reserved.
        </p>
        <div className="flex gap-6">
          <a 
            href={LINKS.github} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-secondary hover:text-accent-blue transition-colors text-sm font-medium focus-visible:ring-2 focus-visible:ring-accent-blue focus-visible:outline-none rounded px-1"
          >
            GitHub
          </a>
          <a 
            href={LINKS.linkedin} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-secondary hover:text-accent-purple transition-colors text-sm font-medium focus-visible:ring-2 focus-visible:ring-accent-blue focus-visible:outline-none rounded px-1"
          >
            LinkedIn
          </a>
          <a 
            href={LINKS.twitter} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-secondary hover:text-accent-teal transition-colors text-sm font-medium focus-visible:ring-2 focus-visible:ring-accent-blue focus-visible:outline-none rounded px-1"
          >
            Twitter
          </a>
        </div>
      </div>
    </footer>
  );
}
