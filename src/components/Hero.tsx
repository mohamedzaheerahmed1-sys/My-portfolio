import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Download, Mail } from 'lucide-react';

const techBadges = [
  'Node.js', 'TypeScript', 'AWS Lambda', 'API Gateway', 'DynamoDB', 
  'Kafka', 'Terraform', 'Docker', 'Next.js', 'Angular'
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center section-padding pt-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-primary/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-brand-secondary/10 blur-[120px] rounded-full" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      </div>

      <div className="max-w-5xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-block py-1 px-3 rounded-full bg-brand-primary/10 border border-brand-primary/20 text-brand-primary text-xs font-bold tracking-wider uppercase mb-6">
            Senior Full Stack Engineer
          </span>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6">
            Zaheer Ahmed Mohammed
          </h1>
          
          <h2 className="text-2xl md:text-3xl font-medium text-white mb-8 max-w-4xl leading-tight">
            I build scalable <span className="text-brand-primary">cloud-native platforms</span>, event-driven systems, and production-grade APIs powering mission-critical workflows.
          </h2>
          
          <p className="text-lg md:text-xl text-text-muted mb-12 max-w-3xl leading-relaxed">
            Specializing in AWS serverless, Kafka-based architectures, and microservices design with a focus on reliability, performance, and developer experience.
          </p>

          <div className="flex flex-wrap gap-4 mb-16">
            <a 
              href="#projects" 
              className="group px-8 py-4 bg-white text-black font-bold rounded-xl flex items-center gap-2 transition-all hover:bg-brand-primary hover:text-white"
            >
              View Systems
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </a>
            <a 
              href="/resume.pdf" 
              className="px-8 py-4 bg-white/5 border border-white/10 font-bold rounded-xl flex items-center gap-2 transition-all hover:bg-white/10"
            >
              <Download size={18} />
              Download Resume
            </a>
          </div>

          <div className="pt-8 border-t border-white/5">
            <p className="text-xs font-bold uppercase tracking-widest text-text-muted mb-6">Core Infrastructure Stack</p>
            <div className="flex flex-wrap gap-3">
              {techBadges.map((tech) => (
                <span 
                  key={tech} 
                  className="px-3 py-1.5 rounded-lg bg-white/[0.03] border border-white/10 text-xs font-medium text-text-muted hover:border-brand-primary/50 hover:text-white transition-all cursor-default"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
