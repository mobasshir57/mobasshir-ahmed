'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { motion } from 'motion/react'
import { Search, Code2, BarChart3, Laptop, Globe, Cpu, Layers } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Link from 'next/link'

const skillsData = [
  {
    category: "SEO & Digital Marketing",
    description: "Proven results across Shopify, WordPress, local, and SaaS niches.",
    skills: [
      { name: "On-Page SEO", percent: 92 },
      { name: "Keyword Research & Analysis", percent: 90 },
      { name: "Google Search Console (GSC)", percent: 90 },
      { name: "Local SEO", percent: 88 },
      { name: "Ahrefs", percent: 88 },
      { name: "Google Analytics (GA4)", percent: 87 },
      { name: "E-commerce SEO", percent: 85 },
      { name: "Technical SEO", percent: 85 },
      { name: "Content Strategy & Optimization", percent: 85 },
      { name: "Off-Page SEO & Link Building", percent: 82 },
      { name: "AEO (Answer Engine Optimization)", percent: 75 },
      { name: "GEO (Generative Engine Optimization)", percent: 72 },
    ]
  },
  {
    category: "MERN Stack Development",
    description: "Building performant, SEO-friendly web apps from frontend to backend.",
    skills: [
      { name: "HTML5", percent: 85 },
      { name: "CSS3", percent: 82 },
      { name: "JavaScript (ES6+)", percent: 78 },
      { name: "Tailwind CSS", percent: 75 },
      { name: "React.js", percent: 75 },
      { name: "REST API Development", percent: 72 },
      { name: "Node.js", percent: 72 },
      { name: "Next.js", percent: 70 },
      { name: "Express.js", percent: 70 },
      { name: "MongoDB", percent: 68 },
    ]
  },
  {
    category: "Tools & Analytics",
    description: "The toolkit I use daily to research, build, measure, and optimize.",
    skills: [
      { name: "AI Tools (ChatGPT / Gemini)", percent: 85 },
      { name: "SEMrush", percent: 85 },
      { name: "WordPress", percent: 82 },
      { name: "Shopify", percent: 80 },
      { name: "Git & GitHub", percent: 78 },
      { name: "CRO (Conversion Rate Optimization)", percent: 78 },
      { name: "Wix", percent: 75 },
      { name: "Figma", percent: 65 },
    ]
  }
]

