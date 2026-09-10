import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { Users, Building2, BookOpen, Star } from 'lucide-react'

function useCounter(target, duration = 2000, trigger) {
  const [count, setCount] = useState(0)
  useEffect(() => {
    if (!trigger) return
    let start = 0
    const step = target / (duration / 16)
    const timer = setInterval(() => {
      start += step
      if (start >= target) {
        setCount(target)
        clearInterval(timer)
      } else {
        setCount(Math.floor(start))
      }
    }, 16)
    return () => clearInterval(timer)
  }, [trigger, target, duration])
  return count
}

const stats = [
  { icon: Users, value: 5000, suffix: '+', label: 'Students Placed', description: 'Across India & abroad', color: '#E84E00' },
  { icon: Building2, value: 150, suffix: '+', label: 'Hiring Partners', description: 'Top IT & Non-IT companies', color: '#FF8C42' },
  { icon: BookOpen, value: 8, suffix: '+', label: 'Programs', description: 'Industry-aligned courses', color: '#E84E00' },
  { icon: Star, value: 98, suffix: '%', label: 'Placement Rate', description: 'Industry-leading success', color: '#FF8C42' },
]

function StatCard({ stat, trigger }) {
  const Icon = stat.icon
  const count = useCounter(stat.value, 2200, trigger)

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      whileHover={{ y: -8, scale: 1.03 }}
      transition={{ duration: 0.5 }}
      className="relative glass rounded-3xl p-8 border border-white/15 hover:border-orange/40 transition-all duration-300 text-center group overflow-hidden"
    >
      {/* Glow background */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"
        style={{ background: `radial-gradient(circle at 50% 0%, ${stat.color}15, transparent 70%)` }}
      />

      <div
        className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-5 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6"
        style={{ background: `${stat.color}20`, border: `1px solid ${stat.color}35` }}
      >
        <Icon size={28} style={{ color: stat.color }} />
      </div>

      <div className="text-5xl font-black text-white mb-2 relative">
        {count.toLocaleString()}
        <span style={{ color: stat.color }}>{stat.suffix}</span>
      </div>

      <div className="text-white font-bold text-lg mb-1">{stat.label}</div>
      <div className="text-white/50 text-sm">{stat.description}</div>

      {/* Bottom accent line */}
      <div
        className="absolute bottom-0 left-0 right-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ background: `linear-gradient(90deg, transparent, ${stat.color}, transparent)` }}
      />
    </motion.div>
  )
}

export default function StatsCounter() {
  const [triggered, setTriggered] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setTriggered(true) },
      { threshold: 0.3 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="section-padding bg-navy relative overflow-hidden noise">
      {/* Background Orbs */}
      <motion.div
        className="absolute w-[700px] h-[700px] rounded-full opacity-10"
        style={{
          background: 'radial-gradient(circle, #E84E00 0%, transparent 70%)',
          top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
        }}
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="relative max-w-7xl mx-auto" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="inline-flex items-center gap-2 bg-orange/15 border border-orange/30 rounded-full px-4 py-2 text-orange text-sm font-semibold mb-4">
            Numbers That Speak
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-white leading-tight mb-4">
            Our <span className="text-gradient-orange">Impact</span>
          </h2>
          <p className="text-white/60 text-lg max-w-xl mx-auto">
            Real results. Real students. Real careers.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <StatCard key={stat.label} stat={stat} trigger={triggered} />
          ))}
        </div>
      </div>
    </section>
  )
}
