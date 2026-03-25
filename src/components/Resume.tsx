import React from 'react';
import { motion } from 'motion/react';
import { Download, FileText, ExternalLink } from 'lucide-react';

export default function Resume() {
  return (
    <section className="section-padding">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="glass-card p-12 md:p-20 relative overflow-hidden"
        >
          {/* Decorative background */}
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-brand-primary/10 blur-[100px] rounded-full" />
          <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-brand-secondary/10 blur-[100px] rounded-full" />

          <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to build something scalable?</h2>
          <p className="text-lg text-text-muted mb-12 max-w-2xl mx-auto">
            I'm currently looking for new opportunities to solve complex engineering problems and contribute to high-impact platforms.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a 
              href="/resume.pdf" 
              className="w-full sm:w-auto px-10 py-5 bg-white text-black font-bold rounded-2xl flex items-center justify-center gap-3 transition-all hover:bg-brand-primary hover:text-white"
            >
              <Download size={20} />
              Download Full Resume
            </a>
            <button className="w-full sm:w-auto px-10 py-5 bg-white/5 border border-white/10 font-bold rounded-2xl flex items-center justify-center gap-3 transition-all hover:bg-white/10">
              <FileText size={20} />
              View Experience Highlights
            </button>
          </div>
          
          <div className="mt-12 flex items-center justify-center gap-2 text-sm text-text-muted">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            Currently open to Full-time roles & Contracts
          </div>
        </motion.div>
      </div>
    </section>
  );
}
