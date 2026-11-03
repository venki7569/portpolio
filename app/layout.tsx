import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { ThemeProvider } from 'next-themes'
import { Toaster } from 'sonner'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Vadde Venki | AI/ML Engineer & MERN Stack Developer',
  description: 'Portfolio of Vadde Venki - AI/ML Engineer & MERN Stack Developer. B.Tech in CSE (AI & ML) at Parul University. Explore my AI platforms, MERN applications, and engineering skills.',
  keywords: [
    'Vadde Venki',
    'AI/ML Engineer',
    'MERN Stack Developer',
    'Full Stack Developer',
    'Machine Learning',
    'Deep Learning',
    'NLP',
    'Parul University',
    'Python',
    'React',
    'Node.js',
    'Portfolio'
  ],
  authors: [{ name: 'Vadde Venki', url: 'https://github.com/venki7569' }],
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <body className="font-sans antialiased selection:bg-indigo-500/20 selection:text-indigo-400">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          {children}
          <Toaster richColors position="top-right" />
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
