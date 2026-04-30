'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { motion } from 'motion/react'
import { FaGithub, FaLinkedin, FaTwitter, FaFacebook, FaGraduationCap, FaCheckCircle, FaChartBar, FaCode, FaChartLine } from 'react-icons/fa'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function AboutPage() {
  const heroRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    // Hero Entrance Animation
    const ctx = gsap.context(() => {
      gsap.from('.page-label', { y: 16, opacity: 0, duration: 0.45, ease: 'power2.out' })
      gsap.from('.page-heading', { y: 50, opacity: 0, duration: 0.65, delay: 0.1, ease: 'power3.out' })
      gsap.from('.page-sub', { y: 28, opacity: 0, duration: 0.55, delay: 0.2, ease: 'power2.out' })

      // Stats Count Up
      const counters = document.querySelectorAll('.stat-number')
      counters.forEach((counter) => {
        const target = parseInt(counter.getAttribute('data-target') || '0')
        gsap.fromTo(
          counter,
          { textContent: '0' },
          {
            textContent: target,
            duration: 2,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: counter,
              start: 'top 85%',
            },
            snap: { textContent: 1 },
          }
        )
      })
    }, heroRef)

    return () => ctx.revert()
  }, [])

  return (
    <div className="flex flex-col min-h-screen bg-[#080810] text-[#F0F0F0] font-dm-sans">
      <Navbar />

      <main className="flex-grow pt-20">
        {/* SECTION 1: Page Hero */}
        <section 
          ref={heroRef}
          className="relative min-h-[320px] flex items-center py-20 bg-dot-grid"
        >
          <div className="max-w-7xl mx-auto px-6 w-full">
            <div className="flex items-center gap-3 mb-3 page-label">
              <span className="w-7 h-px bg-[#00D4FF]" />
              <span className="text-[11px] font-bold tracking-[0.18em] uppercase text-[#00D4FF]">
                WHO I AM
              </span>
            </div>
            <h1 className="page-heading font-syne text-5xl md:text-7xl font-bold text-[#F0F0F0] mb-4">
              About Me
            </h1>
            <p className="page-sub text-[#888899] text-lg md:text-xl max-w-2xl">
              SEO Specialist · MERN Stack Developer · Dhaka, Bangladesh
              </p>
          </div>
        </section>

        {/* SECTION 2: Introduction — Two Column Layout */}
        <section className="py-24 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            {/* Left Column: Photo & Socials */}
            <div className="lg:col-span-4 flex flex-col items-center lg:items-start">
              <div className="relative w-[280px] h-[340px] rounded-2xl overflow-hidden border-2 border-[#00D4FF]/30 shadow-[0_0_30px_rgba(0,212,255,0.15)] mb-8">
                <Image
                  src="/profile-photo.jpg"
                  alt="Md Mobasshir Ahmed"
                  fill
                  className="object-cover"
                />
              </div>
              
              <div className="flex items-center gap-2 mb-6 bg-[#111120] border border-white/5 px-4 py-2 rounded-full">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-xs font-bold uppercase tracking-wider text-[#888899]">Open to work</span>
              </div>

              <div className="flex gap-4">
                {[
                  { icon: FaGithub, href: 'https://github.com/mobasshir57' },
                  { icon: FaLinkedin, href: 'https://linkedin.com/in/mobasshir-ahmed' },
                  { icon: FaTwitter, href: '#' },
                  { icon: FaFacebook, href: '#' },
                ].map((social, i) => (
                  <a
                    key={i}
                    href={social.href}
                    className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-[#888899] hover:text-[#00D4FF] hover:border-[#00D4FF]/50 transition-all"
                  >
                    <social.icon size={18} />
                  </a>
                ))}
              </div>
            </div>

            {/* Right Column: Text Blocks */}
            <div className="lg:col-span-8 space-y-12">
              {[
                {
                  title: "Who I am",
                  content: "Hi, I'm Mobasshir — an SEO Specialist and MERN Stack Developer based in Dhaka, Bangladesh. I've spent the last year helping businesses grow their organic presence while building my skills in full-stack web development with the MERN stack. I love being at the intersection of marketing and engineering — where technical decisions directly impact business outcomes."
                },
                {
                  title: "My Journey",
                  content: "My journey into the digital world started with SEO — learning how search engines work, how content gets ranked, and how technical decisions can make or break a website's visibility. That curiosity led me deeper into the web, and I soon started learning HTML, CSS, and JavaScript. Today, I'm building full-stack applications with MongoDB, Express, React, and Node.js, while keeping my SEO roots firmly intact. Every project I build, I think about performance, structure, and discoverability from day one."
                },
                {
                  title: "Work I love",
                  content: "I love working on projects that have a real business impact — whether that's ranking a local service business on Google's first page or building a full-stack web app that solves a genuine problem. I enjoy technical SEO audits, MERN stack development, and the challenge of making websites both fast and findable."
                },
                {
                  title: "Outside of work",
                  content: "Outside of screens, I enjoy following cricket and football, exploring new technology trends, and reading about digital marketing strategies. I'm always working toward a new certification or building a new side project."
                }
              ].map((block, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  <h3 className="text-[#F0F0F0] text-xl font-bold font-syne mb-3">{block.title}</h3>
                  <p className="text-[#888899] leading-relaxed text-lg">
                    {block.content}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 3: Stats + Education + Certifications */}
        <section className="py-24 bg-[#111120]/50 border-y border-white/5">
          <div className="max-w-7xl mx-auto px-6">
            {/* Part A: Stats Row */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-24">
              {[
                { val: 1, suffix: '+', label: 'Years Experience' },
                { val: 20, suffix: '+', label: 'Projects Completed' },
                { val: 3, suffix: '', label: 'Companies' },
                { val: 20, suffix: '+', label: 'Websites on Page 1' },
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

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* Part B: Education */}
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <span className="w-7 h-px bg-[#00D4FF]" />
                  <span className="text-[11px] font-bold tracking-[0.18em] uppercase text-[#00D4FF]">
                    EDUCATION
                  </span>
                </div>
                <h2 className="font-syne text-3xl md:text-4xl font-bold text-[#F0F0F0] mb-8">
                  Academic Background
                </h2>

                <div className="relative pl-8 border-l border-[#00D4FF]/30 py-4">
                  <div className="absolute left-[-9px] top-4 w-4 h-4 rounded-full bg-[#00D4FF] border-4 border-[#080810]" />
                  <div className="flex items-center gap-3 text-[#00D4FF] mb-2">
                    <FaGraduationCap size={20} />
                    <span className="text-sm font-bold uppercase tracking-widest">2022 – 2024</span>
                  </div>
                  <h3 className="text-xl font-bold text-[#F0F0F0] mb-1">Higher Secondary Certificate (HSC) — Science</h3>
                  <p className="text-[#888899] mb-4">Govt. Shaheed Suhrawardy College, Dhaka</p>
                  <span className="inline-block px-3 py-1 bg-green-500/10 text-green-500 text-[10px] font-bold uppercase tracking-widest rounded-full">
                    Completed ✅
                  </span>
                </div>
              </div>

              {/* Part C: Certifications */}
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <span className="w-7 h-px bg-[#00D4FF]" />
                  <span className="text-[11px] font-bold tracking-[0.18em] uppercase text-[#00D4FF]">
                    CERTIFICATIONS
                  </span>
                </div>
                <h2 className="font-syne text-3xl md:text-4xl font-bold text-[#F0F0F0] mb-8">
                  Specialized Training
                </h2>

                <div className="space-y-4">
                  {[
                    { name: 'Digital Marketing Master Course', tag: 'Marketing' },
                    { name: 'SEO – A Complete Guideline', tag: 'SEO' },
                    { name: 'Google Analytics (GA4) & CRO Certification', tag: 'Analytics' },
                  ].map((cert, i) => (
                    <div key={i} className="bg-[#111120] border-l-4 border-[#00D4FF] border-y border-r border-white/5 p-5 flex justify-between items-center group hover:bg-[#111120]/80 transition-all">
                      <span className="font-bold text-[#F0F0F0] group-hover:text-[#00D4FF] transition-colors">{cert.name}</span>
                      <span className="text-[10px] font-bold uppercase tracking-tighter text-[#888899] bg-white/5 px-2 py-1 rounded">
                        {cert.tag}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 4: Personal Values + Languages + CTAs */}
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
              {[
                { 
                  icon: FaChartBar, 
                  title: "Data-Driven", 
                  body: "Every decision I make is backed by data — whether keyword research, technical site audits, or development architecture choices." 
                },
                { 
                  icon: FaCode, 
                  title: "Full-Stack Mindset", 
                  body: "I build with SEO baked in from day one. Clean code, fast performance, and discoverability aren't afterthoughts — they're requirements." 
                },
                { 
                  icon: FaChartLine, 
                  title: "Growth Focused", 
                  body: "I'm obsessed with measurable outcomes — organic traffic growth, ranking improvements, and delivering results that matter to real businesses." 
                }
              ].map((value, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -4, scale: 1.02 }}
                  className="bg-[#111120] border border-white/5 p-8 rounded-[10px] group transition-all hover:border-[#00D4FF]/30"
                >
                  <div className="w-12 h-12 bg-[#00D4FF]/10 text-[#00D4FF] rounded-lg flex items-center justify-center mb-6 group-hover:bg-[#00D4FF] group-hover:text-[#080810] transition-all">
                    <value.icon size={24} />
                  </div>
                  <h3 className="text-[#F0F0F0] text-xl font-bold font-syne mb-4">{value.title}</h3>
                  <p className="text-[#888899] text-sm leading-relaxed">{value.body}</p>
                </motion.div>
              ))}
            </div>

            <div className="flex flex-col md:flex-row justify-between items-center gap-12 pt-12 border-t border-white/5">
              <div className="flex gap-4">
                <div className="px-4 py-2 bg-[#00D4FF]/10 border border-[#00D4FF]/30 rounded-full text-[#00D4FF] text-xs font-bold uppercase tracking-widest">
                  English — Professional
                </div>
                <div className="px-4 py-2 bg-[#7C3AED]/10 border border-[#7C3AED]/30 rounded-full text-[#7C3AED] text-xs font-bold uppercase tracking-widest">
                  Bangla — Native
                </div>
              </div>

              <div className="flex gap-4">
                <a 
                  href="/resume.pdf" 
                  download
                  className="bg-[#00D4FF] text-[#080810] font-bold px-8 py-4 rounded-md hover:bg-[#22DFFF] active:scale-[0.98] transition-all duration-200 shadow-[0_0_20px_rgba(0,212,255,0.25)]"
                >
                  Download Resume
                </a>
                <Link 
                  href="/skills"
                  className="border border-[#00D4FF] text-[#00D4FF] font-bold px-8 py-4 rounded-md hover:bg-[rgba(0,212,255,0.08)] active:scale-[0.98] transition-all duration-200"
                >
                  View My Skills →
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
