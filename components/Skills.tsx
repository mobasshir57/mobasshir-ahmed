'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import Link from 'next/link'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Search, Code2, Wrench } from 'lucide-react'

const skillCategories = [
  {
    id: 'seo',
    name: 'SEO & Marketing',
    icon: Search,
    skills: [
      { name: 'Keyword Research', percent: 90 },
      { name: 'On-Page SEO', percent: 92 },
      { name: 'Technical SEO', percent: 85 },
      { name: 'Off-Page & Link Building', percent: 82 },
      { name: 'Local SEO', percent: 88 },
      { name: 'E-commerce SEO', percent: 85 },
      { name: 'AEO & GEO', percent: 75 },
      { name: 'Google Search Console', percent: 90 },
      { name: 'Meta Ads', percent: 80 },
      { name: 'Google Ads', percent: 80 },
    ]
  },
  {
    id: 'mern',
    name: 'MERN Stack',
    icon: Code2,
    skills: [
      { name: 'HTML5 & CSS3', percent: 85 },
      { name: 'JavaScript ES6+', percent: 78 },
      { name: 'React.js', percent: 75 },
      { name: 'Next.js', percent: 70 },
      { name: 'Node.js & Express', percent: 72 },
      { name: 'MongoDB', percent: 68 },
      { name: 'REST API', percent: 72 },
      { name: 'Tailwind CSS', percent: 75 },
    ]
  },
  {
    id: 'tools',
    name: 'Tools & Analytics',
    icon: Wrench,
    skills: [
      { name: 'Ahrefs & SEMrush', percent: 88 },
      { name: 'Google Analytics (GA4)', percent: 87 },
      { name: 'WordPress & Shopify', percent: 82 },
      { name: 'Git & GitHub', percent: 78 },
      { name: 'AI Tools (ChatGPT/Gemini)', percent: 85 },
      { name: 'Figma', percent: 65 },
      { name: 'Conversion Rate Opt.', percent: 78 },
    ]
  }
]

export default function Skills() {
  const [activeTab, setActiveTab] = useState('seo')
  const skillBarsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const ctx = gsap.context(() => {
      const bars = document.querySelectorAll('.skill-progress-fill')
      bars.forEach((bar) => {
        const target = bar.getAttribute('data-percent')
        gsap.to(bar, {
          width: `${target}%`,
          duration: 1.5,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: bar,
            start: 'top 95%',
            toggleActions: 'play none none none'
          }
        })
      })
    }, skillBarsRef)

    return () => ctx.revert()
  }, [activeTab])

  return (
    <section id="skills" className="py-24 bg-surface/30">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="section-heading text-4xl md:text-5xl font-bold font-syne mb-16">
          Skills & Expertise
        </h2>

        {/* Tab Buttons */}
        <div className="flex flex-wrap gap-4 mb-12">
          {skillCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-sm font-bold transition-all ${activeTab === cat.id
                  ? 'bg-accent text-background shadow-glow'
                  : 'bg-surface text-text-muted hover:text-white border border-border'
                }`}
            >
              <cat.icon size={20} />
              <span className="hidden sm:inline">{cat.name}</span>
              <span className="sm:hidden">{cat.id.toUpperCase()}</span>
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-8" ref={skillBarsRef}>
          <AnimatePresence mode="wait">
            {skillCategories.find(c => c.id === activeTab)?.skills.map((skill, i) => (
              <motion.div
                key={`${activeTab}-${skill.name}`}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 10 }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
                className="space-y-2"
              >
                <div className="flex justify-between items-center text-sm font-medium">
                  <span className="text-text">{skill.name}</span>
                  <span className="text-accent">{skill.percent}%</span>
                </div>
                <div className="h-[6px] w-full bg-surface border border-border rounded-full overflow-hidden">
                  <div
                    className="skill-progress-fill h-full bg-gradient-to-r from-accent to-accent2 rounded-full"
                    data-percent={skill.percent}
                    style={{ width: '0%' }}
                  />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        <div className="mt-16 flex justify-center">
          <Link
            href="/skills"
            className="inline-flex items-center gap-2 border border-accent text-accent font-bold px-8 py-4 rounded-md hover:bg-accent/10 transition-all active:scale-[0.98]"
          >
            See All Skills <span className="text-xl">→</span>
          </Link>
        </div>
      </div>
    </section>
  )
}
