// src/sections/Featured.jsx
import { motion } from 'framer-motion'
import { BsWhatsapp } from 'react-icons/bs'
import { SiShopee } from 'react-icons/si'
import { LuStar } from 'react-icons/lu'
import { products } from '../data/products'
import { buildWhatsAppUrl, buildShopeeUrl } from '../utils/whatsapp'

const featured = products.filter((p) => p.featured)

export default function Featured() {
  return (
    <section
      id="featured"
      style={{ background: 'var(--ink)', padding: '6rem 0', position: 'relative', overflow: 'hidden' }}
    >
      {/* Decorative bg */}
      <div style={{
        position: 'absolute', top: 0, right: 0,
        width: '40%', height: '100%',
        background: 'linear-gradient(135deg, rgba(201,169,110,0.08) 0%, transparent 60%)',
        pointerEvents: 'none',
      }} />

      <div className="container">
        {/* Header */}
        <div className="text-center mb-14">
          <motion.span
            className="section-label"
            style={{ color: 'var(--accent)' }}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            🔥 Best Seller
          </motion.span>
          <motion.h2
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              color: 'var(--cream)',
              marginBottom: '0.75rem',
            }}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.07 }}
          >
            Produk Unggulan Kami
          </motion.h2>
          <motion.p
            style={{ fontSize: '1rem', color: 'var(--warm-gray)', maxWidth: '480px', margin: '0 auto', lineHeight: 1.8 }}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.13 }}
          >
            Pilihan terlaris yang sudah dicintai ratusan pelanggan setia kami.
          </motion.p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map((product, i) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -6, transition: { duration: 0.3 } }}
              style={{
                background: 'rgba(255,255,255,0.06)',
                border: '1px solid rgba(255,255,255,0.09)',
                borderRadius: 'var(--radius-lg)',
                overflow: 'hidden',
                backdropFilter: 'blur(8px)',
                position: 'relative',
              }}
            >
              {/* Image */}
              <div style={{ aspectRatio: '16/10', overflow: 'hidden', position: 'relative' }}>
                <img
                  src={product.image}
                  alt={product.name}
                  loading="lazy"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }}
                  onMouseEnter={e => e.target.style.transform = 'scale(1.05)'}
                  onMouseLeave={e => e.target.style.transform = 'scale(1)'}
                />
                {product.bestSeller && (
                  <div style={{ position: 'absolute', top: '0.85rem', left: '0.85rem' }}>
                    <span className="badge-bestseller">
                      <LuStar size={11} />
                      Best Seller
                    </span>
                  </div>
                )}
              </div>

              {/* Content */}
              <div style={{ padding: '1.35rem 1.4rem 1.5rem' }}>
                <p style={{ fontSize: '0.68rem', fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: '0.4rem' }}>
                  {product.category}
                </p>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.15rem', color: 'var(--cream)', marginBottom: '0.4rem', lineHeight: 1.25 }}>
                  {product.name}
                </h3>
                <p style={{ fontSize: '0.82rem', color: 'var(--warm-gray)', lineHeight: 1.65, marginBottom: '0.75rem' }}>
                  {product.description}
                </p>
                <p style={{ fontFamily: 'var(--font-display)', fontSize: '1.15rem', color: 'var(--accent)', marginBottom: '1.1rem' }}>
                  {product.price}
                </p>
                <div className="flex gap-2">
                  <a
                    href={buildWhatsAppUrl(product)}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-primary btn-whatsapp flex-1 justify-center"
                    style={{ fontSize: '0.75rem', padding: '0.6rem 0.75rem' }}
                  >
                    <BsWhatsapp size={14} />
                    Order
                  </a>
                  <a
                    href={buildShopeeUrl()}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-primary btn-shopee flex-1 justify-center"
                    style={{ fontSize: '0.75rem', padding: '0.6rem 0.75rem' }}
                  >
                    <SiShopee size={14} />
                    Shopee
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
