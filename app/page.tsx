'use client';
import { motion } from 'framer-motion';
import { 
  Zap, Database, Cpu, Mail, MapPin, Phone, 
  Terminal, Server, Shield, GraduationCap, Award, ChevronRight,
  Code, Users, Layers, Layout, Share2, Globe, Box
} from 'lucide-react';

export default function FullPortfolio() {
  const skills = {
    languages: ["Java", "FTL"],
    frameworks: ["Spring Boot", "Microservices", "REST APIs", "SOAP", "TCP", "Kafka", "RabbitMQ", "GraphQL"],
    cloud: ["AWS", "Docker", "Kubernetes", "CI/CD", "Jenkins", "Git"],
    databases: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "Elasticsearch"],
    design: ["System Design", "Design Patterns", "SOLID", "DDD", "Event-Driven Architecture"]
  };

  return (
    <main className="min-h-screen bg-[#020617] text-slate-100 selection:bg-blue-500/30 font-sans leading-relaxed">
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-blue-600/5 blur-[120px] pointer-events-none" />

      {/* HEADER SECTION */}
      <section className="relative pt-24 pb-16 px-6 max-w-6xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-4 text-white">
            Ashish Bhatia
          </h1>
          <p className="text-2xl md:text-3xl text-blue-400 font-bold mb-8 italic">
            Senior Software Engineer & Systems Architect
          </p>
          
          <div className="flex flex-wrap gap-y-4 gap-x-8 text-slate-400 font-medium border-b border-slate-800 pb-12">
            <a href="mailto:ashishbhatia.india@gmail.com" className="flex items-center gap-2 hover:text-white transition-colors"><Mail size={18}/> ashishbhatia.india@gmail.com</a>
            <span className="flex items-center gap-2"><Phone size={18}/> 8800847114</span>
            <span className="flex items-center gap-2"><MapPin size={18}/> Gurugram, India</span>
            <a href="https://linkedin.com/in/ashishbhatia" target="_blank" className="flex items-center gap-2 hover:text-white transition-colors"><Share2 size={18}/> LinkedIn Profile</a>
          </div>

          <p className="mt-12 max-w-4xl text-xl text-slate-300">
            Senior software engineer with <span className="text-blue-400 font-bold">9+ years of experience</span> designing and building scalable distributed systems. Expert in microservices, system design, and delivering high-impact solutions for enterprise-scale robotics and automation.
          </p>
        </motion.div>
      </section>

      {/* TECHNICAL SKILLS BENTO GRID */}
      <section className="relative px-6 max-w-6xl mx-auto mb-32">
        <h2 className="text-xs font-black uppercase tracking-[0.3em] text-blue-500 mb-8">Technical Proficiency</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category} className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800/50 backdrop-blur-sm">
              <h3 className="text-xs font-black uppercase tracking-widest text-blue-400 mb-4">{category}</h3>
              <div className="flex flex-wrap gap-2">
                {items.map(item => (
                  <span key={item} className="px-2 py-1 bg-slate-800 rounded text-[10px] font-bold text-slate-300">{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PROFESSIONAL EXPERIENCE */}
      <section className="relative px-6 max-w-6xl mx-auto mb-32">
        <h2 className="text-4xl font-black mb-16 flex items-center gap-4 text-white">
          <Terminal className="text-blue-500" /> Professional Experience
        </h2>
        
        <div className="space-y-24">
          <ExperienceBlock 
            title="Senior Member of Technical Staff"
            company="Grey Orange"
            date="April 2025 – Present"
            bullets={[
              "Lead architecture and design of mission-critical microservices supporting warehouse automation systems processing 100K+ transactions daily.",
              "Architect scalable event-driven systems using Kafka and Spring Boot, reducing system latency by 40% and improving throughput.",
              "Drive technical decision-making for cross-team initiatives, establishing design patterns and best practices.",
              "Mentor senior engineers on system design, code quality, and architectural principles."
            ]}
          />

          <ExperienceBlock 
            title="Assistant Technical Manager"
            company="Grey Orange"
            date="April 2024 – March 2025"
            bullets={[
              "Managed a team of engineers, overseeing sprint planning, technical roadmaps, and high-priority feature delivery.",
              "Designed and implemented Redis caching strategy, improving API response times by 60%.",
              "Established automated CI/CD pipelines and DevOps culture, reducing deployment time by 50%.",
              "Collaborated with product teams to translate business requirements into robust technical architectures."
            ]}
          />

          <ExperienceBlock 
            title="Senior Software Developer"
            company="Grey Orange"
            date="April 2022 – April 2024"
            bullets={[
              "Built high-performance RESTful and GraphQL APIs serving 50+ enterprise clients globally.",
              "Optimized complex database queries and connection pooling, reducing system load by 35%.",
              "Designed fault-tolerant integration layers for third-party systems (WMS, ERP), ensuring 99.9% uptime compliance.",
              "Led migration of monolithic applications to a microservices architecture, improving scalability."
            ]}
          />

          <ExperienceBlock 
            title="Software Developer"
            company="Grey Orange"
            date="July 2019 – March 2022"
            bullets={[
              "Developed core features for robotics orchestration platform using Java, Spring Boot, and Microservices.",
              "Implemented asynchronous messaging with RabbitMQ for inter-service communication, improving resilience.",
              "Collaborated with QA and DevOps to automate pipelines and establish monitoring/alerting infrastructure."
            ]}
          />

          <ExperienceBlock 
            title="Consultant"
            company="Zillious Solutions"
            date="June 2016 – June 2019"
            bullets={[
              "Developed and deployed enterprise Java applications for banking and finance clients.",
              "Integrated secure payment gateways and third-party APIs ensuring compliant transaction processing.",
              "Worked directly with clients to gather requirements and provide technical consultation."
            ]}
          />
        </div>
      </section>

      {/* EDUCATION & CERTS */}
      <section className="relative px-6 max-w-6xl mx-auto pb-32 grid grid-cols-1 md:grid-cols-2 gap-16 border-t border-slate-900 pt-20">
        <div>
          <h2 className="text-3xl font-black mb-10 flex items-center gap-3 text-white">
            <GraduationCap className="text-blue-500" /> Education
          </h2>
          <div className="space-y-8">
            <EducationItem 
              degree="Master of Computer Applications (MCA)"
              uni="University of Delhi"
              loc="Delhi, India"
            />
            <EducationItem 
              degree="Bachelor of Computer Applications (BCA)"
              uni="Makhanlal Chaturvedi National University"
              loc="Bhopal, India"
            />
          </div>
        </div>

        <div>
          <h2 className="text-3xl font-black mb-10 flex items-center gap-3 text-white">
            <Award className="text-blue-500" /> Certifications
          </h2>
          <ul className="space-y-4">
            {[
              "Software Architecture & Design of Modern Large Scale Systems",
              "Software Architecture & System Design Practical Case Studies",
              "Low Level System Design, Design Patterns & SOLID Principles"
            ].map(cert => (
              <li key={cert} className="flex gap-4 text-slate-400 font-medium group">
                <ChevronRight className="text-blue-500 group-hover:translate-x-1 transition-transform" />
                {cert}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}

function ExperienceBlock({ title, company, date, bullets }: any) {
  return (
    <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="relative pl-10 border-l border-slate-800">
      <div className="absolute -left-[5px] top-0 w-[9px] h-[9px] rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.5)]" />
      <div className="flex flex-col md:flex-row md:justify-between mb-2">
        <h3 className="text-2xl font-bold text-white tracking-tight">{title}</h3>
        <span className="text-slate-500 font-mono text-xs font-bold">{date}</span>
      </div>
      <p className="text-blue-400 font-bold mb-6 text-lg tracking-tight uppercase">{company}</p>
      <ul className="space-y-3 max-w-4xl">
        {bullets.map((point: string, i: number) => (
          <li key={i} className="text-slate-400 flex gap-3 text-sm md:text-base leading-relaxed">
            <span className="text-blue-500 mt-2 font-bold select-none text-xs">●</span>
            {point}
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

function EducationItem({ degree, uni, loc }: any) {
  return (
    <div>
      <h4 className="text-xl font-bold text-slate-200">{degree}</h4>
      <p className="text-blue-400 font-medium">{uni}</p>
      <p className="text-slate-500 text-[10px] font-black uppercase mt-1 tracking-widest">{loc}</p>
    </div>
  );
}
