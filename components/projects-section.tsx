'use client'

import { useState } from 'react'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
  ExternalLink,
  Github,
  Sparkles,
  CheckCircle2,
  Brain,
  ShieldCheck,
  Users,
  Store,
  Layers,
  ArrowUpRight,
  Activity,
  FileSearch,
  MessageSquareShare,
  PackageCheck
} from 'lucide-react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'

interface Project {
  id: string
  title: string
  tagline: string
  category: 'aiml' | 'fullstack'
  isLive: boolean
  icon: any
  summary: string
  bullets: string[]
  technologies: string[]
  architecture: string[]
  github: string
  live: string
}

const projects: Project[] = [
  {
    id: 'campusverse-ai',
    title: 'CampusVerse AI — Smart Campus Monitoring & Management System',
    tagline: 'Centralized AI-driven smart campus platform with predictive maintenance',
    category: 'aiml',
    isLive: true,
    icon: Activity,
    summary:
      'Developed a centralized smart campus platform for monitoring classrooms, assets, maintenance requests, utilities, parking, and campus facilities through a unified dashboard, with analytics and AI-based predictive maintenance for campus operations.',
    bullets: [
      'Unified smart campus dashboard aggregating telemetry from classrooms, assets, and facilities',
      'AI-based predictive maintenance model forecasting equipment anomalies before breakdown',
      'Automated maintenance ticketing workflow with priority routing and resolution tracking',
      'Real-time utilities, energy consumption, and parking occupancy analytics',
    ],
    technologies: ['AI/ML', 'Full Stack', 'REST APIs', 'Database', 'Data Analytics', 'Python', 'Node.js', 'React.js'],
    architecture: [
      'Predictive model trained on telemetry history for anomaly detection',
      'REST API backend built with Express/Node.js serving real-time analytics',
      'Interactive React client featuring live metric graphs and floor map status',
      'Relational and NoSQL schemas for multi-department facility logs',
    ],
    github: 'https://github.com/venki7569',
    live: 'https://github.com/venki7569',
  },
  {
    id: 'policy-conflict',
    title: 'Policy Conflict Verification & Policy Intelligence Platform',
    tagline: 'AI-powered OCR, clause segmentation & semantic conflict detection engine',
    category: 'aiml',
    isLive: true,
    icon: FileSearch,
    summary:
      'Developed an AI-powered policy analysis platform supporting document upload, OCR, clause segmentation, semantic similarity, conflict detection, policy benchmarking, summarization, version management, and role-based approval workflows.',
    bullets: [
      'Automated document ingestion pipeline with high-accuracy OCR and legal clause segmentation',
      'Semantic similarity analysis and NLP embeddings for detecting inter-policy contradictions',
      'Policy benchmarking against organizational standards with AI executive summarization',
      'Enterprise-grade multi-version tracking and role-based approval workflows with JWT security',
    ],
    technologies: ['Python', 'NLP', 'FastAPI', 'Node.js', 'React', 'MongoDB', 'PostgreSQL', 'JWT'],
    architecture: [
      'FastAPI microservice executing NLP vector similarity and clause classification',
      'Node.js orchestrator coordinating document ingestion and user permission tiers',
      'PostgreSQL & MongoDB hybrid storage for clause vector indexes and audit trails',
      'Secure JWT authentication with granular reviewer/approver role permissions',
    ],
    github: 'https://github.com/venki7569',
    live: 'https://github.com/venki7569',
  },
  {
    id: 'likeminded',
    title: 'LikeMinded — Interest-Based Community Platform',
    tagline: 'Real-time social connectivity and interest-based club discovery ecosystem',
    category: 'fullstack',
    isLive: true,
    icon: Users,
    summary:
      'Developed a community platform that connects users based on shared interests, skills, and preferences, with interest-based communities and club discovery functionality.',
    bullets: [
      'Intelligent matchmaking algorithm pairing members by complementary skills and shared hobbies',
      'Dynamic community spaces, club creation, and interactive campus event discovery hubs',
      'High-performance REST API services managing users, club directories, and activity feeds',
      'Real-time interaction with instant notifications and member discussion boards',
    ],
    technologies: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'REST APIs', 'JWT', 'Tailwind CSS'],
    architecture: [
      'Scalable Express.js & Node.js backend architected with clean modular controllers and services',
      'Indexed MongoDB collections supporting fast faceted queries across tags and user preferences',
      'React frontend with responsive state management for seamless club browsing',
      'Secure session management and role-based club leadership administration',
    ],
    github: 'https://github.com/venki7569',
    live: 'https://github.com/venki7569',
  },
  {
    id: 'distributor-system',
    title: 'Smart Distributor Management System',
    tagline: 'Enterprise warehouse inventory, demand forecasting & automated SMS billing',
    category: 'fullstack',
    isLive: false,
    icon: PackageCheck,
    summary:
      'Developed an inventory and billing platform with role-based authentication, real-time stock monitoring, analytics dashboards, demand insights, and automated SMS billing notifications.',
    bullets: [
      'Multi-tier role-based access control protecting admin, distributor, and vendor portals',
      'Real-time warehouse stock tracking with automatic low-inventory alert thresholds',
      'Interactive analytics dashboards presenting sales velocity and demand forecasting insights',
      'Automated SMS gateway integration sending digital invoices and dispatch confirmations',
    ],
    technologies: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'REST APIs', 'SMS Gateway', 'Data Analytics'],
    architecture: [
      'Node.js & Express RESTful API with transactional inventory updates',
      'MongoDB schemas optimized for rapid item lookups, SKU tracking, and sales ledgers',
      'SMS notification dispatch pipeline communicating invoice numbers and payment links',
      'React dashboard with visual charting of revenue streams and product turnaround rates',
    ],
    github: 'https://github.com/venki7569',
    live: 'https://github.com/venki7569',
  },
]

