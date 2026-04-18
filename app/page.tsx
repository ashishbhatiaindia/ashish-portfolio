'use client';
import { motion } from 'framer-motion';
import { Server, Zap, Shield, Cpu, ExternalLink, Mail } from 'lucide-react';

export default function ProfessionalPortfolio() {
  const metrics = [
    { label: "Latency Reduction", value: "40%", sub: "via Kafka & Spring Boot", icon: <Zap className="text-amber-400" /> },
    { label: "Daily Transactions", value: "100K+", sub: "Enterprise-scale Robotics", icon: <Server className="text-blue-400" /> },
    { label: "API Speed Gain", value: "60%", sub: "via Redis Strategy", icon: <Cpu className="text-emerald-400" /> }
  ];

  return (
    <div className="min-h-screen bg-[#0f172a] text-slate-200 selection:bg-blue-500/30">
      {/* GLOW EFFECT */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-blue-600/10 blur-[120px] pointer-events-none" />

      <nav className="max-w-6xl mx-auto px-6 py-8 flex justify-between items-center relative z-10">
        <div className="font-black text-xl tracking-tighter bg-gradient-to-r from-white to-slate-500 bg-clip-text text-transparent">AB.SYSTEMS</div>
        <div className="flex gap-6 text-sm font-medium text-slate-400">
          <a href="mailto:ashishbhatia.india@gmail.com" className="hover:text-blue-400 transition-colors">Contact</a>
          <a href="#" className="bg-blue-600 px-4 py-2 rounded-full text-white hover:bg-blue-500 transition-all">Resume</a>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto px-6 pt-20 pb-32 relative z-10">
        {/* HERO SECTION */}
        <header className="mb-32">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-7xl md:text-8xl font-black tracking-tight text-white mb-6">
              Ashish <span className="text-blue-600">Bhatia</span>
            </h1>
            <p className="text-2xl md:text-3xl font-medium text-slate-400 max-w-2xl leading-relaxed">
              Senior Member of Technical Staff specializing in <span className="text-slate-200">Distributed Systems</span> and high-frequency robotics architecture.
            </p>
          </motion.div>
        </header>

        {/* METRICS BENTO GRID */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-32">
          {metrics.map((m, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              className="p-8 rounded-3xl bg-slate-800/40 border border-slate-700/50 backdrop-blur-md hover:border-blue-500/50 transition-all group"
            >
              <div className="mb-4">{m.icon}</div>
              <div className="text-5xl font-black text-white mb-2 group-hover:text-blue-400 transition-colors">{m.value}</div>
              <div className="text-sm font-bold uppercase tracking-widest text-slate-500 mb-1">{m.label}</div>
              <div className="text-xs italic text-slate-400">{m.sub}</div>
            </motion.div>
          ))}
        </section>

        {/* EXPERIENCE SECTION */}
        <section className="mb-32">
          <h2 className="text-sm font-black uppercase tracking-[0.3em] text-blue-500 mb-12">Technical Leadership</h2>
          <div className="space-y-12">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="group relative pl-8 border-l border-slate-700 hover:border-blue-600 transition-colors"
            >
              <div className="absolute -left-[5px] top-0 w-2 h-2 rounded-full bg-slate-700 group-hover:bg-blue-600 transition-colors" />
              <div className="flex flex-col md:flex-row md:justify-between mb-4">
                <h3 className="text-2xl font-bold text-white">Senior Member of Technical Staff</h3>
                <span className="text-blue-500 font-mono">2025 — Present</span>
              </div>
              <p className="text-lg text-slate-400 leading-relaxed max-w-3xl">
                Leading the architectural evolution of <span className="text-white">Grey Orange</span>'s mission-critical microservices. 
                Mentoring senior engineering tiers on system design, SOLID principles, and high-availability patterns.
              </p>
            </motion.div>
          </div>
        </section>

        {/* TECH STACK CHIPS */}
        <section>
          <div className="flex flex-wrap gap-3">
            {["Java", "Kafka", "Spring Boot", "Redis", "AWS", "Kubernetes", "System Design"].map(tech => (
              <span key={tech} className="px-5 py-2 rounded-full bg-slate-800 border border-slate-700 text-sm font-bold hover:bg-blue-600 hover:border-blue-500 transition-all cursor-default">
                {tech}
              </span>
            ))}
          </div>
        </section>
      </main>

      <footer className="max-w-6xl mx-auto px-6 py-12 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-6 text-slate-500 text-sm">
        <p>© 2026 Ashish Bhatia. Built with Next.js & Framer Motion.</p>
        <div className="flex gap-8">
          <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
          <a href="#" className="hover:text-white transition-colors">GitHub</a>
        </div>
      </footer>
    </div>
  );
}
