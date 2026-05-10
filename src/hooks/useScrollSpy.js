// src/hooks/useScrollSpy.js
import { useState, useEffect } from 'react'

export function useScrollSpy(ids, offset = 80) {
  const [activeId, setActiveId] = useState('')

  useEffect(() => {
      const handleScroll = () => {
        // Check if we are at the bottom of the page
        if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 50) {
          setActiveId(ids[ids.length - 1])
          return
        }

        let current = ''
        for (const id of ids) {
          const el = document.getElementById(id)
          if (el) {
            const rect = el.getBoundingClientRect()
            if (rect.top <= offset + 20) current = id
          }
        }
        setActiveId(current)
      }
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [ids, offset])

  return activeId
}

export function useNavbarScroll(threshold = 40) {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > threshold)
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [threshold])

  return scrolled
}

export function useBackToTop(threshold = 300) {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > threshold)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [threshold])

  return visible
}
