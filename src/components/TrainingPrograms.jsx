import { motion } from 'framer-motion'
import {
  Cloud, Code2, TestTube, Database, Brain, Network,
  Coffee, Settings, Clock, Users, TrendingUp, ArrowRight
} from 'lucide-react'

const programs = [
  {
    id: 'salesforce',
    title: 'Salesforce',
    icon: Cloud,
    color: '#E84E00',
    duration: 'Contact Us',
    mode: 'Online / Offline',
    skills: ['Admin', 'Development', 'Lightning', 'Integration'],
    popular: true,
  },
  {
    id: 'servicenow',
    title: 'ServiceNow',
    icon: Settings,
    color: '#FF8C42',
    duration: 'Contact Us',
    mode: 'Online / Offline',
    skills: ['ITSM', 'ITOM', 'CSM', 'Scripting'],
    popular: true,
  },
  {
    id: 'playwright',
    title: 'Playwright Testing',
    icon: TestTube,
    color: '#E84E00',
    duration: 'Contact Us',
    mode: 'Online / Offline',
    skills: ['Playwright', 'TypeScript', 'CI/CD', 'API Testing'],
    popular: false,
  },
  {
    id: 'selenium',
    title: 'Selenium Testing',
    icon: TestTube,
    color: '#FF8C42',
    duration: 'Contact Us',
    mode: 'Online / Offline',
    skills: ['Selenium', 'Java', 'TestNG', 'Cucumber'],
    popular: false,
  },
  {
    id: 'azure-data',
    title: 'Azure Data Engineering',
    icon: Database,
    color: '#E84E00',
    duration: 'Contact Us',
    mode: 'Online / Offline',
    skills: ['Azure', 'Data Factory', 'Databricks', 'SQL'],
    popular: true,
  },
  {
    id: 'sap',
    title: 'SAP \u2013 All Modules',
    icon: Coffee,
    color: '#FF8C42',
    duration: 'Contact Us',
    mode: 'Online / Offline',
    skills: ['SAP FICO', 'SAP MM', 'SAP SD', 'SAP ABAP'],
    popular: false,
  },
  {
    id: 'genai',
    title: 'Generative AI',
    icon: Brain,
    color: '#E84E00',
    duration: 'Contact Us',
    mode: 'Online / Offline',
    skills: ['LLMs', 'Prompt Engineering', 'LangChain', 'Python'],
    popular: true,
  },
  {
    id: 'networking',
    title: 'Networking',
    icon: Network,
    color: '#FF8C42',
    duration: 'Contact Us',
    mode: 'Online / Offline',
    skills: ['CCNA', 'TCP/IP', 'Firewall', 'Cloud Networking'],
    popular: false,
  },
  {
    id: 'java',
    title: 'Java',
    icon: Code2,
    color: '#E84E00',
    duration: 'Contact Us',
    mode: 'Online / Offline',
    skills: ['Core Java', 'Spring Boot', 'Hibernate', 'REST APIs'],
    popular: false,
  },
  {
    id: 'python',
    title: 'Python',
    icon: Code2,
    color: '#FF8C42',
    duration: 'Contact Us',
    mode: 'Online / Offline',
    skills: ['Core Python', 'Django', 'Flask', 'Automation'],
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
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
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
