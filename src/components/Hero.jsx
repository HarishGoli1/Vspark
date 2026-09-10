import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { gsap } from 'gsap'
import { ArrowRight, Play, Code2, Cloud, TrendingUp, Award, CheckCircle2, ChevronRight, MonitorPlay } from 'lucide-react'

// Exactly 4 premium floating elements
const floatingIcons = [
  { Icon: Code2, x: '5%', y: '15%', delay: 0, color: '#E84E00' },
  { Icon: MonitorPlay, x: '88%', y: '10%', delay: 0.5, color: '#FF8C42' },
  { Icon: Cloud, x: '92%', y: '75%', delay: 1, color: '#E84E00' },
  { Icon: Award, x: '8%', y: '80%', delay: 1.5, color: '#F5C5A3' },
]

export default function Hero() {
  const titleRef = useRef(null)
  const subtitleRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Premium silky text reveal
      gsap.fromTo(
        titleRef.current?.querySelectorAll('.word'),
        { opacity: 0, y: 50, rotateX: -30, filter: 'blur(10px)' },
        { opacity: 1, y: 0, rotateX: 0, filter: 'blur(0px)', stagger: 0.1, duration: 1, ease: 'power3.out', delay: 0.2 }
      )
      gsap.fromTo(
        subtitleRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 1, ease: 'power2.out', delay: 0.8 }
      )
    })
    return () => ctx.revert()
  }, [])

  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="hero" className="relative min-h-screen bg-navy flex items-center overflow-hidden">
      {/* Subtle Glows (Vercel Style) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute w-[800px] h-[800px] rounded-full blur-[120px]"
          style={{ background: 'radial-gradient(circle, rgba(232,78,0,0.08) 0%, transparent 60%)', top: '-20%', left: '-10%' }}
          animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.8, 0.5] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute w-[600px] h-[600px] rounded-full blur-[100px]"
          style={{ background: 'radial-gradient(circle, rgba(255,140,66,0.06) 0%, transparent 70%)', bottom: '-10%', right: '-10%' }}
          animate={{ scale: [1.1, 1, 1.1], opacity: [0.6, 0.3, 0.6] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        />
        {/* Extremely subtle grid */}
        <div className="absolute inset-0 opacity-[0.015]" style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }} />
      </div>

      {/* Floating Icons */}
      {floatingIcons.map(({ Icon, x, y, delay, color }, i) => (
        <motion.div
          key={i}
          className="absolute hidden lg:flex items-center justify-center w-14 h-14 rounded-2xl bg-white/[0.03] backdrop-blur-xl border border-white/[0.05] shadow-[0_8px_32px_rgba(0,0,0,0.2)]"
          style={{ left: x, top: y }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1, y: [0, -15, 0] }}
          transition={{
            opacity: { delay: delay + 1, duration: 0.8 },
            scale: { delay: delay + 1, duration: 0.8, type: 'spring' },
            y: { delay: delay + 1.5, duration: 5 + i, repeat: Infinity, ease: 'easeInOut' }
          }}
        >
          <Icon size={24} style={{ color }} />
        </motion.div>
      ))}

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 pt-32 pb-20 grid lg:grid-cols-[1.1fr_0.9fr] gap-16 items-center min-h-screen">
        
        {/* Left Column (Typography & CTA) */}
        <div className="flex flex-col gap-8">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="self-start"
          >
            <div className="group flex items-center gap-3 bg-white/[0.03] hover:bg-white/[0.05] border border-white/[0.08] rounded-full px-4 py-2 transition-colors cursor-pointer">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-orange"></span>
              </span>
              <span className="text-white/80 text-sm font-medium tracking-wide">Hyderabad's Premier Training Institute</span>
              <ChevronRight size={14} className="text-white/40 group-hover:text-white transition-colors" />
            </div>
          </motion.div>

          {/* Headline */}
          <div ref={titleRef} className="overflow-visible" style={{ perspective: 1000 }}>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-[1.08] tracking-tight">
              {['Launch', 'Your', 'Dream'].map((word, i) => (
                <span key={i} className="word inline-block mr-[0.25em]">{word}</span>
              ))}
              <br />
              <span className="word inline-block text-transparent bg-clip-text bg-gradient-to-r from-orange via-orange-light to-orange relative">
                Career
                {/* Subtle underline glow */}
                <span className="absolute -bottom-2 left-0 w-full h-[3px] bg-gradient-to-r from-orange/0 via-orange to-orange/0 opacity-50 blur-sm"></span>
              </span>
            </h1>
          </div>

          {/* Subtitle */}
          <div ref={subtitleRef} className="opacity-0 flex flex-col gap-4">
            <p className="text-white/60 text-lg sm:text-xl leading-relaxed max-w-lg font-light tracking-wide">
              Expert-led IT & Non-IT training programs with <span className="text-white font-medium">100% placement assistance</span>. Join 5,000+ students building the future in Hyderabad.
            </p>
          </div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
            className="flex flex-wrap gap-5 pt-2"
          >
            <motion.button
              onClick={() => scrollTo('programs')}
              className="relative overflow-hidden flex items-center gap-2 bg-orange text-white px-8 py-4 rounded-full font-semibold text-base shadow-[0_0_40px_rgba(232,78,0,0.3)] transition-all hover:shadow-[0_0_60px_rgba(232,78,0,0.5)] group"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Explore Programs
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </motion.button>

            <motion.button
              onClick={() => scrollTo('contact')}
              className="flex items-center gap-3 text-white border border-white/10 bg-white/[0.02] hover:bg-white/[0.06] px-8 py-4 rounded-full font-medium text-base transition-all duration-300 backdrop-blur-md"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Play size={16} className="text-orange" fill="currentColor" />
              Free Demo Class
            </motion.button>
          </motion.div>

          {/* Minimal Stats Row (Stripe Style) */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="flex items-center gap-8 pt-8 mt-4 border-t border-white/[0.06]"
          >
            <div>
              <div className="text-white font-bold text-2xl tracking-tight">5,000+</div>
              <div className="text-white/40 text-sm font-medium tracking-wide mt-1">Students Placed</div>
            </div>
            <div className="w-px h-10 bg-white/[0.08]" />
            <div>
              <div className="text-white font-bold text-2xl tracking-tight">150+</div>
              <div className="text-white/40 text-sm font-medium tracking-wide mt-1">Hiring Partners</div>
            </div>
            <div className="w-px h-10 bg-white/[0.08]" />
            <div>
              <div className="text-white font-bold text-2xl tracking-tight flex items-center gap-1">
                98% <TrendingUp size={20} className="text-orange" />
              </div>
              <div className="text-white/40 text-sm font-medium tracking-wide mt-1">Success Rate</div>
            </div>
          </motion.div>
        </div>

        {/* Right Column (Abstract UI Composition) */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6, duration: 1, ease: 'easeOut' }}
          className="relative hidden lg:block h-[600px] perspective-1000"
        >
          {/* Base Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-orange/20 blur-[80px] rounded-full" />

          {/* Card 1: Code/Backend Representation (Back) */}
          <motion.div
            className="absolute top-10 right-10 w-[320px] h-[380px] rounded-2xl bg-white/[0.02] border border-white/[0.05] backdrop-blur-2xl shadow-2xl overflow-hidden"
            initial={{ y: 20, rotateY: -15, rotateX: 5 }}
            animate={{ y: [20, 0, 20], rotateY: -15, rotateX: 5 }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          >
            <div className="h-10 border-b border-white/[0.05] flex items-center px-4 gap-2 bg-white/[0.01]">
              <div className="w-2.5 h-2.5 rounded-full bg-red-500/50" />
              <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50" />
              <div className="w-2.5 h-2.5 rounded-full bg-green-500/50" />
            </div>
            <div className="p-6 flex flex-col gap-3">
              {[60, 80, 40, 90, 50].map((width, i) => (
                <div key={i} className="h-3 rounded-full bg-white/[0.06]" style={{ width: `${width}%` }} />
              ))}
              <div className="mt-4 flex flex-col gap-3">
                {[70, 40, 85].map((width, i) => (
                  <div key={i} className="h-3 rounded-full bg-orange/20" style={{ width: `${width}%` }} />
                ))}
              </div>
            </div>
          </motion.div>

          {/* Card 2: Main Branding/Success (Front) */}
          <motion.div
            className="absolute top-32 -left-4 w-[360px] rounded-2xl bg-white/[0.04] border border-white/[0.1] backdrop-blur-3xl shadow-[0_20px_60px_rgba(0,0,0,0.5)] overflow-hidden"
            initial={{ y: -20, rotateY: 5, rotateX: -5 }}
            animate={{ y: [-20, 0, -20], rotateY: 5, rotateX: -5 }}
            transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
          >
            <div className="p-8 flex flex-col items-center text-center relative overflow-hidden">
              {/* Subtle inner gradient */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-orange/10 blur-[40px] rounded-full" />
              
              <div style={{ height: 90, overflow: 'visible', marginBottom: 24 }}>
                <img src="/logo.png" alt="VSPARK Solutions" style={{ height: 90, width: 'auto', objectFit: 'contain' }} />
              </div>

              <h3 className="text-xl font-bold text-white mb-2">VSPARK Solutions</h3>
              <p className="text-white/50 text-sm mb-6">Elevating Careers to the Next Level</p>

              <div className="w-full flex items-center justify-between p-4 rounded-xl bg-white/[0.03] border border-white/[0.05]">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-orange/10 flex items-center justify-center">
                    <CheckCircle2 size={20} className="text-orange" />
                  </div>
                  <div className="text-left">
                    <div className="text-white text-sm font-medium">Placement</div>
                    <div className="text-white/40 text-xs">Guaranteed</div>
                  </div>
                </div>
                <div className="text-orange font-bold text-lg">100%</div>
              </div>
            </div>
          </motion.div>

          {/* Floating Element 3: Mini Chart */}
          <motion.div
            className="absolute bottom-10 right-20 w-[180px] p-4 rounded-2xl bg-white/[0.03] border border-white/[0.08] backdrop-blur-xl shadow-2xl"
            initial={{ y: 10, rotateZ: -5 }}
            animate={{ y: [10, -10, 10], rotateZ: -5 }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
          >
            <div className="flex items-center justify-between mb-4">
              <div className="text-white/60 text-xs font-medium">Growth</div>
              <TrendingUp size={14} className="text-orange" />
            </div>
            <div className="flex items-end gap-2 h-16">
              {[40, 25, 60, 45, 80, 100].map((height, i) => (
                <div
                  key={i}
                  className={`w-full rounded-t-sm ${i === 5 ? 'bg-orange' : 'bg-white/[0.08]'}`}
                  style={{ height: `${height}%` }}
                />
              ))}
            </div>
          </motion.div>
        </motion.div>

      </div>

      {/* Minimal Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
      >
        <motion.div
          className="w-[2px] h-[40px] bg-white/10 rounded-full overflow-hidden"
        >
          <motion.div
            className="w-full h-1/2 bg-gradient-to-b from-transparent via-orange to-transparent"
            animate={{ y: ['-100%', '200%'] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
          />
        </motion.div>
      </motion.div>
    </section>
  )
}
