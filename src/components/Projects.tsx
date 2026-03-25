import React from 'react';
import { motion } from 'motion/react';
import { Github, ExternalLink, Code2, Layers, Cpu } from 'lucide-react';

const projects = [
  {
    title: "Event-Driven Flight Operations Platform",
    description: "A mission-critical distributed system for Southwest Airlines, managing cockpit digitization and crew workflows across a 700+ aircraft fleet.",
    problem: "Legacy synchronous systems caused operational delays and lacked the resilience needed for real-time flight data synchronization.",
    tech: ["Node.js", "TypeScript", "Kafka", "AWS Lambda", "API Gateway", "DynamoDB", "Terraform"],
    highlights: [
      "Kafka-based event streaming for real-time sync",
      "Microservices architecture with 8+ domains",
      "Avro schema evolution for data consistency",
      "Recovered 1,100+ fleet hours daily",
      "Zero-downtime deployments via canary releases"
    ],
    icon: <Share2 className="text-brand-primary" />,
    image: "https://picsum.photos/seed/flight/800/600"
  },
  {
    title: "Auth Platform & API Gateway System",
    description: "A centralized security and authentication platform providing secure access control for internal and external integrations.",
    problem: "Fragmented security implementations across services led to vulnerabilities and inconsistent authorization logic.",
    tech: ["Node.js", "TypeScript", "JWT", "OAuth", "AWS Secrets Manager", "WAF", "CloudFront"],
    highlights: [
      "JWT-based authorization with secure token rotation",
      "Centralized API Gateway with WAF protection",
      "Automated secret management via AWS Secrets Manager",
      "Improved developer onboarding for new integrations",
      "Backward-compatible API contracts"
    ],
    icon: <Shield className="text-brand-primary" />,
    image: "https://picsum.photos/seed/auth/800/600"
  },
  {
    title: "WIBI-TECH CRM & Automation Platform",
    description: "A full-scale SaaS platform for business operations, featuring product catalogs, quotation systems, and customer workflows.",
    problem: "Small to medium businesses lacked a unified, scalable platform to manage complex quotation and sales workflows.",
    tech: ["React", "Node.js", "PostgreSQL", "Tailwind CSS", "AWS"],
    highlights: [
      "Multi-tenant SaaS architecture",
      "Complex quotation and product catalog logic",
      "Automated business workflow triggers",
      "Real-world business impact for SME clients",
      "Modular and extensible UI components"
    ],
    icon: <Layout className="text-brand-primary" />,
    image: "https://picsum.photos/seed/crm/800/600"
  }
];

import { Share2, Shield, Layout } from 'lucide-react';

export default function Projects() {
  return (
    <section id="projects" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Engineering Projects</h2>
          <p className="text-text-muted max-w-xl">
            A selection of systems designed with a focus on scalability, reliability, and developer experience.
          </p>
        </div>

        <div className="grid gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass-card overflow-hidden group"
            >
              <div className="grid lg:grid-cols-2">
                <div className="relative overflow-hidden h-64 lg:h-auto">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-bg-dark/80 to-transparent lg:hidden" />
                </div>
                
                <div className="p-8 md:p-12 flex flex-col">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 rounded-lg bg-brand-primary/10">
                      {project.icon}
                    </div>
                    <h3 className="text-2xl font-bold">{project.title}</h3>
                  </div>

                  <p className="text-text-muted mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="mb-8">
                    <h4 className="text-xs font-bold uppercase tracking-widest text-white/40 mb-4">The Challenge</h4>
                    <p className="text-sm text-text-muted italic">"{project.problem}"</p>
                  </div>

                  <div className="mb-8">
                    <h4 className="text-xs font-bold uppercase tracking-widest text-white/40 mb-4">Engineering Highlights</h4>
                    <div className="grid sm:grid-cols-2 gap-x-4 gap-y-2">
                      {project.highlights.map((item) => (
                        <div key={item} className="flex items-center gap-2 text-sm text-text-muted">
                          <div className="w-1 h-1 rounded-full bg-brand-primary" />
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-auto pt-8 border-t border-white/5 flex flex-wrap items-center justify-between gap-6">
                    <div className="flex flex-wrap gap-2">
                      {project.tech.slice(0, 4).map((t) => (
                        <span key={t} className="text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded bg-white/5 text-white/60">
                          {t}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex items-center gap-4">
                      <button className="text-sm font-bold text-white hover:text-brand-primary transition-colors flex items-center gap-2">
                        View Case Study
                        <ArrowRight size={16} />
                      </button>
                      <div className="flex items-center gap-3 ml-4 border-l border-white/10 pl-4">
                        <a href="#" className="text-text-muted hover:text-white transition-colors"><Github size={20} /></a>
                        <a href="#" className="text-text-muted hover:text-white transition-colors"><ExternalLink size={20} /></a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { ArrowRight } from 'lucide-react';
