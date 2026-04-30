'use client'

import { useState, useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { motion, AnimatePresence } from 'motion/react'
import { ArrowRight, Filter } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Link from 'next/link'
import Image from 'next/image'
import { projects } from '@/lib/projects'

export default function ProjectsPage() {
  const [filter, setFilter] = useState<'All' | 'SEO' | 'Full Stack'>('All')
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const ctx = gsap.context(() => {
      // Hero Entrance
      gsap.from('.page-label', { y: 16, opacity: 0, duration: 0.45, ease: 'power2.out' })
      gsap.from('.page-heading', { y: 50, opacity: 0, duration: 0.65, delay: 0.1, ease: 'power3.out' })
      gsap.from('.page-sub', { y: 28, opacity: 0, duration: 0.55, delay: 0.2, ease: 'power2.out' })
    }, containerRef)

    return () => ctx.revert()
  }, [])

  const filteredProjects = projects.filter(p => filter === 'All' || p.niche === filter)

  return (
    <div className="flex flex-col min-h-screen bg-[#080810] text-[#F0F0F0] font-dm-sans" ref={containerRef}>
      <Navbar />

      <main className="flex-grow pt-20">
        {/* SECTION 1: Page Hero + Intro Text */}
        <section className="relative min-h-[400px] flex items-center py-20 bg-dot-grid">
          <div className="max-w-7xl mx-auto px-6 w-full text-center">
            <div className="flex items-center justify-center gap-3 mb-3 page-label">
              <span className="w-7 h-px bg-[#00D4FF]" />
              <span className="text-[11px] font-bold tracking-[0.18em] uppercase text-[#00D4FF]">
                MY WORK
              </span>
            </div>
            <h1 className="page-heading font-syne text-5xl md:text-7xl font-bold text-[#F0F0F0] mb-6">
              Featured Projects
            </h1>
            <p className="page-sub text-[#888899] text-lg md:text-xl max-w-2xl mx-auto mb-8">
              A mix of real client SEO campaigns and full-stack development builds — each driven by measurable outcomes.
            </p>
            <p className="max-w-[700px] mx-auto text-[#888899] leading-relaxed">
              Here you'll find a selection of my best work — from transforming e-commerce stores into search-optimized platforms, to building full-stack web applications from the ground up. Every project reflects my commitment to clean execution and real business impact.
            </p>
          </div>
        </section>

        {/* SECTION 2: Filter Bar + Project Grid */}
        <section className="py-24 border-t border-white/5">
          <div className="max-w-7xl mx-auto px-6">
            {/* Filter Bar */}
            <div className="sticky top-24 z-30 mb-12 flex justify-center">
              <div className="bg-[#111120] border border-white/10 p-1.5 rounded-full flex gap-1 backdrop-blur-md">
                {['All', 'SEO', 'Full Stack'].map((f) => (
                  <button
                    key={f}
                    onClick={() => setFilter(f as any)}
                    className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${
                      filter === f 
                        ? 'bg-[#00D4FF] text-[#080810]' 
                        : 'text-[#888899] hover:text-[#F0F0F0]'
                    }`}
                  >
                    {f}
                  </button>
                ))}
              </div>
            </div>

            {/* Project Grid */}
            <motion.div 
              layout
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 min-h-[400px]"
            >
              <AnimatePresence mode='popLayout'>
                {filteredProjects.map((project, i) => (
                  <motion.div
                    key={project.slug}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.4 }}
                    whileHover={{ y: -6, scale: 1.02 }}
                    className="group bg-[#111120] border border-white/5 rounded-[10px] overflow-hidden flex flex-col h-full hover:border-[#00D4FF]/30 transition-all"
                  >
                    {/* Thumbnail */}
                    <div className="relative aspect-video overflow-hidden">
                      <Image 
                        src={project.thumbnail} 
                        alt={project.name} 
                        fill 
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute top-4 left-4">
                        <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest ${
                          project.niche === 'SEO' ? 'bg-[#7C3AED] text-white' : 'bg-[#00D4FF] text-[#080810]'
                        }`}>
                          {project.niche}
                        </span>
                      </div>
                      <div className="absolute top-4 right-4">
                        <span className="bg-[#080810]/80 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold text-[#888899] uppercase tracking-widest border border-white/5">
                          {project.platform}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-8 flex flex-col flex-grow">
                      <h3 className="text-xl font-bold font-syne mb-2 text-[#F0F0F0] group-hover:text-[#00D4FF] transition-colors line-clamp-1">
                        {project.name}
                      </h3>
                      <p className="text-[#888899] text-sm leading-relaxed mb-6 flex-grow line-clamp-3">
                        {project.shortDescription}
                      </p>

                      {/* Tech Tags */}
                      <div className="flex flex-wrap gap-2 mb-8">
                        {project.techStack.slice(0, 4).map((tech) => (
                          <span key={tech} className="text-[10px] font-bold text-[#888899] uppercase tracking-tighter bg-white/5 px-2 py-1 rounded border border-white/5">
                            {tech}
                          </span>
                        ))}
                      </div>

                      {project.niche === 'SEO' && (
                        <div className="mb-6 text-[#00D4FF] text-xs font-bold uppercase tracking-widest flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-[#00D4FF] animate-pulse" />
                          +210% Organic Impressions
                        </div>
                      )}

                      <Link 
                        href={`/projects/${project.slug}`}
                        className="w-full py-4 border border-white/10 group-hover:border-[#00D4FF] group-hover:bg-[#00D4FF]/5 text-center text-xs font-bold uppercase tracking-widest transition-all flex items-center justify-center gap-2"
                      >
                        View Details
                        <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>

            {/* Bottom CTA */}
            <div className="mt-24 pt-24 border-t border-white/5 flex flex-col items-center text-center">
              <h2 className="font-syne text-3xl md:text-4xl font-bold text-[#F0F0F0] mb-6">Interested in working together?</h2>
              <p className="text-[#888899] mb-10 max-w-xl">
                I'm currently accepting new projects and full-time opportunities. 
                Let's discuss how my SEO and development skills can help your business grow.
              </p>
              <Link 
                href="/contact"
                className="bg-[#00D4FF] text-[#080810] font-bold px-10 py-5 rounded-md hover:bg-[#22DFFF] active:scale-[0.98] transition-all duration-200 shadow-[0_0_20px_rgba(0,212,255,0.25)] flex items-center gap-3"
              >
                Let's Work Together <ArrowRight size={20} />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
