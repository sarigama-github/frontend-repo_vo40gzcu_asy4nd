import Reveal from './Reveal'

export default function CTA() {
  return (
    <section id="cta" className="relative py-28 bg-neutral-950 text-white">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
        <Reveal>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight">Be first to shop with signal</h2>
          <p className="mt-6 text-white/70">Join the Pylex early access to help shape a new way to discover, try, and shop. Focused, fast, and built for people with taste.</p>
          <form onSubmit={(e)=>e.preventDefault()} className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            <input required type="email" placeholder="you@domain.com" className="w-full sm:w-80 px-4 py-3 rounded-full bg-white/5 border border-white/10 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-white/20" />
            <button className="inline-flex items-center justify-center rounded-full bg-white text-neutral-950 px-6 py-3 text-sm font-semibold hover:bg-white/90 transition">Request invite</button>
          </form>
          <p className="mt-4 text-xs text-white/50">Private beta. Limited seats.</p>
        </Reveal>
      </div>
    </section>
  )
}
