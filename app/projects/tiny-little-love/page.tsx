'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { motion } from 'motion/react'
import { ArrowLeft, ExternalLink, CheckCircle2, Calendar, Tag, Laptop } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Link from 'next/link'
import Image from 'next/image'

export default function TinyLittleLovePage() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const ctx = gsap.context(() => {
      // Hero Entrance
      gsap.from('.project-badge', { y: 16, opacity: 0, duration: 0.45, ease: 'power2.out' })
      gsap.from('.project-heading', { y: 50, opacity: 0, duration: 0.65, delay: 0.1, ease: 'power3.out' })
      gsap.from('.project-meta', { y: 28, opacity: 0, duration: 0.55, delay: 0.2, ease: 'power2.out' })

      // Metric Counters
      const counters = document.querySelectorAll('.metric-number')
      counters.forEach((counter) => {
        const target = parseInt(counter.getAttribute('data-target') || '0')
        gsap.fromTo(counter,
          { textContent: '0' },
          {
            textContent: target,
            duration: 2,
            ease: 'power2.out',
            snap: { textContent: 1 },
            scrollTrigger: { trigger: counter, start: 'top 85%' }
          }
        )
      })
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <div className="flex flex-col min-h-screen bg-[#080810] text-[#F0F0F0] font-dm-sans" ref={containerRef}>
      <Navbar />

      <main className="flex-grow pt-24 pb-24">
        <div className="max-w-7xl mx-auto px-6">
          {/* Back link */}
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-[#888899] hover:text-[#00D4FF] transition-colors mb-12 font-bold text-sm uppercase tracking-widest group"
          >
            <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
            Back to Projects
          </Link>

          {/* Hero Section */}
          <section className="mb-24 relative overflow-hidden bg-dot-grid p-12 rounded-[20px] border border-white/5">
            <div className="relative z-10">
              <span className="project-badge inline-block px-4 py-1 bg-[#7C3AED] text-white text-[10px] font-bold uppercase tracking-widest rounded-full mb-6">
                SEO
              </span>
              <h1 className="project-heading font-syne text-4xl md:text-6xl font-bold text-[#F0F0F0] mb-6 leading-tight">
                Tiny Little Love — <br />Shopify SEO
              </h1>
              <div className="project-meta flex flex-wrap gap-6 text-[#888899] text-sm font-medium">
                <div className="flex items-center gap-2">
                  <Calendar size={16} className="text-[#00D4FF]" />
                  <span>Sep 2025 – Dec 2025</span>
                </div>
                <div className="flex items-center gap-2">
                  <Laptop size={16} className="text-[#00D4FF]" />
                  <span>Shopify</span>
                </div>
                <div className="flex items-center gap-2">
                  <Tag size={16} className="text-[#00D4FF]" />
                  <span>E-commerce SEO</span>
                </div>
              </div>
            </div>
          </section>

          {/* Two-Column Body */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            {/* Left Column */}
            <div className="lg:col-span-8 space-y-16">
              <section>
                <h2 className="text-2xl font-bold font-syne text-[#F0F0F0] mb-6 flex items-center gap-3">
                  <span className="w-8 h-[2px] bg-[#00D4FF]" />
                  Overview
                </h2>
                <p className="text-[#888899] text-lg leading-relaxed">
                  Led end-to-end SEO strategy for Tiny Little Love, a Shopify e-commerce store in the kidswear and sustainable products niche. Transformed a low-visibility store into a fully optimized, search-friendly platform through comprehensive technical audits, keyword mapping, and on-page optimization.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold font-syne text-[#F0F0F0] mb-6 flex items-center gap-3">
                  <span className="w-8 h-[2px] bg-[#00D4FF]" />
                  Tech & Tools Used
                </h2>
                <div className="flex flex-wrap gap-3">
                  {['Shopify', 'Ahrefs', 'SEMrush', 'Google Search Console', 'GA4', 'Schema Markup'].map((tool) => (
                    <div key={tool} className="flex items-center gap-2 px-4 py-2 bg-[#111120] border border-white/5 rounded-full text-sm font-bold text-[#888899]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#00D4FF]" />
                      {tool}
                    </div>
                  ))}
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold font-syne text-[#F0F0F0] mb-6 flex items-center gap-3">
                  <span className="w-8 h-[2px] bg-[#00D4FF]" />
                  The Challenges
                </h2>
                <div className="p-8 bg-[#111120] border-l-4 border-[#7C3AED] rounded-r-[10px]">
                  <p className="text-[#888899] leading-relaxed">
                    Managing duplicate content across similar product variants was the biggest technical hurdle. Canonical tag strategy and proper URL structuring resolved indexing conflicts and significantly improved crawl efficiency across the entire store.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold font-syne text-[#F0F0F0] mb-6 flex items-center gap-3">
                  <span className="w-8 h-[2px] bg-[#00D4FF]" />
                  Future Plans
                </h2>
                <ul className="space-y-4">
                  {[
                    'Implement structured data for product reviews',
                    'Expand blog content strategy for long-tail keywords',
                    'Optimize Core Web Vitals for further ranking improvement'
                  ].map((plan, i) => (
                    <li key={i} className="flex gap-4 text-[#888899]">
                      <CheckCircle2 size={20} className="text-[#00D4FF] flex-shrink-0" />
                      <span>{plan}</span>
                    </li>
                  ))}
                </ul>
              </section>
            </div>

            {/* Right Column: Metrics */}
            <div className="lg:col-span-4 space-y-6">
              <h2 className="text-xl font-bold font-syne text-[#F0F0F0] mb-8">Key Performance Metrics</h2>
              {[
                { val: 210, suffix: '%', label: 'Organic Impressions Increase' },
                { val: 3, suffix: ' Months', label: 'To reach Top 10 Rankings' },
                { val: 30, suffix: '+', label: 'Technical Issues Resolved' },
                { val: 20, suffix: '', label: 'Keyword Position Improvement' },
              ].map((metric, i) => (
                <div key={i} className="bg-[#111120] border border-white/5 p-8 rounded-[10px] group hover:border-[#00D4FF]/30 transition-all">
                  <div className="text-[#00D4FF] text-4xl font-bold font-syne mb-2">
                    <span className="metric-number" data-target={metric.val}>0</span>
                    {metric.suffix}
                  </div>
                  <p className="text-[#888899] text-xs uppercase tracking-widest font-bold">{metric.label}</p>
                </div>
              ))}

              <div className="pt-12">
                <a
                  href="https://www.tinylittlelove.be/"
                  className="w-full bg-[#00D4FF] text-[#080810] font-bold px-8 py-5 rounded-md hover:bg-[#22DFFF] active:scale-[0.98] transition-all duration-200 shadow-[0_0_20px_rgba(0,212,255,0.25)] flex items-center justify-center gap-3"
                >
                  View Live Project <ExternalLink size={18} />
                </a>
                <p className="text-center text-[#888899] text-[10px] mt-4 uppercase tracking-[0.2em] font-bold">SEO Project — No GitHub Repository</p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
