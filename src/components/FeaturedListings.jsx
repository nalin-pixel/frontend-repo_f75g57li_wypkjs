import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const API_BASE = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

function formatPrice(n) {
  return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(n)
}

function ListingCard({ item, i }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay: i * 0.05 }}
      className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur ring-1 ring-inset ring-white/5"
    >
      <div className="relative h-56">
        <img src={item.image} alt={item.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
        <div className="absolute bottom-3 left-3 inline-flex items-center rounded-full bg-black/50 px-3 py-1 text-xs text-white/90">
          {item.property_type}
        </div>
      </div>
      <div className="p-4">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-white font-semibold tracking-tight text-lg">{item.title}</h3>
          <div className="text-fuchsia-300 font-bold">{formatPrice(item.price)}</div>
        </div>
        <p className="mt-1 text-white/70 text-sm">{item.address}, {item.city}, {item.state}</p>
        <div className="mt-3 flex items-center gap-4 text-white/80 text-sm">
          <span>{item.beds} bd</span>
          <span>{item.baths} ba</span>
          <span>{item.sqft.toLocaleString()} sqft</span>
        </div>
        <div className="mt-4">
          <a href="#contact" className="inline-flex items-center rounded-lg border border-white/15 bg-white/5 px-3 py-2 text-sm font-semibold text-white/90 hover:bg-white/10">
            Inquire
          </a>
        </div>
      </div>
    </motion.div>
  )
}

export default function FeaturedListings() {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const run = async () => {
      try {
        const res = await fetch(`${API_BASE}/api/listings?featured=true`)
        const json = await res.json()
        setData(json)
      } catch (e) {
        console.error(e)
      } finally {
        setLoading(false)
      }
    }
    run()
  }, [])

  return (
    <section id="listings" className="relative py-20">
      <div className="absolute inset-0 bg-[radial-gradient(600px_200px_at_10%_20%,rgba(56,189,248,0.12),transparent),radial-gradient(400px_160px_at_90%_10%,rgba(217,70,239,0.12),transparent)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Featured Listings</h2>
          <p className="mt-2 text-white/70">Hand-picked properties with premium finishes.</p>
        </motion.div>
        {loading ? (
          <div className="mt-10 grid place-items-center text-white/70">Loading...</div>
        ) : (
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.map((item, i) => (
              <ListingCard key={item.id || i} item={item} i={i} />
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
