import React from 'react';
import { motion } from 'motion/react';
import { Terminal, Cpu, ShieldCheck, Zap } from 'lucide-react';

const highlights = [
  {
    icon: <Zap className="text-brand-primary" size={24} />,
    title: "Production Scale",
    description: "Experience building systems for 700+ fleet airline operations with high availability."
  },
  {
    icon: <ShieldCheck className="text-brand-primary" size={24} />,
    title: "Security First",
    description: "Implementing JWT, WAF, and secure secret management for production APIs."
  },
  {
    icon: <Cpu className="text-brand-primary" size={24} />,
    title: "Event-Driven",
    description: "Expertise in Kafka, SQS, and EventBridge for decoupled, resilient architectures."
  },
  {
    icon: <Terminal className="text-brand-primary" size={24} />,
    title: "Infrastructure",
    description: "Provisioning AWS resources via Terraform with robust CI/CD pipelines."
  }
];

export default function About() {
  return (
    <section id="about" className="section-padding relative">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Engineering for Scale</h2>
            <div className="space-y-6 text-lg text-text-muted leading-relaxed">
              <p>
                With over <span className="text-white font-semibold">5+ years of experience</span> in software engineering, I specialize in architecting and building robust backend systems that power mission-critical operations. My expertise lies in <span className="text-white font-semibold">distributed systems</span>, cloud-native architecture, and event-driven patterns.
              </p>
              <p>
                I have a deep background in building <span className="text-white font-semibold">airline-scale production systems</span>, where reliability and zero-downtime are paramount. My work often involves decoupling complex monoliths into resilient microservices using <span className="text-white font-semibold">Kafka, SQS, and EventBridge</span>.
              </p>
              <p>
                I am passionate about <span className="text-white font-semibold">developer experience (DX)</span> and internal platforms. I believe that high-quality internal tooling and standardized CI/CD pipelines are the foundation of high-velocity engineering teams.
              </p>
            </div>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card p-8 hover:border-brand-primary/30 transition-all group relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-brand-primary/5 blur-3xl -z-10 group-hover:bg-brand-primary/10 transition-colors" />
                <div className="mb-4 p-3 rounded-xl bg-brand-primary/5 w-fit group-hover:bg-brand-primary/10 transition-colors">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-text-muted text-sm leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
