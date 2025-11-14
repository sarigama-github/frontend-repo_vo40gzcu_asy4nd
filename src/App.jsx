import Nav from './components/Nav'
import Hero from './components/Hero'
import Features from './components/Features'
import TryOn from './components/TryOn'
import Social from './components/Social'
import Gallery from './components/Gallery'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-neutral-950">
      <Nav />
      <Hero />
      <Features />
      <TryOn />
      <Social />
      <Gallery />
      <CTA />
      <footer className="py-12 border-t border-white/10 bg-neutral-950/80 text-white/60">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <img src="/favicon.svg" alt="Pylex" className="h-6 w-6" />
            <span className="text-white/80 font-medium">Pylex</span>
          </div>
          <p className="text-sm">Crafted for modern wardrobes. © {new Date().getFullYear()}</p>
        </div>
      </footer>
    </div>
  )
}

export default App
