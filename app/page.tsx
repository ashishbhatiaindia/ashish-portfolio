'use client';
import { motion } from 'framer-motion';
import { 
  Mail, MapPin, Phone, Share2, Terminal, GraduationCap, Award, ChevronRight,
  Zap, Database, Cpu, Server, Shield, Code, Users, Layers, Layout
} from 'lucide-react';

export default function Portfolio() {
  // Direct Raw URL to your image on GitHub
  const imagePath = "https://raw.githubusercontent.com/ashishbhatiaindia/ashish-portfolio/main/profile.png.png";

  const skills = {
    languages: ["Java", "FTL"],
    frameworks: ["Spring Boot", "Microservices", "REST APIs", "SOAP", "TCP", "Kafka", "RabbitMQ", "GraphQL"],
    cloud: ["AWS", "Docker", "Kubernetes", "CI/CD", "Jenkins", "Git"],
    databases: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "Elasticsearch"],
    architecture: ["System Design", "Design Patterns", "SOLID Principles", "Domain-Driven Design", "Event-Driven Architecture"]
  };

  return (
    <main className="min-h-screen bg-[#020617] text-slate-100 selection:bg-blue-500/30 font-sans leading-relaxed">
      {/* Background Ambient Glow */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-blue-600/5 blur-[120px] pointer-events-none" />

      {/* HERO SECTION */}
      <section className="relative pt-20 pb-16 px-6 max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-10">
          
          {/* Profile Image with Glow Effect */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative flex-shrink-0"
          >
            <div className="absolute inset-0 bg-blue-500/20 blur-2xl rounded-full" />
            <img 
              src={imagePath}
              alt="Ashish Bhatia"
              className="relative w-44 h-44 md:w-56 md:h-56 rounded-full object-cover border-4 border-slate-800 shadow-2xl"
            />
          </motion.div>

          {/* Headline & Contact Info */}
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="flex-1 text-center md:text-left">
            <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-4 text-white">
              Ashish Bhatia
            </h1>
            <p className="text-2xl md:text-3xl text-blue-400 font-bold mb-8 italic">
              Senior Software Engineer & Systems Architect
            </p>
            
            <div className="flex flex-wrap justify-center md:justify-start gap-y-4 gap-x-8 text-slate-400 font-medium">
              <a href="mailto:ashishbhatia.india@gmail.com" className="flex items-center gap-2 hover:text-white transition-colors">
                <Mail size={18}/> ashishbhatia.india@gmail.com
              </a>
              <span className="flex items-center gap-2"><Phone size={18}/> 8800847114</span>
              <span className="flex items-center gap-2"><MapPin size={18}/> Gurugram, India</span>
              <a href="https://linkedin.com/in/ashishbhatia" target="_blank" className="flex items-center gap-2 hover:text-white transition-colors">
                <Share2 size={18}/> LinkedIn
              </a>
            </div>

            <p className="mt-8 text-lg text-slate-300 max-w-3xl leading-relaxed">
              Senior software engineer with 9+ years of experience designing and building scalable distributed systems. 
              Expert in microservices architecture, system design, and cloud-native technologies with a proven track record of 
              delivering high-impact solutions for enterprise-scale applications.
            </p>
          </motion.div>
        </div>
      </section>

      {/* SKILLS GRID */}
      <section className="relative px-6 max-w-6xl mx-auto mb-32 pt-10">
        <h2 className="text-xs font-black uppercase tracking-[0.3em] text-blue-500 mb-8">Technical Arsenal</h2>
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

      {/* EXPERIENCE SECTION */}
      <section className="relative px-6 max-w-6xl mx-auto mb-32">
        <h2 className="text-4xl font-black mb-16 flex items-center gap-4 text-white uppercase tracking-tight">
          <Terminal className="text-blue-500" /> Professional Experience
        </h2>
        
        <div className="space-y-20">
          <ExperienceBlock 
            title="Senior Member of Technical Staff"
            company="Grey Orange"
            date="April 2025 – Present"
            bullets={[
              "Lead architecture and design of mission-critical microservices supporting warehouse automation systems processing 100K+ transactions daily.",
              "Architect scalable event-driven systems using Kafka and Spring Boot, reducing system latency by 40%.",
              "Drive technical decision-making for cross-team initiatives and establishing design patterns.",
              "Mentor senior engineers on system design, code quality, and architectural principles."
            ]}
          />

          <ExperienceBlock 
            title="Assistant Technical Manager"
            company="Grey Orange"
            date="April 2024 – March 2025"
            bullets={[
              "Managed a team of 2 engineers, leading sprint planning and technical roadmap development.",
              "Designed and implemented distributed caching using Redis, improving API response times by 60%.",
              "Established CI/CD pipelines and automated testing, reducing deployment time by 50%.",
              "Collaborated with product teams to translate business requirements into technical solutions."
            ]}
          />

          <ExperienceBlock 
            title="Senior Software Developer"
            company="Grey Orange"
            date="April 2022 – April 2024"
            bullets={[
              "Built RESTful and GraphQL APIs serving 50+ enterprise clients globally.",
              "Optimized database queries and connection pooling, reducing load by 35%.",
              "Designed fault-tolerant integration layers for WMS/ERP systems, ensuring 99.9% uptime SLA.",
              "Led migration of monolithic application to microservices architecture."
            ]}
          />

          <ExperienceBlock 
            title="Software Developer"
            company="Grey Orange"
            date="July 2019 – March 2022"
            bullets={[
              "Developed core robotics orchestration features using Java and Spring Boot.",
              "Implemented asynchronous messaging with RabbitMQ to improve system resilience.",
              "Automated deployment pipelines and established monitoring infrastructure."
            ]}
          />

          <ExperienceBlock 
            title="Consultant"
            company="Zillious Solutions"
            date="June 2016 – June 2019"
            bullets={[
              "Developed and deployed enterprise Java applications for banking and finance clients.",
              "Integrated third-party APIs and payment gateways ensuring secure transaction processing.",
              "Worked directly with clients to gather requirements and provide technical consultation."
            ]}
          />
        </div>
      </section>

      {/* EDUCATION & CERTIFICATIONS */}
      <section className="relative px-6 max-w-6xl mx-auto pb-32 border-t border-slate-900 pt-20 grid grid-cols-1 md:grid-cols-2 gap-16">
        <div>
          <h2 className="text-3xl font-black mb-10 flex items-center gap-3 text-white uppercase">
            <GraduationCap className="text-blue-500" /> Education
          </h2>
          <div className="space-y-8">
            <div>
              <h4 className="text-xl font-bold text-slate-200">Master of Computer Applications (MCA)</h4>
              <p className="text-blue-400">University of Delhi</p>
              <p className="text-slate-500 text-xs mt-1">Delhi, India</p>
            </div>
            <div>
              <h4 className="text-xl font-bold text-slate-200">Bachelor of Computer Applications (BCA)</h4>
              <p className="text-blue-400">Makhanlal Chaturvedi National University</p>
              <p className="text-slate-500 text-xs mt-1">Bhopal, India</p>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-3xl font-black mb-10 flex items-center gap-3 text-white uppercase">
            <Award className="text-blue-500" /> Certifications
          </h2>
          <ul className="space-y-4 text-slate-400 font-medium">
            <li className="flex gap-3"><ChevronRight className="text-blue-500 flex-shrink-0" /> Software Architecture & Design of Modern Large Scale Systems</li>
            <li className="flex gap-3"><ChevronRight className="text-blue-500 flex-shrink-0" /> Software Architecture & System Design Practical Case Studies</li>
            <li className="flex gap-3"><ChevronRight className="text-blue-500 flex-shrink-0" /> Low Level System Design, Design Patterns & SOLID Principles</li>
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
        <span className="text-slate-500 font-mono text-xs font-bold uppercase">{date}</span>
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
