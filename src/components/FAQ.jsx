import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, HelpCircle } from 'lucide-react'

const faqs = [
  {
    id: 1,
    question: 'What is the placement guarantee at VSPARK Solutions?',
    answer: 'VSPARK Solutions provides 100% placement assistance. We have a dedicated placement team that works with 150+ hiring partner companies. If you successfully complete your training program and follow our placement process, we guarantee continued support until you secure a job.',
  },
  {
    id: 2,
    question: 'Are the courses available online and offline?',
    answer: 'Yes! All our programs are available in both online and offline modes. You can attend live online sessions from anywhere in India, or visit our training center for in-person learning. Both modes offer the same curriculum, mentorship, and placement support.',
  },
  {
    id: 3,
    question: 'What is the duration of the training programs?',
    answer: 'Program durations vary by course: Java/Python Full Stack (4 months), Data Science (5 months), AWS/DevOps/Testing/UI-UX (3 months), Digital Marketing (2 months). All programs include live project training and placement support beyond the course duration.',
  },
  {
    id: 4,
    question: 'Do I need prior coding knowledge to enroll?',
    answer: 'No prior coding experience is required for most programs! Our courses are designed from the ground up to take you from beginner to industry-ready professional. Our expert instructors ensure everyone progresses at the right pace.',
  },
  {
    id: 5,
    question: 'How many companies will I get interview opportunities with?',
    answer: 'VSPARK has tie-ups with 150+ companies across IT and Non-IT sectors including TCS, Infosys, Wipro, HCL, Cognizant, Accenture, IBM, and many more. We conduct regular placement drives and job fairs exclusively for our students.',
  },
  {
    id: 6,
    question: 'What certificates will I receive after completing the course?',
    answer: 'You will receive a VSPARK Solutions Course Completion Certificate that is recognized by our 150+ hiring partners. Additionally, we provide guidance for globally-recognized certifications like AWS Certified, Google Cloud, and Microsoft Azure based on your program.',
  },
  {
    id: 7,
    question: 'What is the fee structure and do you offer EMI?',
    answer: 'Our fee structure is competitive and varies by program. We offer flexible EMI options to make quality education accessible to everyone. Contact our counselors for detailed fee information and current offers. We also provide scholarships based on merit.',
  },
  {
    id: 8,
    question: 'How soon can I expect a job after completing the program?',
    answer: 'Most of our students secure placements within 4–8 weeks of program completion. With strong fundamentals, live project experience, and our placement support, many students receive offers even before their course ends! Results vary by individual effort and market conditions.',
  },
]

function FAQItem({ faq, isOpen, onToggle }) {
  return (
    <div
      className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
        isOpen ? 'border-orange/30 shadow-lg shadow-orange/5' : 'border-gray-100 hover:border-orange/15'
      }`}
    >
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 p-6 text-left group"
        id={`faq-toggle-${faq.id}`}
      >
        <div className="flex items-start gap-4">
          <div
            className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 mt-0.5 transition-all duration-300 ${
              isOpen ? 'bg-orange text-white' : 'bg-orange/10 text-orange'
            }`}
          >
            <HelpCircle size={16} />
          </div>
          <span className={`font-semibold text-base transition-colors duration-300 ${isOpen ? 'text-orange' : 'text-navy group-hover:text-orange'}`}>
            {faq.question}
          </span>
        </div>

        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className={`shrink-0 transition-colors duration-300 ${isOpen ? 'text-orange' : 'text-navy/40'}`}
        >
          <ChevronDown size={20} />
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            <div className="px-6 pb-6 pl-[72px] text-navy/65 text-sm leading-relaxed">
              {faq.answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function FAQ() {
  const [openId, setOpenId] = useState(1)

  return (
    <section className="section-padding bg-gradient-section">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-flex items-center gap-2 bg-orange/8 border border-orange/20 rounded-full px-4 py-2 text-orange text-sm font-semibold mb-4">
            Got Questions?
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-navy leading-tight mb-4">
            Frequently Asked <span className="text-gradient-orange">Questions</span>
          </h2>
          <p className="text-navy/60 text-lg max-w-xl mx-auto">
            Everything you need to know before starting your journey with VSPARK.
          </p>
        </motion.div>

        {/* FAQ List */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-col gap-3 bg-white rounded-3xl p-4 sm:p-6 shadow-sm border border-gray-100"
        >
          {faqs.map((faq, i) => (
            <motion.div
              key={faq.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
            >
              <FAQItem
                faq={faq}
                isOpen={openId === faq.id}
                onToggle={() => setOpenId(openId === faq.id ? null : faq.id)}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-10"
        >
          <p className="text-navy/60 mb-4">Still have questions? We're here to help.</p>
          <motion.button
            onClick={() => {
              const el = document.getElementById('contact')
              if (el) el.scrollIntoView({ behavior: 'smooth' })
            }}
            className="inline-flex items-center gap-2 bg-orange text-white px-8 py-4 rounded-2xl font-bold magnetic-btn shadow-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            id="faq-contact-btn"
          >
            Talk to a Counselor
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
