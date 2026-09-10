import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Briefcase, MapPin, Clock, IndianRupee, ArrowRight, Code2, BarChart3, Megaphone, Users } from 'lucide-react'

const itJobs = [
  { id: 1, title: 'Java Backend Developer', company: 'TCS', location: 'Chennai', type: 'Full-time', salary: '4-8 LPA', skills: ['Java', 'Spring Boot', 'MySQL'], icon: Code2 },
  { id: 2, title: 'Python Data Analyst', company: 'Infosys', location: 'Bangalore', type: 'Full-time', salary: '5-9 LPA', skills: ['Python', 'SQL', 'Tableau'], icon: BarChart3 },
  { id: 3, title: 'React Frontend Developer', company: 'Wipro', location: 'Hyderabad', type: 'Full-time', salary: '4-7 LPA', skills: ['React', 'TypeScript', 'CSS'], icon: Code2 },
  { id: 4, title: 'AWS Cloud Engineer', company: 'Cognizant', location: 'Pune', type: 'Full-time', salary: '6-12 LPA', skills: ['AWS', 'Terraform', 'Python'], icon: BarChart3 },
  { id: 5, title: 'DevOps Engineer', company: 'HCL', location: 'Noida', type: 'Full-time', salary: '6-11 LPA', skills: ['Docker', 'K8s', 'CI/CD'], icon: Code2 },
  { id: 6, title: 'QA Test Engineer', company: 'Hexaware', location: 'Mumbai', type: 'Full-time', salary: '3-6 LPA', skills: ['Selenium', 'Java', 'JIRA'], icon: Code2 },
]

const nonItJobs = [
  { id: 7, title: 'Digital Marketing Manager', company: 'Freshworks', location: 'Chennai', type: 'Full-time', salary: '3-6 LPA', skills: ['SEO', 'Google Ads', 'Analytics'], icon: Megaphone },
  { id: 8, title: 'HR Recruiter', company: 'Zoho', location: 'Chennai', type: 'Full-time', salary: '2.5-5 LPA', skills: ['Talent Acquisition', 'HR', 'Excel'], icon: Users },
  { id: 9, title: 'Business Analyst', company: 'Accenture', location: 'Bangalore', type: 'Full-time', salary: '5-9 LPA', skills: ['Excel', 'SQL', 'Power BI'], icon: BarChart3 },
  { id: 10, title: 'Content Strategist', company: 'Capgemini', location: 'Pune', type: 'Full-time', salary: '3-5 LPA', skills: ['Content', 'SEO', 'Marketing'], icon: Megaphone },
  { id: 11, title: 'Sales Development Rep', company: 'IBM', location: 'Hyderabad', type: 'Full-time', salary: '3-7 LPA', skills: ['CRM', 'Sales', 'Communication'], icon: Users },
  { id: 12, title: 'Operations Analyst', company: 'Tech Mahindra', location: 'Gurgaon', type: 'Full-time', salary: '3-6 LPA', skills: ['Excel', 'Analytics', 'PPT'], icon: BarChart3 },
]

function JobCard({ job }) {
  const Icon = job.icon
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      className="bg-white rounded-2xl border border-gray-100 hover:border-orange/25 shadow-sm hover:shadow-lg hover:shadow-orange/8 transition-all duration-300 p-5 group"
    >
      {/* Header */}
      <div className="flex items-start gap-4 mb-4">
        <div className="w-12 h-12 rounded-xl bg-navy/5 border border-navy/10 flex items-center justify-center shrink-0 group-hover:bg-orange/5 group-hover:border-orange/15 transition-all duration-300">
          <Icon size={20} className="text-navy/60 group-hover:text-orange transition-colors duration-300" />
        </div>
        <div className="flex-1 min-w-0">
          <h4 className="font-bold text-navy text-base leading-tight truncate">{job.title}</h4>
          <p className="text-navy/60 text-sm mt-0.5">{job.company}</p>
        </div>
      </div>

      {/* Details */}
      <div className="flex flex-wrap gap-3 mb-4">
        <div className="flex items-center gap-1.5 text-xs text-navy/50">
          <MapPin size={12} /> {job.location}
        </div>
        <div className="flex items-center gap-1.5 text-xs text-navy/50">
          <Clock size={12} /> {job.type}
        </div>
        <div className="flex items-center gap-1.5 text-xs font-semibold text-orange">
          <IndianRupee size={12} /> {job.salary}
        </div>
      </div>

      {/* Skills */}
      <div className="flex flex-wrap gap-1.5 mb-4">
        {job.skills.map((s) => (
          <span key={s} className="text-xs bg-orange/5 border border-orange/15 text-orange rounded-lg px-2.5 py-1 font-medium">
            {s}
          </span>
        ))}
      </div>

      <button
        className="w-full py-2.5 rounded-xl border border-orange/25 text-orange text-sm font-semibold flex items-center justify-center gap-2 hover:bg-orange hover:text-white transition-all duration-300"
        onClick={() => {
          const el = document.getElementById('contact')
          if (el) el.scrollIntoView({ behavior: 'smooth' })
        }}
        id={`job-apply-${job.id}`}
      >
        Apply Now <ArrowRight size={14} />
      </button>
    </motion.div>
  )
}

export default function JobOpenings() {
  const [tab, setTab] = useState('it')
  const jobs = tab === 'it' ? itJobs : nonItJobs

  return (
    <section id="jobs" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <span className="inline-flex items-center gap-2 bg-orange/8 border border-orange/20 rounded-full px-4 py-2 text-orange text-sm font-semibold mb-4">
            <Briefcase size={16} />
            Live Job Openings
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-navy leading-tight mb-4">
            Current <span className="text-gradient-orange">Opportunities</span>
          </h2>
          <p className="text-navy/60 text-lg max-w-2xl mx-auto">
            Explore active job openings across top companies for our trained students.
          </p>
        </motion.div>

        {/* Tab Switcher */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center justify-center mb-10"
        >
          <div className="flex gap-1 p-1 bg-gray-100 rounded-2xl">
            {[
              { key: 'it', label: 'IT Jobs' },
              { key: 'non-it', label: 'Non-IT Jobs' },
            ].map(({ key, label }) => (
              <button
                key={key}
                onClick={() => setTab(key)}
                className={`relative px-8 py-3 rounded-xl text-sm font-bold transition-all duration-300 ${
                  tab === key ? 'text-white' : 'text-navy/60 hover:text-navy'
                }`}
                id={`jobs-tab-${key}`}
              >
                {tab === key && (
                  <motion.span
                    layoutId="jobTab"
                    className="absolute inset-0 bg-navy rounded-xl"
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{label}</span>
              </button>
            ))}
          </div>
        </motion.div>

        {/* Job Cards */}
        <AnimatePresence mode="wait">
          <motion.div
            key={tab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
          >
            {jobs.map((job) => <JobCard key={job.id} job={job} />)}
          </motion.div>
        </AnimatePresence>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-10"
        >
          <button
            onClick={() => {
              const el = document.getElementById('contact')
              if (el) el.scrollIntoView({ behavior: 'smooth' })
            }}
            className="inline-flex items-center gap-2 bg-navy text-white px-8 py-4 rounded-2xl font-bold magnetic-btn hover:bg-navy-light transition-colors"
            id="jobs-view-all-btn"
          >
            View All Opportunities <ArrowRight size={18} />
          </button>
        </motion.div>
      </div>
    </section>
  )
}
