'use client'

import React from 'react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { FileText, Download, Printer, ExternalLink, Mail, Phone, MapPin, Award, BookOpen, Briefcase, Sparkles, CheckCircle2 } from 'lucide-react'
import { toast } from 'sonner'

interface ResumeModalProps {
  children?: React.ReactNode
}

export function ResumeModal({ children }: ResumeModalProps) {
  const handlePrint = () => {
    window.print()
  }

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('vvadde825@gmail.com')
    toast.success('Email copied to clipboard: vvadde825@gmail.com')
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        {children || (
          <Button variant="outline" className="gap-2 border-indigo-500/40 hover:border-indigo-500 text-foreground">
            <FileText className="w-4 h-4 text-indigo-400" />
            <span>View Resume</span>
          </Button>
        )}
      </DialogTrigger>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto p-0 bg-slate-950/95 text-slate-100 border-slate-800 backdrop-blur-xl">
        <DialogHeader className="sr-only">
          <DialogTitle>Vadde Venki — Curriculum Vitae</DialogTitle>
          <DialogDescription>
            Official resume of Vadde Venki, AI/ML Engineer and MERN Stack Developer.
          </DialogDescription>
        </DialogHeader>

        {/* Top Action Bar */}
        <div className="sticky top-0 z-20 flex items-center justify-between border-b border-slate-800 bg-slate-900/90 px-6 py-3.5 backdrop-blur-md">
          <div className="flex items-center gap-2 text-sm text-slate-300 font-medium">
            <FileText className="w-4 h-4 text-indigo-400" />
            <span>Vadde_Venki_Resume.pdf</span>
          </div>
          <div className="flex items-center gap-2">
            <Button
              size="sm"
              variant="outline"
              onClick={handlePrint}
              className="gap-1.5 border-slate-700 bg-slate-800/80 text-xs text-slate-200 hover:bg-slate-700"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </Button>
            <Button
              size="sm"
              onClick={handleCopyEmail}
              className="gap-1.5 bg-indigo-600 hover:bg-indigo-500 text-xs text-white"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Contact Venki</span>
            </Button>
          </div>
        </div>

        {/* Resume Paper Content */}
        <div className="p-8 sm:p-12 space-y-8 bg-slate-950/80" id="printable-resume">
          {/* Header */}
          <div className="text-center border-b border-slate-800 pb-6 space-y-2">
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white uppercase font-sans">
              VADDE VENKI
            </h1>
            <p className="text-base sm:text-lg font-medium text-indigo-400 tracking-wide">
              AI/ML Engineer — MERN Stack Developer
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3 pt-2 text-xs sm:text-sm text-slate-300">
              <span className="flex items-center gap-1">
                <Phone className="w-3.5 h-3.5 text-indigo-400" /> +91-7569310593
              </span>
              <span>•</span>
              <a href="mailto:vvadde825@gmail.com" className="flex items-center gap-1 hover:text-indigo-400 transition-colors">
                <Mail className="w-3.5 h-3.5 text-indigo-400" /> vvadde825@gmail.com
              </a>
              <span>•</span>
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-indigo-400" /> Vadodara, India
              </span>
              <span>•</span>
              <a
                href="https://www.linkedin.com/in/vadde-venki-07777a305"
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-400 hover:underline flex items-center gap-1"
              >
                LinkedIn <ExternalLink className="w-3 h-3" />
              </a>
              <span>•</span>
              <a
                href="https://github.com/venki7569"
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-400 hover:underline flex items-center gap-1"
              >
                GitHub <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Professional Summary */}
          <section className="space-y-2">
            <h2 className="text-xs font-bold tracking-widest text-indigo-400 uppercase border-b border-indigo-500/20 pb-1">
              Professional Summary
            </h2>
            <p className="text-sm leading-relaxed text-slate-300">
              Aspiring AI/ML Engineer and MERN Stack Developer pursuing B.Tech in Computer Science Engineering (AI & ML) at Parul University (CGPA: 8.57). Hands-on experience building AI-driven systems, scalable backend architectures, REST APIs, and full-stack applications. Skilled in Python, Java, C, SQL, Machine Learning, NLP, MongoDB, Express.js, React.js, and Node.js, with strong foundations in Data Structures & Algorithms, DBMS, Operating Systems, and Computer Networks.
            </p>
          </section>

          {/* Skills */}
          <section className="space-y-2.5">
            <h2 className="text-xs font-bold tracking-widest text-indigo-400 uppercase border-b border-indigo-500/20 pb-1">
              Skills
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm">
              <div className="p-2.5 rounded bg-slate-900/60 border border-slate-800">
                <span className="font-semibold text-white">AI/ML: </span>
                <span className="text-slate-300">Machine Learning, Deep Learning, NLP, TensorFlow, Data Preprocessing, Model Evaluation</span>
              </div>
              <div className="p-2.5 rounded bg-slate-900/60 border border-slate-800">
                <span className="font-semibold text-white">Full Stack: </span>
                <span className="text-slate-300">MongoDB, Express.js, React.js, Node.js, REST APIs</span>
              </div>
              <div className="p-2.5 rounded bg-slate-900/60 border border-slate-800">
                <span className="font-semibold text-white">Languages: </span>
                <span className="text-slate-300">Python, Java, C, JavaScript, SQL, HTML5, CSS3</span>
              </div>
              <div className="p-2.5 rounded bg-slate-900/60 border border-slate-800">
                <span className="font-semibold text-white">Core CS: </span>
                <span className="text-slate-300">Data Structures & Algorithms, OOP, DBMS, Operating Systems, Computer Networks</span>
              </div>
              <div className="sm:col-span-2 p-2.5 rounded bg-slate-900/60 border border-slate-800">
                <span className="font-semibold text-white">Tools: </span>
                <span className="text-slate-300">Git, GitHub, VS Code, Postman</span>
              </div>
            </div>
          </section>

          {/* Projects */}
          <section className="space-y-4">
            <h2 className="text-xs font-bold tracking-widest text-indigo-400 uppercase border-b border-indigo-500/20 pb-1">
              Projects
            </h2>

            {/* Project 1 */}
            <div className="space-y-1.5 p-3 rounded-lg bg-slate-900/40 border border-slate-800/80">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="text-sm font-semibold text-white">
                  CampusVerse AI — Smart Campus Monitoring & Management System
                </h3>
                <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                  LIVE
                </span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                • Developed a centralized smart campus platform for monitoring classrooms, assets, maintenance requests, utilities, parking, and campus facilities through a unified dashboard, with analytics and AI-based predictive maintenance for campus operations.
              </p>
              <p className="text-[11px] text-indigo-300">
                <strong className="text-slate-400">Tech: </strong>AI/ML, Full Stack, REST APIs, Database, Data Analytics
              </p>
            </div>

            {/* Project 2 */}
            <div className="space-y-1.5 p-3 rounded-lg bg-slate-900/40 border border-slate-800/80">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="text-sm font-semibold text-white">
                  Policy Conflict Verification & Policy Intelligence Platform
                </h3>
                <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                  LIVE
                </span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                • Developed an AI-powered policy analysis platform supporting document upload, OCR, clause segmentation, semantic similarity, conflict detection, policy benchmarking, summarization, version management, and role-based approval workflows.
              </p>
              <p className="text-[11px] text-indigo-300">
                <strong className="text-slate-400">Tech: </strong>Python, NLP, FastAPI, Node.js, React, MongoDB/PostgreSQL, JWT
              </p>
            </div>

            {/* Project 3 */}
            <div className="space-y-1.5 p-3 rounded-lg bg-slate-900/40 border border-slate-800/80">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="text-sm font-semibold text-white">
                  LikeMinded — Interest-Based Community Platform
                </h3>
                <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                  LIVE
                </span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                • Developed a community platform that connects users based on shared interests, skills, and preferences, with interest-based communities and club discovery functionality.
              </p>
              <p className="text-[11px] text-indigo-300">
                <strong className="text-slate-400">Tech: </strong>MongoDB, Express.js, React.js, Node.js, REST APIs
              </p>
            </div>

            {/* Project 4 */}
            <div className="space-y-1.5 p-3 rounded-lg bg-slate-900/40 border border-slate-800/80">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="text-sm font-semibold text-white">
                  Smart Distributor Management System
                </h3>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                • Developed an inventory and billing platform with role-based authentication, real-time stock monitoring, analytics dashboards, demand insights, and automated SMS billing notifications.
              </p>
              <p className="text-[11px] text-indigo-300">
                <strong className="text-slate-400">Tech: </strong>MongoDB, Express.js, React.js, Node.js
              </p>
            </div>
          </section>

          {/* Education */}
          <section className="space-y-3">
            <h2 className="text-xs font-bold tracking-widest text-indigo-400 uppercase border-b border-indigo-500/20 pb-1">
              Education
            </h2>
            <div className="space-y-3">
              <div className="flex flex-wrap justify-between items-start text-xs sm:text-sm">
                <div>
                  <h4 className="font-semibold text-white">Parul University, Vadodara</h4>
                  <p className="text-slate-300">B.Tech in Computer Science Engineering (AI & ML)</p>
                </div>
                <div className="text-right">
                  <span className="font-mono text-slate-400 text-xs">2023 – Present</span>
                  <div className="font-semibold text-indigo-400">CGPA: 8.57 / 10</div>
                </div>
              </div>

              <div className="flex flex-wrap justify-between items-start text-xs sm:text-sm">
                <div>
                  <h4 className="font-semibold text-white">Sri Chaitanya Jr College, Andhra Pradesh</h4>
                  <p className="text-slate-300">Class XII (Intermediate MPC)</p>
                </div>
                <div className="text-right">
                  <span className="font-mono text-slate-400 text-xs">2023</span>
                  <div className="font-semibold text-emerald-400">Percentage: 97.9%</div>
                </div>
              </div>

              <div className="flex flex-wrap justify-between items-start text-xs sm:text-sm">
                <div>
                  <h4 className="font-semibold text-white">Yasoda EM School, Andhra Pradesh</h4>
                  <p className="text-slate-300">Class X</p>
                </div>
                <div className="text-right">
                  <span className="font-mono text-slate-400 text-xs">2021</span>
                  <div className="font-semibold text-emerald-400">Percentage: 96.8%</div>
                </div>
              </div>
            </div>
          </section>

          {/* Certifications */}
          <section className="space-y-2">
            <h2 className="text-xs font-bold tracking-widest text-indigo-400 uppercase border-b border-indigo-500/20 pb-1">
              Certifications
            </h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300">
              <li className="flex items-start gap-2 p-2 rounded bg-slate-900/40 border border-slate-800/80">
                <CheckCircle2 className="w-3.5 h-3.5 text-indigo-400 shrink-0 mt-0.5" />
                <span>NPTEL Certification — Computer Networks & Internet Protocol</span>
              </li>
              <li className="flex items-start gap-2 p-2 rounded bg-slate-900/40 border border-slate-800/80">
                <CheckCircle2 className="w-3.5 h-3.5 text-indigo-400 shrink-0 mt-0.5" />
                <span>AWS CloudVerse — AWS Cloud Club & AWS User Group Vadodara</span>
              </li>
              <li className="flex items-start gap-2 p-2 rounded bg-slate-900/40 border border-slate-800/80">
                <CheckCircle2 className="w-3.5 h-3.5 text-indigo-400 shrink-0 mt-0.5" />
                <span>Data Structures & Algorithms Certification (AICTE Approved) — Learn Flu</span>
              </li>
              <li className="flex items-start gap-2 p-2 rounded bg-slate-900/40 border border-slate-800/80">
                <CheckCircle2 className="w-3.5 h-3.5 text-indigo-400 shrink-0 mt-0.5" />
                <span>Web Development Certification (AICTE Approved) — Learn Flu</span>
              </li>
            </ul>
          </section>
        </div>
      </DialogContent>
    </Dialog>
  )
}