export function ProjectsSection() {
  const [filter, setFilter] = useState<'all' | 'aiml' | 'fullstack' | 'live'>('all')
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  const filteredProjects = projects.filter((project) => {
    if (filter === 'all') return true
    if (filter === 'aiml') return project.category === 'aiml'
    if (filter === 'fullstack') return project.category === 'fullstack'
    if (filter === 'live') return project.isLive
    return true
  })

  return (
    <section id="projects" className="py-24 px-6 relative">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-xs font-medium text-indigo-400">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Featured Portfolio Work</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-foreground">
            Engineering <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-base">
            Showcase of production-grade systems spanning Artificial Intelligence, Machine Learning pipelines, and MERN full-stack architectures.
          </p>
        </div>

        {/* Filter Controls */}
        <div className="flex flex-wrap items-center justify-center gap-2">
          <button
            onClick={() => setFilter('all')}
            className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
              filter === 'all'
                ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/30'
                : 'bg-card border border-border text-foreground/70 hover:border-indigo-500/50'
            }`}
          >
            All Projects ({projects.length})
          </button>
          <button
            onClick={() => setFilter('aiml')}
            className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all flex items-center gap-1.5 ${
              filter === 'aiml'
                ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/30'
                : 'bg-card border border-border text-foreground/70 hover:border-indigo-500/50'
            }`}
          >
            <Brain className="w-3.5 h-3.5 text-indigo-400" />
            <span>AI / ML & NLP ({projects.filter((p) => p.category === 'aiml').length})</span>
          </button>
          <button
            onClick={() => setFilter('fullstack')}
            className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all flex items-center gap-1.5 ${
              filter === 'fullstack'
                ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/30'
                : 'bg-card border border-border text-foreground/70 hover:border-indigo-500/50'
            }`}
          >
            <Layers className="w-3.5 h-3.5 text-cyan-400" />
            <span>Full-Stack MERN ({projects.filter((p) => p.category === 'fullstack').length})</span>
          </button>
          <button
            onClick={() => setFilter('live')}
            className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all flex items-center gap-1.5 ${
              filter === 'live'
                ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/30'
                : 'bg-card border border-border text-foreground/70 hover:border-indigo-500/50'
            }`}
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
            <span>Live Deployed ({projects.filter((p) => p.isLive).length})</span>
          </button>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => {
            const Icon = project.icon
            return (
              <Card
                key={project.id}
                className="p-7 border border-border bg-card/60 backdrop-blur-xl hover:border-indigo-500/50 transition-all duration-300 hover:shadow-2xl flex flex-col justify-between group relative overflow-hidden"
              >
                {/* Subtle top card glow */}
                <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-400 opacity-60 group-hover:opacity-100 transition-opacity" />

                <div className="space-y-5">
                  {/* Top Badges & Live Status */}
                  <div className="flex items-start justify-between gap-3">
                    <div className="w-11 h-11 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 group-hover:scale-105 transition-transform">
                      <Icon className="w-6 h-6" />
                    </div>

                    <div className="flex items-center gap-2">
                      {project.isLive ? (
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-[11px] font-bold text-emerald-400">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
                          <span>LIVE</span>
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-slate-800 border border-slate-700 text-[11px] font-semibold text-slate-300">
                          ENTERPRISE
                        </span>
                      )}
                      <span className="text-[11px] font-medium px-2 py-1 rounded-md bg-muted text-muted-foreground uppercase">
                        {project.category === 'aiml' ? 'AI / ML' : 'MERN Stack'}
                      </span>
                    </div>
                  </div>

                  {/* Title & Tagline */}
                  <div className="space-y-1.5">
                    <h3 className="text-xl font-bold text-foreground group-hover:text-indigo-400 transition-colors leading-snug">
                      {project.title}
                    </h3>
                    <p className="text-xs font-medium text-indigo-400/90 line-clamp-1">
                      {project.tagline}
                    </p>
                  </div>

                  {/* Summary */}
                  <p className="text-sm text-foreground/80 leading-relaxed">
                    {project.summary}
                  </p>

                  {/* Bullet Highlights */}
                  <div className="space-y-2 pt-1">
                    <h4 className="text-xs font-bold text-muted-foreground uppercase tracking-wider">
                      Key Highlights
                    </h4>
                    <ul className="space-y-1.5 text-xs text-foreground/85">
                      {project.bullets.map((bullet, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="text-indigo-400 shrink-0 mt-0.5 font-bold">▸</span>
                          <span className="leading-relaxed">{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech Stack Pills */}
                  <div className="pt-2">
                    <div className="flex flex-wrap gap-1.5">
                      {project.technologies.map((tech) => (
                        <Badge
                          key={tech}
                          variant="secondary"
                          className="text-[11px] py-0.5 px-2 bg-indigo-500/10 text-indigo-300 border border-indigo-500/20 hover:bg-indigo-500 hover:text-white transition-colors"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Bottom Actions Bar */}
                <div className="mt-7 pt-4 border-t border-border flex items-center justify-between gap-3">
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-xs text-indigo-400 hover:text-indigo-300 hover:bg-indigo-500/10 p-0 h-auto"
                        onClick={() => setSelectedProject(project)}
                      >
                        Deep Dive Architecture →
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-2xl bg-slate-950 text-slate-100 border-slate-800">
                      <DialogHeader>
                        <div className="flex items-center gap-2 mb-1">
                          {project.isLive && (
                            <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                              LIVE SYSTEM
                            </span>
                          )}
                          <span className="text-xs text-muted-foreground uppercase">{project.category}</span>
                        </div>
                        <DialogTitle className="text-xl font-bold text-white">
                          {project.title}
                        </DialogTitle>
                        <DialogDescription className="text-slate-400 text-xs">
                          {project.tagline}
                        </DialogDescription>
                      </DialogHeader>

                      <div className="space-y-4 pt-2 text-sm">
                        <div className="space-y-2">
                          <h4 className="font-semibold text-white text-xs uppercase tracking-wider text-indigo-400">
                            System Overview
                          </h4>
                          <p className="text-slate-300 text-xs leading-relaxed">
                            {project.summary}
                          </p>
                        </div>

                        <div className="space-y-2">
                          <h4 className="font-semibold text-white text-xs uppercase tracking-wider text-indigo-400">
                            Technical Architecture & Implementation
                          </h4>
                          <ul className="space-y-1.5 text-xs text-slate-300">
                            {project.architecture.map((arch, i) => (
                              <li key={i} className="flex items-start gap-2">
                                <CheckCircle2 className="w-3.5 h-3.5 text-indigo-400 shrink-0 mt-0.5" />
                                <span>{arch}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="space-y-2">
                          <h4 className="font-semibold text-white text-xs uppercase tracking-wider text-indigo-400">
                            Technologies & Libraries
                          </h4>
                          <div className="flex flex-wrap gap-1.5">
                            {project.technologies.map((t) => (
                              <span
                                key={t}
                                className="text-xs px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-indigo-300"
                              >
                                {t}
                              </span>
                            ))}
                          </div>
                        </div>

                        <div className="pt-4 flex gap-3 justify-end border-t border-slate-800">
                          <Button
                            asChild
                            variant="outline"
                            size="sm"
                            className="gap-1.5 border-slate-700 bg-slate-900 text-xs text-slate-300 hover:text-white"
                          >
                            <a href={project.github} target="_blank" rel="noopener noreferrer">
                              <Github className="w-3.5 h-3.5" />
                              View GitHub
                            </a>
                          </Button>
                          <Button
                            asChild
                            size="sm"
                            className="gap-1.5 bg-indigo-600 hover:bg-indigo-500 text-xs text-white"
                          >
                            <a href={project.live} target="_blank" rel="noopener noreferrer">
                              <ExternalLink className="w-3.5 h-3.5" />
                              Open Live Demo
                            </a>
                          </Button>
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>

                  <div className="flex items-center gap-2">
                    <Button asChild variant="outline" size="sm" className="gap-1.5 text-xs h-8 px-2.5">
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="w-3.5 h-3.5" />
                        Code
                      </a>
                    </Button>
                    <Button
                      asChild
                      size="sm"
                      className="gap-1.5 text-xs h-8 px-3 bg-indigo-600 hover:bg-indigo-500 text-white"
                    >
                      <a href={project.live} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-3.5 h-3.5" />
                        Live Demo
                      </a>
                    </Button>
                  </div>
                </div>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
