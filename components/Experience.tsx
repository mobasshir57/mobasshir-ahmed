'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Briefcase } from 'lucide-react'
import Link from 'next/link'

const experiences = [
  {
    company: 'Brandleap Agency',
    role: 'SEO Specialist',
    type: 'Remote (Part-Time)',
    duration: 'Dec 2025 – Present',
    bullets: [
      'Optimized SEO content and on-page elements to improve keyword visibility and engagement.',
      'Implemented schema markup and local SEO optimizations, increasing SERP visibility.',
      'Identified and resolved technical SEO issues related to indexing, crawlability, and site speed.'
    ]
  },
  {
    company: 'Softvence Omega',
    role: 'SEO Specialist',
    type: 'On-site, Mohakhali, Dhaka',
    duration: 'Aug 2025 – Dec 2025',
    bullets: [
      'Planned and executed SEO strategies to enhance organic traffic and keyword rankings.',
      'Conducted keyword research, on-page optimization, and technical SEO audits.',
      'Monitored and optimized backlink profiles to improve domain authority.'
    ]
  },
  {
    company: 'Serphit IT',
    role: 'SEO Specialist',
    type: 'Remote',
    duration: 'Feb 2025 – July 2025',
    bullets: [
      'Executed strategic white-hat off-page SEO including quality link building.',
      'Optimized on-page SEO elements and refreshed existing content.',
      'Aligned content with search intent to improve organic relevance and ranking stability.'
    ]
  },
]

export default function Experience() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const ctx = gsap.context(() => {
      const cards = document.querySelectorAll('.experience-card')
      cards.forEach((card, i) => {
        const isEven = i % 2 === 0
        gsap.from(card, {
          x: isEven ? -50 : 50,
          opacity: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: card,
            start: 'top 85%',
            toggleActions: 'play none none none'
          }
        })
      })
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <section id="experience" className="py-24 bg-surface/30 relative">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="section-heading text-4xl md:text-5xl font-bold font-syne mb-16">
          Professional Experience
        </h2>

        <div className="relative pt-8" ref={containerRef}>
          {/* Vertical Center Line (Desktop) */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-[2px] bg-accent/20 -translate-x-1/2" />

          {/* Mobile Side Line */}
          <div className="lg:hidden absolute left-4 top-0 bottom-0 w-[2px] bg-accent/20" />

          <div className="space-y-12">
            {experiences.map((exp, i) => (
              <div
                key={i}
                className={`experience-card relative grid grid-cols-1 lg:grid-cols-2 gap-8 items-start ${i % 2 === 0 ? '' : 'lg:flex-row-reverse'
                  }`}
              >
                {/* Dot Marker */}
                <div className="absolute left-[13px] lg:left-1/2 top-8 w-4 h-4 rounded-full bg-accent border-4 border-background shadow-glow -translate-x-1/2 z-10" />

                {/* Content Card */}
                <div className={`${i % 2 === 0 ? 'lg:pr-16' : 'lg:col-start-2 lg:pl-16'} pl-12 lg:pl-0`}>
                  <div className="glass-card p-8 rounded-sm hover:border-accent/30 transition-colors">
                    <div className="flex flex-wrap justify-between items-start gap-4 mb-6">
                      <div>
                        <span className="inline-block px-3 py-1 bg-accent/10 text-accent text-[10px] font-bold uppercase tracking-widest rounded-full mb-3">
                          {exp.type}
                        </span>
                        <h3 className="text-2xl font-bold font-syne text-white">{exp.role}</h3>
                        <p className="text-accent font-bold">{exp.company}</p>
                      </div>
                      <span className="text-text-muted text-sm font-medium">{exp.duration}</span>
                    </div>

                    <ul className="space-y-3">
                      {exp.bullets.map((bullet, j) => (
                        <li key={j} className="text-text-muted text-sm leading-relaxed flex gap-3">
                          <span className="text-accent mt-1.5 w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20 flex justify-center">
          <Link
            href="/experience"
            className="inline-flex items-center gap-2 border border-accent text-accent font-bold px-8 py-4 rounded-md hover:bg-accent/10 transition-all active:scale-[0.98]"
          >
            View Full Experience <span className="text-xl">→</span>
          </Link>
        </div>
      </div>
    </section>
  )
}
