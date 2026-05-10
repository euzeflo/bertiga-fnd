// src/sections/Testimonials.jsx
import { motion } from 'framer-motion'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import { testimonials } from '../data/products'
import StarRating from '../components/StarRating'

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      style={{ background: 'var(--beige)', padding: '8rem 0' }}
    >
      <div className="container">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.span
            className="section-label"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            Kata Mereka
          </motion.span>
          <motion.h2
            className="section-title"
            style={{ marginBottom: '0.75rem' }}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.07 }}
          >
            Dipercaya Ratusan Pelanggan
          </motion.h2>
          <motion.p
            className="section-subtitle"
            style={{ margin: '0 auto' }}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.13 }}
          >
            Ulasan jujur dari pelanggan kami yang sudah merasakan sendiri perbedaannya.
          </motion.p>
        </div>

        {/* Swiper */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.2 }}
        >
          <Swiper
            modules={[Pagination, Autoplay]}
            slidesPerView={1}
            spaceBetween={24}
            pagination={{ clickable: true }}
            autoplay={{ delay: 4000, disableOnInteraction: false, pauseOnMouseEnter: true }}
            breakpoints={{
              640:  { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            style={{ paddingBottom: '2.5rem' }}
          >
            {testimonials.map((t) => (
              <SwiperSlide key={t.id}>
                <div
                  style={{
                    background: 'var(--white)',
                    borderRadius: 'var(--radius-lg)',
                    padding: '1.75rem',
                    boxShadow: 'var(--shadow-soft)',
                    height: '100%',
                    minHeight: '220px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '1rem',
                  }}
                >
                  {/* Stars */}
                  <StarRating rating={t.rating} />

                  {/* Text */}
                  <p style={{
                    fontSize: '0.87rem',
                    color: 'var(--charcoal)',
                    lineHeight: 1.8,
                    flex: 1,
                    fontStyle: 'italic',
                  }}>
                    "{t.text}"
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-3">
                    <div style={{
                      width: 40, height: 40,
                      borderRadius: '50%',
                      background: 'var(--accent-light)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontFamily: 'var(--font-display)',
                      fontSize: '0.85rem',
                      color: 'var(--charcoal)',
                      fontWeight: 600,
                      flexShrink: 0,
                    }}>
                      {t.avatar}
                    </div>
                    <div>
                      <p style={{ fontFamily: 'var(--font-display)', fontSize: '0.9rem', color: 'var(--ink)', lineHeight: 1.2 }}>{t.name}</p>
                      <p style={{ fontSize: '0.72rem', color: 'var(--muted)', letterSpacing: '0.04em' }}>{t.role}</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </section>
  )
}
