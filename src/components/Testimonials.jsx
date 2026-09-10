import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react'

const testimonials = [
  {
    id: 1,
    name: 'Arjun Sharma',
    role: 'Java Developer',
    company: 'TCS',
    rating: 5,
    text: 'VSPARK completely transformed my career. The Java Full Stack program was incredibly hands-on. I went from zero coding knowledge to landing a 6 LPA package at TCS in just 4 months. The placement support was exceptional!',
    initials: 'AS',
    bgColor: '#E84E00',
  },
  {
    id: 2,
    name: 'Priya Nair',
    role: 'Data Analyst',
    company: 'Infosys',
    rating: 5,
    text: 'The Data Science program at VSPARK is top-notch. Real projects, industry mentors, and unlimited mock interviews made all the difference. Got placed at Infosys with a 7 LPA package. Forever grateful to VSPARK!',
    initials: 'PN',
    bgColor: '#FF8C42',
  },
  {
    id: 3,
    name: 'Karthik Reddy',
    role: 'DevOps Engineer',
    company: 'Wipro',
    rating: 5,
    text: 'I was struggling to break into IT after my non-tech background. VSPARK\'s DevOps program gave me the perfect foundation. The career guidance team helped craft my resume and I cleared interviews in my very first attempt!',
    initials: 'KR',
    bgColor: '#E84E00',
  },
  {
    id: 4,
    name: 'Sneha Patel',
    role: 'Python Developer',
    company: 'Cognizant',
    rating: 5,
    text: 'Best training institute I have ever attended. The Python Full Stack course was comprehensive and the instructors were always available for doubts. Placed at Cognizant within 3 weeks of completing the course!',
    initials: 'SP',
    bgColor: '#FF8C42',
  },
  {
    id: 5,
    name: 'Rahul Menon',
    role: 'Cloud Architect',
    company: 'Accenture',
    rating: 5,
    text: 'VSPARK\'s AWS program prepared me for the real world. The hands-on labs, certification guidance, and placement team were outstanding. I secured a 9 LPA package at Accenture and couldn\'t be happier!',
    initials: 'RM',
    bgColor: '#E84E00',
  },
  {
    id: 6,
    name: 'Divya Krishnan',
    role: 'UI/UX Designer',
    company: 'HCL',
    rating: 5,
    text: 'The UI/UX program at VSPARK gave me both the design skills and the industry connections I needed. My portfolio looked amazing and I landed my dream job at HCL. The mentors are truly world-class!',
    initials: 'DK',
    bgColor: '#FF8C42',
  },
]

export default function Testimonials() {
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState(1)

  const next = () => {
    setDirection(1)
    setCurrent((c) => (c + 1) % testimonials.length)
  }

  const prev = () => {
    setDirection(-1)
    setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length)
  }

  const t = testimonials[current]

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
            Student Stories
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-navy leading-tight mb-4">
            What Our Students <span className="text-gradient-orange">Say</span>
          </h2>
          <p className="text-navy/60 text-lg max-w-xl mx-auto">
            Real stories from real students who transformed their careers with VSPARK.
          </p>
        </motion.div>

        {/* Testimonial Slider */}
        <div className="relative">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={current}
              custom={direction}
              initial={{ opacity: 0, x: direction * 80 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -direction * 80 }}
              transition={{ duration: 0.4, ease: 'easeInOut' }}
              className="bg-gradient-to-br from-navy to-navy-light rounded-3xl p-8 sm:p-12 relative overflow-hidden"
            >
              {/* Background glow */}
              <div
                className="absolute top-0 right-0 w-64 h-64 rounded-full opacity-10"
                style={{ background: `radial-gradient(circle, ${t.bgColor}, transparent)` }}
              />

              {/* Quote Icon */}
              <div className="absolute top-8 right-8 opacity-10">
                <Quote size={80} className="text-white" />
              </div>

              <div className="relative z-10">
                {/* Stars */}
                <div className="flex gap-1 mb-6">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} size={20} className="fill-orange text-orange" />
                  ))}
                </div>

                {/* Text */}
                <blockquote className="text-white text-lg sm:text-xl leading-relaxed font-medium mb-8 max-w-3xl">
                  "{t.text}"
                </blockquote>

                {/* Profile */}
                <div className="flex items-center gap-4">
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center text-white font-black text-lg shadow-lg"
                    style={{ background: `linear-gradient(135deg, ${t.bgColor}, ${t.bgColor}99)` }}
                  >
                    {t.initials}
                  </div>
                  <div>
                    <div className="text-white font-bold text-lg">{t.name}</div>
                    <div className="text-white/60 text-sm">{t.role} · {t.company}</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Controls */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <motion.button
              onClick={prev}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="w-12 h-12 rounded-2xl border-2 border-navy/15 hover:border-orange/40 flex items-center justify-center text-navy/60 hover:text-orange transition-all duration-300"
              id="testimonial-prev-btn"
            >
              <ChevronLeft size={20} />
            </motion.button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i) }}
                  className={`rounded-full transition-all duration-300 ${
                    i === current ? 'w-8 h-2.5 bg-orange' : 'w-2.5 h-2.5 bg-gray-200 hover:bg-orange/40'
                  }`}
                  id={`testimonial-dot-${i}`}
                />
              ))}
            </div>

            <motion.button
              onClick={next}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="w-12 h-12 rounded-2xl border-2 border-navy/15 hover:border-orange/40 flex items-center justify-center text-navy/60 hover:text-orange transition-all duration-300"
              id="testimonial-next-btn"
            >
              <ChevronRight size={20} />
            </motion.button>
          </div>
        </div>

        {/* Thumbnail Row */}
        <div className="flex justify-center gap-3 mt-8 flex-wrap">
          {testimonials.map((testimonial, i) => (
            <motion.button
              key={testimonial.id}
              onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i) }}
              whileHover={{ scale: 1.05 }}
              className={`flex items-center gap-2.5 px-4 py-2.5 rounded-xl border transition-all duration-300 ${
                i === current
                  ? 'border-orange/40 bg-orange/5 shadow-sm'
                  : 'border-gray-100 hover:border-orange/20'
              }`}
              id={`testimonial-thumb-${i}`}
            >
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center text-white text-xs font-bold shrink-0"
                style={{ background: `linear-gradient(135deg, ${testimonial.bgColor}, ${testimonial.bgColor}99)` }}
              >
                {testimonial.initials}
              </div>
              <div className="text-left">
                <div className="text-navy text-xs font-semibold">{testimonial.name}</div>
                <div className="text-navy/50 text-xs">{testimonial.company}</div>
              </div>
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  )
}
