import Reveal from './Reveal'

export default function Social() {
  return (
    <section id="social" className="relative py-24 bg-neutral-950 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="aspect-[16/10] w-full overflow-hidden rounded-2xl border border-white/10 bg-neutral-900 p-6">
                <div className="h-full w-full grid grid-cols-3 gap-3">
                  {[1,2,3,4,5,6,7,8,9].map((i) => (
                    <div key={i} className="rounded-xl bg-white/5 ring-1 ring-inset ring-white/10" />
                  ))}
                </div>
              </div>
              <div className="absolute -inset-x-6 -bottom-6 blur-2xl h-40 bg-gradient-to-r from-cyan-500/30 via-blue-500/30 to-purple-500/30" />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight">A quieter social layer</h2>
              <p className="mt-6 text-white/70 max-w-xl">See what close friends are short‑listing, not what influencers are pushing. Simple reactions, private threads, and combined carts for aligned decisions.</p>
              <ul className="mt-6 space-y-3 text-white/80">
                <li>• Instagram‑style feed shaped by your circle</li>
                <li>• One‑tap reactions and context</li>
                <li>• Chat built around products and looks</li>
                <li>• Shared carts with split payments</li>
              </ul>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
