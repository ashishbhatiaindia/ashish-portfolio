'use client';
import { motion } from 'framer-motion';
import { 
  Zap, Database, Cpu, Mail, MapPin, Linkedin as LinkedinIcon, Phone, 
  Terminal, Server, Shield, GraduationCap, Award, ChevronRight 
} from 'lucide-react';

export default function Portfolio() {
  const skills = {
    languages: ["Java", "FTL"],
    frameworks: ["Spring Boot", "Microservices", "REST APIs", "SOAP", "TCP", "Kafka", "RabbitMQ"],
    cloud: ["AWS", "Docker", "Kubernetes", "CI/CD", "Jenkins", "Git"],
    databases: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "Elasticsearch"]
  };

  return (
    <main className="min-h-screen bg-[#020617] text-slate-100 selection:bg-blue-500/30 font-sans">
      {/* BACKGROUND AMBIENCE */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-blue-600/5 blur-[120px] pointer-events-none" />

      {/* HEADER / HERO */}
      <section className="relative pt-24 pb-16 px-6 max-w-6xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="text-7xl md:text-8xl font-black tracking-tighter mb-4 text-white">
            Ashish Bhatia
          </h1>
          <p className="text-2xl md:text-3xl text-blue-400 font-bold mb-8">Senior Software Engineer</p>
          
          <div className="flex flex-wrap gap-y-4 gap-x-8 text-slate-400 font-medium">
            <a href="mailto:ashishbhatia.india@gmail.com" className="flex items-center gap-2 hover:text-white transition-colors"><Mail size={18}/> ashishbhatia.india@gmail.com</a>
            <span className="flex items-center gap-2"><Phone size={18}/> 8800847114</span>
            <span className="flex items-center gap-2"><MapPin size={18}/> Gurugram, India</span>
            <a href="https://linkedin.com/in/ashishbhatia" className="flex items-center gap-2 hover:text-white transition-colors"><LinkedinIcon size={18}/> linkedin.com/in/ashishbhatia</a>
          </div>

          <div className="mt-12 max-w-3xl p-6 rounded-2xl bg-blue-500/5 border border-blue-500/10 text-slate-300 leading-relaxed italic">
            "Senior software engineer with 9+ years of experience designing and building scalable distributed systems. Expert in microservices architecture, system design, and cloud-native technologies."
          </div>
        </motion.div>
      </section>

      {/* SKILLS GRID */}
      <section className="relative px-6 max-w-6xl mx-auto mb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {Object.entries(skills).map(([category, items], i) => (
            <div key={category} className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800">
              <h3 className="text-xs font-black uppercase tracking-widest text-blue-500 mb-4">{category}</h3>
              <div className="flex flex-wrap gap-2">
                {items.map(item => (
                  <span key={item} className="text-sm font-semibold text-slate-300">{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* EXPERIENCE SECTION */}
      <section className="relative px-6 max-w-6xl mx-auto mb-32">
        <h2 className="text-4xl font-black mb-16 flex items-center gap-4">
          <Terminal className="text-blue-500" /> Professional Experience
        </h2>
        
        <div className="space-y-24">
          {/* Grey Orange - SMTS */}
          <ExperienceCard 
            title="Senior Member of Technical Staff"
            company="Grey Orange"
            period="April 2025 — Present"
            location="Gurugram, India"
            points={[
              "Lead architecture and design of mission-critical microservices processing 100K+ transactions daily.",
              "Architected event-driven systems using Kafka and Spring Boot, reducing system latency by 40%.",
              "Establishing design patterns and best practices for cross-team technical initiatives."
            ]}
          />

          {/* Grey Orange - Previous Role */}
          <ExperienceCard 
            title="Software Developer"
            company="Grey Orange"
            period="July 2019 — March 2022"
            location="Gurugram, India"
            points={[
              "Developed core features for robotics orchestration platform using Java and Spring Boot.",
              "Implemented asynchronous messaging with RabbitMQ for improved system resilience.",
              "Automated deployment pipelines and established monitoring/alerting infrastructure."
            ]}
          />

          {/* Zillious Solutions */}
          <ExperienceCard 
            title="Consultant"
            company="Zillious Solutions"
            period="June 2016 — June 2019"
            location="Delhi, India"
            points={[
              "Developed and deployed enterprise Java applications for banking and finance clients.",
              "Integrated third-party APIs and payment gateways ensuring secure transaction processing.",
              "Gathered requirements and provided technical consultation for successful project delivery."
            ]}
          />
        </div>
      </section>

      {/* EDUCATION & CERTS */}
      <section className="relative px-6 max-w-6xl mx-auto pb-32 grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-3xl font-black mb-8 flex items-center gap-3">
            <GraduationCap className="text-blue-500" /> Education
          </h2>
          <div className="space-y-6">
            <div className="p-6 rounded-2xl bg-slate-900/30 border border-slate-800">
              <h4 className="font-bold text-white">Master of Computer Applications (MCA)</h4>
              <p className="text-slate-400">University of Delhi</p>
            </div>
            <div className="p-6 rounded-2xl bg-slate-900/30 border border-slate-800">
              <h4 className="font-bold text-white">Bachelor of Computer Applications (BCA)</h4>
              <p className="text-slate-400">Makhanlal Chaturvedi National University</p>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-3xl font-black mb-8 flex items-center gap-3">
            <Award className="text-blue-500" /> Certifications
          </h2>
          <ul className="space-y-4">
            {[
              "Software Architecture & Design of Modern Large Scale Systems",
              "Software Architecture & System Design Practical Case Studies",
              "Low Level System Design, Design Patterns & SOLID Principles"
            ].map(cert => (
              <li key={cert} className="flex gap-3 text-slate-400 font-medium">
                <ChevronRight className="text-blue-500 shrink-0" size={20} />
                {cert}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}

function ExperienceCard({ title, company, period, location, points }) {
  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      whileInView={{ opacity: 1 }} 
      viewport={{ once: true }}
      className="group relative pl-8 border-l-2 border-slate-800 hover:border-blue-500 transition-colors"
    >
      <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-slate-900 border-2 border-slate-800 group-hover:border-blue-500 transition-colors" />
      <div className="flex flex-col md:flex-row md:justify-between items-start mb-6">
        <div>
          <h3 className="text-2xl font-bold text-white">{title}</h3>
          <p className="text-lg text-blue-400 font-semibold">{company}</p>
        </div>
        <div className="text-right mt-2 md:mt-0">
          <p className="text-slate-200 font-mono text-sm uppercase tracking-wider">{period}</p>
          <p className="text-slate-500 text-xs font-bold uppercase">{location}</p>
        </div>
      </div>
      <ul className="space-y-3 max-w-3xl">
        {points.map((p, i) => (
          <li key={i} className="text-slate-400 leading-relaxed flex gap-3">
            <span className="text-blue-500 mt-1.5 shrink-0 w-1.5 h-1.5 rounded-full bg-blue-500" />
            {p}
          </li>
        ))}
      </ul>
    </motion.div>
  );
}
