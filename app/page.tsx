'use client';
import { motion } from 'framer-motion';
import { Server, Zap, Cpu, Terminal, ArrowRight } from 'lucide-react';

export default function ProfessionalPortfolio() {
  const metrics = [
    { label: "Latency Reduction", value: "40%", sub: "via Kafka & Spring Boot", icon: <Zap className="text-amber-400" /> },
    { label: "Daily Transactions", value: "100K+", sub: "Enterprise-scale Robotics", icon: <Server className="text-blue-400" /> },
    { label: "API Speed Gain", value: "60%", sub: "via Redis Strategy", icon: <Cpu className="text-emerald-400" /> }
  ];

  return (
    <div className="min-h-screen bg-[#020617] text-slate-300 font-sans selection:bg-blue-500/30">
      {/* AMBIENT LIGHTING */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-blue-600/10 blur-[120px] pointer-events-none" />

      <nav className="max-w-6xl mx-auto px-6 py-10 flex justify-between items-center relative z-10">
        <div className="font-black text-xl tracking-tighter text-white">AB.</div>
        <div className="flex gap-8 text-xs font-bold uppercase tracking-widest text-slate-500">
          <a href="#" className="hover:text-blue-400 transition-colors">Experience</a>
          <a href="mailto:ashishbhatia.india@gmail.com" className="hover:text-blue-400 transition-colors">Contact</a>
        </div>
      </nav>

      <main className="max-w-5xl mx-auto px-6 pt-20 pb-32 relative z-10">
        <header className="mb-24">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }}
            className="text-7xl md:text-8xl font-black tracking-tight text-white mb-6"
          >
            Ashish Bhatia
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-2xl text-slate-400 max-w-2xl font-medium leading-relaxed"
          >
            Senior Member of Technical Staff specializing in <span className="text-white">Distributed Systems</span> and high-frequency robotics architecture at <span className="text-blue-500">Grey Orange</span>.
          </motion.p>
        </header>

        {/* BENTO GRID METRICS */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-32">
          {metrics.map((m, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="p-8 rounded-2xl bg-slate-900/50 border border-slate-800 backdrop-blur-sm hover:border-blue-500/50 transition-all group"
            >
              <div className="mb-4">{m.icon}</div>
              <div className="text-5xl font-black text-white mb-2">{m.value}</div>
              <div className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-1">{m.label}</div>
              <div className="text-[10px] italic text-slate-600 group-hover:text-slate-400 transition-colors">{m.sub}</div>
            </motion.div>
          ))}
        </section>

        {/* WORK EXPERIENCE */}
        <section className="mb-32">
          <h2 className="text-xs font-black uppercase tracking-[0.3em] text-blue-500 mb-12">Leadership</h2>
          <div className="space-y-16">
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="flex flex-col md:flex-row md:justify-between mb-4 border-b border-slate-800 pb-4">
                <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors">Senior Member of Technical Staff</h3>
                <span className="text-slate-500 font-mono">2025 — Present</span>
              </div>
              <p className="text-slate-400 leading-relaxed max-w-2xl">
                Leading the architectural evolution of robotics microservices. Mentoring senior engineering tiers on system design, SOLID principles, and processing **100K+ daily transactions**.
              </p>
            </motion.div>
          </div>
        </section>

        {/* SKILLS */}
        <footer className="pt-20 border-t border-slate-900 flex flex-wrap gap-4">
          {["Java", "Spring Boot", "Kafka", "Redis", "AWS", "Kubernetes", "MCA - Delhi University"].map(skill => (
            <span key={skill} className="px-4 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-[10px] font-bold uppercase tracking-tighter text-slate-500">
              {skill}
            </span>
          ))}
        </footer>
      </main>
    </div>
  );
}
