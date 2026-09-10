import { motion } from 'framer-motion'
import {
  Code2, Database, BarChart3, Cloud, Settings, TestTube,
  Megaphone, Palette, Clock, Users, TrendingUp, ArrowRight
} from 'lucide-react'

const programs = [
  {
    id: 'java',
    title: 'Java Full Stack',
    icon: Code2,
    color: '#E84E00',
    duration: '4 Months',
    mode: 'Online / Offline',
    placement: '98%',
    skills: ['Spring Boot', 'React', 'MySQL', 'AWS'],
    popular: true,
  },
  {
    id: 'python',
    title: 'Python Full Stack',
    icon: Code2,
    color: '#FF8C42',
    duration: '4 Months',
    mode: 'Online / Offline',
    placement: '97%',
    skills: ['Django', 'FastAPI', 'PostgreSQL', 'Docker'],
    popular: false,
  },
  {
    id: 'datascience',
    title: 'Data Science',
    icon: BarChart3,
    color: '#E84E00',
    duration: '5 Months',
    mode: 'Online / Offline',
    placement: '95%',
    skills: ['Python', 'ML', 'TensorFlow', 'Power BI'],
    popular: true,
  },
  {
    id: 'aws',
    title: 'AWS Cloud',
    icon: Cloud,
    color: '#FF8C42',
    duration: '3 Months',
    mode: 'Online / Offline',
    placement: '96%',
    skills: ['EC2', 'S3', 'Lambda', 'CloudFormation'],
    popular: false,
  },
  {
    id: 'devops',
    title: 'DevOps',
    icon: Settings,
    color: '#E84E00',
    duration: '3 Months',
    mode: 'Online / Offline',
    placement: '97%',
    skills: ['Docker', 'Kubernetes', 'Jenkins', 'Git'],
    popular: false,
  },
  {
    id: 'testing',
    title: 'Software Testing',
    icon: TestTube,
    color: '#FF8C42',
    duration: '3 Months',
    mode: 'Online / Offline',
    placement: '95%',
    skills: ['Selenium', 'Jest', 'Postman', 'JIRA'],
    popular: false,
  },
  {
    id: 'digitalmarketing',
    title: 'Digital Marketing',
    icon: Megaphone,
    color: '#E84E00',
    duration: '2 Months',
    mode: 'Online / Offline',
    placement: '93%',
    skills: ['SEO', 'Google Ads', 'Meta Ads', 'Analytics'],
    popular: false,
  },
  {
    id: 'uiux',
    title: 'UI/UX Design',
    icon: Palette,
    color: '#FF8C42',
    duration: '3 Months',
    mode: 'Online / Offline',
    placement: '94%',
    skills: ['Figma', 'Adobe XD', 'Prototyping', 'Research'],
    popular: false,
  },
]

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: 'easeOut' }
  })
}

export default function TrainingPrograms() {
  return (
    <section id="programs" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="inline-flex items-center gap-2 bg-orange/8 border border-orange/20 rounded-full px-4 py-2 text-orange text-sm font-semibold mb-4">
            <TrendingUp size={16} />
            Industry-Aligned Curriculum
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-navy leading-tight mb-4">
            Training <span className="text-gradient-orange">Programs</span>
          </h2>
          <p className="text-navy/60 text-lg max-w-2xl mx-auto">
            Hands-on training with real-world projects, mentorship from industry experts,
            and guaranteed placement support.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {programs.map((program, i) => {
            const Icon = program.icon
            return (
              <motion.div
                key={program.id}
                custom={i}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="relative group bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-2xl hover:shadow-orange/10 hover:border-orange/20 transition-all duration-400 p-6 card-hover overflow-hidden"
              >
                {/* Popular Badge */}
                {program.popular && (
                  <div className="absolute top-4 right-4 bg-orange text-white text-xs font-bold px-3 py-1 rounded-full">
                    Popular
                  </div>
                )}

                {/* Icon */}
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 transition-all duration-300 group-hover:scale-110"
                  style={{ background: `${program.color}15`, border: `1px solid ${program.color}30` }}
                >
                  <Icon size={26} style={{ color: program.color }} />
                </div>

                <h3 className="font-bold text-navy text-lg mb-3">{program.title}</h3>

                {/* Meta */}
                <div className="flex flex-col gap-2 mb-4">
                  <div className="flex items-center gap-2 text-sm text-navy/60">
                    <Clock size={14} />
                    <span>{program.duration}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-navy/60">
                    <Users size={14} />
                    <span>{program.mode}</span>
                  </div>
                </div>

                {/* Skills */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {program.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-xs bg-gray-50 border border-gray-100 text-navy/70 rounded-lg px-2.5 py-1 font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Placement Rate */}
                <div className="flex items-center justify-between mb-5">
                  <span className="text-xs text-navy/50 font-medium">Placement Rate</span>
                  <span className="text-sm font-bold" style={{ color: program.color }}>{program.placement}</span>
                </div>

                {/* Progress Bar */}
                <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden mb-5">
                  <motion.div
                    className="h-full rounded-full"
                    style={{ background: `linear-gradient(90deg, ${program.color}, ${program.color}99)` }}
                    initial={{ width: 0 }}
                    whileInView={{ width: program.placement }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: i * 0.1 + 0.5 }}
                  />
                </div>

                {/* CTA */}
                <button
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-xl border-2 font-semibold text-sm transition-all duration-300 group-hover:text-white"
                  style={{
                    borderColor: program.color,
                    color: program.color,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = program.color
                    e.currentTarget.style.color = 'white'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'transparent'
                    e.currentTarget.style.color = program.color
                  }}
                  onClick={() => {
                    const el = document.getElementById('contact')
                    if (el) el.scrollIntoView({ behavior: 'smooth' })
                  }}
                  id={`program-enroll-${program.id}`}
                >
                  Enroll Now <ArrowRight size={16} />
                </button>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
