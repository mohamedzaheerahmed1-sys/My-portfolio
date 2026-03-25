import React from 'react';
import { motion } from 'motion/react';
import { Briefcase, Calendar, MapPin, CheckCircle2 } from 'lucide-react';

const experiences = [
  {
    company: "Southwest Airlines",
    role: "Full Stack Engineer (Contract)",
    period: "Jul 2023 – Present",
    location: "Dallas, TX",
    featured: true,
    description: "Leading cockpit digitization and building resilient backend services for mission-critical flight operations.",
    bullets: [
      "Led cockpit digitization by building Angular-based dispatcher and crew workflow systems, reducing aircraft turnaround time by 5 minutes across a 700+ fleet, recovering 1,100+ fleet hours daily",
      "Designed and owned REST APIs and AWS Lambda services across 8+ domains using microservices architecture, enabling zero-downtime deployments through backward-compatible contracts",
      "Built event-driven systems using Kafka, SQS, SNS, and EventBridge to decouple services, improving resilience and reducing Kafka-related incident troubleshooting time by 35%",
      "Implemented secure API architecture with JWT authorization, AWS Secrets Manager, WAF, and CloudFront ensuring secure external and internal integrations",
      "Built Kafka pipelines using Avro schema evolution and Schema Registry to maintain cross-domain data consistency",
      "Provisioned AWS infrastructure using Terraform across 5 environments with CI/CD pipelines (canary deployments, rollback), increasing release frequency by 40% and reducing incidents by 20%",
      "Developed test automation using Selenium, Cucumber BDD, and LocalStack achieving high test coverage and preventing failures pre-CI"
    ],
    metrics: [
      "1,100+ fleet hours recovered daily",
      "40% increase in release frequency",
      "35% faster Kafka troubleshooting"
    ]
  },
  {
    company: "WIBI-TECH",
    role: "Technical Co-Founder",
    period: "2021 – 2023",
    location: "Remote",
    featured: false,
    description: "Architected and built a SaaS-style business operations platform from the ground up.",
    bullets: [
      "Built a React-based platform with product catalog, categories, and quotation system for real-world business workflows",
      "Designed a scalable backend architecture supporting multi-tenant SaaS requirements",
      "Focused on customer-centric workflows and high-performance UI components"
    ]
  },
  {
    company: "Bright Bird Technologies",
    role: "Software Engineer",
    period: "2019 – 2021",
    location: "Remote",
    featured: false,
    description: "Modernized legacy systems through serverless re-architecture and API development.",
    bullets: [
      "Led serverless re-architecture projects using AWS Lambda and Node.js",
      "Developed robust Node.js APIs integrated with SQS for asynchronous processing",
      "Built responsive frontend interfaces using Angular"
    ]
  },
  {
    company: "Hiptify Solutions",
    role: "Software Engineer",
    period: "2018 – 2019",
    location: "Remote",
    featured: false,
    description: "Full-stack development with a focus on event streaming and performance.",
    bullets: [
      "Implemented Kafka event streaming for real-time data processing",
      "Optimized full-stack performance through database tuning and efficient API design",
      "Contributed to core product features across the entire development lifecycle"
    ]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="section-padding">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Professional Experience</h2>
            <p className="text-text-muted max-w-xl">
              A history of building production-ready systems and internal platforms for high-stakes environments.
            </p>
          </div>
        </div>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative ${exp.featured ? 'glass-card p-8 md:p-12' : 'pl-8 md:pl-12 border-l border-white/10'}`}
            >
              {exp.featured && (
                <div className="absolute -top-4 left-8 px-4 py-1 bg-brand-primary text-white text-xs font-bold rounded-full uppercase tracking-widest">
                  Featured Role
                </div>
              )}
              
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">{exp.role}</h3>
                  <div className="flex flex-wrap items-center gap-4 text-sm text-text-muted">
                    <span className="flex items-center gap-1.5 text-brand-primary font-semibold">
                      <Briefcase size={16} />
                      {exp.company}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Calendar size={16} />
                      {exp.period}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <MapPin size={16} />
                      {exp.location}
                    </span>
                  </div>
                </div>
              </div>

              <p className="text-lg text-white/80 mb-8 leading-relaxed">
                {exp.description}
              </p>

              <div className="grid md:grid-cols-2 gap-8">
                <ul className="space-y-4">
                  {exp.bullets.map((bullet, i) => (
                    <li key={i} className="flex gap-3 text-text-muted text-sm leading-relaxed">
                      <CheckCircle2 size={18} className="text-brand-primary shrink-0 mt-0.5" />
                      {bullet}
                    </li>
                  ))}
                </ul>

                {exp.metrics && (
                  <div className="bg-white/[0.03] rounded-2xl p-6 border border-white/5">
                    <h4 className="text-xs font-bold uppercase tracking-widest text-brand-primary mb-4">Impact Metrics</h4>
                    <div className="space-y-4">
                      {exp.metrics.map((metric, i) => (
                        <div key={i} className="flex items-center gap-3">
                          <div className="w-1.5 h-1.5 rounded-full bg-brand-primary" />
                          <span className="text-white font-medium">{metric}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
