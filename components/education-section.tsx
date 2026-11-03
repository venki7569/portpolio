import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { GraduationCap, Award, Calendar, MapPin, CheckCircle2, Sparkles, BookOpen } from 'lucide-react'

const educationList = [
  {
    institution: 'Parul University',
    degree: 'B.Tech in Computer Science Engineering (AI & ML)',
    timeline: '2023 – Present',
    location: 'Vadodara, Gujarat',
    score: '8.57 / 10',
    scoreType: 'CGPA',
    status: 'Currently Pursuing',
    highlights: [
      'Specialization in Artificial Intelligence and Machine Learning',
      'Advanced coursework in Deep Learning, NLP, Data Structures & Algorithms, DBMS, and Computer Networks',
      'Hands-on system building combining ML models with scalable MERN stack web architectures',
      'Active participant in university tech projects and engineering hackathons',
    ],
  },
  {
    institution: 'Sri Chaitanya Jr College',
    degree: 'Class XII — Intermediate (MPC: Math, Physics, Chemistry)',
    timeline: '2021 – 2023',
    location: 'Andhra Pradesh',
    score: '97.9%',
    scoreType: 'Percentage',
    status: 'Graduated with High Honors',
    highlights: [
      'Top percentile academic merit across Mathematics, Physics, and Chemistry',
      'Strong quantitative reasoning and problem-solving foundational training',
    ],
  },
  {
    institution: 'Yasoda EM School',
    degree: 'Class X — Secondary School Certificate (SSC)',
    timeline: '2020 – 2021',
    location: 'Andhra Pradesh',
    score: '96.8%',
    scoreType: 'Percentage',
    status: 'Graduated with Distinction',
    highlights: [
      'Exceptional academic track record with comprehensive subject excellence',
      'Developed early passion for computer science and logical computation',
    ],
  },
]

export function EducationSection() {
  return (
    <section id="education" className="py-24 px-6 relative bg-slate-950/40">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-xs font-medium text-indigo-400">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic Background</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-foreground">
            Education & <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">Academic Honors</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-base">
            Consistent record of academic excellence, specializing in Computer Science, Artificial Intelligence, and Machine Learning.
          </p>
        </div>

        {/* Education Timeline Cards */}
        <div className="space-y-6">
          {educationList.map((item, index) => (
            <Card
              key={item.institution}
              className="p-8 border border-border bg-card/60 backdrop-blur-xl hover:border-indigo-500/40 transition-all duration-300 hover:shadow-xl relative overflow-hidden"
            >
              {/* Highlight top border for degree */}
              {index === 0 && (
                <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-400" />
              )}

              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                <div className="space-y-3 flex-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-indigo-500/15 text-indigo-300 border border-indigo-500/20">
                      {item.status}
                    </span>
                    <span className="text-xs text-muted-foreground flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      {item.timeline}
                    </span>
                    <span className="text-xs text-muted-foreground flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-rose-400" />
                      {item.location}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold text-foreground">
                      {item.degree}
                    </h3>
                    <p className="text-base font-semibold text-indigo-400">
                      {item.institution}
                    </p>
                  </div>

                  <ul className="space-y-2 pt-2 text-sm text-foreground/80">
                    {item.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Score badge / card */}
                <div className="lg:w-48 p-5 rounded-2xl bg-slate-900/60 border border-border flex flex-col items-center justify-center text-center self-start shrink-0">
                  <span className="text-xs uppercase tracking-wider font-semibold text-muted-foreground">
                    {item.scoreType}
                  </span>
                  <div className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400 mt-1">
                    {item.score}
                  </div>
                  <span className="text-[11px] text-emerald-400 font-medium mt-1">
                    Academic Merit
                  </span>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
