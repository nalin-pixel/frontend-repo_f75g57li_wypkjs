import { useState } from 'react'
import { motion } from 'framer-motion'

const API_BASE = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

export default function Contact() {
  const [status, setStatus] = useState('idle')

  async function submit(e) {
    e.preventDefault()
    setStatus('loading')
    const form = new FormData(e.currentTarget)
    const payload = Object.fromEntries(form.entries())

    try {
      const res = await fetch(`${API_BASE}/api/inquiries`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
      const data = await res.json()
      if (data.status === 'ok') setStatus('success')
      else setStatus('error')
    } catch (e) {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="relative py-24">
      <div className="absolute inset-0 bg-[radial-gradient(400px_160px_at_80%_80%,rgba(59,130,246,0.15),transparent)]" />
      <div className="relative mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-10 items-center">
        <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
          <h3 className="text-3xl font-bold text-white">Let’s talk</h3>
          <p className="mt-3 text-white/70">Have a question about a property or want to schedule a viewing? Send us a message and our team will reach out shortly.</p>
          <ul className="mt-6 space-y-2 text-white/80">
            <li>• Premium properties across major cities</li>
            <li>• Friendly, expert agents</li>
            <li>• Fast responses</li>
          </ul>
        </motion.div>
        <motion.form onSubmit={submit} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="text-white/80 text-sm">Name</label>
              <input name="name" required className="mt-1 w-full rounded-lg border border-white/10 bg-white/10 px-3 py-2 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Jane Doe" />
            </div>
            <div>
              <label className="text-white/80 text-sm">Email</label>
              <input type="email" name="email" required className="mt-1 w-full rounded-lg border border-white/10 bg-white/10 px-3 py-2 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-fuchsia-500" placeholder="jane@example.com" />
            </div>
          </div>
          <div className="mt-4">
            <label className="text-white/80 text-sm">Message</label>
            <textarea name="message" rows="4" required className="mt-1 w-full rounded-lg border border-white/10 bg-white/10 px-3 py-2 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="I’d like to know more about..." />
          </div>
          <div className="mt-6 flex items-center gap-3">
            <button disabled={status==='loading'} className="inline-flex items-center rounded-xl bg-gradient-to-r from-blue-500 to-fuchsia-500 px-5 py-3 font-semibold text-white shadow-lg shadow-blue-500/30 disabled:opacity-60">
              {status === 'loading' ? 'Sending...' : 'Send Message'}
            </button>
            {status === 'success' && <span className="text-emerald-300">Thanks! We’ll be in touch.</span>}
            {status === 'error' && <span className="text-red-300">Something went wrong.</span>}
          </div>
        </motion.form>
      </div>
    </section>
  )
}
