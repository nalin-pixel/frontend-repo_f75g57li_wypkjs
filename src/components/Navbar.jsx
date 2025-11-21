import { useState } from 'react'
import { Menu, Home, Building2, Phone } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      setOpen(false)
    }
  }

  const LinkBtn = ({ id, children }) => (
    <button onClick={() => scrollTo(id)} className="text-white/90 hover:text-white transition-colors px-3 py-2 rounded-md">
      {children}
    </button>
  )

  return (
    <header className="fixed top-0 inset-x-0 z-40">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mt-4 backdrop-blur-md bg-slate-900/50 border border-white/10 rounded-2xl">
          <div className="flex items-center justify-between py-3 px-4">
            <div className="flex items-center gap-2">
              <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-blue-500 to-fuchsia-500 grid place-items-center shadow-lg shadow-blue-500/30">
                <Home className="h-5 w-5 text-white" />
              </div>
              <div className="font-semibold text-white tracking-tight">BlueGrid Realty</div>
            </div>
            <nav className="hidden md:flex items-center gap-2">
              <LinkBtn id="hero">Home</LinkBtn>
              <LinkBtn id="listings">Listings</LinkBtn>
              <LinkBtn id="contact">Contact</LinkBtn>
            </nav>
            <button className="md:hidden text-white/90" onClick={() => setOpen(!open)}>
              <Menu />
            </button>
          </div>
          {open && (
            <div className="md:hidden border-t border-white/10 px-4 pb-4 grid gap-2">
              <LinkBtn id="hero">Home</LinkBtn>
              <LinkBtn id="listings">Listings</LinkBtn>
              <LinkBtn id="contact">Contact</LinkBtn>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
