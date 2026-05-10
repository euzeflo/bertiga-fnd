// src/sections/CTA.jsx
import { motion } from 'framer-motion'
import { BsWhatsapp } from 'react-icons/bs'
import { SiShopee } from 'react-icons/si'
import { buildWhatsAppUrl, buildShopeeUrl } from '../utils/whatsapp'

export default function CTA() {
  return (
    <section
      style={{
        background: 'var(--cream)',
        padding: '5rem 0',
      }}
    >
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          style={{
            background: 'var(--beige)',
            borderRadius: 'var(--radius-xl)',
            padding: 'clamp(2.5rem, 5vw, 5rem)',
            textAlign: 'center',
            position: 'relative',
            overflow: 'hidden',
            border: '1px solid var(--sand)',
          }}
        >
          {/* Decorative */}
          <div style={{
            position: 'absolute', top: '-30%', right: '-10%',
            width: '45%', aspectRatio: '1',
            borderRadius: '50%',
            background: 'radial-gradient(circle, var(--accent-light) 0%, transparent 65%)',
            opacity: 0.6, pointerEvents: 'none',
          }} />
          <div style={{
            position: 'absolute', bottom: '-30%', left: '-8%',
            width: '35%', aspectRatio: '1',
            borderRadius: '50%',
            background: 'radial-gradient(circle, var(--sand) 0%, transparent 65%)',
            pointerEvents: 'none',
          }} />

          <div style={{ position: 'relative', zIndex: 1 }}>
            <span className="section-label">Mulai Sekarang</span>
            <h2 style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2rem, 4.5vw, 3.5rem)',
              color: 'var(--ink)',
              lineHeight: 1.15,
              marginBottom: '1rem',
            }}>
              Good food starts<br />
              <em style={{ color: 'var(--accent)', fontStyle: 'italic' }}>with one click.</em>
            </h2>
            <p style={{
              fontSize: '1rem',
              color: 'var(--muted)',
              maxWidth: '480px',
              margin: '0 auto 2.25rem',
              lineHeight: 1.8,
            }}>
              Jangan tunda lagi — pesan sekarang dan rasakan perbedaan rasa homemade berkualitas premium yang bikin ketagihan.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <motion.a
                href={buildWhatsAppUrl()}
                target="_blank"
                rel="noreferrer"
                className="btn-primary btn-whatsapp"
                style={{ fontSize: '0.9rem', padding: '0.85rem 2rem' }}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <BsWhatsapp size={18} />
                WhatsApp Order
              </motion.a>
              <motion.a
                href={buildShopeeUrl()}
                target="_blank"
                rel="noreferrer"
                className="btn-outline"
                style={{ fontSize: '0.9rem', padding: '0.85rem 2rem' }}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <SiShopee size={18} />
                Shopee Store
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
