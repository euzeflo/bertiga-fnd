// src/App.jsx
import Navbar from './components/Navbar'
import BackToTop from './components/BackToTop'
import Hero from './sections/Hero'
import About from './sections/About'
import Catalog from './sections/Catalog'
import Featured from './sections/Featured'
import Testimonials from './sections/Testimonials'
import CTA from './sections/CTA'
import Contact from './sections/Contact'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Catalog />
        <Featured />
        <Testimonials />
        <CTA />
        <Contact />
      </main>
      <BackToTop />
    </>
  )
}
