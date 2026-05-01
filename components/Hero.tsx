'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { TextPlugin } from 'gsap/TextPlugin'
import { motion } from 'motion/react'
import { ArrowDown } from 'lucide-react'
import { FaGithub, FaLinkedin, FaTwitter, FaFacebook } from 'react-icons/fa'
import Link from 'next/link'
import Image from 'next/image'

gsap.registerPlugin(TextPlugin)

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null)
  const nameRef = useRef<HTMLHeadingElement>(null)
  const roleRef = useRef<HTMLSpanElement>(null)
  const cursorRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

      // Entrance animation
      tl.from('.hero-greeting', { y: 30, opacity: 0, duration: 0.8 })
        .from('.hero-name', { y: 40, opacity: 0, duration: 0.8 }, '-=0.5')
        .from('.hero-role-wrapper', { y: 20, opacity: 0, duration: 0.6 }, '-=0.4')
        .from('.hero-tagline', { y: 20, opacity: 0, duration: 0.6 }, '-=0.4')
        .from('.hero-btns', { y: 20, opacity: 0, duration: 0.6 }, '-=0.4')
        .from('.hero-socials', { y: 20, opacity: 0, duration: 0.6 }, '-=0.4')
        .from('.hero-photo', { scale: 0.8, opacity: 0, duration: 1, ease: 'back.out(1.7)' }, '-=1')

      // Typewriter effect
      const roles = ['SEO Specialist', 'MERN Stack Developer', 'Digital Marketer']
      let roleTimeline = gsap.timeline({ repeat: -1 })

      roles.forEach((role) => {
        roleTimeline
          .to(roleRef.current, { duration: 1, text: role, ease: 'none' })
          .to({}, { duration: 2 }) // Pause
          .to(roleRef.current, { duration: 0.5, text: '', ease: 'none' })
      })

      // Cursor blink
      gsap.to(cursorRef.current, { opacity: 0, duration: 0.5, repeat: -1, yoyo: true })

      // Photo floating
      gsap.to('.hero-photo-container', {
        y: -15,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut'
      })
    }, heroRef)

    return () => ctx.revert()
  }, [])

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-dot-grid" ref={heroRef}>
      {/* Background Parallax Element */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        {/* Left Content */}
        <div className="lg:col-span-7 space-y-8">
          <div className="space-y-4">
            <p className="hero-greeting text-accent2 font-bold font-syne tracking-[0.2em] uppercase text-md">
              Hello, I'm
            </p>
            <h1 className="hero-name text-5xl md:text-7xl font-extrabold font-syne leading-[1.1] tracking-tighter">
              Md Mobasshir <br />
              <span className="text-white/40">Ahmed</span>
            </h1>
            <div className="hero-role-wrapper flex items-center gap-2 text-2xl md:text-3xl font-syne font-semibold text-accent">
              <span ref={roleRef}></span>
              <span ref={cursorRef} className="w-[3px] h-[30px] bg-accent inline-block" />
            </div>
          </div>

          <p className="hero-tagline text-text-muted text-lg md:text-xl max-w-2xl leading-relaxed">
            I rank websites on Google's first page and build fast, scalable web applications —
            combining the power of SEO and full-stack development to create digital products that
            are both discoverable and exceptional.
          </p>

          <div className="hero-btns flex flex-wrap gap-4">
            <a
              href="/resume.pdf"
              download
              className="px-8 py-4 bg-accent text-background font-bold rounded-sm hover:shadow-glow transition-all active:scale-95 flex items-center gap-2"
            >
              Download Resume
            </a>
            <Link
              href="/projects"
              className="px-8 py-4 border border-accent text-accent font-bold rounded-sm hover:bg-accent/10 transition-all active:scale-95"
            >
              View Projects
            </Link>
          </div>

          <div className="hero-socials flex items-center gap-6 pt-4">
            {[
              { icon: FaGithub, href: 'https://github.com/mobasshir57' },
              { icon: FaLinkedin, href: 'https://linkedin.com/in/mobasshir-ahmed' },
              { icon: FaTwitter, href: '#' },
              { icon: FaFacebook, href: '#' },
            ].map((social, i) => (
              <a
                key={i}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-muted hover:text-accent transition-colors hover:scale-110"
              >
                <social.icon size={24} />
              </a>
            ))}
          </div>
        </div>

        {/* Right Photo */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end">
          <div className="hero-photo relative">
            <div className="hero-photo-container relative w-[300px] h-[300px] md:w-[450px] md:h-[450px]">
              {/* Glow background */}
              <div className="absolute inset-0 bg-accent/20 rounded-full blur-[60px]" />

              {/* Photo Border */}
              <div className="absolute inset-0 border-2 border-accent/30 rounded-full" />

              {/* Real border ring */}
              <div className="absolute -inset-4 border border-accent/20 rounded-full animate-[spin_20s_linear_infinite]" />
              <div className="absolute -inset-8 border border-accent/10 rounded-full animate-[spin_30s_linear_infinite_reverse]" />

              {/* Profile Image */}
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-surface shadow-glow">
                <Image
                  src="/mobasshir-black.png"
                  alt="Md Mobasshir Ahmed"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50">
        <span className="text-[10px] uppercase tracking-widest font-bold">Scroll</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ArrowDown size={20} className="text-accent" />
        </motion.div>
      </div>
    </section>
  )
}
