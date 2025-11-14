import Reveal from './Reveal'

const images = [
  'https://images.unsplash.com/photo-1519744346366-2f6fb0f0e16b?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1503342452485-86ff0a8bccc4?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1520975922284-7b683c7660c1?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1511052869515-c1b4768b9a16?q=80&w=1600&auto=format&fit=crop',
]

export default function Gallery() {
  return (
    <section id="gallery" className="relative py-24 bg-neutral-950 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight">Looks that land</h2>
        </Reveal>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {images.map((src, i) => (
            <Reveal key={i} delay={i * 0.04}>
              <div className="group relative overflow-hidden rounded-2xl">
                <img src={src} alt="look" className="h-80 w-full object-cover transition duration-700 group-hover:scale-105" />
                <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/10" />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
