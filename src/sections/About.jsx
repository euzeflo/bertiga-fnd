// src/sections/About.jsx
import { motion } from 'framer-motion'
import { LuLeaf, LuFlame, LuHeart, LuSparkles } from 'react-icons/lu'

const PILLARS = [
  {
    icon: <LuLeaf size={22} />,
    title: 'Bahan Premium',
    desc: 'Menyediakan bahan baku pilihan dengan standar kualitas tinggi untuk hasil masakan autentik.',
  },
  {
    icon: <LuSparkles size={22} />,
    title: 'Kualitas Terjamin',
    desc: 'Proses produksi yang terkontrol guna memastikan konsistensi rasa dan tekstur di setiap pesanan.',
  },
  {
    icon: <LuHeart size={22} />,
    title: 'Stok Selalu Ready',
    desc: 'Sistem manajemen inventaris yang handal untuk menjamin ketersediaan barang setiap saat.',
  },
  {
    icon: <LuSparkles size={22} />,
    title: 'Layanan Profesional',
    desc: 'Solusi pengiriman cepat dan responsif untuk kebutuhan personal maupun operasional bisnis.',
  },
]

export default function About() {
  return (
    <section
      id="about"
      style={{ background: 'var(--beige)', padding: '6rem 0' }}
    >
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left — Image */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            style={{ position: 'relative' }}
          >
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '0.85rem',
            }}>
              {[
                '/images/product_taco_shell_1778308529683.png',
                '/images/product_tortilla_chips_1778308556041.png',
                '/images/product_kulit_tortilla_1778308577344.png',
                '/images/product_cheese_sauce_1778308594683.png',
              ].map((src, i) => (
                <div
                  key={i}
                  style={{
                    borderRadius: i === 0 ? 'var(--radius-xl) var(--radius-sm) var(--radius-sm) var(--radius-sm)' :
                                  i === 3 ? 'var(--radius-sm) var(--radius-sm) var(--radius-sm) var(--radius-xl)' :
                                  'var(--radius-sm)',
                    overflow: 'hidden',
                    aspectRatio: '1',
                    boxShadow: 'var(--shadow-soft)',
                    marginTop: i % 2 === 1 ? '1.5rem' : '0',
                  }}
                >
                  <img src={src} alt="" loading="lazy" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
              ))}
            </div>
            {/* Floating pill */}
            <div style={{
              position: 'absolute',
              bottom: '-1rem',
              left: '50%',
              transform: 'translateX(-50%)',
              background: 'var(--white)',
              borderRadius: '99px',
              padding: '0.55rem 1.5rem',
              boxShadow: 'var(--shadow-card)',
              whiteSpace: 'nowrap',
            }}>
              <p style={{ fontSize: '0.78rem', color: 'var(--charcoal)', fontWeight: 500 }}>
                📦 &nbsp;Siap Kirim Seluruh Indonesia
              </p>
            </div>
          </motion.div>

          {/* Right — Copy */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="section-label">Tentang Kami</span>
            <h2 className="section-title" style={{ marginBottom: '1rem' }}>
              Penyedia Utama,<br />
              <em style={{ color: 'var(--accent)', fontStyle: 'italic' }}>Bahan Baku Berkualitas.</em>
            </h2>
            <div className="divider" />
            <p className="section-subtitle" style={{ marginBottom: '2.5rem' }}>
              bertiga.FnD berkomitmen menjadi mitra terbaik dalam menyediakan bahan makanan Meksiko dan snack premium. Kami hadir untuk memudahkan Anda mendapatkan Tortilla Chips, Taco Shells, hingga rempah impor dengan kualitas yang telah teruji.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem' }}>
              {PILLARS.map(({ icon, title, desc }, i) => (
                <motion.div
                  key={title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.08, duration: 0.45 }}
                  style={{
                    background: 'var(--white)',
                    borderRadius: 'var(--radius-md)',
                    padding: '1.25rem',
                    boxShadow: 'var(--shadow-soft)',
                  }}
                >
                  <div style={{ color: 'var(--accent)', marginBottom: '0.6rem' }}>{icon}</div>
                  <h4 style={{ fontFamily: 'var(--font-display)', fontSize: '0.95rem', color: 'var(--ink)', marginBottom: '0.35rem' }}>{title}</h4>
                  <p style={{ fontSize: '0.78rem', color: 'var(--muted)', lineHeight: 1.65 }}>{desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
