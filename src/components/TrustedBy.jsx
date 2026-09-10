import { motion } from 'framer-motion'

const companies = [
  'TCS', 'Infosys', 'Wipro', 'HCL', 'Cognizant',
  'Accenture', 'IBM', 'Capgemini', 'Tech Mahindra', 'Amazon',
  'Google', 'Microsoft', 'Zoho', 'Freshworks', 'Hexaware',
]

export default function TrustedBy() {
  const doubled = [...companies, ...companies]

  return (
    <section className="py-16 bg-navy overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-10 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-white/50 text-sm font-medium tracking-widest uppercase mb-2"
        >
          Our Students Work At
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-white text-2xl sm:text-3xl font-bold"
        >
          Trusted by <span className="text-orange">150+ Leading Companies</span>
        </motion.h2>
      </div>

      {/* Marquee Track */}
      <div className="relative">
        {/* Left Fade */}
        <div className="absolute left-0 top-0 h-full w-24 z-10 bg-gradient-to-r from-navy to-transparent pointer-events-none" />
        {/* Right Fade */}
        <div className="absolute right-0 top-0 h-full w-24 z-10 bg-gradient-to-l from-navy to-transparent pointer-events-none" />

        <div className="flex" style={{ width: 'max-content' }}>
          <div className="flex animate-marquee">
            {doubled.map((company, i) => (
              <div
                key={i}
                className="flex items-center justify-center mx-6 px-8 py-4 rounded-2xl glass border border-white/10 hover:border-orange/30 transition-all duration-300 cursor-default group"
                style={{ minWidth: '160px' }}
              >
                <span className="text-white/60 font-semibold text-sm group-hover:text-white transition-colors tracking-wide">
                  {company}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
