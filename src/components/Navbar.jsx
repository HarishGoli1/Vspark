import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ChevronRight } from 'lucide-react'

const navLinks = [
  { label: 'Home', href: '#hero' },
  { label: 'Programs', href: '#programs' },
  { label: 'Placement', href: '#placement' },
  { label: 'Jobs', href: '#jobs' },
  { label: 'Why VSPARK', href: '#why' },
  { label: 'Contact', href: '#contact' },
]

/* ─── Reusable logo component ─── */
export function Logo({ size = 'md', dark = true }) {
  const sizes = {
    sm: { imgHeight: 40, textClass: 'text-lg', subClass: 'text-[11px]' },
    md: { imgHeight: 48, textClass: 'text-xl', subClass: 'text-xs' },
    lg: { imgHeight: 72, textClass: 'text-2xl', subClass: 'text-sm' },
    xl: { imgHeight: 90, textClass: 'text-3xl', subClass: 'text-base' },
  }
  const s = sizes[size]

  return (
    <div className="flex items-center gap-3">
      {/* Container with exact dimensions */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexShrink: 0,
          overflow: 'visible',
        }}
      >
        <img
          src="/logo.png"
          alt="VSPARK Solutions Official Logo"
          style={{
            height: s.imgHeight,
            width: 'auto',
            objectFit: 'contain',
            objectPosition: 'center',
            display: 'block',
          }}
          draggable={false}
        />
      </div>
      <div className="flex flex-col justify-center">
        <div className={`${s.textClass} font-black leading-none tracking-wide ${dark ? 'text-white' : 'text-navy'}`}>
          VSPARK
        </div>
        <div className={`${s.subClass} font-medium tracking-widest uppercase ${dark ? 'text-white/55' : 'text-navy/50'}`}>
          Solutions
        </div>
      </div>
    </div>
  )
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('hero')
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
      const sections = navLinks.map(l => l.href.replace('#', ''))
      for (const section of [...sections].reverse()) {
        const el = document.getElementById(section)
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveSection(section)
          break
        }
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (href) => {
    setMobileOpen(false)
    const id = href.replace('#', '')
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? 'glass-dark shadow-xl border-b border-white/10 py-3' : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          {/* Logo */}
          <motion.a
            href="#hero"
            onClick={(e) => { e.preventDefault(); handleNavClick('#hero') }}
            className="flex items-center"
            whileHover={{ scale: 1.02 }}
            aria-label="VSPARK Solutions – Home"
          >
            <Logo size="md" dark />
          </motion.a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => {
              const id = link.href.replace('#', '')
              const isActive = activeSection === id
              return (
                <motion.button
                  key={link.label}
                  onClick={() => handleNavClick(link.href)}
                  className={`relative px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 ${
                    isActive ? 'text-white' : 'text-white/60 hover:text-white'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {isActive && (
                    <motion.span
                      layoutId="activeNav"
                      className="absolute inset-0 bg-white/10 rounded-full border border-white/20"
                      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{link.label}</span>
                </motion.button>
              )
            })}
          </nav>

          {/* CTA */}
          <motion.button
            onClick={() => handleNavClick('#contact')}
            className="hidden md:flex items-center gap-2 bg-orange text-white px-5 py-2.5 rounded-full text-sm font-semibold magnetic-btn shadow-lg hover:bg-orange-dark transition-colors duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            id="navbar-cta-btn"
          >
            Get Started <ChevronRight size={16} />
          </motion.button>

          {/* Mobile toggle */}
          <motion.button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden text-white p-2 rounded-xl glass"
            whileTap={{ scale: 0.9 }}
            aria-label="Toggle mobile menu"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </motion.button>
        </div>
      </motion.header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="fixed inset-0 z-40 glass-dark flex flex-col"
          >
            <div className="flex items-center justify-between px-6 py-5 border-b border-white/10">
              <Logo size="md" dark />
              <button onClick={() => setMobileOpen(false)} className="text-white/70 hover:text-white">
                <X size={24} />
              </button>
            </div>
            <nav className="flex flex-col p-6 gap-2 flex-1">
              {navLinks.map((link, i) => (
                <motion.button
                  key={link.label}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.08 }}
                  onClick={() => handleNavClick(link.href)}
                  className="text-left px-5 py-4 text-white font-medium text-lg rounded-xl hover:bg-white/10 transition-colors border border-transparent hover:border-white/10"
                >
                  {link.label}
                </motion.button>
              ))}
            </nav>
            <div className="p-6 border-t border-white/10">
              <button
                onClick={() => handleNavClick('#contact')}
                className="w-full bg-orange text-white py-3.5 rounded-xl font-semibold text-base flex items-center justify-center gap-2 magnetic-btn"
                id="mobile-cta-btn"
              >
                Get Started <ChevronRight size={18} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
