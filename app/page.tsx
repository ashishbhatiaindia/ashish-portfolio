'use client';
import { motion } from 'framer-motion';
import { 
  Zap, Database, Cpu, Mail, MapPin, Linkedin as LinkedinIcon, Phone, 
  Terminal, Server, Shield, GraduationCap, Award, ChevronRight 
} from 'lucide-react';

export default function Portfolio() {
  const skills = {
    languages: ["Java", "FTL"],
    frameworks: ["Spring Boot", "Microservices", "REST APIs", "Kafka", "RabbitMQ"],
    cloud: ["AWS", "Docker", "Kubernetes", "CI/CD", "Jenkins", "Git"],
    databases: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "Elasticsearch"]
  };

  return (
    <main className="min-h-screen bg-[#020617] text-slate-100 selection:bg-blue-500/30 font-sans">
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-blue-600/5 blur-[120px] pointer-events-none" />

      <section className="relative pt-24 pb-16 px-6 max-w-6xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-4 text-white">
            Ashish Bhatia
          </h1>
          <p className="text-2xl md:text-3xl text-blue-400 font-bold mb-8">Senior Software Engineer</p>
          
          <div className="flex flex-wrap gap-y-4 gap-x-8 text-slate-400 font-medium">
            <a href="mailto:ashishbhatia.india@gmail.com" className="flex items-center gap-2 hover:text-white transition-colors"><Mail size={18}/> ashishbhatia.india@gmail.com</a>
            <span className="flex items-center gap-2"><Phone size={18}/> 8800847114</span>
            <span className="flex items-center gap-2"><MapPin size={18}/> Gurugram, India</span>
            <a href="https://linkedin.com/in/ashishbhatia" target="_blank" className="flex items-center gap-2 hover:text-white transition-colors"><LinkedinIcon size={18}/> LinkedIn</a>
          </div>
        </motion.div>
      </section>

      {/* Skills & Experience sections as previously defined... */}
      <section className="relative px-6 max-w-6xl mx-auto mb-32">
        <h2 className="text-4xl font-black mb-16 flex items-center gap-4">
          <Terminal className="text-blue-500" /> Professional Experience
        </h2>
        <div className="space-y-16">
            <div className="border-l-2 border-slate-800 pl-8 relative">
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-blue-500" />
                <h3 className="text-2xl font-bold text-white">Senior Member of Technical Staff</h3>
                <p className="text-blue-400 font-bold">Grey Orange | 2025 — Present</p>
                <ul className="mt-4 text-slate-400 space-y-2">
                    <li>• Leading architecture of microservices processing 100K+ daily transactions.</li>
                    <li>• Reduced system latency by 40% using Kafka and Spring Boot.</li>
                </ul>
            </div>
            {/* Add other roles similarly */}
        </div>
      </section>
    </main>
  );
}
