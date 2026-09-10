import { motion } from 'framer-motion'

export default function LoadingScreen() {
  return (
    <motion.div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-navy"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex flex-col items-center gap-8">
        {/* Animated Logo */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: 'spring', stiffness: 200, damping: 20, duration: 0.8 }}
          className="relative"
        >
          {/* Orbit Rings */}
          <motion.div
            className="absolute inset-[-20px] rounded-full border border-orange/20"
            animate={{ rotate: 360 }}
            transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
          />
          <motion.div
            className="absolute inset-[-36px] rounded-full border border-orange/10"
            animate={{ rotate: -360 }}
            transition={{ duration: 5, repeat: Infinity, ease: 'linear' }}
          />

          {/* Logo container — navy bg, contain, proper padding */}
          <div
            className="relative z-10 flex items-center justify-center animate-pulse-glow"
            style={{ overflow: 'visible' }}
          >
            <img
              src="/logo.png"
              alt="VSPARK Solutions"
              style={{
                height: 120,
                width: 'auto',
                objectFit: 'contain',
                display: 'block',
              }}
            />
          </div>
        </motion.div>

        {/* Brand Name */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="text-center"
        >
          <h1 className="text-2xl font-bold text-white tracking-widest uppercase">
            VSPARK <span className="text-orange">Solutions</span>
          </h1>
          <p className="text-white/50 text-sm mt-1 tracking-wider">Your Career, Our Commitment</p>
        </motion.div>

        {/* Progress Bar */}
        <motion.div className="w-48 h-[2px] bg-white/10 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-orange to-orange-light rounded-full"
            initial={{ width: '0%' }}
            animate={{ width: '100%' }}
            transition={{ duration: 1.8, ease: 'easeInOut' }}
          />
        </motion.div>
      </div>
    </motion.div>
  )
}
