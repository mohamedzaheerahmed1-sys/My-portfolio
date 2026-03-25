import React from 'react';
import { motion } from 'motion/react';
import { Shield, RefreshCcw, Share2, Eye, Code } from 'lucide-react';

const principles = [
  {
    title: "Design for Failure",
    description: "Implementing circuit breakers, retries with exponential backoff, and dead-letter queues to ensure system resilience.",
    icon: <Shield className="text-brand-primary" size={24} />
  },
  {
    title: "Backward Compatibility",
    description: "Ensuring zero-downtime deployments through versioned APIs and schema-safe event evolution.",
    icon: <RefreshCcw className="text-brand-primary" size={24} />
  },
  {
    title: "Event-Driven First",
    description: "Decoupling services via asynchronous messaging to improve scalability and fault isolation.",
    icon: <Share2 className="text-brand-primary" size={24} />
  },
  {
    title: "Observability-First",
    description: "Building systems with comprehensive logging, metrics, and tracing to enable rapid incident response.",
    icon: <Eye className="text-brand-primary" size={24} />
  },
  {
    title: "Developer-First APIs",
    description: "Designing intuitive, well-documented APIs and SDKs that prioritize developer productivity and onboarding.",
    icon: <Code className="text-brand-primary" size={24} />
  }
];

export default function ArchitectureMindset() {
  return (
    <section className="section-padding bg-white/[0.01]">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Architecture Mindset</h2>
          <p className="text-text-muted max-w-2xl mx-auto">
            My engineering philosophy is built on principles that prioritize long-term stability, scalability, and maintainability.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {principles.map((p, index) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card p-8 hover:border-brand-primary/30 transition-all group"
            >
              <div className="mb-6 p-3 rounded-xl bg-brand-primary/5 w-fit group-hover:bg-brand-primary/10 transition-colors">
                {p.icon}
              </div>
              <h3 className="text-xl font-bold mb-4">{p.title}</h3>
              <p className="text-text-muted text-sm leading-relaxed">
                {p.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
