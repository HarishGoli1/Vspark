import { motion } from 'framer-motion'
import { ClipboardList, GraduationCap, Mic, FileSearch, Building2, PartyPopper } from 'lucide-react'

const steps = [
  {
    icon: ClipboardList,
    title: 'Enrollment',
    description: 'Register online or visit our center. Counseling session to choose the right program for your goals.',
    tag: 'Day 1',
    color: '#E84E00',
  },
  {
    icon: GraduationCap,
    title: 'Expert Training',
    description: 'Hands-on training with live projects, real-world case studies, and industry mentors guiding you.',
    tag: 'Week 1-16',
    color: '#FF8C42',
  },
  {
    icon: Mic,
    title: 'Mock Interviews',
    description: 'Unlimited mock interviews simulating actual company rounds — technical, HR, and group discussions.',
    tag: 'Week 12+',
    color: '#E84E00',
  },
  {
    icon: FileSearch,
    title: 'Resume & Profile',
    description: 'ATS-optimized resume, LinkedIn profile makeover, GitHub portfolio setup for maximum visibility.',
    tag: 'Week 14',
    color: '#FF8C42',
  },
  {
    icon: Building2,
    title: 'Campus Drives',
    description: 'Exclusive placement drives with 150+ partner companies. Direct interviews with top recruiters.',
    tag: 'Week 16+',
    color: '#E84E00',
  },
  {
    icon: PartyPopper,
    title: 'Job Offer 🎉',
    description: 'Land your dream offer! Continued support for salary negotiation and onboarding assistance.',
    tag: 'Goal',
    color: '#FF8C42',
  },
]

export default function PlacementTimeline() {
  return (
    <section className="section-padding bg-white">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="inline-flex items-center gap-2 bg-orange/8 border border-orange/20 rounded-full px-4 py-2 text-orange text-sm font-semibold mb-4">
            Your Journey
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-navy leading-tight mb-4">
            Placement <span className="text-gradient-orange">Process</span>
          </h2>
          <p className="text-navy/60 text-lg max-w-2xl mx-auto">
            A proven 6-step roadmap that transforms students into hired professionals.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-orange via-orange/40 to-transparent md:-translate-x-0.5" />

          <div className="flex flex-col gap-8">
            {steps.map((step, i) => {
              const Icon = step.icon
              const isLeft = i % 2 === 0

              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ delay: i * 0.1, duration: 0.6 }}
                  className={`relative flex items-center gap-6 md:gap-0 ${
                    isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Mobile/Desktop dot */}
                  <div className="relative z-10 md:absolute md:left-1/2 md:-translate-x-1/2 flex-shrink-0">
                    <motion.div
                      whileHover={{ scale: 1.2 }}
                      className="w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg border-2 border-white"
                      style={{ background: `linear-gradient(135deg, ${step.color}, ${step.color}CC)` }}
                    >
                      <Icon size={24} className="text-white" />
                    </motion.div>
                  </div>

                  {/* Content Card */}
                  <div className={`flex-1 md:w-[calc(50%-60px)] ${isLeft ? 'md:pr-16 md:text-right' : 'md:pl-16'}`}>
                    <div className="bg-white rounded-2xl border border-gray-100 hover:border-orange/20 hover:shadow-lg hover:shadow-orange/8 p-5 transition-all duration-300 group">
                      {/* Tag */}
                      <span
                        className="inline-block text-xs font-bold rounded-full px-3 py-1 mb-3"
                        style={{ background: `${step.color}15`, color: step.color }}
                      >
                        {step.tag}
                      </span>
                      <h3 className="text-navy font-bold text-lg mb-2">{step.title}</h3>
                      <p className="text-navy/60 text-sm leading-relaxed">{step.description}</p>
                    </div>
                  </div>

                  {/* Spacer for the other side on desktop */}
                  <div className="hidden md:block flex-1" />
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