export default function SkillsPage() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const ctx = gsap.context(() => {
      // Hero Entrance
      gsap.from('.page-label', { y: 16, opacity: 0, duration: 0.45, ease: 'power2.out' })
      gsap.from('.page-heading', { y: 50, opacity: 0, duration: 0.65, delay: 0.1, ease: 'power3.out' })
      gsap.from('.page-sub', { y: 28, opacity: 0, duration: 0.55, delay: 0.2, ease: 'power2.out' })

      // Progress Bars Animation
      gsap.to('.skill-bar', {
        width: (i, el) => el.getAttribute('data-percent') + '%',
        duration: 1.2,
        ease: 'power2.out',
        stagger: 0.06,
        scrollTrigger: {
          trigger: '.skills-grid',
          start: 'top 75%',
        }
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
                WHAT I BRING
              </span>
            </div>
            <h1 className="page-heading font-syne text-5xl md:text-7xl font-bold text-[#F0F0F0] mb-4">
              Skills & Expertise
            </h1>
            <p className="page-sub text-[#888899] text-lg md:text-xl max-w-2xl mx-auto md:mx-0">
              A unique combination of SEO mastery and full-stack development capability.
            </p>
          </div>
        </section>

        {/* SECTION 2: Overview Stats + Category Intro */}
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
              {[
                { val: "3", label: "Skill Categories" },
                { val: "30+", label: "Tools & Technologies" },
                { val: "1+", label: "Year in Practice" },
              ].map((stat, i) => (
                <div key={i} className="bg-[#111120] border border-white/5 p-8 rounded-[10px] text-center hover:border-[#00D4FF]/30 transition-all">
                  <div className="text-[#00D4FF] text-4xl md:text-5xl font-bold font-syne mb-2">{stat.val}</div>
                  <p className="text-[#888899] text-sm uppercase tracking-widest font-medium">{stat.label}</p>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {[
                { 
                  icon: Search, 
                  title: "SEO & Digital Marketing", 
                  desc: "Proven SEO expertise across e-commerce, local, and service-based industries — from technical audits to content strategy and link building." 
                },
                { 
                  icon: Code2, 
                  title: "MERN Stack Development", 
                  desc: "Building fast, scalable web applications with the modern JavaScript ecosystem — from REST APIs to interactive React and Next.js UIs." 
                },
                { 
                  icon: BarChart3, 
                  title: "Tools & Analytics", 
                  desc: "Industry-standard platforms for research, analytics, AI-assisted workflows, and CMS management — from Ahrefs to GA4." 
                }
              ].map((cat, i) => (
                <div key={i} className="bg-[#111120] border border-white/5 p-8 rounded-[10px] group hover:border-[#00D4FF]/30 transition-all">
                  <div className="w-12 h-12 bg-[#00D4FF]/10 text-[#00D4FF] rounded-lg flex items-center justify-center mb-6 group-hover:bg-[#00D4FF] group-hover:text-[#080810] transition-all">
                    <cat.icon size={24} />
                  </div>
                  <h3 className="text-[#F0F0F0] text-xl font-bold font-syne mb-4">{cat.title}</h3>
                  <p className="text-[#888899] text-sm leading-relaxed">{cat.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 3: Skills — Three Categories with Animated Progress Bars */}
        <section className="py-24 bg-[#111120]/50 border-y border-white/5 skills-grid">
          <div className="max-w-7xl mx-auto px-6">
            <div className="space-y-24">
              {skillsData.map((cat, i) => (
                <div key={i}>
                  <div className="mb-12">
                    <h2 className="font-syne text-3xl md:text-4xl font-bold text-[#F0F0F0] mb-4">{cat.category}</h2>
                    <p className="text-[#888899] text-lg">{cat.description}</p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-8">
                    {cat.skills.map((skill, j) => (
                      <div key={j} className="space-y-2">
                        <div className="flex justify-between items-center text-sm font-medium">
                          <span className="text-[#F0F0F0]">{skill.name}</span>
                          <span className="text-[#00D4FF]">{skill.percent}%</span>
                        </div>
                        <div className="h-[6px] w-full bg-[#080810] rounded-full overflow-hidden border border-white/5">
                          <div 
                            className="skill-bar h-full bg-gradient-to-r from-[#00D4FF] to-[#7C3AED]"
                            data-percent={skill.percent}
                            style={{ width: '0%' }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 4: Currently Learning + CTA */}
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex items-center gap-3 mb-3">
              <span className="w-7 h-px bg-[#00D4FF]" />
              <span className="text-[11px] font-bold tracking-[0.18em] uppercase text-[#00D4FF]">
                ALWAYS GROWING
              </span>
            </div>
            <h2 className="font-syne text-3xl md:text-4xl font-bold text-[#F0F0F0] mb-4">Currently Learning</h2>
            <p className="text-[#888899] mb-12">Continuously expanding my stack to stay ahead.</p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
              {[
                { title: "TypeScript", desc: "Adding type safety to my JavaScript and React projects." },
                { title: "Docker", desc: "Containerizing full-stack apps for consistent deployments." },
                { title: "Advanced Next.js (SSR/ISR)", desc: "Deep-diving into server-side rendering and incremental static regeneration." }
              ].map((item, i) => (
                <div key={i} className="bg-[#111120] border-l-4 border-[#7C3AED] p-8 rounded-r-[10px] border-y border-r border-white/5 hover:bg-[#111120]/80 transition-all">
                  <h3 className="text-[#F0F0F0] text-xl font-bold font-syne mb-3">{item.title}</h3>
                  <p className="text-[#888899] text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="flex justify-center gap-4">
              <Link 
                href="/experience"
                className="bg-[#00D4FF] text-[#080810] font-bold px-8 py-4 rounded-md hover:bg-[#22DFFF] active:scale-[0.98] transition-all duration-200 shadow-[0_0_20px_rgba(0,212,255,0.25)]"
              >
                See My Experience →
              </Link>
              <Link 
                href="/projects"
                className="border border-[#00D4FF] text-[#00D4FF] font-bold px-8 py-4 rounded-md hover:bg-[rgba(0,212,255,0.08)] active:scale-[0.98] transition-all duration-200"
              >
                View Projects →
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
