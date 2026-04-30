'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { motion } from 'motion/react'
import { Briefcase, MapPin, Calendar, CheckCircle2 } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Link from 'next/link'

const experiences = [
  {
    company: 'Brandleap Agency',
    role: 'SEO Specialist',
    badges: ['Remote', 'Part-Time'],
    duration: 'December 2025 – Present',
    isCurrent: true,
    responsibilities: [
      'Optimized SEO content and on-page elements to improve keyword visibility and user engagement',
      'Implemented schema markup and local SEO optimizations, increasing SERP visibility and local search presence for client websites',
      'Identified and resolved technical SEO issues related to indexing, crawlability, and site speed, resulting in healthier site performance'
    ]
  },
  {
    company: 'Softvence Omega',
    role: 'SEO Specialist',
    badges: ['On-site', 'Mohakhali, Dhaka'],
    duration: 'August 2025 – December 2025',
    isCurrent: false,
    responsibilities: [
      'Planned and executed end-to-end SEO strategies to enhance organic traffic, keyword rankings, and search engine visibility',
      'Conducted comprehensive keyword research, on-page optimization, and technical SEO audits, resolving indexing, crawlability, and site performance issues',
      'Monitored, analyzed, and optimized backlink profiles to improve domain authority and reduce SEO risks'
    ]
  },
  {
    company: 'Serphit IT',
    role: 'SEO Specialist',
    badges: ['Remote'],
    duration: 'February 2025 – July 2025',
    isCurrent: false,
    responsibilities: [
      'Executed strategic white-hat off-page SEO including quality link building and local citation management',
      'Optimized on-page SEO elements and refreshed existing content for better keyword targeting and ranking stability',
      'Aligned content with search intent to improve organic relevance'
    ]
  }
]

