import { motion } from "motion/react";
import {
  Terminal,
  Cpu,
  Database,
  Layers,
  Workflow,
  Zap,
  Github,
  ChevronRight,
  Box,
  Search,
  Activity
} from "lucide-react";

import Badge from "../components/Badge";
import Button from "../components/Button";
import Section from "../components/Section";
import FeatureCard from "../components/FeatureCard";
import ConceptCard from "../components/ConceptCard";
import FlowDiagram from "../components/FlowDiagram";
import ProgressBar from "../components/ProgressBar";

// --- Main App ---

export default function Home() {
  return (
    <div className="min-h-screen selection:bg-emerald-500/30">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-neutral-950/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-white rounded flex items-center justify-center">
              <Terminal size={18} className="text-black" />
            </div>
            <span className="font-bold text-xl tracking-tight text-white">Snipet</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-400">
            <a href="#problem" className="hover:text-white transition-colors">Problem</a>
            <a href="#solution" className="hover:text-white transition-colors">Solution</a>
            <a href="#concepts" className="hover:text-white transition-colors">Concepts</a>
            <a href="#features" className="hover:text-white transition-colors">Features</a>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="ghost" className="hidden sm:flex" href="https://github.com">
              <Github size={18} />
              GitHub
            </Button>
            <Button variant="primary">Get Started</Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <Section className="pt-48 pb-32 text-center relative overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 pointer-events-none">
          <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-emerald-500/10 blur-[120px] rounded-full" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex justify-center gap-3 mb-8">
            <Badge>Open Source</Badge>
            <Badge>Node.js</Badge>
            <Badge>Under Construction</Badge>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 text-gradient">
            Build AI apps without <br className="hidden md:block" /> rebuilding the basics
          </h1>
          <p className="text-lg md:text-xl text-neutral-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            Snipet is a unified layer for input, context, execution and knowledge retrieval.
            Focus on your use case, not the infrastructure.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="primary" className="w-full sm:w-auto px-8 py-3 text-base">
              Get Started
              <ChevronRight size={18} />
            </Button>
            <Button variant="secondary" className="w-full sm:w-auto px-8 py-3 text-base" href="https://github.com">
              <Github size={18} />
              View on GitHub
            </Button>
          </div>
        </motion.div>
      </Section>

      {/* Problem Section */}
      <Section id="problem" className="border-t border-neutral-900">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6 text-white">Every AI app ends up rebuilding the same things:</h2>
            <p className="text-neutral-400 mb-8 leading-relaxed">
              Developers spend 80% of their time orchestrating data flows, managing context windows,
              and building RAG pipelines instead of refining the actual AI experience.
              The complexity of stateful AI interactions leads to fragmented architectures and technical debt.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: Terminal, text: "Input handling" },
                { icon: Activity, text: "Context & memory" },
                { icon: Search, text: "RAG pipelines" },
                { icon: Workflow, text: "Orchestration" },
                { icon: Zap, text: "Tools/actions" },
                { icon: Activity, text: "Observability" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2 text-neutral-300 text-sm font-mono">
                  <item.icon size={14} className="text-neutral-600" />
                  {item.text}
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-emerald-500/5 blur-3xl rounded-full" />
            <div className="relative p-8 rounded-2xl border border-neutral-800 bg-neutral-900/50 font-mono text-xs text-neutral-500 overflow-hidden">
              <div className="flex gap-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-neutral-800" />
                <div className="w-3 h-3 rounded-full bg-neutral-800" />
                <div className="w-3 h-3 rounded-full bg-neutral-800" />
              </div>
              <pre className="text-emerald-400">
                {`// The manual way (rebuilding basics)
const context = await db.getMemory(userId);
const docs = await vectorStore.search(query);
const prompt = constructPrompt(query, context, docs);
const response = await llm.generate(prompt);
await db.saveMemory(userId, response);
// ... repeat for every feature`}
              </pre>
              <div className="mt-6 pt-6 border-t border-neutral-800">
                <pre className="text-neutral-400">
                  {`// The Snipet way
const snipet = new Snipet({ scope: userId });
const result = await snipet.execute(input);`}
                </pre>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Solution Section */}
      <Section id="solution" className="text-center border-t border-neutral-900">
        <Badge>Architecture</Badge>
        <h2 className="text-4xl font-bold mt-4 mb-6 text-white">Snipet provides a unified architecture for AI apps</h2>
        <p className="text-neutral-400 max-w-2xl mx-auto mb-12">
          A modular, event-driven framework designed to handle the entire lifecycle of an AI interaction.
        </p>
        <FlowDiagram />
      </Section>

      {/* Core Concepts */}
      <Section id="concepts" className="border-t border-neutral-900">
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">Core Concepts</h2>
          <p className="text-neutral-400">The building blocks of the Snipet ecosystem.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          <ConceptCard
            title="Snipet"
            icon={Box}
            description="The primary unit of execution. Encapsulates logic, model configuration, and state management."
          />
          <ConceptCard
            title="Knowledge Source"
            icon={Database}
            description="Raw data origins. Connectors for PDFs, APIs, databases, or real-time streams."
          />
          <ConceptCard
            title="Knowledge Base"
            icon={Layers}
            description="Logical grouping of processed data. Manages how information is partitioned and accessed."
          />
          <ConceptCard
            title="Embedding Pipeline"
            icon={Workflow}
            description="Automated vectorization flow. Handles chunking, embedding, and indexing into vector stores."
          />
          <ConceptCard
            title="Scope"
            icon={Activity}
            description="Shared memory layer. Provides persistence and context across multiple snipet executions."
          />
          <ConceptCard
            title="Skill"
            icon={Zap}
            description="External capabilities. Allows the AI to perform actions like sending emails or querying APIs."
          />
          <ConceptCard
            title="Execution Pipeline"
            icon={Workflow}
            description="The core orchestration logic. Manages the sequential or parallel execution of snipets and skills."
          />
        </div>
      </Section>

      {/* How it Works */}
      <Section className="border-t border-neutral-900">
        <div className="grid md:grid-cols-2 gap-12">
          <div className="p-8 rounded-2xl border border-neutral-800 bg-neutral-900/30">
            <h3 className="text-xl font-bold mb-6 text-white flex items-center gap-2">
              <Database size={20} className="text-emerald-500" />
              Ingestion Flow
            </h3>
            <div className="space-y-6">
              {[
                { step: "Knowledge Source", desc: "Connect your data (S3, Notion, SQL)" },
                { step: "Embedding Pipeline", desc: "Chunk and vectorize using your preferred model" },
                { step: "Indexing", desc: "Store and manage vectors in pgvector (PostgreSQL)" }
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="w-6 h-6 rounded-full bg-neutral-800 flex items-center justify-center text-[10px] font-bold text-neutral-400 shrink-0">
                    {i + 1}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-neutral-200">{item.step}</h4>
                    <p className="text-xs text-neutral-500">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="p-8 rounded-2xl border border-neutral-800 bg-neutral-900/30">
            <h3 className="text-xl font-bold mb-6 text-white flex items-center gap-2">
              <Zap size={20} className="text-emerald-500" />
              Execution Flow
            </h3>
            <div className="space-y-6">
              {[
                { step: "Input & Context", desc: "Raw input combined with Scope memory" },
                { step: "Model & Knowledge", desc: "RAG retrieval and LLM inference" },
                { step: "Skills & Output", desc: "Tool execution and final response delivery" }
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="w-6 h-6 rounded-full bg-neutral-800 flex items-center justify-center text-[10px] font-bold text-neutral-400 shrink-0">
                    {i + 1}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-neutral-200">{item.step}</h4>
                    <p className="text-xs text-neutral-500">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Features */}
      <Section id="features" className="border-t border-neutral-900">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">Built for production</h2>
          <p className="text-neutral-400">Everything you need to ship enterprise-grade AI features.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <FeatureCard
            icon={Layers}
            title="Modular Architecture"
            description="Swap models, vector stores, and memory adapters without changing your core logic."
          />
          <FeatureCard
            icon={Search}
            title="Integrated RAG"
            description="First-class support for retrieval-augmented generation with built-in hybrid search."
          />
          <FeatureCard
            icon={Activity}
            title="Temporal Memory"
            description="Scopes manage context history automatically, ensuring the AI remembers what matters."
          />
          <FeatureCard
            icon={Cpu}
            title="Multi-Model Support"
            description="Use OpenAI, Anthropic, or local models via Ollama with a unified interface."
          />
          <FeatureCard
            icon={Zap}
            title="Skill Execution"
            description="Define tools as simple TypeScript functions and let Snipet handle the orchestration."
          />
          <FeatureCard
            icon={Activity}
            title="Observability"
            description="Built-in tracing and logging for every step of the execution pipeline."
          />
        </div>
      </Section>

      {/* Open Source & Progress */}
      <Section className="border-t border-neutral-900">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <Badge>Community</Badge>
            <h2 className="text-3xl font-bold mt-4 mb-6 text-white">Snipet is open source and actively evolving</h2>
            <p className="text-neutral-400 mb-8 leading-relaxed">
              We believe the future of AI infrastructure should be transparent and community-driven.
              Join us in building a better foundation for AI developers.
            </p>
            <Button variant="secondary" href="https://github.com">
              <Github size={18} />
              View on GitHub
            </Button>
          </div>
          <div className="p-10 rounded-2xl border border-neutral-800 bg-neutral-900/20 text-center">
            <ProgressBar progress={40} label="Core Development" />
            <p className="mt-6 text-sm text-neutral-500 font-medium">
              Snipet is currently under construction. <br />
              The architecture is being finalized and is not yet usable.
            </p>
          </div>
        </div>
      </Section>

      {/* Final CTA */}
      <Section className="border-t border-neutral-900 pb-48">
        <div className="relative p-12 md:p-24 rounded-4xl bg-neutral-900 overflow-hidden text-center">
          <div className="absolute inset-0 bg-emerald-500/5 blur-3xl" />
          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Start building with Snipet</h2>
            <p className="text-neutral-400 max-w-xl mx-auto mb-10 text-lg">
              Join the growing community of developers building the next generation of AI applications.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button variant="primary" className="px-10 py-4 text-base">Get Started</Button>
              <Button variant="secondary" className="px-10 py-4 text-base" href="https://github.com">
                <Github size={18} />
                GitHub
              </Button>
            </div>
          </div>
        </div>
      </Section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-neutral-900 text-center">
        <div className="flex items-center justify-center gap-2 mb-6">
          <Terminal size={18} className="text-neutral-500" />
          <span className="font-bold text-neutral-400">Snipet</span>
        </div>
        <p className="text-neutral-600 text-xs font-mono uppercase tracking-widest">
          © 2026 Snipet Open Source Project. Built with Node.js.
        </p>
      </footer>
    </div>
  );
}
