import Navbar from './components/Navbar'
import Hero from './components/Hero'
import FeaturedListings from './components/FeaturedListings'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-slate-950">
      <div className="absolute inset-0 bg-[radial-gradient(1000px_500px_at_10%_-10%,rgba(56,189,248,0.2),transparent),radial-gradient(800px_400px_at_110%_-20%,rgba(217,70,239,0.18),transparent)]" />
      <Navbar />
      <main className="relative">
        <Hero />
        <FeaturedListings />
        <Contact />
        <footer className="py-10 text-center text-white/60">© {new Date().getFullYear()} BlueGrid Realty. All rights reserved.</footer>
      </main>
    </div>
  )
}

export default App
