'use client'

import { motion } from 'motion/react'
import { GraduationCap, Award, Globe2 } from 'lucide-react'

const certifications = [
  'Digital Marketing Master Course',
  'SEO – A Complete Guideline',
  'Google Analytics (GA4) & CRO Certification'
]

const languages = [
  { name: 'English', level: 'Professional' },
  { name: 'Bangla', level: 'Native' }
]

export default function Education() {
  return (
    <section id="education" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="section-heading text-4xl md:text-5xl font-bold font-syne mb-16">
          Education & Certifications
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Education Timeline */}
          <div className="space-y-12">
            <h4 className="text-xl font-syne font-bold flex items-center gap-3">
              <GraduationCap className="text-accent" />
              Academic Path
            </h4>

            <div className="relative pl-8 border-l-2 border-accent/30 space-y-12">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="absolute -left-[41px] top-0 w-4 h-4 rounded-full bg-accent border-4 border-background shadow-glow" />
                <div className="space-y-2">
                  <span className="text-xs font-bold uppercase tracking-widest text-accent">2022 — 2024</span>
                  <h3 className="text-2xl font-bold font-syne">Higher Secondary Certificate (HSC)</h3>
                  <p className="text-text-muted">Govt. Shaheed Suhrawardy College, Dhaka</p>
                  <p className="text-sm font-medium text-text-muted/60">Stream: Science (Completed)</p>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Certifications & Languages */}
          <div className="space-y-12">
            <div className="space-y-8">
              <h4 className="text-xl font-syne font-bold flex items-center gap-3">
                <Award className="text-accent" />
                Certifications
              </h4>
              
              <div className="flex flex-wrap gap-4">
                {certifications.map((cert, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="px-6 py-3 glass-card rounded-full border border-accent/20 hover:border-accent/50 transition-colors cursor-default"
                  >
                    <span className="text-sm font-bold text-accent">{cert}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="space-y-8">
              <h4 className="text-xl font-syne font-bold flex items-center gap-3">
                <Globe2 className="text-accent" />
                Languages
              </h4>
              
              <div className="flex flex-wrap gap-4">
                {languages.map((lang, i) => (
                  <div key={i} className="flex flex-col gap-1">
                    <span className="text-sm font-bold text-text">{lang.name}</span>
                    <span className="text-xs text-text-muted uppercase tracking-tighter">{lang.level}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
