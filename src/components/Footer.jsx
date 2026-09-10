import { motion } from 'framer-motion'
import {
  Mail, Phone, MapPin, Linkedin, Twitter, Instagram, Facebook, Youtube,
  ArrowRight, ChevronRight, MessageCircle
} from 'lucide-react'

const footerLinks = {
  Programs: [
    { label: 'Java Full Stack', href: '#programs' },
    { label: 'Python Full Stack', href: '#programs' },
    { label: 'Data Science', href: '#programs' },
    { label: 'AWS Cloud', href: '#programs' },
    { label: 'DevOps', href: '#programs' },
    { label: 'UI/UX Design', href: '#programs' },
  ],
  Services: [
    { label: 'IT Training', href: '#placement' },
    { label: 'Non-IT Training', href: '#placement' },
    { label: 'Placement Assistance', href: '#placement' },
    { label: 'Resume Building', href: '#placement' },
    { label: 'Mock Interviews', href: '#placement' },
    { label: 'Career Guidance', href: '#placement' },
  ],
  Company: [
    { label: 'About Us', href: '#why' },
    { label: 'Testimonials', href: '#contact' },
    { label: 'Job Openings', href: '#jobs' },
    { label: 'Contact', href: '#contact' },
  ],
}

const socials = [
  { icon: Linkedin, href: 'https://www.linkedin.com/in/vspark-solutions-731b45420/', label: 'LinkedIn' },
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Youtube, href: '#', label: 'YouTube' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Facebook, href: '#', label: 'Facebook' },
]

export default function Footer() {
  const scrollTo = (href) => {
    if (href.startsWith('http')) { window.open(href, '_blank'); return }
    const id = href.replace('#', '')
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="bg-navy relative overflow-hidden">
      <div className="h-px bg-gradient-to-r from-transparent via-orange/40 to-transparent" />

      {/* Newsletter / CTA Banner */}
      <div className="bg-gradient-to-r from-orange to-orange-dark py-12 px-4 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
          backgroundSize: '24px 24px'
        }} />
        <div className="relative max-w-4xl mx-auto flex flex-col sm:flex-row items-center gap-6 sm:gap-10">
          <div className="text-center sm:text-left flex-1">
            <h3 className="text-white font-black text-2xl sm:text-3xl mb-1">Ready to Transform Your Career?</h3>
            <p className="text-white/80 text-base">Join 5000+ students who chose VSPARK Solutions.</p>
          </div>
          <motion.button
            onClick={() => scrollTo('#contact')}
            className="flex items-center gap-2 bg-white text-orange px-8 py-4 rounded-2xl font-black text-base whitespace-nowrap shadow-xl hover:shadow-2xl transition-shadow"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            id="footer-cta-btn"
          >
            Enroll Today <ArrowRight size={18} />
          </motion.button>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            {/* Logo — object-contain, never crop */}
            <div className="flex items-center gap-3 mb-5">
              <div
                className="flex items-center justify-center flex-shrink-0"
                style={{ overflow: 'visible' }}
              >
                <img
                  src="/logo.png"
                  alt="VSPARK Solutions"
                  style={{ height: 60, width: 'auto', objectFit: 'contain', display: 'block' }}
                />
              </div>
              <div className="flex flex-col justify-center">
                <div className="text-white font-black text-xl leading-tight">VSPARK</div>
                <div className="text-white/50 text-xs tracking-widest uppercase">Solutions</div>
              </div>
            </div>

            <p className="text-white/55 text-sm leading-relaxed mb-2 max-w-xs">
              Hyderabad's premier training and placement institute in Ameerpet.
              Transforming careers with expert-led programs and guaranteed placement support.
            </p>
            <p className="text-orange/70 text-xs font-medium italic mb-6">"Your Career, Our Commitment"</p>

            {/* Contact Info */}
            <div className="flex flex-col gap-3 mb-6">
              <a
                href="tel:+917997679469"
                className="flex items-center gap-3 text-white/55 hover:text-orange transition-colors text-sm group"
              >
                <Phone size={15} className="text-orange/60 group-hover:text-orange transition-colors shrink-0" />
                +91 7997679469
              </a>
              <a
                href="https://wa.me/917997679469"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-white/55 hover:text-orange transition-colors text-sm group"
              >
                <MessageCircle size={15} className="text-orange/60 group-hover:text-orange transition-colors shrink-0" />
                WhatsApp: 7997679469
              </a>
              <div className="flex items-start gap-3 text-white/55 text-sm">
                <MapPin size={15} className="text-orange/60 shrink-0 mt-0.5" />
                Ameerpet, Hyderabad, Telangana
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex gap-2.5 flex-wrap">
              {socials.map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-xl glass border border-white/10 flex items-center justify-center text-white/50 hover:text-white hover:border-orange/30 transition-all duration-300"
                  whileHover={{ scale: 1.15, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Icon size={16} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([section, links]) => (
            <div key={section}>
              <h4 className="text-white font-bold text-sm mb-5 uppercase tracking-wider">{section}</h4>
              <ul className="flex flex-col gap-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <button
                      onClick={() => scrollTo(link.href)}
                      className="flex items-center gap-1.5 text-white/50 hover:text-orange text-sm transition-colors group"
                      id={`footer-link-${link.label.toLowerCase().replace(/\s+/g, '-')}`}
                    >
                      <ChevronRight size={13} className="opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all duration-200 text-orange" />
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="h-px bg-white/8 mt-14 mb-6" />
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm">
          <p className="text-white/40">
            © {new Date().getFullYear()} VSPARK Solutions, Ameerpet, Hyderabad. All rights reserved.
          </p>
          <div className="flex gap-5 flex-wrap justify-center">
            {['Privacy Policy', 'Terms of Service', 'Refund Policy'].map((item) => (
              <button key={item} className="text-white/40 hover:text-orange transition-colors">
                {item}
              </button>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
