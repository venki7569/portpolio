import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { BrainCircuit, Code, Database, Sparkles, MapPin, GraduationCap, Award, Compass, Cpu, Layers } from 'lucide-react'

export function AboutSection() {
  return (
    <section id="about" className="py-24 px-6 relative">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-xs font-medium text-indigo-400">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Background & Expertise</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-foreground">
            About <span className="bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-base">
            Bridging algorithmic intelligence with robust full-stack software development.
          </p>
        </div>

        {/* 2-Column Main Info */}
        <div className="grid lg:grid-cols-3 gap-8 items-start">
          {/* Main Story Card (2 cols) */}
          <Card className="lg:col-span-2 p-8 sm:p-10 border border-border bg-card/60 backdrop-blur-xl hover:border-indigo-500/40 transition-all duration-300 shadow-xl space-y-6">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-foreground flex items-center gap-2.5">
                <Compass className="w-6 h-6 text-indigo-400" />
                <span>Engineering Mindset & Background</span>
              </h3>
              <p className="text-foreground/80 leading-relaxed text-base">
                I am an aspiring <strong className="text-foreground font-semibold">AI/ML Engineer and MERN Stack Developer</strong> currently pursuing my B.Tech in Computer Science Engineering (AI & ML) at <strong className="text-indigo-400 font-semibold">Parul University</strong> with a <strong className="text-emerald-400 font-semibold">8.57 CGPA</strong>.
              </p>
              <p className="text-foreground/80 leading-relaxed text-base">
                My passion lies at the intersection of intelligent computing and production-grade software. I specialize in building AI-powered platforms—from OCR and NLP clause segmentation engines to predictive maintenance systems—and pairing them with scalable full-stack architectures built on MongoDB, Express.js, React.js, and Node.js.
              </p>
              <p className="text-foreground/80 leading-relaxed text-base">
                With solid foundations in <strong className="text-foreground">Data Structures & Algorithms, Object-Oriented Programming, DBMS, Operating Systems, and Computer Networks</strong>, I approach every problem with clean design patterns, high standards for code quality, and a focus on real-world impact.
              </p>
            </div>

            {/* Three Pillar Cards */}
            <div className="grid sm:grid-cols-3 gap-4 pt-4 border-t border-border">
              <div className="p-4 rounded-xl bg-slate-900/40 border border-border/70 space-y-2">
                <div className="w-8 h-8 rounded-lg bg-indigo-500/15 flex items-center justify-center text-indigo-400">
                  <BrainCircuit className="w-4 h-4" />
                </div>
                <h4 className="font-semibold text-sm text-foreground">AI / ML & NLP</h4>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Machine learning models, clause segmentation, semantic conflict verification, and predictive maintenance.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/40 border border-border/70 space-y-2">
                <div className="w-8 h-8 rounded-lg bg-cyan-500/15 flex items-center justify-center text-cyan-400">
                  <Layers className="w-4 h-4" />
                </div>
                <h4 className="font-semibold text-sm text-foreground">Full-Stack MERN</h4>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  High-throughput REST APIs, JWT authentication, responsive React interfaces, and efficient DB design.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/40 border border-border/70 space-y-2">
                <div className="w-8 h-8 rounded-lg bg-purple-500/15 flex items-center justify-center text-purple-400">
                  <Cpu className="w-4 h-4" />
                </div>
                <h4 className="font-semibold text-sm text-foreground">Core CS Rigor</h4>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  DSA mastery, clean OOP principles, relational/NoSQL DBMS, OS concepts, and TCP/IP networks.
                </p>
              </div>
            </div>
          </Card>

          {/* Quick Snapshot Side Cards (1 col) */}
          <div className="space-y-5">
            {/* Academic Snapshot Card */}
            <Card className="p-6 border border-border bg-card/60 backdrop-blur-xl hover:border-indigo-500/40 transition-all duration-300 shadow-lg">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs uppercase tracking-wider font-bold text-muted-foreground">Current Standing</span>
                <GraduationCap className="w-5 h-5 text-indigo-400" />
              </div>
              <div className="space-y-2">
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-extrabold text-indigo-400">8.57</span>
                  <span className="text-sm font-semibold text-muted-foreground">/ 10 CGPA</span>
                </div>
                <p className="text-sm font-semibold text-foreground">Parul University, Vadodara</p>
                <p className="text-xs text-muted-foreground">B.Tech Computer Science (AI & ML) • 2023 – Present</p>
              </div>
            </Card>

            {/* Academic Honors */}
            <Card className="p-6 border border-border bg-card/60 backdrop-blur-xl hover:border-indigo-500/40 transition-all duration-300 shadow-lg">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs uppercase tracking-wider font-bold text-muted-foreground">Academic Track Record</span>
                <Award className="w-5 h-5 text-amber-400" />
              </div>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between items-center pb-2 border-b border-border">
                  <div>
                    <div className="font-medium text-foreground">Class XII (Intermediate)</div>
                    <div className="text-xs text-muted-foreground">Sri Chaitanya Jr College</div>
                  </div>
                  <span className="font-bold text-emerald-400">97.9%</span>
                </div>
                <div className="flex justify-between items-center">
                  <div>
                    <div className="font-medium text-foreground">Class X (SSC)</div>
                    <div className="text-xs text-muted-foreground">Yasoda EM School</div>
                  </div>
                  <span className="font-bold text-emerald-400">96.8%</span>
                </div>
              </div>
            </Card>

            {/* Location & Contact Info */}
            <Card className="p-6 border border-border bg-card/60 backdrop-blur-xl hover:border-indigo-500/40 transition-all duration-300 shadow-lg">
              <div className="flex items-center gap-2 mb-3">
                <MapPin className="w-4 h-4 text-rose-400" />
                <span className="text-xs uppercase tracking-wider font-bold text-muted-foreground">Location & Readiness</span>
              </div>
              <p className="text-sm font-medium text-foreground">Vadodara, Gujarat, India</p>
              <p className="text-xs text-muted-foreground mt-1">Available for full-time opportunities, internships & technical collaborations.</p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
