// src/sections/Contact.jsx
import { motion } from 'framer-motion'
import { BsWhatsapp, BsInstagram } from 'react-icons/bs'
import { SiShopee, SiTiktok } from 'react-icons/si'
import { LuMapPin, LuMail, LuPhone } from 'react-icons/lu'

const SOCIALS = [
  { icon: <BsWhatsapp size={18} />, label: 'WhatsApp', href: 'https://wa.me/6281234567890', color: '#25D366' },
  { icon: <BsInstagram size={18} />, label: 'Instagram', href: 'https://instagram.com/bertiga.fnd', color: '#E1306C' },
  { icon: <SiShopee size={18} />, label: 'Shopee', href: 'https://shopee.co.id/bertiga.fnd', color: '#EE4D2D' },
  { icon: <SiTiktok size={18} />, label: 'TikTok', href: 'https://tiktok.com/@bertiga.fnd', color: '#010101' },
]

export default function Contact() {
  return (
    <section
      id="contact"
      style={{ background: 'var(--ink)', padding: '5rem 0 3rem' }}
    >
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pb-10" style={{ borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div style={{ marginBottom: '1rem' }}>
              <span style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', color: 'var(--cream)', fontWeight: 600 }}>
                bertiga<span style={{ color: 'var(--accent)' }}>.</span>FnD
              </span>
            </div>
            <p style={{ fontSize: '0.85rem', color: 'var(--warm-gray)', lineHeight: 1.8, marginBottom: '1.5rem', maxWidth: '240px' }}>
              Simple food, serious flavor. Dari dapur kami, langsung ke meja makanmu.
            </p>
            {/* Social */}
            <div className="flex gap-3">
              {SOCIALS.map(({ icon, label, href, color }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  style={{
                    width: 38, height: 38,
                    borderRadius: '50%',
                    background: 'rgba(255,255,255,0.07)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: 'var(--warm-gray)',
                    transition: 'all 0.25s ease',
                    textDecoration: 'none',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.background = color; e.currentTarget.style.color = '#fff'; e.currentTarget.style.borderColor = 'transparent'; }}
                  onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.07)'; e.currentTarget.style.color = 'var(--warm-gray)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'; }}
                >
                  {icon}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.08 }}
          >
            <h4 style={{ fontFamily: 'var(--font-display)', fontSize: '0.95rem', color: 'var(--cream)', marginBottom: '1rem' }}>Quick Links</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
              {['Home', 'About', 'Catalog', 'Featured', 'Testimonials'].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    onClick={(e) => { e.preventDefault(); document.getElementById(link.toLowerCase())?.scrollIntoView({ behavior: 'smooth' }) }}
                    style={{
                      fontSize: '0.83rem',
                      color: 'var(--warm-gray)',
                      textDecoration: 'none',
                      transition: 'color 0.2s',
                    }}
                    onMouseEnter={e => e.target.style.color = 'var(--accent)'}
                    onMouseLeave={e => e.target.style.color = 'var(--warm-gray)'}
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            <h4 style={{ fontFamily: 'var(--font-display)', fontSize: '0.95rem', color: 'var(--cream)', marginBottom: '1rem' }}>Hubungi Kami</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {[
                { icon: <LuPhone size={14} />, text: '+62 812-3456-7890' },
                { icon: <LuMail size={14} />, text: 'hello@bertiga.fnd' },
                { icon: <LuMapPin size={14} />, text: 'Jakarta, Indonesia' },
              ].map(({ icon, text }) => (
                <div key={text} className="flex items-center gap-2.5">
                  <span style={{ color: 'var(--accent)', flexShrink: 0 }}>{icon}</span>
                  <span style={{ fontSize: '0.83rem', color: 'var(--warm-gray)' }}>{text}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-3 pt-6">
          <p style={{ fontSize: '0.75rem', color: 'var(--muted)', textAlign: 'center' }}>
            © 2025 bertiga.FnD. All rights reserved.
          </p>
          <p style={{ fontSize: '0.75rem', color: 'var(--muted)', textAlign: 'center' }}>
            Made with ♥ — Simple but expensive looking.
          </p>
        </div>
      </div>
    </section>
  )
}
