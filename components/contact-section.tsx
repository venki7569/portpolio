'use client'

import { useState } from 'react'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Copy,
  Check,
  ArrowUp,
  Sparkles,
  FileText,
  ExternalLink,
  Send,
  MessageSquare
} from 'lucide-react'
import { toast } from 'sonner'
import { ResumeModal } from '@/components/resume-modal'

export function ContactSection() {
  const [copiedEmail, setCopiedEmail] = useState(false)
  const [copiedPhone, setCopiedPhone] = useState(false)

  const copyToClipboard = (text: string, type: 'email' | 'phone') => {
    navigator.clipboard.writeText(text)
    if (type === 'email') {
      setCopiedEmail(true)
      toast.success('Email copied to clipboard: ' + text)
      setTimeout(() => setCopiedEmail(false), 2500)
    } else {
      setCopiedPhone(true)
      toast.success('Phone copied to clipboard: ' + text)
      setTimeout(() => setCopiedPhone(false), 2500)
    }
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <section id="contact" className="py-24 px-6 relative bg-slate-950/60">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[32rem] h-[32rem] bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto space-y-12 relative z-10">
        {/* Section Header */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-xs font-medium text-indigo-400">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Let's Connect & Collaborate</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-foreground">
            Get In <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">Touch</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-base">
            I'm always interested in hearing about new AI/ML opportunities, full-stack engineering roles, internships, or technical collaborations. Feel free to connect directly!
          </p>
        </div>

        {/* Contact Channels Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Email Card */}
          <Card className="p-6 border border-border bg-card/60 backdrop-blur-xl hover:border-indigo-500/50 transition-all duration-300 hover:shadow-xl group flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-start justify-between">
                <div className="w-12 h-12 rounded-xl bg-indigo-500/15 border border-indigo-500/20 flex items-center justify-center text-indigo-400 group-hover:scale-105 transition-transform">
                  <Mail className="w-6 h-6" />
                </div>
                <Button
                  size="icon"
                  variant="ghost"
                  onClick={() => copyToClipboard('vvadde825@gmail.com', 'email')}
                  className="h-8 w-8 text-muted-foreground hover:text-foreground"
                  title="Copy email address"
                >
                  {copiedEmail ? (
                    <Check className="w-4 h-4 text-emerald-400" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </Button>
              </div>

              <div>
                <h4 className="font-bold text-base text-foreground group-hover:text-indigo-400 transition-colors">
                  Email
                </h4>
                <p className="text-xs text-muted-foreground mt-0.5">
                  Direct inquiries & messages
                </p>
                <a
                  href="mailto:vvadde825@gmail.com"
                  className="text-sm font-semibold text-indigo-400 hover:underline block mt-2"
                >
                  vvadde825@gmail.com
                </a>
              </div>
            </div>

            <div className="pt-4 mt-4 border-t border-border">
              <Button asChild size="sm" className="w-full gap-2 bg-indigo-600 hover:bg-indigo-500 text-white text-xs">
                <a href="mailto:vvadde825@gmail.com">
                  <Send className="w-3.5 h-3.5" />
                  Send Email
                </a>
              </Button>
            </div>
          </Card>

          {/* Phone Card */}
          <Card className="p-6 border border-border bg-card/60 backdrop-blur-xl hover:border-cyan-500/50 transition-all duration-300 hover:shadow-xl group flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-start justify-between">
                <div className="w-12 h-12 rounded-xl bg-cyan-500/15 border border-cyan-500/20 flex items-center justify-center text-cyan-400 group-hover:scale-105 transition-transform">
                  <Phone className="w-6 h-6" />
                </div>
                <Button
                  size="icon"
                  variant="ghost"
                  onClick={() => copyToClipboard('+917569310593', 'phone')}
                  className="h-8 w-8 text-muted-foreground hover:text-foreground"
                  title="Copy phone number"
                >
                  {copiedPhone ? (
                    <Check className="w-4 h-4 text-emerald-400" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </Button>
              </div>

              <div>
                <h4 className="font-bold text-base text-foreground group-hover:text-cyan-400 transition-colors">
                  Phone
                </h4>
                <p className="text-xs text-muted-foreground mt-0.5">
                  Available for calls & messaging
                </p>
                <a
                  href="tel:+917569310593"
                  className="text-sm font-semibold text-cyan-400 hover:underline block mt-2"
                >
                  +91 7569310593
                </a>
              </div>
            </div>

            <div className="pt-4 mt-4 border-t border-border">
              <Button asChild size="sm" variant="outline" className="w-full gap-2 border-cyan-500/40 text-cyan-300 hover:bg-cyan-500/10 text-xs">
                <a href="tel:+917569310593">
                  <Phone className="w-3.5 h-3.5" />
                  Call Directly
                </a>
              </Button>
            </div>
          </Card>

          {/* LinkedIn Card */}
          <Card className="p-6 border border-border bg-card/60 backdrop-blur-xl hover:border-indigo-500/50 transition-all duration-300 hover:shadow-xl group flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-blue-500/15 border border-blue-500/20 flex items-center justify-center text-blue-400 group-hover:scale-105 transition-transform">
                <Linkedin className="w-6 h-6" />
              </div>

              <div>
                <h4 className="font-bold text-base text-foreground group-hover:text-indigo-400 transition-colors">
                  LinkedIn
                </h4>
                <p className="text-xs text-muted-foreground mt-0.5">
                  Professional network & recommendations
                </p>
                <span className="text-sm font-semibold text-foreground/80 block mt-2">
                  vadde-venki-07777a305
                </span>
              </div>
            </div>

            <div className="pt-4 mt-4 border-t border-border">
              <Button asChild size="sm" variant="outline" className="w-full gap-2 border-blue-500/40 text-blue-300 hover:bg-blue-500/10 text-xs">
                <a
                  href="https://www.linkedin.com/in/vadde-venki-07777a305"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  Connect on LinkedIn
                </a>
              </Button>
            </div>
          </Card>

          {/* GitHub Card */}
          <Card className="p-6 border border-border bg-card/60 backdrop-blur-xl hover:border-purple-500/50 transition-all duration-300 hover:shadow-xl group flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-purple-500/15 border border-purple-500/20 flex items-center justify-center text-purple-400 group-hover:scale-105 transition-transform">
                <Github className="w-6 h-6" />
              </div>

              <div>
                <h4 className="font-bold text-base text-foreground group-hover:text-purple-400 transition-colors">
                  GitHub
                </h4>
                <p className="text-xs text-muted-foreground mt-0.5">
                  Open source & project code repositories
                </p>
                <span className="text-sm font-semibold text-foreground/80 block mt-2">
                  github.com/venki7569
                </span>
              </div>
            </div>

            <div className="pt-4 mt-4 border-t border-border">
              <Button asChild size="sm" variant="outline" className="w-full gap-2 border-purple-500/40 text-purple-300 hover:bg-purple-500/10 text-xs">
                <a
                  href="https://github.com/venki7569"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  View GitHub Repos
                </a>
              </Button>
            </div>
          </Card>

          {/* Location Card */}
          <Card className="p-6 border border-border bg-card/60 backdrop-blur-xl hover:border-rose-500/50 transition-all duration-300 hover:shadow-xl group flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-rose-500/15 border border-rose-500/20 flex items-center justify-center text-rose-400 group-hover:scale-105 transition-transform">
                <MapPin className="w-6 h-6" />
              </div>

              <div>
                <h4 className="font-bold text-base text-foreground group-hover:text-rose-400 transition-colors">
                  Location
                </h4>
                <p className="text-xs text-muted-foreground mt-0.5">
                  Current residency & mobility
                </p>
                <span className="text-sm font-semibold text-foreground/80 block mt-2">
                  Vadodara, Gujarat, India
                </span>
              </div>
            </div>

            <div className="pt-4 mt-4 border-t border-border text-xs text-muted-foreground flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
              <span>Open to onsite & remote work</span>
            </div>
          </Card>

          {/* Resume Card */}
          <Card className="p-6 border border-border bg-card/60 backdrop-blur-xl hover:border-indigo-500/50 transition-all duration-300 hover:shadow-xl group flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-amber-500/15 border border-amber-500/20 flex items-center justify-center text-amber-400 group-hover:scale-105 transition-transform">
                <FileText className="w-6 h-6" />
              </div>

              <div>
                <h4 className="font-bold text-base text-foreground group-hover:text-amber-400 transition-colors">
                  Curriculum Vitae
                </h4>
                <p className="text-xs text-muted-foreground mt-0.5">
                  Official verified resume format
                </p>
                <span className="text-sm font-semibold text-foreground/80 block mt-2">
                  Vadde_Venki_Resume.pdf
                </span>
              </div>
            </div>

            <div className="pt-4 mt-4 border-t border-border">
              <ResumeModal>
                <Button size="sm" className="w-full gap-2 bg-gradient-to-r from-amber-500 to-indigo-600 hover:opacity-95 text-white text-xs">
                  <FileText className="w-3.5 h-3.5" />
                  View & Download CV
                </Button>
              </ResumeModal>
            </div>
          </Card>
        </div>

        {/* Polished Footer */}
        <div className="pt-16 mt-16 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-md bg-indigo-600 flex items-center justify-center text-white text-[10px] font-bold">
              VV
            </div>
            <span>© {new Date().getFullYear()} Vadde Venki. All rights reserved.</span>
          </div>

          <div className="flex items-center gap-6">
            <a href="#about" className="hover:text-foreground transition-colors">About</a>
            <a href="#skills" className="hover:text-foreground transition-colors">Skills</a>
            <a href="#projects" className="hover:text-foreground transition-colors">Projects</a>
            <a href="#education" className="hover:text-foreground transition-colors">Education</a>
            <a href="#certifications" className="hover:text-foreground transition-colors">Certifications</a>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 hover:text-indigo-400 transition-colors"
              title="Back to top"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
