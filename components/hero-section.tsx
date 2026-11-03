import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Github, Linkedin, Mail, Phone, ExternalLink, ArrowDown, Sparkles, Award, Code2, BrainCircuit, CheckCircle2 } from 'lucide-react'
import { ResumeModal } from '@/components/resume-modal'

export function HeroSection() {
  return (
    <section id="hero" className="relative min-h-screen pt-32 pb-20 px-6 flex items-center justify-center overflow-hidden">
      {/* Ambient gradient backdrops */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl pointer-events-none animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-600/15 rounded-full blur-3xl pointer-events-none animate-pulse-glow" style={{ animationDelay: '2s' }} />

      <div className="max-w-6xl mx-auto w-full relative z-10">
        <div className="grid items-center gap-12 lg:grid-cols-[1.3fr_0.9fr]">
          {/* Left Text / Info Content */}
          <div className="space-y-6 text-left">
            {/* Availability Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-xs font-medium text-indigo-400">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>Open to AI/ML & MERN Stack Engineering Roles</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-3">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight">
                <span className="text-foreground">Vadde </span>
                <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                  Venki
                </span>
              </h1>
              <div className="flex flex-wrap items-center gap-2 text-xl sm:text-2xl font-semibold text-foreground/90">
                <span>AI/ML Engineer</span>
                <span className="text-indigo-400">—</span>
                <span className="text-indigo-400">MERN Stack Developer</span>
              </div>
              <p className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                <Award className="w-4 h-4 text-amber-400" />
                <span>B.Tech in Computer Science (AI & ML) • Parul University</span>
              </p>
            </div>

            {/* Summary description from resume */}
            <p className="text-base sm:text-lg text-foreground/75 max-w-2xl leading-relaxed">
              Passionate about building AI-driven intelligent systems, scalable backend architectures, REST APIs, and production-grade full-stack web applications. Skilled in Python, Machine Learning, NLP, and modern MERN stack.
            </p>

            {/* Quick Metrics Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
              <div className="p-3 rounded-xl bg-card/60 backdrop-blur border border-border hover:border-indigo-500/40 transition-colors">
                <div className="text-2xl font-bold text-indigo-400">8.57</div>
                <div className="text-xs text-muted-foreground">B.Tech CGPA</div>
              </div>
              <div className="p-3 rounded-xl bg-card/60 backdrop-blur border border-border hover:border-indigo-500/40 transition-colors">
                <div className="text-2xl font-bold text-emerald-400">4+</div>
                <div className="text-xs text-muted-foreground">Deployed Projects</div>
              </div>
              <div className="p-3 rounded-xl bg-card/60 backdrop-blur border border-border hover:border-indigo-500/40 transition-colors">
                <div className="text-2xl font-bold text-purple-400">97.9%</div>
                <div className="text-xs text-muted-foreground">Class XII Score</div>
              </div>
              <div className="p-3 rounded-xl bg-card/60 backdrop-blur border border-border hover:border-indigo-500/40 transition-colors">
                <div className="text-2xl font-bold text-cyan-400">4</div>
                <div className="text-xs text-muted-foreground">Certifications</div>
              </div>
            </div>

            {/* CTA Action Buttons */}
            <div className="flex gap-3 flex-wrap pt-2">
              <Button asChild size="lg" className="gap-2 bg-gradient-to-r from-indigo-600 via-indigo-500 to-cyan-500 text-white hover:opacity-95 shadow-lg shadow-indigo-500/25">
                <a href="#projects">
                  <Sparkles className="w-4 h-4" />
                  Explore Projects
                </a>
              </Button>

              <ResumeModal />

              <Button asChild size="lg" variant="outline" className="gap-2 border-border hover:bg-card">
                <a href="#contact">
                  <Mail className="w-4 h-4 text-indigo-400" />
                  Contact
                </a>
              </Button>
            </div>

            {/* Social & Contact Direct Links */}
            <div className="flex items-center gap-4 pt-1 text-sm text-muted-foreground">
              <span className="text-xs uppercase tracking-wider font-semibold">Connect:</span>
              <a
                href="https://www.linkedin.com/in/vadde-venki-07777a305"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-indigo-400 transition-colors"
                title="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
                <span>LinkedIn</span>
              </a>
              <a
                href="https://github.com/venki7569"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-indigo-400 transition-colors"
                title="GitHub Profile"
              >
                <Github className="w-4 h-4" />
                <span>GitHub</span>
              </a>
              <a
                href="mailto:vvadde825@gmail.com"
                className="flex items-center gap-1.5 hover:text-indigo-400 transition-colors"
                title="Send Email"
              >
                <Mail className="w-4 h-4" />
                <span>Email</span>
              </a>
              <a
                href="tel:+917569310593"
                className="flex items-center gap-1.5 hover:text-indigo-400 transition-colors"
                title="Call Phone"
              >
                <Phone className="w-4 h-4" />
                <span>Call</span>
              </a>
            </div>
          </div>

          {/* Right Visual Card with Venki's Photo and Floating Badges */}
          <div className="relative mx-auto w-full max-w-sm lg:max-w-md">
            {/* Outer Glowing Gradient Frame */}
            <div className="absolute -inset-1.5 bg-gradient-to-tr from-indigo-500 via-purple-500 to-cyan-400 rounded-[2.5rem] blur-xl opacity-40 animate-pulse-glow" />

            <div className="relative overflow-hidden rounded-[2.25rem] border border-white/10 bg-slate-900/80 p-2 shadow-2xl backdrop-blur-xl">
              <div className="relative overflow-hidden rounded-[1.75rem] bg-slate-950 aspect-[4/5]">
                <Image
                  src="/profile.jpeg"
                  alt="Vadde Venki - AI/ML Engineer & MERN Stack Developer"
                  width={520}
                  height={650}
                  className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700"
                  priority
                />

                {/* Subtle bottom gradient overlay for card elegance */}
                <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />

                {/* Inner bottom badge */}
                <div className="absolute bottom-3 inset-x-3 p-3 rounded-xl bg-slate-900/90 border border-white/10 backdrop-blur-md flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                    <span className="text-xs font-semibold text-white">Vadde Venki</span>
                  </div>
                  <span className="text-[11px] text-indigo-400 font-mono">B.Tech CSE (AIML)</span>
                </div>
              </div>
            </div>

            {/* Floating Floating Pill 1: Top Left */}
            <div className="absolute -top-3 -left-4 p-2.5 px-3.5 rounded-2xl bg-slate-900/90 border border-indigo-500/30 backdrop-blur-xl shadow-xl flex items-center gap-2 animate-float-slow hidden sm:flex">
              <div className="w-7 h-7 rounded-lg bg-indigo-500/20 flex items-center justify-center text-indigo-400">
                <BrainCircuit className="w-4 h-4" />
              </div>
              <div className="text-left">
                <div className="text-[11px] font-bold text-white">AI / ML & NLP</div>
                <div className="text-[9px] text-indigo-300">Intelligent Pipelines</div>
              </div>
            </div>

            {/* Floating Floating Pill 2: Bottom Right */}
            <div className="absolute -bottom-4 -right-4 p-2.5 px-3.5 rounded-2xl bg-slate-900/90 border border-cyan-500/30 backdrop-blur-xl shadow-xl flex items-center gap-2 animate-float-slow hidden sm:flex" style={{ animationDelay: '2.5s' }}>
              <div className="w-7 h-7 rounded-lg bg-cyan-500/20 flex items-center justify-center text-cyan-400">
                <Code2 className="w-4 h-4" />
              </div>
              <div className="text-left">
                <div className="text-[11px] font-bold text-white">MERN Full Stack</div>
                <div className="text-[9px] text-cyan-300">Scalable Architecture</div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll down cue */}
        <div className="pt-16 flex justify-center">
          <a
            href="#about"
            className="flex flex-col items-center gap-1.5 text-xs text-muted-foreground hover:text-indigo-400 transition-colors group"
          >
            <span>Scroll to explore</span>
            <div className="w-7 h-7 rounded-full border border-border flex items-center justify-center group-hover:border-indigo-400 transition-colors animate-bounce">
              <ArrowDown className="w-3.5 h-3.5 text-indigo-400" />
            </div>
          </a>
        </div>
      </div>
    </section>
  )
}
