import { motion } from 'framer-motion'
import {
  Trophy, Users, Zap, Shield, HeartHandshake, BookOpen,
  Star, Globe2, Clock, CheckCircle2
} from 'lucide-react'

const reasons = [
  {
    icon: Trophy,
    title: '98% Placement Rate',
    description: 'We don\'t just train — we place. Our dedicated placement team works tirelessly to get you hired.',
    color: '#E84E00',
  },
  {
    icon: Users,
    title: 'Expert Mentors',
    description: 'Learn from industry professionals with 10+ years of real-world experience at top MNCs.',
    color: '#FF8C42',
  },
  {
    icon: Zap,
    title: 'Live Project Training',
    description: 'Build production-grade projects that impress recruiters and stand out in your portfolio.',
    color: '#E84E00',
  },
  {
    icon: Shield,
    title: 'Placement Guarantee',
    description: 'We guarantee job placement or we continue supporting you until you land your dream role.',
    color: '#FF8C42',
  },
  {
    icon: HeartHandshake,
    title: '150+ Hiring Partners',
    description: 'Exclusive partnerships with top-tier IT and Non-IT companies across India.',
    color: '#E84E00',
  },
  {
    icon: BookOpen,
    title: 'Comprehensive Curriculum',
    description: 'Industry-aligned curriculum updated quarterly with the latest tools and technologies.',
    color: '#FF8C42',
  },
  {
    icon: Star,
    title: 'Certification Support',
    description: 'Guidance for globally-recognized certifications including AWS, Google, and Microsoft.',
    color: '#E84E00',
  },
  {
    icon: Globe2,
    title: 'Global Opportunities',
    description: 'Not just India — our placement network extends to global opportunities in UAE, UK, and USA.',
    color: '#FF8C42',
  },
  {
    icon: Clock,
    title: 'Flexible Learning',
    description: 'Weekend, weekday, online, and offline batches to fit your lifestyle and schedule.',
    color: '#E84E00',
  },
]

export default function WhyChoose() {
  return (
    <section id="why" className="section-padding bg-navy relative overflow-hidden noise">
      {/* Background Glow */}
      <div
        className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-20"
        style={{ background: 'radial-gradient(circle, #E84E00 0%, transparent 70%)' }}
      />
      <div
        className="absolute bottom-0 left-0 w-96 h-96 rounded-full opacity-10"
        style={{ background: 'radial-gradient(circle, #FF8C42 0%, transparent 70%)' }}
      />

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="inline-flex items-center gap-2 bg-orange/15 border border-orange/30 rounded-full px-4 py-2 text-orange text-sm font-semibold mb-4">
            <CheckCircle2 size={16} />
            Why VSPARK Stands Apart
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-white leading-tight mb-4">
            Why Choose <span className="text-gradient-orange">VSPARK?</span>
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            We don't just teach — we transform careers with industry-grade training and guaranteed placement support.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {reasons.map((reason, i) => {
            const Icon = reason.icon
            return (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                className="glass rounded-3xl p-6 border border-white/10 hover:border-orange/30 transition-all duration-400 group hover:bg-white/10"
              >
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6"
                  style={{ background: `${reason.color}20`, border: `1px solid ${reason.color}30` }}
                >
                  <Icon size={26} style={{ color: reason.color }} />
                </div>

                <h3 className="text-white font-bold text-lg mb-2">{reason.title}</h3>
                <p className="text-white/55 text-sm leading-relaxed">{reason.description}</p>

                {/* Subtle bottom line on hover */}
                <div
                  className="h-0.5 mt-5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: `linear-gradient(90deg, ${reason.color}, transparent)` }}
                />
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
