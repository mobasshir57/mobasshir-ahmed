'use client'

import { motion } from 'motion/react'
import Link from 'next/link'
import { Mail, Phone, MessageSquare, Send, ShieldCheck } from 'lucide-react'

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-surface/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Left: Branding & Info */}
          <div className="lg:col-span-5 space-y-12">
            <div className="space-y-6">
              <span className="text-accent font-bold font-syne tracking-[0.2em] uppercase text-sm">Contact</span>
              <h2 className="text-5xl md:text-6xl font-extrabold font-syne leading-none tracking-tighter">
                Let's build <br /><span className="text-accent">something</span> great.
              </h2>
              <p className="text-text-muted text-lg max-w-md leading-relaxed">
                Have a complex problem that needs a precise digital solution?
                I'm currently available for selective freelance partnerships and full-time roles.
              </p>
              <Link 
                href="/contact"
                className="inline-flex items-center gap-2 border border-accent text-accent font-bold px-6 py-3 rounded-md hover:bg-accent/10 transition-all active:scale-[0.98]"
              >
                Get In Touch <span className="text-xl">→</span>
              </Link>
            </div>

            <div className="space-y-6">
              {/* Contact Cards */}
              <a
                href="mailto:mobasshir646@gmail.com"
                className="flex items-center gap-6 group glass-card p-6 rounded-sm hover:border-accent transition-colors"
              >
                <div className="w-12 h-12 bg-accent/10 flex items-center justify-center rounded-sm text-accent group-hover:bg-accent group-hover:text-background transition-colors duration-500">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-[10px] text-text-muted uppercase tracking-widest font-bold mb-1">Email Me</p>
                  <p className="text-lg font-bold font-syne">mobasshir646@gmail.com</p>
                </div>
              </a>

              <a
                href="tel:+8801964693447"
                className="flex items-center gap-6 group glass-card p-6 rounded-sm hover:border-accent transition-colors"
              >
                <div className="w-12 h-12 bg-accent/10 flex items-center justify-center rounded-sm text-accent group-hover:bg-accent group-hover:text-background transition-colors duration-500">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-[10px] text-text-muted uppercase tracking-widest font-bold mb-1">Call Me</p>
                  <p className="text-lg font-bold font-syne">+88 01964-693447</p>
                </div>
              </a>

              <a
                href="https://wa.me/8801964693447"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-6 group glass-card p-6 rounded-sm hover:border-accent transition-colors"
              >
                <div className="w-12 h-12 bg-accent/10 flex items-center justify-center rounded-sm text-accent group-hover:bg-accent group-hover:text-background transition-colors duration-500">
                  <MessageSquare size={24} />
                </div>
                <div>
                  <p className="text-[10px] text-text-muted uppercase tracking-widest font-bold mb-1">WhatsApp</p>
                  <p className="text-lg font-bold font-syne">+88 01964-693447</p>
                </div>
              </a>
            </div>
          </div>

          {/* Right: Form */}
          <div className="lg:col-span-7">
            <div className="glass-card p-8 md:p-12 rounded-sm relative overflow-hidden">
              {/* Subtle Glow */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 blur-[100px] pointer-events-none" />

              <form 
                className="space-y-8 relative z-10"
                onSubmit={(e) => {
                  e.preventDefault()

                  // Track the conversion event using OpenAI Pixel
                  if (typeof window !== 'undefined' && window.oaiq) {
                    window.oaiq("measure", "lead_created", {
                      type: "customer_action"
                    }, {
                      event_id: `lead_home_${Date.now()}`
                    });
                    window.oaiq("measure", "appointment_scheduled", {
                      type: "customer_action"
                    });
                  }

                  // Temporary success alert for the un-wired form
                  alert("Message submitted successfully!");
                }}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="flex flex-col gap-2">
                    <label className="text-[13px] text-white font-bold uppercase tracking-widest">Full Name</label>
                    <input
                      type="text"
                      placeholder="Enter Your Name"
                      className="bg-transparent border-b border-border py-3 text-white focus:outline-none focus:border-accent transition-colors"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-[13px] text-white font-bold uppercase tracking-widest">Email Address</label>
                    <input
                      type="email"
                      placeholder="Enter Your Email"
                      className="bg-transparent border-b border-border py-3 text-white focus:outline-none focus:border-accent transition-colors"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-[13px] text-white font-bold uppercase tracking-widest">Subject</label>
                  <input
                    type="text"
                    placeholder="Project Inquiry"
                    className="bg-transparent border-b border-border py-3 text-white focus:outline-none focus:border-accent transition-colors"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-[13px] text-white font-bold uppercase tracking-widest">Message</label>
                  <textarea
                    rows={4}
                    placeholder="How can I help you?"
                    className="bg-transparent border-b border-border py-3 text-white focus:outline-none focus:border-accent transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-5 bg-accent text-background font-bold font-syne uppercase tracking-widest text-xs flex items-center justify-center gap-3 hover:shadow-glow transition-all active:scale-[0.98]"
                >
                  Send Message
                  <Send size={16} />
                </button>
              </form>

              <div className="mt-8 flex items-center gap-3 text-text-muted text-xs">
                <ShieldCheck size={16} className="text-accent" />
                <p>Your information is secure and will only be used for direct communication.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
