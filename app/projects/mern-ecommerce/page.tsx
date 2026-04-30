'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { motion } from 'motion/react'
import { ArrowLeft, ExternalLink, CheckCircle2, Calendar, Tag, Laptop, Code2 } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { FaGithub } from 'react-icons/fa'

export default function ShopMERNPage() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const ctx = gsap.context(() => {
      // Hero Entrance
      gsap.from('.project-badge', { y: 16, opacity: 0, duration: 0.45, ease: 'power2.out' })
      gsap.from('.project-heading', { y: 50, opacity: 0, duration: 0.65, delay: 0.1, ease: 'power3.out' })
      gsap.from('.project-meta', { y: 28, opacity: 0, duration: 0.55, delay: 0.2, ease: 'power2.out' })
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
              <span className="project-badge inline-block px-4 py-1 bg-[#00D4FF] text-[#080810] text-[10px] font-bold uppercase tracking-widest rounded-full mb-6">
                Full Stack
              </span>
              <h1 className="project-heading font-syne text-4xl md:text-6xl font-bold text-[#F0F0F0] mb-6 leading-tight">
                ShopMERN — <br />E-commerce Platform
              </h1>
              <div className="project-meta flex flex-wrap gap-6 text-[#888899] text-sm font-medium">
                <div className="flex items-center gap-2">
                  <Laptop size={16} className="text-[#00D4FF]" />
                  <span>Web App</span>
                </div>
                <div className="flex items-center gap-2">
                  <Code2 size={16} className="text-[#00D4FF]" />
                  <span>MERN Stack</span>
                </div>
                <div className="flex items-center gap-2">
                  <Tag size={16} className="text-[#00D4FF]" />
                  <span>Full Stack Development</span>
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
                  ShopMERN is a complete e-commerce platform featuring product listings, cart management, user authentication with JWT, and Stripe payment integration. Built with a React frontend and a Node/Express REST API backend connected to MongoDB.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold font-syne text-[#F0F0F0] mb-6 flex items-center gap-3">
                  <span className="w-8 h-[2px] bg-[#00D4FF]" />
                  Key Features
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    'JWT Authentication',
                    'Product Search & Filter',
                    'Shopping Cart & Checkout',
                    'Stripe Payment Gateway',
                    'Admin Dashboard',
                    'Order Tracking'
                  ].map((feature, i) => (
                    <div key={i} className="flex gap-4 p-5 bg-[#111120] border border-white/5 rounded-lg group hover:border-[#00D4FF]/30 transition-all">
                      <CheckCircle2 size={20} className="text-[#00D4FF] flex-shrink-0" />
                      <span className="text-[#888899] group-hover:text-[#F0F0F0] transition-colors">{feature}</span>
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
                    Implementing real-time cart synchronization across sessions and handling Stripe webhook events securely were the primary challenges. Solved using React Context API for frontend state and backend middleware validation for webhook security.
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
                    'Add a product review system',
                    'Implement wishlist feature',
                    'Email order confirmation via Nodemailer',
                    'Deploy on Vercel (frontend) + Railway (backend)'
                  ].map((plan, i) => (
                    <li key={i} className="flex gap-4 text-[#888899]">
                      <CheckCircle2 size={20} className="text-[#00D4FF] flex-shrink-0" />
                      <span>{plan}</span>
                    </li>
                  ))}
                </ul>
              </section>
            </div>

            {/* Right Column: Tech Stack */}
            <div className="lg:col-span-4 space-y-8">
              <h2 className="text-xl font-bold font-syne text-[#F0F0F0] mb-8">Tech Stack</h2>
              <div className="grid grid-cols-1 gap-4">
                {[
                  { name: 'MongoDB', role: 'Database' },
                  { name: 'Express.js', role: 'Backend Framework' },
                  { name: 'React.js', role: 'Frontend Library' },
                  { name: 'Node.js', role: 'Runtime Environment' },
                  { name: 'JWT Auth', role: 'Security' },
                  { name: 'Tailwind CSS', role: 'Styling' },
                  { name: 'Stripe API', role: 'Payments' }
                ].map((tech, i) => (
                  <div key={i} className="bg-[#111120] border border-white/5 p-5 rounded-[10px] flex justify-between items-center group hover:border-[#00D4FF]/30 transition-all">
                    <span className="font-bold text-[#F0F0F0] group-hover:text-[#00D4FF] transition-colors">{tech.name}</span>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-[#888899]">{tech.role}</span>
                  </div>
                ))}
              </div>
              
              <div className="pt-12 space-y-4">
                <a 
                  href="#" 
                  className="w-full bg-[#00D4FF] text-[#080810] font-bold px-8 py-5 rounded-md hover:bg-[#22DFFF] active:scale-[0.98] transition-all duration-200 shadow-[0_0_20px_rgba(0,212,255,0.25)] flex items-center justify-center gap-3"
                >
                  View Live Project <ExternalLink size={18} />
                </a>
                <a 
                  href="#" 
                  className="w-full border border-white/10 text-[#F0F0F0] font-bold px-8 py-5 rounded-md hover:bg-white/5 active:scale-[0.98] transition-all duration-200 flex items-center justify-center gap-3"
                >
                  GitHub Repository <FaGithub size={18} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
