import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Award, CheckCircle2, ShieldCheck, Sparkles, Cloud, Network, Code, Globe2 } from 'lucide-react'

const certifications = [
  {
    title: 'NPTEL Certification — Computer Networks & Internet Protocol',
    issuer: 'NPTEL (National Programme on Technology Enhanced Learning)',
    partner: 'Ministry of Education & IIT',
    icon: Network,
    badge: 'Government & IIT Accredited',
    color: 'from-blue-500 to-indigo-500',
    description:
      'Rigorous certification covering the OSI and TCP/IP protocol suite, network routing algorithms, congestion control, socket programming, IP addressing, and secure data communications.',
    topics: ['TCP/IP Protocol Suite', 'Network Architecture', 'Routing & Switching', 'Socket Programming', 'Data Link & Transport Layers'],
  },
  {
    title: 'AWS CloudVerse',
    issuer: 'AWS Cloud Club & AWS User Group Vadodara',
    partner: 'Amazon Web Services Ecosystem',
    icon: Cloud,
    badge: 'AWS Community Verified',
    color: 'from-amber-500 to-orange-500',
    description:
      'Hands-on credential validating practical understanding of AWS cloud computing fundamentals, compute & storage services (EC2, S3), relational databases (RDS), IAM security, and serverless architectures.',
    topics: ['AWS Core Services', 'Cloud Architecture', 'Security & IAM', 'Storage & Compute', 'Serverless Concepts'],
  },
  {
    title: 'Data Structures & Algorithms Certification',
    issuer: 'Learn Flu',
    partner: 'AICTE Approved (All India Council for Technical Education)',
    icon: Code,
    badge: 'AICTE Approved',
    color: 'from-emerald-500 to-teal-500',
    description:
      'Comprehensive algorithmic certification assessing mastery in Arrays, Linked Lists, Stacks, Queues, Trees, Graphs, Dynamic Programming, Greedy Algorithms, and asymptotic Big-O complexity analysis.',
    topics: ['Data Structures & Algorithms', 'Dynamic Programming', 'Graph Algorithms', 'Trees & Heaps', 'Complexity Analysis'],
  },
  {
    title: 'Web Development Certification',
    issuer: 'Learn Flu',
    partner: 'AICTE Approved (All India Council for Technical Education)',
    icon: Globe2,
    badge: 'AICTE Approved',
    color: 'from-purple-500 to-pink-500',
    description:
      'Production-oriented full-stack web engineering certification covering modern frontend UI construction, asynchronous JavaScript, Node.js backend services, RESTful API architecture, and database integrations.',
    topics: ['Full-Stack Development', 'REST APIs', 'Modern JavaScript', 'Frontend Engineering', 'Backend Services'],
  },
]

export function CertificationsSection() {
  return (
    <section id="certifications" className="py-24 px-6 relative">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-xs font-medium text-indigo-400">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Verified Credentials</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-foreground">
            Certifications & <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">Accreditations</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-base">
            Formal technical certifications approved by AICTE, NPTEL/IIT, and AWS developer communities.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {certifications.map((cert) => {
            const Icon = cert.icon
            return (
              <Card
                key={cert.title}
                className="p-7 border border-border bg-card/60 backdrop-blur-xl hover:border-indigo-500/50 transition-all duration-300 hover:shadow-xl group flex flex-col justify-between relative overflow-hidden"
              >
                <div className="space-y-4">
                  {/* Top Bar with Icon and Badge */}
                  <div className="flex items-start justify-between gap-3">
                    <div className={`w-11 h-11 rounded-xl bg-gradient-to-tr ${cert.color} flex items-center justify-center text-white shadow-md group-hover:scale-105 transition-transform`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-indigo-500/15 text-indigo-300 border border-indigo-500/25">
                      {cert.badge}
                    </span>
                  </div>

                  {/* Title & Organization */}
                  <div className="space-y-1">
                    <h3 className="text-lg font-bold text-foreground group-hover:text-indigo-400 transition-colors leading-snug">
                      {cert.title}
                    </h3>
                    <p className="text-xs font-semibold text-indigo-400">
                      {cert.issuer}
                    </p>
                    <p className="text-[11px] text-muted-foreground">
                      {cert.partner}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-xs text-foreground/80 leading-relaxed">
                    {cert.description}
                  </p>

                  {/* Topics Covered */}
                  <div className="pt-2 space-y-2">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                      Competencies Covered
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {cert.topics.map((topic) => (
                        <span
                          key={topic}
                          className="text-[11px] px-2 py-0.5 rounded-md bg-slate-900/80 border border-border text-slate-300"
                        >
                          {topic}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-3 border-t border-border flex items-center justify-between text-xs text-muted-foreground">
                  <span className="flex items-center gap-1.5 text-emerald-400 font-medium">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    Verified Completion
                  </span>
                  <span className="text-[11px] font-mono text-slate-400">Authorized Credential</span>
                </div>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
