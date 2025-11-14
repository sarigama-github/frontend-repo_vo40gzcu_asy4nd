import { motion } from 'framer-motion'
import Reveal from './Reveal'

export default function Hero() {
  return (
    <section className="relative pt-28 pb-24 overflow-hidden bg-neutral-950 text-white">
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 h-[700px] w-[700px] rounded-full blur-3xl opacity-20 bg-gradient-to-tr from-indigo-500/60 via-fuchsia-500/40 to-cyan-400/40" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        <Reveal>
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            Live social shopping. Private by design.
          </div>
        </Reveal>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.2, 0.8, 0.2, 1] }}
          className="mt-6 text-5xl sm:text-6xl md:text-7xl font-semibold tracking-tight leading-[1.05]"
        >
          The wardrobe that thinks with you.
        </motion.h1>

        <Reveal delay={0.1}>
          <p className="mt-6 max-w-2xl text-lg text-white/70">
            Pylex is a refined shopping experience built on the world’s catalog. Seamless curation, cinematic product views, and a virtual try‑on that feels real. Designed for focus. Made for discovery.
          </p>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="mt-10 flex flex-col sm:flex-row gap-3">
            <a href="#cta" className="inline-flex items-center justify-center rounded-full bg-white text-neutral-950 px-6 py-3 text-sm font-semibold hover:bg-white/90 transition">Get early access</a>
            <a href="#gallery" className="inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white/90 hover:bg-white/5 transition">Explore styles</a>
          </div>
        </Reveal>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.1, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="mt-16 relative rounded-2xl border border-white/10 bg-gradient-to-b from-white/10 to-white/0 p-2"
        >
          <div className="aspect-[16/9] w-full overflow-hidden rounded-xl bg-neutral-900 ring-1 ring-inset ring-white/10">
            <div className="h-full w-full bg-[radial-gradient(1000px_300px_at_50%_-10%,rgba(255,255,255,0.15),transparent)]">
              <div className="h-full w-full grid md:grid-cols-3 gap-px">
                <div className="p-8 flex flex-col justify-between">
                  <div>
                    <p className="text-sm text-white/70">Precision search</p>
                    <h3 className="mt-2 text-2xl font-semibold">Amazon scale. Pylex taste.</h3>
                    <p className="mt-2 text-white/60">We surface the right pieces—colors, cuts, and sizes that actually fit your world.</p>
                  </div>
                  <img src="https://images.unsplash.com/photo-1714650601435-67a4d51a0798?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxyYWNrfGVufDB8MHx8fDE3NjMxNDEwMTF8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" alt="rack" className="rounded-lg object-cover h-40 w-full" />
                </div>
                <div className="p-8 flex flex-col justify-between">
                  <div>
                    <p className="text-sm text-white/70">Ultra‑real try‑on</p>
                    <h3 className="mt-2 text-2xl font-semibold">See it on you.</h3>
                    <p className="mt-2 text-white/60">True‑to‑fabric simulation and lighting for confident decisions.</p>
                  </div>
                  <img src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&w=1600&auto=format&fit=crop" alt="mirror" className="rounded-lg object-cover h-40 w-full" />
                </div>
                <div className="p-8 flex flex-col justify-between">
                  <div>
                    <p className="text-sm text-white/70">Social signals</p>
                    <h3 className="mt-2 text-2xl font-semibold">Taste from people you trust.</h3>
                    <p className="mt-2 text-white/60">Quiet, Instagram‑style recommendations from friends—not influencers.</p>
                  </div>
                  <img src="https://images.unsplash.com/photo-1569466593977-94ee7ed02ec9?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxmZWVkfGVufDB8MHx8fDE3NjMxNDEwMTJ8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" alt="feed" className="rounded-lg object-cover h-40 w-full" />
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