export default function ExperiencePage() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const ctx = gsap.context(() => {
      // Hero Entrance
      gsap.from('.page-label', { y: 16, opacity: 0, duration: 0.45, ease: 'power2.out' })
      gsap.from('.page-heading', { y: 50, opacity: 0, duration: 0.65, delay: 0.1, ease: 'power3.out' })
      gsap.from('.page-sub', { y: 28, opacity: 0, duration: 0.55, delay: 0.2, ease: 'power2.out' })

      // Stats Counters
      const counters = document.querySelectorAll('.stat-number')
      counters.forEach((counter) => {
        const target = parseInt(counter.getAttribute('data-target') || '0')
        gsap.fromTo(counter, 
          { textContent: '0' },
          {
            textContent: target,
            duration: 1.8,
            ease: 'power1.out',
            snap: { textContent: 1 },
            scrollTrigger: { trigger: counter, start: 'top 85%' }
          }
        )
      })

      // Timeline Cards Entrance
      const cards = document.querySelectorAll('.experience-card')
      cards.forEach((card, i) => {
        const isEven = i % 2 === 0
        gsap.from(card, {
          x: isEven ? -60 : 60,
          opacity: 0,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: card,
            start: 'top 82%',
          }
        })
      })
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <div className="flex flex-col min-h-screen bg-[#080810] text-[#F0F0F0] font-dm-sans" ref={containerRef}>
      <Navbar />

      <main className="flex-grow pt-20">
        {/* SECTION 1: Page Hero */}
        <section className="relative min-h-[320px] flex items-center py-20 bg-dot-grid">
          <div className="max-w-7xl mx-auto px-6 w-full text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-3 mb-3 page-label">
              <span className="w-7 h-px bg-[#00D4FF]" />
              <span className="text-[11px] font-bold tracking-[0.18em] uppercase text-[#00D4FF]">
                WORK HISTORY
              </span>
            </div>
            <h1 className="page-heading font-syne text-5xl md:text-7xl font-bold text-[#F0F0F0] mb-4">
              Professional Experience
            </h1>
            <p className="page-sub text-[#888899] text-lg md:text-xl max-w-2xl mx-auto md:mx-0">
              1+ year of hands-on SEO across 3 companies — remote and on-site.
            </p>
          </div>
        </section>

        {/* SECTION 2: Key Achievement Stats */}
        <section className="py-24 border-y border-white/5 bg-[#111120]/30">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { val: 20, suffix: "+", label: "Websites on Page 1" },
                { val: 60, suffix: "%", label: "Max Traffic Increase" },
                { val: 100, suffix: "+", label: "Technical Issues Fixed" },
                { val: 3, suffix: "", label: "Companies" },
              ].map((stat, i) => (
                <div key={i} className="bg-[#111120] border border-white/5 p-8 rounded-[10px] text-center hover:border-[#00D4FF]/30 transition-all">
                  <div className="text-[#00D4FF] text-4xl md:text-5xl font-bold font-syne mb-2">
                    <span className="stat-number" data-target={stat.val}>0</span>
                    {stat.suffix}
                  </div>
                  <p className="text-[#888899] text-sm uppercase tracking-widest font-medium">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 3: Experience Timeline */}
        <section className="py-24 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-6">
            <div className="relative pt-8">
              {/* Vertical Center Line (Desktop) */}
              <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-[2px] bg-[#00D4FF]/20 -translate-x-1/2" />
              
              {/* Mobile Side Line */}
              <div className="lg:hidden absolute left-4 top-0 bottom-0 w-[2px] bg-[#00D4FF]/20" />

              <div className="space-y-24">
                {experiences.map((exp, i) => (
                  <div key={i} className={`experience-card relative grid grid-cols-1 lg:grid-cols-2 gap-8 items-start ${i % 2 === 0 ? '' : 'lg:flex-row-reverse'}`}>
                    {/* Dot Marker */}
                    <div className="absolute left-[13px] lg:left-1/2 top-8 w-4 h-4 rounded-full bg-[#00D4FF] border-4 border-[#080810] shadow-[0_0_15px_rgba(0,212,255,0.5)] -translate-x-1/2 z-10" />

                    {/* Content Card */}
                    <div className={`${i % 2 === 0 ? 'lg:pr-16' : 'lg:col-start-2 lg:pl-16'} pl-12 lg:pl-0`}>
                      <div className="bg-[#111120] border border-white/5 p-8 rounded-[10px] hover:border-[#00D4FF]/30 transition-all group">
                        <div className="flex flex-wrap justify-between items-start gap-4 mb-6">
                          <div>
                            <div className="flex flex-wrap gap-2 mb-3">
                              {exp.badges.map((badge, b) => (
                                <span key={b} className="inline-block px-3 py-1 border border-[#00D4FF]/30 text-[#00D4FF] text-[10px] font-bold uppercase tracking-widest rounded-full">
                                  {badge}
                                </span>
                              ))}
                              {exp.isCurrent && (
                                <span className="inline-block px-3 py-1 bg-green-500 text-white text-[10px] font-bold uppercase tracking-widest rounded-full">
                                  Current
                                </span>
                              )}
                            </div>
                            <h3 className="text-2xl font-bold font-syne text-[#F0F0F0] mb-1">{exp.role}</h3>
                            <p className="text-[#00D4FF] font-bold text-lg">{exp.company}</p>
                          </div>
                          <div className="flex items-center gap-2 text-[#888899] text-sm font-medium bg-[#080810]/50 px-3 py-1 rounded-full border border-white/5">
                            <Calendar size={14} />
                            <span>{exp.duration}</span>
                          </div>
                        </div>

                        <ul className="space-y-4">
                          {exp.responsibilities.map((resp, r) => (
                            <li key={r} className="text-[#888899] text-sm leading-relaxed flex gap-3">
                              <span className="text-[#00D4FF] mt-1.5 w-1.5 h-1.5 rounded-full bg-[#00D4FF] flex-shrink-0" />
                              {resp}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 4: Key Achievements + CTA */}
        <section className="py-24 bg-[#111120]/50 border-t border-white/5">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
              <div className="lg:col-span-7">
                <div className="flex items-center gap-3 mb-3">
                  <span className="w-7 h-px bg-[#00D4FF]" />
                  <span className="text-[11px] font-bold tracking-[0.18em] uppercase text-[#00D4FF]">
                    HIGHLIGHTS
                  </span>
                </div>
                <h2 className="font-syne text-3xl md:text-4xl font-bold text-[#F0F0F0] mb-8">
                  Key Career Achievements
                </h2>

                <div className="space-y-4">
                  {[
                    "Ranked 20+ websites on Google's first page across multiple niches",
                    "Increased organic traffic by up to 60% for clients by resolving crawlability, indexing, and site speed issues",
                    "Grew domain authority through strategic white-hat link building and citation management",
                    "Delivered end-to-end SEO campaigns from audit to execution — independently, consistently",
                    "Managed SEO across e-commerce, local services, and SaaS — adapting strategy to each niche"
                  ].map((ach, i) => (
                    <div key={i} className="flex gap-4 p-4 bg-[#111120] border border-white/5 rounded-lg group hover:border-[#00D4FF]/30 transition-all">
                      <CheckCircle2 size={20} className="text-[#00D4FF] flex-shrink-0 mt-0.5" />
                      <p className="text-[#888899] leading-relaxed group-hover:text-[#F0F0F0] transition-colors">{ach}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-5 flex flex-col items-center lg:items-end gap-6">
                <Link 
                  href="/projects"
                  className="w-full max-w-[320px] text-center bg-[#00D4FF] text-[#080810] font-bold px-8 py-5 rounded-md hover:bg-[#22DFFF] active:scale-[0.98] transition-all duration-200 shadow-[0_0_20px_rgba(0,212,255,0.25)] flex items-center justify-center gap-3"
                >
                  View My Projects <span className="text-xl">→</span>
                </Link>
                <a 
                  href="/resume.pdf" 
                  download
                  className="w-full max-w-[320px] text-center border border-[#00D4FF] text-[#00D4FF] font-bold px-8 py-5 rounded-md hover:bg-[rgba(0,212,255,0.08)] active:scale-[0.98] transition-all duration-200"
                >
                  Download Resume
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
