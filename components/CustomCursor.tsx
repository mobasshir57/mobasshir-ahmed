'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null)
  const followerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const cursor = cursorRef.current
    const follower = followerRef.current

    if (!cursor || !follower) return

    const onMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e
      
      gsap.to(cursor, {
        x: clientX,
        y: clientY,
        duration: 0.1,
      })
      
      gsap.to(follower, {
        x: clientX,
        y: clientY,
        duration: 0.3,
      })
    }

    const onMouseDown = () => {
      gsap.to(follower, {
        scale: 0.8,
        duration: 0.2,
      })
    }

    const onMouseUp = () => {
      gsap.to(follower, {
        scale: 1,
        duration: 0.2,
      })
    }

    window.addEventListener('mousemove', onMouseMove)
    window.addEventListener('mousedown', onMouseDown)
    window.addEventListener('mouseup', onMouseUp)

    return () => {
      window.removeEventListener('mousemove', onMouseMove)
      window.removeEventListener('mousedown', onMouseDown)
      window.removeEventListener('mouseup', onMouseUp)
    }
  }, [])

  return (
    <>
      <div ref={cursorRef} className="custom-cursor" />
      <div ref={followerRef} className="custom-cursor-follower" />
    </>
  )
}
