'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

export default function OpenAIPixelTracker() {
  const pathname = usePathname()

  useEffect(() => {
    if (typeof window === 'undefined' || !window.oaiq) return

    // Helper to get a human-readable page name
    const getPageName = (path: string) => {
      if (path === '/') return 'Home Page'
      if (path === '/about') return 'About Page'
      if (path === '/contact') return 'Contact Page'
      if (path === '/experience') return 'Experience Page'
      if (path === '/skills') return 'Skills Page'
      if (path === '/projects') return 'Projects List Page'
      if (path.startsWith('/projects/')) {
        const slug = path.split('/').pop() || ''
        const name = slug
          .split('-')
          .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
          .join(' ')
        return `${name} Project Page`
      }
      return 'Other Page'
    }

    const pageName = getPageName(pathname)

    // 1. Track standard page_viewed with page-specific metadata
    window.oaiq("measure", "page_viewed", {
      type: "contents",
      contents: [
        {
          id: pathname,
          name: pageName,
          content_type: "page"
        }
      ]
    });

    // 2. Track contents_viewed specifically on project detail pages
    if (pathname.startsWith('/projects/') && pathname !== '/projects') {
      const projectSlug = pathname.split('/').pop() || ''
      const projectName = projectSlug
        .split('-')
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ')

      window.oaiq("measure", "contents_viewed", {
        type: "contents",
        contents: [
          {
            id: projectSlug,
            name: projectName,
            content_type: "product"
          }
        ]
      });
    }
  }, [pathname])

  return null
}
