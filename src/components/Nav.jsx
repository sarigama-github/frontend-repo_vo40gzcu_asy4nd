import { Menu, Search, ShoppingBag, User } from 'lucide-react'

export default function Nav() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-xl bg-neutral-950/40 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img src="/favicon.svg" alt="Pylex" className="h-7 w-7" />
          <span className="text-white/90 tracking-tight font-semibold text-lg">Pylex</span>
        </div>
        <nav className="hidden md:flex items-center gap-8 text-sm text-white/70">
          <a className="hover:text-white transition-colors" href="#features">Features</a>
          <a className="hover:text-white transition-colors" href="#tryon">Virtual Try‑On</a>
          <a className="hover:text-white transition-colors" href="#social">Social</a>
          <a className="hover:text-white transition-colors" href="#gallery">Showcase</a>
          <a className="hover:text-white transition-colors" href="#cta">Join</a>
        </nav>
        <div className="flex items-center gap-3">
          <button className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 text-white/80 hover:bg-white/10 transition">
            <Search className="h-4 w-4" />
            <span className="hidden md:inline">Search</span>
          </button>
          <button className="p-2 rounded-full bg-white/5 text-white/80 hover:bg-white/10 transition"><ShoppingBag className="h-5 w-5" /></button>
          <button className="p-2 rounded-full bg-white/5 text-white/80 hover:bg-white/10 transition md:hidden"><Menu className="h-5 w-5" /></button>
          <button className="hidden md:inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 text-white/80 hover:bg-white/10 transition">
            <User className="h-4 w-4" />
            <span>Account</span>
          </button>
        </div>
      </div>
    </header>
  )
}
