import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-[90vh] overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/UngO8SNLfLcyPG7O/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/30 via-slate-950/60 to-slate-950 pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-36 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-white/80 backdrop-blur">
            <div className="h-2 w-2 rounded-full bg-fuchsia-400 animate-pulse" />
            Futuristic real estate experiences
          </div>
          <h1 className="mt-6 text-4xl sm:text-6xl font-extrabold tracking-tight bg-gradient-to-r from-blue-300 via-fuchsia-200 to-white bg-clip-text text-transparent">
            Find your next home with a modern, immersive touch
          </h1>
          <p className="mt-4 text-white/80 text-lg">
            Explore curated listings with smooth animations, elegant visuals, and a delightful browsing experience.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#listings" className="inline-flex items-center rounded-xl bg-gradient-to-r from-blue-500 to-fuchsia-500 px-5 py-3 font-semibold text-white shadow-lg shadow-blue-500/30 transition-transform hover:scale-[1.02]">
              Browse Listings
            </a>
            <a href="#contact" className="inline-flex items-center rounded-xl border border-white/15 bg-white/5 px-5 py-3 font-semibold text-white/90 backdrop-blur hover:bg-white/10">
              Get in Touch
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
