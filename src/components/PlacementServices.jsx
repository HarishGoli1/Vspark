import { motion } from 'framer-motion'
import {
  Monitor, BookOpen, Target, FileText, MessageSquare, Compass,
  CheckCircle2, ArrowRight
} from 'lucide-react'

const services = [
  {
    id: 'it-training',
    icon: Monitor,
    title: 'IT Training',
    description: 'Full-stack development, cloud computing, DevOps, data science, and more with hands-on project-based learning.',
    features: ['Live Project Training', 'Expert Mentors', 'LMS Access', '24/7 Support'],
    color: '#E84E00',
  },
  {
    id: 'non-it-training',
    icon: BookOpen,
    title: 'Non-IT Training',
    description: 'Digital marketing, business analytics, HR management, and soft skills training for career growth.',
    features: ['Industry Experts', 'Practical Sessions', 'Certification', 'Job Support'],
    color: '#FF8C42',
  },
  {
    id: 'placement-assistance',
    icon: Target,
    title: 'Placement Assistance',
    description: 'Direct connections to 150+ hiring companies with dedicated placement drives and recruiter access.',
    features: ['Campus Drives', 'Job Referrals', 'HR Connect', '6-Month Support'],
    color: '#E84E00',
  },
  {
    id: 'resume-building',
    icon: FileText,
    title: 'Resume Building',
    description: 'ATS-optimized professional resumes crafted by HR experts to maximize your interview callbacks.',
    features: ['ATS Optimized', 'LinkedIn Profile', 'Portfolio Review', 'Cover Letter'],
    color: '#FF8C42',
  },
  {
    id: 'mock-interviews',
    icon: MessageSquare,
    title: 'Mock Interviews',
    description: 'Unlimited mock interviews with industry professionals simulating real company interview panels.',
    features: ['Technical Rounds', 'HR Rounds', 'Video Sessions', 'Feedback Reports'],
    color: '#E84E00',
  },
  {
    id: 'career-guidance',
    icon: Compass,
    title: 'Career Guidance',
    description: 'Personalized career counseling, skill gap analysis, and roadmap planning for your dream role.',
    features: ['1-on-1 Sessions', 'Skill Analysis', 'Career Roadmap', 'Mentorship'],
    color: '#FF8C42',
  },
]

export default function PlacementServices() {
  return (
    <section id="placement" className="section-padding bg-gradient-section">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="inline-flex items-center gap-2 bg-orange/8 border border-orange/20 rounded-full px-4 py-2 text-orange text-sm font-semibold mb-4">
            <Target size={16} />
            End-to-End Support
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-navy leading-tight mb-4">
            Our <span className="text-gradient-orange">Services</span>
          </h2>
          <p className="text-navy/60 text-lg max-w-2xl mx-auto">
            Complete career transformation — from training to your first offer letter.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => {
            const Icon = service.icon
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="bg-white rounded-3xl p-7 shadow-sm hover:shadow-xl hover:shadow-orange/10 border border-gray-100 hover:border-orange/20 transition-all duration-400 group card-hover"
              >
                {/* Icon */}
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3"
                  style={{ background: `linear-gradient(135deg, ${service.color}20, ${service.color}08)`, border: `1px solid ${service.color}25` }}
                >
                  <Icon size={28} style={{ color: service.color }} />
                </div>

                <h3 className="text-xl font-bold text-navy mb-3">{service.title}</h3>
                <p className="text-navy/60 text-sm leading-relaxed mb-5">{service.description}</p>

                {/* Features */}
                <div className="grid grid-cols-2 gap-2 mb-6">
                  {service.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-2">
                      <CheckCircle2 size={14} style={{ color: service.color }} className="shrink-0" />
                      <span className="text-xs text-navy/70 font-medium">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Link */}
                <div
                  className="flex items-center gap-2 text-sm font-semibold cursor-pointer transition-all duration-300 group-hover:gap-3"
                  style={{ color: service.color }}
                  onClick={() => {
                    const el = document.getElementById('contact')
                    if (el) el.scrollIntoView({ behavior: 'smooth' })
                  }}
                  id={`service-learn-${service.id}`}
                >
                  Learn More <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
