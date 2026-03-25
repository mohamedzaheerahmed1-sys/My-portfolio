import React from 'react';
import { motion } from 'motion/react';
import { Mail, Linkedin, Github, Send, MessageSquare } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="section-padding bg-white/[0.01]">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Let's Connect</h2>
            <p className="text-lg text-text-muted mb-12 max-w-lg leading-relaxed">
              Whether you're a recruiter, hiring manager, or fellow engineer, I'm always open to discussing distributed systems, cloud architecture, or potential collaborations.
            </p>

            <div className="space-y-6">
              <a 
                href="mailto:mohamedzaheerahmed@gmail.com" 
                className="flex items-center gap-4 p-6 glass-card hover:border-brand-primary/30 transition-all group"
              >
                <div className="p-3 rounded-xl bg-brand-primary/10 group-hover:bg-brand-primary/20 transition-colors">
                  <Mail className="text-brand-primary" size={24} />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-widest text-text-muted mb-1">Email</div>
                  <div className="text-lg font-medium">mohamedzaheerahmed@gmail.com</div>
                </div>
              </a>

              <div className="grid sm:grid-cols-2 gap-6">
                <a 
                  href="https://linkedin.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-6 glass-card hover:border-brand-primary/30 transition-all group"
                >
                  <div className="p-3 rounded-xl bg-brand-primary/10 group-hover:bg-brand-primary/20 transition-colors">
                    <Linkedin className="text-brand-primary" size={24} />
                  </div>
                  <div>
                    <div className="text-xs font-bold uppercase tracking-widest text-text-muted mb-1">LinkedIn</div>
                    <div className="text-lg font-medium">Connect</div>
                  </div>
                </a>

                <a 
                  href="https://github.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-6 glass-card hover:border-brand-primary/30 transition-all group"
                >
                  <div className="p-3 rounded-xl bg-brand-primary/10 group-hover:bg-brand-primary/20 transition-colors">
                    <Github className="text-brand-primary" size={24} />
                  </div>
                  <div>
                    <div className="text-xs font-bold uppercase tracking-widest text-text-muted mb-1">GitHub</div>
                    <div className="text-lg font-medium">Follow</div>
                  </div>
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="glass-card p-8 md:p-12"
          >
            <div className="flex items-center gap-3 mb-8">
              <MessageSquare className="text-brand-primary" size={24} />
              <h3 className="text-2xl font-bold">Send a Message</h3>
            </div>

            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-text-muted">Full Name</label>
                  <input 
                    type="text" 
                    placeholder="John Doe"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-brand-primary/50 transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-text-muted">Email Address</label>
                  <input 
                    type="email" 
                    placeholder="john@example.com"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-brand-primary/50 transition-colors"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-text-muted">Subject</label>
                <input 
                  type="text" 
                  placeholder="Opportunity / Collaboration"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-brand-primary/50 transition-colors"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-text-muted">Message</label>
                <textarea 
                  rows={4}
                  placeholder="Tell me about your project or role..."
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-brand-primary/50 transition-colors resize-none"
                />
              </div>

              <button 
                type="submit"
                className="w-full py-4 bg-brand-primary text-white font-bold rounded-xl flex items-center justify-center gap-2 transition-all hover:bg-brand-primary/80"
              >
                <Send size={18} />
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
