// src/components/ProductCard.jsx
import { motion } from 'framer-motion'
import { BsWhatsapp as WA } from 'react-icons/bs'
import { SiShopee } from 'react-icons/si'
import { LuSnowflake } from 'react-icons/lu'
import { buildWhatsAppUrl, buildShopeeUrl } from '../utils/whatsapp'

export default function ProductCard({ product, index = 0 }) {
  return (
    <motion.div
      className="product-card"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.45, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="product-card-img" style={{ position: 'relative' }}>
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          decoding="async"
        />
        {/* Badges container */}
        {product.badges && product.badges.length > 0 && (
          <div style={{ position: 'absolute', top: '0.75rem', left: '0.75rem', display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
            {product.badges.map(badge => (
              <span key={badge} style={{
                background: badge === 'Frozen' ? '#3B82F6' : 'rgba(255, 255, 255, 0.9)',
                color: badge === 'Frozen' ? '#FFFFFF' : 'var(--charcoal)',
                padding: '0.25rem 0.65rem',
                borderRadius: '4px',
                fontSize: '0.65rem',
                fontWeight: 600,
                letterSpacing: '0.05em',
                textTransform: 'uppercase',
                boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.25rem',
                backdropFilter: 'blur(4px)'
              }}>
                {badge === 'Frozen' && <LuSnowflake size={10} />}
                {badge}
              </span>
            ))}
          </div>
        )}
      </div>
      <div style={{ padding: '1.25rem 1.3rem 1.4rem' }}>
        <p style={{ fontSize: '0.68rem', fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: '0.35rem' }}>
          {product.category.toUpperCase()}
        </p>
        <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.05rem', color: 'var(--ink)', marginBottom: '0.4rem', lineHeight: 1.3 }}>
          {product.name}
        </h3>
        <p style={{ fontSize: '0.82rem', color: 'var(--muted)', lineHeight: 1.65, marginBottom: '0.85rem', minHeight: '2.8rem' }}>
          {product.description}
        </p>
        <p style={{ fontFamily: 'var(--font-display)', fontSize: '1.1rem', color: 'var(--ink)', marginBottom: '1rem', fontWeight: 500 }}>
          {product.price}
        </p>
        <div className="flex gap-2">
          <a
            href={buildWhatsAppUrl(product)}
            target="_blank"
            rel="noreferrer"
            className="btn-primary btn-whatsapp flex-1 justify-center"
            style={{ fontSize: '0.75rem', padding: '0.55rem 0.75rem' }}
          >
            <WA size={14} />
            WhatsApp
          </a>
          <a
            href={buildShopeeUrl()}
            target="_blank"
            rel="noreferrer"
            className="btn-primary btn-shopee flex-1 justify-center"
            style={{ fontSize: '0.75rem', padding: '0.55rem 0.75rem' }}
          >
            <SiShopee size={14} />
            Shopee
          </a>
        </div>
      </div>
    </motion.div>
  )
}
