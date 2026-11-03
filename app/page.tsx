import { Navigation } from '@/components/navigation'
import { HeroSection } from '@/components/hero-section'
import { AboutSection } from '@/components/about-section'
import { SkillsSection } from '@/components/skills-section'
import { ProjectsSection } from '@/components/projects-section'
import { EducationSection } from '@/components/education-section'
import { CertificationsSection } from '@/components/certifications-section'
import { ContactSection } from '@/components/contact-section'

export default function Home() {
  return (
    <>
      {/* Subtle modern ambient background mesh */}
      <div className="fixed inset-0 bg-gradient-to-b from-background via-background/95 to-background z-0 pointer-events-none" />
      <div className="fixed top-0 left-1/4 w-[600px] h-[600px] bg-indigo-500/10 rounded-full blur-[140px] pointer-events-none z-0" />
      <div className="fixed bottom-1/4 right-1/4 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none z-0" />

      <main className="w-full relative z-10">
        <Navigation />
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <EducationSection />
        <CertificationsSection />
        <ContactSection />
      </main>
    </>
  )
}
