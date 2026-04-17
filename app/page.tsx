export default function Page() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-20 font-sans text-slate-900 bg-white">
      <header className="mb-16">
        <h1 className="text-5xl font-black tracking-tight mb-2">Ashish Bhatia</h1>
        <p className="text-2xl text-blue-600 font-bold">Senior Member of Technical Staff</p>
        <p className="mt-4 text-slate-500 font-medium text-sm">Gurugram, India | ashishbhatia.india@gmail.com</p>
      </header>

      {/* SYSTEM IMPACT METRICS */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20 text-center">
        <div className="p-8 border rounded-3xl bg-slate-50 border-slate-100">
          <h3 className="text-4xl font-black text-blue-600">40%</h3>
          <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mt-2">Latency Reduction</p>
          <p className="text-[10px] text-slate-500 italic mt-1">via Kafka & Spring Boot</p>
        </div>
        <div className="p-8 border rounded-3xl bg-slate-50 border-slate-100">
          <h3 className="text-4xl font-black text-blue-600">100K+</h3>
          <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mt-2">Daily Transactions</p>
          <p className="text-[10px] text-slate-500 italic mt-1">Enterprise-scale Robotics</p>
        </div>
        <div className="p-8 border rounded-3xl bg-slate-50 border-slate-100">
          <h3 className="text-4xl font-black text-blue-600">60%</h3>
          <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mt-2">API Speed Gain</p>
          <p className="text-[10px] text-slate-500 italic mt-1">via Redis Strategy</p>
        </div>
      </section>

      {/* DETAILED EXPERIENCE HIGHLIGHTS */}
      <section className="mb-20">
        <h2 className="text-2xl font-black mb-10 border-b pb-2 uppercase tracking-tight">Technical Leadership</h2>
        <div className="space-y-12">
          <div className="relative pl-8 border-l-4 border-blue-600">
            <h3 className="text-xl font-bold">Senior Member of Technical Staff</h3>
            <p className="text-blue-600 font-bold mb-4">Grey Orange | 2025 – Present</p>
            <p className="text-slate-600 leading-relaxed italic">
              "Leading architecture for mission-critical microservices and mentoring senior engineers 
               on system design and SOLID principles."
            </p>
          </div>

          <div className="relative pl-8 border-l-4 border-slate-200">
            <h3 className="text-xl font-bold">Assistant Technical Manager</h3>
            <p className="text-slate-500 font-bold mb-4">Grey Orange | 2024 – 2025</p>
            <p className="text-slate-600 leading-relaxed">
              Managed a team of engineers and established CI/CD pipelines, reducing deployment times by 50%[cite: 26].
            </p>
          </div>
        </div>
      </section>

      {/* ACADEMIC FOUNDATION */}
      <footer className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-12 border-t border-slate-100">
        <div>
          <h4 className="font-bold uppercase tracking-widest text-xs text-slate-400 mb-4">Education</h4>
          <p className="font-bold">Master of Computer Applications (MCA)</p>
          <p className="text-slate-500">University of Delhi [cite: 47, 48]</p>
        </div>
        <div>
          <h4 className="font-bold uppercase tracking-widest text-xs text-slate-400 mb-4">Expertise</h4>
          <div className="flex flex-wrap gap-2">
            {["Java", "Kafka", "Spring Boot", "AWS", "System Design"].map(skill => (
              <span key={skill} className="bg-slate-100 px-3 py-1 rounded-full text-[10px] font-bold uppercase">{skill}</span>
            ))}
          </div>
        </div>
      </footer>
    </main>
  );
}
