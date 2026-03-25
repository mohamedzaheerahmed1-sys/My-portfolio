import React from 'react';
import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 px-6 md:px-12 lg:px-24 border-t border-white/5 bg-bg-dark">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
          <div className="text-center md:text-left">
            <div className="text-xl font-bold tracking-tighter mb-2">Zaheer Ahmed Mohammed</div>
            <div className="text-sm text-text-muted">Full Stack Engineer | Node.js, AWS, Distributed Systems</div>
          </div>

          <div className="flex items-center gap-6">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-text-muted hover:text-white transition-colors">
              <Github size={20} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-text-muted hover:text-white transition-colors">
              <Linkedin size={20} />
            </a>
            <a href="mailto:mohamedzaheerahmed@gmail.com" className="text-text-muted hover:text-white transition-colors">
              <Mail size={20} />
            </a>
          </div>

          <button 
            onClick={scrollToTop}
            className="p-3 rounded-full bg-white/5 border border-white/10 text-text-muted hover:text-white hover:bg-white/10 transition-all"
            aria-label="Scroll to top"
          >
            <ArrowUp size={20} />
          </button>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8 border-t border-white/5 text-xs text-text-muted uppercase tracking-widest font-bold">
          <div>© {new Date().getFullYear()} All Rights Reserved</div>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
