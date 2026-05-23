import React from 'react';

export function Footer() {
  return (
    <footer className="py-8 text-center border-t border-white/5 relative z-10 bg-background/50 backdrop-blur-sm">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
        <p className="text-gray-500 text-sm mb-4 md:mb-0">
          © {new Date().getFullYear()} Tushar Gadher. All rights reserved.
        </p>
        <div className="flex gap-6">
          <a href="#" className="text-gray-500 hover:text-primary transition-colors text-sm">
            GitHub
          </a>
          <a href="#" className="text-gray-500 hover:text-primary transition-colors text-sm">
            LinkedIn
          </a>
          <a href="#" className="text-gray-500 hover:text-primary transition-colors text-sm">
            Twitter
          </a>
        </div>
      </div>
    </footer>
  );
}
