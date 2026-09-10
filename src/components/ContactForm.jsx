import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Send, CheckCircle2, User, MessageSquare, BookOpen, Loader2 } from 'lucide-react'

const courses = [
  'Java Full Stack', 'Python Full Stack', 'Data Science',
  'AWS Cloud', 'DevOps', 'Software Testing',
  'Digital Marketing', 'UI/UX Design', 'Other',
]

const contactInfo = [
  { icon: Phone, label: 'Call Us', value: '+91 7997679469', href: 'tel:+917997679469', color: '#E84E00' },
  { icon: Mail, label: 'WhatsApp', value: '7997679469', href: 'https://wa.me/917997679469', color: '#FF8C42' },
  { icon: MapPin, label: 'Visit Us', value: 'Ameerpet, Hyderabad, Telangana', href: '#', color: '#E84E00' },
]

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', course: '', message: '' })
  const [errors, setErrors] = useState({})
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const validate = () => {
    const e = {}
    if (!form.name.trim()) e.name = 'Name is required'
    if (!form.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) e.email = 'Valid email required'
    if (!form.phone.match(/^\d{10}$/)) e.phone = '10-digit phone number required'
    if (!form.course) e.course = 'Please select a course'
    return e
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length > 0) { setErrors(errs); return }
    setSubmitting(true)
    await new Promise((r) => setTimeout(r, 1800))
    setSubmitting(false)
    setSubmitted(true)
  }

  const handleChange = (field, value) => {
    setForm((f) => ({ ...f, [field]: value }))
    if (errors[field]) setErrors((e) => { const n = { ...e }; delete n[field]; return n })
  }

  return (
    <section id="contact" className="section-padding bg-navy relative overflow-hidden noise">
      {/* Background Gradient */}
      <div
        className="absolute inset-0 opacity-30"
        style={{ background: 'radial-gradient(ellipse at 30% 50%, rgba(232,78,0,0.15) 0%, transparent 60%)' }}
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
            Start Your Journey
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-white leading-tight mb-4">
            Get in <span className="text-gradient-orange">Touch</span>
          </h2>
          <p className="text-white/60 text-lg max-w-xl mx-auto">
            Take the first step toward your dream career. Our counselors will guide you to the right program.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-10 items-start">
          {/* Left – Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 flex flex-col gap-6"
          >
            {contactInfo.map(({ icon: Icon, label, value, href, color }, i) => (
              <motion.a
                key={label}
                href={href}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ x: 4 }}
                className="flex items-center gap-5 glass rounded-2xl p-5 border border-white/10 hover:border-orange/30 transition-all duration-300 group"
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-all duration-300 group-hover:scale-110"
                  style={{ background: `${color}20`, border: `1px solid ${color}30` }}
                >
                  <Icon size={22} style={{ color }} />
                </div>
                <div>
                  <div className="text-white/50 text-xs font-medium mb-1 uppercase tracking-wider">{label}</div>
                  <div className="text-white font-semibold">{value}</div>
                </div>
              </motion.a>
            ))}

            {/* Info Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="glass rounded-2xl p-6 border border-white/10 mt-2"
            >
              <div className="text-white font-bold text-lg mb-3">Free Demo Class</div>
              <p className="text-white/60 text-sm leading-relaxed mb-4">
                Not sure which program is right for you? Attend a free demo class with no commitment.
              </p>
              <div className="flex flex-wrap gap-2">
                {['No Credit Card', 'Free Session', 'Expert Mentor'].map((tag) => (
                  <span key={tag} className="text-xs bg-orange/15 border border-orange/25 text-orange rounded-lg px-3 py-1.5 font-medium">
                    ✓ {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right – Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            <div className="glass rounded-3xl p-7 sm:p-10 border border-white/15 shadow-2xl">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="w-20 h-20 rounded-full bg-orange/20 border-2 border-orange flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 size={40} className="text-orange" />
                  </div>
                  <h3 className="text-white text-2xl font-bold mb-3">You're All Set! 🎉</h3>
                  <p className="text-white/60 max-w-sm mx-auto">
                    Our counselor will contact you within 24 hours to discuss your career goals.
                  </p>
                  <button
                    onClick={() => { setSubmitted(false); setForm({ name: '', email: '', phone: '', course: '', message: '' }) }}
                    className="mt-8 text-orange border border-orange/30 px-6 py-2.5 rounded-xl text-sm font-semibold hover:bg-orange/10 transition-colors"
                  >
                    Submit Another
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5" noValidate>
                  <div className="grid sm:grid-cols-2 gap-5">
                    {/* Name */}
                    <div>
                      <label className="block text-white/70 text-sm font-medium mb-2">
                        Full Name <span className="text-orange">*</span>
                      </label>
                      <div className="relative">
                        <User size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30" />
                        <input
                          type="text"
                          id="contact-name"
                          value={form.name}
                          onChange={(e) => handleChange('name', e.target.value)}
                          placeholder="Your full name"
                          className={`w-full bg-white/8 border rounded-xl pl-11 pr-4 py-3.5 text-white placeholder-white/30 text-sm focus:outline-none focus:border-orange/60 transition-colors duration-200 ${errors.name ? 'border-red-400/60' : 'border-white/15'}`}
                        />
                      </div>
                      {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name}</p>}
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-white/70 text-sm font-medium mb-2">
                        Email Address <span className="text-orange">*</span>
                      </label>
                      <div className="relative">
                        <Mail size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30" />
                        <input
                          type="email"
                          id="contact-email"
                          value={form.email}
                          onChange={(e) => handleChange('email', e.target.value)}
                          placeholder="your@email.com"
                          className={`w-full bg-white/8 border rounded-xl pl-11 pr-4 py-3.5 text-white placeholder-white/30 text-sm focus:outline-none focus:border-orange/60 transition-colors duration-200 ${errors.email ? 'border-red-400/60' : 'border-white/15'}`}
                        />
                      </div>
                      {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    {/* Phone */}
                    <div>
                      <label className="block text-white/70 text-sm font-medium mb-2">
                        Phone Number <span className="text-orange">*</span>
                      </label>
                      <div className="relative">
                        <Phone size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30" />
                        <input
                          type="tel"
                          id="contact-phone"
                          value={form.phone}
                          onChange={(e) => handleChange('phone', e.target.value.replace(/\D/g, '').slice(0, 10))}
                          placeholder="10-digit mobile"
                          className={`w-full bg-white/8 border rounded-xl pl-11 pr-4 py-3.5 text-white placeholder-white/30 text-sm focus:outline-none focus:border-orange/60 transition-colors duration-200 ${errors.phone ? 'border-red-400/60' : 'border-white/15'}`}
                        />
                      </div>
                      {errors.phone && <p className="text-red-400 text-xs mt-1">{errors.phone}</p>}
                    </div>

                    {/* Course */}
                    <div>
                      <label className="block text-white/70 text-sm font-medium mb-2">
                        Interested Program <span className="text-orange">*</span>
                      </label>
                      <div className="relative">
                        <BookOpen size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30 pointer-events-none" />
                        <select
                          id="contact-course"
                          value={form.course}
                          onChange={(e) => handleChange('course', e.target.value)}
                          className={`w-full bg-white/8 border rounded-xl pl-11 pr-4 py-3.5 text-white text-sm focus:outline-none focus:border-orange/60 transition-colors duration-200 appearance-none ${errors.course ? 'border-red-400/60' : 'border-white/15'} ${!form.course ? 'text-white/30' : ''}`}
                        >
                          <option value="" className="bg-navy text-white/50">Select a program</option>
                          {courses.map((c) => (
                            <option key={c} value={c} className="bg-navy text-white">{c}</option>
                          ))}
                        </select>
                      </div>
                      {errors.course && <p className="text-red-400 text-xs mt-1">{errors.course}</p>}
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-white/70 text-sm font-medium mb-2">
                      Message <span className="text-white/30">(Optional)</span>
                    </label>
                    <div className="relative">
                      <MessageSquare size={16} className="absolute left-4 top-4 text-white/30" />
                      <textarea
                        id="contact-message"
                        value={form.message}
                        onChange={(e) => handleChange('message', e.target.value)}
                        placeholder="Tell us about your background or any questions..."
                        rows={4}
                        className="w-full bg-white/8 border border-white/15 rounded-xl pl-11 pr-4 py-3.5 text-white placeholder-white/30 text-sm focus:outline-none focus:border-orange/60 transition-colors duration-200 resize-none"
                      />
                    </div>
                  </div>

                  {/* Submit */}
                  <motion.button
                    type="submit"
                    disabled={submitting}
                    className="flex items-center justify-center gap-3 bg-orange text-white py-4 rounded-2xl font-bold text-base magnetic-btn shadow-xl glow-orange disabled:opacity-70 disabled:cursor-not-allowed"
                    whileHover={!submitting ? { scale: 1.02, y: -2 } : {}}
                    whileTap={!submitting ? { scale: 0.98 } : {}}
                    id="contact-submit-btn"
                  >
                    {submitting ? (
                      <>
                        <Loader2 size={20} className="animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={20} />
                        Send My Request
                      </>
                    )}
                  </motion.button>

                  <p className="text-white/30 text-xs text-center">
                    By submitting, you agree to receive calls from our counselors. Your data is safe with us.
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
