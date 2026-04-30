'use client'

import { FaGithub, FaLinkedin, FaTwitter, FaFacebook } from 'react-icons/fa'
import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="w-full py-12 px-6 bg-surface border-t border-border font-dm-sans">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="text-xl font-bold font-syne text-accent tracking-tighter">
          Mobasshir<span className="text-white">.</span>
        </div>

        <div className="flex flex-wrap justify-center gap-8 text-sm font-medium text-text-muted">
          <Link href="/about" className="hover:text-accent transition-colors">About</Link>
          <Link href="/skills" className="hover:text-accent transition-colors">Skills</Link>
          <Link href="/experience" className="hover:text-accent transition-colors">Experience</Link>
          <Link href="/projects" className="hover:text-accent transition-colors">Projects</Link>
          <Link href="/contact" className="hover:text-accent transition-colors">Contact</Link>
        </div>

        <div className="flex items-center gap-6">
          {[
            { icon: FaGithub, href: 'https://github.com/mobasshir57' },
            { icon: FaLinkedin, href: 'https://linkedin.com/in/mobasshir-ahmed' },
            { icon: FaTwitter, href: '#' },
            { icon: FaFacebook, href: '#' },
          ].map((social, i) => (
            <a
              key={i}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-muted hover:text-accent transition-colors transition-transform hover:-translate-y-1"
            >
              <social.icon size={20} />
            </a>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-border/50 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] uppercase tracking-widest font-bold text-text-muted/60">
        <p>© {currentYear} Md Mobasshir Ahmed. All rights reserved.</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-accent">Privacy Policy</a>
          <a href="#" className="hover:text-accent">Terms of Service</a>
        </div>
      </div>
    </footer>
  )
}
