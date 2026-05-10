// src/sections/Catalog.jsx
import { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { products, categories } from '../data/products'
import ProductCard from '../components/ProductCard'

const SKELETON_COUNT = 6

function ProductSkeleton() {
  return (
    <div style={{ borderRadius: 'var(--radius-lg)', overflow: 'hidden', background: 'var(--white)', boxShadow: 'var(--shadow-soft)' }}>
      <div className="skeleton" style={{ aspectRatio: '4/3', width: '100%' }} />
      <div style={{ padding: '1.25rem' }}>
        <div className="skeleton" style={{ height: 10, width: '40%', marginBottom: 12 }} />
        <div className="skeleton" style={{ height: 18, width: '75%', marginBottom: 10 }} />
        <div className="skeleton" style={{ height: 13, width: '90%', marginBottom: 6 }} />
        <div className="skeleton" style={{ height: 13, width: '65%', marginBottom: 18 }} />
        <div className="skeleton" style={{ height: 20, width: '35%', marginBottom: 18 }} />
        <div style={{ display: 'flex', gap: 8 }}>
          <div className="skeleton" style={{ height: 36, flex: 1, borderRadius: 'var(--radius-md)' }} />
          <div className="skeleton" style={{ height: 36, flex: 1, borderRadius: 'var(--radius-md)' }} />
        </div>
      </div>
    </div>
  )
}

export default function Catalog() {
  const [activeCategory, setActiveCategory] = useState('all')
  const [loading, setLoading] = useState(false)
  const [visibleCount, setVisibleCount] = useState(6)

  const filtered = useMemo(() => {
    if (activeCategory === 'all') return products
    return products.filter((p) => p.category === activeCategory)
  }, [activeCategory])

  const handleFilter = (id) => {
    if (id === activeCategory) return
    setLoading(true)
    setTimeout(() => {
      setActiveCategory(id)
      setVisibleCount(6) // Reset count when filter changes
      setLoading(false)
    }, 400)
  }

  return (
    <section
      id="catalog"
      style={{ background: 'var(--cream)', padding: '6rem 0' }}
    >
      <div className="container">
        {/* Header */}
        <div className="text-center mb-10">
          <motion.span
            className="section-label"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            Menu Lengkap
          </motion.span>
          <motion.h2
            className="section-title"
            style={{ marginBottom: '0.75rem' }}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.07 }}
          >
            Pilih Favoritmu
          </motion.h2>
          <motion.p
            className="section-subtitle"
            style={{ margin: '0 auto' }}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.13 }}
          >
            Dari Tortilla Chips renyah hingga Frozen Kebab siap saji — semua ada di sini, fresh setiap hari.
          </motion.p>
        </div>

        {/* Filter Buttons */}
        <motion.div
          className="flex flex-wrap justify-center gap-2 mb-14"
          style={{ marginBottom: '1rem' }}
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.18 }}
        >
          {categories.map(({ id, label }) => (
            <button
              key={id}
              className={`filter-btn ${activeCategory === id ? 'active' : ''}`}
              onClick={() => handleFilter(id)}
            >
              {label}
            </button>
          ))}
        </motion.div>

        {/* Grid */}
        <AnimatePresence mode="wait">
          {loading ? (
            <motion.div
              key="skeleton"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {Array.from({ length: SKELETON_COUNT }).map((_, i) => (
                <ProductSkeleton key={i} />
              ))}
            </motion.div>
          ) : (
            <>
              <motion.div
                key={activeCategory}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {filtered.slice(0, visibleCount).map((product, i) => (
                  <ProductCard key={product.id} product={product} index={i} />
                ))}
              </motion.div>

              {/* Load More Button */}
              {visibleCount < filtered.length && (
                <motion.div
                  style={{ marginTop: '1rem' }}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex justify-center mt-14"
                >
                  <button
                    onClick={() => setVisibleCount(prev => prev + 6)}
                    className="btn-outline"
                    style={{ padding: '0.85rem 2.5rem' }}
                  >
                    Muat Lebih Banyak
                  </button>
                </motion.div>
              )}
            </>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
