'use client'

import { useTheme } from 'next-themes'
import { Moon, Sun, Menu, X, FileText, Sparkles, Send } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useEffect, useState } from 'react'
import { ResumeModal } from '@/components/resume-modal'

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Education', href: '#education' },
  { name: 'Certifications', href: '#certifications' },
  { name: 'Contact', href: '#contact' },
]

export function Navigation() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    setMounted(true)
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  if (!mounted) return null

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-background/85 backdrop-blur-xl border-b border-white/10 shadow-lg shadow-black/10 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
        {/* Brand Logo */}
        <a href="#hero" className="flex items-center gap-2.5 group">
          <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 via-indigo-500 to-cyan-400 text-white font-bold text-sm shadow-md shadow-indigo-500/25 group-hover:scale-105 transition-transform">
            VV
            <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-emerald-500 border-2 border-background rounded-full"></span>
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-base tracking-tight text-foreground group-hover:text-indigo-400 transition-colors">
              Vadde Venki
            </span>
            <span className="text-[10px] uppercase tracking-wider text-muted-foreground font-medium">
              AI/ML & MERN
            </span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex gap-7 items-center">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-foreground/75 hover:text-indigo-400 transition-colors relative py-1 hover:after:w-full after:w-0 after:h-0.5 after:bg-indigo-500 after:absolute after:bottom-0 after:left-0 after:transition-all after:duration-300"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-3">
          <ResumeModal>
            <Button
              size="sm"
              variant="outline"
              className="gap-2 border-indigo-500/30 hover:border-indigo-500/80 bg-background/50 backdrop-blur text-xs font-medium"
            >
              <FileText className="w-3.5 h-3.5 text-indigo-400" />
              <span>Resume</span>
            </Button>
          </ResumeModal>

          <Button
            asChild
            size="sm"
            className="gap-1.5 bg-gradient-to-r from-indigo-600 to-indigo-500 hover:from-indigo-500 hover:to-indigo-600 text-white text-xs shadow-md shadow-indigo-500/20"
          >
            <a href="#contact">
              <Send className="w-3.5 h-3.5" />
              <span>Hire Me</span>
            </a>
          </Button>

          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="rounded-full w-9 h-9 text-muted-foreground hover:text-foreground"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? (
              <Sun className="w-4 h-4 text-amber-400 transition-transform rotate-0 hover:rotate-45" />
            ) : (
              <Moon className="w-4 h-4 text-indigo-500 transition-transform" />
            )}
          </Button>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex md:hidden items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="rounded-full w-8 h-8"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? (
              <Sun className="w-4 h-4 text-amber-400" />
            ) : (
              <Moon className="w-4 h-4 text-indigo-500" />
            )}
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="rounded-lg w-9 h-9"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-border bg-background/95 backdrop-blur-xl px-6 py-5 space-y-4 animate-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-medium text-foreground/80 hover:text-indigo-400 py-1.5 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-border flex flex-col gap-2.5">
            <ResumeModal>
              <Button
                variant="outline"
                className="w-full justify-center gap-2 border-indigo-500/30 text-xs"
              >
                <FileText className="w-4 h-4 text-indigo-400" />
                <span>View Full Resume</span>
              </Button>
            </ResumeModal>
            <Button
              asChild
              className="w-full justify-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white text-xs"
              onClick={() => setMobileMenuOpen(false)}
            >
              <a href="#contact">
                <Send className="w-4 h-4" />
                <span>Contact Venki</span>
              </a>
            </Button>
          </div>
        </div>
      )}
    </nav>
  )
}
