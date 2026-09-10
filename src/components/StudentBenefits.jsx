import { motion } from 'framer-motion'
import {
  Laptop, Wifi, Users, FileCheck, Award, HeartHandshake,
  TrendingUp, MessageCircle, BookMarked, Coffee
} from 'lucide-react'

const benefits = [
  { icon: Laptop, title: 'LMS Access', description: 'Lifetime access to our learning management system with recorded sessions and resources.', color: '#E84E00' },
  { icon: Wifi, title: 'Online & Offline', description: 'Choose your preferred learning mode — attend from anywhere or visit our center.', color: '#FF8C42' },
  { icon: Users, title: 'Peer Community', description: 'Join a vibrant community of 5000+ alumni and current students for networking.', color: '#E84E00' },
  { icon: FileCheck, title: 'Completion Certificate', description: 'Industry-recognized certificates to boost your resume and LinkedIn profile.', color: '#FF8C42' },
  { icon: Award, title: 'Doubt Clearing Sessions', description: 'Daily doubt clearing sessions with mentors to ensure you never fall behind.', color: '#E84E00' },
  { icon: HeartHandshake, title: 'Alumni Network', description: 'Connect with successful alumni working at top MNCs across the globe.', color: '#FF8C42' },
  { icon: TrendingUp, title: 'Skill Assessments', description: 'Regular assessments and quizzes to track your progress and identify gaps.', color: '#E84E00' },
  { icon: MessageCircle, title: 'Soft Skills Training', description: 'Communication, leadership, and professional etiquette training included.', color: '#FF8C42' },
  { icon: BookMarked, title: 'Study Materials', description: 'Comprehensive PDF notes, cheat sheets, and interview preparation kits.', color: '#E84E00' },
  { icon: Coffee, title: 'Career Counseling', description: 'Personalized 1-on-1 career counseling sessions with industry veterans.', color: '#FF8C42' },
]

export default function StudentBenefits() {
  return (
    <section className="section-padding bg-gradient-section">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="inline-flex items-center gap-2 bg-orange/8 border border-orange/20 rounded-full px-4 py-2 text-orange text-sm font-semibold mb-4">
            Student-First Approach
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-navy leading-tight mb-4">
            What You <span className="text-gradient-orange">Get</span>
          </h2>
          <p className="text-navy/60 text-lg max-w-2xl mx-auto">
            Every VSPARK student gets a complete package designed to maximize success.
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {benefits.map((benefit, i) => {
            const Icon = benefit.icon
            return (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07, duration: 0.45 }}
                whileHover={{ y: -6, scale: 1.02 }}
                className="bg-white rounded-2xl p-5 border border-gray-100 hover:border-orange/20 hover:shadow-xl hover:shadow-orange/8 transition-all duration-300 text-center group"
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6"
                  style={{ background: `${benefit.color}12`, border: `1px solid ${benefit.color}20` }}
                >
                  <Icon size={22} style={{ color: benefit.color }} />
                </div>
                <h3 className="font-bold text-navy text-sm mb-2">{benefit.title}</h3>
                <p className="text-navy/55 text-xs leading-relaxed">{benefit.description}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
