'use client'

import { useState } from 'react'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import {
  Brain,
  Layers,
  Code2,
  Cpu,
  Wrench,
  Sparkles,
  Terminal,
  Database,
  Network,
  CheckCircle2
} from 'lucide-react'

interface SkillCategory {
  id: string
  title: string
  subtitle: string
  icon: any
  color: string
  skills: { name: string; highlight?: boolean }[]
}

const skillCategories: SkillCategory[] = [
  {
    id: 'aiml',
    title: 'AI / Machine Learning',
    subtitle: 'Intelligent systems, deep learning & NLP workflows',
    icon: Brain,
    color: 'from-indigo-500 to-purple-500',
    skills: [
      { name: 'Machine Learning', highlight: true },
      { name: 'Deep Learning', highlight: true },
      { name: 'NLP (Natural Language Processing)', highlight: true },
      { name: 'TensorFlow', highlight: true },
      { name: 'Data Preprocessing' },
      { name: 'Model Evaluation' },
      { name: 'OCR & Clause Segmentation' },
      { name: 'Semantic Similarity' },
    ],
  },
  {
    id: 'fullstack',
    title: 'Full Stack (MERN)',
    subtitle: 'Scalable backend architectures and responsive user interfaces',
    icon: Layers,
    color: 'from-cyan-500 to-blue-500',
    skills: [
      { name: 'MongoDB', highlight: true },
      { name: 'Express.js', highlight: true },
      { name: 'React.js', highlight: true },
      { name: 'Node.js', highlight: true },
      { name: 'REST APIs', highlight: true },
      { name: 'FastAPI' },
      { name: 'JWT Authentication' },
      { name: 'State Management' },
    ],
  },
  {
    id: 'languages',
    title: 'Programming Languages',
    subtitle: 'Versatile polyglot programming for algorithms and production',
    icon: Code2,
    color: 'from-emerald-500 to-teal-500',
    skills: [
      { name: 'Python', highlight: true },
      { name: 'Java', highlight: true },
      { name: 'C', highlight: true },
      { name: 'JavaScript', highlight: true },
      { name: 'SQL', highlight: true },
      { name: 'HTML5' },
      { name: 'CSS3' },
    ],
  },
  {
    id: 'corecs',
    title: 'Core Computer Science',
    subtitle: 'Foundational algorithmic knowledge & systems engineering',
    icon: Cpu,
    color: 'from-amber-500 to-orange-500',
    skills: [
      { name: 'Data Structures & Algorithms', highlight: true },
      { name: 'OOP (Object-Oriented Programming)', highlight: true },
      { name: 'DBMS', highlight: true },
      { name: 'Operating Systems', highlight: true },
      { name: 'Computer Networks', highlight: true },
    ],
  },
  {
    id: 'tools',
    title: 'Developer Tools & Ecosystem',
    subtitle: 'Version control, API testing, and development environments',
    icon: Wrench,
    color: 'from-pink-500 to-rose-500',
    skills: [
      { name: 'Git', highlight: true },
      { name: 'GitHub', highlight: true },
      { name: 'VS Code', highlight: true },
      { name: 'Postman', highlight: true },
      { name: 'PostgreSQL' },
      { name: 'Vercel' },
    ],
  },
]

export function SkillsSection() {
  const [activeFilter, setActiveFilter] = useState<string>('all')

  const filteredCategories = activeFilter === 'all'
    ? skillCategories
    : skillCategories.filter((c) => c.id === activeFilter)

  return (
    <section id="skills" className="py-24 px-6 relative bg-slate-950/40">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-xs font-medium text-indigo-400">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-foreground">
            Skills & <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">Technologies</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-base">
            Curated technical stack spanning Artificial Intelligence, Machine Learning, Full-Stack MERN engineering, and Core Computer Science.
          </p>
        </div>

        {/* Filter Chips */}
        <div className="flex flex-wrap items-center justify-center gap-2">
          <button
            onClick={() => setActiveFilter('all')}
            className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-200 ${
              activeFilter === 'all'
                ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/30'
                : 'bg-card border border-border text-foreground/70 hover:border-indigo-500/50'
            }`}
          >
            All Skills ({skillCategories.reduce((acc, c) => acc + c.skills.length, 0)})
          </button>
          {skillCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveFilter(category.id)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-200 flex items-center gap-1.5 ${
                activeFilter === category.id
                  ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/30'
                  : 'bg-card border border-border text-foreground/70 hover:border-indigo-500/50'
              }`}
            >
              <span>{category.title.split(' ')[0]}</span>
              <span className="text-[10px] opacity-70">({category.skills.length})</span>
            </button>
          ))}
        </div>

        {/* Categories Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((category) => {
            const Icon = category.icon
            return (
              <Card
                key={category.id}
                className="p-6 border border-border bg-card/60 backdrop-blur-xl hover:border-indigo-500/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-xl bg-gradient-to-tr ${category.color} flex items-center justify-center text-white shadow-md`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-bold text-base text-foreground group-hover:text-indigo-400 transition-colors">
                        {category.title}
                      </h3>
                      <p className="text-xs text-muted-foreground line-clamp-1">
                        {category.subtitle}
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 pt-2">
                    {category.skills.map((skill) => (
                      <Badge
                        key={skill.name}
                        variant="secondary"
                        className={`text-xs py-1 px-2.5 transition-all duration-200 cursor-default ${
                          skill.highlight
                            ? 'bg-indigo-500/15 border border-indigo-500/30 text-indigo-300 font-semibold hover:bg-indigo-500 hover:text-white'
                            : 'bg-slate-800/60 border border-slate-700/60 text-slate-300 hover:bg-slate-700 hover:text-white'
                        }`}
                      >
                        {skill.name}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-3 border-t border-border/60 flex items-center justify-between text-[11px] text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-indigo-400" />
                    Verified in Projects
                  </span>
                  <span className="font-mono">{category.skills.length} competencies</span>
                </div>
              </Card>
            )
          })}
        </div>

        {/* Bottom Callout Banner */}
        <div className="p-6 rounded-2xl bg-gradient-to-r from-indigo-950/60 via-slate-900/80 to-cyan-950/60 border border-indigo-500/20 backdrop-blur flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="font-bold text-sm text-white flex items-center gap-2 justify-center sm:justify-start">
              <Terminal className="w-4 h-4 text-cyan-400" />
              <span>Full-Stack & Intelligent ML Integration</span>
            </h4>
            <p className="text-xs text-slate-300 max-w-xl">
              Experienced in building end-to-end architectures—training and deploying AI/ML models while connecting them to high-speed MERN REST backends and clean responsive frontends.
            </p>
          </div>
          <a
            href="#projects"
            className="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold whitespace-nowrap shadow-md shadow-indigo-600/30 transition-all"
          >
            See Them In Action →
          </a>
        </div>
      </div>
    </section>
  )
}
