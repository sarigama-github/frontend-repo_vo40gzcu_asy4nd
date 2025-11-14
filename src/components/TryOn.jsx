import Reveal from './Reveal'

export default function TryOn() {
  return (
    <section id="tryon" className="relative py-24 bg-neutral-950 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight">Try before you buy—virtually</h2>
              <p className="mt-6 text-white/70 max-w-xl">Upload a few angles or use live camera. Our try‑on renders fabric, drape, and lighting with precision. Size guidance helps you pick the right fit the first time.</p>
              <div className="mt-8 flex gap-3">
                <button className="inline-flex items-center justify-center rounded-full bg-white text-neutral-950 px-6 py-3 text-sm font-semibold hover:bg-white/90 transition">Open demo</button>
                <a href="#cta" className="inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white/90 hover:bg-white/5 transition">Join the beta</a>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/5] w-full overflow-hidden rounded-2xl border border-white/10 bg-neutral-900">
                <img src="https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1600&auto=format&fit=crop" alt="tryon" className="h-full w-full object-cover opacity-90" />
              </div>
              <div className="absolute -inset-x-6 -bottom-6 blur-2xl h-40 bg-gradient-to-r from-indigo-500/40 via-fuchsia-500/30 to-cyan-400/30" />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
