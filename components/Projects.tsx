'use client'

import { motion } from 'motion/react'
import Image from 'next/image'
import Link from 'next/link'
import { ExternalLink, ArrowRight } from 'lucide-react'
import { projects } from '@/lib/projects'

export default function Projects() {
  return (
    <section id="projects" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-16">
          <div>
            <h2 className="section-heading text-4xl md:text-5xl font-bold font-syne mb-0">
              Featured Projects
            </h2>
            <p className="text-text-muted mt-6 max-w-xl">
              A selection of my best work in SEO transformation and full-stack development. 
              Each project solved a specific problem and delivered measurable results.
            </p>
          </div>
          <Link 
            href="/projects" 
            className="flex items-center gap-2 text-accent font-bold group"
          >
            All Projects 
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -10 }}
              className="group glass-card rounded-sm overflow-hidden border border-border flex flex-col h-full"
            >
              {/* Thumbnail */}
              <div className="relative aspect-video overflow-hidden">
                <Image 
                  src={project.thumbnail} 
                  alt={project.name} 
                  fill 
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest ${
                    project.niche === 'SEO' ? 'bg-accent2 text-white' : 'bg-accent text-background'
                  }`}>
                    {project.niche}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-xl font-bold font-syne mb-3 text-white group-hover:text-accent transition-colors">
                  {project.name}
                </h3>
                <p className="text-text-muted text-sm leading-relaxed mb-6 flex-grow">
                  {project.shortDescription}
                </p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.techStack.slice(0, 3).map((tech) => (
                    <span key={tech} className="text-[10px] font-medium text-text-muted/80 uppercase tracking-tighter">
                      {tech}
                    </span>
                  ))}
                  {project.techStack.length > 3 && (
                    <span className="text-[10px] font-medium text-text-muted/80 uppercase tracking-tighter">
                      +{project.techStack.length - 3} More
                    </span>
                  )}
                </div>

                <Link 
                  href={`/projects/${project.slug}`}
                  className="w-full py-4 border border-border group-hover:border-accent group-hover:bg-accent/5 text-center text-xs font-bold uppercase tracking-widest transition-all flex items-center justify-center gap-2"
                >
                  View Details
                  <ArrowRight size={14} />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 flex justify-center">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 border border-accent text-accent font-bold px-8 py-4 rounded-md hover:bg-accent/10 transition-all active:scale-[0.98]"
          >
            Browse All Projects <span className="text-xl">→</span>
          </Link>
        </div>
      </div>
    </section>
  )
}
