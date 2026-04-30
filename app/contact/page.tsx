'use client'

import { useState, useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { motion, AnimatePresence } from 'motion/react'
import { Mail, Phone, MessageSquare, Send, ShieldCheck, CheckCircle2, Plus, Minus, Shield } from 'lucide-react'
import { FaGithub, FaLinkedin, FaTwitter, FaFacebook } from 'react-icons/fa'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const faqs = [
  {
    question: "What services do you offer?",
    answer: "I specialize in SEO strategy and execution (on-page, technical, off-page, local, and e-commerce SEO) as well as full-stack MERN web development. I'm available for project-based freelance work and full-time roles."
  },
  {
    question: "How quickly can you start?",
    answer: "I'm currently available and can typically start within 1–2 weeks of agreement. For urgent projects, feel free to reach out via WhatsApp for a faster response."
  },
  {
    question: "Do you work remotely?",
    answer: "Yes — I work fully remotely and have experience collaborating with teams and clients internationally. I'm comfortable with async communication and regular check-ins."
  }
]

export default function ContactPage() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null)
  const [formStatus, setFormStatus] = useState<'idle' | 'success'>('idle')
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulate success
    setFormStatus('success')
  }

  return (
    <div className="flex flex-col min-h-screen bg-[#080810] text-[#F0F0F0] font-dm-sans" ref={containerRef}>
      <Navbar />

      <main className="flex-grow pt-20">
        {/* SECTION 1: Page Hero */}
        <section className="relative min-h-[320px] flex items-center py-20 bg-dot-grid">
          <div className="max-w-7xl mx-auto px-6 w-full text-center">
            <div className="flex items-center justify-center gap-3 mb-3 page-label">
              <span className="w-7 h-px bg-[#00D4FF]" />
              <span className="text-[11px] font-bold tracking-[0.18em] uppercase text-[#00D4FF]">
                GET IN TOUCH
              </span>
            </div>
            <h1 className="page-heading font-syne text-5xl md:text-7xl font-bold text-[#F0F0F0] mb-4">
              Let's build something great.
            </h1>
            <p className="page-sub text-[#888899] text-lg md:text-xl max-w-2xl mx-auto">
              Available for freelance projects, full-time roles, and SEO consulting.
            </p>
          </div>
        </section>

        {/* SECTION 2: Two-Column Contact Layout */}
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
              {/* Left Column: Info & Details */}
              <div className="lg:col-span-5 space-y-12">
                {/* Availability */}
                <div className="bg-[#111120] border-l-4 border-green-500 p-6 rounded-r-[10px] flex items-center gap-4 border-y border-r border-white/5">
                  <span className="w-3 h-3 rounded-full bg-green-500 animate-pulse shadow-[0_0_10px_#22c55e]" />
                  <span className="text-sm font-bold uppercase tracking-widest text-[#F0F0F0]">Currently available — responding within 24 hours</span>
                </div>

                {/* Info Cards */}
                <div className="space-y-4">
                  {[
                    { icon: Mail, label: "EMAIL ME", val: "mobasshir646@gmail.com", href: "mailto:mobasshir646@gmail.com" },
                    { icon: Phone, label: "CALL ME", val: "+88 01964-693447", href: "tel:+8801964693447" },
                    { icon: MessageSquare, label: "WHATSAPP", val: "+88 01964-693447", href: "https://wa.me/8801964693447" },
                  ].map((item, i) => (
                    <motion.a
                      key={i}
                      href={item.href}
                      whileHover={{ x: 4 }}
                      className="bg-[#111120] border border-white/5 p-6 rounded-[10px] flex items-center gap-6 group hover:border-[#00D4FF]/30 transition-all"
                    >
                      <div className="w-12 h-12 bg-[#00D4FF]/10 text-[#00D4FF] rounded-lg flex items-center justify-center group-hover:bg-[#00D4FF] group-hover:text-[#080810] transition-all">
                        <item.icon size={24} />
                      </div>
                      <div>
                        <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#888899] mb-1">{item.label}</p>
                        <p className="text-[#F0F0F0] font-syne font-bold text-lg">{item.val}</p>
                      </div>
                    </motion.a>
                  ))}
                </div>

                <div className="w-full h-px bg-white/5" />

                {/* Socials */}
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
                      className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-[#888899] hover:text-[#00D4FF] hover:border-[#00D4FF]/50 transition-all"
                    >
                      <social.icon size={20} />
                    </a>
                  ))}
                </div>

                <div className="w-full h-px bg-white/5" />

                {/* Services Card */}
                <div className="bg-[#111120] border-l-4 border-[#00D4FF] p-8 rounded-r-[10px] border-y border-r border-white/5">
                  <h3 className="text-[#F0F0F0] text-xl font-bold font-syne mb-6">What I can help with</h3>
                  <div className="space-y-4">
                    {[
                      "SEO Audit & Strategy",
                      "On-Page & Technical SEO",
                      "MERN Stack Web Applications",
                      "Next.js Development",
                      "Local & E-commerce SEO"
                    ].map((service, i) => (
                      <div key={i} className="flex items-center gap-3 text-sm text-[#888899]">
                        <CheckCircle2 size={16} className="text-[#00D4FF]" />
                        <span>{service}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column: Form */}
              <div className="lg:col-span-7">
                <AnimatePresence mode="wait">
                  {formStatus === 'idle' ? (
                    <motion.div
                      key="form"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="bg-[#111120] border border-white/10 p-10 md:p-14 rounded-[20px] shadow-2xl relative overflow-hidden"
                    >
                      <div className="absolute top-0 right-0 w-64 h-64 bg-[#00D4FF]/5 blur-[100px] pointer-events-none" />
                      
                      <div className="mb-10">
                        <h2 className="text-[#F0F0F0] text-3xl font-bold font-syne mb-2">Send a message</h2>
                        <p className="text-[#888899]">I typically respond within 24 hours.</p>
                      </div>

                      <form 
                        onSubmit={handleSubmit}
                        action="https://formspree.io/f/[USER_ADDS_FORM_ID]" 
                        method="POST"
                        className="space-y-8"
                      >
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                          <div className="flex flex-col gap-3">
                            <label className="text-xs font-bold uppercase tracking-widest text-[#F0F0F0]">Full Name *</label>
                            <input 
                              type="text" 
                              name="name"
                              required
                              placeholder="John Doe"
                              className="bg-[#080810] border border-white/10 p-4 rounded-lg focus:outline-none focus:border-[#00D4FF] transition-colors"
                            />
                          </div>
                          <div className="flex flex-col gap-3">
                            <label className="text-xs font-bold uppercase tracking-widest text-[#F0F0F0]">Email Address *</label>
                            <input 
                              type="email" 
                              name="email"
                              required
                              placeholder="john@example.com"
                              className="bg-[#080810] border border-white/10 p-4 rounded-lg focus:outline-none focus:border-[#00D4FF] transition-colors"
                            />
                          </div>
                        </div>

                        <div className="flex flex-col gap-3">
                          <label className="text-xs font-bold uppercase tracking-widest text-[#F0F0F0]">Subject</label>
                          <input 
                            type="text" 
                            name="subject"
                            placeholder="SEO Inquiry / Web Project / Full-time Role"
                            className="bg-[#080810] border border-white/10 p-4 rounded-lg focus:outline-none focus:border-[#00D4FF] transition-colors"
                          />
                        </div>

                        <div className="flex flex-col gap-3">
                          <label className="text-xs font-bold uppercase tracking-widest text-[#F0F0F0]">Message *</label>
                          <textarea 
                            name="message"
                            required
                            rows={5}
                            placeholder="Tell me about your project or opportunity..."
                            className="bg-[#080810] border border-white/10 p-4 rounded-lg focus:outline-none focus:border-[#00D4FF] transition-colors resize-none"
                          />
                        </div>

                        <button 
                          type="submit"
                          className="w-full bg-[#00D4FF] text-[#080810] font-bold px-8 py-5 rounded-md hover:bg-[#22DFFF] active:scale-[0.98] transition-all duration-200 shadow-[0_0_20px_rgba(0,212,255,0.25)] flex items-center justify-center gap-3"
                        >
                          Send Message <Send size={18} />
                        </button>
                      </form>

                      <div className="mt-8 flex items-center gap-3 text-[#888899] text-xs">
                        <ShieldCheck size={16} className="text-[#00D4FF]" />
                        <p>Your information is secure and only used for direct communication.</p>
                      </div>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="bg-[#111120] border border-[#00D4FF]/30 p-20 rounded-[20px] text-center flex flex-col items-center justify-center min-h-[500px]"
                    >
                      <div className="w-20 h-20 bg-[#00D4FF]/10 text-[#00D4FF] rounded-full flex items-center justify-center mb-8">
                        <CheckCircle2 size={40} />
                      </div>
                      <h2 className="text-[#F0F0F0] text-3xl font-bold font-syne mb-4">Message sent!</h2>
                      <p className="text-[#888899] max-w-sm">I've received your inquiry and I'll be in touch within 24 hours. Looking forward to connecting!</p>
                      <button 
                        onClick={() => setFormStatus('idle')}
                        className="mt-10 text-[#00D4FF] font-bold underline"
                      >
                        Send another message
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 3: FAQ or Quick Info Row */}
        <section className="py-24 border-t border-white/5 bg-[#111120]/30">
          <div className="max-w-4xl mx-auto px-6">
            <div className="text-center mb-16">
              <div className="flex items-center justify-center gap-3 mb-3">
                <span className="w-7 h-px bg-[#00D4FF]" />
                <span className="text-[11px] font-bold tracking-[0.18em] uppercase text-[#00D4FF]">
                  QUICK ANSWERS
                </span>
              </div>
              <h2 className="font-syne text-3xl md:text-4xl font-bold text-[#F0F0F0]">Common Questions</h2>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <div key={i} className="bg-[#111120] border border-white/5 rounded-xl overflow-hidden transition-all hover:border-[#00D4FF]/20">
                  <button 
                    onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                    className="w-full p-6 flex justify-between items-center text-left"
                  >
                    <span className="font-bold text-[#F0F0F0] pr-8">{faq.question}</span>
                    <div className="flex-shrink-0 w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-[#00D4FF]">
                      {activeFaq === i ? <Minus size={18} /> : <Plus size={18} />}
                    </div>
                  </button>
                  <AnimatePresence>
                    {activeFaq === i && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="px-6 pb-6 text-[#888899] text-sm leading-relaxed border-t border-white/5 pt-4">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
