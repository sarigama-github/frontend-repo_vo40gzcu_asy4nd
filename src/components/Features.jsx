import Reveal from './Reveal'
import { Sparkles, Camera, Users2, ShoppingCart } from 'lucide-react'

const features = [
  {
    icon: Sparkles,
    title: 'Curated at scale',
    desc: 'We index the global catalog and refine it with aesthetic ranking so you see fewer items and better choices.'
  },
  {
    icon: Camera,
    title: 'Virtual try‑on',
    desc: 'Photoreal garment fit with size guidance. Lighting‑aware previews build trust before you buy.'
  },
  {
    icon: Users2,
    title: 'Friends, not followers',
    desc: 'Private circles share looks and favorites. Your feed adapts to people who know your style.'
  },
  {
    icon: ShoppingCart,
    title: 'Collaborative carts',
    desc: 'Chat and assemble carts together. Split payments and coordinate outfits seamlessly.'
  },
]

export default function Features() {
  return (
    <section id="features" className="relative py-24 bg-neutral-950 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight">Shopping, reimagined</h2>
        </Reveal>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <Reveal key={f.title} delay={i * 0.05}>
              <div className="group rounded-2xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 transition">
                <f.icon className="h-6 w-6 text-white/80 group-hover:text-white" />
                <h3 className="mt-4 text-lg font-semibold">{f.title}</h3>
                <p className="mt-2 text-sm text-white/70">{f.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
