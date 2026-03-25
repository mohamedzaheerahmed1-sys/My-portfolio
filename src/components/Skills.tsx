import React from 'react';
import { motion } from 'motion/react';
import { Server, Layout, Cloud, Share2, Shield, Box } from 'lucide-react';

const skillGroups = [
  {
    title: "Backend & APIs",
    icon: <Server className="text-brand-primary" size={20} />,
    skills: ["Node.js", "TypeScript", "Express", "REST APIs", "JWT", "OAuth", "Java (Supporting)"]
  },
  {
    title: "Event-Driven Systems",
    icon: <Share2 className="text-brand-primary" size={20} />,
    skills: ["Kafka", "Avro", "Schema Registry", "SQS", "SNS", "EventBridge", "RabbitMQ"]
  },
  {
    title: "Cloud & DevOps",
    icon: <Cloud className="text-brand-primary" size={20} />,
    skills: ["AWS Lambda", "API Gateway", "DynamoDB", "CloudFront", "WAF", "Route53", "ECS", "IAM", "Terraform", "Docker", "GitLab CI/CD"]
  },
  {
    title: "Frontend",
    icon: <Layout className="text-brand-primary" size={20} />,
    skills: ["React", "Next.js", "Angular 18", "RxJS", "Tailwind CSS"]
  },
  {
    title: "Testing & Quality",
    icon: <Shield className="text-brand-primary" size={20} />,
    skills: ["Jest", "Cucumber BDD", "Selenium", "Mockito", "LocalStack"]
  },
  {
    title: "Monitoring & DBs",
    icon: <Box className="text-brand-primary" size={20} />,
    skills: ["CloudWatch", "Grafana", "Splunk", "DynamoDB", "PostgreSQL", "MongoDB", "MySQL"]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="section-padding bg-white/[0.01]">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical Arsenal</h2>
          <p className="text-text-muted max-w-xl">
            A comprehensive stack focused on building scalable, resilient, and maintainable production systems.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillGroups.map((group, index) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="glass-card p-8 hover:border-brand-primary/30 transition-all group"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-brand-primary/10 group-hover:bg-brand-primary/20 transition-colors">
                  {group.icon}
                </div>
                <h3 className="text-lg font-bold">{group.title}</h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span 
                    key={skill}
                    className="px-3 py-1 rounded-md bg-white/5 border border-white/5 text-sm text-text-muted hover:text-white hover:border-white/20 transition-all"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
