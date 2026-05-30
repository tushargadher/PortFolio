import React from 'react';

export function Footer() {
  return (
    <footer className="py-8 text-center border-t border-border relative z-10 bg-background">
      <div className="container mx-auto px-6 max-w-5xl flex flex-col md:flex-row items-center justify-between">
        <p className="text-secondary text-sm mb-4 md:mb-0">
          © {new Date().getFullYear()} Tushar Gadher. All rights reserved.
        </p>
        <div className="flex gap-6">
          <a href="#" className="text-secondary hover:text-primary transition-colors text-sm font-medium">
            GitHub
          </a>
          <a href="#" className="text-secondary hover:text-primary transition-colors text-sm font-medium">
            LinkedIn
          </a>
          <a href="#" className="text-secondary hover:text-primary transition-colors text-sm font-medium">
            Twitter
          </a>
        </div>
      </div>
    </footer>
  );
}
