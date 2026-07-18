'use client';
import { motion } from 'framer-motion';
import { 
  Mail, MapPin, Phone, Share2, Terminal, GraduationCap, Award, ChevronRight,
  Zap, Database, Cpu, Server, Shield, Code, Users, Layers, Layout, Globe, Sparkles, Trophy
} from 'lucide-react';

export default function Portfolio() {
  // Direct Raw URL to your image on GitHub
  const imagePath = "https://raw.githubusercontent.com/ashishbhatiaindia/ashish-portfolio/main/profile.png.png";

  const skillLabels: Record<string, string> = {
    languages: "Languages",
    backendArchitecture: "Backend Architecture",
    cloudContainers: "Cloud & Containers",
    messagingStreaming: "Messaging & Streaming",
    databases: "Databases",
    aiAgenticSystems: "AI & Agentic Systems",
    security: "Security",
    performanceScalability: "Performance & Scalability",
    leadershipPractices: "Leadership & Practices"
  };

  const skills = {
    languages: ["Java", "SQL"],
    backendArchitecture: ["Spring Boot", "Microservices Design", "REST APIs", "GraphQL", "SOAP", "Event-Driven Architecture", "System Design", "Design Patterns", "SOLID Principles", "Domain-Driven Design"],
    cloudContainers: ["Google Cloud Platform", "Compute Engine", "Cloud Run", "Cloud Functions", "GKE", "Kubernetes", "Docker", "Vertex AI"],
    messagingStreaming: ["Kafka", "RabbitMQ"],
    databases: ["MySQL", "PostgreSQL (RDBMS)", "MongoDB", "Redis", "Elasticsearch (NoSQL)", "pgvector"],
    aiAgenticSystems: ["RAG Pipelines", "LangChain", "LangGraph", "Multi-Agent Orchestration", "MCP-Integrated Tools", "Prompt Engineering", "LangSmith", "Claude", "Cursor", "GitHub Copilot"],
    security: ["Secure Coding Practices", "Authentication & Authorization", "Encrypted Transaction Handling", "Compliant Payment Integrations"],
    performanceScalability: ["Caching Strategy", "Query Optimization", "Async Messaging", "Connection Management", "Retry Logic", "Circuit Breakers", "Dead-Letter Queues"],
    leadershipPractices: ["Technical Mentoring", "Architecture Reviews", "Engineering Standards", "Cross-Team Technical Direction", "Agile/Scrum", "Code Review"]
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
              Senior Software Engineer | Technical Architect & Lead
            </p>
            
            <div className="flex flex-wrap justify-center md:justify-start gap-y-4 gap-x-8 text-slate-400 font-medium">
              <a href="mailto:ashishbhatia.india@gmail.com" className="flex items-center gap-2 hover:text-white transition-colors">
                <Mail size={18}/> ashishbhatia.india@gmail.com
              </a>
              <span className="flex items-center gap-2"><Phone size={18}/> 8800847114</span>
              <span className="flex items-center gap-2"><MapPin size={18}/> Gurugram, India</span>
              <a href="https://linkedin.com/in/ashish-bhatia-7552499b" target="_blank" className="flex items-center gap-2 hover:text-white transition-colors">
                <Share2 size={18}/> LinkedIn
              </a>
            </div>

            <p className="mt-8 text-lg text-slate-300 max-w-3xl leading-relaxed">
              Backend engineer with 10 years designing, building, and leading distributed systems in Java and Spring Boot —
              spanning hands-on architecture ownership, microservices design, and technical leadership across teams.
              Experienced operating as both the deep technical owner of complex systems and the bridge between business
              goals, product, and engineering. Deep background in event-driven architecture, distributed caching, RDBMS
              and NoSQL data stores, and cloud-native deployment on Google Cloud Platform. Actively building with modern
              AI/agentic tooling — RAG pipelines, multi-agent orchestration, and MCP-integrated developer tools.
            </p>
          </motion.div>
        </div>
      </section>

      {/* SKILLS GRID */}
      <section className="relative px-6 max-w-6xl mx-auto mb-32 pt-10">
        <h2 className="text-xs font-black uppercase tracking-[0.3em] text-blue-500 mb-8">Technical Arsenal</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category} className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800/50 backdrop-blur-sm">
              <h3 className="text-xs font-black uppercase tracking-widest text-blue-400 mb-4">{skillLabels[category]}</h3>
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
            company="GreyOrange"
            date="April 2025 – Present"
            bullets={[
              "Own end-to-end backend architecture and design of microservices supporting GreyOrange's real-time warehouse orchestration platform, processing high transaction volumes with strict low-latency requirements.",
              "Drive the re-architecture of the platform's core event-driven pipeline onto Kafka and Spring Boot — redesigning partitioning strategy, consumer scaling, and failure isolation to meaningfully improve latency and sustained throughput.",
              "Own performance and scalability strategy across core services, including caching design, async processing patterns, and database query optimization.",
              "Define and enforce engineering standards — design patterns, API contracts, secure coding practices, code review discipline — adopted across multiple engineering teams.",
              "Lead architecture design discussions and reviews; mentor 5 senior engineers on distributed systems trade-offs, API design, and production readiness.",
              "Actively integrate AI-assisted engineering tools (Claude, Cursor, MCP-integrated tooling) into daily development for code review, architecture exploration, and documentation."
            ]}
            subProject={{
              title: "AI-Powered Operations Assistant",
              subtitle: "Internal POC",
              bullets: [
                "Built a RAG-based internal assistant to answer operational queries over warehouse SOP documents and API documentation, reducing manual lookups during client onboarding.",
                "Used LangChain for orchestration, OpenAI embeddings for semantic search, and Elasticsearch as the vector store — integrated with existing Spring Boot services via REST.",
                "Designed the retrieval pipeline with chunking strategy, metadata filtering, and re-ranking to improve domain-specific response relevance.",
                "Evaluated response quality using LangSmith tracing, iterating on prompt templates and retrieval parameters.",
                "Proposed architecture for a multi-agent workflow with separate agents for query classification, document retrieval, and response generation."
              ]
            }}
          />

          <ExperienceBlock 
            title="Assistant Technical Manager"
            company="GreyOrange"
            date="April 2024 – March 2025"
            bullets={[
              "Owned platform architecture and technical delivery while directly leading a small engineering team across sprint planning and hands-on implementation.",
              "Directed end-to-end integration architecture for 15+ external warehouse management systems, owning the full lifecycle from client-facing scoping to production rollout.",
              "Built core platform components from scratch, including a custom TCP server and SOAP server, for real-time, low-latency communication with third-party systems.",
              "Designed a Redis-based distributed caching layer that materially improved real-time inventory query response times.",
              "Ran client-facing workshops to define technical scope and freeze API contracts prior to development, acting as the direct bridge between business stakeholders and engineering."
            ]}
          />

          <ExperienceBlock 
            title="Senior Software Developer"
            company="GreyOrange"
            date="April 2022 – April 2024"
            bullets={[
              "Owned backend architecture and delivery for core warehouse automation modules end-to-end, from design through production deployment.",
              "Built a fault-tolerant integration layer for third-party WMS/ERP systems using retry logic, circuit breakers, and dead-letter queues to improve integration reliability.",
              "Identified and resolved performance bottlenecks in high-traffic data pipelines through query optimization and database connection management."
            ]}
          />

          <ExperienceBlock 
            title="Software Developer"
            company="GreyOrange"
            date="July 2019 – March 2022"
            bullets={[
              "Developed core backend features for a real-time robotics orchestration platform using Java and Spring Boot.",
              "Replaced synchronous service calls with RabbitMQ-based async messaging, improving system resilience and reducing service coupling."
            ]}
          />

          <ExperienceBlock 
            title="Consultant"
            company="Zillious Solutions"
            date="June 2016 – June 2019"
            bullets={[
              "Built and delivered enterprise Java applications for the travel domain, including secure, compliant third-party payment gateway integrations with encrypted, authenticated transaction handling.",
              "Managed client relationships across the full project lifecycle, from requirements gathering through production delivery."
            ]}
          />
        </div>
      </section>

      {/* EDUCATION & CERTIFICATIONS */}
      <section className="relative px-6 max-w-6xl mx-auto pb-20 border-t border-slate-900 pt-20 grid grid-cols-1 md:grid-cols-2 gap-16">
        <div>
          <h2 className="text-3xl font-black mb-10 flex items-center gap-3 text-white uppercase">
            <GraduationCap className="text-blue-500" /> Education
          </h2>
          <div className="space-y-8">
            <div>
              <h4 className="text-xl font-bold text-slate-200">Master of Computer Applications (MCA)</h4>
              <p className="text-blue-400">University of Delhi (North Campus)</p>
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
            <li className="flex gap-3"><ChevronRight className="text-blue-500 flex-shrink-0" /> Software Architecture & Design of Modern Large Scale Systems — Udemy</li>
            <li className="flex gap-3"><ChevronRight className="text-blue-500 flex-shrink-0" /> Software Architecture & System Design Practical Case Studies — Udemy</li>
            <li className="flex gap-3"><ChevronRight className="text-blue-500 flex-shrink-0" /> Low Level System Design, Design Patterns & SOLID Principles — Udemy</li>
          </ul>
        </div>
      </section>

      {/* ACHIEVEMENTS */}
      <section className="relative px-6 max-w-6xl mx-auto pb-32">
        <h2 className="text-3xl font-black mb-10 flex items-center gap-3 text-white uppercase">
          <Trophy className="text-blue-500" /> Achievements
        </h2>
        <ul className="space-y-4 text-slate-400 font-medium">
          <li className="flex gap-3"><ChevronRight className="text-blue-500 flex-shrink-0" /> All India Rank 4 — Delhi University MCA entrance examination</li>
          <li className="flex gap-3"><ChevronRight className="text-blue-500 flex-shrink-0" /> Contestant, India's Got Talent (TV show) — "Fastest Human Calculator" challenge</li>
        </ul>
      </section>
    </main>
  );
}

function ExperienceBlock({ title, company, date, bullets, subProject }: any) {
  return (
    <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="relative pl-10 border-l border-slate-800">
      <div className="absolute -left-[5px] top-0 w-[9px] h-[9px] rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.5)]" />
      <div className="flex flex-col md:flex-row md:justify-between mb-2">
        <h3 className="text-2xl font-bold text-white tracking-tight">{title}</h3>
        {date && <span className="text-slate-500 font-mono text-xs font-bold uppercase">{date}</span>}
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

      {subProject && (
        <div className="mt-8 max-w-4xl">
          <h4 className="text-lg font-bold text-slate-200 mb-4 tracking-tight">{subProject.title} <span className="text-slate-500 text-sm font-normal">({subProject.subtitle})</span></h4>
          <ul className="space-y-3">
            {subProject.bullets.map((point: string, i: number) => (
              <li key={i} className="text-slate-400 flex gap-3 text-sm md:text-base leading-relaxed">
                <span className="text-blue-500 mt-2 font-bold select-none text-xs">●</span>
                {point}
              </li>
            ))}
          </ul>
        </div>
      )}
    </motion.div>
  );
}
