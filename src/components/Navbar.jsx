// src/components/Navbar.jsx
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useNavbarScroll, useScrollSpy } from '../hooks/useScrollSpy'

const NAV_LINKS = [
  { href: '#home',         label: 'Home' },
  { href: '#about',        label: 'About' },
  { href: '#catalog',      label: 'Catalog' },
  { href: '#featured',     label: 'Featured' },
  { href: '#testimonials', label: 'Testimonials' },
  { href: '#contact',      label: 'Contact' },
]

const IDS = ['home', 'about', 'catalog', 'featured', 'testimonials', 'contact']

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const scrolled = useNavbarScroll(40)
  const activeId = useScrollSpy(IDS)

  const scrollTo = (e, href) => {
    e.preventDefault()
    setOpen(false)
    const target = document.querySelector(href)
    if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <nav className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#home" onClick={(e) => scrollTo(e, '#home')} className="flex flex-col leading-none no-underline">
            <span style={{ fontFamily: 'var(--font-display)', fontSize: '1.35rem', color: 'var(--ink)', fontWeight: 600, letterSpacing: '-0.01em' }}>
              bertiga<span style={{ color: 'var(--accent)' }}>.</span>FnD
            </span>
            <span style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--muted)', fontFamily: 'var(--font-body)' }}>
              Simple · Fresh · Premium
            </span>
          </a>

          {/* Desktop Nav */}
          <ul className="hidden md:flex items-center gap-8 list-none">
            {NAV_LINKS.map(({ href, label }) => {
              const id = href.replace('#', '')
              const isActive = activeId === id
              return (
                <li key={href}>
                  <a
                    href={href}
                    onClick={(e) => scrollTo(e, href)}
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.82rem',
                      fontWeight: 500,
                      letterSpacing: '0.04em',
                      color: isActive ? 'var(--ink)' : 'var(--muted)',
                      textDecoration: 'none',
                      transition: 'color 0.2s',
                      position: 'relative',
                      paddingBottom: '3px',
                    }}
                    className="nav-link"
                  >
                    {label}
                    {isActive && (
                      <motion.span
                        layoutId="nav-underline"
                        style={{
                          position: 'absolute',
                          bottom: 0, left: 0, right: 0,
                          height: '1.5px',
                          background: 'var(--accent)',
                          borderRadius: '99px',
                        }}
                      />
                    )}
                  </a>
                </li>
              )
            })}
          </ul>

          {/* CTA Desktop */}
          <a
            href="https://wa.me/6281234567890"
            target="_blank"
            rel="noreferrer"
            className="btn-primary hidden md:inline-flex"
            style={{ fontSize: '0.8rem', padding: '0.55rem 1.3rem' }}
          >
            Order Sekarang
          </a>

          {/* Hamburger */}
          <button
            className={`md:hidden flex flex-col justify-center items-center gap-1.5 w-10 h-10 bg-transparent border-none cursor-pointer ${open ? 'hamburger-open' : ''}`}
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            <span className="hamburger-line" />
            <span className="hamburger-line" />
            <span className="hamburger-line" />
          </button>
        </nav>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.28, ease: 'easeInOut' }}
            style={{
              background: 'rgba(250,247,242,0.98)',
              backdropFilter: 'blur(20px)',
              borderTop: '1px solid var(--sand)',
              overflow: 'hidden',
            }}
          >
            <div className="container py-4">
              <ul className="list-none flex flex-col gap-1">
                {NAV_LINKS.map(({ href, label }, i) => (
                  <motion.li
                    key={href}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <a
                      href={href}
                      onClick={(e) => scrollTo(e, href)}
                      style={{
                        display: 'block',
                        padding: '0.75rem 0',
                        fontFamily: 'var(--font-body)',
                        fontSize: '0.95rem',
                        fontWeight: 500,
                        color: activeId === href.replace('#', '') ? 'var(--ink)' : 'var(--muted)',
                        textDecoration: 'none',
                        borderBottom: '1px solid var(--beige)',
                      }}
                    >
                      {label}
                    </a>
                  </motion.li>
                ))}
                <li className="mt-3">
                  <a
                    href="https://wa.me/6281234567890"
                    target="_blank"
                    rel="noreferrer"
                    className="btn-primary"
                    style={{ width: '100%', justifyContent: 'center' }}
                  >
                    Order Sekarang
                  </a>
                </li>
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
