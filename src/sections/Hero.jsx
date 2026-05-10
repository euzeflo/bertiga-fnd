// src/sections/Hero.jsx
import { motion } from 'framer-motion'
import { BsWhatsapp } from 'react-icons/bs'
import { SiShopee } from 'react-icons/si'
import { buildWhatsAppUrl, buildShopeeUrl } from '../utils/whatsapp'

const HERO_IMAGE = '/images/hero_nachos_1778308510594.png'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 32 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
})

export default function Hero() {
  return (
    <section
      id="home"
      style={{
        minHeight: '100svh',
        background: 'var(--cream)',
        display: 'flex',
        alignItems: 'center',
        paddingTop: '80px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background decorative circles */}
      <div style={{
        position: 'absolute', top: '8%', right: '-5%',
        width: 'clamp(280px, 45vw, 600px)',
        aspectRatio: '1',
        borderRadius: '50%',
        background: 'radial-gradient(circle, var(--beige) 0%, transparent 70%)',
        pointerEvents: 'none',
        zIndex: 0,
      }} />
      <div style={{
        position: 'absolute', bottom: '-10%', left: '-8%',
        width: 'clamp(200px, 30vw, 400px)',
        aspectRatio: '1',
        borderRadius: '50%',
        background: 'radial-gradient(circle, var(--accent-light) 0%, transparent 70%)',
        pointerEvents: 'none',
        zIndex: 0,
        opacity: 0.5,
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left — Copy */}
          <div>
            <motion.p
              {...fadeUp(0.1)}
              className="section-label"
            >
              ✦ Premium Supplier · Authentic · Reliable
            </motion.p>

            <motion.h1
              {...fadeUp(0.2)}
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(2.8rem, 6vw, 5rem)',
                lineHeight: 1.08,
                color: 'var(--ink)',
                letterSpacing: '-0.02em',
                marginBottom: '1.25rem',
              }}
            >
              Authentic Ingredients,{' '}
              <em style={{ color: 'var(--accent)', fontStyle: 'italic' }}>
                Premium Quality.
              </em>
            </motion.h1>

            <motion.p
              {...fadeUp(0.35)}
              style={{
                fontSize: '1.05rem',
                color: 'var(--muted)',
                lineHeight: 1.8,
                maxWidth: '440px',
                marginBottom: '2.25rem',
              }}
            >
              Supplier terpercaya untuk Tortilla Chips, Taco Shells, dan bahan makanan Meksiko berkualitas tinggi. Solusi bahan baku terbaik untuk bisnis kuliner, cafe, hingga kebutuhan dapur rumah Anda.
            </motion.p>

            <motion.div
              {...fadeUp(0.48)}
              className="flex flex-wrap gap-3"
            >
              <a
                href={buildWhatsAppUrl()}
                target="_blank"
                rel="noreferrer"
                className="btn-primary btn-whatsapp"
              >
                <BsWhatsapp size={16} />
                Order via WhatsApp
              </a>
              <a
                href={buildShopeeUrl()}
                target="_blank"
                rel="noreferrer"
                className="btn-outline"
              >
                <SiShopee size={16} />
                Visit Shopee
              </a>
            </motion.div>

            {/* Stats */}
            <motion.div
              {...fadeUp(0.6)}
              className="flex gap-8 mt-10 pt-8"
              style={{ marginTop: '1rem' }}
            >
              {[
                { num: '500+', label: 'Happy Customers' },
                { num: '15+', label: 'Menu Pilihan' },
                { num: '4.9★', label: 'Rating Rata-rata' },
              ].map(({ num, label }) => (
                <div key={label}>
                  <p style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', color: 'var(--ink)', lineHeight: 1 }}>{num}</p>
                  <p style={{ fontSize: '0.75rem', color: 'var(--muted)', marginTop: '0.25rem', letterSpacing: '0.04em' }}>{label}</p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right — Image */}
          <motion.div
            initial={{ opacity: 0, x: 40, scale: 0.96 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            style={{ position: 'relative' }}
          >
            <div style={{
              borderRadius: 'var(--radius-xl)',
              overflow: 'hidden',
              aspectRatio: '4/5',
              boxShadow: 'var(--shadow-hover)',
            }}>
              <img
                src={HERO_IMAGE}
                alt="bertiga.FnD premium food"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>

            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.7 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.75, duration: 0.5, ease: 'backOut' }}
              style={{
                position: 'absolute',
                bottom: '1.5rem',
                left: '-1.5rem',
                background: 'var(--white)',
                borderRadius: 'var(--radius-md)',
                padding: '0.85rem 1.25rem',
                boxShadow: 'var(--shadow-card)',
                minWidth: '150px',
              }}
            >
              <p style={{ fontSize: '0.7rem', color: 'var(--muted)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '0.2rem' }}>
                Rating Shopee
              </p>
              <div className="flex items-center gap-1.5">
                <span style={{ fontFamily: 'var(--font-display)', fontSize: '1.25rem', color: 'var(--ink)' }}>4.9</span>
                <span style={{ color: 'var(--accent)', fontSize: '1rem' }}>★★★★★</span>
              </div>
            </motion.div>

            {/* Top tag */}
            <motion.div
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.85, duration: 0.5, ease: 'backOut' }}
              style={{
                position: 'absolute',
                top: '1.5rem',
                right: '-1rem',
                background: 'var(--accent)',
                borderRadius: 'var(--radius-md)',
                padding: '0.6rem 1rem',
                boxShadow: 'var(--shadow-card)',
              }}
            >
              <p style={{ fontSize: '0.72rem', fontWeight: 700, color: 'var(--ink)', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
                🔥 Best Seller
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
