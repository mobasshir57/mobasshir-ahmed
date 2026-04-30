'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { motion } from 'motion/react'
import Link from 'next/link'

const stats = [
  { label: 'Years of Experience', value: 1, suffix: '+' },
  { label: 'Projects Completed', value: 20, suffix: '+' },
  { label: 'Companies Worked', value: 3, suffix: '' },
  { label: 'Websites Ranked Page 1', value: 20, suffix: '+' },
]

export default function About() {
  const sectionRef = useRef<HTMLElement>(null)
  const statsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const ctx = gsap.context(() => {
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
              toggleActions: 'play none none none'
            },
            snap: { textContent: 1 },
          }
        )
      })
    }, statsRef)

    return () => ctx.revert()
  }, [])

  return (
    <section id="about" className="py-24 relative overflow-hidden" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="section-heading text-4xl md:text-5xl font-bold font-syne mb-16">
          About Me
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* Left: Stats */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-6" ref={statsRef}>
            {stats.map((stat, i) => (
              <div
                key={i}
                className="glass-card p-8 rounded-sm text-center group hover:border-accent/40 transition-colors"
              >
                <div className="text-4xl md:text-5xl font-bold font-syne text-accent mb-2">
                  <span className="stat-number" data-target={stat.value}>0</span>
                  {stat.suffix}
                </div>
                <p className="text-text-muted text-xs md:text-sm font-medium uppercase tracking-wider">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          {/* Right: Bio */}
          <div className="lg:col-span-7 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <p className="text-lg md:text-xl leading-relaxed text-text">
                Hi, I'm Mobasshir — an <span className="text-accent font-semibold">SEO Specialist</span>, <span className="text-accent/50 font-semibold">Digital Marketer</span> and <span className="text-accent2 font-semibold">MERN Stack Developer</span> based in Dhaka, Bangladesh.
              </p>
              <p className="text-text-muted leading-relaxed">
                My journey into the digital world started with SEO — learning how search engines work,
                how content gets ranked, and how technical decisions can make or break a website's visibility.
                That curiosity led me deeper into the web, and I soon started learning HTML, CSS, and JavaScript.
              </p>
              <p className="text-text-muted leading-relaxed">
                Today, I'm building full-stack applications with MongoDB, Express, React, and Node.js,
                while keeping my SEO roots firmly intact. Every project I build, I think about performance,
                structure, and discoverability from day one.
              </p>
              <p className="text-text-muted leading-relaxed">
                I love working on projects that have a real business impact — whether that's ranking a local
                service business on Google's first page or building a full-stack web app that solves a genuine
                problem. I enjoy technical SEO audits, MERN stack development, and the challenge of making
                websites both fast and findable.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="pt-4"
            >
              <h4 className="text-lg font-syne font-bold mb-4 flex items-center gap-2">
                <span className="w-8 h-[2px] bg-accent" />
                Interests & Hobbies
              </h4>
              <p className="text-text-muted leading-relaxed italic">
                Outside of screens, I enjoy following cricket and football, exploring new technology trends,
                and reading about digital marketing strategies. I'm also passionate about continuous learning
                — I'm always working toward a new certification or building a new side project.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="pt-8"
            >
              <Link
                href="/about"
                className="inline-flex items-center gap-2 border border-accent text-accent font-bold px-6 py-3 rounded-md hover:bg-accent/10 transition-all active:scale-[0.98]"
              >
                Read Full Story <span className="text-xl">→</span>
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
