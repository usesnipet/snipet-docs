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
import "./index.css";

export default function Home() {
  return (
    <div className="home-page">
      {/* Navigation */}
      <nav className="home-nav">
        <div className="home-nav-inner">
          <div className="home-brand">
            <div className="home-brand-icon-wrap">
              <Terminal size={18} className="home-brand-icon" />
            </div>
            <span className="home-brand-name">Snipet</span>
          </div>
          <div className="home-nav-links">
            <a href="#problem" className="home-nav-link">Problem</a>
            <a href="#solution" className="home-nav-link">Solution</a>
            <a href="#concepts" className="home-nav-link">Concepts</a>
            <a href="#features" className="home-nav-link">Features</a>
          </div>
          <div className="home-nav-actions">
            <Button variant="ghost" className="home-nav-github-button" href="https://github.com">
              <Github size={18} />
              GitHub
            </Button>
            <Button variant="primary">Get Started</Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <Section className="home-hero">
        {/* Background Gradients */}
        <div className="home-hero-bg">
          <div className="home-hero-glow" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="home-badge-list">
            <Badge>Open Source</Badge>
            <Badge>Node.js</Badge>
            <Badge>Under Construction</Badge>
          </div>
          <h1 className="home-hero-title text-gradient">
            Build AI apps without <br className="home-hero-break" /> rebuilding the basics
          </h1>
          <p className="home-hero-description">
            Snipet is a unified layer for input, context, execution and knowledge retrieval.
            Focus on your use case, not the infrastructure.
          </p>
          <div className="home-hero-actions">
            <Button variant="primary" className="home-hero-button">
              Get Started
              <ChevronRight size={18} />
            </Button>
            <Button variant="secondary" className="home-hero-button" href="https://github.com">
              <Github size={18} />
              View on GitHub
            </Button>
          </div>
        </motion.div>
      </Section>

      {/* Problem Section */}
      <Section id="problem" className="home-section home-section-border">
        <div className="home-grid-two home-grid-two-center">
          <div>
            <h2 className="home-section-title">Every AI app ends up rebuilding the same things:</h2>
            <p className="home-section-description">
              Developers spend 80% of their time orchestrating data flows, managing context windows,
              and building RAG pipelines instead of refining the actual AI experience.
              The complexity of stateful AI interactions leads to fragmented architectures and technical debt.
            </p>
            <div className="problem-list">
              {[
                { icon: Terminal, text: "Input handling" },
                { icon: Activity, text: "Context & memory" },
                { icon: Search, text: "RAG pipelines" },
                { icon: Workflow, text: "Orchestration" },
                { icon: Zap, text: "Tools/actions" },
                { icon: Activity, text: "Observability" },
              ].map((item, i) => (
                <div key={i} className="problem-item">
                  <item.icon size={14} className="problem-item-icon" />
                  {item.text}
                </div>
              ))}
            </div>
          </div>
          <div className="problem-code-wrap">
            <div className="problem-code-glow" />
            <div className="problem-code-card">
              <div className="problem-code-dots">
                <div className="problem-code-dot" />
                <div className="problem-code-dot" />
                <div className="problem-code-dot" />
              </div>
              <pre className="problem-code-primary">
                {`// The manual way (rebuilding basics)
const context = await db.getMemory(userId);
const docs = await vectorStore.search(query);
const prompt = constructPrompt(query, context, docs);
const response = await llm.generate(prompt);
await db.saveMemory(userId, response);
// ... repeat for every feature`}
              </pre>
              <div className="problem-code-footer">
                <pre className="problem-code-secondary">
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
      <Section id="solution" className="home-section home-section-border home-center">
        <Badge>Architecture</Badge>
        <h2 className="home-solution-title">Snipet provides a unified architecture for AI apps</h2>
        <p className="home-solution-description">
          A modular, event-driven framework designed to handle the entire lifecycle of an AI interaction.
        </p>
        <FlowDiagram />
      </Section>

      {/* Core Concepts */}
      <Section id="concepts" className="home-section home-section-border">
        <div className="home-concepts-head">
          <h2 className="home-section-title">Core Concepts</h2>
          <p className="home-section-description home-section-description-tight">The building blocks of the Snipet ecosystem.</p>
        </div>
        <div className="home-grid-three">
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
      <Section className="home-section home-section-border">
        <div className="home-grid-two">
          <div className="home-flow-card">
            <h3 className="home-flow-title">
              <Database size={20} className="home-flow-title-icon" />
              Ingestion Flow
            </h3>
            <div className="home-flow-list">
              {[
                { step: "Knowledge Source", desc: "Connect your data (S3, Notion, SQL)" },
                { step: "Embedding Pipeline", desc: "Chunk and vectorize using your preferred model" },
                { step: "Indexing", desc: "Store and manage vectors in pgvector (PostgreSQL)" }
              ].map((item, i) => (
                <div key={i} className="home-flow-item">
                  <div className="home-flow-step-index">
                    {i + 1}
                  </div>
                  <div>
                    <h4 className="home-flow-step-title">{item.step}</h4>
                    <p className="home-flow-step-desc">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="home-flow-card">
            <h3 className="home-flow-title">
              <Zap size={20} className="home-flow-title-icon" />
              Execution Flow
            </h3>
            <div className="home-flow-list">
              {[
                { step: "Input & Context", desc: "Raw input combined with Scope memory" },
                { step: "Model & Knowledge", desc: "RAG retrieval and LLM inference" },
                { step: "Skills & Output", desc: "Tool execution and final response delivery" }
              ].map((item, i) => (
                <div key={i} className="home-flow-item">
                  <div className="home-flow-step-index">
                    {i + 1}
                  </div>
                  <div>
                    <h4 className="home-flow-step-title">{item.step}</h4>
                    <p className="home-flow-step-desc">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Features */}
      <Section id="features" className="home-section home-section-border">
        <div className="home-features-head">
          <h2 className="home-section-title">Built for production</h2>
          <p className="home-section-description home-section-description-tight">Everything you need to ship enterprise-grade AI features.</p>
        </div>
        <div className="home-grid-three home-grid-three-spaced">
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
      <Section className="home-section home-section-border">
        <div className="home-grid-two home-grid-two-center">
          <div>
            <Badge>Community</Badge>
            <h2 className="home-section-title home-community-title">Snipet is open source and actively evolving</h2>
            <p className="home-section-description">
              We believe the future of AI infrastructure should be transparent and community-driven.
              Join us in building a better foundation for AI developers.
            </p>
            <Button variant="secondary" href="https://github.com">
              <Github size={18} />
              View on GitHub
            </Button>
          </div>
          <div className="home-progress-card">
            <ProgressBar progress={40} label="Core Development" />
            <p className="home-progress-note">
              Snipet is currently under construction. <br />
              The architecture is being finalized and is not yet usable.
            </p>
          </div>
        </div>
      </Section>

      {/* Final CTA */}
      <Section className="home-section home-section-border home-cta-section">
        <div className="home-cta-card">
          <div className="home-cta-glow" />
          <div className="home-cta-content">
            <h2 className="home-cta-title">Start building with Snipet</h2>
            <p className="home-cta-description">
              Join the growing community of developers building the next generation of AI applications.
            </p>
            <div className="home-hero-actions">
              <Button variant="primary" className="home-cta-button">Get Started</Button>
              <Button variant="secondary" className="home-cta-button" href="https://github.com">
                <Github size={18} />
                GitHub
              </Button>
            </div>
          </div>
        </div>
      </Section>

      {/* Footer */}
      <footer className="home-footer">
        <div className="home-footer-brand">
          <Terminal size={18} className="home-footer-icon" />
          <span className="home-footer-name">Snipet</span>
        </div>
        <p className="home-footer-copy">
          © 2026 Snipet Open Source Project. Built with Node.js.
        </p>
      </footer>
    </div>
  );
}
