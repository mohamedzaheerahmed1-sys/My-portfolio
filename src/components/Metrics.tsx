import React from 'react';
import { motion } from 'motion/react';
import { TrendingUp, ShieldAlert, Globe, Users } from 'lucide-react';

const stats = [
  {
    value: "40%",
    label: "Release Frequency",
    description: "Increased velocity through Terraform-based IaC and CI/CD pipelines.",
    icon: <TrendingUp className="text-brand-primary" size={24} />
  },
  {
    value: "20%",
    label: "Incident Reduction",
    description: "Enhanced reliability via fault-tolerant architecture and automated testing.",
    icon: <ShieldAlert className="text-brand-primary" size={24} />
  },
  {
    value: "35%",
    label: "Faster Resolution",
    description: "Reduced Kafka-related incident troubleshooting time through better observability.",
    icon: <Globe className="text-brand-primary" size={24} />
  },
  {
    value: "1,100+",
    label: "Fleet Hours Recovered",
    description: "Daily operational efficiency gained through cockpit digitization at SWA.",
    icon: <Users className="text-brand-primary" size={24} />
  }
];

export default function Metrics() {
  return (
    <section className="section-padding bg-brand-primary/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center p-8 glass-card border-brand-primary/10"
            >
              <div className="mb-6 inline-flex p-4 rounded-2xl bg-brand-primary/10">
                {stat.icon}
              </div>
              <div className="text-4xl font-bold mb-2 gradient-text">{stat.value}</div>
              <div className="text-sm font-bold uppercase tracking-widest mb-4">{stat.label}</div>
              <p className="text-xs text-text-muted leading-relaxed">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
